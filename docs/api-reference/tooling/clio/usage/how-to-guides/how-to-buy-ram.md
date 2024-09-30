
## Overview

This guide provides instructions on how to buy RAM for an Wire blockchain account using the clio CLI tool. RAM is a system resource used to store blockchain state such as smart contract data and account information.

The example uses `clio` to buy RAM for the alice account. The alice account pays for the RAM and the alice@active permission authorizes the transaction.  

## Before you Begin

Make sure you meet the following requirements:

* Install the currently supported version of `clio.`

:::info
| The `clio` tool and `kiod` are bundled with the Wire software. [Installing Wire core](/docs/getting-started/install-dependencies.md) will install the `clio` and `kiod` command line tools.
:::

* You have access to a Wire blockchain and the `sysio.system` reference contract from [`sysio.contracts`](https://example.com) repository is deployed and used to manage system resources.
* You have a `sysio` account and access to the account's private key.
* You have sufficient [tokens allocated](./how-to-transfer-an-sysio-token.md) to your account.

## Reference

See the following reference guides for command line usage and related options:

* [clio system buyram](../../usage/how-to-guides/how-to-buy-ram.md) command

## Buy Ram Procedure

The following step shows you how to buy RAM

1. Run the following command to buy RAM worth 0.1 of `SYS` tokens for the alice account:

```shell
clio system buyram alice alice "0.1 SYS" -p alice@active
```

**Where**

* `alice` = payer, the account paying for RAM.
* `alice` = receiver, the account receiving bought RAM.
* `0.1 SYS` = The amount of tokens to pay for RAM.
* `-p alice@active` = The permission used to authorize the payment, in this case the active permission.  

**Example Output**

```sh
executed transaction: aa243c30571a5ecc8458cb971fa366e763682d89b636fe9dbe7d28327d1cc4e9  128 bytes  283 us
#         sysio <= sysio::buyram                {"payer":"alice","receiver":"alice","quant":"0.1000 SYS"}
#   sysio.token <= sysio.token::transfer        {"from":"alice","to":"sysio.ram","quantity":"0.0995 SYS","memo":"buy ram"}
#   sysio.token <= sysio.token::transfer        {"from":"alice","to":"sysio.ramfee","quantity":"0.0005 SYS","memo":"ram fee"}
#         alice <= sysio.token::transfer        {"from":"alice","to":"sysio.ram","quantity":"0.0995 SYS","memo":"buy ram"}
#     sysio.ram <= sysio.token::transfer        {"from":"alice","to":"sysio.ram","quantity":"0.0995 SYS","memo":"buy ram"}
#         alice <= sysio.token::transfer        {"from":"alice","to":"sysio.ramfee","quantity":"0.0005 SYS","memo":"ram fee"}
#  sysio.ramfee <= sysio.token::transfer        {"from":"alice","to":"sysio.ramfee","quantity":"0.0005 SYS","memo":"ram fee"}
warning: transaction executed locally, but may not be confirmed by the network yet         ]
```

## Summary

In conclusion, by following these instructions you are able to purchase RAM, with a specified amount of tokens, for the specified accounts.
