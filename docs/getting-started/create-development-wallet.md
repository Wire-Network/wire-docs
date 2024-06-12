---
sidebar_position: 2
id: create-development-wallet
---


# Create Development Wallet

Wallets store public-private key pairs, which are needed for signing operations performed on the blockchain. They can be accessed through the use of `cleos` command line tool.

## Create a Wallet

To create a wallet using Cleos, you can either print the password to the console or save it in a specific file. For simplicity and recommended **only for development**, use the `--to-console` option:

<!-- ```jsx title="/src/components/HelloCodeTitle.js"
function HelloCodeTitle(props) {
  return <h1>Hello, {props.name}</h1>;
}
``` -->

```bash
cleos wallet create --to-console
```

For production environments, it is safer to use the `--file` option to avoid having your wallet password recorded in your bash history:

```bash
cleos wallet create --file my-secret-pass.txt
```

In both cases, ensure you save the password securely, as it will be needed later in the tutorial.

> **Note the location of the password. You will need it later**.

## Open the Wallet

Wallets are closed by default when starting a `keosd` instance, to begin, run the following

```bash
cleos wallet open
```

Run the following to return a list of wallets.

```bash
cleos wallet list
```

and it will return

```bash
Wallets:
[
  "default"
]
```

## Unlock a Wallet

The `keosd` wallet(s) have been opened, but is still locked.

```bash
cleos wallet unlock
```

You will be prompted for your wallet password you saved earlier, paste it and press enter.

Execute the command below:

```bash
cleos wallet list
```

This should output the following result:

```bash
Wallets:
[
  "default *"
]
```

The asterisk (*) next to the name means that the wallet is currently unlocked.

## Import keys into your wallet​

Generate a private key, `cleos` has a helper function for this, just run the following.

```bash
cleos wallet create_key
```

It will return something like..

```bash
Created new private key with a public key of: "EOS8PEJ5FM42xLpHK...X6PymQu97KrGDJQY5Y"
```

## Import the Development Key​

Every new Wire chain has a default system user called `eosio`. This account is used to setup the chain by loading system contracts that dictate the governance and consensus of the Wire chain. Every new Wire chain comes with a development key, and this key is the same. Load this key to sign transactions on behalf of the system user `eosio`.

```bash
cleos wallet import
```

You'll be prompted for a private key, enter the eosio development key provided below

```bash
5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3
```

**IMPORTANT**

Never use the development key for a production account! Doing so will most certainly result in the loss of access to your account, this private key is publicly known.

Wonderful, you now have a default wallet unlocked and loaded with a key, and are ready to proceed.
