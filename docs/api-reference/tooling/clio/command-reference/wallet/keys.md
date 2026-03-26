---
id: keys
title: keys
tags:
  - clio
  - wallet
  - keys
---

## Command

```sh
clio wallet keys [OPTIONS]
```

## Description

List of public keys from all unlocked wallets.

## Synopsis

```sh
clio wallet keys
  [-h | --help]                     # Print this help message and exit
  [--help-all]                      # Show all help
```

## Examples

The following examples demonstrate how to use the `clio wallet keys` command:

### List all public keys from unlocked wallets

```sh
clio wallet keys
```

**Output:**

```console
[[
    "SYS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV",
    "5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3"
  ]
]
```

**Note:** The asterisk (*) indicates that the wallet is unlocked.
