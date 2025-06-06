---
sidebar_label: ACTION_RETURN_VALUE
title: ACTION_RETURN_VALUE
sidebar_position: 1
---


## Overview

A Wire blockchain with the `ACTION_RETURN_VALUE` protocol feature activated enables you to return any value from any action. This new feature facilitates easier smart contract implementation debugging, and better messaging between a smart contract and its clients. From now on the clients of a smart contract are able to use the value returned by an action, no more string parsing on the client side and no more print statements in the smart contract implementation.

## Concept

When you implement an action within a smart contract use the `return` statement and pass any value to the action sender. The returned value can be of any C++ primitive type, any C++ standard library type, or any user defined type. The underlying Wire Sysio framework does all the work necessary to serialize the value returned and send it back to the client. On the client side you deserialize the received value and access it the same way you access any other function’s return value.

## Details

The following list provides important details for when you return a value from an action:

* The Wire Sysio framework defines and uses a new intrinsic, namely `set_action_return_value`. To learn more about returned values functionality, refer to its documentation and [implementation](https://github.com/Wire-Network/wire-cdt/blob/master/libraries/native/intrinsics.cpp#L295).
* The CPU time and memory limit of your contract (maximum size of wasm), not RAM or NET, defines the limits of the returned value..
* The action receipt includes a hash of the serialized returned value.
* The action trace includes the serialized returned value.
* If the trace log is enabled, the state history trace logs also store the serialized returned value.
* If the trace API plugin is enabled, the trace api trace logs also store the serialized returned value.
* The returned value is available in the action trace. If the sender is another action, the action trace is not available to the sender action `code`. Therefore the returned value from an inline action can not be read by the action that sent the inline action.
* Also inline actions do not execute synchronously. Inline actions execute at a later time. No return value is available to the sender at the time the inline action is sent.

## Examples

For a full working example of a smart contract action which returns a value, refer to the following resources:

* The [`hello`](https://github.com/Wire-Network/wire-cdt/blob/master/examples/hello/src/hello.cpp#L14) smart contract example, see action `hello::checkwithrv`.
* The [Return values from actions Guide](../../guides/how-to-return-values-from-actions.md).
