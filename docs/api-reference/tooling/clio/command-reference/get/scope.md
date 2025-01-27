---
id: scope
---

## Description

Retrieves a list of scopes and tables owned by a contract.

## Positional Arguments

- `[contract]` _TEXT_ - The contract who owns the table.

## Options

- `-t,--table` _TEXT_ - The name of the table as filter.
- `-l,--limit` _UINT_ - The maximum number of rows to return.
- `-L,--lower` _TEXT_ - lower bound of scope.
- `-U,--upper` _TEXT_ - upper bound of scope.
- `-r,--reverse` - Iterate in reverse order.

## Example

```bash
clio get scope sysio.token
```

## Output

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
