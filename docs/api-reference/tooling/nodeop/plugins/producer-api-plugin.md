---
title: producer_api_plugin
---

## Description

The `producer_api_plugin` exposes a number of endpoints for the [`producer_plugin`](producer-plugin.md) to the RPC API interface managed by the [`http_plugin`](http-plugin.md).

:::danger
| This plugin exposes endpoints that allow management of p2p connections. Running this plugin on a publicly accessible node is **NOT** recommended as it can be exploited.
:::

See [Producer API Reference Documentation](/docs/api-reference/producer-api).

## Usage

```console
# config.ini
plugin = sysio::producer_api_plugin
```

```sh
# nodeop startup params
nodeop ... --plugin sysio::producer_api_plugin
```

## Options

None

## Dependencies

* [`producer_plugin`](producer-plugin.md)
* [`chain_plugin`](chain-plugin.md)
* [`http_plugin`](http-plugin.md)

### Load Dependency Examples

```console
# config.ini
plugin = sysio::producer_plugin
[options]
plugin = sysio::chain_plugin
[options]
plugin = sysio::http_plugin
[options]
```

```sh
# command-line
nodeop ... --plugin sysio::producer_plugin [options]  \
           --plugin sysio::chain_plugin [operations] [options]  \
           --plugin sysio::http_plugin [options]
```
