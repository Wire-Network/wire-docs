---
id: finalizer-info
title: finalizer_info
---

## Command

```sh
clio get finalizer_info [OPTIONS]
```

## Description

Get current finalizer information from the blockchain. This command retrieves details about the active finalizers in the network.

## Synopsis

```sh
clio get finalizer_info
  [-h | --help]                       # Print this help message and exit
  [--help-all]                        # Show all help
```

## Examples

### Get finalizer information

```sh
clio get finalizer_info
```

**Output:**

```json
{
  "active_finalizer_policy": {
    "generation": 1,
    "threshold": 15,
    "finalizers": [
      {
        "description": "producer1",
        "weight": 1,
        "public_key": "PUB_BLS_..."
      }
    ]
  },
  "last_finalized_block_num": 1000,
  "last_finalized_block_id": "000003e8..."
}
```

## Requirements

- Install the currently supported version of `clio`.
- A running `nodeop` instance with the chain API plugin enabled.

:::note
The `clio` tool is bundled with the Wire software. [Installing Wire core](/docs/getting-started/install-dependencies.md) will install the `clio` and `kiod` command line tools.
:::
