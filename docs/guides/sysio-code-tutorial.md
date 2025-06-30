---
id: sysio-code-tutorial
title: sysio.code Tutorial
---

## Overview

The `sysio.code` permission is used to allow a contract account to execute inline actions using its active permission.

## What is `sysio.code`?

The `sysio.code` permission is a special authority flag that enables a smart contract on the account to authorize inline actions, which is required when those actions modify the blockchain state.

## Prerequisites

* Install the currently supported version of `clio`.

:::note
| The `clio` tool is bundled with the Wire software. [Installing Wire Sysio](/docs/getting-started/install-dependencies.md) will install the `clio` and `kiod` command line tools.
:::

* You have access to a local Wire node.
* You have a `sysio` account and access to the account's private key.
* You have created an account (e.g., `alice`) and imported its private key.
* You are familiar with the basic `clio set account` commands. For reference, see [set account] /tooling/clio/command-reference/set/set-account.md).

:::warning[REMINDER]
The install process has already set up the wallet for the *root* user. To interact with clio, ensure **you are on the root user**. Run `sudo su -` to switch to the root user before proceeding with the tutorial.
:::

## Step 1: Check the Current Permission

Before adding the `sysio.code` permission, check the current permission authority for your account. You can use the following command:

```shell
clio get account alice
```

## Step 2: Add sysio.code permission to `alice`s account

To enable inline actions for your contract, you need to add the `sysio.code` permission to the desired permission (typically `active`). Use this command:

```shell
clio set account permission alice active --add-code -p alice@active
```

**Where:**

* `alice` is the account you want to update.
* `active` is the permission where you want to add `sysio.code`.
* `--add-code` instructs the command to include the code permission.
* `-p alice@active` authorizes the transaction using the account’s active permission.

**Example Output:**

```shell
executed transaction: ab5752ecb017f166d56e7f4203ea02631e58f06f2e0b67103b71874f608793e3  160 bytes  231 us
#         sysio <= sysio::updateauth            {"account":"alice","permission":"active","parent":"owner", ... }
```

## Step 3: Verify the Permission Update

After adding the permission, run the following:

```shell
clio get account alice
```

Check that the `active` permission now lists `sysio.code`.

```txt
created: 2025-06-30T18:01:49.000
permissions: 
     owner     1:    1 SYS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV
        active     1:    1 SYS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV, 1 alice@sysio.code

permission links: 
     sysio.any: 

memory: 
     quota:         0 bytes  used:         0 bytes

net bandwidth:  
     used:                 0 bytes
     available:            0 bytes
     limit:                0 bytes

cpu bandwidth:
     used:                 0 us   
     available:            0 us   
     limit:                0 us   

subjective cpu bandwidth:
     used:                 0 us   
```

## Step 4: Deploy a Contract That Uses Inline Actions

Create a simple contract that sends an inline action back to the same account.

```sh
mkdir -p inline-contract && touch inline-contract/inlinecontract.cpp && cd inline-contract
```

Add the following code to `inlinecontract.cpp`:

```cpp
#include <sysio/sysio.hpp>

class [[sysio::contract]] inlinecontract : public sysio::contract {
public:
   using sysio::contract::contract;

   [[sysio::action]]
   void testinl(name user) {
      sysio::action(
         sysio::permission_level{ get_self(), "active"_n },
         get_self(),
         "inlinecall"_n,
         std::make_tuple(user)
      ).send();
   }

   [[sysio::action]]
   void inlinecall(name user) {
      sysio::print("Inline action executed for: ", user);
   }
};
```

### Build the Contract

Compile the contract using the Wire CDT. Run:

```sh
cdt-cpp -abigen  -contract inlinecontract -o inlinecontract/inlinecontract.wasm inlinecontract.cpp -I include
```

### Create a Contract Account and Deploy the Contract

Create an account called  `inlinectr`:

```sh
clio create account sysio inlinectr SYS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV SYS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV -p sysio@active
```

Then, deploy your contract by setting the contract code on your account:

```sh
clio set contract inlinectr inline-contract -p inlinectr
```

Give `inlinectr` a policy:

```sh
clio push action sysio.roa addpolicy '{"owner": inlinectr, "issuer": nodedaddy, "netWeight": "0.0100 SYS", "cpuWeight": "0.0100 SYS", "ramWeight": "0.0100 SYS", "timeBlock": 1, "networkGen": 0 }' -p nodedaddy@active
```

## Step 6: Test the Inline Actions

Now that your contract is deployed with inline action capability, test it by pushing actions.

### Execute the `testinl` Action

The `testinl` action triggers an inline call to the `inlinecall` action. To test, run:

```sh
clio push action inlinectr testinl '["alice"]' -p inlinectr@active
```

If everything is set up correctly, you should see output indicating that the inline action was executed.

```sh

executed transaction: 1d00f751c6fb6c7a2636eecc7fec4b2d4e0baf7066cfa84e800b3d31c6890537  104 bytes  237 us
#     inlinectr <= inlinectr::testinl           {"user":"alice"}
#     inlinectr <= inlinectr::inlinecall        {"user":"alice"}
>> Inline action executed for: alice
warning: transaction executed locally, but may not be confirmed by the network yet         ] 
```
