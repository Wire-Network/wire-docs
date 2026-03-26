---
id: remove-key
title: remove_key
tags:
  - clio
  - wallet
  - keys
---

## Command

```sh
clio wallet remove_key [OPTIONS] <key>
```

## Description

Remove a public key and its associated private key from a wallet.

## Synopsis

```sh
clio wallet remove_key
  <key>                               # REQUIRED: Public key to remove
  [-h | --help]                       # Print this help message and exit
  [--help-all]                        # Show all help
  [[-n | --name] <wallet_name>]       # The name of the wallet to remove key from
  [--password <password>]             # The password returned by wallet create
```

## Examples

The following examples demonstrate how to use the `clio wallet remove_key` command:

### Remove a key from the default wallet

```sh
clio wallet remove_key SYS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV --password PW5HuN7hkCBdMNQAa8z3NuThp3LSDtjv77odQYs5t2wgghJq4MUxo
```

**Where:**

- `SYS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV` - The public key to remove
- `--password` - The wallet password

### Remove a key from a named wallet

```sh
clio wallet remove_key SYS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV --name my_wallet --password PW5HuN7hkCBdMNQAa8z3NuThp3LSDtjv77odQYs5t2wgghJq4MUxo
```

**Where:**

- `--name my_wallet` - Specifies the wallet to remove the key from
- `--password` - The wallet password

## Requirements

- Install the currently supported version of `clio` and `kiod`.

:::note
The `clio` tool is bundled with the Wire software. [Installing Wire core](/docs/getting-started/install-dependencies.md) will install the `clio` and `kiod` command line tools.
:::
