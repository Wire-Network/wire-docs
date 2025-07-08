---
title: How To Perform Authorization Checks
---

# Overview

This guide provides instructions how to perform authorization checks in a smart contract.

## Prerequisites

1. You have the sources of a contract with a `hi` action defined and implemented.
2. The `hi` action has defined one input parameter `user` of type `name`.

## Steps

Refer to the [hello contracts source code](https://github.com/wire-io/wire-contracts/blob/main/contracts/hello/hello.cpp) for the complete example.

The following steps show how to check authorization for `user` account for the `hi` action. There are three ways to accomplish an authorization check in a smart contract action implementation. You can use any of the methods provided below depending on your needs:

### 1. Use check(has_auth(...)...)

The following code example enforces the action `hi` to be executed only by the account that is sent as parameter to the action, no matter what permission the account uses to sign the transaction (e.g. owner, active, code).

```cpp
#include <capi/sysio/action.h>

void hi( name user ) {
   check(has_auth(user), "User is not authorized to perform this action.");
   print( "Hello, ", name{user} );
}
```

### 2. Use `require_auth`

The below code enforces the action `hi` to be executed only by the account that is sent as parameter to the action, no matter what permission the account uses to sign the transaction (e.g. owner, active, code).

```cpp
void hi( name user ) {
   require_auth( user );
   print( "Hello, ", name{user} );
}
```

:::info
| Note that this time you can not customize the yielded error message, it will be a generic authorization error message.
:::

### 3. Use `require_auth2`

The below code is enforces the action `hi` to be executed only by the account that is sent as parameter to the action and only if the permission used to sign the transaction is the 'active' one. In other words, if the same user uses the transaction with a different permission (e.g. code, owner) the execution of the action is halted.

```cpp
#include <capi/sysio/action.h>

void hi( name user ) {
   require_auth2(user.value, "active"_n.value);
   print( "Hello, ", name{user} );
}
```

:::info
| Note that this time, as well as previous method, you can not customize the yielded error message, it will be a generic authorization error message.
:::
