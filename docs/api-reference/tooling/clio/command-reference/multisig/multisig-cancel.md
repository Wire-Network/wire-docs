---
id: multisig-cancel
title: multisig cancel
---

## Command

```sh
clio multisig cancel <proposer> <proposal_name> <canceler> [OPTIONS]
```

## Description

Cancel a proposed transaction.

## Synopsis

```sh
clio multisig cancel
  <proposer>                         # REQUIRED: Proposer name (string)
  <proposal_name>                    # REQUIRED: Proposal name (string)
  <canceler>                         # REQUIRED: Canceler name (string)
  [-h | --help]                      # Print this help message and exit
  [[-x | --expiration] <seconds>]    # Set transaction expiration time in seconds (default: 30s)
  [-f | --force-unique]              # Force transaction to be unique
  [-s | --skip-sign]                 # Skip signing with unlocked wallet keys
  [-d | --dont-broadcast]            # Don't broadcast transaction to network
  [[-r | --ref-block] <block>]       # Set reference block for TAPOS
  [[-p | --permission] <account@perm>] # Account and permission level (default: account@active)
  [--max-cpu-usage-ms <ms>]          # Set CPU usage budget limit in milliseconds
  [--max-net-usage <bytes>]          # Set net usage budget limit in bytes
  [--delay-sec <seconds>]            # Set delay in seconds (default: 0s)
```
