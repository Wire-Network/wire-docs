---
id: create-key
title: create_key
---

## Description

Creates a key pair within the wallet so that you don't need to manually import it like you would with `clio create key`. By default, this will create a key with the type \"favored\" by the wallet, which is a K1 key. But this command also lets you create a key in R1 format.

## Positional Arguments

`key_type` _TEXT_ - "K1" or "R1" Key type to create

## Options

-n,--name TEXT=default The name of the wallet to create key into

## Usage

```sh
clio wallet create_key K1
```

## Outputs

```console
Created new private key with a public key of: "SYS67xHKzQArkWZN6rKLCq7NLvaj8kurwxzRxoTVz6cgDJkiWdGug"
```
