---
id: code
---

## Description

Retrieves the code and ABI for an account.

## Positional Arguments

- `name` _TEXT_ - The name of the account whose code should be retrieved

## Options

- `-c,--code` _TEXT_ - The name of the file to save the contract _.wast_ to
- `-a,--abi` _TEXT_ - The name of the file to save the contract _.abi_ to
- `--wasm` Save contract as wasm

## Examples

- To output the hash of `sysio.token` contract, run:

```sh
clio get code sysio.token
```

```console
code hash: 92d0fa227e2ebe492d40f88ed12ad0ebab627080830727c5b0c0021246e58955
```

- To retrieve and save contract's ABI to a file, run:

```sh
clio get code sysio.token -a sysio.token.abi
```

```console
code hash: 92d0fa227e2ebe492d40f88ed12ad0ebab627080830727c5b0c0021246e58955
saving abi to sysio.token.abi
```

- To retrieve and save wast code for `sysio.token` contract, run:

```sh
clio get code sysio.token -c sysio.token.wast
```

```console
code hash: 92d0fa227e2ebe492d40f88ed12ad0ebab627080830727c5b0c0021246e58955
saving wast to sysio.token.wast
```
