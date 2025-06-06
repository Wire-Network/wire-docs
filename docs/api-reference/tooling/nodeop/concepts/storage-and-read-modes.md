---
title: Storage and Read Modes
---

The Wire platform stores blockchain information in various data structures at various stages of a transaction's lifecycle. Some of these are described below. The producing node is the `nodeop` instance run by the block producer who is currently creating blocks for the blockchain (which changes every 6 seconds, producing 12 blocks in sequence before switching to another producer).

## Blockchain State and Storage

Every `nodeop` instance creates some internal files to store the blockchain state. These files reside in the `~/sysio/nodeop/data` installation directory and their purpose is described below:

* The `blocks.log` is an append only log of blocks written to disk and contains all the irreversible blocks. These blocks contain final, confirmed transactions.
* `reversible_blocks` is a memory mapped file and contains blocks that have been written to the blockchain but have not yet become irreversible. These blocks contain valid pushed transactions that still await confirmation to become final via the consensus protocol. The head block is the last block written to the blockchain, stored in `reversible_blocks`.
* The `chain state` or `chain database` is stored either in `chainbase` or in `rocksdb`, dependant on the `nodeop` `chain_plugin` configuration option `backing-store`. It contains the blockchain state associated with each block, including account details, deferred transactions, and data stored using multi index tables in smart contracts. The last 65,536 block IDs are also cached to support Transaction as Proof of Stake (TaPOS). The transaction ID/expiration is also cached until the transaction expires.
* The `pending block` is an in memory block containing transactions as they are processed and pushed into the block; this will/may eventually become the head block. If the `nodeop` instance is the producing node, the pending block is distributed to other `nodeop` instances.
* Outside the `chain state`, block data is cached in RAM until it becomes final/irreversible; specifically the signed block itself. After the last irreversible block (LIB) catches up to the block, that block is then retrieved from the irreversible blocks log.

### Configurable state storage

`Nodeop` stores the transaction history and current state. The transaction history is stored in the `blocks.log` file on disk. Current state, which is changed by the execution of transactions, is currently stored using chainbase or RocksDB. Wire Sysio introduces configurable state storage and currently supports these backing stores:

* Chainbase
* RocksDB

Chainbase is a proprietary in-memory transactional database, built by Block.one, which uses memory mapped files for persistence.

RocksDB is an open source persistent key value store. Storing state in memory is fast, however limited by the amount of available RAM. RocksDB utilises low latency storage such as flash drives and high-speed disk drives to persist data and memory caches for fast data access. For some deployments, RocksDB may be a better state store. See [the RocksDB website](https://rocksdb.org/) for more information.

## Wire Sysio Interfaces

<!-- https://developers.eos.io/manuals/sysio.cdt/latest/files - check link -->
<!-- !TODO add references for interfaces and services -->
Wire provides a set of services and interfaces that enable contract developers to persist state across action, and consequently transaction, boundaries. Contracts may use these services and interfaces for various purposes. For example, `sysio.token` contract keeps balances for all users in the `chain database`. Each instance of `nodeop` maintains the `chain database` in an efficient data store, so contracts can read and write data with ease.

### Nodeop RPC API

The `nodeop` service provides query access to the chain database via the HTTP [RPC API](../nodeop-apis.md).

## Nodeop Read Modes

The `nodeop` service can be run in different "read" modes. These modes control how the node operates and how it processes blocks and transactions:

* `head`: this only includes the side effects of confirmed transactions, this mode processes unconfirmed transactions but does not include them.
*`speculative`: this includes the side effects of confirmed and unconfirmed transactions.
* `irreversible`: this mode also includes confirmed transactions only up to those included in the last irreversible block.

A transaction is considered confirmed when a `nodeop` instance has received, processed, and written it to a block on the blockchain, i.e. it is in the head block or an earlier block.

### Head Mode

Clients such as `clio` and the RPC API will see database state as of the current head block of the chain. Since current head block is not yet irreversible and short-lived forks are possible, state read in this mode may become inaccurate if `nodeop` switches to a better fork.

This mode represents a good trade-off between highly consistent views of the data and latency.

In this mode `nodeop` is able to execute transactions which have TaPoS pointing to any valid block in a fork considered to be the best fork by this node.

### Read-Only Mode

:::warning
| The explicit `read-mode = read-only` mode is deprecated. Similar functionality can now be achieved in `head` mode by combining options: `read-mode = head`, `p2p-accept-transactions = false`, `api-accept-transactions = false`.
:::
Clients such as `clio` and the RPC API will see database state as of the current head block of the chain. It **will not** include changes made by transactions known to this node but not included in the chain, such as unconfirmed transactions.

### Irreversible Mode

When `nodeop` is configured to be in irreversible read mode, it will still track the most up-to-date blocks in the fork database, but the state will lag behind the current best head block, sometimes referred to as the fork DB head, to always reflect the state of the last irreversible block.

Clients such as `clio` and the RPC API will see database state as of the current head block of the chain. It **will not** include changes made by transactions known to this node but not included in the chain, such as unconfirmed transactions.

### Speculative Mode ( Deprecated )

Clients such as `clio` and the RPC API, will see database state as of the current head block plus changes made by all transactions known to this node but potentially not included in the chain, unconfirmed transactions for example.

Speculative mode is low latency but fragile, there is no guarantee that the transactions reflected in the state will be included in the chain OR that they will reflected in the same order the state implies.

This mode features the lowest latency, but is the least consistent.

In speculative mode `nodeop` is able to execute transactions which have TaPoS (Transaction as Proof of Stake) pointing to any valid block in a fork considered to be the best fork by this node.

## How To Specify the Read Mode

The mode in which `nodeop` is run can be specified using the `--read-mode` option from the `sysio::chain_plugin`.
