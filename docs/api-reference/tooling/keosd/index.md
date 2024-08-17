---
title: Keosd
---

## Introduction

`keosd` is a key manager service daemon for storing private keys and signing digital messages. It provides a secure key storage medium for keys to be encrypted at rest in the associated wallet file. `keosd` also defines a secure enclave for signing transaction created by `cleos` or a third part library.

## Installation

`keosd` is distributed as part of the [Wire software suite](https://github.com/siliconswampio/wire-eosio/blob/master/README.md). To install `keosd` just visit the [Wire software Installation](/docs/getting-started/install-dependencies.md) section.

## Operation

When a wallet is unlocked with the corresponding password, `cleos` can request `keosd` to sign a transaction with the appropriate private keys.

:::info[Audience]
| `keosd` is intended to be used by Wire developers only.
:::