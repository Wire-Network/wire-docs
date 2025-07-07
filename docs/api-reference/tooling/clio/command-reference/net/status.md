---
title: net status
---

## Command

```sh
clio net status [OPTIONS] host
```

## Description

Returns the status of a connected peer. This command allows a node operator to check the status of a node's connected peer.

## Synopsis

```sh
clio net status
  host <TEXT>             # REQUIRED: The hostname:port of the peer to query
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

The following examples demonstrate how to use the `clio net status` command:

* List the status of a connected peer listening at p2p address `devnet-0:4444`(where devnet-0 is mapped to 123.456.78.90 in `/etc/hosts`) for a local node listening at http address `http://127.0.0.1:8887`:

```sh
clio -u http://127.0.0.1:8887 net status devnet-0:4444
```

**Output:**

```json
{
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
    "time": "1751908913403520672",
    "token": "0000000000000000000000000000000000000000000000000000000000000000",
    "sig": "SIG_K1_111111111111111111111111111111111111111111111111111111111111111116uk5ne",
    "p2p_address": "192.168.50.250:4444 - 5fb300c",
    "last_irreversible_block_num": 2564,
    "last_irreversible_block_id": "00000a0481121e4bc2f696dbd63e1e8b2468eb3b696ddba2a1f679f5b10ccdd9",
    "head_num": 2568,
    "head_id": "00000a0537833bb91c39a730c9fd7e5bc7895c6f9542f4b389e62faeab09a73f",
    "os": "linux",
    "agent": "sysio",
    "generation": 1
  }
}
```

**Note:** The `last_handshake` field contains the chain state of the specified peer as of the last handshake message with the node.

<!-- For more information read the [Handshake Message](https://developers.eos.io/welcome/latest/protocol/network_peer_protocol#421-handshake-message) in the _Network Peer Protocol_ document. -->
