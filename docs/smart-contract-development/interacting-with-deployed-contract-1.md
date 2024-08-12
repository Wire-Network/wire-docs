---
sidebar_position: 4
id: interacting-with-deployed-contract-1
title: Contract Interactions with `cleos`
---


# Navigating Smart Contract Interactions with `cleos`

## Overview

In the article you’ll learn how to manipulate blockchain data with the `cleos` tool on Wire. It guides you through inserting and updating records, checking updates, and ensuring security protocols prevent unauthorized changes.

## Prerequisites

- [Installation and Development Environment Setup](../getting-started/getting-started-intro.md)
- [Company contract tutorial](./company-contract.md)

### Step 1: Insert a Record for Jack

First, let’s have Jack insert or update his own record.

```bash
cleos push action jack upsert '["jack", "Jack Sparrow", "jack@example.com", "active"]' -p jack@active
```

You could use block explorer to inspect the table.

### Step 2: Update on Jack’s Name

Next, we update Jack’s record, possibly changing his name.

```bash
cleos push action jack upsert '["jack", "Jack Nicholson", "jack@example.com", "active"]' -p jack@active
```

Post-Action Check:

 • Inspect Logs to ensure the update was executed.
 • Inspect Table to see Jack’s updated record.

### Step 3: Retrieve All Users

```bash
cleos push action jack get_all '{}' -p jack@active
```

### Step 4

```bash
cleos push action jack upsert '["nick", "Nick Fury", "nick@example.com", "active"]' -p jack@active
```

This should fail since Jack should not be able to add records for other users if the contract enforces proper authorization.

<!-- ## Step 5 -->


