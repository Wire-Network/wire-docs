---
id: unpack-action-data
title: unpack_action_data
---

## Command

```sh
clio convert unpack_action_data <account> <name> <packed_action_data> [OPTIONS]
```

## Description

This command is used to convert packed action data to a plain JSON.

## Synopsis

```sh
clio convert unpack_action_data
  <account>                        # REQUIRED: The account hosting the contract
  <name>                           # REQUIRED: The action to unpack (e.g. "transfer")
  <packed_action_data>             # REQUIRED: The packed HEX string of the action's data
  [-h | --help]                    # Print this help message and exit
```

## Examples

The following examples demonstrate how to use the `clio convert unpack_action_data` command:

### Unpack action data for unlinkauth function

```sh
clio convert unpack_action_data sysio unlinkauth 000000008090b1ca000000000091b1ca0000000000eab0c7
```

**Output:**

```json
{
  "account": "test1",
  "code": "test2",
  "type": "sysio"
}
```
