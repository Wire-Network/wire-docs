---
id: set-account
title: set account
---

## Command

```sh
clio set account permission <account> <permission> <authority> [parent] [OPTIONS]
```

## Description

Set or update blockchain account state. This command manages an account’s permission authorities, allowing you to set, update, or delete permissions; add or remove the `sysio.code` permission.

## Synopsis

```sh
clio set account permission
  account <TEXT>                    # REQUIRED: The account to set/delete a permission authority
  permission <TEXT>                 # REQUIRED: The permission name to manage
  authority <TEXT>                  # REQUIRED: For deletion use NULL; for setting/updating, specify a public key, JSON string, or filename (or for code, the contract name)
  [parent <TEXT>]                   # OPTIONAL: Parent permission name when creating a new permission (defaults to "active")
  [-h, --help]                     # Print help message and exit
  [--add-code]                     # Add the `sysio.code` permission to the authority
  [--remove-code]                  # Remove the `sysio.code` permission from the authority
  [-x, --expiration <TEXT>]         # Set transaction expiration in seconds (default: 30s)
  [-f, --force-unique]              # Force transaction uniqueness (extra bandwidth required)
  [-s, --skip-sign]                 # Use unlocked wallet keys to sign the transaction
  [-j, --json]                      # Print result in JSON format
  [--json-file <TEXT>]              # Save result in JSON format to a file
  [-d, --dont-broadcast]            # Do not broadcast the transaction (prints output to stdout)
  [--return-packed]                 # Used with --dont-broadcast to return the packed transaction
  [-r, --ref-block <TEXT>]          # Set reference block number or block ID for TAPOS
  [--use-old-rpc]                  # Use the old RPC push_transaction instead of new send_transaction
  [-p, --permission <TEXT>]         # Authorize with account@permission (default: account@active)
  [--max-cpu-usage-ms <UINT>]        # Set upper limit on CPU usage in milliseconds (default: no limit)
  [--max-net-usage <UINT>]           # Set upper limit on network usage in bytes (default: no limit)
  [--delay-sec <UINT>]               # Set a delay in seconds before execution (default: 0s)
```

## Examples

1. **Update the `active` permission key:**

    ```sh
    clio set account permission alice active SYS5zG7PsdtzQ9achTdRtXwHieL7yyigBFiJDRAQonqBsfKyL3XhC -p alice@owner
    ```

2. **Add the `sysio.code` permission to the `active` permission of account `alice`:**

    ```sh
    clio set account permission alice active --add-code -p alice@active
    ```

3. **Add a custom permission to account `alice`:**

    ```sh
    clio set account permission alice customp SYS58wmANoBtT7RdPgMRCGDb37tcCQswfwVpj6NzC55D247tTMU9D active -p alice@active
    ```

## Resources

* [Accounts and Permissions](/docs/smart-contract-development/accounts-permissions.md)
