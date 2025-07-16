---
id: import
title: import
---

## Command

```sh
clio wallet import [OPTIONS]
```

## Description

Imports private key into wallet. This command will launch `kiod` if it is not already running.

## Synopsis

```sh
clio wallet import
  [-h | --help]                     # Print this help message and exit
  [[-n | --name] <wallet_name>]     # The name of the wallet to import key into
  [--private-key <key>]             # Private key in WIF format to import
```

## Examples

The following examples demonstrate how to use the `clio wallet import` command:

### Import a private key interactively

```sh
clio wallet import
```

The command will prompt for the private key. Enter it when prompted:

```console
5KDNWQvY2seBPVUz7MiiaEDGTwACfuXu78bwZu7w2UDM9A3u3Fs
```

**Output:**

```console
private key: imported private key for: SYS5zG7PsdtzQ9achTdRtXwHieL7yyigBFiJDRAQonqBsfKyL3XhC
```

### Import a private key to a specific wallet

```sh
clio wallet import --name my_wallet --private-key 5KDNWQvY2seBPVUz7MiiaEDGTwACfuXu78bwZu7w2UDM9A3u3Fs
```

**Where:**

- `--name my_wallet` - Imports the key to the "my_wallet" wallet
- `--private-key` - Specifies the private key to import

**Output:**

```console
imported private key for: SYS5zG7PsdtzQ9achTdRtXwHieL7yyigBFiJDRAQonqBsfKyL3XhC
```

## Requirements

- Install the currently supported version of `clio` and `kiod`.
- The wallet must be **open** and **unlocked** before importing keys.

:::info
The `clio` and `kiod` tools are bundled with the Wire software. [Installing Wire core](/docs/getting-started/install-dependencies.md) will install the `clio` and `kiod` command line tools.
:::
