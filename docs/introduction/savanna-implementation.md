---
id: savanna-implementation
title: "Savanna Implementation Deep Dive"
sidebar_label: Savanna Implementation
slug: /introduction/savanna-implementation
description: Implementation details of Savanna consensus - fork database, vote threading, IBC implications, and Wire Network differences
---

> **Credit**: This content is based on research and documentation by [Kevin Heifner](https://github.com/heifner), principal architect of the Savanna consensus implementation.

## Overview

This article covers the implementation details of Savanna consensus. For the conceptual overview, BFT fundamentals, voting mechanics, and the 2-chain finality rule, see [What is Savanna](/docs/introduction/savanna-consensus).

## 1. Core Architecture

### 1.1. The Finality Core (Spring / wire-sysio)

The consensus logic in Spring lives primarily in `libraries/chain/` under the `finality/` subdirectory. Key files include:

| File | Responsibility |
|---|---|
| finality_core.hpp/.cpp | Core finality state: tracks `high_qc`, `b_finality_violation`, 2-chain rule, LIB advancement |
| finalizer.hpp/.cpp | Per-finalizer vote logic: safety checks, vote type determination, BLS signing |
| finalizer_policy.hpp | Data structures: `finalizer_authority`, `finalizer_policy`, policy transitions |
| qc_chain.hpp/.cpp | QC aggregation: collects incoming votes, aggregates BLS signatures, produces QCs |
| vote_message.hpp | Network message: signed vote broadcast by finalizer nodes |

### 1.2. Vote Threading Model

Savanna introduces a dedicated thread pool for vote processing, controlled by `vote-threads` in `config.ini` (recommended: 4 for BP nodes). This is critical for performance: incoming vote messages from peers must be validated (BLS verification), accumulated, and then potentially trigger QC formation — all without blocking the main block processing pipeline.

```cpp
// vote-threads = 4  in config.ini
// Each thread handles vote verification and accumulation
// The main controller thread handles block application
// After quorum, vote thread posts QC back to controller

// In plugin_impl (net_plugin.cpp) -- from wire-sysio:
void process_vote_message(const vote_message& msg) {
    // 1. Verify BLS signature (~1.1ms)
    if (!verify_bls_vote(msg)) return;
    // 2. Accumulate into pending QC for msg.block_id
    auto qc = vote_accumulator.add_vote(msg);
    // 3. If quorum reached, post QC to controller
    if (qc.has_value()) post_qc_to_controller(*qc);
}
```

### 1.3. Block Header Extension: `instant_finality_extension`

Every Savanna block carries an `instant_finality_extension` in its block header extensions. This is how QCs propagate: when a proposer receives enough votes to form a QC for the previous block, it includes that QC in the next block's header. Any node receiving the block can immediately verify the QC and advance its view of finality.

```cpp
// Antelope Spring: finality data carried as a block header extension
// (required for backward compatibility with existing block format)
// In wire-sysio this data is a native field of the block structure itself
struct instant_finality_extension : public fc::reflect_init {
    std::optional<quorum_certificate>   qc;        // QC on parent block
    std::optional<finalizer_policy>     new_finalizer_policy;  // policy change
    std::optional<proposer_policy>      new_proposer_policy;   // BP schedule change
    qc_claim_t                          last_qc_claim;  // pointer to highest known QC
};
```

### 1.4. Finality Digest and Merkle Proofs

Savanna introduces a **finality digest** — a Merkle root over a sequence of *block references* (block_id, parent_id, timestamp) from the LIB up to the current block. This `reversible_blocks_root` allows construction of cryptographic proofs that a specific block is in the finalized chain, which is the foundation for trustless IBC and state proofs.

```cpp
// The finality digest commits to the reversible block history
// reversible_blocks_root = Merkle(block_ref₀, ..., block_refₙ)
// This root is included in the finality digest of each block
// enabling compact inclusion proofs for IBC
```

### 1.5. Fork Database & Chain Selection

The `fork_database` is the in-memory store that tracks all known chain tips and determines which chain a node considers "best" — the one it will attempt to extend next. Under Savanna, the selection criterion is radically different from the legacy rule.

The multi-index container inside `fork_database_impl` maintains a `by_best_branch` index whose comparator is the entire definition of "best chain." The two versions side by side:

```cpp
// ── Savanna (block_state) ────────────────────────────────────────────────────
// Primary:   latest_qc_block_timestamp  DESC  → most-recently-QC'd chain wins
// Secondary: timestamp                  DESC  → most recent block, if QC tied
// Tertiary:  block_id                   DESC  → deterministic hash tiebreak
using by_best_branch_if_t = ordered_unique<
   tag<by_best_branch>,
   composite_key<block_state,
      const_mem_fun<block_state, block_timestamp_type, &block_state::latest_qc_block_timestamp>,
      const_mem_fun<block_state, block_timestamp_type, &block_state::timestamp>,
      const_mem_fun<block_state, const block_id_type&, &block_state::id>>,
   composite_key_compare<std::greater<block_timestamp_type>,
                          std::greater<block_timestamp_type>,
                          std::greater<block_id_type>>>;

// ── Legacy DPoS (block_state_legacy) ────────────────────────────────────────
// Primary:   irreversible_blocknum  DESC  → chain with most LIB wins
// Secondary: block_num              DESC  → longest chain, if LIB tied
// Tertiary:  block_id               DESC  → deterministic tiebreak
using by_best_branch_legacy_t = ordered_unique<
   tag<by_best_branch>,
   composite_key<block_state_legacy,
      const_mem_fun<block_state_legacy, uint32_t, &block_state_legacy::irreversible_blocknum>,
      const_mem_fun<block_state_legacy, uint32_t, &block_state_legacy::block_num>,
      const_mem_fun<block_state_legacy, const block_id_type&, &block_state_legacy::id>>,
   composite_key_compare<std::greater<uint32_t>,
                          std::greater<uint32_t>,
                          std::greater<block_id_type>>>;
```

#### Why lqcTs is the Primary Key

Under legacy DPoS, the fork choice rule is identical to Nakamoto-style "longest chain wins" (modulo the LIB refinement). A fork with more blocks always beats one with fewer, regardless of how recently either chain was confirmed by BPs. This is safe under DPoS's asynchronous finality model but meaningless under Savanna where a 1-second QC is a hard cryptographic proof of agreement.

Under Savanna, the primary key is `latest_qc_block_timestamp` — the timestamp of the most recent block that has a valid QC embedded in the chain leading up to the current tip. This has a precise meaning in the safety model: a chain with a higher `lqcTs` has more recently demonstrated a two-thirds supermajority agreement. Preferring that chain means honest nodes naturally converge to the branch where the most finalizers have locked in. A longer chain with a *stale* QC is explicitly disfavoured.

The secondary key is `timestamp` — the block's slot timestamp. Block timestamps in Antelope/Wire are not wall-clock times; they are deterministic slot identifiers spaced exactly 500ms apart. A block at slot *N* always has the same timestamp regardless of when within that slot the BP actually produced it. Among tips with identical `lqcTs` values, a higher timestamp simply means the chain has advanced to a later slot — it has more blocks built on top of the same finalized base. The node prefers the chain that has made more progress, which is the natural extension of the "most certified" primary criterion.

The tertiary key is `block_id`, the block hash. This is a purely deterministic tiebreak to ensure all nodes with the same view of the fork database agree on the same best tip, preventing non-deterministic divergence when two tips are otherwise equal.

#### Interaction with the Finalizer Voting Rules

The fork selection rule and the finalizer voting rules are designed to be consistent. When an honest node's fork database switches its best branch — because a new block arrives with a higher `latest_qc_block_timestamp` — that is exactly the event that may trigger a branch switch in the finalizer. Before the finalizer votes on the new branch, it records `other_branch_latest_time = fsi.last_vote.timestamp`. This prevents the finalizer from immediately issuing a strong vote on the new branch until the new branch's QC has "caught up" past the switch point, which is the R4 condition B∧C in the voting logic.

The result is a self-consistent system: the fork database tells the node *which chain to extend*, and the finalizer safety rules tell it *how strongly to endorse it*. A chain cannot win the fork choice race without eventually accumulating enough strong votes to form a strong QC, which in turn advances its `lqcTs` to further solidify its lead in the fork database.

#### Fork Switch Detection

Every time a block is inserted via `add_impl`, the method returns a `fork_db_add_t` value describing what happened to the chain head:

```cpp
enum class fork_db_add_t {
    duplicate,          // block already present, ignored
    appended_to_head,   // new block extends current head directly
    fork_switch,        // new block IS new head but parent ≠ old head → reorg
    added,              // block added but did not become new head
};
```

The fork switch condition is precise: the new block becomes the `by_best_branch` index front (the new head), but its `previous()` is not the old head. This means a chain reorganisation is required. The caller — `controller` — uses the `fork_switch` return value to trigger `fetch_branch_from`, which walks both tips back through the index until their `previous()` values match, finding the common ancestor. The blocks on the old branch are unapplied and the blocks on the new branch are applied in order. Because the fork choice primary key is `latest_qc_block_timestamp`, a fork switch can only happen when the incoming chain has a more recent QC — there is no way for a longer-but-less-certified chain to trigger a reorg under Savanna's rules.

#### Pending LIB from QC Carrier

The most subtle part of `add_impl` is how `pending_savanna_lib_id` is advanced. When a new `block_state_ptr` is added and its embedded QC claim is strong, the code immediately advances the pending LIB — *before* the block itself is validated:

```cpp
if constexpr (std::is_same_v<BSP, block_state_ptr>) {
   auto qc_claim = n->extract_qc_claim();
   if (qc_claim.is_strong_qc) {
      block_num_type current_lib = block_header::num_from_id(pending_savanna_lib_id);
      if (qc_claim.block_num > current_lib) {
         // claim has already been verified, update LIB even if unable to verify block.
         // The block is just acting as a network message / carrier for this data.
         // It doesn't matter if the block is actually valid or forked out.
         if (auto claimed = search_on_branch_impl(n->previous(), qc_claim.block_num, include_root_t::no)) {
            auto& ref = claimed->core.get_block_reference(claimed->core.latest_qc_claim().block_num);
            set_pending_savanna_lib_id_impl(ref.block_id);
         }
      }
   }
}
```

This is safe because the QC claim has already been verified cryptographically (BLS signature checked) before `add_impl` is called. A valid strong QC is a proof that two-thirds of the finalizer set voted for that block — that proof is independent of whether the block carrying it is itself the best tip, or even a valid block at all. The carrier block might later be found invalid or forked out; the QC information it transported is still genuine. `pending_savanna_lib_id` only ever moves forward (the `set_pending_savanna_lib_id_impl` guard: `new_lib > old_lib`), so an invalid carrier can advance LIB at most once and cannot retract it.

#### Root Advancement and Branch Pruning

When `pending_savanna_lib_id` is confirmed and the pending LIB block becomes the new tree root, `advance_root_impl` runs a two-phase pruning pass. First, it walks backward from the new root to the old root, collecting block IDs into a removal queue. Then it erases the new root from the index *individually* — without cascading — because the new root's children must stay in the index. All ancestor blocks are then removed via `remove_impl`, which cascades breadth-first through `by_prev` to also eliminate any orphaned branches that were attached to those ancestors.

One implementation detail worth noting: the block state object for the old blocks is never mutated. The comment in the code is explicit — other parts of the system may hold shared pointers to these block states and access them asynchronously (e.g., the read-only transaction thread pool), so clearing the `block` shared pointer or other fields would introduce a data race. The fork database simply removes its own index entry and lets reference counting handle deallocation.

#### Dual Fork Database and the Legacy Transition

During the Savanna activation window a node may need to maintain two fork databases simultaneously — one tracking the legacy DPoS chain and one tracking the emerging Savanna chain. The `fork_database` outer class manages this with an `in_use` atomic flag:

```
enum class in_use_t { legacy, both, savanna };
```

The transition path is `legacy` → `both` → `savanna`, driven by `switch_from_legacy`. When the Savanna activation block is first seen, `fork_db_s` is reset to that block as root while `fork_db_l` remains active — state is `both`. Once the legacy fork database is no longer needed, the state moves to `savanna`. The legacy `fork_db_l` is never explicitly deleted at transition time: threads may be blocked on its mutex or holding references to its block states, so it persists until process exit.

The persistent file format encodes this state. Version 1 files contain only a legacy fork database. Version 3 files (Spring 1.0.1+) contain an `in_use` tag followed by zero, one, or two fork databases depending on which were active. Version 2 (Spring 1.0.0) is explicitly rejected by the parser — the comment states it is "unsupported by Spring 1.0.1 and above" — so an operator upgrading from Spring 1.0.0 must let the node rebuild its fork database from scratch rather than reading a v2 file.

#### pending_savanna_lib_id

The `pending_savanna_lib_id` field is strictly monotone-increasing: `set_pending_savanna_lib_id_impl` only writes a new value when its block number exceeds the current one. This makes it safe to call from multiple code paths — the QC carrier path in `add_impl`, the direct `set_pending_savanna_lib_id` call from `finality_core`, and any future path — without risk of LIB regressing. At persistence time the field is written as the first entry in the serialised fork database so that on reload, LIB state is restored before any block entries are processed.

### 1.6. Wire Network Differences

Wire Network will be launching as a new chain rather than a protocol upgrade to an existing one. This is a meaningful distinction: there was no legacy block format to remain compatible with, no pre-Savanna history on-chain, and no existing Node Operators running software that couldn't handle a clean block structure. As a result, Wire could integrate Savanna's finality data directly into the block format as a first-class field rather than shoe-horning it into an extension mechanism. This makes the block structure simpler, more readable, and avoids the overhead and parsing complexity of the extension indirection that Spring requires for backward compatibility with EOS.

Beyond that structural difference, `wire-sysio` diverges from Antelope Spring in several additional areas reflecting Wire's independent evolution from the fork point:

| Area | Antelope Spring | wire-sysio |
|---|---|---|
| Finality data placement | Carried as an `instant_finality_extension` block header extension — required for backward compatibility with the existing block format | Finality data is a native first-class field of the block structure; no extension mechanism needed |
| System contract actions | `regfinkey` / `actfinkey` / `switchtosvnn` on the `eosio` system contract | Same action pattern but on the `sysio` system contract |
| Net plugin / P2P | Spring's `net_plugin.cpp` with original notice/request message protocol | Wire [PR #205](https://github.com/Wire-Network/wire-sysio/pull/205) replaces the notice/request protocol with new message types; a significant P2P overhaul ongoing at fork time |
| CDT host functions | BLS host functions exposed via `wire-cdt` (Antelope CDT fork) | Wire CDT (`wire-cdt`) carries the same BLS intrinsics; additional cryptographic host functions under review in [PR #33](https://github.com/Wire-Network/wire-cdt/pull/33) |
| Safety file path | `<data-dir>/finalizers/safety.dat` | Same path and format; the `finalizer-dir` config option allows overriding the directory |

For the most part the core finality state machine — `finality_core`, `finalizer`, `finalizer_policy`, QC aggregation, BLS key registration, and `vote-threads` configuration — is functionally identical between the two codebases at the time of the Spring v1.0 fork.

## 2. IBC & Cross-Chain Implications

Savanna's 1-second finality makes cross-chain communication between Antelope chains significantly more practical. A finality proof — the aggregate BLS QC, a Merkle inclusion path over the reversible_blocks_root, and an action Merkle proof — can be submitted to a verifier contract on a destination chain. Because the CDT exposes BLS host functions, that contract can cryptographically validate the entire proof that a specific action was finalized on the source chain, enabling trust-minimized cross-chain messaging and asset bridging.

![IBC Flow with Savanna Finality Proofs](/img/savanna-ibc-flow.svg)

## 3. Future Directions

### 3.1. Full Decoupling of Proposers and Finalizers

Spring v1.0 sets the architectural stage for separating proposer and finalizer roles into distinct node types. Currently all 21 BPs serve as both proposers and finalizers. A future upgrade could allow:

- **N proposers** (potentially a different set than today's 21 BPs, focused on throughput).

- **M finalizers** (a potentially larger, lighter-weight set focused on signing speed).

- Because QC size is O(1) regardless of finalizer set size, increasing M does not harm performance.

### 3.2. ZK Proofs and Confidential Transactions

BLS12-381 is a pairing-friendly curve that is well-suited for use as the inner curve in **Groth16** and **PLONK** ZK proof systems. By exposing BLS operations as host functions and building the finality system on this curve, Spring lays the groundwork for ZK-based applications, including private transactions and compact validity proofs for cross-chain communication.

### 3.3. Academic Publication

The Savanna team has referenced a forthcoming academic paper that will provide formal proofs of the safety and liveness properties. This will be particularly significant for the research community, as Savanna represents a genuine contribution to BFT consensus design — specifically in how the strong/weak vote distinction elegantly addresses the prefix speculation dilemma that challenges other HotStuff variants.

## 4. Protocol Comparison

| Property | Legacy EOS DPoS+BFT | Savanna (Spring v1+) | Ethereum PoS | Tendermint/CometBFT |
|---|---|---|---|---|
| Time to Finality | ~3 min | ~1 second | ~12 min | ~6 seconds |
| Finality Type | Probabilistic → Algorithmic | Algorithmic (instant) | Probabilistic → Algorithmic | Algorithmic |
| BFT Threshold | \<1/3 BPs corrupt | \<1/3 finalizers corrupt | \<1/3 stake malicious | \<1/3 validators malicious |
| Signature Scheme | ECDSA (K1) | BLS12-381 aggregate | BLS12-381 aggregate | Ed25519 |
| Message Complexity | O(n) header fields | O(n) votes → O(1) QC | O(n) attestations | O(n²) traditional / O(n) with BLS |
| Block Time | 0.5s | 0.5s | 12s slots | Variable (~1-6s) |
| IBC / Bridge Friendly | No (3min wait) | Yes (instant proofs) | Partial (long wait) | Yes |
| Formal Safety Proof | Informal | Yes (paper forthcoming) | Casper FFG proof | Tendermint proof |

## 5. Summary

### 5.1. What Makes Savanna Novel

Savanna is not just a simple port of HotStuff onto an existing chain — it solves a genuinely hard problem:
> how do you retrofit a running, high-throughput DPoS chain with a modern BFT finality layer without breaking the existing block production economics, key management, or validator participation model?

The key innovations that differentiate it from a vanilla HotStuff deployment are:

- **Strong/weak vote duality**: Handles liveness after forks elegantly without adding a third chain phase, enabling genuine 2-block (1-second) finality.

- **QC embedding in existing block headers**: Via the `instant_finality_extension`, Savanna finality is self-contained in the block structure — no separate finality gossip layer required.

- **Reversible blocks root (Merkle finality digest)**: Enables compact, on-chain-verifiable finality proofs without a full block header relay — the cryptographic foundation needed for any future trustless IBC implementation.

- **Separation of proposer and finalizer policies**: Allows the validator set sizes and governance to evolve independently, a significant scalability advantage.

- **BLS12-381 with threshold aggregation**: O(1) QC size regardless of finalizer set, verified in ~1.1ms, unlocking the path to ZK-based privacy features.

For the Wire Network and other Antelope forks adopting this consensus, the practical implication is a blockchain that behaves like web2 infrastructure in terms of settlement latency, while maintaining the full BFT safety guarantees expected of a high-value permissionless network.

:::note[Implementation Note for wire-sysio]
The `wire-sysio` codebase inherits the Savanna consensus implementation from the Antelope Spring fork. The finalizer keys, QC aggregation, vote threading, and safety.dat persistence work identically. The BLS host functions are accessible from WASM contracts via the CDT interface. Finalizer policy governance is managed through the `sysio` system contract using the same `regfinkey` / `actfinkey` / `switchtosvnn` action pattern.
:::
