---
id: pack-action-data
title: pack_action_data
---

## Command

```sh
clio convert pack_action_data <account> <name> <unpacked_action_data> [OPTIONS]
```

## Description

This command is used to convert action data from a plain JSON to its binary(packed) representation.

## Synopsis

```sh
clio convert pack_action_data
  <account>                        # REQUIRED: The account hosting the contract
  <name>                           # REQUIRED: The action to pack (e.g. "transfer")
  <unpacked_action_data>           # REQUIRED: The JSON string of the action's data
  [-h | --help]                    # Print this help message and exit
```

## Examples

### Pack action data for `unlinkauth` action

```sh
clio convert pack_action_data sysio unlinkauth '{"account":"test1", "code":"test2", "type":"sysio"}'
```

**Output:**

```console
000000008090b1ca000000000091b1ca0000000000eab0c7
```
