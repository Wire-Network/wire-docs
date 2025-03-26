---
id: unpack-action-data
title: unpack_action_data
---


## Description

This command is used to convert packed action data to a plain JSON.

## Positional Arguments

- `account` _TEXT_ - The name of the account that hosts the contract
- `name` _TEXT_ - The name of the function that's called by this action
- `packed_action_data` _TEXT_ - The action data expressed as packed HEX string

## Options

- `-h,--help` - Print this help message and exit

## Usage

```sh
clio convert unpack_action_data sysio unlinkauth 000000008090b1ca000000000091b1ca0000000000eab0c7
```

## Output

```json
{
  "account": "test1",
  "code": "test2",
  "type": "sysio"
}
```
