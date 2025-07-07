---
title: net_api_plugin
---

## Description

The `net_api_plugin` exposes functionality from the `net_plugin` to the RPC API interface managed by the `http_plugin`. Node operators can use the `net_api_plugin` to manage the p2p connections of an active node.

The `net_api_plugin` provides four RPC API endpoints:

* connect
* disconnect
* connections
* status

See [Net API Reference Documentation](/docs/api-reference/net-api).

:::danger
| This plugin exposes endpoints that allow management of p2p connections. Running this plugin on a publicly accessible node is **NOT** recommended as it can be exploited.
:::

## Usage

```console
# config.ini
plugin = sysio::net_api_plugin
```

```sh
# command-line
nodeop ... --plugin sysio::net_api_plugin
``` 

## Options

None

## Dependencies

* [`net_plugin`](net-plugin.md)
* [`http_plugin`](http-plugin.md)

### Load Dependency Examples

```console
# config.ini
plugin = sysio::net_plugin
[options]
plugin = sysio::http_plugin
[options]
```

```sh
# command-line
nodeop ... --plugin sysio::net_plugin [options]  \
           --plugin sysio::http_plugin [options]
```
