---
id: lock
title: lock
tags:
  - clio
  - wallet
---

## Command

```sh
clio wallet lock [OPTIONS]
```

## Description

Lock wallet

## Synopsis

```sh
clio wallet lock
  [-h | --help]                     # Print this help message and exit
  [--help-all]                      # Show all help
  [[-n | --name] <wallet_name>]     # The name of the wallet to lock
```

## Examples

The following examples demonstrate how to use the `clio wallet lock` command:

### Lock the default wallet

```sh
clio wallet lock
```

**Output:**

```console
Locked: 'default'
```

### Lock a specific wallet

```sh
clio wallet lock -n second-wallet
```

**Output:**

```console
Locked: 'second-wallet'
```
