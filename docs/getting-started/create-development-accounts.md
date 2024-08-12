---
sidebar_position: 6
id: create-development-accounts
title: Create Development Accounts
---

# Create Development Accounts

This article gives brief summary of the concept of account and provides instructions on how to create a new account.

## Account

An **account** on the blockchain holds a set of authorizations and serves to identify a sender or recipient. Its flexible authorization framework allows ownership by individuals or groups ,depending on the configured permissions. An account is required to send or receive a valid transaction on the blockchain.

In this practical tutorial series, we utilize two user accounts, `bob` and `alice`, along with the default eosio account for configuration purposes. Additional accounts are also created for various contracts in the future articles.

<!-- # Create accounts -->

## Creating an account

### Prerequisites

- **public key** from the key pair you've created in [Create Development Wallet](create-development-wallet/#import-keys-into-your-wallet) tutorial.
- Ensure your wallet is [unlocked](create-development-wallet#unlock-a-wallet)

### Steps

#### Step 1: Use `cleos` to create test accounts

```bash
cleos create account eosio bob $PUBLIC_KEY
cleos create account eosio alice $PUBLIC_KEY
```

Here is the output of the first command, confirming that the transaction has been broadcast:

![creating-account](/img/creating-account.png)

If you encounter errors ensure you are correctly loading environment variables and that your wallet is unlocked.

- inspect value of `$PUBLIC_KEY` by `echo $PUBLIC_KEY`

#### Step 2

You can retrieve the account by executing:

```bash
cleos get account alice
```

![get-account](/img/get-account.png)

## Quick Account Facts

For a clear understanding of how EOSIO accounts and their associated public keys function, please refer to the table below:

| Label | Details |
| --- | --- |
| **Account Identification** | Each account is uniquely identified by its account name, not by its public key. |
|  | Changing the public key does not alter the ownership of the EOSIO account. |
| **Owner and Active Public Keys** | The account (e.g., `alice`) has both an owner and an active public key. |
|  | EOSIO’s authorization structure uses separate keys for owner and active permissions for enhanced security. |
| **Security Practices** | Store the owner key in a cold wallet to minimize exposure. |
|  | Use the active key for daily operations. |
|  | If the active key is compromised, the owner key can be used to regain control of the account. |
| **Authorization Hierarchy** | With owner permission, you can change the private key of the active permission. |
|  | The active permission cannot change the owner key. |

## Troubleshooting

### `[cleos: Failed to connect to nodeos at ](http://127.0.0.1:8888/); is nodeos running?`

Doublecheck if `nodeos` is running; and [restart](./launch-local-node.md#starting-nodeos) the process if needed.

```bash
pidof nodeos
```
