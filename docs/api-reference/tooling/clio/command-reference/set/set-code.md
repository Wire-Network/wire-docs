---
id: set-code
title: set code
---

## Command

```sh
clio set code <account> <code-file> [OPTIONS]
```

## Description

Sets or updates an account's smart contract code on the blockchain. Use this command to deploy or update a contract by setting the WASM (or WAST) file and its optional ABI.

## Synopsis

```sh
clio set code
  account <TEXT>                    # REQUIRED: The account to set code for
  code-file <TEXT>                  # REQUIRED: The full path containing the contract WAST or WASM
  [-h, --help]                      # Print help message and exit
  [-a, --abi <TEXT>]                # Specify the ABI for the contract
  [-c, --clear]                     # Remove contract code from the account
  [--suppress-duplicate-check]      # Do not check for duplicate code
  [-x, --expiration <TEXT>]         # Set transaction expiration in seconds (default: 30s)
  [-f, --force-unique]              # Force transaction uniqueness (extra bandwidth required)
  [-s, --skip-sign]                 # Use unlocked wallet keys to sign the transaction
  [-j, --json]                      # Print result as JSON
  [-d, --dont-broadcast]            # Do not broadcast the transaction (prints to stdout)
  [--return-packed]                 # With --dont-broadcast, return the packed transaction
  [-r, --ref-block <TEXT>]          # Set the reference block number or block ID for TAPOS
  [-p, --permission <TEXT>]         # Authorize with account@permission (default: account@active)
  [--max-cpu-usage-ms <UINT>]        # Set upper limit on CPU usage in milliseconds (default: no limit)
  [--max-net-usage <UINT>]           # Set upper limit on network usage in bytes (default: no limit)
  [--delay-sec <UINT>]               # Set a delay in seconds before execution (default: 0s)
```

## Examples

1. **Deploy contract code to an account:**

    ```sh
    clio set code someaccount1 ./path/to/contract.wasm
    ```

2. **Deploy contract code with an associated ABI:**

    ```sh
    clio set code someaccount1 ./path/to/contract.wasm -a ./path/to/contract.abi
    ```

3. **Remove contract code from an account:**

    ```sh
    clio set code someaccount1 -c -p someaccount1@active
    ```

## Resources

* [Accounts and Permissions](/docs/smart-contract-development/accounts-permissions.md)
