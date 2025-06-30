---
id: set-contract
title: set contract
---

## Description

Creates or updates the contract on an account. Use this command to deploy or update a smart contract by setting the WASM (or WAST) file and its optional ABI.

## Command

```sh
clio set contract <account> <contract-dir> [authority] [parent] [OPTIONS]
```

## Synopsis

```sh
clio set contract
  account <TEXT>                    # REQUIRED: The account to publish a contract for
  contract-dir <TEXT>               # REQUIRED: The directory containing the contract files (.wasm and .abi)
  [authority <TEXT>]                # OPTIONAL: Specify the deploying authority (e.g., a contract’s name)
  [parent <TEXT>]                   # OPTIONAL: Parent permission for new permission creation (defaults to "active")
  [-h, --help]                     # Print help message and exit
  [-a, --abi <TEXT>]                # Specify the ABI for the contract relative to contract-dir
  [-c, --clear]                     # Remove contract code from the account
  [--suppress-duplicate-check]      # Do not check for duplicate code
  [-x, --expiration <TEXT>]         # Set transaction expiration in seconds (default: 30s)
  [-f, --force-unique]              # Force transaction uniqueness (extra bandwidth required)
  [-s, --skip-sign]                 # Use unlocked wallet keys to sign the transaction
  [-j, --json]                      # Print result as JSON
  [--json-file <TEXT>]              # Save result in JSON format to a file
  [-d, --dont-broadcast]            # Do not broadcast the transaction (prints to stdout)
  [--return-packed]                 # With --dont-broadcast, return the packed transaction
  [-r, --ref-block <TEXT>]          # Set the reference block number or block ID for TAPOS
  [--use-old-rpc]                   # Use the old RPC push_transaction rather than new send_transaction
  [--use-old-send-rpc]              # Use the old RPC send_transaction rather than /v1/chain/send_transaction2
  [-p, --permission <TEXT>]         # Authorize with account@permission (default: account@active)
  [--max-cpu-usage-ms <UINT>]        # Upper limit on CPU usage in milliseconds (default: no limit)
  [--max-net-usage <UINT>]           # Upper limit on network usage in bytes (default: no limit)
  [--delay-sec <UINT>]               # Set a delay in seconds before execution (default: 0s)
  [-t, --return-failure-trace]       # Return partial traces on failed transactions
  [--retry-irreversible]             # Retry transaction until irreversible or expired (blocking call)
  [--retry-num-blocks <UINT>]        # Retry until included in a block of given height (blocking call)
```

## Examples

1. **Deploy a contract for a company account:**

    See [company-contract](/docs/smart-contract-development/company-contract#4-deploy-the-contract)

## Resources

- [Accounts and Permissions](/docs/smart-contract-development/accounts-permissions.md)
