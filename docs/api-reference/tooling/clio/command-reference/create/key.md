---
id: key
---


## Command

```bash
clio create key [OPTIONS]
```

**Where**

* [OPTIONS] = See Options in  [Command Usage](#command-usage) section below. You must choose one option of `--file` or `--to-console`

**Note**: The arguments and options enclosed in square brackets are optional.

## Description

Creates a new keypair and either prints the public and private keys to the screen or to a file.

## Command Usage

The following information shows the different positionals and options you can use with the `clio create key` command:

### Positional Arguments

* none

### Options

* `-h,--help` - Print this help message and exit

* `--r1` - Generate a key using the R1 curve (iPhone), instead of the K1 curve (Bitcoin)
`-f`,`--file` _TEXT_ - Name of file to write private/public key output to. (Must be set, unless "--to-console" is passed
`--to-console` - Print private/public keys to console.

## Requirements

* Install the currently supported version of `clio`.

:::note
| The `clio` tool is bundled with the Wire software. [Installing Wire core](/docs/getting-started/install-dependencies.md) will install the `clio` and `kiod` command line tools.
:::

## Examples

1. Create a new key pair and output to the screen

```shell
clio create key --to-console
```

**Where**
`--to-console` = Tells the `clio create key` command to print the private/public keys to the console.

**Example Output**

```shell
Private key: 5KDNWQvY2seBPVUz7MiiaEDGTwACfuXu78bwZu7w2UDM9A3u3Fs
Public key: SYS5zG7PsdtzQ9achTdRtXwHieL7yyigBFiJDRAQonqBsfKyL3XhC
```

1. Create a new key pair and output to a file

```shell
clio create key --file my_keys.txt 
```

**Where**
`--file` keys.txt = Tells the `clio create key` command to output the private/public keys to  afile called `my_keys.txt`.

**Example Output**

```shell
saving keys to my_keys.txt
```

```shell
cat my_keys.txt
```

**Example Output**

```shell
Private key: 5KWcfnGao5K6WV65Zgjd1xvpugRUeKwb6oxzmwaS1tPE2Ef4qzo
Public key: SYS7oDiBtzSHtShprGFmXm9JLnwxhcPeDyhww3tXDvVATDYtciLGG
```
