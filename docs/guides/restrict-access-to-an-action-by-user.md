---
title: How To Perform Authorization Checks
---

# Overview

This guide provides instructions how to perform authorization checks in a smart contract.

## Prerequisites

1. You have the sources of a contract with a `hi` action defined and implemented.
2. The `hi` action has defined one input parameter `user` of type `name`.

## Steps

Get the [`hello-world-contract` source code](https://github.com/Wire-Network/guides/tree/master/hello-world-contract). For more information on how to build and deploy the contract, refer to the [hello-world-contract guide](/docs/smart-contract-development/hello-world-contract-short.md).

The following methods can be used to check authorization for the `user` account in the `hi` action. All methods ensure that only account passed as argument to the action can execute the action.

### Method 1: `check(has_auth(...))`

#### Key Difference

Allows custom error messages while accepting _any_ permission level.

```cpp title="guides/hello-world-contract/hello.cpp"
#include <hello.hpp>

void hello::hi(name user) {
    check(has_auth(user), "User is not authorized to perform this action.");

    print("Hello, ", user);
}
```

#### Example - `check(has_auth(...))`

```txt
sudo clio push action hello hi '["alice"]' -p bob@active

failed transaction: 04d5e1f811ff16a7ba4f7934961f85e86a15c1a4e67e533abf14cf68c960a658  <unknown> bytes  <unknown> us
error [timestamp]T13:52:31.978 clio      main.cpp:699                  print_result         ] soft_except->to_detail_string(): 3050003 sysio_assert_message_exception: sysio_assert_message assertion failure
assertion failure with message: User is not authorized to perform this action.
    {"s":"User is not authorized to perform this action."}
    nodeop  cf_system.cpp:14 sysio_assert
hello <= hello::hi pending console output: 
    {"console":"","account":"hello","action":"hi","receiver":"hello"}
    nodeo
```

### Method 2: `require_auth()`

#### Key Difference

Similar to `check(has_auth(...))`, but uses generic error messages.

```cpp title="guides/hello-world-contract/hello.cpp"
#include <hello.hpp>

void hi( name user ) {
   require_auth( user );
   print( "Hello, ", user );
}
```

#### Example - plain `require_auth`

```txt
clio push action hello hi '["alice"]' -p bob@active

failed transaction: 05f8ddc0001d8eb5ee152e687871e131d6c8033f2066ab5c454d8aa5771a3e9a  <unknown> bytes  <unknown> us
error [timestamp]T13:28:32.697 clio      main.cpp:699                  print_result         ] soft_except->to_detail_string(): 3090004 missing_auth_exception: Missing required authority
missing authority of alice
```

You could also use `require_auth` to restrict access to a specific permission level (e.g., only `active` permission).

```cpp title="guides/hello-world-contract/hello.cpp"
#include <hello.hpp>

void hello::hi(name user) {
   require_auth(permission_level{user, "active"_n});
   print("Hello, ", user);
}

```

#### Example - `require_auth` with specific permission level

```txt
clio push action hello hi '["bob"]' -p bob@owner 

failed transaction: 8b815490718d3e53ddc22db06d433a7265f5a9475d501f0aedf04aafb3e1d075  <unknown> bytes  <unknown> us
error [timestamp]T13:29:35.740 clio      main.cpp:699                  print_result         ] soft_except->to_detail_string(): 3090004 missing_auth_exception: Missing required authority
missing authority of bob/active
```
