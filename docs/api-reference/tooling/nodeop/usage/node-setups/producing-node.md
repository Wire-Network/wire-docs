---
title: Producing Node Setup
---

:::info[System contracts required]
| These instructions assume you want to launch a producing node on a network with **system contracts loaded**. These instructions will not work on a default development node using native functionality, or one without system contracts loaded.
:::

## Goal

This section describes how to set up a producing node within the network. A producing node, as its name implies, is a node that is configured to produce blocks in a Wire-based blockchain. This functionality if provided through the `producer_plugin` as well as other [Nodeop Plugins](../../plugins/index.md).

## Before you begin

* [Install the Wire software](/docs/getting-started/install-dependencies.md) before starting this section.
* Know how to pass [Nodeop options](../../usage/nodeop-options.md) to enable or disable functionality.

## Steps

Please follow the steps below to set up a producing node:

* [Goal](#goal)
* [Before you begin](#before-you-begin)
* [Steps](#steps)
  * [1. Register your account as a producer](#1-register-your-account-as-a-producer)
  * [2. Set Producer Name](#2-set-producer-name)
  * [3. Set the Producer's signature-provider](#3-set-the-producers-signature-provider)
    * [Using a Key](#using-a-key)
    * [Using Kiod](#using-kiod)
  * [4. Define a peers list](#4-define-a-peers-list)
  * [5. Load the Required Plugins](#5-load-the-required-plugins)

### 1. Register your account as a producer

In order for your account to be eligible as a producer, you will need to register the account as a producer:

```sh
clio system regproducer accountname1 SYS1234534...sdhuds http://producer.site Antarctica
```

### 2. Set Producer Name

Set the `producer-name` option in `config.ini` to your account, as follows:

```console
# config.ini:

# ID of producer controlled by this node (e.g. inita; may specify multiple times) (sysio::producer_plugin)
producer-name = youraccount
```

### 3. Set the Producer's signature-provider

You will need to set the private key for your producer. The public key should have an authority for the producer account defined above.

`signature-provider` is defined with a 3-field tuple:

* `public-key` - A valid public key in form of a string.
* `provider-spec` - It's a string formatted like `<provider-type>:<data>`
* `provider-type` - KEY or KIOD

#### Using a Key

```console
# config.ini:

signature-provider = PUBLIC_SIGNING_KEY=KEY:PRIVATE_SIGNING_KEY

//Example
//signature-provider SYS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV=KEY:5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3
```

#### Using Kiod

You can also use `kiod` instead of hard-defining keys.

```console
# config.ini:

signature-provider = KIOD:<data>   

//Example
//SYS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV=KIOD:https://127.0.0.1:88888
```

### 4. Define a peers list

```console
# config.ini:

# Default p2p port is 9876
p2p-peer-address = 123.255.78.9:9876
```

### 5. Load the Required Plugins

In your [config.ini](../index.md), confirm the following plugins are loading or append them if necessary.

```console
# config.ini:

plugin = sysio::chain_plugin
plugin = sysio::producer_plugin
```
