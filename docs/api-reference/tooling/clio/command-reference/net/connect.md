---
title: net connect
---

## Description

Start a new connection to a specified peer. A node operator can use this command to instruct a node to connect to another peer **without restarting** the node.

## Command

```sh
clio net connect [OPTIONS] host
```

### Positional Arguments

* `host` _TEXT_ REQUIRED - The hostname:port to connect to

### Options

* `-h,--help` - Print this help message and exit

## Requirements

Make sure you meet the following requirements:

* Install the currently supported version of `clio`.

:::note
| The `clio` tool is bundled with the Wire software. [Installing Wire core](/docs/getting-started/install-dependencies.md) will install the `clio` and `kiod` command line tools.
:::

* You have access to a producing node instance with the [`net_api_plugin`](../../../nodeop/plugins/net-api-plugin.md) loaded.

## Examples

The following examples demonstrate how to use the `clio net connect` command:

* Instruct default local node (listening at default http address `http://127.0.0.1:8888`) to connect to peer node listening at p2p address `localhost:9002`:

```sh
clio net connect localhost:9002
```

**Output:**

```console
"added connection"
```

* Instruct local node listening at http address `http://127.0.0.1:8001` to connect to peer node listening at p2p address `localhost:9002`:

```sh
clio -u http://127.0.0.1:8001 net connect localhost:9002
```

**Output:**

```console
"added connection"
```

**Note:** If any of the above commands are re-executed, `clio` returns the following message as expected:  

```console
"already connected"
```
