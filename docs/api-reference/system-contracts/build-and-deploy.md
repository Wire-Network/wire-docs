# Build and Deploy System Contracts

## Prerequisites

- You have successfully installed Wire Sysio and Wire CDT on your computer and you have a local chain running. See [Install Dependencies & Start a local node](/docs/getting-started/install-dependencies.md) article.
- For example, to create the `testerbios` account before deploying, run:

  ```sh
  sudo clio create account sysio testerbios SYS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV SYS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV -p sysio@active
  ```

:::danger[WARNING]

For purposes of this tutorial, we will be using the development key pair. This is not recommended for production use, **especially when creating the system accounts**.
**Never use the development key for a production account!** Doing so will most certainly result in the loss of access to your account.
:::

See [Manage Local Wallet with clio](/docs/getting-started/manage-local-wallet-with-clio.md#import-the-development-key) to get the private key and import it into your wallet.

:::info
The steps below assume you have access to a **local chain** and you have authority over `sysio` key pair.
:::

:::warning[REMINDER]
The install process has already set up the wallet for the *root* user. To interact with clio, ensure **you are on the root user**. Run `sudo su -` to switch to the root user before proceeding with the tutorial.
:::

## Build

Please refer to the build instructions outline [here](https://github.com/Wire-Network/wire-system-contracts?tab=readme-ov-file#building).

### Post-build check

- The contracts (both `.wasm` and `.abi` files) are built into their corresponding *build/contracts/\<contract name\>* folder.

## Deployment

To deploy a contract, simply use the  [`clio set contract [OPTIONS]`](../tooling/clio/command-reference/set/set-contract.md) command, pointing to the appropriate directory for that specific contract.

### Deploy `sysio.bios`

```sh
clio set contract testerbios /path/to/sysio.contracts/build/contracts/sysio.bios/ -p testerbios
```

### Deploy `sysio.msig`

```sh
clio set contract testermsig /path/to/sysio.contracts/build/contracts/sysio.msig/ -p testermsig
```

### Deploy `sysio.system`

```sh
clio set contract testersystem /path/to/sysio.contracts/build/contracts/sysio.system/ -p testersystem
```

### Deploy `sysio.token`

```sh
clio set contract testertoken /path/to/sysio.contracts/build/contracts/sysio.token/ -p testertoken
```

### Deploy `sysio.wrap`

```sh
clio set contract testerwrap /path/to/sysio.contracts/build/contracts/sysio.wrap/ -p testerwrap
```
