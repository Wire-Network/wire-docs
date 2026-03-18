---
id: savanna-consensus
title: "Savanna Consensus"
sidebar_label: What is Savanna
slug: /introduction/savanna-consensus
description: How Antelope achieved 1-second finality - BFT pipelining, BLS aggregate signatures, and the 2-chain rule
---

> **Credit**: This content is based on research and documentation by [Kevin Heifner](https://github.com/heifner), principal architect of the Savanna consensus implementation.

## 1. Background & Motivation

**Savanna** — an acronym for *Scalable Agreement on Validated Additions with Nimble Nonrepudiating Attestation* — is the consensus algorithm introduced in Antelope Spring v1.0 (September 2024). It replaced the legacy DPoS+pipelined-BFT mechanism that had been in use since EOS mainnet launch in 2018, reducing transaction finality from roughly three minutes down to approximately **one second** under typical network conditions — a greater than 100× improvement.

The algorithm was led by **Areg Hayrapetian** (Director of Engineering, EOS Network Foundation), with a dedicated core team that carried the work from formal specification through to production deployment: **Guillaume Babin-Tremblay**, **Kevin Heifner**, **Greg Popovitch**, and **Lin Huang**. The work is evident across hundreds of commits in the [AntelopeIO/spring](https://github.com/AntelopeIO/spring) repository — covering everything from the initial finality core design, through BLS integration, safety state persistence, vote threading, P2P protocol changes, and the exhaustive test suite that validated both Legacy and Savanna consensus modes. This was not a clean-room project - it was two years of design meetings, whiteboard sessions, formal proof work, and grinding integration of a fundamentally new consensus layer into a live, production codebase. The Wire Network's [`wire-sysio`](https://github.com/Wire-Network/wire-sysio) codebase is a fork of Antelope and inherits the same consensus mechanism.

<div className="stats-grid">
  <div className="stat-card">
    <div className="stat-value">1s</div>
    <div className="stat-label">Time to Finality</div>
  </div>
  <div className="stat-card">
    <div className="stat-value">2</div>
    <div className="stat-label">Blocks to Finality</div>
  </div>
  <div className="stat-card">
    <div className="stat-value">&gt;100×</div>
    <div className="stat-label">Improvement</div>
  </div>
  <div className="stat-card">
    <div className="stat-value">1.1ms</div>
    <div className="stat-label">BLS Verification</div>
  </div>
</div>

The core problems that motivated Savanna were:

- The original algorithm allowed **at most one confirmation per block**, creating a fundamental throughput bottleneck for finality.

- A 3-minute finality window was unusable for **inter-blockchain communication (IBC)**, bridges, and latency-sensitive applications.

- The original design lacked formal mathematical safety proofs; it was engineered under deadline pressure.

- The confirmation count approach didn't scale elegantly with larger validator sets.

## 2. Legacy DPoS + BFT Consensus

Before Savanna, Antelope used a two-layer mechanism: **Delegated Proof of Stake (DPoS)** for block production scheduling, layered with a **pipelined BFT** mechanism for finality. Understanding the limitations of this approach is essential context for appreciating the Savanna design.

### 2.1. The DPoS Block Production Rotation

21 active Block Producers (BPs) are elected via token-holder votes. Each round, they take turns producing blocks in a deterministic schedule — each BP produces **12 consecutive blocks** (a 6-second slot), then hands off to the next. Blocks arrive every 0.5 seconds, and the schedule rotates every 21 × 12 = 252 blocks (~126 seconds).

![DPoS Block Schedule vs. Finality Windows](/img/savanna-dpos-schedule.svg)

### 2.2. The Two-Round Confirmation Problem

In the legacy system, a block reaching true irreversibility required **two full rounds** of supermajority confirmation, not one. In the first round, each Block Producer(BP) piggybacks a `confirm_count` field in its own block header as it produces blocks, registering confirmations for recent blocks it has seen. A BP can only emit a confirmation when it is scheduled to produce — never out-of-band. Once ⌈2/3 × 21⌉ = 15 BPs have each confirmed a block, it advances to **Proposed LIB (PLIB)**. But that is only stage one. In the second round, the PLIB itself must then receive 2/3+1 confirmations before it graduates to the actual **Last Irreversible Block (LIB)**. With 21 BPs each producing 12-block slots, one full round of confirmations requires waiting for roughly 20 producers to cycle through their slots — approximately 240 blocks. Two rounds therefore compounded to a minimum gap of around 325 blocks between the chain head and LIB in good network conditions, and commonly over 360 in practice. At 0.5 seconds per block that works out to roughly 2.5–3 minutes. No amount of hardware or network improvement could break this ceiling — it was baked into the two-stage protocol structure itself.

> The Bottleneck
>
> The two-stage confirmation design has two compounding constraints: confirmations can only be issued when a BP produces its own block, and the protocol demands two full supermajority rounds before a block is truly irreversible. The first round establishes a Proposed LIB; the second confirms it as actual LIB. This structure is fundamentally latency-bound by the 12-block slot schedule — no software optimization or faster hardware can shortcut it.

## 3. HotStuff: The Academic Foundation

Savanna is explicitly inspired by the [**HotStuff** BFT consensus algorithm](https://arxiv.org/abs/1803.05069), originally published by Yin et al. from VMware Research in 2018 and later used as the basis for Facebook's Diem (Libra) blockchain. Understanding HotStuff is essential to understanding Savanna.

### 3.1. BFT Fundamentals

Byzantine Fault Tolerant (BFT) consensus solves the problem of reaching agreement among *n* nodes where up to *f* may be arbitrarily faulty (Byzantine). The classical result: safety and liveness can both be guaranteed if and only if **n ≥ 3f + 1**, meaning fewer than one-third of nodes may be faulty. For 21 BPs, this means the system tolerates up to 6 faulty nodes while maintaining safety and liveness with 15 honest nodes forming a quorum.

![BFT Quorum for 21 Finalizers](/img/savanna-bft-quorum.svg)

### 3.2. HotStuff Innovations

Classical BFT protocols like PBFT require O(n²) message complexity during view changes, making them impractical beyond ~100 nodes. HotStuff solved this by introducing:

- **Linearity**: O(n) messages per round, not O(n²), achieved via threshold signatures where the leader aggregates votes into a single quorum certificate.

- **Pipelining**: Multiple consensus rounds proceed concurrently in a chain, so the leader is perpetually proposing without waiting for full round-trip consensus.

- **Simplified view changes**: The new-view mechanism is itself a pipeline phase, not a separate expensive subprotocol.

- **Chained QCs**: Each block carries a QC for the previous block, creating a self-certifying chain where finality proof is embedded in the structure.

### 3.3. From HotStuff to Savanna

Savanna takes HotStuff's conceptual architecture and adapts it to the DPoS block-based chain model of Antelope. Key differences from vanilla HotStuff include:

- Instead of abstract "views," Savanna operates on the existing Antelope block slot model (0.5-second blocks, 21-BP rotation).

- Savanna uses a **2-chain finality rule** (similar to HotStuff-2) rather than the 3-chain rule in the original HotStuff paper.

- It introduces a **strong/weak vote distinction** to handle liveness after forks without sacrificing safety.

- Block production (proposing) and finalization are kept as logically separate concerns, even though the same set of 21 BPs initially fills both roles.

- In Antelope Spring, finality data is embedded in block headers as an **instant finality extension** to maintain backward compatibility with the existing block format. In Wire (`wire-sysio`), this compatibility constraint didn't apply — finality data is a first-class field of the block structure itself, no extension mechanism needed.

## 4. BLS Aggregate Signatures

A critical enabling technology for Savanna's O(n) message complexity is **BLS (Boneh-Lynn-Shacham) signature aggregation** over the **BLS12-381** pairing-friendly elliptic curve. Without this, collecting 15 individual ECDSA signatures and broadcasting them would generate significant network overhead.

### 4.1. How BLS Aggregation Works

In BLS, a signature on message *m* under private key *sk* is: `σ = sk · H(m)` where *H* maps to a point on the curve. The remarkable property is that multiple signatures can be combined into one aggregate: `σ_agg = σ₁ + σ₂ + … + σₙ`, and the aggregate is verified against the sum of public keys: `e(σ_agg, G) = e(H(m), PK₁ + PK₂ + … + PKₙ)`.

This means a **Quorum Certificate (QC)** can be represented as:

- A single 96-byte aggregate BLS signature.

- A bitset (bitmask) of which finalizers contributed — for 21 BPs, just 3 bytes.

- The block hash being certified.

This is an **O(1) representation of n-party agreement**. Verification takes approximately 1.1 milliseconds on modern hardware, as measured in the Spring implementation. Compare this to the cost of verifying 15 separate ECDSA signatures (~15 × 60μs ≈ 900μs) plus the transmission overhead.

![BLS Aggregate Signature Efficiency](/img/savanna-bls-aggregate.svg)

### 4.2. BLS12-381 in Practice

Antelope uses the BLS12-381 curve, the same curve used by Ethereum 2.0 beacon chain validators. The curve offers ~128-bit security, efficient pairing operations for aggregation, and a rich ecosystem of implementations. In the Spring codebase, BLS operations are implemented via a custom submodule (`bn256`), with host functions exposed to WASM smart contracts via the CDT.

Each finalizer registers a BLS public key on-chain via the `regfinkey` action, and activates it via `actfinkey`. The finalizer's node signs votes using the corresponding private key, stored locally in the `finalizers/safety.dat` file.

## 5. Savanna Architecture

### 5.1. Two Planes: Proposing vs. Finalizing

Savanna cleanly separates two concerns that were entangled in the legacy protocol:

- **Block Proposers**: Produce and broadcast new blocks. They follow the DPoS rotation schedule, pack transactions, and include any available Quorum Certificates in the block header. In Spring v1.0, all 21 BPs are proposers.

- **Block Finalizers**: Evaluate proposed blocks, check safety rules, and emit signed votes. When a proposer aggregates enough votes into a QC, that QC gets embedded in the next block, advancing the finality chain.

![Savanna Two-Plane Architecture](/img/savanna-two-plane.svg)

### 5.2. The Finalizer Policy

The active set of finalizers is governed by a **finalizer policy** stored on-chain. This is a distinct concept from the DPoS proposer schedule. In Spring v1.0, the active and pending finalizer policies must both reach quorum before a QC is valid during a policy transition — preventing finality violations during handoffs.

The key data structures from the Spring codebase:

```cpp
// libraries/chain/include/sysio/chain/finality/finalizer_policy.hpp
struct finalizer_authority {
    std::string    description;  // human-readable name
    uint64_t       weight;       // voting weight
    bls_public_key public_key;  // BLS12-381 pubkey
};

struct finalizer_policy {
    uint32_t                            generation;   // policy version
    uint64_t                            threshold;    // quorum weight
    std::vector<finalizer_authority>    finalizers;  // up to 64K
};

// A Quorum Certificate embedded in each block header
struct quorum_certificate {
    uint32_t          block_num;     // block being certified
    vote_bitset       active_votes;  // which finalizers voted
    bls_signature     agg_sig;      // aggregate BLS signature
};
```

## 6. Voting: Strong Votes, Weak Votes, and QCs

One of Savanna's most subtle and important innovations is the distinction between **strong votes** and **weak votes**. This mechanism elegantly handles the tension between safety and liveness in the presence of network partitions and chain forks.

### 6.1. Strong Votes

A finalizer casts a **strong vote** when three conditions hold: the monotony check passes (block timestamp is after the last vote), the liveness check passes (`B.latest_qc_block_timestamp > fsi.lock.timestamp` — the QC embedded in the block is more recent than the lock), and the embedded QC has "caught up" past the finalizer's own last vote (`fsi.last_vote.timestamp ≤ B.latest_qc_block_timestamp`). The last condition ensures the network has acknowledged the finalizer's prior vote before it commits again, preventing equivocation.

Strong votes contribute to **Strong Quorum Certificates (Strong QC)**. A Strong QC on block B₁ means ≥2f+1 finalizers have strongly committed to B₁'s ancestry. The critical safety property: if a Strong QC exists on block B, no conflicting block at the same height can ever achieve a Strong QC — this directly underpins the safety proof.

### 6.2. Weak Votes

A **weak vote** is cast on a *new* block when a finalizer can vote but the conditions for a strong vote are not met. An important constraint first: the monotony check (`B.timestamp > fsi.last_vote.timestamp`) is strict — once a finalizer has voted on a block (strongly or weakly), it **cannot vote on that same block again**. Weak votes are therefore always cast on a *different, later* block, not on a block previously voted strong.

The typical weak-vote scenario is a chain reorganization: the finalizer previously voted strong on a block on fork A, then sees a new block on fork B. The liveness check may pass (fork B's QC is more recent than the lock), but because the finalizer's `last_vote` timestamp is ahead of fork B's embedded QC timestamp, it cannot vote strongly yet. Rather than abstain and stall liveness, the finalizer votes weakly on the new block, signalling "I acknowledge this block as a candidate without fully committing to its ancestry."

Crucially, when a finalizer switches branches it records `fsi.other_branch_latest_time = fsi.last_vote.timestamp`. Subsequent votes on the new branch remain weak until the embedded QC catches up past that recorded timestamp, at which point strong voting resumes. This prevents a window where a strong QC could form on two competing forks simultaneously.

Weak votes allow the protocol to maintain **liveness** (keep producing QCs, keep high_qc advancing) during chain reorganizations without ever violating safety invariants.

A block can receive a **Weak QC** from 2f+1 weak (or mixed strong+weak) votes. A Weak QC advances the *high_qc pointer* but does *not* by itself trigger LIB advancement — a Strong QC in the chain is required for that.

<img src="/img/savanna-strong-weak-votes.svg" alt="Strong vs. Weak Votes" style={{width: '100%', maxWidth: '100%'}} />

### 6.3. QC Types and Their Effects

| QC Type | Votes Required | Effect on high_qc | Effect on LIB |
|---|---|---|---|
| Strong QC | ≥2f+1 strong votes | Advances to this block | Advances (with 2-chain rule) |
| Weak QC | ≥2f+1 total (any mix) | Advances to this block | Does not advance |
| No QC | — | No change | No change |

## 7. Pipelining & the 2-Chain Finality Rule

The heart of Savanna's 1-second finality is its **pipelined 2-chain rule**. Instead of waiting for a full round-trip QC before moving to the next block, multiple rounds execute concurrently like an assembly line. A block becomes final once there is a chain of two strong QCs extending from it.

### 7.1. The 2-Chain Rule Explained

Formally: block B is considered **final** (irreversible) when there exists a chain B → B₁ → B₂ such that:

- B₁ contains a *Strong QC on B* in its header.

- B₂ contains a *Strong QC on B₁* in its header.

The moment a node sees B₂ with a valid Strong QC on B₁, it can conclusively declare B (and all blocks before it) as irreversible. With 0.5-second blocks, this takes a minimum of **2 block slots = 1 second**.

![2-Chain Finality Rule](/img/savanna-2chain-finality.svg)

### 7.2. Why 2-Chain and Not 3-Chain?

The original HotStuff paper uses a **3-chain rule** for commit, primarily to avoid a liveness edge-case involving view changes. Savanna uses 2-chain finality (inspired by HotStuff-2 work) because:

- The strong/weak vote distinction handles the safety concern that the 3rd phase was meant to address in classical HotStuff.

- Reducing from 3 to 2 chain steps cuts the finality time from ~1.5s to ~1.0s under the 0.5s block schedule.

- The formal safety proof still holds: it was verified mathematically, as confirmed by the Savanna team.

## 8. Safety Rules & Finalizer State Machine

Each finalizer is a state machine whose transitions must follow strict rules to preserve safety. The state is persisted in `finalizers/safety.dat`, a file that must never be lost or corrupted. This is the "safety ground truth" — it encodes exactly what the finalizer has previously committed to, ensuring it never violates its own past promises.

### 8.1. Core Finalizer State Variables

    ```cpp
    // Actual finalizer safety state (finalizer.hpp / finalizer.cpp in Spring/wire-sysio)
    struct finalizer_safety_information {
        block_ref            last_vote;               // block_id + timestamp of the last block voted on
        block_ref            lock;                    // block we are currently locked on
        block_timestamp_type other_branch_latest_time; // timestamp of last vote cast on a different branch
                                                    // (cleared on every strong vote)
    };
    ```

### 8.2. The Voting Decision: Three Checks in Order

Before casting any vote on block B, a finalizer runs three checks in sequence. All comparisons are **timestamp-based**, not height-based:

- **Monotony check**: `B.timestamp > fsi.last_vote.timestamp` — the finalizer only ever votes on blocks strictly newer than its last vote. Failure here → abstain immediately (no vote emitted).

- **Liveness check**: `B.latest_qc_block_timestamp > fsi.lock.timestamp` — the QC embedded in B certifies a block more recent than the finalizer's current lock. If this passes, the finalizer *can* vote.

- **Safety check** (evaluated only when liveness fails): `B extends fsi.lock.block_id` — the proposed block is a direct ancestor-chain descendant of the locked block. If this passes, the finalizer can still vote, but *weakly*.

If both liveness and safety fail, the finalizer abstains. Otherwise:

- **Strong vote**: liveness passed AND `fsi.last_vote.timestamp ≤ B.latest_qc_block_timestamp` (the embedded QC has caught up past the finalizer's last vote, AND the finalizer has not recently switched branches, OR any branch-switch has already been superseded by a newer QC).

- **Weak vote**: liveness passed but `fsi.last_vote.timestamp > B.latest_qc_block_timestamp`, OR liveness failed but safety passed, OR the finalizer recently switched branches and `fsi.other_branch_latest_time > B.latest_qc_block_timestamp`.

On a strong vote, `fsi.lock` advances to the block referenced by B's QC claim, and `fsi.other_branch_latest_time` is cleared. On a weak vote (when switching branches), `fsi.other_branch_latest_time` is set to the timestamp of the previous branch's last vote, recording the branch-switch.

![Finalizer Voting Decision Tree](/img/savanna-voting-decision-tree.svg)

### 8.3. The lock Update

The `fsi.lock` pointer advances when a finalizer casts a **strong vote** and the block's embedded QC refers to a block more recent than the current lock. That QC-referenced block becomes the new locked block. This is exactly the *locking* in HotStuff's safety rule — a finalizer will only deviate from its lock when it sees a QC whose timestamp is higher than the lock's timestamp (the liveness check), which means a super-majority has already moved past the old lock.

### 8.4. safety.dat and Crash Recovery

The safety state is durably persisted to `<data-dir>/finalizers/safety.dat` on every vote. If this file is lost or corrupted, the finalizer **must switch to a new BLS key** — it cannot safely resume voting with the old key because it has no record of what it previously committed to, and reusing the key could cause it to vote on a conflicting branch.

    ⚠ Critical Operational Note
    Never reuse a BLS finalizer key between nodeos instances. Never run two instances with the same finalizer key simultaneously. A split-brain scenario (two nodes voting with the same key but different forks in memory) can cause safety violations that are detectable by the network as an equivocation proof.

---

For implementation details including fork database internals, vote threading, IBC implications, protocol comparisons, and Wire Network differences, see [Savanna Implementation Deep Dive](/docs/introduction/savanna-implementation).
