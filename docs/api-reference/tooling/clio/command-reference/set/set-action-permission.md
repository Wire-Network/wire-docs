---
id: set-action
title: set action permission
---

## Command

```sh
clio set action permission account code type requirement [OPTIONS] 
```

## Description

Set parameters dealing with account permissions

## Synopsis

```sh
clio set action permission
  account <TEXT>                    # REQUIRED: The account to set/delete a permission authority
  code <TEXT>                       # REQUIRED: The account that owns the code for the action
  type <TEXT>                       # REQUIRED: The type of the action
  requirement <TEXT>                # REQUIRED: [delete] NULL, [set/update] The permission name required for executing the action
  [-h, --help]                      # Print this help message and exit
  [-x, --expiration <UINT>]          # Set expiration time in seconds before a transaction expires (default: 30s)
  [-f, --force-unique]               # Force the transaction to be unique (consumes extra bandwidth)
  [-s, --skip-sign]                  # Skip signing the transaction with unlocked wallet keys
  [-j, --json]                       # Print the result in JSON format
  [--json-file <TEXT>]               # Save the result in JSON format to a file
  [-d, --dont-broadcast]             # Do not broadcast the transaction (prints to stdout instead)
  [--return-packed]                  # Used with --dont-broadcast to get the packed transaction
  [-r, --ref-block <TEXT>]           # Set the reference block number or block ID for TAPOS
  [--use-old-rpc]                    # Use old RPC push_transaction instead of the new RPC send_transaction
  [--use-old-send-rpc]               # Use old RPC send_transaction instead of new /v1/chain/send_transaction2
  [-p, --permission <TEXT>]          # Authorize with account@permission (default: 'account@active')
  [--max-cpu-usage-ms <UINT>]        # Set the upper limit on CPU usage in milliseconds (default: no limit)
  [--max-net-usage <UINT>]           # Set the upper limit on network usage in bytes (default: no limit)
  [--delay-sec <UINT>]               # Set a delay in seconds before execution (default: 0s)
  [-t, --return-failure-trace]       # Return partial traces on failed transactions
  [--retry-irreversible]             # Request node to retry transaction until it is irreversible or expires (blocking call)
  [--retry-num-blocks <UINT>]        # Request node to retry transaction until included in a block of given height (blocking call)
```

## Requirements

* Install the currently supported version of `clio`.

:::note
| The `clio` tool is bundled with the Wire software. [Installing Wire Sysio](/docs/getting-started/install-dependencies.md) will install the `clio` and `kiod` command line tools.
:::

* You have access to a local Wire node.
* You have authority over the `sysio` account and access to the account's private key.

## Examples

1. Set permission on a _hi_ action deployed to the _scontract1_ account so that the _bob_ account's `active` permission and _customp1_ permission are authorized:

```shell
clio set action permission bob scontract1 hi customp1 -p bob@active
```

**Where**

* `bob` = The name of the account to link the custom permission authority.
* `scontract1`= The name of the account which owns the smart contract.
* `hi` = The name of the action to link to a permission.
* `customp1` = The permission used to authorize the transaction.
* `-p bob@active` = The permission used to authorize setting the permissions.

**Example Output**

```shell
executed transaction: 4eb4cf3aea232d46e0e949bc273c3f0575be5bdba7b61851ab51d927cf74a838  128 bytes  141 us
#         sysio <= sysio::linkauth              {"account":"bob","code":"scontract1","type":"hi","requirement":"customp1"}
```

1. Set permissions on a _bye_ action deployed to the _scontract1_ account so that the _bob_ account's `active` permission and _customp2_ permission are authorized:

```shell
clio set action permission bob scontract1 bye customp2 -p bob@active
```

**Where**

* `bob` = The name of the account to link the custom permission authority.
* `scontract1`= The name of the account which owns the smart contract.
* `bye` = The name of the action to link to a permission.
* `customp2` = The permission used to authorize the transaction.
* `-p bob@active` = The permission used to authorize setting the permissions.

**Example Output**

```shell
executed transaction: 4eb4cf3aea232d46e0e949bc273c3f0575be5bdba7b61851ab51d927cf74a838  128 bytes  141 us
#         sysio <= sysio::linkauth              {"account":"bob","code":"scontract1","type":"bye","requirement":"customp2"}
```

1. To remove the customp1 permission from the _hi_ action:

```shell
clio set action permission bob scontract1 hi NULL -p bob@active
```

**Where**

* `bob` = The name of the account to link the custom permission authority.
* `scontract1`= The name of the account which owns the smart contract.
* `hi` = The name of the action to link to a permission.
* `NULL` = Remove the permission.
* `-p bob@active` = The permission used to authorize the transaction.

**Example Output**

```shell
executed transaction: 50fe754760a1b8bd0e56f57570290a3f5daa509c090deb54c81a721ee7048201  120 bytes  242 us
#         sysio <= sysio::unlinkauth            {"account":"bob","code":"scontract1","type":"hi"}
```

## See Also

* [Accounts and Permissions](/docs/smart-contract-development/accounts-permissions.md) protocol document.

<!-- * [Creating and Linking Custom Permissions](https://developers.eos.io/welcome/v2.1/smart-contract-guides/linking-custom-permission) tutorial. -->
