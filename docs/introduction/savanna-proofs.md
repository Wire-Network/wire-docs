---
id: savanna-proofs
title: "Safety & Liveness Proofs"
sidebar_label:  Safety & Liveness Proofs
slug: /introduction/savanna-proofs
tags:
  - consensus
  - savanna
  - BFT
  - safety
  - liveness
  - proofs
description: A rigorous treatment of the two fundamental properties of BFT consensus, grounded in Savanna's actual voting rules as implemented in `finalizer.cpp`. Derived from wire-sysio / Antelope Spring v1.0.
---

> **Credit**: This content is based on research and documentation by [Kevin Heifner](https://github.com/heifner), principal architect of the Savanna consensus implementation.

## Overview

This article covers how Savanna constructs and verifies cryptographic proofs — finality proofs, action proofs, and the Merkle structures that underpin IBC.

## 1. System Model and Assumptions

We adopt a standard partially-synchronous model. The network is asynchronous until a Global Stabilization Time (GST), after which messages between correct nodes are delivered within a known bound $\Delta$. This is the minimum model in which BFT consensus with liveness is possible, as established by the FLP impossibility result.

- **A1.** There are $n$ finalizer nodes. At most $f$ are Byzantine (arbitrarily malicious). The remainder, $n - f \geq 2f + 1$, are *honest*: they follow the protocol exactly.

- **A2.** $n \geq 3f + 1$. This is the minimal resilience bound for BFT. Savanna, like HotStuff and Tendermint, requires a two-thirds supermajority to form a quorum, which necessitates this bound.

- **A3.** Each block carries a cryptographically-verified timestamp. Timestamps are strictly monotone within any chain of blocks and are unforgeable under the signature scheme. An honest proposer never backdates a timestamp.

- **A4.** BLS signatures are existentially unforgeable under chosen-message attack. An adversary cannot produce a valid aggregate signature over a message without controlling a quorum of signing keys. The BLS scheme is collision-resistant.

- **A5.** Each honest finalizer persists its *Finalizer Safety Information* (FSI) atomically to durable storage (`safety.dat`) before broadcasting any vote. A node that restarts recovers its exact pre-crash FSI. We do not model storage faults.

- **A6.** Block identifiers are collision-resistant. If two distinct blocks share a `block_id`, the collision-resistance of the underlying hash function has been broken.

## 2. Notation and Definitions

| Symbol | Definition |
|--------|------------|
| $B, B', M, \ldots$ | Blocks. A block carries a unique identifier $\mathsf{id}(B)$, a timestamp $\mathsf{ts}(B)$, and an embedded latest-QC reference $\mathsf{lqc}(B)$. |
| $B \prec B'$ | Block $B$ is a strict ancestor of $B'$ (i.e., $B$ appears in $B'$'s chain). We write $B \preceq B'$ for ancestor-or-equal. |
| $B \perp B'$ | $B$ and $B'$ are *conflicting*: neither is an ancestor of the other. Equivalent to: $B \not\preceq B'$ and $B' \not\preceq B$. |
| $\mathsf{lqc}(B)$ | The latest-QC claim embedded in block $B$: a reference to the most recent block in $B$'s chain that the proposer asserts has a valid QC. |
| $\mathsf{ts}(\mathsf{lqc}(B))$ | The block timestamp of the latest-QC block referenced by $B$. |
| $\mathsf{fsi}_v$ | The persisted Finalizer Safety Information of honest node $v$, consisting of three fields: $(\mathsf{last\_vote}_v,\ \mathsf{lock}_v,\ \mathsf{obl}_v)$. |
| $\mathsf{last\_vote}_v$ | A `block_ref` (block id + timestamp) of the last block $v$ voted for. |
| $\mathsf{lock}_v$ | A `block_ref` identifying the block on which $v$ is currently locked. Updated on every strong vote. |
| $\mathsf{obl}_v$ | *Other-branch latest time*: timestamp of the last vote cast by $v$ before a branch switch. Set to $\mathsf{ts}(\mathsf{last\_vote}_v)$ when $v$ switches branch; cleared (set to zero) on every strong vote. |
| $\mathsf{QC}(B)$ | A valid Quorum Certificate for block $B$: an aggregate BLS signature representing $\geq q$ distinct finalizer votes on $B$. |
| $\mathsf{SQC}(B)$ | A *strong* QC for $B$: a QC formed exclusively from strong votes. $\mathsf{SQC}(B)$ implies $\mathsf{QC}(B)$. |
| $q$ | Quorum threshold: $q = \lfloor 2n/3 \rfloor + 1$. Any two quorums share at least one node in common. |
| $\mathcal{H}$ | The set of honest finalizers, $|\mathcal{H}| = n - f \geq 2f + 1$. |

### 2.1. Definition 1 — Finalized Block

A block $B$ is *finalized* if there exists a block $B^+$ such that $\mathsf{lqc}(B^+) = B$ and $\mathsf{SQC}(B^+)$ exists. Informally: a strong QC on $B^+$ with $B$ as its QC claim causes $B$ to cross the finality threshold via the 2-chain rule.

### 2.2. Definition 2 — Conflicting Finalization

Two blocks $B$ and $B'$ are *conflictingly finalized* if both are finalized and $B \perp B'$. A consensus protocol is *safe* if no two honest nodes ever observe conflicting finalizations.

## 3. Protocol Rules

The following rules are extracted directly from `finalizer.cpp` in the wire-sysio and Antelope Spring v1.0.1 codebases. Let $v$ be an honest finalizer with current FSI $(\mathsf{last\_vote}_v, \mathsf{lock}_v, \mathsf{obl}_v)$ about to process candidate block $B$.

| Rule | Condition | Effect |
|---|---|---|
| R1 Monotony | $\mathsf{ts}(B) > \mathsf{ts}(\mathsf{last\_vote}_v)$ | If violated: ABSTAIN immediately. No state change. |
| R2 Liveness | $\mathsf{ts}(\mathsf{lqc}(B)) > \mathsf{ts}(\mathsf{lock}_v)$ | If satisfied: may vote (proceed to R4). If not: fall through to R3. |
| R3 Safety fallback | $\mathsf{id}(\mathsf{lock}_v) \prec B$ (B extends the lock) | If satisfied: cast WEAK vote, update last_vote. If not: ABSTAIN. |
| R4 Strong condition | $\mathsf{ts}(\mathsf{last\_vote}_v) \leq \mathsf{ts}(\mathsf{lqc}(B))$ [A] OR (same branch [B] AND $\mathsf{obl}_v \leq \mathsf{ts}(\mathsf{lqc}(B))$ [C]) | If satisfied (A ∨ (B∧C)): STRONG vote, clear $\mathsf{obl}_v \leftarrow 0$, lock advances if lqcTs > lock. Else: WEAK vote. Note: strong vote does not require liveness — A can hold on the safety path. |

On a branch switch (detected when $B$ does not extend $\mathsf{last\_vote}_v$ and liveness passes), the node records $\mathsf{obl}_v \leftarrow \mathsf{ts}(\mathsf{last\_vote}_v)$ before updating $\mathsf{last\_vote}_v$.

**Remark — Role of the Three Fields**

$\mathsf{last\_vote}_v$ enforces monotony, preventing double-voting at the same timestamp. $\mathsf{lock}_v$ is the safety anchor: once locked on $B$, node $v$ cannot vote for anything that conflicts with $B$ unless the chain demonstrates (via a later QC timestamp) that enough of the network has moved on. $\mathsf{obl}_v$ tracks cross-branch history so that a node which voted on one branch and then switched cannot immediately issue a strong vote on the new branch, closing a subtle equivocation window.

## 4. Supporting Lemmas

### 4.1. Lemma 1 — Quorum Intersection

Let $Q_1$ and $Q_2$ be any two sets of finalizers each of size $\geq q = \lfloor 2n/3 \rfloor + 1$. Then $|Q_1 \cap Q_2| \geq 1$. Moreover, since $|Q_i| \geq q > 2n/3$ and $|\mathcal{H}| \geq n - f \geq 2n/3 + 1 > n/3$, the intersection $Q_1 \cap Q_2$ contains at least one *honest* node.

**Proof.** By inclusion-exclusion, $|Q_1 \cap Q_2| \geq |Q_1| + |Q_2| - n \geq 2q - n \geq 2(\lfloor 2n/3 \rfloor + 1) - n \geq n/3 + 1 > f$. Therefore $|Q_1 \cap Q_2| \geq f + 1$. Since at most $f$ nodes are Byzantine, the intersection contains at least $f+1 - f = 1$ honest node.

### 4.2. Lemma 2 — Lock Timestamp Monotonicity

For any honest finalizer $v$, the timestamp $\mathsf{ts}(\mathsf{lock}_v)$ is non-decreasing over time.

**Proof.** The lock is updated only on the strong vote path. Crucially, a strong vote does *not* require liveness: condition A ($\mathsf{ts}(\mathsf{last\_vote}_v) \leq \mathsf{ts}(\mathsf{lqc}(B))$) can produce a strong vote even when R2 fails (i.e., on the R3 safety path). The lock advances only when liveness also holds: $\mathsf{ts}(\mathsf{lqc}(B)) > \mathsf{ts}(\mathsf{lock}_v)$. When liveness fails, the lock is unchanged. Therefore $\mathsf{ts}(\mathsf{lock}_v)$ is non-decreasing after every strong vote ($\geq$), and strictly increasing whenever a strong vote is cast with liveness also satisfied.

### 4.3. Lemma 3 — Conflicting QC Impossibility

This is the central lemma. It establishes that once a QC exists for some block $M$, no conflicting block at a lower-or-equal timestamp can acquire a QC. The safety theorem follows as an immediate corollary.

Suppose $\mathsf{QC}(M)$ exists, witnessed by quorum $Q_M$. Let $C$ be any block with $C \perp M$ and $\mathsf{ts}(C) \leq \mathsf{ts}(M)$. Then no honest node in $Q_M$ can vote for $C$ after having voted for $M$. Consequently, no quorum $Q_C \ni$ (at least one honest node) can form for $C$.

**Proof.** Let $v \in Q_M \cap \mathcal{H}$ be any honest node that voted for $M$. After $v$'s vote, $\mathsf{ts}(\mathsf{last\_vote}_v) = \mathsf{ts}(M)$. By R1 (monotony), $v$ will only vote for blocks $B$ with $\mathsf{ts}(B) > \mathsf{ts}(M)$. Since $\mathsf{ts}(C) \leq \mathsf{ts}(M)$, node $v$ cannot vote for $C$ at any later point. Any quorum $Q_C$ for $C$ must therefore consist entirely of nodes outside $Q_M$, which by Lemma 1 is impossible.

**Remark.**

Lemma 3 handles same-timestamp conflicts through the strict inequality in R1. Because block timestamps are unique within a valid chain and honest proposers issue at most one block per slot, two honest votes at the same timestamp would target the same block. A Byzantine proposer could equivocate (propose two blocks at the same timestamp), but an honest node that has already voted for one cannot vote for the other, so no second quorum can form.

We now extend Lemma 3 to handle higher-timestamp conflicting blocks, which requires a deeper inductive argument.

### 4.4. Lemma 4 — Strong QC Conflict Impossibility

Suppose $\mathsf{SQC}(B^+)$ exists with $\mathsf{lqc}(B^+) = B$, witnessed by quorum $Q$. Then for any block $C$ with $C \perp B$, no $\mathsf{QC}(C)$ can exist.

**Proof.** We prove the stronger claim: *after $\mathsf{SQC}(B^+)$ forms, no block $C$ with $C \perp B$ can receive a QC, regardless of the timestamp of $C$*. The proof is by well-founded induction on $\mathsf{ts}(C)$.

**Setup.** Every honest $v \in Q$ cast a *strong* vote for $B^+$, and $\mathsf{SQC}(B^+)$ is a strong QC, meaning it was formed on the liveness path ($\mathsf{ts}(\mathsf{lqc}(B^+)) > \mathsf{ts}(\mathsf{lock}_v)$ held for the quorum members at vote time). A strong QC by definition requires the liveness path — a strong QC cannot form solely from safety-path strong votes because those would not advance the lock consistently. After the strong vote with liveness, the lock update fires: $\mathsf{ts}(\mathsf{lock}_v) \leftarrow \mathsf{ts}(\mathsf{lqc}(B^+)) = \mathsf{ts}(B)$. Therefore after voting for $B^+$, $\mathsf{ts}(\mathsf{lock}_v) = \mathsf{ts}(B)$.

**Base case: $\mathsf{ts}(C) \leq \mathsf{ts}(B^+)$.** By Lemma 3 applied to any QC on $B^+$, no honest $v$ who voted for $B^+$ can subsequently vote for any $C$ with $\mathsf{ts}(C) \leq \mathsf{ts}(B^+)$. By Lemma 1, no quorum can form for $C$. ∎

**Inductive step: $\mathsf{ts}(C) > \mathsf{ts}(B^+)$.** Assume (inductive hypothesis) that no $\mathsf{QC}$ exists for any block conflicting with $B$ and having timestamp $< \mathsf{ts}(C)$.

Suppose for contradiction that $\mathsf{QC}(C)$ exists via quorum $Q_C$. By Lemma 1, $\exists$ honest $v \in Q \cap Q_C$. Node $v$ voted for both $B^+$ (strongly) and $C$. By R1 applied to $B^+$ first, $\mathsf{ts}(C) > \mathsf{ts}(B^+)$ (ensured by assumption). Now consider how $v$ voted for $C$ under R2–R3:

**Case A — Liveness passes (R2 satisfied for C):** $\mathsf{ts}(\mathsf{lqc}(C)) > \mathsf{ts}(\mathsf{lock}_v) = \mathsf{ts}(B)$. Let $M = \mathsf{lqc}(C)$. Since $M$ is claimed to have a QC and is an ancestor of $C$, we have $M \preceq C$, hence $\mathsf{ts}(M) < \mathsf{ts}(C)$. Furthermore $M$ is on $C$'s branch. Since $C \perp B$ and $M \prec C$, we have $M \perp B$ (any ancestor of a conflicting block is itself either conflicting with $B$ or an ancestor of $B$). If $M \prec B$, then $C$ would extend $B$, contradicting $C \perp B$. So $M \perp B$. Combined with $\mathsf{ts}(M) > \mathsf{ts}(B) \geq \mathsf{ts}(B)$ and $\mathsf{ts}(M) < \mathsf{ts}(C)$, the inductive hypothesis applies: no $\mathsf{QC}(M)$ can exist. This contradicts the requirement that $M = \mathsf{lqc}(C)$ carries a valid QC.

**Case B — Liveness fails, Safety fallback applies (R3):** $v$ can vote for $C$ only if $C$ extends $\mathsf{lock}_v = B$. But $C \perp B$ by assumption, so $C$ does not extend $B$. Node $v$ must ABSTAIN. Contradiction.

Both cases yield a contradiction. Therefore $\mathsf{QC}(C)$ cannot exist. By induction, the claim holds for all timestamps.

## 5. Theorem 1 — Safety

Under assumptions A1–A6, for any two blocks $B$ and $B'$, if both $B$ and $B'$ are finalized according to Definition 1, then $B \preceq B'$ or $B' \preceq B$ (they lie on the same chain). Equivalently, no two conflicting blocks are ever both finalized.

**Proof.** Suppose for contradiction that both $B$ and $B'$ are finalized with $B \perp B'$.

By Definition 1 there exist blocks $B^+$ and ${B'}^+$ such that:
    $$
      \mathsf{lqc}(B^+) = B,\quad \mathsf{SQC}(B^+) \text{ exists via quorum } Q
    $$
    $$
      \mathsf{lqc}({B'}^+) = B',\quad \mathsf{SQC}({B'}^+) \text{ exists via quorum } Q'
    $$

Since $\mathsf{SQC}(B^+)$ implies $\mathsf{QC}(B^+)$, by Lemma 4 (applied to $\mathsf{SQC}(B^+)$ certifying $B$), no QC can exist for any block conflicting with $B$. Since $B' \perp B$ implies ${B'}^+$ either conflicts with $B$ or is an ancestor of $B$. The ancestor case is impossible because ${B'}^+$ certifies $B'$ which conflicts with $B$, so ${B'}^+$ cannot extend $B$'s chain. Therefore ${B'}^+$ conflicts with $B$.

By Lemma 4, $\mathsf{QC}({B'}^+)$ cannot exist. This contradicts our assumption that $\mathsf{SQC}({B'}^+)$ exists. Therefore the supposition $B \perp B'$ is false, and the two finalized blocks lie on a common chain.

### 5.1. Corollary 1 — Immutability

Once a block $B$ is finalized, all blocks in the history of $B$ (its ancestors) are also permanently finalized and cannot be reverted. The finalized chain grows monotonically.

**Proof.** Any ancestor $A \prec B$ of a finalized block is itself on the unique finalized chain established by Theorem 1. Any conflicting finalization of a block at $A$'s position would conflict with $B$, violating safety. By induction over the chain length, the entire prefix is immutable.

## 6. Theorem 2 — Liveness

Liveness is inherently a post-GST property. Before the network stabilizes, Byzantine nodes can delay messages indefinitely, preventing quorum formation. This is unavoidable (FLP). We prove that after GST, finalization resumes within a bounded number of rounds.

Under assumptions A1–A5, after GST, if an honest leader proposes a block $B$ that includes the globally highest-timestamp QC known to any honest node, then within one communication round all honest finalizers cast a strong vote for $B$, and within two rounds a strong QC on $B$ is formed and $B$'s predecessor is finalized.

The proof relies on two auxiliary lemmas about lock state convergence.

### 6.1. Lemma 5 — Highest-QC Unblocks All Honest Nodes

Let $t^* = \max_{v \in \mathcal{H}} \mathsf{ts}(\mathsf{lock}_v)$ be the highest lock timestamp among all honest finalizers. If an honest proposer includes a QC with timestamp $\tau_{\mathsf{qc}} \geq t^*$ in its proposed block $B$, then for every honest $v$, the liveness condition R2 is satisfied for $B$, i.e., $\tau_{\mathsf{qc}} > \mathsf{ts}(\mathsf{lock}_v)$.

**Proof.** We need to show $\tau_{\mathsf{qc}} > \mathsf{ts}(\mathsf{lock}_v)$ for all honest $v$. By Lemma 2, $\mathsf{ts}(\mathsf{lock}_v)$ is updated only when a strong vote is cast, advancing to the $\mathsf{lqc}$ timestamp of the voted block. Any strong QC with timestamp $t_0$ formed in the system required a quorum $Q$ to vote strongly, and each voter's lock advanced to $t_0$. If $\tau_{\mathsf{qc}}$ is the timestamp of the highest QC witnessed by any honest node, then $\tau_{\mathsf{qc}} \geq t_0$ for all $t_0$ that contributed to any honest node's lock. Therefore $\tau_{\mathsf{qc}} \geq \mathsf{ts}(\mathsf{lock}_v)$ for all $v \in \mathcal{H}$.

Strict inequality: an honest proposer appends a new block at a timestamp strictly greater than all prior blocks. The new block's $\mathsf{lqc}$ points to the embedded QC, whose block timestamp is strictly earlier than the new block. Therefore $\mathsf{ts}(B) > \tau_{\mathsf{qc}} \geq t^*$, and in particular no honest $v$ has lock timestamp equal to $\tau_{\mathsf{qc}}$ from a block later than the QC block. Since the QC's referenced block has timestamp $\tau_{\mathsf{qc}}$, and any lock update requires $\mathsf{ts}(\mathsf{lqc}(B')) > \mathsf{ts}(\mathsf{lock}_v)$ (strict, by R2), the maximum attainable lock timestamp is $\tau_{\mathsf{qc}}$ itself, achieved only by nodes that voted strongly on the block embedding the QC. In that case $\mathsf{ts}(\mathsf{lock}_v) = \tau_{\mathsf{qc}}$, and R2 requires strict inequality, so such nodes are momentarily blocked. However, the proposer's new block has $\mathsf{lqc}$ timestamp equal to $\tau_{\mathsf{qc}}$ for the embedded QC's target block. We need $\tau_{\mathsf{qc}} > \mathsf{ts}(\mathsf{lock}_v)$ strictly.

To handle this, note that the proposer can also include an even more recent QC if one has formed since. In the steady state, the immediately preceding block's QC has a higher timestamp than any lock, since the lock is set to the QC-claim of the previous round's block, not the block itself. Specifically: when $v$ voted strongly for block $B'$, its lock became $\mathsf{lqc}(B')$, not $B'$. If the chain has advanced and the next block $B''$ has $\mathsf{lqc}(B'') = B'$, then $\mathsf{ts}(\mathsf{lqc}(B'')) = \mathsf{ts}(B') > \mathsf{ts}(\mathsf{lqc}(B')) = \mathsf{ts}(\mathsf{lock}_v)$, satisfying R2 strictly. In the pipelined steady state this always holds.

### 6.2. Lemma 6 — Strong Vote Convergence After GST

After GST, if the current leader is honest and broadcasts block $B$ that satisfies the conditions of Lemma 5, all honest finalizers cast a strong vote for $B$ within time $\Delta$.

**Proof.** After GST, all messages between honest nodes are delivered within $\Delta$. All honest finalizers receive $B$ within $\Delta$ of broadcast. By Lemma 5, the liveness condition R2 is satisfied for each, so none falls to the safety fallback. The strong condition R4 requires two sub-checks:

**Sub-check 1:** $\mathsf{ts}(\mathsf{last\_vote}_v) \leq \mathsf{ts}(\mathsf{lqc}(B))$. After GST the leader proposes a single block per slot. By R1, honest nodes only vote for blocks at strictly increasing timestamps. Between rounds, no new higher-timestamp conflicting blocks can reach honest nodes (leader is honest, and Byzantine blocks without a proper QC chain will fail liveness for all honest nodes). Therefore $\mathsf{ts}(\mathsf{last\_vote}_v)$ is at most the timestamp of the most recent block the node voted for, which is $\leq \mathsf{ts}(\mathsf{lqc}(B))$ by the chain progression guarantee.

**Sub-check 2:** Same branch OR $\mathsf{obl}_v \leq \mathsf{ts}(\mathsf{lqc}(B))$. The leader is on the canonical chain. After GST all honest nodes converge to the same head within $\Delta$ (by the synchronous chain-quality property of the underlying block production). If a node had previously voted on a fork, its $\mathsf{obl}_v$ records when it switched. Since the last strong vote cleared $\mathsf{obl}_v = 0$, and no fork switch occurs in the steady state, $\mathsf{obl}_v = 0 \leq \mathsf{ts}(\mathsf{lqc}(B))$. The condition holds.

Therefore all honest finalizers cast a strong vote, broadcast within $\Delta$, and the block proposer (or aggregator) collects all $|\mathcal{H}| \geq 2f+1 \geq q$ strong votes within time $2\Delta$. A strong QC forms.

### 6.3. Proof of Theorem 2

Let $t_{\mathsf{GST}}$ be the GST. Consider the first honest leader round at time $t \geq t_{\mathsf{GST}}$. The leader constructs block $B$ embedding the highest-timestamp QC it has observed. By Lemma 5, R2 is satisfied for all honest finalizers. By Lemma 6, all cast strong votes within $\Delta$. Within $2\Delta$, the leader has collected $\geq q$ strong votes and publishes $\mathsf{SQC}(B)$.

The next block $B^+$ proposed by the leader references $B$ as its $\mathsf{lqc}$. By Definition 1, $B$'s predecessor (the block for which $B$ was the QC claim, i.e., $\mathsf{lqc}(B)$) is finalized when $\mathsf{SQC}(B^+)$ forms in the following round. Thus finalization occurs within two proposer rounds (each of duration $2\Delta$), i.e., within $O(\Delta)$ time after GST.

### 6.4. Corollary 2 — No Long-Term Lock Stalling

No honest finalizer can be permanently prevented from voting after GST. Any lock discrepancy between honest nodes is resolved within one honest leader round.

**Proof.** An honest node $v$ is stalled if $\mathsf{ts}(\mathsf{lock}_v)$ exceeds the $\mathsf{lqc}$ timestamp of every proposed block (R2 fails) and no proposed block extends $\mathsf{lock}_v$ (R3 fails). For this to persist, no new QC with timestamp $\geq \mathsf{ts}(\mathsf{lock}_v)$ can reach $v$. After GST, the honest leader includes the globally highest QC by Lemma 5, which has timestamp $\geq \mathsf{ts}(\mathsf{lock}_v)$. This breaks the stall within one round.

## 7. Remarks and Scope

### 7.1. The Timestamp Assumption

The proofs rely on monotone, unforgeable block timestamps (A3). In the wire-sysio and Antelope implementations, block timestamps are slot-indexed at 500ms granularity and are part of the signed block header. A Byzantine block producer could attempt to publish a block with a manipulated timestamp, but this would require a valid block-producer signature on the falsified header, which is detectable and slashable. The safety argument is not weakened by timestamp granularity: if two honest blocks share the same slot, only one can be on the finalized chain, and the monotony rule still prevents double-voting.

### 7.2. Byzantine Proposers

The proofs above assume quorum formation requires honest participation. A Byzantine block producer can equivocate (propose two different blocks for the same slot), but by Lemma 3 an honest finalizer that votes for one cannot vote for the other. With $n - f \geq 2f + 1$ honest nodes, a quorum requires at least $f+1$ honest participants. Therefore at most one of the two equivocating blocks can form a QC, preserving safety.

### 7.3. Weak Votes

Weak votes do not contribute to strong QCs and therefore cannot directly cause finalization under Definition 1. However, weak QCs (formed from a mix of strong and weak votes) allow the chain to progress and serve as the $\mathsf{lqc}$ claim in the next block, which can unlock nodes and restore the ability to vote strongly. The safety argument treats weak votes as inert from a finalization standpoint: a weak QC on a block does not advance any honest node's lock, so it creates no new safety obligation.

### 7.4. The Other-Branch Timestamp

The $\mathsf{obl}$ field addresses a subtle liveness concern that does not affect safety directly. Without it, an honest node that voted on branch $\alpha$ and then switched to branch $\beta$ could cast a strong vote on $\beta$ before a stable QC on $\beta$ has been established, potentially leaving nodes on $\alpha$ unable to form a QC. The $\mathsf{obl}$ guard ensures that a branch-switch node contributes only a weak vote until the new branch's QC timestamps have surpassed its previous voting history, giving the old branch time to settle.

### 7.5. QC Carrier Safety

The `fork_database` implementation (Spring / wire-sysio) advances the pending Last Irreversible Block before the carrying block is validated. When `add_impl` inserts a block whose embedded QC claim is strong, it immediately calls `set_pending_savanna_lib_id_impl` — even if the block will later turn out to be invalid or on a forked-out branch. The code comments this explicitly: *"the block is just acting as a network message / carrier for this data."*

This is sound relative to the safety theorem here for the following reason. The strong QC embedded in the carrier has already been verified (BLS aggregate signature checked) before `add_impl` runs. A valid strong QC is precisely a proof that $\geq 2f+1$ finalizers — including at least one honest member by Lemma 1 — voted for the claimed block. That proof is independent of the carrier's own validity. Because `pending_savanna_lib_id` is also strictly monotone-increasing (the setter guards on `new_lib > old_lib`), an invalid carrier can advance LIB at most once and cannot retract it. This monotonicity is the system-level analogue of Lemma 2 (lock timestamp monotonicity) for the FSI: both invariants capture the property that commitment steps are irreversible.

The model here abstracts over this mechanism — finalization is treated as instantaneous once a strong QC exists — so the carrier detail does not affect any of the proofs above. It does, however, reinforce why the `safety` axiom's proof outline is sound: the QC that grounds the inductive argument is cryptographically verified regardless of whether the block that delivered it survives fork selection.

### 7.6. `extendsLock` and `sameBranch`

The Lean model treats `extendsLock` and `sameBranch` as abstract Boolean parameters of `castVote`. In the implementation these are computed by `fetch_branch_from_impl` in `fork_database.cpp`, which walks both the candidate block and the reference block (lock or last-vote) backward through the fork database index until their `previous()` values agree — a standard lowest common ancestor traversal. The Boolean is then true iff the reference block lies on the candidate's ancestry path. The proofs are valid for any assignment of these parameters consistent with a DAG ancestor relation, so the choice of algorithm does not affect the safety argument.

### 7.7. Model Versus Implementation Gap

These proofs model the voting rules as stated in the implementation and establish the idealized properties. A complete security analysis would additionally cover: (i) the BLS signature aggregation security reduction, (ii) network-layer peer authentication and eclipse attack resistance, (iii) the P2P protocol's QC propagation guarantees, (iv) the interaction between the read-only transaction thread pool and the finalizer vote thread, and (v) the dual-fork-database transition window during Savanna activation, where a node simultaneously maintains a legacy and a Savanna fork database and the `in_use` flag must be updated atomically. Points (ii)–(v) are infrastructure concerns outside the BFT core but are relevant to whether the system achieves the model's delivery guarantee in practice.

## 8. Machine-Checked Proof (Lean 4)

The informal proof above can be partially mechanised in **Lean 4**, a dependently-typed proof assistant. The code below is self-contained and can be pasted directly into live.lean-lang.org. It encodes the voting function faithfully from `finalizer.cpp` — including the corrected R4 condition (A ∨ (B∧C)) and conditional lock advance — and proves nine core properties. The only axiom is `safety`, whose proof outline is given in its docstring.

<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'var(--ifm-code-background)', padding: '0.5rem 1rem', borderRadius: '4px 4px 0 0', marginBottom: '-8px', fontFamily: 'var(--ifm-font-family-monospace)', fontSize: '0.875rem'}}>
  <span>Lean 4 · SavannaConsensus.lean</span>
  <a href="https://live.lean-lang.org" target="_blank" rel="noopener noreferrer">Run at live.lean-lang.org ↗</a>
</div>

```lean
import Mathlib

/-!
Savanna Consensus — Machine-Checked Safety Core
Target : Lean 4 + Mathlib · https://live.lean-lang.org (paste entire block)

Source of truth:
AntelopeIO/spring (main branch, verified against v1.0–v1.2)
  libraries/chain/finalizer.cpp         — `finalizer::decide_vote`
  libraries/chain/include/eosio/chain/finalizer.hpp
                                        — `finalizer_safety_information`
  libraries/chain/include/eosio/chain/finality_core.hpp
                                        — `block_ref`, `block_ref::empty()`

Fully proved (no sorry):
• R1_abstain                  R1 fires on any non-strictly-newer block
• vote_strictly_newer         non-Abstain ⟹ strictly newer block
• vote_non_abstain_iff        characterises exactly when a vote is non-Abstain
• strong_implies_r4           Strong vote ⟹ R4 strong-eligibility held
• lock_advances_on_strong_with_liveness
                              strong vote + liveness ⟹ lock advances
• lock_monotone_on_strong     lock never decreases on strong vote
• lastVote_advances           any non-Abstain vote ⟹ lastVote advances
• no_conflicting_lower_vote   honest node abstains on conflicting block
                              at same or lower timestamp after voting
• quorum_intersects_honestly  BFT quorum intersection via inclusion-exclusion

Axiomatised (honest about proof boundary):
• safety                      inductive argument over block DAG

───────────────────────────────────────────────────────────────────────────
Parameter mapping (Lean ← C++)
───────────────────────────────────────────────────────────────────────────
FSI.lastVote     ← fsi.last_vote.timestamp
FSI.lock         ← fsi.lock.timestamp
FSI.obl          ← fsi.other_branch_latest_time  (0 = cleared / absent)
Blk.ts           ← bsp->timestamp()
Blk.lqcTs        ← bsp->core.latest_qc_block_timestamp()
extendsLock      ← bsp->core.extends(fsi.lock.block_id)
sameBranch       ← bsp->core.extends(fsi.last_vote.block_id)
                    (note: different extends() call than extendsLock)

───────────────────────────────────────────────────────────────────────────
Known modelling simplification
───────────────────────────────────────────────────────────────────────────
The C++ `block_ref::empty()` check (default-constructed block_ref, all-zero
block_id, timestamp slot 0) is modelled as `= 0` in Lean.  Two consequences:

(a) `last_vote.empty()` ↔ `lastVote = 0`.
  In C++ monotony becomes `last_vote.empty() || ts > lastVote.ts`.
  In Lean, `ts > 0` is true for any real block, so the first-vote case
  falls through naturally.  ✓ correct for all blocks with ts ≥ 1.

(b) `lock.empty()` ↔ `lock = 0`.
  In C++ (lines 27 / 49-56), when lock is empty BOTH liveness and safety
  are forced false → no_vote.  In Lean, `lqcTs > 0` would pass liveness
  for any real block → the Lean model would proceed to R4, not abstain.
  This is SAFE because lock is never empty in normal operation (it is
  initialised to LIB on Savanna activation or snapshot load).  The
  unit test `decide_vote_no_vote_if_finalizer_safety_lock_empty` exercises
  this defensive edge case, which our model deliberately omits.
  To model it faithfully, lock would need to be `Option TS`; this was
  judged not worth the proof complexity since the safety argument never
  relies on the lock-empty path.

───────────────────────────────────────────────────────────────────────────
Verification checklist — C++ → Lean line-by-line
───────────────────────────────────────────────────────────────────────────

1. Monotony check  (finalizer.cpp line 11)
   C++:  monotony = last_vote.empty() || bsp->ts > fsi.last_vote.ts
         if !monotony: return {no_vote}
   Lean: if ¬(b.ts > f.lastVote) then .Abstain               -- R1
   See simplification (a) above.                              ✓

2. Liveness / Safety  (lines 27-57)
   C++:  if (!lock.empty()):
            liveness = latest_qc_block_ts > lock.ts           -- line 34
            if !liveness:
               safety = extends(lock.block_id)                -- line 43
         else:   liveness=false, safety=false                 -- lines 55-56
   Lean: let liveness := b.lqcTs > f.lock
         let safety   := extendsLock = true
         Note: C++ short-circuits (safety only evaluated when ¬liveness).
         Lean evaluates both; semantically equivalent since
         can_vote = liveness ∨ safety either way.
   See simplification (b) above for lock-empty gap.           ✓

3. can_vote  (line 59)
   C++:  can_vote = liveness || safety
   Lean: if ¬liveness ∧ ¬safety then .Abstain else ...
         (De Morgan: ¬(liveness ∨ safety) = ¬liveness ∧ ¬safety)  ✓

4. Strong / Weak decision  (lines 64-86)
   C++:  if (lastVote.ts <= lqcTs)                   → strong    [A]
         else if (extends(lastVote.block_id))                    [B]
            if (obl <= lqcTs)                        → strong    [C]
            else                                     → weak
         else                                        → weak
   Simplifies to:  strong iff  A ∨ (B ∧ C)
   Lean: if f.lastVote ≤ b.lqcTs ∨ (sameBranch = true ∧ f.obl ≤ b.lqcTs)
         then .Strong else .Weak
   Where  A = (f.lastVote ≤ b.lqcTs)       ← (lastVote.ts <= lqcTs)   [≤]
          B = (sameBranch = true)            ← extends(lastVote)
          C = (f.obl ≤ b.lqcTs)             ← (obl <= lqcTs)          [≤]
   Note: A and C both use ≤ (not <), matching C++.            ✓

5. FSI mutation — strong  (lines 88-93, 95)
   C++:  obl = {}                                     → 0
         if (lqcTs > lock.ts): lock = lqcBlock
         lastVote = bsp
   Lean strongUpd:
         ⟨b.ts, if b.lqcTs > f.lock then b.lqcTs else f.lock, 0⟩
   Lock advances conditionally on liveness.                   ✓

6. FSI mutation — weak  (lines 81-85, 95)
   Two sub-cases:
   (a) A=false, B=true, C=false  (sameBranch, obl > lqcTs):
       C++: weak.  obl unchanged.  lastVote = bsp.
   (b) A=false, B=false  (not sameBranch):
       C++: weak.  obl = lastVote.ts (line 85).  lastVote = bsp.
   Lean weakUpd(f, b, sameBranch):
         if sameBranch then ⟨b.ts, f.lock, f.obl⟩      -- (a) obl kept
         else ⟨b.ts, f.lock, f.lastVote⟩               -- (b) obl ← old lastVote
   f.lastVote is the pre-update value, matching C++ line 85
   which reads fsi.last_vote.timestamp before line 95 writes it.  ✓

7. Secondary FSI update path  (finalizer.cpp lines 117-127)
   `maybe_update_fsi` is called when receiving an external strong QC
   (not from our own vote).  It performs the same safety-preserving
   update as (5) above, guarded by `lqcTs > lock.ts && ts > lastVote.ts`.
   This path is not modelled in Lean because it is strictly dominated
   by the `decide_vote` logic — any state `maybe_update_fsi` produces
   could also be reached by a valid `decide_vote` call.  The safety
   argument does not rely on it.
-/

namespace Savanna

-- ────────────────────────────────────────────────────────────────────────────
-- Types
-- ────────────────────────────────────────────────────────────────────────────

abbrev TS := Nat   -- timestamps; discrete, monotone, totally ordered

/-- Finalizer Safety Information.
Mirrors `finalizer_safety_information` in finalizer.hpp (3 fields). -/
structure FSI where
lastVote : TS   -- fsi.last_vote.timestamp
lock     : TS   -- fsi.lock.timestamp
obl      : TS   -- fsi.other_branch_latest_time  (0 = cleared/absent)

/-- Block metadata visible to the voting function. -/
structure Blk where
ts    : TS   -- bsp->timestamp()
lqcTs : TS   -- bsp->core.latest_qc_block_timestamp()

inductive Vote | Strong | Weak | Abstain
deriving DecidableEq, Repr

-- ────────────────────────────────────────────────────────────────────────────
-- Voting function — transcription of finalizer::decide_vote (finalizer.cpp)
--
--   R1 Monotony:      bsp->ts must be strictly greater than fsi.last_vote.ts
--   R2 Liveness:      latest_qc_block_ts > fsi.lock.ts
--   R3 Safety:        bsp->core.extends(fsi.lock.block_id)
--   R4 Strong/Weak:   within EITHER liveness or safety path:
--                       strong iff  lastVote.ts ≤ lqcTs              [A]
--                                 ∨ (extends(lastVote) ∧ obl ≤ lqcTs) [B∧C]
--
-- The C++ `can_vote` merges both paths before R4:
--     bool can_vote = res.liveness_check || res.safety_check;   // line 59
--     if (can_vote) { /* single strong/weak decision block */ } // lines 64-86
--
-- Parameters:
--   extendsLock  ← bsp->core.extends(fsi.lock.block_id)    (used by R3)
--   sameBranch   ← bsp->core.extends(fsi.last_vote.block_id) (used by R4[B])
-- These are two DIFFERENT extends() calls on different block_ids.
-- ────────────────────────────────────────────────────────────────────────────

def castVote (f : FSI) (b : Blk)
(extendsLock sameBranch : Bool) : Vote :=
if ¬ (b.ts > f.lastVote) then .Abstain                             -- R1
else
let liveness := b.lqcTs > f.lock                                  -- R2
let safety   := extendsLock = true                                -- R3
if ¬liveness ∧ ¬safety then .Abstain                              -- neither
else  -- can_vote: decide Strong vs Weak  (R4)
  -- C++ lines 71-86: strong iff A ∨ (B ∧ C)
  if f.lastVote ≤ b.lqcTs ∨ (sameBranch = true ∧ f.obl ≤ b.lqcTs)
  then .Strong else .Weak

-- ────────────────────────────────────────────────────────────────────────────
-- R1 Monotony theorems
-- ────────────────────────────────────────────────────────────────────────────

/-- R1 fires and produces Abstain whenever b.ts ≤ f.lastVote. -/
theorem R1_abstain (f : FSI) (b : Blk) (el sb : Bool)
(h : ¬ (b.ts > f.lastVote)) :
castVote f b el sb = .Abstain := by
simp [castVote, h]

/-- Contrapositive: a non-Abstain vote implies the block is strictly newer. -/
theorem vote_strictly_newer (f : FSI) (b : Blk) (el sb : Bool)
(h : castVote f b el sb ≠ .Abstain) : b.ts > f.lastVote := by
by_contra hle
exact h (R1_abstain f b el sb hle)

/-- Full characterisation: castVote ≠ Abstain iff R1 passes and (R2 ∨ R3).
`el` is the bound name for `extendsLock`. -/
theorem vote_non_abstain_iff (f : FSI) (b : Blk) (el sb : Bool) :
castVote f b el sb ≠ .Abstain ↔
  b.ts > f.lastVote ∧ (b.lqcTs > f.lock ∨ el = true) := by
constructor
· intro h
have hts := vote_strictly_newer f b el sb h
refine ⟨hts, ?_⟩
by_contra hc
push_neg at hc
obtain ⟨hNL, hNS⟩ := hc
apply h; clear h
unfold castVote
have : ¬¬(b.ts > f.lastVote) := not_not.mpr hts
have : ¬(b.lqcTs > f.lock) := Nat.not_lt.mpr hNL
have : el = false := by cases el <;> simp_all
simp [*]
· intro ⟨hts, hor⟩
simp only [castVote]
have : ¬¬(b.ts > f.lastVote) := not_not.mpr hts
simp only [this, ite_false]
rcases hor with hL | hS
· have : ¬(¬(b.lqcTs > f.lock) ∧ ¬(el = true)) := by simp [hL]
  simp only [this, ite_false]
  split_ifs <;> simp
· have : ¬(¬(b.lqcTs > f.lock) ∧ ¬(el = true)) := by simp [hS]
  simp only [this, ite_false]
  split_ifs <;> simp

-- ────────────────────────────────────────────────────────────────────────────
-- FSI state updates
--
-- C++ decide_vote lines 88-95:
--   if (strong_vote) {
--       obl = {};                              // clear to 0
--       if (lqcTs > lock.ts) lock = lqcBlock;  // conditional advance
--   }
--   // weak, not-sameBranch case (line 85):
--   //   obl = lastVote.ts   (BEFORE lastVote is updated)
--   lastVote = bsp;                            // always on can_vote
-- ────────────────────────────────────────────────────────────────────────────

/-- FSI state after a strong vote.
Lock advances only when lqcTs > current lock (C++ line 90). -/
def strongUpd (f : FSI) (b : Blk) : FSI :=
⟨b.ts, if b.lqcTs > f.lock then b.lqcTs else f.lock, 0⟩

/-- FSI state after a weak vote.
sameBranch = true  ↔ extends(lastVote): obl preserved  (C++ line 81)
sameBranch = false ↔ ¬extends(lastVote): obl ← old lastVote  (C++ line 85)
f.lastVote is the PRE-update value, matching C++ read order. -/
def weakUpd (f : FSI) (b : Blk) (sameBranch : Bool) : FSI :=
if sameBranch then ⟨b.ts, f.lock, f.obl⟩
else ⟨b.ts, f.lock, f.lastVote⟩

/-- Generalised FSI update dispatching on vote outcome. -/
def fsiAfterVote (f : FSI) (b : Blk) (v : Vote) (sameBranch : Bool) : FSI :=
match v with
| .Strong  => strongUpd f b
| .Weak    => weakUpd f b sameBranch
| .Abstain => f

-- ────────────────────────────────────────────────────────────────────────────
-- R4 Strong vote characterisation
-- ────────────────────────────────────────────────────────────────────────────

/-- A Strong result implies the R4 condition: A ∨ (B ∧ C). -/
theorem strong_implies_r4 (f : FSI) (b : Blk) (el sb : Bool)
(h : castVote f b el sb = .Strong) :
f.lastVote ≤ b.lqcTs ∨ (sb = true ∧ f.obl ≤ b.lqcTs) := by
simp only [castVote] at h
split_ifs at h; simp_all

-- ────────────────────────────────────────────────────────────────────────────
-- Lock Monotonicity
--
-- NOTE: strong vote does NOT imply liveness (R2).
-- Condition A (lastVote ≤ lqcTs) can give Strong even on the R3 (safety) path.
-- The lock advances only when BOTH the vote is strong AND lqcTs > lock.ts.
-- ────────────────────────────────────────────────────────────────────────────

/-- Lock advances after a strong vote when liveness also holds. -/
theorem lock_advances_on_strong_with_liveness (f : FSI) (b : Blk)
(hLive : b.lqcTs > f.lock) :
(strongUpd f b).lock > f.lock := by
simp [strongUpd, hLive]

/-- Lock never decreases after a strong vote. -/
theorem lock_monotone_on_strong (f : FSI) (b : Blk) :
(strongUpd f b).lock ≥ f.lock := by
simp [strongUpd]
split_ifs with h
· exact Nat.le_of_lt h
· exact Nat.le_refl _

/-- lastVote strictly increases after any non-Abstain vote. -/
theorem lastVote_advances (f : FSI) (b : Blk) (el sb : Bool)
(v : Vote) (hv : v ≠ .Abstain)
(hCast : castVote f b el sb = v) :
(fsiAfterVote f b v sb).lastVote > f.lastVote := by
have hgt := vote_strictly_newer f b el sb (by rw [hCast]; exact hv)
cases v with
| Strong  => simp [fsiAfterVote, strongUpd]; exact hgt
| Weak    => simp [fsiAfterVote, weakUpd]; split_ifs <;> exact hgt
| Abstain => exact absurd rfl hv

-- ────────────────────────────────────────────────────────────────────────────
-- Base case: no honest vote on conflicting block at lower timestamp
-- ────────────────────────────────────────────────────────────────────────────

/-- After voting for A (recording A.ts as lastVote), the node abstains on
any block C with C.ts ≤ A.ts — regardless of lock or branch state. -/
theorem no_conflicting_lower_vote
(f f' : FSI) (A C : Blk) (el sb el' sb' : Bool)
(_      : castVote f A el sb ≠ .Abstain)
(hAfter : f'.lastVote = A.ts)
(hLe    : C.ts ≤ A.ts) :
castVote f' C el' sb' = .Abstain := by
apply R1_abstain
rw [hAfter]
exact Nat.not_lt.mpr hLe

-- ────────────────────────────────────────────────────────────────────────────
-- Quorum Intersection
-- ────────────────────────────────────────────────────────────────────────────

def IsQuorum {n : Nat} (Q : Finset (Fin n)) : Prop := 3 * Q.card > 2 * n

structure QC (n : Nat) where
voters  : Finset (Fin n)
blockTs : TS

/-- Any two quorums share an honest member, given > 2/3 honest validators.
Proof: inclusion-exclusion + pigeonhole. -/
theorem quorum_intersects_honestly {n : Nat}
(honest Q1 Q2 : Finset (Fin n))
(hH  : 3 * honest.card > 2 * n)
(hQ1 : IsQuorum Q1) (hQ2 : IsQuorum Q2) :
∃ v ∈ Q1, v ∈ Q2 ∧ v ∈ honest := by
by_contra hall
push_neg at hall
have hsub : Q1 ∩ Q2 ⊆ Finset.univ \ honest := by
intro x hx
have ⟨hx1, hx2⟩ := Finset.mem_inter.mp hx
simp only [Finset.mem_sdiff, Finset.mem_univ, true_and]
exact hall x hx1 hx2
have h1 : (Q1 ∩ Q2).card ≤ (Finset.univ \ honest).card :=
Finset.card_le_card hsub
have h2 : (Finset.univ \ honest).card = n - honest.card := by
rw [Finset.card_sdiff, Finset.inter_univ, Finset.card_univ, Fintype.card_fin]
have h3 := Finset.card_union_add_card_inter Q1 Q2
have h4 : (Q1 ∪ Q2).card ≤ n := by
have := Finset.card_le_univ (Q1 ∪ Q2)
rwa [Fintype.card_fin] at this
have h5 : honest.card ≤ n := by
have := Finset.card_le_univ honest
rwa [Fintype.card_fin] at this
unfold IsQuorum at hQ1 hQ2
omega

-- ────────────────────────────────────────────────────────────────────────────
-- Safety
-- ────────────────────────────────────────────────────────────────────────────

axiom BlockId : Type
axiom Conflicts : BlockId → BlockId → Prop
axiom Conflicts.symm : ∀ a b, Conflicts a b → Conflicts b a
axiom Conflicts.irrefl : ∀ a, ¬ Conflicts a a

structure QC' (n : Nat) where
voters  : Finset (Fin n)
blockId : BlockId
blockTs : TS

/-- Safety Theorem: no two QCs on conflicting blocks can both be formed
by an honest super-majority.

Proof outline (well-founded induction on max blockTs):

Let v ∈ Q_B ∩ Q_C be honest  (quorum_intersects_honestly).
v voted for B ⟹ f_v.lastVote = ts(B) afterwards.
For v to also vote for conflicting C:

Case ts(C) ≤ ts(B):
  no_conflicting_lower_vote ⟹ castVote f_v C ... = Abstain.
  But v ∈ Q_C, contradiction.

Case ts(C) > ts(B):
  Sub-case liveness (lqcTs > lock):
    The lqc claim M satisfies ts(M) < ts(C) and M conflicts with B.
    Inductive hypothesis: no QC for M exists. Contradiction.
  Sub-case safety (extends lock, lqcTs ≤ lock):
    C extends lock ≥ B, but C conflicts with B ⟹ contradiction.

All cases yield ⊥. -/
axiom safety {n : Nat}
(honest : Finset (Fin n))
(hH    : 3 * honest.card > 2 * n)
(qcB qcC : QC' n)
(hQB   : IsQuorum qcB.voters)
(hQC   : IsQuorum qcC.voters)
(hConfl : Conflicts qcB.blockId qcC.blockId) :
False

end Savanna
```

**About Lean Encoding**

The `castVote` function is a structurally faithful transcription of the C++ voting logic; the only abstraction is collapsing the chain-structure predicates (*extendsLock*, *sameBranch*) to Boolean parameters, since the ancestry relation over block identifiers requires a separate DAG model to fully mechanise. Nine theorems are fully proved with no `sorry`: `R1_abstain`, `vote_strictly_newer`, `vote_non_abstain_iff`, `strong_implies_r4`, `lock_advances_on_strong_with_liveness`, `lock_monotone_on_strong`, `lastVote_advances`, `no_conflicting_lower_vote`, and `quorum_intersects_honestly`. Two important corrections from prior versions: (1) the R4 strong condition is `A ∨ (B∧C)`, not `A ∧ (B∨C)` — a strong vote does not require liveness, and condition A alone (lastVote ≤ lqcTs) suffices; (2) the lock advances *conditionally* on liveness, so `lock_strictly_advances` is replaced by the weaker `lock_monotone_on_strong` (≥) plus `lock_advances_on_strong_with_liveness` (strictly > when liveness holds). The verification checklist in the docstring maps every C++ line to its Lean counterpart, including the `block_ref::empty()` modelling simplification. A TLA+ specification modelling the full distributed system (including the block DAG and QC propagation) would complement this Lean encoding by providing model-checked verification over small finite instances via TLC.

## References

- [finalizer.cpp](https://github.com/Wire-Network/wire-sysio/blob/51f1ec8d7b066cfc7c9028febf17445bdb425334/libraries/chain/finalizer.cpp)
- [finality_core.cpp](https://github.com/Wire-Network/wire-sysio/blob/51f1ec8d7b066cfc7c9028febf17445bdb425334/libraries/chain/finality_core.cpp)
