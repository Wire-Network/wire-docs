---
id: code
title: code
---

## Command

```sh
clio get code name [OPTIONS]
```

## Description

Retrieves the code and ABI for an account.

## Synopsis

```sh
clio get code
  name <TEXT>             # REQUIRED: The name of the account whose code should be retrieved
  [-c, --code] <TEXT>     # The name of the file to save the contract .wast to
  [-a, --abi] <TEXT>      # The name of the file to save the contract .abi to
  [--wasm]                # Save contract as wasm
  [-h, --help]            # Print this help message and exit
```

## Examples

### Output the hash of `sysio.token` contract

```sh
clio get code sysio.token
```

**Output:**

```console
code hash: 92d0fa227e2ebe492d40f88ed12ad0ebab627080830727c5b0c0021246e58955
```

---

### Retrieve and save contract's ABI to a file

```sh
clio get code sysio.token -a sysio.token.abi
```

**Output:**

```console
code hash: 92d0fa227e2ebe492d40f88ed12ad0ebab627080830727c5b0c0021246e58955
saving abi to sysio.token.abi
```

---

### Retrieve and save wast code for `sysio.token` contract

```sh
clio get code sysio.token -c sysio.token.wast
```

**Output:**

```console
code hash: 92d0fa227e2ebe492d40f88ed12ad0ebab627080830727c5b0c0021246e58955
saving wast to sysio.token.wast
```
