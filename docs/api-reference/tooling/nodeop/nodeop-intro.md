---
id: nodeop
title: 'Nodeop'
label: 'Nodeop'
---

## Introduction

`nodeop` is the core service daemon that runs on every Wire node. It can be configured to process smart contracts, validate transactions, produce blocks containing valid transactions, and confirm blocks to record them on the blockchain.

## Installation

`nodeop` is distributed as part of the [Wire Network software suite](http://github.com/Wire-Network/wire-sysio). To install `nodeop`, visit the [Wire software Installation](https://github.com/Wire-Network/wire-sysio#installation) section.

## Explore

Navigate the sections below to configure and use `nodeop`.

- [Usage](./usage/index.md) - Configuring and using `nodeop`, node setups/environments.
- [Plugins](./plugins) - Using plugins, plugin options, mandatory vs. optional.
- [Replays](./replays.md) - Replaying the chain from a snapshot or a blocks.log file.
- [RPC APIs](./nodeop-apis.md) - Remote Procedure Call(RPC) API reference for plugin HTTP endpoints.
- [Logging](./logging/index.md) - Logging config/usage, loggers, appenders, logging levels.
- [Concepts](./concepts/index.md) - `nodeop` concepts, explainers, implementation aspects.
- [Troubleshooting](./troubleshooting.md) - Common `nodeop` troubleshooting questions.

## Setup

A local or remote node running `nodeop` is required for a client application or smart contract to interact with the blockchain.
