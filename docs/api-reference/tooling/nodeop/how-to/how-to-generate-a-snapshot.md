---
title: Generate a Snapshot
---


## Overview

You can create a snapshot by using the [`create_snapshot` API endpoint](/docs/api-reference/producer-api#operation/create_snapshot) supported by the `producer_api_plugin`. This will create a snapshot file in the `data/snapshots` directory. Snapshot files are written to disk with the name pattern `*snapshot-\<head_block_id_in_hex\>.bin*`.

:::info[Snapshots Location]
| By default, snapshots are written to the `/opt/wire-network/blockproducer/data/snapshots` directory.
:::

## Prerequisites

* You must have a local instance of [nodeop](../index.md) running. For instructions on setting up a local chain, please refer to [Install Dependencies](/docs/getting-started/install-dependencies.md) article.
* Ensure that the [`producer_api_plugin`](../plugins/producer-api-plugin.md) is enabled on your `nodeop` instance and Producer API is accessible via HTTP on port 8887. If you followed standard installation with `wire-cli`, that plugin is already enabled and configured at `/opt/wire-network/blockproducer/config/config.ini`.

## Generate the Snapshot

Use the command below to create a snapshot:

```sh
curl http://127.0.0.1:8887/v1/producer/create_snapshot
```
