---
sidebar_position: 2
id: hello-world-contract-short
title: "Hello World Contract"
---

# Hello World Contract

## Prerequisites

- [Installation and Development Environment Setup](../getting-started/getting-started-intro.md).
- This page assumes you are familiar with [Smart Contract Basics](./smart-contract-basics.md).


## Step-by-Step Guide to Using the "Hello World" Smart Contract from an Existing GitHub Repository

### 1. Clone the Contract Repository

Start by cloning the existing GitHub repository containing the Hello World contract to your local environment:

```bash
git clone https://github.com/Wire-Network/guides.git
cd guids/hello-world-contract
```

### 2. Compile the Contract

Compile the Hello World contract into WebAssembly (WASM) format using the EOSIO Contract Development Toolkit (CDT):

```bash
eosio-cpp -abigen -contract hello -o hello/hello.wasm src/hello.cpp -I include
```

This command also automatically generates the ABI file necessary for interacting with the blockchain.

### 3. Set Up Your Contract Directory

Navigate to your contracts directory and ensure the compiled contract files (`hello.wasm` and `hello.abi`) are correctly placed:

```bash
mkdir -p CONTRACTS_DIR/hello
cp hello/*.wasm hello/*.abi CONTRACTS_DIR/hello/
```

Replace `CONTRACTS_DIR` with the path to your contracts directory.

### 4. Deploy the Contract

Before deploying, ensure you have an EOSIO account to deploy the contract to. Create an account if necessary:

```bash
cleos create account eosio hello YOUR_PUBLIC_KEY -p eosio@active
```

Replace `YOUR_PUBLIC_KEY` with your actual public key. Then deploy the compiled contract:

```bash
cleos set contract hello CONTRACTS_DIR/hello -p hello@active
```

### 5. Execute the Contract

Invoke the `hi` action with the contract:

```bash
cleos push action hello hi '["bob"]' -p bob@active
```

This command triggers the `hi` action for the user "bob", and if authorized by "bob", it prints "Hello, bob".

### 6. Handling Errors

If there's a mismatch between the authorizing user and the user parameter, the contract will not execute due to the `require_auth` check:

```bash
cleos push action hello hi '["alice"]' -p bob@active
```

This will result in an authorization error since "bob" is trying to execute an action that requires "alice"'s permission.

---
