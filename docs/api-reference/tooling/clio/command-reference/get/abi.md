---
id: abi
title: abi
---

## Command

```sh
clio get abi <name> [OPTIONS]
```

## Description

Retrieves the ABI for an account.

## Synopsis

```sh
clio get abi
  <name>                           # REQUIRED: The name of the account whose ABI should be retrieved
  [--file <filename>]              # The name of the file to save the contract .abi to instead of writing to console
  [-h, --help]                     # Print this help message and exit
```

## Examples

### Retrieve the ABI for `sysio.token` contract and save the output to a file named `sysio.token.abi`

```sh
clio get abi sysio.token -f sysio.token.abi
```

**Output:**

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
