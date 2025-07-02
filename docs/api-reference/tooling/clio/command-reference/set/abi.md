---
id: set-abi
title: set abi
---

## Command

```sh
clio set abi <account> <abi-file> [OPTIONS]
```

## Description

Create or update the ABI on an account.

## Synopsis

```sh
clio set abi
  account <TEXT>                    # REQUIRED: The account to set the ABI for
  abi-file <TEXT>                   # REQUIRED: The full path to the ABI file
  [-h, --help]                     # Print help message and exit
  [-a, --abi <TEXT>]               # Specify the ABI for the contract (optional)
  [-x, --expiration <TEXT>]        # Set transaction expiration in seconds (default: 30s)
  [-f, --force-unique]             # Force transaction uniqueness (extra bandwidth required)
  [-s, --skip-sign]                # Use unlocked wallet keys to sign the transaction
  [-d, --dont-broadcast]           # Do not broadcast the transaction (prints to stdout)
  [-r, --ref-block <TEXT>]         # Set the reference block number or block ID for TAPOS
  [-p, --permission <TEXT>]        # Authorize with account@permission (default: account@active)
  [--max-cpu-usage-ms <UINT>]       # Set the upper limit on CPU usage in milliseconds (default: no limit)
  [--max-net-usage <UINT>]          # Set the upper limit on network usage in bytes (default: no limit)
  [--delay-sec <UINT>]              # Set a delay in seconds before execution (default: 0s)
```

## Examples

1. **Set the ABI for an account:**

```sh
clio set abi someaccount1 ./path/to/abi.abi
```

## Resources

- [Accounts and Permissions](/docs/smart-contract-development/accounts-permissions.md)
