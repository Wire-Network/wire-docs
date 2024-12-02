---
id: how-to-create-a-key-pair
---

# Create a Key Pair

## Prerequisites

* Install the currently supported version of `clio`

:::info
| The `clio` tool is bundled with the Wire software. [Installing Wire Core](../../../../getting-started/install-dependencies.md) will also install the clio tool.
:::

* Understand [public](../../../../introduction/glossary.md#public-key) and [private](../../../../introduction/glossary.md#private-key) key.

## Commands

* To create a keypair and print the result to the console, run:

```sh
clio create key --to-console

Private key: 5KPzrqNMJdr6AX6abKg*******************************cH
Public key: EOS4wSiQ2jbYGrqiiKCm8oWR88NYoqnmK4nNL1RCtSQeSFkGtqsNc
```

* To create a keypair and save it to a file, run:

```sh
clio create key --file FILE_TO_SAVEKEY

Saving keys to pw.txt
```
