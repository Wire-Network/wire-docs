---
title: Generate a snapshot
---


## Overview

You can create a snapshot by using the [`create_snapshot` API endpoint](/docs/api-reference/producer-api#operation/create_snapshot) supported by the `producer_api_plugin`. This will create a snapshot file in the `data/snapshots` directory. Snapshot files are written to disk with the name pattern `*snapshot-\<head_block_id_in_hex\>.bin*`.

:::info[Snapshots Location]
| By default, snapshots are written to the `/opt/wire-network/blockproducer/data/snapshots` directory.
:::

## Prerequisites

* You have a local instance of `nodeop` running.
* You have the `producer_api_plugin` enabled on your `nodeop` instance and Producer API is accessible via HTTP on port 8887.

## Generate the Snapshot

Use the command below to create a snapshot:

```sh
curl http://127.0.0.1:8887/v1/producer/create_snapshot
```
