---
title: net peers
---

## Command

```sh
clio net peers [OPTIONS]
```

## Description

Returns a list with the status of all peer connections. This command allows a node operator to check the status of a node's peer connections.

## Synopsis

```sh
clio net peers
  [-h, --help]            # Print this help message and exit
```

## Usage

### Prerequisites

* Install the currently supported version of `clio`.
  :::note
  | The `clio` tool is bundled with the Wire software. [Installing Wire core](/docs/getting-started/install-dependencies.md) will install the `clio` and `kiod` command line tools.
  :::

* You have access to a producing node instance with the [`net_api_plugin`](../../../nodeop/plugins/net-api-plugin.md) loaded.

### Example

The following examples demonstrate how to use the `clio net peers` command:

* List the status of all peer connections for a local node listening at http address `http://127.0.0.1:8887`:

```sh
clio -u http://127.0.0.1:8887 net peers
```

**Output:**

```json
[{
    "peer": "devnet-0:4444",
    "remote_ip": "123.456.78.90",
    "remote_port": "4444",
    "connecting": false,
    "syncing": false,
    "is_bp_peer": false,
    "is_socket_open": true,
    "is_blocks_only": false,
    "is_transactions_only": false,
    "last_handshake": {
      "network_version": 1212,
      "chain_id": "0da1bd053a2a63f23cc37bf6df539923a9e0c22632a67390147448174f3bea18",
      "node_id": "5fb300c286806faf369f2c7e6129719e1ccf3f4baaa06b9e77cd095f39718480",
      "key": "SYS1111111111111111111111111111111114T1Anm",
      "time": "1751910927896359786",
      "token": "0000000000000000000000000000000000000000000000000000000000000000",
      "sig": "SIG_K1_111111111111111111111111111111111111111111111111111111111111111116uk5ne",
      "p2p_address": "192.168.50.250:4444 - 5fb300c",
      "last_irreversible_block_num": 6593,
      "last_irreversible_block_id": "000019c199a7d6b662dc5a25ee46b80cbe37f5bbde7d86a34a853d0009eeda6a",
      "head_num": 6594,
      "head_id": "000019c2e87658b61119ba1831c0a47e29c685382521769cefdbdd547b71a30d",
      "os": "linux",
      "agent": "sysio",
      "generation": 2
    }
  },{
    "peer": "devnet-1:4444",
    "remote_ip": "123.456.78.91",
    "remote_port": "4444",
    "connecting": false,
    "syncing": false,
    "is_bp_peer": false,
    "is_socket_open": false,
    "is_blocks_only": false,
    "is_transactions_only": false,
    "last_handshake": {
      "network_version": 0,
      "chain_id": "0000000000000000000000000000000000000000000000000000000000000000",
      "node_id": "0000000000000000000000000000000000000000000000000000000000000000",
      "key": "SYS1111111111111111111111111111111114T1Anm",
      "time": 0,
      "token": "0000000000000000000000000000000000000000000000000000000000000000",
      "sig": "SIG_K1_111111111111111111111111111111111111111111111111111111111111111116uk5ne",
      "p2p_address": "",
      "last_irreversible_block_num": 0,
      "last_irreversible_block_id": "0000000000000000000000000000000000000000000000000000000000000000",
      "head_num": 0,
      "head_id": "0000000000000000000000000000000000000000000000000000000000000000",
      "os": "",
      "agent": "",
      "generation": 0
    }
  ....
]
```

**Note:** The `last_handshake` field contains the chain state of each connected peer as of the last handshake message with the node.

<!-- For more information read the [Handshake Message](https://developers.eos.io/welcome/latest/protocol/network_peer_protocol#421-handshake-message) in the _Network Peer Protocol_ document. -->
