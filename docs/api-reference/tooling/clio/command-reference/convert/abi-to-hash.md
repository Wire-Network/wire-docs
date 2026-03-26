---
id: abi-to-hash
title: abi_to_hash
tags:
  - clio
  - convert
  - ABI
  - hash
---

## Command

```sh
clio convert abi_to_hash [OPTIONS] <abi-file>
```

## Description

Convert an ABI file to its hash. This command computes the SHA-256 hash of an ABI file, which can be used to verify ABI integrity or compare ABI versions.

## Synopsis

```sh
clio convert abi_to_hash
  <abi-file>                          # REQUIRED: The ABI file name
  [-h | --help]                       # Print this help message and exit
  [--help-all]                        # Show all help
```

## Examples

### Get hash of an ABI file

```sh
clio convert abi_to_hash mycontract.abi
```

**Output:**

```console
ABI hash: 2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b
```

### Use with contract verification

```sh
# Get the hash of your local ABI
clio convert abi_to_hash ./build/mycontract.abi

# Compare with the deployed contract ABI hash
clio get code mycontract --abi deployed.abi
clio convert abi_to_hash deployed.abi
```

## Requirements

- Install the currently supported version of `clio`.
- A valid ABI file.

:::note
The `clio` tool is bundled with the Wire software. [Installing Wire core](/docs/getting-started/install-dependencies.md) will install the `clio` and `kiod` command line tools.
:::
