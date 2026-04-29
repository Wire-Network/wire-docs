# InstaSwap Staked Tokens on Wire

## Overview

This guide walks you through swapping supported staked tokens directly on the Wire Testnet chain using Wire Hub.

Unlike cross-chain InstaSwap flows, you only need to approve a **signature request** in MetaMask to submit the swap. No additional confirmations are required in either your Ethereum or Solana wallets.

## Prerequisites

- A MetaMask wallet successfully connected to [Wire Hub](https://pre.wire.network); see [Connect a Wallet](./connect-a-wallet.md) guide.
- A Wire account username (Wire Identity).
- A balance of a supported staked token in your Wire Portfolio.

import BrowserWindow from '@site/src/components/BrowserWindow';

## Steps

### Step 1: Access InstaSwap

Navigate to the [InstaSwap page](https://pre.wire.network/network/instaswap) from the sidebar.

<BrowserWindow url="https://pre.wire.network/network/instaswap">
      <img src="/img/pre-hub-instaswap-liqsol-start.png" alt="pre-hub-instaswap-start" />

 </BrowserWindow>

### Step 2: Select the Staked Tokens Swap

In the InstaSwap interface:

- Choose the token you want to swap **from**, selecting either a Staked token or WIRE directly, and the token you want to swap **to**
- Confirm the WIRE username shown is your current Wire Username - this user will receive the swapped tokens

:::note Current supported swaps
Right now, you can swap freely between **Staked LiqETH**, **Staked LiqSOL**, and **WIRE**.
:::

### Step 3: Enter Swap Amount

- Enter the amount you want to swap
- Review the estimated output amount and any fees shown
- Click the swap button to continue

### Step 4: Confirm the Signature Request in MetaMask

MetaMask will prompt you with a **Signature request**.

Review the details and click **Confirm**.

:::info Why a signature?
For staked-token swaps executed internally on the Wire Testnet, Wire Hub uses your Ethereum wallet signature to authorize the swap request. You do not need to submit an on-chain transaction from your Ethereum or Solana wallets.
:::

### Step 5: Verify Swap Completion

Once the swap is complete, check your **Wire Portfolio** to confirm:

- Your input token balance decreased by the swapped amount
- Your output token balance increased by the received amount

## Important Notes

:::warning Test Environment
InstaSwap on Wire Testnet uses test tokens with no real value. This feature is for development and testing purposes only.
:::
