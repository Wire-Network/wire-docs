---
title: net status
---

## Description

Returns the status of a connected peer. This command allows a node operator to check the status of a node's connected peer.

## Command

```sh
clio net status [OPTIONS] host
```

**Note:** The arguments and options enclosed in square brackets are optional.

### Positionals

* `host` _TEXT_ REQUIRED - The hostname:port to query status of connection

### Options

* `-h,--help` - Print this help message and exit

## Usage

### Prerequisites

* Install the currently supported version of `clio`.

:::note
| The `clio` tool is bundled with the Wire software. [Installing Wire core](/docs/getting-started/install-dependencies.md) will install the `clio` and `kiod` command line tools.
:::

* You have access to a producing node instance with the [`net_api_plugin`](../../../nodeop/plugins/net-api-plugin.md) loaded.

### Example

The following examples demonstrate how to use the `clio net status` command:

* List the status of a connected peer listening at p2p address `localhost:9001` for a local node listening at http address `http://127.0.0.1:8002`:

```sh
clio -u http://127.0.0.1:8002 net status localhost:9001
```

**Output:**

```json
{
  "peer": "localhost:9001",
  "connecting": false,
  "syncing": false,
  "last_handshake": {
    "network_version": 1210,
    "chain_id": "60fb0eb4742886af8a0e147f4af6fd363e8e8d8f18bdf73a10ee0134fec1c551",
    "node_id": "7432b032b50a5a3b04a220c48d75f12e5a089405dfee578c3e5b4cf46865e86e",
    "key": "EOS1111111111111111111111111111111114T1Anm",
    "time": "1620935866018960000",
    "token": "0000000000000000000000000000000000000000000000000000000000000000",
    "sig": "SIG_K1_111111111111111111111111111111111111111111111111111111111111111116uk5ne",
    "p2p_address": "127.0.0.1:9001 - 7432b03",
    "last_irreversible_block_num": 184,
    "last_irreversible_block_id": "000000b899bd9462ac4697b5d265e47ef5d88d5a66a24a1c2d37de7974fe32f5",
    "head_num": 185,
    "head_id": "000000b9f79e2394a48738fb3c8c87dac944094648c23818427e1d44375b6034",
    "os": "osx",
    "agent": "EOS Test Agent",
    "generation": 1
  }
}
```

**Note:** The `last_handshake` field contains the chain state of the specified peer as of the last handshake message with the node. For more information read the [Handshake Message](https://developers.eos.io/welcome/latest/protocol/network_peer_protocol#421-handshake-message) in the _Network Peer Protocol_ document.
