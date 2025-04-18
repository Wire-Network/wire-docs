---
id: how-to-import-a-key
---

# Import a Key Pair

## Prerequisites

* Install the currently supported version of `clio`

:::info
| The `clio` tool is bundled with the Wire software. [Installing Wire Core](/docs/getting-started/install-dependencies.md) will also install the clio tool.
:::

:::warning[REMINDER]
The install process sets up the wallet for the *root* user. To interact with clio, ensure **you are on the root user**. Run `sudo su -` to switch to the root user.
:::

* Understand [public](/docs/introduction/glossary.md#public-key) and [private key](/docs/introduction/glossary.md#private-key).

## Steps

```sh
$ clio wallet import
private key: 
```

Enter your private key. Expected output:

```console
private key: imported private key for: SYS8FBXJUfbANf3xeDWPoJxnip3Ych9HjzLBr1VaXRQFdkVAxwLE7
```
