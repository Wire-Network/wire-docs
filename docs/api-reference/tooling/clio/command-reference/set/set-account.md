---
id: set-account
title: set account
---

## Command

```sh
clio set account permission <account> <permission> [authority] [parent] [OPTIONS]
```

## Description

Set or update blockchain account state. This command manages an account's permission authorities, allowing you to set, update, or delete permissions; add or remove the `sysio.code` permission.

## Synopsis

```sh
clio set account permission
  <account>                          # REQUIRED: The account to set/delete a permission authority for
  <permission>                       # REQUIRED: The permission name to set/delete an authority for
  [authority]                        # OPTIONAL: To delete a permission, set the authority parameter to NULL; leave it empty when using --add-code/--remove-code flags.To create or update a permission, authority must be one of: a public key, a JSON-formatted authority object, or a filename containing that JSON. 
  [parent]                           # OPTIONAL: Parent permission name when creating a new permission (defaults to "active")
  [-h | --help]                      # Print this help message and exit
  [--help-all]                       # Show all help
  [--add-code]                       # Add 'sysio.code' permission to specified permission authority
  [--remove-code]                    # Remove 'sysio.code' permission from specified permission authority
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
  [[-p | --permission] <account@perm>] # an account and permission level to authorize, as in 'account@permission' (defaults to 'account@active')
  [--max-cpu-usage-ms <ms>]          # set an upper limit on the milliseconds of cpu usage budget, for the execution of the transaction (defaults to 0 which means no limit)
  [--max-net-usage <bytes>]          # set an upper limit on the net usage budget, in bytes, for the transaction (defaults to 0 which means no limit)
  [--delay-sec <seconds>]            # set the delay_sec seconds, defaults to 0s
  [[-t | --return-failure-trace] <boolean>] # return partial traces on failed transactions
  [--retry-irreversible <boolean>]   # request node to retry transaction until it is irreversible or expires, blocking call
  [--retry-num-blocks <blocks>]      # request node to retry transaction until in a block of given height, blocking call
```

**`auth` Schema**

```json title="authority JSON Schema"
{
  "threshold":      <INTEGER [1-2^32): the threshold that must be met to satisfy this authority>,
  "keys": [         <keys must be alpha-numerically sorted by their string representations and unique>
    ...
    {
      "key":        <STRING: SYS.IO compatible Public Key>,
      "weight":     <INTEGER [1-2^16): a signature from this key contributes this to satisfying the threshold>
    }
    ...
  ],
  "accounts": [     <accounts must be alpha-numerically sorted by their permission (actor, then permission) and unique>
    ...
    {
      "permission": {
        "actor":      <STRING: account name of the delegated signer>,
        "permission": <STRING: permission level on the account that must be satisfied>,
      },
      "weight":     <INTEGER [1-2^16): satisfying the delegation contributes this to satisfying the threshold>
    }
    ...
  ],
  "waits": [        <waits must be sorted by wait_sec, largest first, and be unique>
    ...
    {
      "wait_sec":   <INTEGER [1-2^32): seconds of delay which qualifies as passing this wait>
      "weight":     <INTEGER [1-2^16): satisfying the delay contributes this to satisfying the threshold>
    }
    ...
  ]
}

```

## Examples

The following examples demonstrate how to use the `clio set account permission` command:

### Update the active permission key

```sh
clio set account permission alice active SYS5zG7PsdtzQ9achTdRtXwHieL7yyigBFiJDRAQonqBsfKyL3XhC -p alice@owner
```

### Add the sysio.code permission to the active permission of account alice

```sh
clio set account permission alice active alice --add-code -p alice@active
```

### Add a custom permission to account alice

```sh
clio set account permission alice customp SYS58wmANoBtT7RdPgMRCGDb37tcCQswfwVpj6NzC55D247tTMU9D active -p alice@active
```

## Resources

* [Accounts and Permissions](/docs/smart-contract-development/accounts-permissions.md)
