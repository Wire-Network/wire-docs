---
title: Replay or resync with full history
---

## Overview

This guide explains how to replay or resync your node so that it captures the entire blockchain history. Following these steps will allow you to reconstruct the full chain state, including every historical transaction.

## Prerequisites

* You have a local instance of `nodeop` running.
* You are familiar with [state_history_plugin](../plugins/state-history-plugin.md).

## Steps

### Step 1

Get a `blocks.log` and place it in `data/blocks`, or get a genesis file and use the `--genesis-json` option

### Step 2

Remove `data/state`, or use the `--replay-blockchain` option

### Step 3

Start `nodeop` with the options listed in the [`state_history_plugin`](../plugins/state-history-plugin.md)
