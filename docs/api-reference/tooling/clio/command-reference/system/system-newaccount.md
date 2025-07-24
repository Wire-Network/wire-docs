---
title: system newaccount
---

## Command

```sh
clio system newaccount <creator> <name> <OwnerKey> [ActiveKey] [OPTIONS]
```

## Description

Create a new account on the blockchain with initial resources

## Synopsis

```sh
clio system newaccount
  <creator>                          # REQUIRED: The name of the account creating the new account
  <name>                             # REQUIRED: The name of the new account
  <OwnerKey>                         # REQUIRED: The owner public key, permission level, or authority for the new account
  [ActiveKey]                        # OPTIONAL: The active public key, permission level, or authority for the new account
  [-h | --help]                      # Print this help message and exit
  [--help-all]                       # Show all help
  [[-x | --expiration] <seconds>]    # set the time in seconds before a transaction expires, defaults to 30s
  [-f | --force-unique]              # force the transaction to be unique. this will consume extra bandwidth and remove any protections against accidently issuing the same transaction multiple times
  [-s | --skip-sign]                 # Specify if unlocked wallet keys should be used to sign transaction
  [-j | --json]                      # print result as JSON
  [--json-file <filename>]           # save result in json format into a file
  [-d | --dont-broadcast]            # don't broadcast transaction to the network (just print to stdout)
  [-u | --unpack-action-data]        # unpack all action data within transaction, needs interaction with nodeop unless --abi-file. used in conjunction with --dont-broadcast
  [--return-packed]                  # used in conjunction with --dont-broadcast to get the packed transaction
  [[-r | --ref-block] <block>]       # set the reference block num or block id used for TAPOS (Transaction as Proof-of-Stake)
  [--use-old-rpc]                    # use old RPC push_transaction, rather than new RPC send_transaction
  [--use-old-send-rpc]               # use old RPC send_transaction, rather than new RPC /v1/chain/send_transaction2
  [--compression <type>]             # compression for transaction 'none' or 'zlib'
  [[-p | --permission] <account@perm>] # an account and permission level to authorize, as in 'account@permission' (defaults to 'creator@active')
  [--max-cpu-usage-ms <ms>]          # set an upper limit on the milliseconds of cpu usage budget, for the execution of the transaction (defaults to 0 which means no limit)
  [--max-net-usage <bytes>]          # set an upper limit on the net usage budget, in bytes, for the transaction (defaults to 0 which means no limit)
  [--delay-sec <seconds>]            # set the delay_sec seconds, defaults to 0s
  [[-t | --return-failure-trace] <boolean>] # return partial traces on failed transactions
  [--retry-irreversible <boolean>]   # request node to retry transaction until it is irreversible or expires, blocking call
  [--retry-num-blocks <blocks>]      # request node to retry transaction until in a block of given height, blocking call
  [--sign-with <keys>]               # the public key or json array of public keys to sign with
```

## Examples

The following examples demonstrate how to use the `clio system newaccount` command:

### Create a new account

```sh
clio system newaccount alice bob SYS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV SYS6b23j5Yzn8pC1A4UwRhDpu9t47kcyGMp8af1bKKN6sFVUpCVBW -p alice@active
```
