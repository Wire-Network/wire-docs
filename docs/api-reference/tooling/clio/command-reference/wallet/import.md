---
id: import
title: import
---

## Description

Imports private key into wallet. This command will launch `kiod` if it is not already running.

## Command

```sh
clio wallet import [OPTIONS]
```

### Positional Arguments

None

### Options

* `-h,--help` - Print this help message and exit

* `-n, --name` _TEXT_ - The name of the wallet to import key into.
* `--private-key` _TEXT_ - Private key in WIF format to import.

## Requirements

* Install the currently supported version of `clio` and `kiod`.
  
:::info
| The `clio` and `kiod` tools are bundled with the Wire software. [Installing Wire core](/docs/getting-started/install-dependencies.md) will install the `clio` and `kiod` command line tools.
:::

## Examples

1. Import a private key to the default wallet. The wallet must be **open** and **unlocked**.

```shell
clio wallet import
```

The command asks for the private key. Enter it.

```shell
5KDNWQvY2seBPVUz7MiiaEDGTwACfuXu78bwZu7w2UDM9A3u3Fs
```

**Example Output**

```shell
private key: imported private key for: SYS5zG7PsdtzQ9achTdRtXwHieL7yyigBFiJDRAQonqBsfKyL3XhC
```

1. Import a private key to a named wallet. The wallet must be `open` and `unlocked.`

```shell
clio wallet import --name my_wallet --private-key 5KDNWQvY2seBPVUz7MiiaEDGTwACfuXu78bwZu7w2UDM9A3u3Fs
```

**Where**
`--name` my_wallet = Tells the `clio wallet import` command to import the key to `my_wallet`
`--private-key` 5KDNWQvY2seBPVUz7MiiaEDGTwACfuXu78bwZu7w2UDM9A3u3Fs = Tells the `clio wallet import` command the private key to import

**Example Output**

```shell
imported private key for: SYS5zG7PsdtzQ9achTdRtXwHieL7yyigBFiJDRAQonqBsfKyL3XhC
```
