---
id: set-key-name
title: set_key_name
---

## Command

```sh
clio wallet set_key_name [OPTIONS]
```

## Description

Set a name for a key pair in a wallet. This allows you to assign human-readable names to your keys for easier identification and management.

## Synopsis

```sh
clio wallet set_key_name
  [-h | --help]                       # Print this help message and exit
  [--help-all]                        # Show all help
  [[-n | --name] <wallet_name>]       # The name of the wallet (default: "default")
  [--password <password>]             # The password returned by wallet create
  [--public-key <public_key>]         # Public key mapped to desired name
  [--private-key <private_key>]       # Private key mapped to desired name
  [--current-key-name <name>]         # Existing key name mapped to key pair
  --new-key-name <name>               # REQUIRED: Desired key name
```

## Examples

The following examples demonstrate how to use the `clio wallet set_key_name` command:

### Set a name for a key using its public key

```sh
clio wallet set_key_name --public-key SYS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV --new-key-name alice_key
```

**Where:**

- `--public-key` - The public key to assign a name to
- `--new-key-name alice_key` - The name to assign to the key

### Rename an existing named key

```sh
clio wallet set_key_name --current-key-name alice_key --new-key-name alice_production_key
```

**Where:**

- `--current-key-name alice_key` - The current name of the key
- `--new-key-name alice_production_key` - The new name for the key

### Set a key name in a specific wallet with password

```sh
clio wallet set_key_name --name my_wallet --public-key SYS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV --new-key-name bob_key --password PW5HuN7hkCBdMNQAa8z3NuThp3LSDtjv77odQYs5t2wgghJq4MUxo
```

**Where:**

- `--name my_wallet` - Specifies the wallet
- `--public-key` - The public key to name
- `--new-key-name bob_key` - The name to assign
- `--password` - The wallet password

## Requirements

- Install the currently supported version of `clio` and `kiod`.

:::note
The `clio` tool is bundled with the Wire software. [Installing Wire core](/docs/getting-started/install-dependencies.md) will install the `clio` and `kiod` command line tools.
:::
