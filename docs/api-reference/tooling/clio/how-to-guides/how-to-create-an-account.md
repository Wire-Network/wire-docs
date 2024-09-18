## Goal
Create a new Wire blockchain account 

## Before you begin

* Install the currently supported version of `clio`

:::info
| The `clio` tool is bundled with the Wire software. [Installing Wire Core](/docs/getting-started/install-dependencies.md) will also install the clio tool. 
:::

* Acquire functional understanding of the following:
  * [SYSIO Accounts and Permissions](http://example.com)
  * Asymmetric cryptography (public and private keypair) 

* Created an Owner and an Active key pair
* [Import a private key](../how-to-guides/how-to-import-a-key.md) to the wallet which can authorize on behalf of a creator account

## Steps

**Command**

```sh
clio create account [creator account name] [new account name][OwnerKey] [ActiveKey]
```
Where:

[creator account name] = name of the existing account that authorizes the creation of a new account

[new account name] = The name of the new account account adhering to SYSIO account naming conventions

[OwnerKey] = The owner permissions linked to the ownership of the account

[ActiveKey] = The active permissions linked with the creator account

:::tip[Reccomend]
| `ActiveKey` is optional but recommended.
:::

:::info[Note]
| To create a new account in the Wire blockchain, an existing account, also referred to as a creator account, is required to authorize the creation of a new account. For a newly created Wire blockchain, the default system account used to create a new account is `eosio`.
:::

**Example Output**
```sh
clio create account sysio bob EOS87TQktA5RVse2EguhztfQVEh6XXxBmgkU8b4Y5YnGvtYAoLGNN
executed transaction: 4d65a274de9f809f9926b74c3c54aadc0947020bcfb6dd96043d1bcd9c46604c  200 bytes  166 us
#         sysio <= eosio::newaccount            {"creator":"sysio","name":"bob","owner":{"threshold":1,"keys":[{"key":"EOS87TQktA5RVse2EguhztfQVEh6X...
warning: transaction executed locally, but may not be confirmed by the network yet         ]
```
