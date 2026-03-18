# Create an Account

In a Wire Blockchain, creating a new account is a privilege reserved for existing account holders, who have sufficient system resources to submit a transaction and who have control over the `sysio` account, which is typically the case on a local blockchain.

## Prerequisites

* Install the currently supported version of `clio`

:::info
| The `clio` tool is bundled with the Wire software. [Installing Wire Core](/docs/getting-started/install-dependencies.md) will also install the clio tool.
:::

* [Accounts and Permissions](/docs/smart-contract-development/accounts-permissions.md).
* Understand [public](/docs/introduction/glossary.md#public-key) and [private key](/docs/introduction/glossary.md#private-key).
* You have access to a local Wire node.
* You have authority over the `sysio` account and access to the account's private key.
* Created an Owner and an Active key pair. For more information, see [Create a Key Pair](/docs/guides/how-to-create-key-pairs.md) article.
* [Import a private key](./how-to-import-a-key.md) to the wallet which can authorize on behalf of a creator account.

:::warning[REMINDER]
The install process has already set up the wallet for the *root* user. To interact with clio, ensure **you are on the root user**. Run `sudo su -` to switch to the root user.
:::

## Steps

### Command

```sh
clio create account [creator account name] [new account name] [OwnerKey] [ActiveKey]
```

#### Parameters

| Parameter | Description |
|-----------|-------------|
| `creator account name` | Name of the existing account that authorizes the creation of a new account |
| `new account name` | The name of the new account adhering to the account naming conventions |
| `OwnerKey` | The public key for the owner permission linked to the ownership of the account |
| `ActiveKey` | The public key for the active permission (optional but recommended) |

:::tip[Recommend]
| `ActiveKey` is optional but recommended. If omitted, the `OwnerKey` will be used for both permissions.
:::

:::info[Note]
| To create a new account in the Wire blockchain, an existing account, also referred to as a creator account, is required to authorize the creation of a new account. For a newly created Wire blockchain, the default system account used to create a new account is `sysio`.
:::

### Example

The examples below use the [development key](/docs/getting-started/manage-local-wallet-with-clio.md#development-key) which is already imported into your wallet after the standard installation. For production use, you should [create new key pairs](/docs/guides/how-to-create-key-pairs.md).

**Using new key format (recommended):**

```sh
clio create account sysio bob PUB_K1_6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5BoDq63 -p sysio@active
```

**Using legacy key format:**

```sh
clio create account sysio bob SYS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV -p sysio@active
```

**Example Output:**

```sh
executed transaction: 4d65a274de9f809f9926b74c3c54aadc0947020bcfb6dd96043d1bcd9c46604c  200 bytes  166 us
#         sysio <= sysio::newaccount            {"creator":"sysio","name":"bob","owner":{"threshold":1,"keys":[{"key":"PUB_K1_6MRyAjQq8ud7hVNYcfnVPJ...
warning: transaction executed locally, but may not be confirmed by the network yet         ]
```

### Verify the account

```sh
clio get account bob
```

**Example Output:**

```sh
created: 2025-01-17T08:11:58.000
permissions:
     owner     1:    1 SYS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV
        active     1:    1 SYS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV

permission links:
     sysio.any:

memory:
     quota:         0 bytes  used:         0 bytes
...
```

## Reference

* [clio create account](/docs/api-reference/tooling/clio/command-reference/create/account.md)
* [Key Formats](/docs/api-reference/tooling/kiod/key-formats.md)
