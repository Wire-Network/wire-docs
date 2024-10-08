---
id: account
---

## Command

```bash
clio get account [OPTIONS] name [core-symbol]
```

**Where**

* [OPTIONS] = See Options in [Command Usage](#command-usage) section below.

**Note**: The arguments and options enclosed in square brackets are optional.

## Description

Retrieve an account from the blockchain

## Command Usage

The following information shows the different positional arguments and options you can use with the `clio create key` command:

### Positionals

- `name` _TEXT_ - The name of the account to retrieve
* `core-symbol` _TEXT_ - The expected core symbol of the chain you are querying - OPTIONAL

### Options

- `-h,--help` Print this help message and exit
* `-j,--json` - Output in JSON format

## Requirements

* Install the currently supported version of `clio.`

:::note

| The `clio` tool is bundled with the Wire software. [Installing Wire core](/docs/getting-started/install-dependencies.md) will install the `clio` and `kiod` command line tools.

:::

## Examples

1. Get formatted data for user `sysio`

```shell
clio get account sysio
```

**Where**
`sysio` = The name of the account.

**Example Output**

```console
privileged: true
permissions: 
     owner     1:    1 EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV
        active     1:    1 EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV
memory: 
     quota:        -1 bytes  used:      1.22 Mb   

net bandwidth: (averaged over 3 days)
     used:                -1 bytes
     available:           -1 bytes
     limit:               -1 bytes

cpu bandwidth: (averaged over 3 days)
     used:                -1 us
     available:           -1 us   
     limit:               -1 us   

producers:     <not voted>
```

---

1. Get JSON data for user **sysio**

```sh
clio get account sysio --json
```

**Example Output**

```json
{
  "account_name": "sysio",
  "privileged": true,
  "last_code_update": "2018-05-23T18:00:25.500",
  "created": "2018-03-02T12:00:00.000",
  "ram_quota": -1,
  "net_weight": -1,
  "cpu_weight": -1,
  "net_limit": {
    "used": -1,
    "available": -1,
    "max": -1
  },
  "cpu_limit": {
    "used": -1,
    "available": -1,
    "max": -1
  },
  "ram_usage": 1279625,
  "permissions": [{
      "perm_name": "active",
      "parent": "owner",
      "required_auth": {
        "threshold": 1,
        "keys": [{
            "key": "EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV",
            "weight": 1
          }
        ],
        "accounts": [],
        "waits": []
      }
    },{
      "perm_name": "owner",
      "parent": "",
      "required_auth": {
        "threshold": 1,
        "keys": [{
            "key": "EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV",
            "weight": 1
          }
        ],
        "accounts": [],
        "waits": []
      }
    }
  ],
  "total_resources": null,
  "delegated_bandwidth": null,
  "voter_info": {
    "owner": "sysio",
    "proxy": "",
    "producers": [],
    "staked": 0,
    "last_vote_weight": "0.00000000000000000",
    "proxied_vote_weight": "0.00000000000000000",
    "is_proxy": 0,
    "deferred_trx_id": 0,
    "last_unstake_time": "1970-01-01T00:00:00",
    "unstaking": "0.0000 SYS"
  }
}
```

<!-- ## See Also
- [Accounts and Permissions](https://developers.eos.io/welcome/v2.1/protocol/accounts_and_permissions) protocol document. -->
