---
id: k1-public-key
title: k1_public_key
---

## Command

```sh
clio convert k1_public_key [OPTIONS] <public-key>
```

## Description

Generate both forms of a K1 public key. This command converts a K1 public key between legacy format and PUB_K1 format.

## Synopsis

```sh
clio convert k1_public_key
  <public-key>                        # REQUIRED: Public key to convert
  [-h | --help]                       # Print this help message and exit
  [--help-all]                        # Show all help
```

## Examples

### Convert from legacy format to PUB_K1 format

```sh
clio convert k1_public_key SYS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV
```

**Output:**

```console
Public key : SYS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV
Public key : PUB_K1_6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5BoDq63
```

### Convert from PUB_K1 format to legacy format

```sh
clio convert k1_public_key PUB_K1_6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5BoDq63
```

**Output:**

```console
Public key : SYS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV
Public key : PUB_K1_6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5BoDq63
```

## Requirements

- Install the currently supported version of `clio`.

:::note
The `clio` tool is bundled with the Wire software. [Installing Wire core](/docs/getting-started/install-dependencies.md) will install the `clio` and `kiod` command line tools.
:::
