---

id: another-tutorial-devnet
title: Wire Devnet Tutotial
---


## Overview

This tutorial will guide you through the process of setting up a wallet, creating an account and deploying a smart contractto Wire devnet.

### Step-by-Step Tutorial for Setting Up an Wallet and Account in Wire devnet

#### 1. Create a Wallet

First, create a new wallet using `clio`. The password for the wallet will be output to the console and saved to a file for later use.

```bash
PASS=$(clio wallet create --to-console | awk 'FNR > 3 { print $1 }' | tr -d '"') 
echo "$PASS" > ~/devnet_wallet_password.txt
```

#### 2. Create a Script to Unlock the Wallet

Create a bash script that will unlock your wallet. Depending on the way `kiod` is launched or when process is restarted, wallet might be locked.

```bash
echo -e "#!/bin/bash\nclio wallet unlock --password ${PASS} \
|| echo \"Wallet has already been unlocked...\"" > ~/unlock_wallet_devnet.sh
```

#### 3. Update Execution Permissions

Change the script’s permissions to make it executable.

```bash
chmod +x ~/unlock_wallet_devnet.sh
```

#### 4. Unlock the Wallet

Execute the script to unlock your wallet.

```bash
source ~/unlock_wallet_devnet.sh
```

#### 5. Generate a Key Pair

Generate a new key pair which will be used for your account operations. Note the output as it will display your public and private keys.

```bash
clio create key --to-console
```

#### 6. Import the Key Pair

Import the private key into your wallet. This step will secure your key pair within the wallet.

```bash
clio wallet import
# Enter the private key when prompted
```

#### 7. Import the Development Key

For development purposes, import a known SYSIO private key to your wallet which allows you to create other accounts.

```bash
clio wallet import --private-key 5JTvEtNNP8SRrpyoyVjfEtFDbC5r6YMSiHkxnuchSh2rKtLmsUP
```

#### 8. Create an Account

Create a new account under the a name of your choice(`<AccountName>`) using the `sysio` account as the creator. Specify the public keys for the owner and active permissions, and stake resources for CPU and network bandwidth. The new `<AccountName>` will be your user account from which you would create a smart contract account later on.

:::note
Make sure to replace placeholder values such as `<OwnerKey>`, `<ActiveKey>` with actual public keys generated in step 5.
:::

```bash
clio -u https://dev-hyperion.gitgo.app system newaccount sysio <AccountName> "<OwnerKey>" "<ActiveKey>" --stake-net '10000.0000 WIRE' --stake-cpu '10000.0000 WIRE' --buy-ram-kbytes 8
```

#### 9. Transfer Initial Funds

Transfer some initial funds to `<AccountName>` to enable account operations like deploying smart contracts.

```bash
clio -u https://dev-hyperion.gitgo.app push action sysio.token transfer '["sysio","<AccountName>","1000000.0000 WIRE","Wire Deposit"]' -p sysio@active
```

#### 10. Create Smart Contract

Create a project called `simplebooks` and necessary project directories.

```shell
mkdir simplebooks && cd simplebooks && touch include/simplebooks.hpp && src/simplebooks.cpp
```

#### 11. Create Account for the Smart Contract

Replace `<AccountName>`with the name of your existing account that will create the new account, `<SmartContractAccount>` with the desired name for your new smart contract account, and `<ActiveKey>`with the public active key for the new account.

```shell
clio create account <AccountName> <SmartContractAccount> <ActiveKey> -p <AccountName>@active
```

#### 12. Compile and deploy the Smart Contract

Before deploying the smart contract, add a dedicated directory for your build artifacts. This directory must match the name of your smart contract account.

```shell
cdt-cpp -abigen -contract <SmartContractAccount> -o <SmartContractAccount>/simplebooks.wasm src/simplebooks.cpp -I include
```

##### Deploy the contract

```shell
clio set contract <SmartContractAccount>  <SmartContractAccount> -p  <SmartContractAccount>@active
```
