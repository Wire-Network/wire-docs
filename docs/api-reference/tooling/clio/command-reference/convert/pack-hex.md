---
id: pack-hex
title: pack_hex
---

## Command

```sh
clio convert pack_hex [OPTIONS] <json>
```

## Description

Convert JSON to packed HEX form. This command serializes JSON data into its binary HEX representation based on the specified type.

## Synopsis

```sh
clio convert pack_hex
  <json>                              # REQUIRED: The JSON of built-in types
  [-h | --help]                       # Print this help message and exit
  [--help-all]                        # Show all help
  --type <type>                       # REQUIRED: Type of the JSON data
  [--abi-file <file>]                 # The ABI file that contains --type for packing
```

## Supported Types

Built-in types that can be packed:
- `signed_block`
- `transaction`
- `action_trace`
- `transaction_trace`
- `action`
- `abi_def`

## Examples

### Pack an action to HEX

```sh
clio convert pack_hex '{"account":"sysio.token","name":"transfer","authorization":[{"actor":"alice","permission":"active"}],"data":{"from":"alice","to":"bob","quantity":"1.0000 SYS","memo":"test"}}' --type action
```

### Pack a transaction to HEX

```sh
clio convert pack_hex '{"expiration":"2024-01-01T00:00:00","ref_block_num":0,"ref_block_prefix":0,"max_net_usage_words":0,"max_cpu_usage_ms":0,"delay_sec":0,"context_free_actions":[],"actions":[]}' --type transaction
```

### Pack custom type using ABI file

```sh
clio convert pack_hex '{"field1":"value1","field2":123}' --type my_struct --abi-file mycontract.abi
```

## Requirements

- Install the currently supported version of `clio`.
- Valid JSON matching the specified type structure.

:::note
The `clio` tool is bundled with the Wire software. [Installing Wire core](/docs/getting-started/install-dependencies.md) will install the `clio` and `kiod` command line tools.
:::
