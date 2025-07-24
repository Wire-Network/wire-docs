---
id: pack-transaction
title: pack_transaction
---

## Command

```sh
clio convert pack_transaction <transaction> [OPTIONS]
```

## Description

This command is used to convert transaction from a plain signed JSON to its binary(packed) representation.

## Synopsis

```sh
clio convert pack_transaction
  <transaction>                    # REQUIRED: The plain signed JSON transaction string
  [-h | --help]                     # Print this help message and exit
  [--pack-action-data]             # Pack all action data within transaction, needs interaction with nodeop
```

## Examples

The following examples demonstrate how to use the `clio convert pack_transaction` command:

### Pack a signed transaction to binary format

```sh
clio convert pack_transaction '{
  "expiration": "2018-08-02T20:24:36",
  "ref_block_num": 14207,
  "ref_block_prefix": 1438248607,
  "max_net_usage_words": 0,
  "max_cpu_usage_ms": 0,
  "delay_sec": 0,
  "context_free_actions": [],
  "actions": [{
      "account": "sysio",
      "name": "newaccount",
      "authorization": [{
          "actor": "sysio",
          "permission": "active"
        }
      ],
      "data": "0000000000ea305500a6823403ea30550100000001000240cc0bf90a5656c8bb81f0eb86f49f89613c5cd988c018715d4646c6bd0ad3d8010000000100000001000240cc0bf90a5656c8bb81f0eb86f49f89613c5cd988c018715d4646c6bd0ad3d801000000"
    }
  ],
  "transaction_extensions": []
}'
```

**Output:**

```json
{
  "signatures": [],
  "compression": "none",
  "packed_context_free_data": "",
  "packed_trx": "8468635b7f379feeb95500000000010000000000ea305500409e9a2264b89a010000000000ea305500000000a8ed3232660000000000ea305500a6823403ea30550100000001000240cc0bf90a5656c8bb81f0eb86f49f89613c5cd988c018715d4646c6bd0ad3d8010000000100000001000240cc0bf90a5656c8bb81f0eb86f49f89613c5cd988c018715d4646c6bd0ad3d80100000000"
}
```
