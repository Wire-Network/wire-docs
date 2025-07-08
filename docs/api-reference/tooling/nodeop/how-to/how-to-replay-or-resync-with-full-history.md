---
title: Replay or Resync with Full History
---

## Overview

This guide explains how to replay or resync your node so that it captures the entire blockchain history. Following these steps will allow you to reconstruct the full chain state, including every historical transaction.

## Prerequisites

* You have a local instance of `nodeop` launched but not running - `pidof nodeop` should return nothing.
* You are familiar with [state_history_plugin](../plugins/state-history-plugin.md).

## Steps

### Step 1

Get a `blocks.log` and place it in `data/blocks`.

If you cannot get a third-party `blocks.log`, you can use the genesis file and pass the `--genesis-json` option when starting `nodeop` in [Step 3](#step-3).

### Step 2

Remove `data/state` and use the `--replay-blockchain` option.

### Step 3

Start `nodeop` with the options listed in the [`state_history_plugin`](../plugins/state-history-plugin.md)
