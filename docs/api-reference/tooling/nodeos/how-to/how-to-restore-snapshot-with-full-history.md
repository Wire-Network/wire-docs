---
title: Restore snapshot with full state history
---

## Goal

This procedure restores an existing snapshot with full history, so the node can become active in the blockchain.

## Before you begin

* Make sure [Wire core](/docs/getting-started/install-dependencies.md) is installed.
* Learn about [Using Nodeos](../usage/index.md).
* Get familiar with [state_history_plugin](../plugins/state-history-plugin.md).

## Steps

1. Get the following:
   * A portable snapshot (`data/snapshots/snapshot-xxxxxxx.bin`)
   * The contents of `data/state-history`
   * Optional: a block log which includes the block the snapshot was taken at. Do not include `data/blocks/reversible`.

2. Make sure `data/state` does not exist

3. Start `nodeos` with the `--snapshot` option, and the options listed in the [`state_history_plugin`](../plugins/state-history-plugin.md).

4. Do not stop `nodeos` until it has received at least 1 block from the network, or it won't be able to restart.

## Remarks

If `nodeos` fails to receive blocks from the network, then try the above using `net_api_plugin`. Use `cleos net disconnect` and `cleos net connect` to reconnect nodes which timed out.

[[caution | Caution when using `net_api_plugin`]]
| Either use a firewall to block access to `http-server-address`, or change it to `localhost:8888` to disable remote access.
