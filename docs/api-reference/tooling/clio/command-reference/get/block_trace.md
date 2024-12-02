---
id: block_trace
---

## Description

Retrieves a block from the trace logs.

## Positionals
  
`block` TEXT REQUIRED         The number of the block to retrieve

## Options

`-h,--help` UINT   Print this help message and exit

**Command**

```sh
clio get block_trace <block_num>
```

**Output**

## Example

```sh
clio get block_trace 3511000
```

```sh
{
  "id": "003592d8a37a13122cc769c1468a8510a8d1eae933abffc9bea7a8ba6f893d8a",
  "number": 3511000,
  "previous_id": "003592d7c74fa42a968bcdb6955d0ebda43adcef414612ed9fb2df6a2d4df2e3",
  "status": "pending",
  "timestamp": "2024-12-02T13:38:17.500Z",
  "producer": "charlie",
  "transaction_mroot": "0000000000000000000000000000000000000000000000000000000000000000",
  "action_mroot": "27c04215e4083a1f505e498434ace781d57d6953d780aca88890916d64712d4d",
  "schedule_version": 1,
  "transactions": [{
      "id": "9d37750886d24cce286ee96ab1c3c44129ae325dcaa15d3494e4e4a4c14d6bef",
      "block_num": 3511000,
      "block_time": "2024-12-02T13:38:17.500",
      "producer_block_id": "003592d8a37a13122cc769c1468a8510a8d1eae933abffc9bea7a8ba6f893d8a",
      "actions": [{
          "global_sequence": 3511181,
          "receiver": "sysio",
          "account": "sysio",
          "action": "onblock",
          "authorization": [{
              "account": "sysio",
              "permission": "active"
            }
          ],
          "data": "92e9c05d00000040b9784d430000003592d6e7836ac5ba2fc35100d51e7393da7b23b9cbd7354d659e4a576d87160000000000000000000000000000000000000000000000000000000000000000ac3bd685bfb90e51a8da6b82b79a3e639fdbebc63c84137f0a99c20750cfce48010000000000",
          "return_value": ""
        }
      ],
      "status": "executed",
      "cpu_usage_us": 100,
      "net_usage_words": 0,
      "signatures": [],
      "transaction_header": {
        "expiration": "1970-01-01T00:00:00",
        "ref_block_num": 0,
        "ref_block_prefix": 0,
        "max_net_usage_words": 0,
        "max_cpu_usage_ms": 0,
        "delay_sec": 0
      }
    }
  ]
}
```
