---
id: private-keys
title: private_keys
tags:
  - clio
  - wallet
  - keys
---

## Command

```sh
clio wallet private_keys [OPTIONS]
```

## Description

List of private keys from an unlocked wallet in wif or PVT_R1 format.

## Synopsis

```sh
clio wallet private_keys
  [-h | --help]                     # Print this help message and exit
  [--help-all]                      # Show all help
  [[-n | --name] <wallet_name>]     # The name of the wallet to list keys from (defaults to "default")
  [--password <password>]           # The password returned by wallet create
```

## Examples

The following examples demonstrate how to use the `clio wallet private_keys` command:

### List private keys from default wallet

```sh
clio wallet private_keys --password PW5Ji6JUrLjhKAVn68nmacLxwhvtqUAV18J7iycZppsPKeoGGgBEw
```

### List private keys from specific wallet

```sh
clio wallet private_keys -n mywallet --password PW5Ji6JUrLjhKAVn68nmacLxwhvtqUAV18J7iycZppsPKeoGGgBEw
```
