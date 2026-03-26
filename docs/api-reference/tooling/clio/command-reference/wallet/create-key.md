---
id: create-key
title: create_key
tags:
  - clio
  - wallet
  - keys
---

## Command

```sh
clio wallet create_key [key_type] [OPTIONS]
```

## Description

Creates a key pair within the wallet so that you don't need to manually import it like you would with `clio create key`. By default, this will create a key with the type "favored" by the wallet, which is a K1 key. But this command also lets you create a key in R1 format.

## Synopsis

```sh
clio wallet create_key
  [key_type]                        # OPTIONAL: "K1" or "R1" Key type to create
  [[-n | --name] <wallet_name>]     # The name of the wallet to create key into (defaults to "default")
```

## Examples

The following examples demonstrate how to use the `clio wallet create_key` command:

### Create a K1 key in the default wallet

```sh
clio wallet create_key K1
```

### Create an R1 key in a specific wallet

```sh
clio wallet create_key R1 -n mywallet
```

## Output

```console
Created new private key with a public key of: "SYS67xHKzQArkWZN6rKLCq7NLvaj8kurwxzRxoTVz6cgDJkiWdGug"
```
