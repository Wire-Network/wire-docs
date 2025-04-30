# How to create, issue and transfer a token

## Overview

This guide will walk you through the process of creating, issuing, and transferring a native token using the `sysio.token` contract. The steps include creating a new token, issuing it to an account, and transferring it to another account.

## Prerequisites

- You have successfully installed Wire Sysio and Wire CDT on your computer and you have a local chain running. See [Install Dependencies & Start a local node](/docs/getting-started/install-dependencies.md) article.
- You have also completed [Manage Local Wallet with clio](/docs/getting-started/manage-local-wallet-with-clio.md) guide.
  
- You have unlocked your wallet.

:::warning[REMINDER]
The install process has already set up the wallet for the *root* user. To interact with clio, ensure **you are on the root user**. Run `sudo su -` to switch to the root user before proceeding with the tutorial.
:::

:::info
The example below assumes you have access to a **local chain** and you have authority over `sysio` and `sysio.token` key pairs.
:::

## Steps

### Step 1: Verify `sysio.token` exists

```sh
clio get account sysio.token
```

Expected output:

```txt
permissions: 
     owner     1:    1 DON6urbtj44rc7yw7UTvmFiPWxsxEBqMfEFWUiJsoz4NgT5LmiFGY
        active     1:    1 DON6urbtj44rc7yw7UTvmFiPWxsxEBqMfEFWUiJsoz4NgT5LmiFGY

permission links: 
     sysio.any: 

memory: 
     quota:       unlimited  used:       504 bytes

net bandwidth: 
     used:               unlimited
     available:          unlimited
     limit:              unlimited

cpu bandwidth:
     used:               unlimited
     available:          unlimited
     limit:              unlimited

subjective cpu bandwidth:
     used:                 0 us  
```

### Step 5: Create the Token

```sh
clio push action sysio.token create '[ "sysio", "10.0000 DON"]' -p sysio.token@active
```

Below is an alternate approach uses named arguments:

```sh
clio push action sysio.token create '{"issuer":"sysio", "maximum_supply":"10.0000 DON"}' -p sysio.token@active
```

:::info
This command creates a new token `DON` with a precision of 4 decimals and a maximum supply of 10.0000 DON. This action requires authorization from the `sysio.token` contract, which is why we include the `-p sysio.token@active` flag to provide the necessary permission.
:::

#### Expected output

```sh
executed transaction: 0e49a421f6e75f4c5e09dd738a02d3f51bd18a0cf31894f68d335cd70d9c0e12  120 bytes  1000 cycles
#   sysio.token <= sysio.token::create          {"issuer":"sysio","maximum_supply":"10.0000 DON"}
```

### Step 6: Issue Tokens

The issuer can issue new tokens to the issuer account, in our case - `sysio`.

```sh
clio push action sysio.token issue '[ "sysio", "1.0000 DON", "memo" ]' -p sysio@active
```

#### Expected output

```sh
executed transaction: a26b29d66044ad95edf0fc04bad3073e99718bc26d27f3c006589adedb717936  128 bytes  337 us
#   sysio.token <= sysio.token::issue           {"to":"sysio","quantity":"1.0000 DON","memo":"memo"}
warning: transaction executed locally, but may not be confirmed by the network yet         ]
```

### Step 7: Transfer Tokens

Now let's transfer some of `sysio`'s tokens to `bob`'s account.

```sh
clio push action sysio.token transfer '[ "sysio", "bob", "0.2500 DON", "memo" ]' -p sysio@active
```

#### Expected output

```sh
executed transaction: 60d334850151cb95c35fe31ce2e8b536b51441c5fd4c3f2fea98edcc6d69f39d  128 bytes  497 us
#   sysio.token <= sysio.token::transfer        {"from":"sysio","to":"bob","quantity":"0.2500 DON","memo":"m"}
#         sysio <= sysio.token::transfer        {"from":"sysio","to":"bob","quantity":"0.2500 DON","memo":"m"}
#           bob <= sysio.token::transfer        {"from":"sysio","to":"bob","quantity":"0.2500 DON","memo":"m"}
warning: transaction executed locally, but may not be confirmed by the network yet         ]
```

Verify that `bob` received the tokens using [clio get currency balance](../../tooling/clio/command-reference/get/currency-balance.md)

```sh
clio get currency balance sysio.token bob DON
```

**Expected output:**

```text
0.2500 DON
```

Check `sysio`'s balance and verify that tokens were indeed deducted from the account's balance.

```sh
clio get currency balance sysio.token sysio DON
```

**Expected output:**

```text
0.7500 DON
```
