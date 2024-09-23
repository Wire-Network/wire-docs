---
sidebar_position: 3
id: hello-world-contract-short
title: "Quick Start: Hello World Contract"
---

<!-- # Hello World Contract -->

## Prerequisites

- [Installation and Development Environment Setup](../getting-started/getting-started-intro.md).
- This page assumes you are familiar with [Smart Contract Basics](./smart-contract-basics.md).

## Steps

### 1. Clone the Contract Repository

Start by cloning the existing GitHub repository containing the Hello World contract to your local environment:

```bash
git clone https://github.com/Wire-Network/guides.git && cd guides/hello-world-contract
```

Then open the code into your favorite code editor and inspect the files.

### 2. Compile the Contract

Compile it using the `./build.sh`. This script uses the Wire Contract Development Toolkit (CDT) the Hello World contract into WebAssembly (WASM) format. The script will create a compilation folder `hello/` with the WASM and ABI files.

```bash
./build.sh
```

Upon successful compilation, you will see a `hello` folder with `hello.abi` and `hello.wasm` files.

![compiled-dir](/img/compiled-dir.png)

### 3. Deploy the Contract

Before deploying, ensure you have an account to deploy the contract to. Create an account if necessary and replace `YOUR_PUBLIC_KEY` with your actual public key when you created a wallet(see [Import Keys](../getting-started/create-development-wallet.md#import-keys-into-your-wallet)). Your wallet must be also unlocked before using it(see [Unlock a wallet](../getting-started/create-development-wallet.md#unlock-a-wallet))

### 3.1. Create an account using `clio`

```bash
clio create account sysio hello $PUBLIC_KEY -p sysio@active
```

This command enables the `sysio` system account to create a new account named `hello` on the Wire blockchain. The `-p sysio@active` specifies that the active permission of the `sysio` account is used to authorize the account creation.

### 3.2. Deploy the contract

```bash
./deploy.sh
```

### 5. Push a Transaction

Invoke the `hi` action within the contract:

```bash
clio push action hello hi '["bob"]' -p bob@active
```

This command triggers the `hi` action for the user `bob`, and if authorized by `bob`, it prints "Hello, bob".

![bob-says-hi](/img/bob-say-hi.png)

Repeat the same passing "alice" as data to the action and using the same permissions:

```bash
clio push action hello hi '["alice"]' -p bob@active
```

![bob-invoke-with-alice](/img/bob-execute-alice.png)

### 6. Change the contract code

Next, let's change the contract code by enabling `require_auth()` function and see firsthand how checks and permissions work in contract actions. If there's a mismatch between the authorizing user and the user parameter, the contract will not execute due to the `require_auth` check.

Comment out Line 5 in `hello.cpp`

![require-auth-hw](/img/require-auth-hw.png)

[Recompile](#2-compile-the-contract) and [redeploy](#3-deploy-the-contract) the contract. Then execute:

```bash
clio push action hello hi '["alice"]' -p bob@active
```

This will result in an authorization error since `bob` is trying to execute an action that requires `alice`'s permission.

CLI output:

![missing-authority](/img/missing-authority.png)

---

## Bonus

### Inspect the contract on EOS Authority Block Explorer

Feel free to explore your contract on [EOS Authority](./block-explorer.md), which also provides tools to generate ready-to-use clio commands, making it easier to push transactions and interact with your contracts directly. This is a great way to get hands-on experience and deepen your understanding of smart contracts.

![inspect-hello](/img/be-inspect-hello.png)
