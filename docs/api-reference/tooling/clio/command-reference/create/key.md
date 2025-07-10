---
id: key
title: key
---

## Command

```sh
clio create key [OPTIONS]
```

## Description

Creates a new keypair and either prints the public and private keys to the screen or to a file.

## Synopsis

```sh
clio create key
  [-h | --help]                    # Print this help message and exit
  [--r1]                           # Generate a key using the R1 curve, instead of the K1 curve
  [--file <filename>]              # Name of file to write private/public key output to. (Must be set, unless "--to-console" is passed)
  [--to-console]                   # Print private/public keys to console
```

## Examples

The following examples demonstrate how to use the `clio create key` command:

### Create a new key pair and output to the screen

```sh
clio create key --to-console
```

**Output:**

```sh
Private key: 5KDNWQvY2seBPVUz7MiiaEDGTwACfuXu78bwZu7w2UDM9A3u3Fs
Public key: SYS5zG7PsdtzQ9achTdRtXwHieL7yyigBFiJDRAQonqBsfKyL3XhC
```

### Create a new key pair and output to a file

```sh
clio create key --file my_keys.txt
```

**Output:**

```sh
saving keys to my_keys.txt
```

```sh
cat my_keys.txt
```

**Output:**

```sh
Private key: 5KWcfnGao5K6WV65Zgjd1xvpugRUeKwb6oxzmwaS1tPE2Ef4qzo
Public key: SYS7oDiBtzSHtShprGFmXm9JLnwxhcPeDyhww3tXDvVATDYtciLGG
```
