---
title: Create a Snapshot with Full State History
---

## Overview

This tutorial demonstrates how to create a complete snapshot of your blockchain state that includes full historical data since genesis. This snapshot can be used to restore a node with complete chain history, making it useful for setting up new nodes that need access to all historical transactions and account states. The process involves creating a snapshot and backing up the snapshot along with state history files.

## Prerequisites

* You must have a local instance of [nodeop](../index.md) running. For instructions on setting up a local chain, please refer to [Install Dependencies](/docs/getting-started/install-dependencies.md) article.
* Ensure that the [state_history_plugin](../plugins/state-history-plugin.md) and [producer_api_plugin](../plugins/producer-api-plugin.md) are both enabled on your `nodeop` instance; Producer API must be accessible via HTTP on port 8887. If you followed standard installation with `wire-cli`, `producer_api_plugin` is already enabled and configured at `/opt/wire-network/blockproducer/config/config.ini` and `state_history_plugin` is enabled in `/opt/wire-network/chain-api/config/config.ini`.

## Steps

* Create a portable snapshot:

```sh
curl http://127.0.0.1:8887/v1/producer/create_snapshot | json_pp
```

* Wait for `nodeop` to process several more blocks after the snapshot completed. This ensures that the state-history files include **at least one block** beyond the snapshot, and that the `blocks.log` file contains the next block after it becomes irreversible.

:::info
| If the block included in the snapshot is forked out, then the snapshot will be invalid.
:::

1. Stop `nodeop` by running: `/opt/wire-network/blockproducer/stop.sh`.

2. Back up the following items:

   * **Snapshot:**  
     * The newly-created snapshot:  
       `data/snapshots/snapshot-xxxxxxx.bin`

   * **State History:**  
     * `chain_state_history.log`  
     * `trace_history.log`  
     * `chain_state_history.index` *(Optional — restoring will take longer without this file)*  
     * `trace_history.index` *(Optional — restoring will take longer without this file)*

   * **Blocks (Optional):**  
     * The contents of `data/blocks` (exclude the `data/blocks/reversible` directory)
