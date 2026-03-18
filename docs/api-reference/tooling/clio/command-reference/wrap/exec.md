---
id: exec
title: exec
---

## Command

```sh
clio wrap exec [OPTIONS] <executer> <transaction>
```

## Description

Execute a transaction while bypassing authorization checks. This command uses the `sysio.wrap` contract to execute privileged transactions.

## Synopsis

```sh
clio wrap exec
  <executer>                          # REQUIRED: Account executing the transaction and paying for the deferred transaction RAM
  <transaction>                       # REQUIRED: The JSON string or filename defining the transaction to execute
  [-h | --help]                       # Print this help message and exit
  [--help-all]                        # Show all help
  [-x | --expiration]                 # Set the time in seconds before a transaction expires, defaults to 30s
  [-s | --skip-sign]                  # Specify if unlocked wallet keys should be used to sign transaction
  [-j | --json]                       # Print result as JSON
  [--json-file <filename>]            # Save result in JSON format into a file
  [-d | --dont-broadcast]             # Don't broadcast transaction to the network (just print to stdout)
  [-u | --unpack-action-data]         # Unpack all action data within transaction
  [--return-packed]                   # Used in conjunction with --dont-broadcast to get the packed transaction
  [-r | --ref-block <block>]          # Set the reference block num or block id used for TAPOS
  [--use-old-rpc]                     # Use old RPC push_transaction, rather than new RPC send_transaction
  [--use-old-send-rpc]                # Use old RPC send_transaction, rather than new RPC /v1/chain/send_transaction2
  [--compression <type>]              # Compression for transaction 'none' or 'zlib'
  [-p | --permission <permission>]    # An account and permission level to authorize, as in 'account@permission'
  [-P | --payer <account>]            # Pass in explicit payer permission
  [--max-cpu-usage-ms <ms>]           # Set an upper limit on the milliseconds of cpu usage budget
  [--max-net-usage <bytes>]           # Set an upper limit on the net usage budget, in bytes
  [-t | --return-failure-trace]       # Return partial traces on failed transactions
  [--retry-irreversible]              # Request node to retry transaction until it is irreversible or expires
  [--retry-num-blocks <num>]          # Request node to retry transaction until in a block of given height
  [--sign-with <key>]                 # The public key or json array of public keys to sign with
  [-c | --contract <account>]         # The account which controls the wrap contract
```

## Examples

### Execute a transaction from a JSON file

```sh
clio wrap exec myaccount transaction.json -p myaccount@active
```

**Where:**

- `myaccount` - The account executing and paying for the transaction
- `transaction.json` - A file containing the transaction JSON
- `-p myaccount@active` - The permission to authorize the action

### Execute a transaction with JSON string

```sh
clio wrap exec myaccount '{"actions":[{"account":"sysio.token","name":"transfer","authorization":[{"actor":"alice","permission":"active"}],"data":{"from":"alice","to":"bob","quantity":"1.0000 SYS","memo":"test"}}]}' -p myaccount@active
```

### Execute without broadcasting (dry run)

```sh
clio wrap exec myaccount transaction.json -p myaccount@active --dont-broadcast
```

## Requirements

- Install the currently supported version of `clio`.
- The `sysio.wrap` contract must be deployed on the blockchain.
- The executing account must have the appropriate permissions.

:::note
The `clio` tool is bundled with the Wire software. [Installing Wire core](/docs/getting-started/install-dependencies.md) will install the `clio` and `kiod` command line tools.
:::

:::warning
This command bypasses normal authorization checks. Use with caution and only when necessary for privileged operations.
:::
