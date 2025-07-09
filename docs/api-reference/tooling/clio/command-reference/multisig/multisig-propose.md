---
title: multisig propose
---

## Command

```sh
clio multisig propose proposal_name requested_permissions trx_permissions contract action data proposer proposal_expiration [OPTIONS]
```

## Description

Propose an action.

## Synopsis

```sh
clio multisig propose
  proposal_name <TEXT>         # REQUIRED: Proposal name (string)
  requested_permissions <TEXT> # REQUIRED: JSON string or filename defining requested permissions
  trx_permissions <TEXT>       # REQUIRED: JSON string or filename defining transaction permissions
  contract <TEXT>              # REQUIRED: Contract to which deferred transaction should be delivered
  action <TEXT>                # REQUIRED: Action of deferred transaction
  data <TEXT>                  # REQUIRED: JSON string or filename defining the action to propose
  proposer <TEXT>              # REQUIRED: Account proposing the transaction
  proposal_expiration <UINT>   # REQUIRED: Proposal expiration interval in hours
  [-h, --help]                 # Print this help message and exit
  [-x, --expiration]           # Set transaction expiration time in seconds (default: 30s)
  [-f, --force-unique]         # Force transaction to be unique
  [-s, --skip-sign]            # Skip signing with unlocked wallet keys
  [-d, --dont-broadcast]       # Don't broadcast transaction to network
  [-r, --ref-block]            # Set reference block for TAPOS
  [-p, --permission]           # Account and permission level (default: account@active)
  [--max-cpu-usage-ms]         # Set CPU usage budget limit in milliseconds
  [--max-net-usage]            # Set net usage budget limit in bytes
  [--delay-sec]                # Set delay in seconds (default: 0s)
```
