---
id: how-to-create-a-wallet
---


# Create a Wallet

## Prerequisites

Make sure you meet the following requirements:

* Familiarize with the [`clio wallet create`](../command-reference/wallet/create.md) command and its parameters.
* Familiarize with the other [`clio wallet`](../command-reference/wallet/index.md) commands.
* Install the currently supported version of `clio`.

:::info
| The `clio` tool and `kiod` are bundled with the Wire software. [Installing Wire core](/docs/getting-started/install-dependencies.md) will install the `clio` and `kiod` command line tools.
:::

* Understand what an [account](/docs/introduction/glossary.md#account) is and its role in the blockchain.
* Understand [Accounts and Permissions](/docs/smart-contract-development/accounts-permissions.md) in the protocol documents.
* Understand what a [public](/docs/introduction/glossary.md#public-key) and [private](/docs/introduction/glossary.md#private-key) key pair is.

## Command

To create `default` or a named wallet and save the wallet password to a file, you can run:

```sh
clio wallet create [-n named_wallet] -f <file_to_save_pwd>
```

### Create a `default` wallet

Create a `default` wallet and save the password to the file `default_wallet.pwd`:

#### Example Output

```sh
clio wallet create -f default_wallet.pwd

Creating wallet: default
Save password to use in the future to unlock this wallet.
Without password imported keys will not be retrievable.
saving password to default_wallet.pwd
```

### Create a named wallet

* Create a named wallet `my_wallet` and save the password to the file `my_wallet.pwd`:

#### Example Output

```sh
clio wallet create -n my_wallet -f my_wallet.pwd

Creating wallet: my_wallet
Save password to use in the future to unlock this wallet.
Without password imported keys will not be retrievable.
saving password to my_wallet.pwd
```
