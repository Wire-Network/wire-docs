---
title: Create a snapshot with full state history
---

## Overview

This tutorial creates a database containing the chain state, with full history since the genesis state.

## Prerequisites

* Install the currently supported version of `clio`.

:::info
| The `clio` tool and `kiod` are bundled with the Wire software. [Installing Wire core](/docs/getting-started/install-dependencies.md) will install the `clio` and `kiod` command line tools.
:::

* Learn about [Using Nodeop](../usage/index.md).
* Get familiar with [state_history_plugin](../plugins/state-history-plugin.md).

## Steps

* Enable the `producer_api_plugin` on a node with full state-history.  

:::danger `producer_api_plugin`
| Either use a firewall to block access to `http-server-address`, or change it to `localhost:8888` to disable remote access.
:::

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
