---
id: how-to-deploy-a-smart-contract
---

# Deploy a Smart Contract

## Prerequisites

* Install the currently supported version of `clio`

:::info
| The `clio` tool is bundled with the Wire software. [Installing Wire Core](/docs/getting-started/install-dependencies.md) will also install the clio tool.
:::

* Unlock your wallet

`clio wallet unlock --name=default --password "$(cat path/to/password-file)"`

## Steps

Execute:

```sh
clio set contract contract_account contract_folder [wasm-file] [abi-file]
```

Replace the `contract_folder` with the path that points to your contract folder.

:::info[Default contract name]
| By default, `clio` treats the last folder specified in `contract_folder` as the contract name. Therefore, it expects `.wasm` and `.abi` files with that contract name as filename. This can be overridden with the optional `wasm-file` and `abi-file` parameters.
:::

## Reference

* [`clio set contract`](/docs/api-reference/tooling/clio/command-reference/set/set-contract.md)
