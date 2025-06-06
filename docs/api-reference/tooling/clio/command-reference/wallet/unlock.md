---
id: unlock
title: unlock
---

## Description

Unlocks a wallet

## Positional Arguments

None

## Options

- `-n, --name` _TEXT_ - The name of the wallet to unlock.
- `--password` _TEXT_ - The password returned by wallet create.

## Usage

To unlock a wallet, specify the password provided when it was created.

```sh
clio wallet unlock -n second-wallet --password PW5Ji6JUrLjhKAVn68nmacLxwhvtqUAV18J7iycZppsPKeoGGgBEw
```

## Outputs

```console
Unlocked: 'second-wallet'
```
