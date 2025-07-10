---
id: how-to-deploy-a-smart-contract
---

# Deploy a Smart Contract

## Overview

This guide provides instructions to deploy a smart contract.

## Prerequisites

* Install the currently supported version of `clio`

:::info
| The `clio` tool is bundled with the Wire software. [Installing Wire Core](/docs/getting-started/install-dependencies.md) will also install the clio tool.
:::

:::warning[REMINDER]
The install process has already set up the wallet for the *root* user. To interact with clio, ensure **you are on the root user**. Run `sudo su -` to switch to the root user.
:::

* Make sure your wallet is unlocked.

```sh
clio wallet unlock --name=default --password "$(cat path/to/password-file)"
```

## Steps

Execute:

```sh
clio set contract <contract_account> <contract_folder> [wasm-file] [abi-file]
```

Replace the `contract_folder` with the path that points to your contract folder.

:::info[Default contract name]
| By default, `clio` treats the last folder specified in `contract_folder` as the contract name. Therefore, it expects `.wasm` and `.abi` files with that contract name as filename. This can be overridden with the optional `wasm-file` and `abi-file` parameters.
:::

## Reference

* [`clio set contract`](/docs/api-reference/tooling/clio/command-reference/set/set-contract.md)
