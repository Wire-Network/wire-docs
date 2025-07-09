---
id:  multisig-approve
title: multisig approve
---

## Command

```sh
clio multisig approve proposer proposal_name permissions [proposal_hash] [OPTIONS]
```

## Description

Approve a proposed transaction.

## Synopsis

```sh
clio multisig approve
  proposer <TEXT>          # REQUIRED: Proposer name (string)
  proposal_name <TEXT>     # REQUIRED: Proposal name (string)
  permissions <TEXT>       # REQUIRED: The JSON string or filename defining approving permissions
  proposal_hash <TEXT>     # OPTIONAL: Hash of proposed transaction to enforce as condition
  [-h, --help]             # Print this help message and exit
  [-x, --expiration]       # Set transaction expiration time in seconds (default: 30s)
  [-f, --force-unique]     # Force transaction to be unique
  [-s, --skip-sign]        # Skip signing with unlocked wallet keys
  [-j, --json]             # Print result as JSON
  [-d, --dont-broadcast]   # Don't broadcast transaction to network
  [--return-packed]        # Return packed transaction with --dont-broadcast
  [-r, --ref-block]        # Set reference block for TAPOS
  [-p, --permission]       # Account and permission level (default: account@active)
  [--max-cpu-usage-ms]     # Set CPU usage budget limit in milliseconds
  [--max-net-usage]        # Set net usage budget limit in bytes
  [--delay-sec]            # Set delay in seconds (default: 0s)
```
