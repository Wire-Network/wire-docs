---
title: Submit a Transaction
---

## Overview

This how-to guide provides instructions on how to submit a transaction with a single action  using various commands with the `clio` CLI tool.

## Prerequisites

* Install the currently supported version of `clio`. which is distributed as part of the [Wire software suite](https://github.com/Wire-Network/wire-sysio/blob/master/README.md). To install `clio`, visit the [Install Dependencies](/docs/getting-started/install-dependencies.md) section.

* Understand [action](/docs/introduction/glossary.md#action) and [transaction](/docs/introduction/glossary.md#transaction).

:::info
The steps below assume you have access to a **local chain** and you have authority over `sysio` key pair.
:::

## Steps to submit a transaction(via `clio push action`)

## Use Case

Transfer token by pushing action on `sysio.transfer` contract.

### Unlock Wallet

```sh
clio wallet unlock --name=default --password "$(cat /path/to/wallet_password_file)"
```

### Create an account

```sh
export PUBLIC_KEY=<your-pub-key>
clio create account sysio han $PUBLIC_KEY -p sysio@active
```

### Invoke `transfer` action

```sh
clio push action sysio.token transfer '["sysio","han","1.0000 SYS","memo"]' -p sysio@active
```

### Output

```sh
executed transaction: 51ef3737ac91d613d2f91874d008125271aa089e81e256852336f8700939d645  136 bytes  266 us
#   sysio.token <= sysio.token::transfer        {"from":"sysio","to":"han","quantity":"1.0000 SYS","memo":"init token"}
#         sysio <= sysio.token::transfer        {"from":"sysio","to":"han","quantity":"1.0000 SYS","memo":"init token"}
#           han <= sysio.token::transfer        {"from":"sysio","to":"han","quantity":"1.0000 SYS","memo":"init token"}
```

### Verify `han`'s balance

```sh
clio get account han

....
SYS balances: 
     liquid:            1.0000 SYS
     staked:            0.0000 SYS
     unstaking:         0.0000 SYS
     total:             1.0000 SYS
```

## Steps to submit a transaction(via `clio push transaction`)

## Use Case

Transfer token by submitting a JSON transaction.

### Unlock Wallet

```sh
clio wallet unlock --name=default --password "$(cat /path/to/wallet_password_file)"
```

### Create the transaction as JSON snippet

You can create the JSON defining the transaction in 2 ways:

* Create a JSON snippet which contains a valid transaction and uses hex format for `data` field.

Use `clio convert pack_action_data <contract> <action> <data-json>` to convert action data to hex format.

```sh
clio convert pack_action_data sysio.token transfer '{"from":"sysio","to":"han","quantity":"1.0000 SYS","memo":"memo"}'
```

Output:

```txt
0000000000eab0c7000000000000a66910270000000000000453595300000000046d656d6f
```

Save transaction JSON to a file:

```sh
echo '{
  "max_net_usage_words": 0,
  "max_cpu_usage_ms": 0,
  "delay_sec": 0,
  "context_free_actions": [],
  "actions": [{
      "account": "sysio.token",
      "name": "transfer",
      "authorization": [{
          "actor": "sysio",
          "permission": "active"
        }
      ],
      "data": "0000000000eab0c7000000000000a66910270000000000000453595300000000046d656d6f"
    }
  ],
  "transaction_extensions": [],
  "context_free_data": []
}' > trx-transfer.json
```

---

* Alternatively, you can also create a JSON snippet that uses clear text JSON for `data` field.

:::caution
| Be aware that if a clear text `data` field is used, `clio` needs to fetch the smart contract's ABI using `nodeop` API. This operation has an **overall performance overhead for both `clio` and `nodeop`.** On the other hand, if hex data is used in the `data` field then the ABI fetching is not executed and thus the total time to send and execute the transaction is faster.
:::

```json
{
  "max_net_usage_words": 0,
  "max_cpu_usage_ms": 0,
  "delay_sec": 0,
  "context_free_actions": [],
  "actions": [{
      "account": "sysio.token",
      "name": "transfer",
      "authorization": [{
          "actor": "sysio",
          "permission": "active"
        }
      ],
      // highlight-start
      "data": {
        "from": "sysio",
        "to": "han",
        "quantity": "1.0000 SYS",
        "memo": "memo"
      }
      // highlight-end
    }
  ],
  "transaction_extensions": [],
  "context_free_data": []
}
```

### Send the transaction

You can send the transaction you created as JSON snippet in two ways:

* To send the transaction stored in `trx-transfer.json` file, run:

```sh
clio push transaction trx-transfer.json -p sysio@active
```

* Alternatively, you can send the transaction using the JSON content directly:

```sh
clio push transaction '{
  "max_net_usage_words": 0,
  "max_cpu_usage_ms": 0,
  "delay_sec": 0,
  "context_free_actions": [],
  "actions": [{
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
      }
    }
  ],
  "transaction_extensions": [],
  "context_free_data": []
}' -p sysio@active
```

### Verify `han`'s balance

Assuming you followed the simpler method of submitting the transaction described [here](#steps-to-submit-a-transactionvia-clio-push-action), `han`'s balance should now be `2.0000 SYS`.

```sh
clio get account han

....
SYS balances: 
     liquid:            2.0000 SYS
     staked:            0.0000 SYS
     unstaking:         0.0000 SYS
     total:             2.0000 SYS
```

## Reference

* [clio push action](/docs/api-reference/tooling/clio/command-reference/push/push-action.md)
* [clio push transaction](/docs/api-reference/tooling/clio/command-reference/push/push-transaction.md)
* [POST /push transaction](https://docs.wire.network/docs/api-reference/chain-api#operation/push_transaction)
