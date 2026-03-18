---
id: how-to-get-tables-information
description: Learn how to query data from smart contract multi-index tables using clio get table command.
---

# Get Table Information

## Overview

This guide explains how to query data from a smart contract's multi-index table using the `clio get table` command.

## Prerequisites

* Install the currently supported version of `clio`

:::info
| The `clio` tool is bundled with the Wire software. [Installing Wire Core](/docs/getting-started/install-dependencies.md) will also install the clio tool.
:::

:::warning[REMINDER]
The install process has already set up the wallet for the *root* user. To interact with clio, ensure **you are on the root user**. Run `sudo su -` to switch to the root user.
:::

* Understand the following:
  * What is an [account](/docs/introduction/glossary.md#account). See also [Accounts and Permissions](/docs/smart-contract-development/accounts-permissions.md)
  * What is a [table](/docs/introduction/glossary.md#tables) and understanding [scope](/docs/smart-contract-development/state-data.md#scope).

## Command

```sh
clio get table <contract> <scope> <table>
```

### Parameters

| Parameter | Description |
|-----------|-------------|
| `contract` | The account name where the contract is deployed |
| `scope` | The scope within the contract |
| `table` | The name of the table to query |

## Example

Query the `abihash` table from the `sysio` contract:

```sh
clio get table sysio sysio abihash
```

**Example Output:**

```json
{
  "rows": [{
      "owner": "sysio",
      "hash": "38589666191bf8ad1f1c3e9ee0387f4e7d77ed9a410d5f2f35698aaf82e0f94d"
    }
  ],
  "more": false,
  "next_key": ""
}
```

### Additional Options

Limit the number of rows returned:

```sh
clio get table sysio sysio abihash --limit 3
```

Query with a lower bound:

```sh
clio get table sysio sysio abihash --lower sysio
```

## Reference

* [clio get table](/docs/api-reference/tooling/clio/command-reference/get/table.md)
