# List Key Pairs

## Prerequisites

* Install the currently supported version of `clio`

:::info
| The `clio` tool is bundled with the Wire software. [Installing Wire Core](/docs/getting-started/install-dependencies.md) will also install the clio tool.
:::

:::warning[REMINDER]
The install process has already set up the wallet for the *root* user. To interact with clio, ensure **you are on the root user**. Run `sudo su -` to switch to the root user.
:::

* Understand [public](/docs/introduction/glossary.md#public-key) and [private key](/docs/introduction/glossary.md#private-key).

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
