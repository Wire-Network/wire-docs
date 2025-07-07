---
title: Chain API Node Setup
---

## Overview

This section describes how to set up a non-producing node within the network. A non-producing node is a node that is not configured to produce blocks, instead it is connected and synchronized with other peers from a Wire-based blockchain, exposing one or more services publicly or privately by enabling one or more [Nodeop Plugins](../../plugins/index.md), except the `producer_plugin`.

## Prerequisites

* [Install the Wire software](/docs/getting-started/install-dependencies.md) before starting this section.
* Get familiar with [Nodeop options](../../usage/nodeop-options.md) to enable or disable functionality.

:::info
For an example configuration of a non-producing node's `config.ini`, refer to [wire-cli repo](https://github.com/Wire-Network/wire-cli/blob/master/chain-api/config/config.ini).
:::

## Steps

### Step 1: Set Peers

You need to set some peers in your config ini, for example:

```console
# config.ini:

p2p-peer-address = 106.10.42.238:9876
```

Or you can include the peer in as a boot flag when running `nodeop`, as follows:

```sh
nodeop ... --p2p-peer-address=106.10.42.238:9876
```

### Step 2: Enable one or more available plugins

Each available plugin is listed and detailed in the [Nodeop Plugins](../../plugins/index.md) section. When `nodeop` starts, it will expose the functionality provided by the enabled plugins it was started with.

For example, if you start `nodeop` with [`state_history_plugin`](../../plugins/state-history-plugin.md) enabled, you will have a non-producing node that offers full blockchain history.

If you start `nodeop` with [`http_plugin`](../../plugins/http-plugin.md) enabled, you will have a non-producing node which exposes the RPC API. Therefore, you can extend the basic functionality provided by a non-producing node by enabling any number of existing plugins on top of it.

:::warning[Plugins Dependencies]
Some plugins have dependencies to other plugins. Therefore, you need to satisfy all dependencies for a plugin in order to enable it.
:::
