---
title: Storage and Read Modes
---

## Overview

Information on the blockchain is stored in various data structures throughout a transaction's lifecycle. The producing node is the `nodeop` instance run by the current block producer (which changes every 6 seconds, producing 12 blocks before switching to another producer). See [Block Producing Explained](/docs/api-reference/tooling/nodeop/block-production-explained.md) for more details.

## Blockchain State and Storage

Every `nodeop` instance creates internal files to store blockchain state in `/opt/wire-network/blockproducer/data` or `/opt/wire-network/chain-api/data` (assuming `wire-cli` installation).

Files:

* The `blocks.log` is a binary append-only log file that stores all _irreversible_ blocks in sequential order. Each block entry contains the complete block data, including its header, transactions, and cryptographic signatures. These blocks represent the canonical chain state and contain only final and confirmed transactions.
`blocks.log` is the actual local copy of the immutable blockchain maintained by the node. The default location of the `blocks.log` file is in the `data/blocks` directory. However, the default `data/` directory can be overridden with the `-d [ --data-dir ]` option on the `nodeop` command line.

* `reversible_blocks` is a memory-mapped file that contains blocks that have been written to the blockchain but have not yet become irreversible. These blocks contain valid pushed transactions that still await confirmation to become final via the consensus protocol. The head block, which is the most recent block written to the blockchain, is always stored in `reversible_blocks`.
* The `chain state` or `chain database` is currently stored and cached in a memory-mapped file. It contains the blockchain state associated with each block, including account details, and data stored using multi index tables in smart contracts. The last 65,536 block IDs are also cached to support [TaPoS (Transaction as Proof of Stake)](/docs/introduction/glossary.md#tapos-transaction-as-proof-of-stake). The transaction ID/expiration is also cached until the transaction expires.
* A `pending block` is an in-memory block containing transactions as they are processed and pushed into the block; this will/may eventually become the head block. When a node is the current node operator, it broadcasts its pending block to other nodes in the network.
* Outside the `chain state`, a block is first kept in RAM cache while it's still reversible. When this block becomes irreversible (when the LIB advances past it), it is then retrieved from the irreversible blocks log instead of RAM.

## Wire Sysio Interfaces

Wire provides a set of [services](/docs/api-reference/quick-reference.md) and interfaces that enable contract developers to persist state across action, and consequently transaction. Contracts may use these services and interfaces for various purposes. For example, `sysio.token` contract keeps balances for all users in the `chain database`. Each instance of `nodeop` maintains the `chain database` in an efficient data store, so contracts can read and write data with ease.

### Nodeop RPC API

The `nodeop` service provides query access to the chain database via HTTP [RPC API](./nodeop-apis.md).

## Nodeop Read Modes

`nodeop` can operate in different read modes that control how the node operates and processes blocks and transactions:

* `head` - includes only the side effects of confirmed transactions, this mode processes unconfirmed transactions but does not include them.
* `speculative`: includes the side effects of confirmed and unconfirmed transactions.
* `irreversible`: includes confirmed transactions only up to those included in the last irreversible block.

:::info
A transaction is considered confirmed when a `nodeop` instance has received, processed, and written it to a block on the blockchain, i.e. it is in the head block or an earlier block.
:::

Clients (e.g. `clio`, the RPC APIs) see database state according to the read mode: in `head` mode it reflects the current head block, which is still reversible and may change, if a short-lived fork wins; in `irreversible` mode it reflects the last irreversible block and excludes any effects from transactions known to the node but not yet included in the chain such as unconfirmed transactions; and in `speculative` mode  it reflects the current head block plus all pending (unconfirmed) transaction effects.

### Head Mode

In this mode, `nodeop` is able to execute transactions which have TaPoS pointing to any valid block in a fork considered to be the best fork by this node.

### Irreversible Mode

When `nodeop` is configured to be in irreversible read mode, it will still track the most up-to-date blocks in the fork database, but the state will lag behind the current best head block, sometimes referred to as the fork DB head, to always reflect the state of the last irreversible block.

### Speculative Mode (Deprecated)

Speculative mode is low latency but fragile, there is no guarantee that the transactions reflected in the state will be included in the chain OR that they will reflected in the same order the state implies.

This mode features the lowest latency, but is the least consistent.

In speculative mode `nodeop` is able to execute transactions which have TaPoS (Transaction as Proof of Stake) pointing to any valid block in a fork considered to be the best fork by this node.

## How To Specify the Read Mode

The mode in which `nodeop` is run can be specified using the `--read-mode` option from the `sysio::chain_plugin`.
