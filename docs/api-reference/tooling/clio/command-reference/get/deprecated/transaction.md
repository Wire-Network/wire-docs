---
id: transaction
---

:::warning Deprecation Notice
| **Important**: The command `clio get transaction <trx_id>` relies on the `history_api_plugin`, which in turn depends on the `history_plugin`. Please be aware that the `history_plugin` is **deprecated** and will no longer be maintained. For accessing historical blockchain data, consider using the `state_history_plugin` for full-history solutions or the `trace_api_plugin`.
:::

## Description

Retrieves a transaction from the blockchain.

## Positionals

`id` _TEXT_ - ID of the transaction to retrieve

## Options

`-b,--block-hint` UINT        the block number this transaction may be in

**Command**

```sh
clio get transaction
```

**Output**

## Example

```sh
clio get transaction eb4b94b72718a369af09eb2e7885b3f494dd1d8a20278a6634611d5edd76b703
```

```json
{
  "transaction_id": "eb4b94b72718a369af09eb2e7885b3f494dd1d8a20278a6634611d5edd76b703",
  "processed": {
    "refBlockNum": 2206,
    "refBlockPrefix": 221394282,
    "expiration": "2017-09-05T08:03:58",
    "scope": [
      "inita",
      "tester"
    ],
    "signatures": [
      "1f22e64240e1e479eee6ccbbd79a29f1a6eb6020384b4cca1a958e7c708d3e562009ae6e60afac96f9a3b89d729a50cd5a7b5a7a647540ba1678831bf970e83312"
    ],
    "messages": [{
        "code": "eos",
        "type": "transfer",
        "authorization": [{
            "account": "inita",
            "permission": "active"
          }
        ],
        "data": {
          "from": "inita",
          "to": "tester",
          "amount": 1000,
          "memo": ""
        },
        "hex_data": "000000008040934b00000000c84267a1e80300000000000000"
      }
    ],
    "output": [{
        "notify": [{
            "name": "tester",
            "output": {
              "notify": [],
              "sync_transactions": [],
              "async_transactions": []
            }
          },{
            "name": "inita",
            "output": {
              "notify": [],
              "sync_transactions": [],
              "async_transactions": []
            }
          }
        ],
        "sync_transactions": [],
        "async_transactions": []
      }
    ]
  }
}
```
