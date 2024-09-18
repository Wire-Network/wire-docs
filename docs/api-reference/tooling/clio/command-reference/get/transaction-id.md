---
id: transaction-id
title: transaction_id
---

## Description
Get `transaction_id` given the transaction object.

## Positionals

- `transaction` _TEXT_ - The JSON string or path to a file containing the transaction object.

## Options

  `-h,--help`                   Print this help message and exit


## Example 

```bash
clio get transaction_id ./trx.json
```

```json title="trx.json"
{
  "expiration": "2020-09-15T13:45:22",
  "refBlockNum": 12345,
  "refBlockPrefix": 234567890,
  "net_usage_words": 0,
  "max_cpu_usage_ms": 0,
  "delay_sec": 0,
  "context_free_actions": [],
  "actions": [
    {
      "account": "sysio.token",
      "name": "transfer",
      "authorization": [
        {
          "actor": "alice",
          "permission": "active"
        }
      ],
      "data": "0000000000ea30550000000000ea3055102700000000000004454f530000000000",
      "hex_data": "0000000000ea30550000000000ea3055102700000000000004454f530000000000"
    }
  ],
  "transaction_extensions": [],
  "signatures": [
    "SIG_K1_KWj9z7dJx1FtCrd1UAM8ZG3J2iEWdkCj4K8J6tBQeDw9znhUyoa6t2fzbQeGSZnPqcTJqLYTCh7Xp6gIwSskcoVg9akSGK"
  ],
  "context_free_data": []
}
```
or 

```bash
clio get transaction_id clio get transaction_id  "{\"expiration\":\"2020-09-15T13:45:22\",\"refBlockNum\":12345,\"refBlockPrefix\":234567890,\"net_usage_words\":0,\"max_cpu_usage_ms\":0,\"delay_sec\":0,\"context_free_actions\":[],\"actions\":[{\"account\":\"sysio.token\",\"name\":\"transfer\",\"authorization\":[{\"actor\":\"alice\",\"permission\":\"active\"}],\"data\":\"0000000000ea30550000000000ea3055102700000000000004454f530000000000\",\"hex_data\":\"0000000000ea30550000000000ea3055102700000000000004454f530000000000\"}],\"transaction_extensions\":[],\"signatures\":[\"SIG_K1_KWj9z7dJx1FtCrd1UAM8ZG3J2iEWdkCj4K8J6tBQeDw9znhUyoa6t2fzbQeGSZnPqcTJqLYTCh7Xp6gIwSskcoVg9akSGK\"],\"context_free_data\":[]}"
```

## Output 

```console 
9144d5b2f5cf3d9e7a74613e04ce27fd902866f9127acb7f3907ffbbfd90746a
```

![clio-get-trx-id](/img/clio-get-tran-id.png)