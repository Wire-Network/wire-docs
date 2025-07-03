---
title: Nodeop 
---

## Introduction

`nodeop` is the core service daemon that runs on every Wire node. It can be configured to process smart contracts, validate transactions, produce blocks containing valid transactions, and confirm blocks to record them on the blockchain.

## Installation

`nodeop` is distributed as part of the [Wire software suite](https://github.com/Wire-Network/wire-sysio/blob/master/README.md). To install `nodeop`, visit the [Wire software Installation](/docs/getting-started/install-dependencies.md) section.

## Explore

Navigate the sections below to configure and use `nodeop`.

* [Usage](./usage/index.md) - Configuring and using `nodeop`, node setups/environments.
* [Plugins](./plugins/index.md) - Using plugins, plugin options, mandatory vs. optional.
* [Replays](./replays.md) - Replaying the chain from a snapshot or a blocks.log file.
* [RPC APIs](./nodeop-apis.md) - Remote Procedure Call API reference for plugin HTTP endpoints.
* [Logging](./native-logging.md) - Logging config/usage, loggers, appenders, logging levels.
* [Troubleshooting](troubleshooting.md) - Common `nodeop` troubleshooting questions.

:::note
A local or remote Wire access node running `nodeop` is required for a client application or smart contract to interact with the blockchain.
:::
