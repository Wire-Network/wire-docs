---
title: Replay or resync with full history
---

## Goal

This procedure records the entire chain history.

## Before you begin

* Make sure [Wire core](/docs/getting-started/install-dependencies.md) is installed.
* Learn about [Using Nodeop](../usage/index.md).
* Get familiar with [state_history_plugin](../plugins/state-history-plugin.md).

## Steps

1. Get a block log and place it in `data/blocks`, or get a genesis file and use the `--genesis-json` option

2. Make sure `data/state` does not exist, or use the `--replay-blockchain` option

3. Start `nodeop` with the options listed in the [`state_history_plugin`](../plugins/state-history-plugin.md)
