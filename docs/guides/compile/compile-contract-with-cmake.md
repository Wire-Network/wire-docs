---
title: Compile A Smart Contract with CMake
---

## Overview

This guide provides instructions for configuring CMake and compiling smart contracts using the CMake build system.

## Prerequisites

- Before proceeding, ensure that **you have completed the Getting Started section** and that you have followed the [Getting Started Documentation Diagram](/docs/getting-started/getting-started-intro.md).
- This page assumes you are familiar with [Smart Contract Basics](/docs/smart-contract-development/smart-contract-basics).
- You have installed CMake. For detailed instructions, consult the official [CMake installation page](https://cmake.org/install/).
- You have the source of the contract saved in a local folder, e.g., `./examples/hello/`.

## Steps

Complete the following steps to configure CMake and compile your smart contract:

### 1. Configure CMake for Your Project

#### Option A: Automatic Generation of CMake Configuration

To compile a smart contract project with CMake, you'll need a CMake file. Use the `cdt-init` tool to generate the directory structure stub `.hpp/.cpp` files and the CMake configuration files:

```bash
cd ~
cdt-init --path=. --project=hello_contract
cd hello_contract
cd build
cmake ..
make
ls -al hello_contract
```

At this point, you'll have the `hello_contract.abi` and `hello_contract.wasm` files in `~/hello_contract/hello_contract`. These files are ready to be deployed.

#### Option B: Manual Generation of CMake Configuration

To create the CMake configuration manually, the template `CMakeLists.txt` in the examples folder is a good boilerplate for manual usage.

**Create CMakeLists.txt:**

```cmake title="CMakeLists.txt"
cmake_minimum_required(VERSION 3.5)
project(hello_example VERSION 1.0.0)

find_package(cdt)

add_contract( hello hello hello.cpp )
```

**Create the Contract Source File:**

```cpp title="hello.cpp"
#include <sysio/sysio.hpp>
using namespace sysio;

class [[sysio::contract]] hello : public sysio::contract {
public:
    using contract::contract;

    [[sysio::action]] void hi( name user ) {
        print_f("Hello, %!\n", user);
    }
};
```

### 2. Navigate to Your Contract Directory

Navigate to the hello folder in examples (`./examples/hello`). You should then see the `./src/hello.cpp` file.

### 3. Create Build Directory and Compile

Run the following commands to create a build directory and compile the contract:

```bash
mkdir build
cd build
cmake ..
make
```

### 4. Verify Generated Files

After successful compilation, verify that the following two files were generated:

- **Compiled binary WASM**: `hello.wasm`
- **Generated ABI file**: `hello.abi`

## Available CMake Macros

The following CMake macros are provided:

- **`add_contract`**: Used to build your smart contract and generate an ABI. The first parameter is the contract name, the second is the CMake target name, and the rest are the CPP files needed to build the contract.

- **`target_ricardian_directory`**: Can be used to add the directory where your Ricardian contracts live to a specific CMake target.

- **`add_native_library`** and **`add_native_executable`**: CMake macros for the native tester. They are drop-in replacements for `add_library` and `add_executable`.

:::info
A full example project demonstrating CMake configuration and compilation can be found in the [`hello example` project](https://github.com/Wire-Network/wire-cdt/blob/master/examples/hello).
:::

## Reference

Relevant tools and methods:

- The [`cdt-init` tool](https://github.com/Wire-Network/wire-cdt/blob/master/tools/cdt-init).
- The [`cdt-cpp` compiler](https://github.com/Wire-Network/wire-cdt/blob/master/tools/cdt-cpp).
- The [`CMake` build system](https://cmake.org/).

## Next Steps

- [Compile via CLI](./compile-contract-via-cli) for alternative compilation methods.
