---
id: k1-private-key
title: k1_private_key
tags:
  - clio
  - convert
  - keys
---

## Command

```sh
clio convert k1_private_key [OPTIONS]
```

## Description

Generate all forms of a K1 private key. This command converts a K1 private key to all its representations, including legacy format and PUB_K1 public key format.

## Synopsis

```sh
clio convert k1_private_key
  [-h | --help]                       # Print this help message and exit
  [--help-all]                        # Show all help
  [--private-key <key>]               # Private key to import, prompts if not provided
  [-f | --file <filename>]            # Name of file to write private/public key output to
  [--to-console]                      # Print private/public keys to console
```

## Examples

### Convert a private key and output to console

```sh
clio convert k1_private_key --private-key 5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3 --to-console
```

**Output:**

```console
Private key : 5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3
Private key : PVT_K1_2bfGi9rYsXQSXXTvJbDAPhHLQUojjaNLomdm3cEJ1XTzMqUt3V
Public key : SYS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV
Public key : PUB_K1_6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5BoDq63
```

### Convert and save to file

```sh
clio convert k1_private_key --private-key 5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3 --file my_key.txt
```

### Interactive mode (prompts for private key)

```sh
clio convert k1_private_key --to-console
```

## Requirements

- Install the currently supported version of `clio`.

:::note
The `clio` tool is bundled with the Wire software. [Installing Wire core](/docs/getting-started/install-dependencies.md) will install the `clio` and `kiod` command line tools.
:::

:::warning
Handle private keys with care. Never share your private keys and avoid displaying them in shared environments.
:::
