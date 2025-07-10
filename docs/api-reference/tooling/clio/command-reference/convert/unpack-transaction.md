---
id: unpack-transaction
title: unpack_transaction
---

## Command

```sh
clio convert unpack_transaction <transaction> [OPTIONS]
```

## Description

This command is used to convert transaction to a plain signed JSON.

## Synopsis

```sh
clio convert unpack_transaction
  <transaction>                    # REQUIRED: The packed transaction to unpack
  [-h | --help]                    # Print this help message and exit
  [--unpack-action-data]           # Unpack all action data within transaction, needs interaction with nodeop
```

## Examples

The following examples demonstrate how to use the `clio convert unpack_transaction` command:

### Unpack a packed transaction to JSON format

```sh
clio convert unpack_transaction '{
  "signatures": [
    "SIG_K1_Kf74L4N38U1owcoThiKbqsfuxVCTFs3nD7ntLpfAJJ1zkQVKFbsm22Y9CjFJMrKxqDB6bVPZvPCbnxnw5wRwebBUmMFmKa"
  ],
  "compression": "none",
  "packed_context_free_data": "",
  "packed_trx": "8468635b7f379feeb95500000000010000000000eab0c700409e9a2264b89a010000000000eab0c700000000a8ed3232660000000000eab0c700a6823403eab0c70100000001000240cc0bf90a5656c8bb81f0eb86f49f89613c5cd988c018715d4646c6bd0ad3d8010000000100000001000240cc0bf90a5656c8bb81f0eb86f49f89613c5cd988c018715d4646c6bd0ad3d80100000000"
}'
```

**Output:**

```json
{
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
      "data": "0000000000eab0c700a6823403eab0c70100000001000240cc0bf90a5656c8bb81f0eb86f49f89613c5cd988c018715d4646c6bd0ad3d8010000000100000001000240cc0bf90a5656c8bb81f0eb86f49f89613c5cd988c018715d4646c6bd0ad3d801000000"
    }
  ],
  "transaction_extensions": [],
  "signatures": [
    "SIG_K1_Kf74L4N38U1owcoThiKbqsfuxVCTFs3nD7ntLpfAJJ1zkQVKFbsm22Y9CjFJMrKxqDB6bVPZvPCbnxnw5wRwebBUmMFmKa"
  ],
  "context_free_data": []
}
```
