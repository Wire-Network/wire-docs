---
id: scope
title: scope
---

## Command

```sh
clio get scope contract [OPTIONS]
```

## Description

Retrieves a list of scopes and tables owned by a contract.

## Synopsis

```sh
clio get scope
  contract <TEXT>         # REQUIRED: The contract who owns the table
  [-t, --table] <TEXT>    # The name of the table as filter
  [-l, --limit] <UINT>    # The maximum number of rows to return
  [-L, --lower] <TEXT>    # lower bound of scope
  [-U, --upper] <TEXT>    # upper bound of scope
  [-r, --reverse]         # Iterate in reverse order
  [-h, --help]            # Print this help message and exit
```

## Examples

### Get scopes and tables owned by the `sysio.token` contract

```sh
clio get scope sysio.token
```

**Output:**

```json
{
  "rows": [{
      "code": "sysio.token",
      "scope": "........ehgp3",
      "table": "stat",
      "payer": "sysio.token",
      "count": 1
    },{
      "code": "sysio.token",
      "scope": "alpha",
      "table": "accounts",
      "payer": "sysio",
      "count": 1
    },{
      "code": "sysio.token",
      "scope": "beta",
      "table": "accounts",
      "payer": "sysio",
      "count": 1
    },{
      "code": "sysio.token",
      "scope": "charlie",
      "table": "accounts",
      "payer": "sysio",
      "count": 1
    },{
      "code": "sysio.token",
      "scope": "delta",
      "table": "accounts",
      "payer": "sysio",
      "count": 1
    },{
      "code": "sysio.token",
      "scope": "sysio",
      "table": "accounts",
      "payer": "sysio",
      "count": 1
    },{
      "code": "sysio.token",
      "scope": "sysio.ram",
      "table": "accounts",
      "payer": "sysio.ram",
      "count": 1
    },{
      "code": "sysio.token",
      "scope": "sysio.ramfee",
      "table": "accounts",
      "payer": "sysio",
      "count": 1
    },{
      "code": "sysio.token",
      "scope": "sysio.rex",
      "table": "accounts",
      "payer": "sysio",
      "count": 1
    },{
      "code": "sysio.token",
      "scope": "sysio.stake",
      "table": "accounts",
      "payer": "sysio",
      "count": 1
    }
  ],
  "more": ""
}
```
