---
title: Restore Snapshot with Full State History
---

## Overview

This guide details how to restore an existing snapshot along with its full state history.

## Prerequisites

* You have a local instance of `nodeop` running.
* You are familiar with the [state_history_plugin](../plugins/state-history-plugin.md).

## Steps

1. Obtain the following items:
   * A portable snapshot (located at `data/snapshots/snapshot-xxxxxxx.bin`)
   * The contents of `data/state-history`
   * (Optional) A block log covering the block at which the snapshot was taken (exclude the `data/blocks/reversible` folder)

2. Remove the `data/state` directory.

3. Start nodeop with the `--snapshot` option along with the options specified in the [state_history_plugin](../plugins/state-history-plugin.md).

4. Allow nodeop to run until it has received at least one block from the network, ensuring it can fully restart.

## Notes

If nodeop fails to receive blocks from the network, consider enabling the `net_api_plugin` using the following commands:

```sh
clio net disconnect
clio net connect
```

:::warning net_api_plugin
For security, ensure that the `http-server-address` is not exposed. Either restrict it via a firewall or set it to `localhost:8888` to disable remote access.
:::
