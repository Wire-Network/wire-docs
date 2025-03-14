---
sidebar_position: 2
id: create-development-wallet
title: Create Development Wallet
---


## Prerequisites

- You have successfully installed Wire Sysio and Wire CDT on your computer. See [Binary Installation](./install-dependencies.md#binary-installation) instructions.
- You have completed [Install Dependencies & Start a Local Node](./install-dependencies.md) guide.

## Overview

Wallets store public-private key pairs, which are needed for signing operations performed on the blockchain. They can be accessed through the use of `clio` command line tool. This section explains how to create, manage, and unlock wallets using the `clio` CLI, including generating and importing keys into wallets. For more information on `clio` commands and usage, refer to [clio's CLI Reference](../api-reference/tooling/clio/command-reference/index.md).

<!-- ## Prerequisites -->

## Create a Wallet

To create a wallet using `clio`, you can either print the password to the console or save it in a specific file. For simplicity and recommended **only for development**, use the `--to-console` option:

```bash
clio wallet create --to-console
```

:::tip
For production environments, it is recommended to use the `--file` option to avoid having your wallet password recorded in your bash history.
:::

```bash
clio wallet create --file my-secret-pass.txt
```

In both cases, ensure you save the password securely, as it will be needed later in the tutorial.

> **Note the location of `my-secret-pass.txt`. You will need it later**.

## Open the Wallet

Wallets are closed by default when starting a `kiod` instance, to begin, run the following

```bash
clio wallet open
```

Run the following to return a list of wallets.

```bash
clio wallet list
```

and it will return

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

You will be prompted for your wallet password you saved earlier, paste it and press enter. You could also use a one-liner below:

`clio wallet unlock --password $(cat /path/to/password_file)`

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

## Import keys into your wallet​

To generating a key pair directly within the wallet, you could use `clio wallet create_key` command.

```bash
clio wallet create_key
```

Output:

```bash
Created new private key with a public key of: "SYS8PEJ5FM42xLpHK...X6PymQu97KrGDJQY5Y"
```

:::warning[IMPORTANT]

**Save the public key somewhere safe as you would need it in the upcoming tutorials.**

You could set it as environment variable:

`export PUBLIC_KEY=public-key-value`

:::

## Import the Development Key​

Every new Wire chain has a default system user called `sysio`. This account is used to setup the chain by deploying system contracts that handle essential functions related to resource management, governance and consensus of the chain. Every new Wire chain also comes with a development key, and this key is the same and it is used to sign transactions on behalf of the `sysio` user.

```bash
clio wallet import
```

You'll be prompted for a private key, enter the `sysio` development key provided below:

```bash
5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3
```

Public key: SYS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV

:::danger[WARNING]

**Never use the development key for a production account!** Doing so will most certainly result in the loss of access to your account.

:::

## Reference

- [clio wallet create](/docs/api-reference/tooling/clio/command-reference/wallet/create.md)
- [clio wallet import](/docs/api-reference/tooling/clio/command-reference/wallet/import.md)
- [clio wallet open](/docs/api-reference/tooling/clio/command-reference/wallet/open.md)
- [clio wallet create_key](/docs/api-reference/tooling/clio/command-reference/wallet/create-key.md)
