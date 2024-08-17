---
id: scope
---

## Description
Retrieves a list of scopes and tables owned by a contract.

## Positionals
- `[contract]` _TEXT_ - The contract who owns the table.

## Options
- `-t,--table` _TEXT_ - The name of the table as filter.
- `-l,--limit` _UINT_ - The maximum number of rows to return.
- `-L,--lower` _TEXT_ - lower bound of scope.
- `-U,--upper` _TEXT_ - upper bound of scope.
- `-r,--reverse` - Iterate in reverse order.

## Example 

```bash 
cleos get scope eosio.token
```

## Output 

```json 
{
  "rows": [],
  "more": ""
}
```