---
id: set-account
title: set account
---

## Command

```sh
clio set account permission [OPTIONS] account permission [authority] [parent]
```

**Where**

* account - The name of the account you want to set.
* permission - The name of the permission you want to set.
* authority - May be a public key, JSON string or filename defining the authority.
* parent - The parent of this permission, defaults to `active`.

* [OPTIONS]  See Options in [Command Usage](#command-usage) section below.

**Note**: The arguments and options enclosed in square brackets are optional.

## Description

Set or update blockchain account state. Can be used to set parameters dealing with account permissions.

## Command Usage

The following information shows the different positionals and options you can use with the `clio set account` command:

### Positional Arguments

* `account` _TEXT_ REQUIRED The account to set/delete a permission authority for

* `permission` _TEXT_ REQUIRED The permission name to set/delete an authority for
* `authority` _TEXT_ [delete] NULL, [create/update] public key, JSON string or filename defining the authority, [code] contract name
* `parent` _TEXT_ [create] The permission name of this parents permission, defaults to 'active'

### Options

* `-h,--help` Print this help message and exit

* `--add-code` [code] Add 'sysio.code' permission to specified permission authority
* `--remove-code` [code] Remove 'sysio.code' permission from specified permission authority
* `-x`,`--expiration` Set the time in seconds before a transaction expires, defaults to 30s
* `-f`,`--force-unique` Force the transaction to be unique. this will consume extra bandwidth and remove any protections against accidently issuing the same transaction multiple times
* `-s`,`--skip-sign` Specify if unlocked wallet keys should be used to sign transaction
* `-j`,`--json` Print result as json
* `--json-file` _TEXT_ Save result in json format into a file
* `-d`,`--dont-broadcast` Don't broadcast transaction to the network (just print to stdout)
* `--return-packed` Used in conjunction with --dont-broadcast to get the packed transaction
* `-r`,`--ref-block` _TEXT_ Set the reference block num or block id used for TAPOS (Transaction as Proof-of-Stake)
* `--use-old-rpc` Use old RPC push_transaction, rather than new RPC send_transaction
* `-p`,`--permission` _TEXT_ An account and permission level to authorize, as in 'account@permission' (defaults to 'account@active')
* `--max-cpu-usage-ms` _UINT_ Set an upper limit on the milliseconds of CPU usage budget, for the execution of the transaction (defaults to 0 which means no limit)
* `--max-net-usage` _UINT_ Set an upper limit on the net usage budget, in bytes, for the transaction (defaults to 0 which means no limit)
* `--delay-sec` _UINT_ Set the delay_sec seconds, defaults to 0s

## Requirements

* Install the currently supported version of `clio`.

:::note
| The `clio` tool is bundled with the Wire software. [Installing Wire core](/docs/getting-started/install-dependencies.md) will install the `clio` and `kiod` command line tools.
:::

* You have a `sysio` account and access to the account's private key.

## Examples

1. Update the `active` permission key:

```shell
clio set account permission alice active SYS5zG7PsdtzQ9achTdRtXwHieL7yyigBFiJDRAQonqBsfKyL3XhC -p alice@owner
```

**Where**

* `alice` = The name of the account to update the key.
* `active`= The name of the permission to update the key.
* `SYS5zG7PsdtzQ9achTdRtXwHieL7yyigBFiJDRAQonqBsfKyL3XhC` = The new public key for the authority.
* `-p alice@owner` = The permission used to authorize the transaction.

**Example Output**

```shell
executed transaction: ab5752ecb017f166d56e7f4203ea02631e58f06f2e0b67103b71874f608793e3  160 bytes  231 us
#         sysio <= sysio::updateauth            {"account":"alice","permission":"active","parent":"owner","auth":{"threshold":1,"keys":[{"key":"E...
```

1. Add the `sysio.code` permission to the contract account `active` permission to enable calling inline actions by the contract account's `active` permission:

```shell
clio set account permission alice active --add-code -p alice@active
```

**Where**

* `alice` = The name of the account to add `sysio.code`.
* `active`= The name of the permission to add `sysio.code`.
* `--add-code` = Tells the command to add `sysio.code`.
* `-p alice@active` = The permission used to authorize the transaction.

**Example Output**

```shell
executed transaction: ab5752ecb017f166d56e7f4203ea02631e58f06f2e0b67103b71874f608793e3  160 bytes  231 us
#         sysio <= sysio::updateauth            {"account":"alice","permission":"active","parent":"owner","auth":{"threshold":1,"keys":[{"key":"E...
```

1. Add a custom permission to the **alice** account:

```shell
clio set account permission alice customp SYS58wmANoBtT7RdPgMRCGDb37tcCQswfwVpj6NzC55D247tTMU9D active -p alice@active
```

**Where**

* `alice` = The name of the account you are adding a custom permission to.
* `customp`= The name of the custom permission.
* `SYS58wmANoBtT7RdPgMRCGDb37tcCQswfwVpj6NzC55D247tTMU9D` = The public key of the custom permission.
* `active` = The parent of the custom permission.
* `-p alice@active` = The permission used to authorize the transaction.

**Example Output**

```shell
executed transaction: 69c5297571ce3503edb9a1fd8a2f2a5cc1805ad19197a8751ca09093487c3cf8  160 bytes  134 us
#         sysio <= sysio::updateauth            {"account":"alice","permission":"customp","parent":"active","auth":{"threshold":1,"keys":[{"key":"SYS...```
```

## Resources

* [Accounts and Permissions](/docs/smart-contract-development/accounts-permissions.md) protocol document.
<!-- * [Creating and Linking Custom Permissions](https://developers.eos.io/welcome/v2.1/smart-contract-guides/linking-custom-permission) tutorial. -->
