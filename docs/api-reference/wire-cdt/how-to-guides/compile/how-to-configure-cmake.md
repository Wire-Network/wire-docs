<!-- ---
title: How to configure CMake
--- -->

## Overview

This guide provides instructions how to configure CMake.

## Before you begin

* You have installed CMake, for detailed instructions consult the official [CMake installation page](https://CMake.org/install/).

## Procedure

The following steps show:

* [Overview](#overview)
* [Before you begin](#before-you-begin)
* [Procedure](#procedure)
  * [Automatic generation of CMake configuration](#automatic-generation-of-cmake-configuration)
  * [Manual generation of CMake configuration](#manual-generation-of-cmake-configuration)

### Automatic generation of CMake configuration

To compile a smart contract project with CMake, you'll need a CMake file. To use the new `cdt-init` tool to generate the directory structure stub `.hpp/.cpp` files and the CMake configuration files follow these steps:

   ```sh
   cd ~
   cdt-init --path=. --project=test_contract
   cd test_contract
   cd build
   cmake ..
   make
   ls -al test_contract
   ```

At this point, you'll have the `test_contract.abi` and `test_contract.wasm` files in `~/test_contract/test_contract`. These files are ready to be deployed.

### Manual generation of CMake configuration

To create manually the CMake configuration, the template `CMakeLists.txt` in the examples folder is a good boilerplate for manual usage.

1. In `CMakeLists.txt`:

   ```sh
   cmake_minimum_required(VERSION 3.5)
   project(test_example VERSION 1.0.0)

   find_package(cdt)

   add_contract( test test test.cpp )
   ```

2. In `test.cpp`:

   ```c++
   #include <sysio/sysio.hpp>
   using namespace sysio;

   class [[sysio::contract]] test : public sysio::contract {
   public:
      using contract::contract;

      [[sysio::action]] void testact( name test ) {
      }
   };
   ```

3. The following CMake macros are provided:

* `add_contract` is used to build your smart contract and generate an ABI. The first parameter is the contract name, the second is the CMake target name, and the rest are the CPP files needed to build the contract.

* `target_ricardian_directory` can be used to add the directory where your ricardian contracts live to a specific CMake target.

* `add_native_library` and `add_native_executable` are CMake macros for the native tester. They are drop in replacements for `add_library` and `add_executable`.
