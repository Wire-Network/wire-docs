---
id: create
title: create
---

## Command

```sh
clio wallet create [OPTIONS]
```

## Description

Create a new wallet locally

## Synopsis

```sh
clio wallet create
  [-h | --help]                     # Print this help message and exit
  [--help-all]                      # Show all help
  [[-n | --name] <wallet_name>]     # The name of the new wallet (defaults to "default")
  [[-f | --file] <filename>]        # Name of file to write wallet password output to (must be set, unless --to-console is passed)
  [--to-console]                    # Print password to console
```

## Examples

The following examples demonstrate how to use the `clio wallet create` command:

### Create a default wallet and output password to console

```sh
clio wallet create --to-console
```

**Where:**

- `--to-console` - Tells the command to print the wallet password to the console

**Output:**

```console
Creating wallet: default
Save password to use in the future to unlock this wallet.
Without password imported keys will not be retrievable.
"PW5HuN7hkCBdMNQAa8z3NuThp3LSDtjv77odQYs5t2wgghJq4MUxo"
```

### Create a named wallet and save password to file

```sh
clio wallet create --name my_wallet --file my_wallet_password.txt
```

**Where:**

- `--name my_wallet` - Creates a wallet called "my_wallet"
- `--file my_wallet_password.txt` - Saves the password to a file

**Output:**

```console
Creating wallet: my_wallet
Save password to use in the future to unlock this wallet.
Without password imported keys will not be retrievable.
saving password to my_wallet_password.txt
```

### Verify wallet creation

```sh
clio wallet list
```

**Output:**

```console
Wallets:
[
  "default *",
  "my_wallet *"
]
```

## Requirements

- Install the currently supported version of `clio` and `kiod`.

:::note
The `clio` tool is bundled with the Wire software. [Installing Wire core](/docs/getting-started/install-dependencies.md) will install the `clio` and `kiod` command line tools.
:::
