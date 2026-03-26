---
id: wasm-to-hash
title: wasm_to_hash
tags:
  - clio
  - convert
  - WASM
  - hash
---

## Command

```sh
clio convert wasm_to_hash [OPTIONS] <wasm-file>
```

## Description

Convert a WASM file to its hash. This command computes the SHA-256 hash of a WASM file, which can be used to verify contract code integrity or compare contract versions.

## Synopsis

```sh
clio convert wasm_to_hash
  <wasm-file>                         # REQUIRED: The WASM file name
  [-h | --help]                       # Print this help message and exit
  [--help-all]                        # Show all help
```

## Examples

### Get hash of a WASM file

```sh
clio convert wasm_to_hash mycontract.wasm
```

**Output:**

```console
WASM hash: 1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b
```

### Use with contract verification

```sh
# Get the hash of your local WASM
clio convert wasm_to_hash ./build/mycontract.wasm

# Compare with the deployed contract code hash
clio get code mycontract --wasm deployed.wasm
clio convert wasm_to_hash deployed.wasm
```

## Requirements

- Install the currently supported version of `clio`.
- A valid WASM file.

:::note
The `clio` tool is bundled with the Wire software. [Installing Wire core](/docs/getting-started/install-dependencies.md) will install the `clio` and `kiod` command line tools.
:::
