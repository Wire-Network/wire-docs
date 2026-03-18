---
sidebar_position: 2
id: manage-local-wallet-with-clio
title: Manage Local Wallet with clio


---


## Prerequisites

- You have successfully installed Wire Sysio and Wire CDT on your computer and you have a local chain running. See [Install Dependencies & Start a local node](./install-dependencies.md) article.

:::warning[REMINDER]
The install process has already set up the wallet for the *root* user. To interact with clio, ensure **you are on the root user**. Run `sudo su -` to switch to the root user before proceeding with the tutorial.
:::

## Overview

Wallets store public-private key pairs, which are needed for signing operations performed on the blockchain. They can be accessed through the use of `clio` command line tool. This section explains how to create, manage, and unlock wallets using the `clio` CLI, including generating and importing keys into wallets. For more information on `clio` commands and usage, refer to [clio's CLI Reference](../api-reference/tooling/clio/command-reference/index.md).

We have already created a wallet during the installation process. This is the `default` wallet. You can [create additional wallets](#create-a-wallet) if you want to keep your keys separate, giving you greater control over how different key sets are managed.

## Open the Wallet

Wallets are closed by default when starting a `kiod` instance, to begin, run the following

```bash
clio wallet open
```

Run the following to return a list of wallets.

```bash
clio wallet list
```

Output:

```bash
Wallets:
[
  "default"
]
```

## Unlock a Wallet

The `kiod` wallet(s) have been opened, but is still locked.

```bash
clio wallet unlock
```

You will be prompted for your wallet password that was saved when the wallet was first created (during installation process with `wire-cli`), paste it and press `Enter`:

```sh
clio wallet unlock --password $(cat /opt/wire-network/secrets/wallet_password.txt)
```

You could also use the unlock script:

```sh
/opt/wire-network/unlock_wallet.sh
```

Execute the command below:

```bash
clio wallet list
```

This should output the following result:

```bash
Wallets:
[
  "default *"
]
```

The asterisk (\*) next to the name means that the wallet is currently *unlocked*.

## Create and Import keys into your wallet​

To generate a key pair directly within the wallet, you could use `clio wallet create_key` command.

```bash
clio wallet create_key
```

Output:

```bash
Created new private key with a public key of: "PUB_K1_62DkgD8RZBVxts6TXYEaDkx86kDFrcqvWghxgitzpAtzqUCdXv"
```

Name the key:

```bash
clio wallet set_key_name --password $(cat /opt/wire-network/secrets/wallet_password.txt) --public-key PUB_K1_62DkgD8RZBVxts6TXYEaDkx86kDFrcqvWghxgitzpAtzqUCdXv --new-key-name my-key
```

Output:

```bash
Key name set to: my-key
```

You can check your key pairs with the following command:

```sh
clio wallet private_keys --password "$(cat /opt/wire-network/secrets/wallet_password.txt)"
```

or

```bash
clio wallet keys_by_name --password  "$(cat /opt/wire-network/secrets/wallet_password.txt)"
```

:::warning[IMPORTANT]

**Save the public key somewhere safe as you would need it in the upcoming tutorials.**

You could set it as environment variable:

`export PUBLIC_KEY=public-key-value`

:::

---

## Import the Development Key​

Every new Wire chain has a default system user called `sysio`. This account is used to setup the chain by deploying system contracts that handle essential functions related to resource management, governance and consensus of the chain.

Every new Wire chain also comes with a *development key*, and this key is always the same one.

### Development Key

| Key Type | Value |
|----------|-------|
| **Private Key (legacy)** | `5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3` |
| **Private Key (new)** | `PVT_K1_2bfGi9rYsXQSXXTvJbDAPhHLQUojjaNLomdm3cEJ1XTzMqUt3V` |
| **Public Key (legacy)** | `SYS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV` |
| **Public Key (new)** | `PUB_K1_6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5BoDq63` |

:::tip
For more information about key formats (legacy vs new, K1 vs R1), see [Key Formats](/docs/api-reference/tooling/kiod/key-formats.md).
:::

### Import the Key

You can use the development key for testing purposes and creating new accounts, which we will explore in future tutorials.
To import the development key into your wallet, run the following command:

```bash
clio wallet import
```

You'll be prompted for a private key, enter either format of the private key:

```bash
5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3
```

:::danger[WARNING]

**Never use the development key for a production account!** Doing so will most certainly result in the loss of access to your account.

:::

:::info[NOTE]
A unique `sysio` keypair is stored at `/opt/wire-network/secrets/sysio_key.txt` and it is used to sign transactions on behalf of the `sysio` user.
:::

## Create a Wallet

To create a wallet using `clio`, you can either print the password to the console or save it in a specific file. For simplicity and recommended **only for development**, use the `--to-console` option:

```bash
clio wallet create --name=extra-wallet --to-console
```

:::tip
For production environments, it is strongly recommended to use the `--file` option to avoid having your wallet password recorded in your shell history.
:::

```bash
clio wallet create --name=extra-wallet --file my-secret-pass.txt
```

## Reference

- [clio wallet create](/docs/api-reference/tooling/clio/command-reference/wallet/create.md)
- [clio wallet import](/docs/api-reference/tooling/clio/command-reference/wallet/import.md)
- [clio wallet open](/docs/api-reference/tooling/clio/command-reference/wallet/open.md)
- [clio wallet create_key](/docs/api-reference/tooling/clio/command-reference/wallet/create-key.md)
- [clio wallet set_key_name](/docs/api-reference/tooling/clio/command-reference/wallet/set-key-name.md)
- [clio wallet private_keys](/docs/api-reference/tooling/clio/command-reference/wallet/private-keys.md)
- [clio wallet keys_by_name](/docs/api-reference/tooling/clio/command-reference/wallet/keys-by-name.md)
