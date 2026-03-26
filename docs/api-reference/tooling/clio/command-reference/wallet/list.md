---
id: list
title: list
tags:
  - clio
  - wallet
---

## Command

```sh
clio wallet list [OPTIONS]
```

## Description

Lists opened wallets, * = unlocked

## Synopsis

```sh
clio wallet list
  [-h | --help]                     # Print this help message and exit
  [--help-all]                      # Show all help
```

## Examples

The following examples demonstrate how to use the `clio wallet list` command:

### List all wallets

```sh
clio wallet list
```

**Output:**

```console
Wallets:
[
  "default *",
  "second-wallet *"
]
```

**Note:** The asterisk (*) indicates that the wallet is unlocked.
