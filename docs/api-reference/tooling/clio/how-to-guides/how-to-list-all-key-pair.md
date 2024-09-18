## Goal

List all key pairs

## Before you begin

* Install the currently supported version of `clio`

* Understand the following:
  * What is a public and private key pair

## Steps

Unlock your wallet

```sh
clio wallet unlock
```

List all public keys:

```sh
clio wallet keys
```

List all private keys:

```sh
clio wallet private_keys

```

:::warning
| Be careful never reveal your private keys in a production enviroment.
:::