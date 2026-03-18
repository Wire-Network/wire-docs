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
The install process has already set up the wallet for the *root* user. To interact with clio, ensure **you are on the root user**. Run `sudo su -` to switch to the root user.
:::

* Understand [public](/docs/introduction/glossary.md#public-key) and [private](/docs/introduction/glossary.md#private-key) keys.

## Commands

### Create a key pair and print to console

**Legacy format (default):**

```sh
clio create key --to-console
```

**Example Output:**

```sh
Private key: 5JfChKSga69mbeYhQviEBGyUbaTJ4hupULsDh3EMCrExMNnABB9
Public key: SYS6zsBXoPwDA5j674Hq1iSS19WP3fBm35BkXVU3iVrBQhanKGSKB
```

**New format (recommended):**

Use the `--k1` flag to generate keys with the new `PVT_K1_` and `PUB_K1_` prefixes:

```sh
clio create key --k1 --to-console
```

**Example Output:**

```sh
Private key: PVT_K1_9NgM6WJUDNBMY6TePThYjozoRJTHzUsJ9jGrMyLcRPLGAekgg
Public key: PUB_K1_5MRLMBaYQuiYAXVFcc4W3uZ4N4FxzH6qkVg7wm1uvbZ3rFWfXK
```

:::tip
You can also use `--r1` to generate keys using the R1 curve (used by iPhone secure enclave) instead of the K1 curve (Bitcoin-compatible).
:::

### Create a key pair and save to file

```sh
clio create key --file FILE_TO_SAVEKEY
```

**Example Output:**

```sh
Saving keys to FILE_TO_SAVEKEY
```

You can also combine with `--k1` to save the new format keys:

```sh
clio create key --k1 --file my_keys.txt
```

### Create a key directly in wallet

Alternatively, you can create a key pair directly inside your wallet using `clio wallet create_key`:

```sh
clio wallet create_key
```

**Example Output:**

```sh
Created new private key with a public key of: "PUB_K1_7xDsNqjei5ikWPsm7qCvqKGDyDBZtRg7T2YT1tCojALuS33Tb7"
```

This automatically stores the private key in your wallet. Use `K1` as a positional argument to explicitly specify the key type:

```sh
clio wallet create_key K1
```

## Reference

* [clio create key](/docs/api-reference/tooling/clio/command-reference/create/key.md)
* [clio wallet create_key](/docs/api-reference/tooling/clio/command-reference/wallet/create-key.md)
* [Key Formats](/docs/api-reference/tooling/kiod/key-formats.md)
