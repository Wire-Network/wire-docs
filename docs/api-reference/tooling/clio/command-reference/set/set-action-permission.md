---
id: set-action
title: set action permission
---

## Command

```sh
clio set action permission <account> <code> <action> <requirement> [OPTIONS]
```

## Description

Set parameters dealing with account permissions

## Synopsis

```sh
clio set action permission
  <account>                          # REQUIRED: The account to set/delete a permission authority for
  <code>                             # REQUIRED: The account that owns the code for the action
  <action>                           # REQUIRED: The name of the action [use ALL for all actions]
  <requirement>                      # REQUIRED: The permission name required for executing the given action [use NULL to delete]
  [-h | --help]                      # Print this help message and exit
  [--help-all]                       # Show all help
  [[-x | --expiration] <seconds>]    # set the time in seconds before a transaction expires, defaults to 30s
  [-f | --force-unique]              # force the transaction to be unique. this will consume extra bandwidth and remove any protections against accidently issuing the same transaction multiple times
  [-s | --skip-sign]                 # Specify if unlocked wallet keys should be used to sign transaction
  [-j | --json]                      # print result as JSON
  [--json-file <filename>]           # save result in json format into a file
  [-d | --dont-broadcast]            # don't broadcast transaction to the network (just print to stdout)
  [-u | --unpack-action-data]        # unpack all action data within transaction, needs interaction with nodeop unless --abi-file. used in conjunction with --dont-broadcast
  [--return-packed]                  # used in conjunction with --dont-broadcast to get the packed transaction
  [[-r | --ref-block] <block>]       # set the reference block num or block id used for TAPOS (Transaction as Proof-of-Stake)
  [--use-old-rpc]                    # use old RPC push_transaction, rather than new RPC send_transaction
  [--use-old-send-rpc]               # use old RPC send_transaction, rather than new RPC /v1/chain/send_transaction2
  [--compression <type>]             # compression for transaction 'none' or 'zlib'
  [[-p | --permission] <account@perm>] # an account and permission level to authorize, as in 'account@permission' (defaults to 'account@active')
  [--max-cpu-usage-ms <ms>]          # set an upper limit on the milliseconds of cpu usage budget, for the execution of the transaction (defaults to 0 which means no limit)
  [--max-net-usage <bytes>]          # set an upper limit on the net usage budget, in bytes, for the transaction (defaults to 0 which means no limit)
  [--delay-sec <seconds>]            # set the delay_sec seconds, defaults to 0s
  [[-t | --return-failure-trace] <boolean>] # return partial traces on failed transactions
  [--retry-irreversible <boolean>]   # request node to retry transaction until it is irreversible or expires, blocking call
  [--retry-num-blocks <blocks>]      # request node to retry transaction until in a block of given height, blocking call
  [--sign-with <keys>]               # the public key or json array of public keys to sign with
```

## Requirements

* Install the currently supported version of `clio`.

:::note
| The `clio` tool is bundled with the Wire software. [Installing Wire Sysio](/docs/getting-started/install-dependencies.md) will install the `clio` and `kiod` command line tools.
:::

* You have access to a local Wire node.
* You have authority over the `sysio` account and access to the account's private key.

## Examples

The following examples demonstrate how to use the `clio set action permission` command:

### Set permission on a hi action

Set permission on a _hi_ action deployed to the _scontract1_ account so that the _bob_ account's `active` permission and _customp1_ permission are authorized:

```sh
clio set action permission bob scontract1 hi customp1 -p bob@active
```

**Where**

* `bob` - The name of the account to link the custom permission authority.
* `scontract1` - The name of the account which owns the smart contract.
* `hi` - The name of the action to link to a permission.
* `customp1` - The permission used to authorize the transaction.
* `-p bob@active` - The permission used to authorize setting the permissions.

**Example Output**

```shell
executed transaction: 4eb4cf3aea232d46e0e949bc273c3f0575be5bdba7b61851ab51d927cf74a838  128 bytes  141 us
#         sysio <= sysio::linkauth              {"account":"bob","code":"scontract1","type":"hi","requirement":"customp1"}
```

### Set permission on a bye action

Set permissions on a _bye_ action deployed to the _scontract1_ account so that the _bob_ account's `active` permission and _customp2_ permission are authorized:

```sh
clio set action permission bob scontract1 bye customp2 -p bob@active
```

**Where**

* `bob` - The name of the account to link the custom permission authority.
* `scontract1` - The name of the account which owns the smart contract.
* `bye` - The name of the action to link to a permission.
* `customp2` - The permission used to authorize the transaction.
* `-p bob@active` - The permission used to authorize setting the permissions.

**Example Output**

```shell
executed transaction: 4eb4cf3aea232d46e0e949bc273c3f0575be5bdba7b61851ab51d927cf74a838  128 bytes  141 us
#         sysio <= sysio::linkauth              {"account":"bob","code":"scontract1","type":"bye","requirement":"customp2"}
```

### Remove permission from an action

To remove the customp1 permission from the _hi_ action:

```sh
clio set action permission bob scontract1 hi NULL -p bob@active
```

**Where**

* `bob` - The name of the account to link the custom permission authority.
* `scontract1` - The name of the account which owns the smart contract.
* `hi` - The name of the action to link to a permission.
* `NULL` - Remove the permission.
* `-p bob@active` - The permission used to authorize the transaction.

**Example Output**

```shell
executed transaction: 50fe754760a1b8bd0e56f57570290a3f5daa509c090deb54c81a721ee7048201  120 bytes  242 us
#         sysio <= sysio::unlinkauth            {"account":"bob","code":"scontract1","type":"hi"}
```

## See Also

* [Accounts and Permissions](/docs/smart-contract-development/accounts-permissions.md) protocol document.

* [Creating and Linking Custom Permissions](/docs/guides/how-to-set-custom-permission.md) tutorial.
