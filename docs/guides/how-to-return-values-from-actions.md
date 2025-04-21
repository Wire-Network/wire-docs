# How to Return Values from Actions

## Overview

This article demonstrates how a smart contract developer implements return values from an action.

In order to accomplish this, we use the `return` statement and pass the desired returned value, which can be of any C++ primitive type, a standard library type, or a user defined type.

## Prerequisites

- Before proceeding forward, ensure that **you have completed Getting Started section** and that you have followed [Getting Started Documentation Diagram](/docs/getting-started/getting-started-intro.md).
- This page assumes you are familiar with [Smart Contract Basics](/docs/smart-contract-development/smart-contract-basics).

:::warning[REMINDER]
The install process sets up the wallet for the *root* user. To interact with clio, ensure **you are on the root user**. Run `sudo su -` to switch to the root user.
:::

## Steps

### Create the project

```sh
mkdir namecheck-contract && cd namecheck-contract && mkdir include src namecheck && touch include/namecheck.hpp && touch src/namecheck.cpp
```

### Write the code

In the `include/namecheck.hpp` file, define the `namecheck` contract and the `action_response` structure. The `action_response` structure contains two data members: `id` of type `uint16_t` and `status` of type `std::pair<int, std::string>`.

```cpp title="include/namecheck.hpp"
#pragma once
#include <sysio/sysio.hpp>
#include <sysio/print.hpp>

#include <utility>
#include <string>

using namespace sysio;

 struct action_response {
   uint16_t id;
   std::pair<int, std::string> status;

};

class [[sysio::contract("namecheck")]] namecheck : public contract {
public:
   using contract::contract;

   /**
    * checkwithrv — Validate the supplied name.
    *
    * @param nm  The name to compare against.
    * @return  
    */
   [[sysio::action]]
   action_response checkwithrv( name nm );
};
```

In the `src/namecheck.cpp` file, implement the `checkwithrv` action. The action takes a name as input and returns an instance of the `action_response` structure.

```cpp title="src/namecheck.cpp"
#include "namecheck.hpp"

[[sysio::action]]
action_response namecheck::checkwithrv( name nm ) {
   print_f("Name : %\n", nm);

    // create instance of the action response structure
   action_response results;
   // initialize its data members
   results.id = 1;

   if (nm == "hello"_n) {
      results.status = { 0, "Validation has passed." };
   } else {
      results.status = { 1, "Input param `name` is not \"hello\"." };
   }

  // use return statement
  return results; // the `set_action_return_value` intrinsic is invoked automatically here 
}
```

### Build & Deploy the contract

#### Create an account

```sh
clio create account sysio namecheck SYS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV SYS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV  -p sysio@active
```

#### Issue a policy

```sh
clio push action sysio.roa addpolicy '{"owner": namecheck, "issuer": nodedaddy, "netWeight": "0.0100 SYS", "cpuWeight": "0.0100 SYS", "ramWeight": "0.0050 SYS", "timeBlock": 1, "networkGen": 0 }' -p nodedaddy@active
```

#### Build & Deploy

```sh
cdt-cpp --abigen -contract=namecheck -I=./include -o=./namecheck/namecheck.wasm src/namecheck.cpp

clio set contract namecheck ./namecheck -p namecheck@active -x 3600 
```

### Invoke the actions

To invoke the `checkwithrv` action, use the `clio` CLI tool.

```sh
sudo clio push action namecheck checkwithrv '["hello"]' -p bob@active 

sudo clio push action namecheck checkwithrv '["hi", "bob", "I love you"]' -p bob@active
```

See the different messages returned by the two actions

<!-- :::info
The action return values are only available to clients sending the action via the RPC API. Currently, there is no support for an inline action to be able to use the return value, because inline actions don't execute synchronously.
::: -->
