---
title: Replay From a blocks.log File
---

## Overview

This guide explains how to replay the blockchain by using a specific `blocks.log` file. By replacing your existing log and state files with a downloaded `blocks.log` and clearing associated state data, you can reconstruct the blockchain state without performing a full p2p synchronization.

## Before You Begin

* Ensure that your local `nodeop` instance is not running -> `pidof nodeop` should return nothing.
* Back up your current contents in the `data/blocks` and `data/state` directories if you wish to preserve them.
* Obtain the `blocks.log` file you intend to replay the blockchain from.

## Steps

### Prepare the `blocks` directory

Once you have onbtained a copy of the `blocks.log` file you wish to replay from, simply replace the current `data/blocks/blocks.log` with it, and remove the following files:
  
* `data/blocks/blocks.index`
* `data/state/fork_db.dat`
* `data/blocks/reversible/shared_memory.bin`
* `data/blocks/reversible/shared_memory.meta`

You can define the location of your `blocks.log` file for replay by setting `blocks-dir = "blocks"` in your `config.ini` file or by passing the `--blocks-dir` option on the command line.

### 3. Launch `nodeop` in Replay Mode

```sh
nodeop --replay-blockchain \
  --plugin sysio::producer_plugin \
  --plugin sysio::chain_api_plugin \
  --plugin sysio::http_plugin \
  >> nodeop.log 2>&1 &
```
