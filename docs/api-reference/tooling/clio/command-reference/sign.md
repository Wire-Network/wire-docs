---
id: sign
title: sign
---

## Command

```sh
clio sign <transaction> [OPTIONS]
```

## Description

Sign a transaction

## Synopsis

```sh
clio sign
  <transaction>                      # REQUIRED: The JSON string or filename defining the transaction to sign
  [-h | --help]                     # Print this help message and exit
  [--help-all]                      # Show all help
  [[-k | --private-key] <key>]      # The private key that will be used to sign the transaction
  [--public-key <key>]              # Ask kiod to sign with the corresponding private key of the given public key
  [[-c | --chain-id] <chain_id>]    # The chain id that will be used to sign the transaction
  [-p | --push-transaction]         # Push transaction after signing
```

## Examples

The following examples demonstrate how to use the `clio sign` command:

### Sign a transaction with a private key

```sh
clio sign transaction.json -k 5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3
```

### Sign and push a transaction

```sh
clio sign transaction.json -k 5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3 -p
```
