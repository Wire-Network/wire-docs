---
title: http_plugin
---

## Description

The `http_plugin` is a core plugin supported by both `nodeop` and `kiod`. The plugin is required to enable any RPC API functionality provided by a `nodeop` or `kiod` instance.

## Usage

```console
# config.ini
plugin = sysio::http_plugin
[options]
```

```sh
# command-line
nodeop ... --plugin sysio::http_plugin [options]
 (or))
kiod ... --plugin sysio::http_plugin [options]
```

## Options

These can be specified from both the command-line or the `config.ini` file. See the [full list of options](../nodeop-cli.md#config-options-for-sysiohttp_plugin) for more information.

## Dependencies

None
