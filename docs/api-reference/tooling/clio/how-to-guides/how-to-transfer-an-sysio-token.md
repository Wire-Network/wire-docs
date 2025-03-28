# Transfer a Token

## Prerequisites

* Install the currently supported version of `clio`.

* `sysio.token` contract is deployed on the network you are connected to.

* Understand the following:
  * What a [transaction](/docs/introduction/glossary.md#transaction) is.
  * Token transfers are irreversible.

## Command Reference

See the following reference guides for command line usage and related options for the `clio` command:

* The [clio transfer](../command-reference/transfer.md) reference.

## Example

The following steps show how to transfer `0.0001 SYS` tokens to an account called `bob` from an account called `alice`:

```sh
clio transfer alice bob "0.0001 SYS" "Hodl!" -p alice@active
```

Where:

* `alice` = the account that transfers the tokens.
* `bob` = the account that receives the tokens.
* `0.0001 SYS` = the amount of `SYS` tokens sent.
* `Hodl!` = the message, or memo, that is accompanying the transaction.

Example output:

```console
executed transaction: 800835f28659d405748f4ac0ec9e327335eae579a0d8e8ef6330e78c9ee1b67c  128 bytes  1073 us
#   sysio.token <= sysio.token::transfer        {"from":"alice","to":"bob","quantity":"25.0000 SYS","memo":"m"}
#         alice <= sysio.token::transfer        {"from":"alice","to":"bob","quantity":"25.0000 SYS","memo":"m"}
#           bob <= sysio.token::transfer        {"from":"alice","to":"bob","quantity":"25.0000 SYS","memo":"m"}
```
