---
id: remove-name
title: remove_name
---

## Command

```sh
clio wallet remove_name [OPTIONS] <name>
```

## Description

Remove a named key set from a wallet.

## Synopsis

```sh
clio wallet remove_name
  <name>                              # REQUIRED: The named set to remove
  [-h | --help]                       # Print this help message and exit
  [--help-all]                        # Show all help
  [[-n | --name] <wallet_name>]       # The name of the wallet to remove key set from
  [--password <password>]             # The password returned by wallet create
```

## Examples

The following examples demonstrate how to use the `clio wallet remove_name` command:

### Remove a named key set from the default wallet

```sh
clio wallet remove_name my_key_set --password PW5HuN7hkCBdMNQAa8z3NuThp3LSDtjv77odQYs5t2wgghJq4MUxo
```

**Where:**

- `my_key_set` - The name of the key set to remove
- `--password` - The wallet password

### Remove a named key set from a specific wallet

```sh
clio wallet remove_name my_key_set --name my_wallet --password PW5HuN7hkCBdMNQAa8z3NuThp3LSDtjv77odQYs5t2wgghJq4MUxo
```

**Where:**

- `my_key_set` - The name of the key set to remove
- `--name my_wallet` - Specifies the wallet to remove the key set from
- `--password` - The wallet password

## Requirements

- Install the currently supported version of `clio` and `kiod`.

:::note
The `clio` tool is bundled with the Wire software. [Installing Wire core](/docs/getting-started/install-dependencies.md) will install the `clio` and `kiod` command line tools.
:::
