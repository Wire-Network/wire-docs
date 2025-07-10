---
title: net disconnect
---

## Command

```sh
clio net disconnect <host> [OPTIONS]
```

## Description

Close an existing connection to a specified peer. A node operator can use this command to instruct a node to disconnect from another peer.

## Synopsis

```sh
clio net disconnect
  <host>                           # REQUIRED: The hostname:port to disconnect from
  [-h | --help]                    # Print this help message and exit
```

## Usage

### Prerequisites

* Install the currently supported version of `clio`.

:::note
  | The `clio` tool is bundled with the Wire software. [Installing Wire core](/docs/getting-started/install-dependencies.md) will install the `clio` and `kiod` command line tools.
:::

* You have access to a producing node instance with the [`net_api_plugin`](../../../nodeop/plugins/net-api-plugin.md) loaded.

### Examples

The following examples demonstrate how to use the `clio net disconnect` command

* Instruct local node listening at http address `http://127.0.0.1:8887` to disconnect from peer node listening at p2p address `devnet-0:4444` (where `devnet-0` is mapped to `123.456.78.90` in `/etc/hosts`):

  ```sh
  clio -u http://127.0.0.1:8887 net disconnect devnet-0:4444
  ```
  
  **Output:**
  
  ```console
  "connection removed"
  ```

**Note:** If any of the above commands are re-executed, `clio` returns the following message as expected:  

```console
"no known connection for host"
```
