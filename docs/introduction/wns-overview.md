---
id: wns-overview
slug: /introduction/wns-overview
# tags: [introduction, overview, wire network]
---

# Interoperability & WNS

## Introduction

Blockchain interoperability refers to the ability of different blockchain networks to communicate and exchange data while maintaining decentralization. With the proliferation of diverse blockchain projects over the past decade—each employing unique protocols and architectures—the challenge of seamless cross-chain interoperability has become increasingly complex. The lack of standardization in this domain has made the vision of a universal solution elusive. Various organizations have attempted to address interoperability through methods such as traditional bridges, side-chains, parachains, messaging protocols, and other innovations.

While these solutions offer different approaches, they often share common drawbacks. Many introduce potential security vulnerabilities and may compromise decentralization by relying on third-party entities for cross-chain transactions. Bridges and oracles, for example, have been prime targets for malicious activities due to architectural flaws that create centralized points of failure. Dependence on centralized components not only poses security risks but also diverges from the decentralized ideals that underpin blockchain technology. Such models can also diminish transparency within transaction systems.

Moreover, the heterogeneous nature of blockchain technology presents ongoing compatibility issues with both new and existing networks. Many interoperability solutions are inherently limited by the number of chains they can support, restricting their effectiveness in a rapidly evolving ecosystem.

At its core, Wire Network is designed to overcome these challenges. Wire Name Service (WNS), when combined with the Wire layer-1 settlement layer and the Universal Polymorphic Address Protocol, collectively forms to create a *Universal Transaction Layer* (UTL).

This article explores the architecture and processes of Wire Network and WNS, detailing how it addresses the inherent challenges of blockchain interoperability and sets a new standard for seamless cross-chain transactions.

## Design

The UTL's design is a hub-and-spoke model (see diagram below). This design enables transactions between different blockchain networks through a universal hub, providing a seamless, secure and cost-efficient way for environment for assets to interact & move between chains.

![wns-design](../../static/img/wns-design.png)

## Settlement Layer

Wire's layer-1 blockchain operates as the settlement layer for Wire Network. It is the backbone of the system, responsible for tracking the flow of assets into, within, and out of the network.

The settlement layer leverages high-performance blockchain technology to ensure rapid transaction speeds and substantial throughput, essential for supporting enterprise-grade applications and high-frequency trading. It utilizes the settle.wns smart contracts to maintain a comprehensive ledger of all assets deposited into the UTL and their ownership details. These contracts update ownership records with each transaction, ensuring transparency, security, and immutability of the transaction history.

WNS is comprised of native settlement and target chain ('escrow' or 'bucket') contracts, each with distinct functions at the different stages of an asset’s lifecycle.

## Security Principles

The security framework of WNS is robust, relying on multiple checks and balances to prevent malicious activities. Key features are the use of standard cryptographic proofs to verify transactions, implementation of UTXO model to track transaction outputs; as well utilizing a completely independent sub-chain to aid with the transaction verification process. This sub-chain, also knowns as S-chain (stands for *settlement*) includes only the relevant transactions and data needed for the target chain, allowing for fast and efficient processing.

### UTXO

The UTXO (Unspent Transaction Output) model views each token amount as a distinct, single-use account that is fully spent in every transaction. Every time a transaction occurs, the involved UTXOs are completely used and split into new UTXOs. In Wire Network, for example, instead of maintaining a single large balance, users have multiple UTXOs representing different amounts. This model supports efficient backtracking to specific deposits and is useful in scenarios where transactions need to be challenged or verified.

**Example:**

Bob wants to send 15 USDC to Alice. To complete the transaction, Bob’s wallet selects UTXOs that equal or exceed the required amount. UTXO #1 (12 USDC) and UTXO #2 (5 USDC) are selected, which together are total of 17 USDC.

![utxo-example](../../static/img/utxo-example.png)

The transaction consumes these UTXOs fully, creating two new outputs:

1. A new UTXO of 15 USDC for Alice, reflecting the amount Bob sent.
2. A new UTXO of 2 USDC for Bob, which is the leftover or “change” from the original UTXOs.

After the transaction, Bob now holds a new UTXO of 2 USDC, and Alice has a new UTXO of 15 USDC.
