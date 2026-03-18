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
The install process has already set up the wallet for the *root* user. To interact with clio, ensure **you are on the root user**. Run `sudo su -` to switch to the root user.
:::

* Understand [public](/docs/introduction/glossary.md#public-key) and [private key](/docs/introduction/glossary.md#private-key).
* You have already [created a key pair](/docs/guides/how-to-create-key-pairs.md) or have a private key to import.

## Steps

### Method 1: Interactive import

Run the import command and enter your private key when prompted:

```sh
clio wallet import
```

Enter your private key at the prompt:

```sh
private key:
```

**Example Output:**

```sh
imported private key for: SYS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV
```

### Method 2: Direct import with `--private-key` flag

You can also provide the private key directly on the command line:

**New format (recommended):**

```sh
clio wallet import --private-key PVT_K1_2bfGi9rYsXQSXXTvJbDAPhHLQUojjaNLomdm3cEJ1XTzMqUt3V
```

**Example Output:**

```sh
imported private key for: SYS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV
```

:::note
The import command always outputs the public key in legacy `SYS` format, regardless of which private key format you use.
:::

**Legacy format:**

```sh
clio wallet import --private-key 5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3
```

**Example Output:**

```sh
imported private key for: SYS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV
```

:::note
Both legacy format (`5J...`, `5K...`) and new format (`PVT_K1_...`) private keys are accepted by the import command.
:::

### Import to a specific wallet

If you have multiple wallets, specify which wallet to import into:

```sh
clio wallet import -n my_wallet --private-key PVT_K1_2bfGi9rYsXQSXXTvJbDAPhHLQUojjaNLomdm3cEJ1XTzMqUt3V
```

:::danger
Never share your private keys. Keep them secure and backed up.
:::

## Reference

* [clio wallet import](/docs/api-reference/tooling/clio/command-reference/wallet/import.md)
* [Key Formats](/docs/api-reference/tooling/kiod/key-formats.md)
