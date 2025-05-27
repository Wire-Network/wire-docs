---
id: push-action
title: push action
---

## Description

Push a transaction with a single action

## Positional Arguments

- `contract` _Type: Text_ - The account providing the contract to execute
- `action` _Type: Text_ - The action to execute on the contract
- `data` _Type: Text_ - The arguments to the contract

## Options

 `-h,--help` - Print this help message and exit

 `-x,--expiration` - set the time in seconds before a transaction expires, defaults to 30s

 `-f,--force-unique` - force the transaction to be unique. this will consume extra bandwidth and remove any protections against accidently issuing the same transaction multiple times

`-s,--skip-sign` - Specify if unlocked wallet keys should be used to sign transaction

`-j,--json` - print result as JSON

`-d,--dont-broadcast` - don't broadcast transaction to the network (just print to stdout)

`-p,--permission` _Type: Text_ - An account and permission level to authorize, as in 'account@permission'

`--max-cpu-usage-ms` _UINT_ - set an upper limit on the milliseconds of CPU usage budget, for the execution of the transaction (defaults to 0 which means no limit)

`--max-net-usage` _UINT_ - set an upper limit on the net usage budget, in bytes, for the transaction (defaults to 0 which means no limit)

`--delay-sec` _UINT_ - set the delay_sec seconds, defaults to 0s

Example:

```sh
> clio push action returndemo ruint '{"i":42}'  -p returndemo@active

executed transaction: 12c51fd27fad9bb0fa959037a72093ad0b168f5846e916a0e9a295c8416bdf9f  96 bytes  138 us
#         returndemo <= returndemo::ruint       {"i":42}
=> 
```

If you want to check the full tutorial with a contract with return values, please refer to [this tutorial](/docs/guides/working-with-different-action-return-types).
