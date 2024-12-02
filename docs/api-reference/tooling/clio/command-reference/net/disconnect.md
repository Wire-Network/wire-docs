---
title: net disconnect
---
## Description

Close an existing connection to a specified peer. A node operator can use this command to instruct a node to disconnect from another peer without restarting the node.

## Command

```sh
clio net disconnect [OPTIONS] host
```

**Note:** The arguments and options enclosed in square brackets are optional.

### Positionals

* `host` _TEXT_ REQUIRED - The hostname:port to disconnect from

### Options

* `-h,--help` - Print this help message and exit

## Usage

### Prerequisites

* Install the currently supported version of `clio`.

:::note
  | The `clio` tool is bundled with the Wire software. [Installing Wire core](/docs/getting-started/install-dependencies.md) will install the `clio` and `kiod` command line tools.
:::

* You have access to a producing node instance with the [`net_api_plugin`](../../../nodeop/plugins/net-api-plugin.md) loaded.

### Examples

The following examples demonstrate how to use the `clio net disconnect` command

* Instruct default local node (listening at default http address `http://127.0.0.1:8888`) to disconnect from peer node listening at p2p address `localhost:9002`

  ```sh
  clio net disconnect localhost:9002
  ```

  **Output:**

  ```console
  "connection removed"
  ```

* Instruct local node listening at http address `http://127.0.0.1:8001` to disconnect from peer node listening at p2p address `localhost:9002`:

  ```sh
  clio -u http://127.0.0.1:8001 net disconnect localhost:9002
  ```
  
  **Output:**
  
  ```console
  "connection removed"
  ```

**Note:** If any of the above commands are re-executed, `clio` returns the following message as expected:  

```console
"no known connection for host"
```
