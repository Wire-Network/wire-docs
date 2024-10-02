# How to buy RAM

## Goal

Buy ram from an account using [`clio system buyram`](../../tooling/clio/command-reference/system/system-buyram.md).

## Prerequisites

* You have an account and sufficient token allocated to your account.

* Ensure that system contracts from [wire-system-contracts](https://github.com/Wire-Network/wire-system-contracts) are built and deployed.

* You have `clio` installed on your machine and you wallet is unlocked.

## Steps

Buys RAM in value of 0.1 SYS tokens for account `alice`:

```sh
clio system buyram alice alice "0.1 SYS" -p alice@active
```
