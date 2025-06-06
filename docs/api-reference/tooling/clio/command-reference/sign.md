---
id: sign
title: sign
---

## Description

Sign a transaction

## Usage

```sh
clio sign <transaction> [OPTIONS]
```

## Positional Arguments

- `transaction` _TEXT_ - The JSON string or filename defining the transaction to sign.

## Options

- `-k,--private-key` _TEXT_ - The private key that will be used to sign the transaction.
- `--public-key` _TEXT_ - Ask `kiod` to sign with the corresponding private key of the given public key.
- `-c,--chain-id` _TEXT_ - The chain id that will be used to sign the transaction.
- `-p,--push-transaction` - Push transaction after signing.
