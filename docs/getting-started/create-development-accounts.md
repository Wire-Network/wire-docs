---
sidebar_position: 6
id: create-development-accounts
title: Create Development Accounts
---

# Create Development Accounts

## Prerequisites

- You have successfully installed Wire Sysio and Wire CDT on your computer and you have a local chain running. See [Install Dependencies & Start a local node](./install-dependencies.md) article.
- You have also completed [Create Development Wallet](./create-development-wallet.md) guide.
  
## Overview

This article gives a brief summary of the concept of account and provides instructions on how to create a new account.

## Account

An **account** on the blockchain holds a set of authorizations and serves to identify a sender or recipient. Its flexible authorization framework allows ownership by individuals or groups ,depending on the configured permissions. An account is required to send or receive a valid transaction on the blockchain.

In this practical tutorial series, we utilize two user accounts, `bob` and `alice`, along with the default `sysio` account for configuration purposes. Additional accounts are also created for various contracts in the future articles.

## Creating an account

### Prerequisites

- **public key** from the key pair you've created in [Create Development Wallet](create-development-wallet.md#import-keys-into-your-wallet) tutorial.
- Ensure your wallet is [unlocked](create-development-wallet#unlock-a-wallet)

### Steps

#### Step 1: Use `clio` to create test accounts

```bash
clio create account sysio bob $PUBLIC_KEY
clio create account sysio alice $PUBLIC_KEY
```

Here is the output of the first command, confirming that the transaction has been broadcast:

![creating-account](/img/clio-create-account.png)

If you encounter errors ensure you are correctly loading environment variables and that your wallet is unlocked.

- inspect value of `$PUBLIC_KEY` by `echo $PUBLIC_KEY`

#### Step 2

You can retrieve the account by executing:

```bash
clio get account alice
```

![get-account](/img/clio-get-account.png)

## Quick Account Facts

For a clear understanding of how Wire accounts and their associated public keys function, please refer to the table below:

| Label                            | Details                                                                                                    |
|----------------------------------|------------------------------------------------------------------------------------------------------------|
| **Account Identification**       | Each account is uniquely identified by its account name, not by its public key.                            |
|                                  | Changing the public key does not alter the ownership of the `sysio` account.                                 |
| **Owner and Active Public Keys** | The account (e.g., `alice`) has both an owner and an active public key.                                    |
|                                  | `sysio`’s authorization structure uses separate keys for owner and active permissions for enhanced security. |
| **Security Practices**           | Store the owner key in a cold wallet to minimize exposure.                                                 |
|                                  | If the active key is compromised, the owner key can be used to regain control of the account.              |
| **Authorization Hierarchy**      | With owner permission, you can change the private key of the active permission.                            |
|                                  | The active permission cannot change the owner key.                                                         |

## Troubleshooting

### `[clio: Failed to connect to nodeop at ](http://127.0.0.1:8888/); is nodeop running?`

Doublecheck if `nodeop` is running; and use `/opt/wire-network/blockproducer/stop.sh` and `/opt/wire-network/blockproducer/start.sh` to restart the node.

```bash
pidof nodeop
```

## Reference

- [clio create account](/docs/api-reference/tooling/clio/command-reference/create/account.md)
- [clio get account](/docs/api-reference/tooling/clio/command-reference/get/account.md)
