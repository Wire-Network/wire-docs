---
id: how-to-create-a-key-pair
---

# Create a Key Pair

## Prerequisites

* Install the currently supported version of `clio`

:::info
| The `clio` tool is bundled with the Wire software. [Installing Wire Core](/docs/getting-started/install-dependencies.md) will also install the clio tool.
:::

:::warning[REMINDER]
The install process sets up the wallet for the *root* user. To interact with clio, ensure **you are on the root user**. Run `sudo su -` to switch to the root user.
:::

* Understand [public](/docs/introduction/glossary.md#public-key) and [private](/docs/introduction/glossary.md#private-key) key.

## Commands

* To create a keypair and print the result to the console, run:

```sh
clio create key --to-console

Private key: 5KPzrqNMJdr6AX6abKg*******************************cH
Public key: SYS4wSiQ2jbYGrqiiKCm8oWR88NYoqnmK4nNL1RCtSQeSFkGtqsNc
```

* To create a keypair and save it to a file, run:

```sh
clio create key --file FILE_TO_SAVEKEY

Saving keys to pw.txt
```
