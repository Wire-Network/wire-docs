# Action Wrappers

## Overview

This guide provides instructions to create and use an action wrapper in a smart contract.

## Before you begin

Make sure you have the following prerequisites in place:

* A Wire development environment, for details consult the [Getting Started guide](../../../getting-started/getting-started-intro.md).
* A smart contract named `multi_index_example`, defined in file `multi_index_example.hpp`.
* An action `mod` which modifies the integer value `n` stored for row with key `user`.

Refer to the following reference implementation for your starting point:

```cpp
class [[sysio::contract]] multi_index_example : public contract {
  // ...
  [[sysio::action]] void mod( name user, uint32_t n );
  // ...
}
```

## Procedure

Complete the following steps to create and use `mod_action` action wrapper for the existing `mod` action in the smart contract:

* Action Wrappers
  * [Overview](#overview)
  * [Before you begin](#before-you-begin)
  * [Procedure](#procedure)
    * [1. Define The Action Wrapper](#1-define-the-action-wrapper)
    * [2. Use The Action Wrapper](#2-use-the-action-wrapper)
      * [2.1. Include Header File](#21-include-header-file)
      * [2.2. Instantiate The Action Wrapper](#22-instantiate-the-action-wrapper)
      * [2.3. Send The Action Using The Action Wrapper](#23-send-the-action-using-the-action-wrapper)
  * [Summary](#summary)

### 1. Define The Action Wrapper

To define an action wrapper for the `mod` action, use the `sysio::action_wrapper` template, with  the first parameter the action name as a `sysio::name` and second parameter as the reference to the action method:

```diff
class [[sysio::contract]] multi_index_example : public contract {
  // ...
  [[sysio::action]] void mod(name user);
  // ...
+  using mod_action = action_wrapper<"mod"_n, &multi_index_example::mod>;
  // ...
}
```

### 2. Use The Action Wrapper

#### 2.1. Include Header File

To use the action wrapper, you have to include the header file where the action wrapper is defined:

```cpp
#include <multi_index_example.hpp>
```

#### 2.2. Instantiate The Action Wrapper

Instantiate the `mod_action`. Specify the contract to send the action to as the first argument. In this case, it is assumed the contract is deployed to `multiindexex` account. Specify a structure with two parameters: the self account, obtained by `get_self()` call, and the `active` permission (you can modify these two parameters based on your requirements).

```diff
#include <multi_index_example.hpp>

+multi_index_example::mod_action modaction("multiindexex"_n, {get_self(), "active"_n});
```

#### 2.3. Send The Action Using The Action Wrapper

Call the `send` method of the action wrapper and pass in the `mod` action's parameters as positional arguments:

```diff
#include <multi_index_example.hpp>

multi_index_example::mod_action modaction("multiindexex"_n, {get_self(), 1});

+modaction.send("eostutorial"_n, 1);
```

For a full example see the [multi_index example contract](https://github.com/Wire-Network/cdt/blob/main/examples/multi_index_example).

## Summary

In conclusion, the above instructions show how to create and use action wrapper in a smart contract.
