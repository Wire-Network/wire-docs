---
id: consensus-parameters
title: consensus_parameters
tags:
  - clio
  - get
  - consensus
---

## Command

```sh
clio get consensus_parameters [OPTIONS]
```

## Description

Get current blockchain consensus parameters. This command retrieves the configuration parameters that govern blockchain consensus.

## Synopsis

```sh
clio get consensus_parameters
  [-h | --help]                       # Print this help message and exit
  [--help-all]                        # Show all help
```

## Examples

### Get consensus parameters

```sh
clio get consensus_parameters
```

**Output:**

```json
{
  "chain_config": {
    "max_block_net_usage": 1048576,
    "target_block_net_usage_pct": 1000,
    "max_transaction_net_usage": 524288,
    "base_per_transaction_net_usage": 12,
    "net_usage_leeway": 500,
    "context_free_discount_net_usage_num": 20,
    "context_free_discount_net_usage_den": 100,
    "max_block_cpu_usage": 200000,
    "target_block_cpu_usage_pct": 1000,
    "max_transaction_cpu_usage": 150000,
    "min_transaction_cpu_usage": 100
  },
  "wasm_config": {
    "max_mutable_global_bytes": 1024,
    "max_table_elements": 1024,
    "max_section_elements": 8192,
    "max_linear_memory_init": 65536,
    "max_func_local_bytes": 8192,
    "max_nested_structures": 1024,
    "max_symbol_bytes": 8192,
    "max_module_bytes": 20971520,
    "max_code_bytes": 20971520,
    "max_pages": 528,
    "max_call_depth": 251
  }
}
```

## Requirements

- Install the currently supported version of `clio`.
- A running `nodeop` instance with the chain API plugin enabled.

:::note
The `clio` tool is bundled with the Wire software. [Installing Wire core](/docs/getting-started/install-dependencies.md) will install the `clio` and `kiod` command line tools.
:::
