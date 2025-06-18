---
title: chain_api_plugin
---

## Description

The `chain_api_plugin` exposes functionality from the [`chain_plugin`](chain-plugin.md) to the RPC API interface managed by the [`http_plugin`](http-plugin.md).

## Usage

```console
# config.ini
plugin = sysio::chain_api_plugin
```

```sh
# command-line
nodeop ... --plugin sysio::chain_api_plugin
```

## Options

None

## Dependencies

* [`chain_plugin`](chain-plugin.md)
* [`http_plugin`](http-plugin.md)

### Load Dependency Examples

```console
# config.ini
plugin = sysio::chain_plugin
[options]
plugin = sysio::http_plugin
[options]
```

```sh
# command-line
nodeop ... --plugin sysio::chain_plugin [operations] [options]  \
           --plugin sysio::http_plugin [options]
```
