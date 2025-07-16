---
id: open
title: open
---

## Command

```sh
clio wallet open [OPTIONS]
```

## Description

Open an existing wallet

## Synopsis

```sh
clio wallet open
  [-h | --help]                     # Print this help message and exit
  [--help-all]                      # Show all help
  [[-n | --name] <wallet_name>]     # The name of the wallet to open
```

## Examples

The following examples demonstrate how to use the `clio wallet open` command:

### Open the default wallet

```sh
clio wallet open
```

**Output:**

```console
Opened: default
```

### Open a specific wallet

```sh
clio wallet open -n second-wallet
```

**Output:**

```console
Opened: second-wallet
```
