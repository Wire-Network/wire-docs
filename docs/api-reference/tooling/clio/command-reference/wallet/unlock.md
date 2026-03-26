---
id: unlock
title: unlock
tags:
  - clio
  - wallet
---

## Command

```sh
clio wallet unlock [OPTIONS]
```

## Description

Unlock wallet

## Synopsis

```sh
clio wallet unlock
  [-h | --help]                     # Print this help message and exit
  [--help-all]                      # Show all help
  [[-n | --name] <wallet_name>]     # The name of the wallet to unlock
  [--password <password>]           # The password returned by wallet create
```

## Examples

The following examples demonstrate how to use the `clio wallet unlock` command:

### Unlock a wallet with password

```sh
clio wallet unlock -n second-wallet --password PW5Ji6JUrLjhKAVn68nmacLxwhvtqUAV18J7iycZppsPKeoGGgBEw
```

**Where:**

- `-n second-wallet` - Specifies the wallet to unlock
- `--password` - Provides the password returned when the wallet was created

**Output:**

```console
Unlocked: 'second-wallet'
```
