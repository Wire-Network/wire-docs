---
title: wallet_plugin 
---
The `wallet_plugin` adds access to wallet functionality from a node.

:::danger[Danger]
| This plugin is not designed to be loaded as a plugin on a publicly accessible node without further security measures. This is particularly true when loading the `wallet_api_plugin`, which should not be loaded on a publicly accessible node under any circumstances.
:::

## Usage

```sh
# config.ini
plugin = eosio::wallet_plugin

# command-line
nodeop ... --plugin eosio::wallet_plugin
```

## Options

None

## Dependencies

* [`wallet_plugin`](wallet-plugin.md)
* [`http_plugin`](../../nodeop/plugins/http-plugin.md)

### Load Dependency Examples

```sh
# config.ini
plugin = eosio::wallet_plugin
[options]
plugin = eosio::http_plugin
[options]

# command-line
nodeop ... --plugin eosio::wallet_plugin [options]  \
           --plugin eosio::http_plugin [options]
```
