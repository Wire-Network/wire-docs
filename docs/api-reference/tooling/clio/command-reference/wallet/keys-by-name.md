---
id: keys-by-name
title: keys_by_name
tags:
  - clio
  - wallet
  - keys
---

## Command

```sh
clio wallet keys_by_name [OPTIONS]
```

## Description

List public keys from all unlocked wallets, organized by their assigned key names.

## Synopsis

```sh
clio wallet keys_by_name
  [-h | --help]                       # Print this help message and exit
  [--help-all]                        # Show all help
  [[-n | --name] <wallet_name>]       # The name of the wallet to list keys from (default: "default")
  [--password <password>]             # The password returned by wallet create
```

## Examples

The following examples demonstrate how to use the `clio wallet keys_by_name` command:

### List all keys by name from unlocked wallets

```sh
clio wallet keys_by_name
```

**Output:**

```console
[
  {
    "name": "alice_key",
    "public_key": "SYS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV"
  },
  {
    "name": "bob_key",
    "public_key": "SYS5jnmSKrzdBHE9n8hw58y7yxFWBC8SNiG7m8S1crJH3KvAnf9o6"
  }
]
```

### List keys by name from a specific wallet

```sh
clio wallet keys_by_name --name my_wallet
```

**Where:**

- `--name my_wallet` - Specifies the wallet to list keys from

### List keys by name with password authentication

```sh
clio wallet keys_by_name --name my_wallet --password PW5HuN7hkCBdMNQAa8z3NuThp3LSDtjv77odQYs5t2wgghJq4MUxo
```

## Requirements

- Install the currently supported version of `clio` and `kiod`.

:::note
The `clio` tool is bundled with the Wire software. [Installing Wire core](/docs/getting-started/install-dependencies.md) will install the `clio` and `kiod` command line tools.
:::
