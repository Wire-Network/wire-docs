---
sidebar_position: 2
id: smart-contracts-clio
title: Using clio
tags:
  - clio
  - smart contracts
  - transactions
  - tutorial
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
The install process has already set up the wallet for the *root* user. To interact with clio, ensure **you are on the root user**. Run `sudo su -` to switch to the root user before proceeding with the tutorial.
:::

Before proceeding, make sure you have the public key available from the key pair that was created when setting up your wallet([Manage Local Wallet with clio](/docs/getting-started/manage-local-wallet-with-clio.md#create-and-import-keys-into-your-wallet))

You could also use the *development key* pair listed [here](/docs/getting-started/manage-local-wallet-with-clio.md#import-the-development-key).

```sh
clio create account sysio jack $PUBLIC_KEY -p sysio@active 
clio create account sysio nick $PUBLIC_KEY -p sysio@active
```

## Steps

### Step 1: Insert a record

First, give `jack` a policy

```bash
clio push action sysio.roa addpolicy '{"owner": "jack", "issuer": "nodeownera", "net_weight": "0.0100 SYS", "cpu_weight": "0.0100 SYS", "ram_weight": "0.0010 SYS", "time_block": 1, "network_gen": 0 }' -p nodeownera@active
```

Now, let’s have `jack` insert or update his own record.

```bash
clio push action company upsertemp '["jack", "Jack Sparrow", "jack@example.com", "active"]' -p jack@active -P jack
```

```sh
executed transaction: 6761530f000a2a98bdb002f41c1905e5e3e234031ee54077bcfb47c57b16f2c9  192 bytes  209 us
#       company <= company::upsertemp           {"user":"jack","name":"Jack Sparrow","email":"jack@example.com","status":"active"}
>> Employee added: jack
```

You could use block explorer to inspect the table and the transactions.

![be-table-check](/img/be-table-check.png)

### Step 2: Perfom an update

Next, we update Jack’s record,

```bash
clio push action company upsertemp '["jack", "Jack Nicholson", "jack@example.com", "active"]' -p jack@active -P jack
```

```sh
executed transaction: 6191f41a4363ef21a15a705d8d3ab0e4dfb5fb0b7640cccfb930b9a3caf0867b  194 bytes  196 us
#       company <= company::upsertemp           {"user":"jack","name":"Jack Nicholson","email":"jack@example.com","status":"active"}
>> Employee updated: jack
warning: transaction executed locally, but may not be confirmed by the network yet         ] 
```

Post-Action Check:

- Inspect Logs to ensure the update was executed.
- Inspect Table to see `jack`'s` updated record.

### Step 3: Retrieve all users

```bash
clio push action company getallemp '{}' -p jack@active
```

Ouput:

![retrieve-records](/img/get-all.png)

### Step 4: Attempt unauthorized transaction

```bash
clio push action company upsertemp '["nick", "Nick Fury", "nick@example.com", "active"]' -p jack@active -P jack
```

This should fail since Jack should not be able to add records for other users because the contract enforces proper authorization via `require_auth()`.

```sh
error 2026-03-17T15:37:05.561136 clio                  main.cpp:735   print_result         ] 3090004 missing_auth_exception: Missing required authority
missing authority of nick
    missing authority of nick
    nodeop  apply_context.cpp:291 require_authorization
company <= company::upsertemp pending console output: 
    company <= company::upsertemp pending console output: 
    nodeop  apply_context.cpp:118 exec_one
```

To insert Nick's record execute , first give `nick` a policy:

```bash
clio push action sysio.roa addpolicy '{"owner": nick, "issuer": nodeownera, "net_weight": "0.0100 SYS", "cpu_weight": "0.0100 SYS", "ram_weight": "0.1000 SYS", "time_block": 1, "network_gen": 0 }' -p nodeownera@active
```

Then execute the following command to insert Nick's record:

```bash
clio push action company upsertemp '["nick", "Nick Fury", "nick@example.com", "active"]' -p nick@active -P nick
```

```sh
executed transaction: 6191f41a4363ef21a15a705d8d3ab0e4dfb5fb0b7640cccfb930b9a3caf0867b  194 bytes  196 us
#       company <= company::upsertemp           {"user":"nick","name":"Nick Fury","email":"nick@example.com","status":"active"}
>> Employee added: nick
warning: transaction executed locally, but may not be confirmed by the network yet         ] 
```
