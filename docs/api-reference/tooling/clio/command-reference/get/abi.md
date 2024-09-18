---
id: abi
---

## Description
Retrieves the ABI for an account.

## Positionals
- `name` _TEXT_ - The name of the account whose abi should be retrieved.

## Options
- `-f,--file` _TEXT_ - The name of the file to save the contract .abi to instead of writing to console.

## Examples
Retrieve and save abi for `sysio.token` contract and save the output to a file called `sysio.token.abi`.

```sh
clio get abi sysio.token -f sysio.token.abi
```