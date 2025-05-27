---
id: set-contract
title: set contract
---

## Description

Creates or updates the contract on an account.

## Command

```sh
clio set contract account [OPTIONS] account contract-dir [authority] [parent]
```

## Positional Arguments

-`account`     _TEXT_ - The account to publish a contract for

-`contract-dir` _TEXT_- The path containing the .wasm and .abi

-`wast-file`  _TEXT_  - The file containing the contract WAST or WASM

-`abi-file`  _TEXT_   - The ABI for the contract

-[OPTIONS]  See Options in [below](#options).

**Note**: The arguments and options enclosed in square brackets are optional.

## Options

`-h, --help`  
Print this help message and exit.

`-a, --abi TEXT`  
The ABI for the contract relative to contract-dir.

`-c, --clear`  
Remove contract on an account.

`--suppress-duplicate-check`  
Don't check for duplicate.

`-x, --expiration TEXT`  
Set the time in seconds before a transaction expires, defaults to 30s.

`-f, --force-unique`  
Force the transaction to be unique. This will consume extra bandwidth and remove any protections against accidentally issuing the same transaction multiple times.

`-s, --skip-sign`  
Specify if unlocked wallet keys should be used to sign transaction.

`-j, --json`  
Print result as JSON.

`--json-file TEXT`  
Save result in JSON format into a file.

`-d, --dont-broadcast`  
Don't broadcast transaction to the network (just print to stdout).

`--return-packed`  
Used in conjunction with `--dont-broadcast` to get the packed transaction.

`-r, --ref-block TEXT`  
Set the reference block num or block id used for TAPOS (Transaction as Proof-of-Stake).

`--use-old-rpc`  
Use old RPC `push_transaction`, rather than new RPC `send_transaction`.

`--use-old-send-rpc`  
Use old RPC `send_transaction`, rather than new RPC `/v1/chain/send_transaction2`.

`-p, --permission TEXT ...`  
An account and permission level to authorize, as in `'account@permission'` (defaults to `'account@active'`).

`--max-cpu-usage-ms UINT`  
Set an upper limit on the milliseconds of CPU usage budget for the execution of the transaction (defaults to `0`, which means no limit).

`--max-net-usage UINT`  
Set an upper limit on the net usage budget, in bytes, for the transaction (defaults to `0`, which means no limit).

`--delay-sec UINT`  
Set the `delay_sec` seconds, defaults to `0s`.

`-t, --return-failure-trace BOOLEAN`  
Return partial traces on failed transactions.

`--retry-irreversible BOOLEAN`  
Request node to retry transaction until it is irreversible or expires, blocking call.

`--retry-num-blocks UINT`  
Request node to retry transaction until in a block of given height, blocking call.

## Example

[company-contract](/docs/smart-contract-development/company-contract#4-deploy-the-contract)
