---
id: multisig-propose
title: multisig propose
---


## Description

Propose an action.

## Positional Arguments

- `proposal_name` _TEXT_ - Proposal name (string)
- `requested_permissions` _TEXT_  - The JSON string or filename defining requested permissions
- `trx_permissions` _TEXT_ - The JSON string or filename defining transaction permissions
- `contract` _TEXT_ - Contract to which deferred transaction should be delivered
- `action` _TEXT_ - Action of deferred transaction
- `data` _TEXT_ - The JSON string or filename defining the action to propose
- `proposer` _TEXT_ - Account proposing the transaction
- `proposal_expiration` _UINT_ - Proposal expiration interval in hours

## Options

- `-h,--help` Print this help message and exit
- `-x,--expiration` _TEXT_ - set the time in seconds before a transaction expires, defaults to 30s
- `-f,--force-unique` - force the transaction to be unique. this will consume extra bandwidth and remove any protections against accidently issuing the same transaction multiple times
- `-s,--skip-sign` Specify if unlocked wallet keys should be used to sign transaction
- `-d,--dont-broadcast` - Don't broadcast transaction to the network (just print to stdout)
- `-r,--ref-block` _TEXT_         set the reference block num or block id used for TAPOS (Transaction as Proof-of-Stake)
- `-p,--permission`  _TEXT_ - An account and permission level to authorize, as in 'account@permission' (defaults to 'account@active')
- `--max-cpu-usage-ms` _UINT_ - set an upper limit on the milliseconds of CPU usage budget, for the execution of the transaction (defaults to 0 which means no limit)
- `--max-net-usage` _UINT_ - set an upper limit on the net usage budget, in bytes, for the transaction (defaults to 0 which means no limit)
- `--delay-sec` _UINT_ - set the delay_sec seconds, defaults to 0s
