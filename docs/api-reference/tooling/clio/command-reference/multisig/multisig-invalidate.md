---
id: multisig-invalidate
title: multisig invalidate
---

## Command

```sh
clio multisig invalidate <invalidator> [OPTIONS]
```

## Description

Invalidate all multisig approvals of an account.

## Synopsis

```sh
clio multisig invalidate
  <invalidator>                       # REQUIRED: Invalidator name (string)
  [-h | --help]                       # Print this help message and exit
  [[-x | --expiration] <seconds>]     # Set transaction expiration time in seconds (default: 30s)
  [-f | --force-unique]               # Force transaction to be unique
  [-s | --skip-sign]                  # Skip signing with unlocked wallet keys
  [-j | --json]                       # Print result as JSON
  [-d | --dont-broadcast]             # Don't broadcast transaction to network
  [--return-packed]                   # Return packed transaction with --dont-broadcast
  [[-r | --ref-block] <block>]        # Set reference block for TAPOS
  [[-p | --permission] <account@perm>] # Account and permission level (default: invalidator@active)
  [--max-cpu-usage-ms <ms>]           # Set CPU usage budget limit in milliseconds
  [--max-net-usage <bytes>]           # Set net usage budget limit in bytes
  [--delay-sec <seconds>]             # Set delay in seconds (default: 0s)
```
