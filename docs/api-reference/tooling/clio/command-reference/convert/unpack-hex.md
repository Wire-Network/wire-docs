---
id: unpack-hex
title: unpack_hex
tags:
  - clio
  - convert
  - unpack
  - hex
---

## Command

```sh
clio convert unpack_hex [OPTIONS] <hex>
```

## Description

Convert packed HEX to JSON form. This command deserializes binary HEX data into its JSON representation based on the specified type.

## Synopsis

```sh
clio convert unpack_hex
  <hex>                               # REQUIRED: The packed HEX of built-in types
  [-h | --help]                       # Print this help message and exit
  [--help-all]                        # Show all help
  [--type <type>]                     # Type of the HEX data (if not specified, common types are attempted)
  [--abi-file <file>]                 # The ABI file that contains --type for unpacking
```

## Supported Types

Built-in types that can be unpacked:
- `signed_block`
- `transaction`
- `action_trace`
- `transaction_trace`
- `action`
- `abi_def`

## Examples

### Unpack HEX to JSON with automatic type detection

```sh
clio convert unpack_hex 0e656f73696f2e746f6b656e...
```

### Unpack HEX with specified type

```sh
clio convert unpack_hex 0e656f73696f2e746f6b656e... --type action
```

**Output:**

```json
{
  "account": "sysio.token",
  "name": "transfer",
  "authorization": [{
    "actor": "alice",
    "permission": "active"
  }],
  "data": {
    "from": "alice",
    "to": "bob",
    "quantity": "1.0000 SYS",
    "memo": "test"
  }
}
```

### Unpack custom type using ABI file

```sh
clio convert unpack_hex abc123def456... --type my_struct --abi-file mycontract.abi
```

## Requirements

- Install the currently supported version of `clio`.
- Valid HEX data matching the specified type structure.

:::note
The `clio` tool is bundled with the Wire software. [Installing Wire core](/docs/getting-started/install-dependencies.md) will install the `clio` and `kiod` command line tools.
:::
