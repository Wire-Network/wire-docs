---
id: abi
---

## Description

Retrieves the ABI for an account.

## Positional Arguments

- `name` _TEXT_ - The name of the account whose ABI should be retrieved.

## Options

- `-f,--file` _TEXT_ - The name of the file to save the contract .abi to instead of writing to console.

## Examples

Retrieve the ABI for `sysio.token` contract and save the output to a file named `sysio.token.abi`.

```sh
clio get abi sysio.token -f sysio.token.abi
```

Ouput:

```sh
cat sysio.token.abi

{
  "version": "sysio::abi/1.2",
  "types": [],
  "structs": [{
      "name": "account",
      "base": "",
      "fields": [{
          "name": "balance",
          "type": "asset"
        }
      ]
    },{
      "name": "close",
      "base": "",
      ....
    }
}
```
