## Overview

This how-to guide provides instructions on how to stake resources, NET and/or CPU, for your account using the `clio` CLI tool.

## Before you begin

* Install the currently supported version of `clio`.

* Ensure the [wire system contracts](https://github.com/Wire-Network/wire-system-contracts) are deployed and used to manage system resources.

* Understand the following:
  * What an [account](/docs/introduction/glossary.md#account) is.
  * What [NET bandwidth](/docs/introduction/glossary.md#net) is.
  * What [CPU bandwidth](/docs/introduction/glossary.md#cpu) is.
  * The [`delegatebw` clio sub-command](../command-reference/system/system-delegatebw.md).

## Command Reference

See the following reference guides for command line usage and related options for the `clio` command:

* The [`delegatebw` clio sub-command](../command-reference/system/system-delegatebw.md).

## Procedure

The following steps show:

- [Overview](#overview)
- [Before you begin](#before-you-begin)
- [Command Reference](#command-reference)
- [Procedure](#procedure)
  - [1. Stake NET bandwidth](#1-stake-net-bandwidth)
  - [2. Stake CPU bandwidth](#2-stake-cpu-bandwidth)
  - [3. Stake NET and CPU bandwidth](#3-stake-net-and-cpu-bandwidth)
- [Summary](#summary)

### 1. Stake NET bandwidth

Run the following command to stake `0.01 SYS` of NET bandwidth for `alice` account from `bob` account:

```sh
clio system delegatebw alice bob "0.01 SYS" "0 SYS"
```

Where:

* `alice` = the account for which the NET bandwidth is staked.
* `bob` = the account that pays the `0.01 SYS` for the NET bandwidth staked.
* `0.01 SYS` = the amount of `SYS` tokens allocated to stake NET bandwidth.
* `0 SYS` = the amount of `SYS` tokens allocated to stake CPU bandwidth.

Example output:

```console
executed transaction: 5487afafd67bf459a20fcc2dbc5d0c2f0d1f10e33123eaaa07088046fd18e3ae  192 bytes  503 us
#         sysio <= sysio::delegatebw            {"from":"bob","receiver":"alice","stake_net_quantity":"0.01 SYS","stake_cpu_quanti...
#   sysio.token <= sysio.token::transfer        {"from":"bob","to":"sysio.stake","quantity":"0.01 SYS","memo":"stake bandwidth"}
#  alice <= sysio.token::transfer        {"from":"bob","to":"sysio.stake","quantity":"0.01 SYS","memo":"stake bandwidth"}
#   sysio.stake <= sysio.token::transfer        {"from":"bob","to":"sysio.stake","quantity":"0.01 SYS","memo":"stake bandwidth"}
```

### 2. Stake CPU bandwidth

Run the following command to stake `0.01 SYS` of CPU bandwidth for `alice` account from `bob` account:

```sh
clio system delegatebw alice bob "0 SYS" "0.01 SYS"
```

Where:

* `alice` = the account for which the CPU bandwidth is staked.
* `bob` = the account that pays the `0.01 SYS` for the CPU bandwidth staked.
* `0 SYS` = the amount of `SYS` tokens allocated to stake NET bandwidth.
* `0.01 SYS` = the amount `SYS` tokens allocated to stake CPU bandwidth.

Example output:

```console
executed transaction: 5487afafd67bf459a20fcc2dbc5d0c2f0d1f10e33123eaaa07088046fd18e3ae  192 bytes  503 us
#         sysio <= sysio::delegatebw            {"from":"bob","receiver":"alice","stake_net_quantity":"0.0000 SYS","stake_cpu_quanti...
#   sysio.token <= sysio.token::transfer        {"from":"bob","to":"sysio.stake","quantity":"0.01 SYS","memo":"stake bandwidth"}
#  alice <= sysio.token::transfer        {"from":"bob","to":"sysio.stake","quantity":"0.01 SYS","memo":"stake bandwidth"}
#   sysio.stake <= sysio.token::transfer        {"from":"bob","to":"sysio.stake","quantity":"0.01 SYS","memo":"stake bandwidth"}
```

### 3. Stake NET and CPU bandwidth

Run the following command to stake `0.01 SYS` of NET and `0.02 SYS` of CPU bandwidth for `alice` account from `bob` account:

```sh
clio system delegatebw alice bob "0.01 SYS" "0.02 SYS"
```

Where:

* `alice` = the account for which the NET and CPU bandwidth is staked.
* `bob` = the account that pays `0.01 SYS` for the NET and `0.02 SYS` for the CPU bandwidth staked.
* `0.01 SYS` = the amount of `SYS` tokens allocated to stake NET bandwidth.
* `0.02 SYS` = the amount of `SYS` tokens allocated to stake CPU bandwidth.

Example output:

```console
executed transaction: 5487afafd67bf459a20fcc2dbc5d0c2f0d1f10e33123eaaa07088046fd18e3ae  192 bytes  503 us
#         sysio <= sysio::delegatebw            {"from":"bob","receiver":"alice","stake_net_quantity":"0.01 SYS","stake_cpu_quanti...
#   sysio.token <= sysio.token::transfer        {"from":"bob","to":"sysio.stake","quantity":"0.01 SYS","memo":"stake bandwidth"}
#  alice <= sysio.token::transfer        {"from":"bob","to":"sysio.stake","quantity":"0.01 SYS","memo":"stake bandwidth"}
#   sysio.stake <= sysio.token::transfer        {"from":"bob","to":"sysio.stake","quantity":"0.01 SYS","memo":"stake bandwidth"}
```

:::info[An account can stake to itself]
| An account can stake resources to itself, that is, `bob` account can be substituted in the above examples with `alice`, provided `alice` account holds sufficient `SYS` tokens. That means `alice` account stakes resources to itself.
:::

## Summary

In conclusion, the above instructions show how to stake CPU and/or NET bandwidth from one account to another or to itself.
