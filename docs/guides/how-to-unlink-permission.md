---
id: how-to-unlink-permission
title: Unlink a Linked Permission
description: Learn how to remove a custom permission link from a smart contract action using clio.
---

## Overview

This guide explains how to remove a custom permission link from a smart contract action using the `clio set action permission` command with `NULL`.

## Prerequisites

* Install the currently supported version of `clio`

:::info
| The `clio` tool is bundled with the Wire software. [Installing Wire Core](/docs/getting-started/install-dependencies.md) will also install the clio tool.
:::

:::warning[REMINDER]
The install process has already set up the wallet for the *root* user. To interact with clio, ensure **you are on the root user**. Run `sudo su -` to switch to the root user.
:::

* Understand the following:
  * What is an [account](/docs/introduction/glossary.md#account)
  * What is a [permission level](/docs/introduction/glossary.md#permission-level)
  * What is an [action](/docs/introduction/glossary.md#action)
* You have previously linked a custom permission to an action (see [Setting Custom Action Permissions](/docs/guides/how-to-set-custom-permission.md))

## Steps

To remove a linked permission level from an action, set the permission to `NULL`:

```sh
clio set action permission <account> <contract> <action> NULL -p <account>@active
```

### Example

Remove the custom permission link from the `hi` action of the `scontract1` contract for account `bob`:

```sh
clio set action permission bob scontract1 hi NULL -p bob@active
```

**Example Output:**

```sh
executed transaction: 7773ea2bcd5f335e842f4289094302faa06a8d4ff293bc1afaa9cdba0cdecb9a  120 bytes  234 us
#         sysio <= sysio::unlinkauth            {"account":"bob","code":"scontract1","type":"hi"}
warning: transaction executed locally, but may not be confirmed by the network yet         ]
```

### Verify the change

```sh
clio get account bob
```

The `permission links` section should no longer show the `scontract1::hi` action:

```sh
permissions:
     owner     1:    1 SYS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV
        active     1:    1 SYS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV
           customp1     1:    1 SYS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV
           customp2     1:    1 SYS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV

permission links:
     customp2:
          scontract1::bye
     sysio.any:

...
```

## Reference

* [clio set action permission](/docs/api-reference/tooling/clio/command-reference/set/set-action-permission.md)
* [Setting Custom Action Permissions](/docs/guides/how-to-set-custom-permission.md)
