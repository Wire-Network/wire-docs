## Overview

This how-to guide provides instructions on how to vote for block producers.

## Before you begin

* Install the latest version of `clio`.

* Ensure the [reference system contracts](http://example.com) are deployed and used to manage system resources.

* Understand the following:
  * What a [block producer](http://example.com) is.
  * How [voting](http://example.com) works.

* Unlock your wallet.

## Command Reference

See the following reference guides for command line usage and related options for the `clio` command:

* The [clio system voteproducer prods](../command-reference/system/system-voteproducer-prods.md) reference.

## Procedure

The following steps show:

1. How to vote for blockproducer1 and blockproducer2 from an account called `sysiotestts2`:

```sh
clio system voteproducer prods sysiotestts2 blockproducer1 blockproducer2
```

Where:

* `sysiotestts2` = the account that votes.
* `blockproducer1` and `blockproducer2` = the accounts receiving the votes. The number of accounts receiving the votes can vary from one to multiple. Maximum default number of block producers one account can vote for is 30.

Example output:

```console
executed transaction: 2d8b58f7387aef52a1746d7a22d304bbbe0304481d7751fc4a50b619df62676d  128 bytes  374 us
#         sysio <= sysio::voteproducer          {"voter":"sysiotestts2","proxy":"","producers":["blockproducer1","blockproducer2"]}
```

## Summary

In conclusion, the above instructions show how to vote for block producers.
