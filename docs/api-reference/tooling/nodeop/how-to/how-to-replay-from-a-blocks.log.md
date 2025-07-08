---
title: Replay From a blocks.log File
---

## Overview

This guide shows how to reconstruct a chain state using a downloaded `blocks.log` file rather than performing a full peer-to-peer sync. By replacing your local `data/blocks/blocks.log` with the supplied `blocks.log` and removing state and state historyfiles, you can replay the blockchain from that point onward and rebuild the state up to the last irreversible block contained in the log.

## Prerequisites

* You have followed the instructions to start a local blockchain in [Install Dependencies](/docs/getting-started/install-dependencies.md).
* Ensure that your local `nodeop` instance(s) are not running - `pidof nodeop` should return nothing.
* Back up your current contents in the `data/blocks`; `data/state` and `data/state-history` directories if you wish to preserve them.
* Obtain the `blocks.log` file you intend to replay the blockchain from.

## Steps

### Prepare the `blocks/` directory

Once you have obtained a copy of the `blocks.log` file you wish to replay from, simply replace the current `blocks.log` with it:

```sh
cp blocks.log /opt/wire-network/blockproducer/data/blocks/
cp blocks.log /opt/wire-network/chain-api/data/blocks/
```

Next, you need to remove the following files and directories:
  
* `data/blocks/blocks.index`
* `data/blocks/reversible`
* `data/state`

```sh
rm -rf data/blocks/blocks.index
rm -rf data/blocks/reversible
rm -rf data/state
```

After removing `data/blocks/blocks.index` and copying the new `blocks.log` file, use `leap-util` to create a new `blocks.index` file:

```sh
leap-util block-log make-index --blocks-dir=/opt/wire-network/blockproducer/data/blocks/
leap-util block-log make-index --blocks-dir=/opt/wire-network/chain-api/data/blocks/
```

If you are doing a replay on a chain API(non-producing) node with enabled state history plugin, you will also need to remove the `data/blocks/state-history` directory.

```sh
rm -rf data/blocks/state-history
```

:::info
The `blocks.log` file is located in the `blocks/` directory by default, but this can be customized by setting `blocks-dir` in `config.ini` file or by passing the `--blocks-dir` option to `nodeop` on the command line.
:::

### 3. Launch `nodeop` in Replay Mode

#### Block Producing node replay

Assuming you have started you local blockchain with `wire-cli`, following the instructions in [Install Dependencies](/docs/getting-started/install-dependencies.md), you can use the start script and pass the `--replay-blockchain` option to it:

```sh
cd /opt/wire-network/blockproducer
./start.sh --replay-blockchain
```

Else, your `nodeop` command would be:

```sh
nodeop --replay-blockchain \
  --plugin sysio::producer_plugin \
  --plugin sysio::chain_api_plugin \
  --plugin sysio::http_plugin \
  >> nodeop.log 2>&1 &
```

#### Chain API(non-producing) replay

Before proceeding with the replay, you need to trim the `blocks-state.log` to the same block number as the `blocks.log`, else you would get the following error:

```sh
Block log and block state log need to be at the same block number. This can be fixed by running "leap-util block-state-log trim-blocklog --first 1 --last 156282 --blocks-dir <your blocks dir>". The other log is at block num: 163208 
    {"command":"block-state-log","last":156282,"bn":163208}
    nodeop  controller.cpp:798 init
```

To fix this, you can run the following command:

```sh
leap-util block-state-log trim-blocklog --first 1 --last 156282 --blocks-dir /opt/wire-network/chain-api/data/blocks/
```

```sh
cd /opt/wire-network/chain-api
./start.sh --replay-blockchain
```
