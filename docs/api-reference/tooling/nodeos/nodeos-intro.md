---
id: nodeos
title: 'Nodeos'
label: 'Nodeos'
---

## Introduction

`nodeos` is the core service daemon that runs on every EOSIO node. It can be configured to process smart contracts, validate transactions, produce blocks containing valid transactions, and confirm blocks to record them on the blockchain.

## Installation

`nodeos` is distributed as part of the [Wire Network software suite](https://example.com). To install `nodeos`, visit the [Wire software Installation](https://example.com) section.

## Explore

Navigate the sections below to configure and use `nodeos`.

- [Usage](./usage/index.md) - Configuring and using `nodeos`, node setups/environments.
- [Plugins](./plugins) - Using plugins, plugin options, mandatory vs. optional.
- [Replays](./replays.md) - Replaying the chain from a snapshot or a blocks.log file.
- [RPC APIs](./nodeos-apis.md) - Remote Procedure Call(RPC) API reference for plugin HTTP endpoints.
- [Logging](./logging/index.md) - Logging config/usage, loggers, appenders, logging levels.
- [Concepts](./concepts/index.md) - `nodeos` concepts, explainers, implementation aspects.
- [Troubleshooting](./troubleshooting.md) - Common `nodeos` troubleshooting questions.
- 
## Setup

A local or remote EOSIO access node running `nodeos` is required for a client application or smart contract to interact with the blockchain.
