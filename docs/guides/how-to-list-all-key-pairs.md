---
id: how-to-list-all-key-pairs
description: Learn how to list all public and private keys stored in your wallet using clio.
tags:
  - guide
  - keys
  - wallet
---

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

### 1. Unlock your wallet

```sh
clio wallet unlock --password "$(cat /opt/wire-network/secrets/wallet_password.txt)"
```

Or use the unlock script:

```sh
/opt/wire-network/unlock_wallet.sh
```

### 2. List all public keys

```sh
clio wallet keys
```

**Example Output**

```json
[
  "PUB_K1_6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5BoDq63",
  "PUB_K1_7xDsNqjei5ikWPsm7qCvqKGDyDBZtRg7T2YT1tCojALuS33Tb7"
]
```

### 3. List all key pairs (public and private)

```sh
clio wallet private_keys
```

**Example Output**

```json
[
  [
    "PUB_K1_6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5BoDq63",
    "PVT_K1_2bfGi9rYsXQSXXTvJbDAPhHLQUojjaNLomdm3cEJ1XTzMqUt3V"
  ],
  [
    "PUB_K1_7xDsNqjei5ikWPsm7qCvqKGDyDBZtRg7T2YT1tCojALuS33Tb7",
    "PVT_K1_hptMzcHHWcdiMDjMi59WS65m71H9jUW8comf52ktBG3tWxs2Q"
  ]
]
```

:::danger
| You should **NEVER** reveal your private keys in a production environment!
:::

### 4. List keys by name

If you have assigned names to your keys using `clio wallet set_key_name`, you can list them with their names:

```sh
clio wallet keys_by_name --password <wallet_password>
```

**Example Output**

```json
[
  [
    "devkey",
    {
      "key_name": "devkey",
      "public_key": "PUB_K1_6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5BoDq63",
      "private_key": "PVT_K1_2bfGi9rYsXQSXXTvJbDAPhHLQUojjaNLomdm3cEJ1XTzMqUt3V"
    }
  ],
  [
    "testkey",
    {
      "key_name": "testkey",
      "public_key": "PUB_K1_7xDsNqjei5ikWPsm7qCvqKGDyDBZtRg7T2YT1tCojALuS33Tb7",
      "private_key": "PVT_K1_hptMzcHHWcdiMDjMi59WS65m71H9jUW8comf52ktBG3tWxs2Q"
    }
  ]
]
```

This is useful when managing multiple keys, as it shows the key name alongside the public and private key pair.

:::tip
To assign a name to a key, use `clio wallet set_key_name`. See the [set_key_name command reference](/docs/api-reference/tooling/clio/command-reference/wallet/set-key-name.md) for more details.
:::
