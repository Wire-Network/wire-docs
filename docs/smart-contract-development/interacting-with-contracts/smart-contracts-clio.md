---
sidebar_position: 2
id: smart-contracts-clio
title: Using clio
description: Using clio to push transactions to a contract
---

# Smart Contract Interactions using `clio`

## Overview

In the article you’ll learn how to execute actions on a contract with the `clio` tool. It guides you through inserting and updating records, checking updates, and testing out behavior on unauthorized change attempt.

## Prerequisites

- [Installation and Development Environment Setup](../../getting-started/install-dependencies.md)
- [Company contract tutorial](../company-contract.md)
- Two new accounts `jack` and `nick`

:::warning[REMINDER]
The install process sets up the wallet for the *root* user. To interact with clio, ensure **you are on the root user**. Run `sudo su -` to switch to the root user and before proceeding with the tutorial.
:::

```sh
clio create account sysio jack $PUBLIC_KEY -p sysio@active 
clio create account sysio nick $PUBLIC_KEY -p sysio@active
```

## Steps

### Step 1: Insert a record

First, let’s have Jack insert or update his own record.

```bash
clio push action company upsertemp '["jack", "Jack Sparrow", "jack@example.com", "active"]' -p jack@active
```

Output:

![create-record](/img/clio-create-record.png)

You could use block explorer to inspect the table and the transactions.

![be-table-check](/img/be-table-check.png)

### Step 2: Perfom an update

Next, we update Jack’s record,

```bash
clio push action company upsertemp '["jack", "Jack Nicholson", "jack@example.com", "active"]' -p jack@active
```

Output:

![update-record](/img/clio-update-record.png)

Post-Action Check:

 • Inspect Logs to ensure the update was executed.
 • Inspect Table to see Jack’s updated record.

### Step 3: Retrieve all users

```bash
clio push action company getallemp '{}' -p jack@active
```

Ouput:

![retrieve-records](/img/get-all.png)

### Step 4: Attempt unauthorized transaction

```bash
clio push action company upsertemp '["nick", "Nick Fury", "nick@example.com", "active"]' -p jack@active
```

This should fail since Jack should not be able to add records for other users because the contract enforces proper authorization via `require_auth()`.

![unauthorized](/img/unauthorized.png)

To insert Nick's record execute the following command:

```bash
clio push action company upsertemp '["nick", "Nick Fury", "nick@example.com", "active"]' -p nick@active
```
