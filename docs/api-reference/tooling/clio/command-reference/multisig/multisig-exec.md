---
title: multisig exec
---

## Command

```sh
clio multisig exec proposer proposal_name executer [OPTIONS]
```

## Description

Execute a proposed transaction.

## Synopsis

```sh
clio multisig exec
  proposer <TEXT>          # REQUIRED: Proposer name (string)
  proposal_name <TEXT>     # REQUIRED: Proposal name (string)
  executer <TEXT>          # REQUIRED: Account paying for execution (string)
  [-h, --help]             # Print this help message and exit
  [-x, --expiration]       # Set transaction expiration time in seconds (default: 30s)
  [-f, --force-unique]     # Force transaction to be unique
  [-s, --skip-sign]        # Skip signing with unlocked wallet keys
  [-d, --dont-broadcast]   # Don't broadcast transaction to network
  [-r, --ref-block]        # Set reference block for TAPOS
  [-p, --permission]       # Account and permission level (default: account@active)
  [--max-cpu-usage-ms]     # Set CPU usage budget limit in milliseconds
  [--max-net-usage]        # Set net usage budget limit in bytes
  [--delay-sec]            # Set delay in seconds (default: 0s)
```
