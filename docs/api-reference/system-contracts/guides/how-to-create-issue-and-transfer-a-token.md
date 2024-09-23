# How to create, issue and transfer a token

## Step 1: Obtain Contract Source

Navigate to your contracts directory.

```sh
cd CONTRACTS_DIR
```

Pull the source

```text
git clone https://github.com/EOSIO/sysio.contracts --branch master --single-branch
```

```sh
cd sysio.contracts/contracts/sysio.token
```

## Step 2: Create Account for Contract

[[info]]
| You may have to unlock your wallet first!

```sh
clio create account sysio sysio.token EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV
```

## Step 3: Compile the Contract

```sh
sysio-cpp -I include -o sysio.token.wasm src/sysio.token.cpp --abigen
```

## Step 4: Deploy the Token Contract

```sh
clio set contract sysio.token CONTRACTS_DIR/sysio.contracts/contracts/sysio.token --abi sysio.token.abi -p sysio.token@active
```

Result should look similar to the one below:

```sh
Reading WASM from ...
Publishing contract...
executed transaction: 69c68b1bd5d61a0cc146b11e89e11f02527f24e4b240731c4003ad1dc0c87c2c  9696 bytes  6290 us
#         sysio <= sysio::setcode               {"account":"sysio.token","vmtype":0,"vmversion":0,"code":"0061736d0100000001aa011c60037f7e7f0060047f...
#         sysio <= sysio::setabi                {"account":"sysio.token","abi":"0e656f73696f3a3a6162692f312e30000605636c6f73650002056f776e6572046e61...
warning: transaction executed locally, but may not be confirmed by the network yet         ]
```

## Step 5: Create the Token

```sh
clio push action sysio.token create '[ "sysio", "1000000000.0000 SYS"]' -p sysio.token@active
```

Result should look similar to the one below:

```sh
executed transaction: 0e49a421f6e75f4c5e09dd738a02d3f51bd18a0cf31894f68d335cd70d9c0e12  120 bytes  1000 cycles
#   sysio.token <= sysio.token::create          {"issuer":"sysio","maximum_supply":"1000000000.0000 SYS"}
```

An alternate approach uses named arguments:

```sh
clio push action sysio.token create '{"issuer":"sysio", "maximum_supply":"1000000000.0000 SYS"}' -p sysio.token@active
```

Result should look similar to the one below:

```sh
executed transaction: 0e49a421f6e75f4c5e09dd738a02d3f51bd18a0cf31894f68d335cd70d9c0e12  120 bytes  1000 cycles
#   sysio.token <= sysio.token::create          {"issuer":"sysio","maximum_supply":"1000000000.0000 SYS"}
```

This command created a new token `SYS` with a precision of 4 decimals and a maximum supply of 1000000000.0000 SYS.  To create this token requires the permission of the `sysio.token` contract. For this reason, `-p sysio.token@active` was passed to authorize the request.

## Step 6: Issue Tokens

The issuer can issue new tokens to the issuer account in our case `sysio`.

```sh
clio push action sysio.token issue '[ "sysio", "100.0000 SYS", "memo" ]' -p sysio@active
```

Result should look similar to the one below:

```sh
executed transaction: a26b29d66044ad95edf0fc04bad3073e99718bc26d27f3c006589adedb717936  128 bytes  337 us
#   sysio.token <= sysio.token::issue           {"to":"sysio","quantity":"100.0000 SYS","memo":"memo"}
warning: transaction executed locally, but may not be confirmed by the network yet         ]
```

## Step 7: Transfer Tokens

Now that account `sysio` has been issued tokens, transfer some of them to account `bob`.

```sh
clio push action sysio.token transfer '[ "sysio", "bob", "25.0000 SYS", "m" ]' -p sysio@active
```

Result should look similar to the one below:

```sh
executed transaction: 60d334850151cb95c35fe31ce2e8b536b51441c5fd4c3f2fea98edcc6d69f39d  128 bytes  497 us
#   sysio.token <= sysio.token::transfer        {"from":"sysio","to":"bob","quantity":"25.0000 SYS","memo":"m"}
#         sysio <= sysio.token::transfer        {"from":"sysio","to":"bob","quantity":"25.0000 SYS","memo":"m"}
#           bob <= sysio.token::transfer        {"from":"sysio","to":"bob","quantity":"25.0000 SYS","memo":"m"}
warning: transaction executed locally, but may not be confirmed by the network yet         ]
```

Now check if "bob" got the tokens using [clio get currency balance](https://developers.eos.io/sysio-clio/reference#currency-balance)

```sh
clio get currency balance sysio.token bob SYS
```

Result:

```text
25.00 SYS
```

Check "sysio's" balance, notice that tokens were deducted from the account

```sh
clio get currency balance sysio.token sysio SYS
```

Result:

```text
75.00 SYS
```
