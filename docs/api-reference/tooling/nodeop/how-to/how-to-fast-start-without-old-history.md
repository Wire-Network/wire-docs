---
title: Fast Start Without Previous History
---

## Overview

This tutorial demonstrates how to capture the current chain state and future history, without previous historical data on the local chain.

## Before you begin

* Install the currently supported version of `clio`.

:::info
| The `clio` tool and `kiod` are bundled with the Wire software. [Installing Wire core](/docs/getting-started/install-dependencies.md) will install the `clio` and `kiod` command line tools.
:::

* Learn about [Using Nodeop](../usage/index.md).
* Get familiar with [state_history_plugin](../plugins/state-history-plugin.md).

## Steps

### Step 1: Create a snapshot of the current chain state

   ```sh
   curl http://localhost:8887/v1/producer/create_snapshot
   ```

A snapshot will be saved at `/opt/wire-network/blockproducer/data/snapshots/snapshot-xxxxxxx.bin`.

### Step 2: Remove `data/state` directory

:::danger
Removing state history files will cause the node to lose all previous history. This is a destructive operation and should only be done if you are sure you do not need the old history.
:::

```sh
rm -rf /opt/wire-network/blockproducer/data/state
rm -rf /opt/wire-network/chain-api/data/state
```

### Step 3: Run `./start.sh` with --snapshot option

```sh
cd /opt/wire-network/blockproducer
./start.sh --snapshot data/snapshots/snapshot-xxxxxxx.bin
```

Do not stop `nodeop` until it has received *at least 1 block* from the network, or it won't be able to restart. Tail the logs `/opt/blockproducer/data/nodeop.log`.

## Notes

If `nodeop` fails to receive blocks from the network, then try the above using `net_api_plugin`. Use [`clio net disconnect`](/docs/api-reference/tooling/clio/command-reference/net/disconnect.md) and [`clio net connect`](/docs/api-reference/tooling/clio/command-reference/net/connect.md) to reconnect nodes which timed out.

You must have the `net_api_plugin` enabled on your `nodeop` instance. That plugin is **not** enabled `/opt/wire-network/blockproducer/config/config.ini` by default, so you will need to stop your node and edit the `config.ini` file to enable it:

```ini
# ....previous plugins ...
plugin = sysio::net_api_plugin
```

:::warning[Caution when using `net_api_plugin`]
| Use use a firewall to block access to your `http-server-address` despite port 8887 not being exposed to the public by default. The `net_api_plugin` is not intended for public use and should only be used in a secure environment.
:::
