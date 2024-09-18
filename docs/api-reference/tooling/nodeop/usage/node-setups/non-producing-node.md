---
title: Non-producing Node Setup
---

## Goal

This section describes how to set up a non-producing node within the SYSIO network. A non-producing node is a node that is not configured to produce blocks, instead it is connected and synchronized with other peers from an `EOSIO` based blockchain, exposing one or more services publicly or privately by enabling one or more [Nodeop Plugins](../../plugins/index.md), except the `producer_plugin`.

## Before you begin

* [Install the Wire software](/docs/getting-started/install-dependencies.md) before starting this section.
* Know how to pass [Nodeop options](../../usage/nodeop-options.md) to enable or disable functionality.

## Steps

To setup a non-producing node is simple. 

- [Goal](#goal)
- [Before you begin](#before-you-begin)
- [Steps](#steps)
  - [1. Set Peers](#1-set-peers)
  - [2. Enable one or more available plugins](#2-enable-one-or-more-available-plugins)

### 1. Set Peers

You need to set some peers in your config ini, for example:

```console
# config.ini:

p2p-peer-address = 106.10.42.238:9876
```

Or you can include the peer in as a boot flag when running `nodeop`, as follows:

```sh
nodeop ... --p2p-peer-address=106.10.42.238:9876
```

### 2. Enable one or more available plugins

Each available plugin is listed and detailed in the [Nodeop Plugins](../../plugins/index.md) section. When `nodeop` starts, it will expose the functionality provided by the enabled plugins it was started with. For example, if you start `nodeop` with [`state_history_plugin`](../../plugins/state-history-plugin.md) enabled, you will have a non-producing node that offers full blockchain history. If you start `nodeop` with [`http_plugin`](../../plugins/http-plugin.md) enabled, you will have a non-producing node which exposes the SYSIO RPC API. Therefore, you can extend the basic functionality provided by a non-producing node by enabling any number of existing plugins on top of it. Another aspect to consider is that some plugins have dependencies to other plugins. Therefore, you need to satisfy all dependencies for a plugin in order to enable it.
