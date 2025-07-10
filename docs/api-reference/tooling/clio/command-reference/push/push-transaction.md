---
id: push-transaction
title: push transaction
---

## Command

```sh
clio push transaction <transaction> [OPTIONS]
```

## Description

Push an arbitrary JSON transaction

## Synopsis

```sh
clio push transaction
  <transaction>                      # REQUIRED: The JSON of the transaction to push, or the name of a JSON file containing the transaction
  [-h | --help]                      # Print this help message and exit
  [--help-all]                       # Show all help
  [--signature]                      # append a signature to the transaction; repeat this option to append multiple signatures
  [[-x | --expiration] <seconds>]    # set the time in seconds before a transaction expires, defaults to 30s
  [-f | --force-unique]              # force the transaction to be unique. this will consume extra bandwidth and remove any protections against accidently issuing the same transaction multiple times
  [-s | --skip-sign]                 # Specify if unlocked wallet keys should be used to sign transaction
  [-j | --json]                      # print result as JSON
  [--json-file <filename>]           # save result in json format into a file
  [-d | --dont-broadcast]            # don't broadcast transaction to the network (just print to stdout)
  [-u | --unpack-action-data]        # unpack all action data within transaction, needs interaction with nodeop unless --abi-file. used in conjunction with --dont-broadcast
  [--return-packed]                  # used in conjunction with --dont-broadcast to get the packed transaction
  [[-r | --ref-block] <block>]       # set the reference block num or block id used for TAPOS (Transaction as Proof-of-Stake)
  [--use-old-rpc]                    # use old RPC push_transaction, rather than new RPC send_transaction
  [--use-old-send-rpc]               # use old RPC send_transaction, rather than new RPC /v1/chain/send_transaction2
  [--compression <type>]             # compression for transaction 'none' or 'zlib'
  [[-p | --permission] <account@perm>] # an account and permission level to authorize, as in 'account@permission'
  [--max-cpu-usage-ms <ms>]          # set an upper limit on the milliseconds of cpu usage budget, for the execution of the transaction (defaults to 0 which means no limit)
  [--max-net-usage <bytes>]          # set an upper limit on the net usage budget, in bytes, for the transaction (defaults to 0 which means no limit)
  [--delay-sec <seconds>]            # set the delay_sec seconds, defaults to 0s
  [[-t | --return-failure-trace] <boolean>] # return partial traces on failed transactions
  [--retry-irreversible <boolean>]   # request node to retry transaction until it is irreversible or expires, blocking call
  [--retry-num-blocks <blocks>]      # request node to retry transaction until in a block of given height, blocking call
  [--sign-with <keys>]               # the public key or json array of public keys to sign with
  [--dry-run]                        # specify a transaction is dry-run
  [--read]                           # specify a transaction is read-only
```

## Examples

The following examples demonstrate how to use the `clio push transaction` command:

### Push a JSON transaction

```sh
clio push transaction '{
  "max_net_usage_words": 0,
  "max_cpu_usage_ms": 0,
  "delay_sec": 0,
  "context_free_actions": [],
  "actions": [
    {
      "account": "sysio.token",
      "name": "transfer",
      "authorization": [
        {
          "actor": "sysio",
          "permission": "active"
        }
      ],
      "data": {
        "from": "sysio",
        "to": "han",
        "quantity": "1.0000 SYS",
        "memo": "memo"
      }
    }
  ],
  "transaction_extensions": [],
  "context_free_data": []
}' -p sysio@active
```

**Output:**

```json
{
  "transaction_id": "7c85936831e50df4aaa4843f13827b8d2b1031a507b6e16c9d20b622b0db2498",
  "processed": {
    "id": "7c85936831e50df4aaa4843f13827b8d2b1031a507b6e16c9d20b622b0db2498",
    "block_num": 343925,
    "block_time": "2025-05-22T19:12:26.000",
    "producer_block_id": null,
    "receipt": {
      "status": "executed",
      "cpu_usage_us": 148,
      "net_usage_words": 17
    },
    "elapsed": 148,
    "net_usage": 136,
    "scheduled": false,
    "action_traces": [{
        "action_ordinal": 1,
        "creator_action_ordinal": 0,
        "closest_unnotified_ancestor_action_ordinal": 0,
        "receipt": {
          "receiver": "sysio.token",
          "act_digest": "944a2a5db83445e6a959923f532d0ecdb8f57141616cd4898e548d5c779d2f3c",
          "global_sequence": 343976,
          "recv_sequence": 4,
          "auth_sequence": [[
              "sysio",
              343967
            ]
          ],
          "code_sequence": 1,
          "abi_sequence": 1
        },
        "receiver": "sysio.token",
        "act": {
          "account": "sysio.token",
          "name": "transfer",
          "authorization": [{
              "actor": "sysio",
              "permission": "active"
            }
          ],
          "data": {
            "from": "sysio",
            "to": "han",
            "quantity": "1.0000 SYS",
            "memo": "memo"
          },
          "hex_data": "0000000000eab0c7000000000000a66910270000000000000453595300000000046d656d6f"
        },
        "context_free": false,
        "elapsed": 37,
        "console": "",
        "trx_id": "7c85936831e50df4aaa4843f13827b8d2b1031a507b6e16c9d20b622b0db2498",
        "block_num": 343925,
        "block_time": "2025-05-22T19:12:26.000",
        "producer_block_id": null,
        "account_ram_deltas": [{
            "account": "sysio",
            "delta": 240
          }
        ],
        "except": null,
        "error_code": null,
        "return_value_hex_data": ""
      },{
        "action_ordinal": 2,
        "creator_action_ordinal": 1,
        "closest_unnotified_ancestor_action_ordinal": 1,
        "receipt": {
          "receiver": "sysio",
          "act_digest": "944a2a5db83445e6a959923f532d0ecdb8f57141616cd4898e548d5c779d2f3c",
          "global_sequence": 343977,
          "recv_sequence": 343971,
          "auth_sequence": [[
              "sysio",
              343968
            ]
          ],
          "code_sequence": 1,
          "abi_sequence": 1
        },
        "receiver": "sysio",
        "act": {
          "account": "sysio.token",
          "name": "transfer",
          "authorization": [{
              "actor": "sysio",
              "permission": "active"
            }
          ],
          "data": {
            "from": "sysio",
            "to": "han",
            "quantity": "1.0000 SYS",
            "memo": "memo"
          },
          "hex_data": "0000000000eab0c7000000000000a66910270000000000000453595300000000046d656d6f"
        },
        "context_free": false,
        "elapsed": 6,
        "console": "",
        "trx_id": "7c85936831e50df4aaa4843f13827b8d2b1031a507b6e16c9d20b622b0db2498",
        "block_num": 343925,
        "block_time": "2025-05-22T19:12:26.000",
        "producer_block_id": null,
        "account_ram_deltas": [],
        "except": null,
        "error_code": null,
        "return_value_hex_data": ""
      },{
        "action_ordinal": 3,
        "creator_action_ordinal": 1,
        "closest_unnotified_ancestor_action_ordinal": 1,
        "receipt": {
          "receiver": "han",
          "act_digest": "944a2a5db83445e6a959923f532d0ecdb8f57141616cd4898e548d5c779d2f3c",
          "global_sequence": 343978,
          "recv_sequence": 1,
          "auth_sequence": [[
              "sysio",
              343969
            ]
          ],
          "code_sequence": 1,
          "abi_sequence": 1
        },
        "receiver": "han",
        "act": {
          "account": "sysio.token",
          "name": "transfer",
          "authorization": [{
              "actor": "sysio",
              "permission": "active"
            }
          ],
          "data": {
            "from": "sysio",
            "to": "han",
            "quantity": "1.0000 SYS",
            "memo": "memo"
          },
          "hex_data": "0000000000eab0c7000000000000a66910270000000000000453595300000000046d656d6f"
        },
        "context_free": false,
        "elapsed": 2,
        "console": "",
        "trx_id": "7c85936831e50df4aaa4843f13827b8d2b1031a507b6e16c9d20b622b0db2498",
        "block_num": 343925,
        "block_time": "2025-05-22T19:12:26.000",
        "producer_block_id": null,
        "account_ram_deltas": [],
        "except": null,
        "error_code": null,
        "return_value_hex_data": ""
      }
    ],
    "account_ram_delta": null,
    "except": null,
    "error_code": null
  }
}
```
