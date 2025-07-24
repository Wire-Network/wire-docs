---
id: multisig-approve
title: multisig approve
---

## Command

```sh
clio multisig approve <proposer> <proposal_name> <permissions> [<proposal_hash>] [OPTIONS]
```

## Description

Approve a proposed transaction.

## Synopsis

```sh
clio multisig approve
  <proposer>                         # REQUIRED: Proposer name (string)
  <proposal_name>                    # REQUIRED: Proposal name (string)
  <permissions>                      # REQUIRED: The JSON string or filename defining approving permissions
  [<proposal_hash>]                  # OPTIONAL: Hash of proposed transaction to enforce as condition
  [-h | --help]                      # Print this help message and exit
  [[-x | --expiration] <seconds>]    # Set transaction expiration time in seconds (default: 30s)
  [-f | --force-unique]              # Force transaction to be unique
  [-s | --skip-sign]                 # Skip signing with unlocked wallet keys
  [-j | --json]                      # Print result as JSON
  [-d | --dont-broadcast]            # Don't broadcast transaction to network
  [--return-packed]                  # Return packed transaction with --dont-broadcast
  [[-r | --ref-block] <block>]       # Set reference block for TAPOS
  [[-p | --permission] <account@perm>] # Account and permission level (default: account@active)
  [--max-cpu-usage-ms <ms>]          # Set CPU usage budget limit in milliseconds
  [--max-net-usage <bytes>]          # Set net usage budget limit in bytes
  [--delay-sec <seconds>]            # Set delay in seconds (default: 0s)
```
