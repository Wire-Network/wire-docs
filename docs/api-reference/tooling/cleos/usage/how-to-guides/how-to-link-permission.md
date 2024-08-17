## Overview
This guide provides instructions to link a permission to a smart contract action.   

The example uses `cleos` to link a custom permission _customp_ in the account _alice_ to a _hi_ action deployed to the _scontract_ account so that the _alice_ account's `active` permission and _customp_ permission are authorized to call the _hi_ _action.  

## Before you Begin
Make sure you meet the following requirements: 

* Install the currently supported version of `cleos.`
* 
:::note
| The `cleos` tool and `keosd` are bundled with the Wire software. [Installing Wire core](/docs/getting-started/install-dependencies.md) will install the `cleos` and `keosd` command line tools. 

:::
* You have an EOSIO account and access to the account's `active` private key.
* You have created a custom permission. See [cleos set account permission](../../command-reference/set/set-account.md).

## Command Reference
See the following reference guides for command line usage and related options:

* [cleos set action permission](../../command-reference/set/set-action.md) command
## link Procedure

The following step shows you how to link a permission:

1. Run the following command to link _alices_ account permission _customp_ with the _hi_ action deployed to the _scontract_ account:

```shell
cleos set action permission alice scontract hi customp -p alice@active
```

**Where**
* `alice` = The name of the account containing the permission to link.
* `scontract`= The name of the account which owns the smart contract.
* `hi` = The name of the action to link to a permission. 
* `customp` = The permission used to authorize the transaction.
* `-p alice@active` = The permission used to authorize linking the _customp_ permission.

**Example Output**
```shell
executed transaction: 4eb4cf3aea232d46e0e949bc273c3f0575be5bdba7b61851ab51d927cf74a838  128 bytes  141 us
#         eosio <= eosio::linkauth              {"account":"alice","code":"scontract","type":"hi","requirement":"customp"}
```
## Summary
In conclusion, by following these instructions you are able to link a permission to a smart contract action.

