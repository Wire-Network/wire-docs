---
id: pack-action-data
title: pack_action_data
---

## Description

This command is used to convert action data from a plain JSON to its binary(packed) representation.

## Positional arguments

- `account` _TEXT_ - The name of the account that hosts the contract
- `name` _TEXT_ - The name of the function that's called by this action
- `unpacked_action_data` _TEXT_ - The action data expressed as JSON

## Options

- `-h,--help` - Print this help message and exit

## Usage

```sh
 clio convert pack_action_data sysio unlinkauth '{"account":"test1", "code":"test2", "type":"sysio"}'
```

## Output

```console
000000008090b1ca000000000091b1ca0000000000eab0c7
```
