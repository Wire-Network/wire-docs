---
title: history_api_plugin
tags:
  - deprecated
---

:::warning
| The `history_plugin` that the `history_api_plugin` depends upon is deprecated and will no longer be maintained. Please use the [`state_history_plugin`](state-history-plugin.md) or the [`trace_api_plugin`](trace-api-plugin.md) instead.
:::

## Description

The `history_api_plugin` exposes functionality from the [`history_plugin`](history-plugin.md) to the RPC API interface managed by the [`http_plugin`](http-plugin.md), providing read-only access to blockchain data.

It provides four RPC API endpoints:

* `get_actions`
* `get_transaction`
* `get_key_accounts`
* `get_controlled_accounts`

The four actions listed above are used by the following `clio` commands (matching order):

* `clio get actions`
* `clio get transaction`
* `clio get accounts`
* `clio get servants`

## Usage

```console
# config.ini
plugin = sysio::history_api_plugin
```

```sh
# command-line
nodeop ... --plugin sysio::history_api_plugin
```

## Options

None

## Dependencies

* [`history_plugin`](history-plugin.md)
* [`chain_plugin`](chain-plugin.md)
* [`http_plugin`](http-plugin.md)

### Load Dependency Examples

```console
# config.ini
plugin = sysio::history_plugin
[options]
plugin = sysio::chain_plugin
[options]
plugin = sysio::http_plugin
[options]
```

```sh
# command-line
nodeop ... --plugin sysio::history_plugin [options]  \
           --plugin sysio::chain_plugin [operations] [options]  \
           --plugin sysio::http_plugin [options]
```
