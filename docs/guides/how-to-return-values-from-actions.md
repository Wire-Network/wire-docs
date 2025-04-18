# How to Return Values from Actions

## Overview

This article demonstrates how a smart contract developer implements return values from an action.

In order to accomplish this, use the `return` statement and pass the desired returned value, which can be of any C++ primitive type, a standard library type, or a user defined type.

## Before you begin

Make sure you have the following prerequisites in place:

- Setup Wire development environrment, for details consult the [Getting Started](/docs/getting-started/install-dependencies.md).- Before proceeding forward, ensure that **you have completed Getting Started section** and that you have followed [Getting Started Documentation Diagram](/docs/getting-started/getting-started-intro.md).
- This page assumes you are familiar with [Smart Contract Basics](/docs/smart-contract-development/smart-contract-basics).
- A smart contract - `smrtcontract`, which builds without error.
- An action -  `checkwithrv`, from which you want to return a value of a user defined type `action_response`.

:::warning[REMINDER]
The install process sets up the wallet for the *root* user. To interact with clio, ensure **you are on the root user**. Run `sudo su -` to switch to the root user.
:::

Refer to the code below for your starting point:

```cpp
struct action_response
{
  uint16_t id;
  std::pair<int, std::string> status;
};

class [[sysio::contract]] smrtcontract : public contract {
  public:
     using contract::contract;

     [[sysio::action]]
     action_response checkwithrv( name nm );
};
```

## Steps

Complete the following steps to return an instance of `action_response` from the `checkwithrv` action:

1. Create an instance of the `action_response` C++ user defined structure.
2. Initialize its data members based on the action’s business logic.
3. Use `return` statement and pass as a parameter the instance created and initialized in previous steps.

```cpp
[[sysio::action]]
action_response smrtcontract::checkwithrv( name nm ) {
  print_f("Name : %\n", nm);

  // create instance of the action response structure
  action_response results;

  // initialize its data members
  results.id = 1;
  if (nm == "hello"_n) {
     results.status = {0, "Validation has passed."};
  }
  else {
     results.status = {1, "Input param `name` not equal to `hello`."};
  }
  
  // use return statement
  return results; // the `set_action_return_value` intrinsic is invoked automatically here
}
```

For a complete example of a smart contract that implements an action which returns a value see the [hello example contract](https://github.com/Wire-Network/guides/hello-world-contract).

## Next Steps

- Compile the smart contract and deploy it to the Wire testnet or any Wire-based blockchain.
- Use the `clio` command to send the `checkwithrv` action to the smart contract and observe the returned value in the `clio` output.
- Use other means (e.g. programmatically) to send the  `checkwithrv` action to the smart contract and observe the returned value in the action trace.

:::info
The action return values are only available to clients sending the action via the RPC API. Currently, there is no support for an inline action to be able to use the return value, because inline actions don't execute synchronously.
:::

## Summary

In conclusion, the above instructions show how to return values from actions.
