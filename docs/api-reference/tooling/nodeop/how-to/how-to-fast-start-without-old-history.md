---
title: Fast start without previous history
---

## Goal

This procedure records the current chain state and future history, without previous historical data on the local chain.

## Before you begin

* Make sure [Wire core](/docs/getting-started/install-dependencies.md) is installed.
* Learn about [Using Nodeop](../usage/index.md).
* Get familiar with [state_history_plugin](../plugins/state-history-plugin.md).

## Steps

1. Get the following:
   * A portable snapshot (`data/snapshots/snapshot-xxxxxxx.bin`)
   * Optional: a block log which includes the block the snapshot was taken at

2. Make sure `data/state` does not exist

3. Start `nodeop` with the `--snapshot` option, and the options listed in the [`state_history_plugin`](../plugins/state-history-plugin.md).

4. Look for `Placing initial state in block n` in the log, where n is the start block number.

5. If using a database filler, start the filler with `--fpg-create` (if PostgreSQL), `--fill-skip-to n`, and `--fill-trim`. Replace `n` with the value above.

6. Do not stop `nodeop` until it has received at least 1 block from the network, or it won't be able to restart.

## Notes

If `nodeop` fails to receive blocks from the network, then try the above using `net_api_plugin`. Use `clio net disconnect` and `clio net connect` to reconnect nodes which timed out.

:::warning[Caution when using `net_api_plugin`]
| Either use a firewall to block access to your `http-server-address`, or change it to `localhost:8888` to disable remote access.
:::

:::info
| If you run a database filler after this point, use the `--fill-trim` option when restarting. Only use `--fpg-create` and `--fill-skip-to` the first time.
:::

:::info
| On large chains, this procedure creates a delta record that is too large for javascript processes to handle. 64-bit C++ processes can handle the large record. If using a database filler, `fill-pg` and `fill-lmdb` break up the large record into smaller records when filling databases.
:::