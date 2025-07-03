---
title: Nodeop Replays
---

## Overview

Nodeop provides various options for replaying blockchain blocks. This is particularly useful when a node uses a downloaded `blocks.log` file—offering a faster alternative to p2p synchronization—to quickly catch up with the network, or when you need to inspect the blockchain state at specific points in time.

Replaying data can be done in two ways:

- From a **`blocks.log` file**:  
  The `blocks.log` file contains all irreversible transactions on the blockchain. All instances of `nodeop` write irreversible blocks to the `blocks.log` file, which is located in the `data/blocks/` directory relative to the `nodeop` directory. Using a `blocks.log` file to replay will allow you to start a `nodeop` instance that recreates the entire history of the blockchain locally.

- From a **snapshot file**:  
  Snapshot files can be created from a running `nodeop` instance. The snapshot contains the chain state for the block referenced when created. It is recommended to use snapshot files created from blocks that are irreversible. Using a snapshot file to replay allows you to quickly start a `nodeop` instance with a full and correct chain state at a specified block number, but without the full history of transactions up to that block number. From that point on, the `nodeop` instance will operate in the configured manner.

## Options

Typing `nodeop --help` on the command line will show you all the options available for running `nodeop`. The snapshot and replay specific options are:

### --force-all-checks

The node operator may not trust the source of the `blocks.log` file and may want to run `nodeop` with `--replay-blockchain --force-all-checks` the first time to make sure the blocks are good. The `--force-all-checks` flag can be passed into `nodeop` to tell it not to skip any checks during replay.

### --disable-replay-opts

By default, during replay, `nodeop` does not create a stack of chain state deltas (this stack is used to enable rollback of state for reversible blocks). This is a replay performance optimization. Using this option turns off this replay optimization and creates a stack of chain state deltas. If you are using the state history plugin you must use this option.

### --replay-blockchain

This option tells `nodeop` to replay from the `blocks.log` file located in the data/blocks directory. `nodeop` will clear the chain state and replay all blocks.

### --hard-replay-blockchain

This option tells `nodeop` to replay from the `blocks.log` file located in the data/blocks directory. `nodeop` makes a backup of the existing `blocks.log` file and then clears the chain state and replays all blocks. This option assumes that the backup `blocks.log` file may contain corrupted blocks, so `nodeop` replays as many blocks as possible from the backup block log. When `nodeop` finds the first corrupted block while replaying from `nodeop.log`, it will synchronize the rest of the blockchain from the p2p network.

### --delete-all-blocks

This tells `nodeop` to clear the local chain state and delete the `blocks.log` file. If you intend to then synchronize from the p2p network, you would need to provide a correct `genesis.json` file. This option is not recommended.

### --truncate-at-block

Default argument (=0), only used if the given value is non-zero. Using this option when replaying the blockchain will force the replay to stop at the specified block number. This option will only work if replaying with the `--hard-replay-blockchain` option, or when not replaying, the `--fix-reversible-blocks` option. The local `nodeop` process will contain the chain state for that block. This option may be useful for checking blockchain state at specific points in time and is intended for testing/validation, not for creating a local `nodeop` instance which is synchronized with the network.

### --snapshot

Use this option to specify which snapshot file to use to recreate the chain state from a snapshot file. This option will not replay the `blocks.log` file. The `nodeop` instance will not know the full transaction history of the blockchain.

### --snapshots-dir

Use this option to specify the location of the snapshot file directory (absolute path or relative to the application data directory).

### --blocks-dir

Use this option to specify the location of the `blocks.log` file directory (absolute path or relative to the application data directory).

## Resources

- [How To Generate a Snapshot](how-to/how-to-generate-a-snapshot.md)
- [How To Replay from a Blocks Log](how-to/how-to-replay-from-a-blocks.log.md)
- [How to Replay from a Snapshot](how-to/how-to-replay-from-a-snapshot.md)
