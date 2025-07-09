---
id: account
title: account
---

## Command

```sh
clio get account name [core-symbol] [OPTIONS]
```

## Description

Retrieve an account from the blockchain.

## Synopsis

```sh
clio get account
  name <TEXT>             # REQUIRED: The name of the account to retrieve
  core-symbol <TEXT>      # OPTIONAL: The expected core symbol of the chain you are querying
  [-h, --help]            # Print this help message and exit
  [-j, --json]            # Output in JSON format
```

## Examples

### Retrieve info for `sysio` account

```sh
clio get account sysio
```

**Output:**

```console
created: <TIMESTAMP>
privileged: true
permissions: 
     owner     1:    1 SYS5w4U1ZtLDWR1542shagcmT2kh8rDpQWJXS9AVcpvnzNtaAqC7v
        active     1:    1 SYS5w4U1ZtLDWR1542shagcmT2kh8rDpQWJXS9AVcpvnzNtaAqC7v

permission links: 
     sysio.any: 

memory: 
     quota:     449.3 MiB    used:      3.78 MiB  

net bandwidth: 
     used:               unlimited
     available:          unlimited
     limit:              unlimited

cpu bandwidth:
     used:               unlimited
     available:          unlimited
     limit:              unlimited

subjective cpu bandwidth:
     used:                 0 us   

SYS balances: 
     liquid:        75496.0000 SYS
     staked:            0.0000 SYS
     unstaking:         0.0000 SYS
     total:         75496.0000 SYS
```

### Retrieve info for `sysio` account in JSON format

```sh
clio get account sysio --json
```

**Output:**

```json
{
  "account_name": "sysio",
  "head_block_num": 2212,
  "head_block_time": "2025-05-20T19:44:49.500",
  "privileged": true,
  "last_code_update": "2025-05-20T19:27:42.000",
  "created": "2025-05-20T19:26:23.000",
  "core_liquid_balance": "75496.0000 SYS",
  "ram_quota": 471084640,
  "net_weight": -1,
  "cpu_weight": -1,
  "net_limit": {
    "used": -1,
    "available": -1,
    "max": -1,
    "last_usage_update_time": "2025-05-20T19:44:49.500",
    "current_used": -1
  },
  "cpu_limit": {
    "used": -1,
    "available": -1,
    "max": -1,
    "last_usage_update_time": "2025-05-20T19:44:49.500",
    "current_used": -1
  },
  "ram_usage": 3963583,
  "permissions": [{
      "perm_name": "active",
      "parent": "owner",
      "required_auth": {
        "threshold": 1,
        "keys": [{
            "key": "SYS5w4U1ZtLDWR1542shagcmT2kh8rDpQWJXS9AVcpvnzNtaAqC7v",
            "weight": 1
          }
        ],
        "accounts": [],
        "waits": []
      },
      "linked_actions": []
    },{
      "perm_name": "owner",
      "parent": "",
      "required_auth": {
        "threshold": 1,
        "keys": [{
            "key": "SYS5w4U1ZtLDWR1542shagcmT2kh8rDpQWJXS9AVcpvnzNtaAqC7v",
            "weight": 1
          }
        ],
        "accounts": [],
        "waits": []
      },
      "linked_actions": []
    }
  ],
  "total_resources": null,
  "self_delegated_bandwidth": null,
  "refund_request": null,
  "voter_info": null,
  "rex_info": null,
  "subjective_cpu_bill_limit": {
    "used": 0,
    "available": 0,
    "max": 0,
    "last_usage_update_time": "2000-01-01T00:00:00.000",
    "current_used": 0
  },
  "sysio_any_linked_actions": []
}
```
