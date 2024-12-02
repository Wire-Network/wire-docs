---
id: how-to-config-a-multisig
---

# Config a Multisig Account

## Overview

Setup an account that require multiple signatures for signing a transaction.

## Prerequisites

* You have an account

* You have enough resources allocated to execute the transaction

* Install the currently supported version of `clio`

* Understand the following:
  * What is an [account](/docs/introduction/glossary.md#account)
  * What is a [transaction](/docs/introduction/glossary.md#transaction)

## Steps

```sh
clio set account permission multisig active '{\"threshold\" : 1, \"accounts\" :[{\"permission\":{\"actor\":\"sysio\",\"permission\":\"active\"},\"weight\":1},{\"permission\":{\"actor\":\"customera\",\"permission\":\"active\"},\"weight\":1}]}' owner -p multisig@owner"
```
