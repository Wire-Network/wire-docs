---
title: system undelegatebw
---
## Description

## Positional Arguments

- `from` _TEXT_ - The account undelegating bandwidth
- `receiver` _TEXT_ - The account to undelegate bandwidth from
- `unstake_net_quantity` _TEXT_ - The amount of SYS to undelegate for network bandwidth
- `unstake_cpu_quantity` _TEXT_  - The amount of SYS to undelegate for CPU bandwidth

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
- `--delay-sec` _UINT_            set the delay_sec seconds, defaults to 0s
- `-j,--json` print result as JSON

## Examples
