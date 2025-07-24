---
title: How to Configure CMake
---

## Overview

This guide provides instructions for configuring CMake for smart contract compilation.

## Prerequisites

- Before proceeding, ensure that **you have completed the Getting Started section** and that you have followed the [Getting Started Documentation Diagram](/docs/getting-started/getting-started-intro.md).
- This page assumes you are familiar with [Smart Contract Basics](/docs/smart-contract-development/smart-contract-basics).
- You have installed CMake. For detailed instructions, consult the official [CMake installation page](https://cmake.org/install/).
- You have the source of the contract of [hello example contract](https://github.com/Wire-Network/wire-cdt/tree/master/examples/hello) saved in a local folder, e.g., `./examples/hello/`.

## Steps

Complete the following steps to configure CMake for your smart contract project:

### 1. Automatic Generation of CMake Configuration

To compile a smart contract project with CMake, you'll need a CMake file. Use the `cdt-init` tool to generate the directory structure stub `.hpp/.cpp` files and the CMake configuration files:

```bash title="Terminal"
cd ~
cdt-init --path=. --project=test_contract
cd test_contract
cd build
cmake ..
make
ls -al test_contract
```

At this point, you'll have the `test_contract.abi` and `test_contract.wasm` files in `~/test_contract/test_contract`. These files are ready to be deployed.

### 2. Manual Generation of CMake Configuration

To create the CMake configuration manually, the template `CMakeLists.txt` in the examples folder is a good boilerplate for manual usage.

#### Create CMakeLists.txt

```cmake title="CMakeLists.txt"
cmake_minimum_required(VERSION 3.5)
project(test_example VERSION 1.0.0)

find_package(cdt)

add_contract( test test test.cpp )
```

#### Create the Contract Source File

```cpp title="test.cpp"
#include <sysio/sysio.hpp>
using namespace sysio;

class [[sysio::contract]] test : public sysio::contract {
public:
    using contract::contract;

    [[sysio::action]] void testact( name test ) {
    }
};
```

### 3. Available CMake Macros

The following CMake macros are provided:

- **`add_contract`**: Used to build your smart contract and generate an ABI. The first parameter is the contract name, the second is the CMake target name, and the rest are the CPP files needed to build the contract.

- **`target_ricardian_directory`**: Can be used to add the directory where your Ricardian contracts live to a specific CMake target.

- **`add_native_library`** and **`add_native_executable`**: CMake macros for the native tester. They are drop-in replacements for `add_library` and `add_executable`.

:::info
A full example project demonstrating CMake configuration can be found in the [`hello example` project](https://github.com/Wire-Network/wire-cdt/blob/master/examples/hello).
:::

## Reference

Relevant tools and methods:

- The [`cdt-init` tool](https://github.com/Wire-Network/wire-cdt/blob/master/tools/cdt-init).
- The [`CMake` build system](https://cmake.org/).

## Next Steps

- [Compile with CMake](./compiling-contracts-with-cmake) using your configuration.
- [Compile via CLI](./compile-a-contract-via-cli) for alternative compilation methods.
