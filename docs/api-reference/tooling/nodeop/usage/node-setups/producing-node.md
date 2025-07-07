---
title: Producing Node Setup
---

## Overview

This section describes how to set up a producing node within the network. A producing node, as its name implies, is a node that is configured to produce blocks in a Wire-based blockchain. This functionality if provided through the `producer_plugin` as well as other [Nodeop Plugins](../../plugins/index.md).

:::info
For an example configuration of a producing node's `config.ini`, refer to [wire-cli repo](https://github.com/Wire-Network/wire-cli/blob/master/blockproducer/config/config.ini).
:::

## Prerequisites

* [Install the Wire software](/docs/getting-started/install-dependencies.md) before starting this section.
* Know how to pass [Nodeop options](../../usage/nodeop-options.md) to enable or disable functionality.
* These instructions assume you want to launch a producing node on a network with deployed [**system contracts**](https://github.com/Wire-Network/wire-system-contracts).

## Steps

### Step 1. Register your account as a producer

In order for your account to be eligible as a producer, you will need to register the account as a producer:

```sh
clio system regproducer accountname1 SYS1234534...sdhuds http://producer.site Antarctica
```

### Step 2. Set Producer Name

Set the `producer-name` option in `config.ini` to your account, as follows:

```console
# config.ini:

# ID of producer controlled by this node (e.g. inita; may specify multiple times) (sysio::producer_plugin)
producer-name = youraccount
```

### Step 3. Set the Producer's signature-provider

You will need to set the private key for your producer. The public key should have an authority for the producer account defined above.

`signature-provider` is defined with a 3-field tuple:

* `public-key` - A valid public key in form of a string.
* `provider-spec` - It's a string formatted like `<provider-type>:<data>`
* `provider-type` - KEY or KIOD

#### Step 3.1: Using a Key

```console
# config.ini:

signature-provider = PUBLIC_SIGNING_KEY=KEY:PRIVATE_SIGNING_KEY

//Example
//signature-provider SYS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV=KEY:5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3
```

#### Step 3.2: Using Kiod

You can also use `kiod` instead of keys.

```console
# config.ini:

signature-provider = KIOD:<data>   

//Example
//SYS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV=KIOD:https://127.0.0.1:88888
```

### Step 4: Define a peers list

```console
# config.ini:

# Default p2p port is 9876
p2p-peer-address = 123.255.78.9:9876
```

### Step 5: Load the Required Plugins

In your [config.ini](../index.md), confirm the following plugins are loading or append them if necessary.

```console
# config.ini:

plugin = sysio::chain_plugin
plugin = sysio::producer_plugin
```
