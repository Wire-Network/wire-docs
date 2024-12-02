# List Key Pairs

## Prerequisites

* Install the currently supported version of `clio`

:::info
| The `clio` tool is bundled with the Wire software. [Installing Wire Core](../../../../getting-started/install-dependencies.md) will also install the clio tool.
:::

* Understand [public](../../../../introduction/glossary.md#public-key) and [private key](../../../../introduction/glossary.md#private-key).

## Steps

Unlock your wallet

```sh
clio wallet unlock
```

List all public keys:

```sh
clio wallet keys
```

List all key pairs:

```sh
clio wallet private_keys

```

:::danger
| You should never ever reveal your private keys in a production enviroment!
:::
