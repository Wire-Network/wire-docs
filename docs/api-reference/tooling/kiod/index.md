---
title: Keosd
---

## Introduction

`kiod` is a key manager service daemon for storing private keys and signing digital messages. It provides a secure key storage medium for keys to be encrypted at rest in the associated wallet file. `kiod` also defines a secure enclave for signing transaction created by `clio` or a third part library.

## Installation

`kiod` is distributed as part of the [Wire software suite](https://github.com/Wire-Network/wire-sysio/blob/master/README.md). To install `kiod` just visit the [Wire software Installation](/docs/getting-started/install-dependencies.md) section.

## Operation

When a wallet is unlocked with the corresponding password, `clio` can request `kiod` to sign a transaction with the appropriate private keys.

:::info[Audience]
| `kiod` is intended to be used by Wire developers only.
:::