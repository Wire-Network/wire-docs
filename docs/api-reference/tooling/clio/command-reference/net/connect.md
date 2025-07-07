---
title: net connect
---

## Command

```sh
clio net connect [OPTIONS] host
```

## Description

Start a new connection to a specified peer. A node operator can use this command to instruct a node to connect to another peer **without restarting** the node.

## Synopsis

```sh
clio net connect
  host <TEXT>             # REQUIRED: The hostname:port of the peer to connect to
  [-h, --help]            # Print this help message and exit
```

## Requirements

Make sure you meet the following requirements:

* Install the currently supported version of `clio`.

:::note
| The `clio` tool is bundled with the Wire software. [Installing Wire core](/docs/getting-started/install-dependencies.md) will install the `clio` and `kiod` command line tools.
:::

* You have access to a producing node instance with the [`net_api_plugin`](../../../nodeop/plugins/net-api-plugin.md) loaded.

## Examples

The following examples demonstrate how to use the `clio net connect` command:

* Instruct default local node (listening at default http address `http://127.0.0.1:8887`) to connect to peer node listening at p2p address `devnet-0:4444` (where `devnet-0` is mapped to `123.456.78.90` in `/etc/hosts`):

```sh
clio net connect devnet-0:4444
```

**Output:**

```console
"added connection"
```

* Instruct local node listening at http address `http://127.0.0.1:8887` to connect to peer node listening at p2p address `devnet-0:4444`:

```sh
clio -u http://127.0.0.1:8887 net connect devnet-0:4444
```

**Output:**

```console
"added connection"
```

**Note:** If any of the above commands are re-executed, `clio` returns the following message as expected:  

```console
"already connected"
```
