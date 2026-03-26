---
title: Compile a Smart Contract via CLI
tags:
  - guide
  - compilation
  - CLI
---

## Overview

This guide provides instructions for compiling a smart contract using the command line interface (CLI).

## Prerequisites

- Before proceeding, ensure that **you have completed the Getting Started section** and that you have followed the [Getting Started Documentation Diagram](/docs/getting-started/getting-started-intro.md).
- This page assumes you are familiar with [Smart Contract Basics](/docs/smart-contract-development/smart-contract-basics).
- You have the source of the contract of [hello example contract](https://github.com/Wire-Network/wire-cdt/tree/master/examples/hello) saved in a local folder, e.g., `./examples/hello/`.

:::info
This contract is a slightly longer version of [Quick Start: Hello World Contract](/docs/smart-contract-development/hello-world-contract-short.md).
:::

## Steps

Complete the following steps to compile a smart contract using the CLI:

### 1. Navigate to the Contract Directory

Navigate to the hello folder in examples (`./examples/hello`). You should see the `./src/hello.cpp` file.

### 2. Create Build Directory

Create a build directory and navigate to it:

```bash
mkdir build
cd build
```

### 3. Compile the Contract

Run the following command to compile the contract:

```bash
cdt-cpp ../src/hello.cpp -o hello.wasm -I ../include/
```

This command compiles the input CPP source file (`../src/hello.cpp`) and generates a WASM file named `hello.wasm`. The `-I ../include/` flag specifies the include folder path for header files.

### 4. Verify Generated Files

After successful compilation, verify that the following two files were generated:

- **Compiled binary WASM**: `hello.wasm`
- **Generated ABI file**: `hello.abi`

## Reference

Relevant tools and methods:

- The [`cdt-cpp` compiler](https://github.com/Wire-Network/wire-cdt/blob/master/tools/cdt-cpp).

## Next Steps

- [Compile with CMake](./compile-contract-with-cmake) for build system integration.
