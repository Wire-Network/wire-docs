# Using the Faucet

## Overview

The Wire Testnet Faucet provides free test tokens for development purposes. You can request WIRE tokens for your Wire account, as well as ETH, LiqETH, SOL, and LiqSOL tokens for testing cross-chain functionality.

## Prerequisites

- A Metamask Wallet successfully connected to [Wire Hub](https://pre.wire.network); see [Connect a Wallet](./connect-a-wallet.md) guide.
- At least one Wire account created; see [Create a Wire Testnet Account](./create-wire-testnet-account.md) guide.

import BrowserWindow from '@site/src/components/BrowserWindow';

## Available Faucet Options

<BrowserWindow url="https://pre.wire.network/network/faucet">
      <img src="/img/pre-hub-faucet-start.png" alt="pre-hub-faucet-start" />

 </BrowserWindow>

The faucet provides the following options:

- **Request Wire Username**: Create a new Wire account associated with your wallet
- **Airdrop WIRE**: Request 10 WIRE tokens for your Wire account
- **Airdrop ETH**: Request 0.1 ETH tokens (requires Ethereum wallet connection)
- **Airdrop LiqETH**: Mint 0.1 LiqETH on Ethereum (requires transaction confirmation)
- **Airdrop SOL**: Request SOL tokens (requires Solana wallet connection)
- **Airdrop LiqSOL**: Mint LiqSOL on Solana (requires Solana wallet connection)

## Request WIRE Tokens

### Step 1: Access the Faucet

Navigate to the [Faucet page](https://pre.wire.network/network/faucet) from the sidebar.

### Step 2: Enter Your Wire Username

In the **Airdrop WIRE** section, enter your Wire username in the text field.

### Step 3: Request WIRE

Click the **Request 10 WIRE** button to request tokens.

<BrowserWindow url="https://pre.wire.network/network/faucet">
      <img src="/img/pre-hub-faucet-wire-success.png" alt="pre-hub-faucet-wire-success" />

 </BrowserWindow>

If successful, you'll see a green notification: *WIRE Request Submitted* with the message "Sent 10.0000 WIRE to your Wire account".

## Request ETH Tokens

### Step 1: Locate Airdrop ETH Section

Find the **Airdrop ETH** card on the Faucet page.

### Step 2: Request ETH

Click the **Request 0.1 ETH** button.

![ETH Airdrop Complete](/img/pre-hub-faucet-eth-complete.png)

If successful, you'll see a green notification: *ETH Airdrop Complete* with the message "Sent 0.1 ETH to:" followed by your Ethereum address.

## Request LiqETH Tokens

### Step 1: Locate Airdrop LiqETH Section

Find the **Airdrop LiqETH** card on the Faucet page.

### Step 2: Click Mint Button

Click the **Mint 0.1 LiqETH** button.

### Step 3: Confirm Transaction

MetaMask will prompt you to confirm the transaction. Review the network fee and click **Confirm**.

<BrowserWindow url="https://pre.wire.network/network/faucet">
      <img src="/img/pre-hub-faucet-liqeth-confirm.png" alt="pre-hub-faucet-liqeth-confirm" />

 </BrowserWindow>

### Step 4: Verify Success

Once the transaction is confirmed, you'll see a green notification: *LiqETH Airdrop Complete* with the message "Requested to mint 0.1 LiqETH on Ethereum".

<BrowserWindow url="https://pre.wire.network/network/faucet">
      <img src="/img/pre-hub-faucet-liqeth-success.png" alt="pre-hub-faucet-liqeth-success" />

 </BrowserWindow>

## Request SOL Tokens

### Step 1: Connect Solana Wallet

If you haven't already, click **Connect Solana Wallet** in the **Airdrop SOL** section.

### Step 2: Request SOL

Click the **Request 1 SOL** button.

<BrowserWindow url="https://pre.wire.network/network/faucet">
      <img src="/img/pre-hub-faucet-sol-success.png" alt="pre-hub-faucet-sol-success" />

 </BrowserWindow>

If successful, you'll see a green notification: *SOL Airdrop Complete*.

## Request LiqSOL Tokens

### Step 1: Connect Solana Wallet

Ensure your Solana wallet is connected.

### Step 2: Request LiqSOL

Click the **Mint 1 LiqSOL** button in the **Airdrop LiqSOL** section.

### Step 3: Confirm Transaction

Approve the transaction in your Solana wallet.

### Step 4: Verify Success

Once confirmed, you'll see a success notification indicating the LiqSOL tokens have been minted.

## Important Notes

:::warning Rate Limiting
Faucet requests are rate-limited to prevent abuse. If you request tokens too frequently, you may need to wait before making another request.
:::

:::info Test Tokens Only
All tokens received from the faucet are test tokens with no real value. They are intended solely for development and testing purposes on the Wire Testnet.
:::

## What's Next?

Once you have test tokens, you can:

- **Deploy smart contracts**: Use your WIRE tokens to cover transaction costs on the Wire Testnet
- **Test cross-chain functionality**: Experiment with ETH and SOL tokens for cross-chain features
- **Explore DeFi features**: Test liquidity pools with LiqETH and LiqSOL tokens
- **Learn more**: Check out the [Smart Contract Development](/docs/smart-contract-development/smart-contract-development-intro) guides
