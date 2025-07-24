---
id: multisig-propose
title: multisig propose
---

## Command

```sh
clio multisig propose <proposal_name> <requested_permissions> <trx_permissions> <contract> <action> <data> <proposer> <proposal_expiration> [OPTIONS]
```

## Description

Propose an action.

## Synopsis

```sh
clio multisig propose
  <proposal_name>                     # REQUIRED: Proposal name (string)
  <requested_permissions>             # REQUIRED: JSON string or filename defining requested permissions
  <trx_permissions>                   # REQUIRED: JSON string or filename defining transaction permissions
  <contract>                          # REQUIRED: Contract to which deferred transaction should be delivered
  <action>                            # REQUIRED: Action of deferred transaction
  <data>                              # REQUIRED: JSON string or filename defining the action to propose
  <proposer>                          # REQUIRED: Account proposing the transaction
  <proposal_expiration>               # REQUIRED: Proposal expiration interval in hours
  [-h | --help]                       # Print this help message and exit
  [[-x | --expiration] <seconds>]     # Set transaction expiration time in seconds (default: 30s)
  [-f | --force-unique]               # Force transaction to be unique
  [-s | --skip-sign]                  # Skip signing with unlocked wallet keys
  [-d | --dont-broadcast]             # Don't broadcast transaction to network
  [[-r | --ref-block] <block>]        # Set reference block for TAPOS
  [[-p | --permission] <account@perm>] # Account and permission level (default: account@active)
  [--max-cpu-usage-ms <ms>]           # Set CPU usage budget limit in milliseconds
  [--max-net-usage <bytes>]           # Set net usage budget limit in bytes
  [--delay-sec <seconds>]             # Set delay in seconds (default: 0s)
```
