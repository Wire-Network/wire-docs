# Stake LiqSOL

## Overview

Staking LiqSOL tokens on the Wire Testnet allows you to earn rewards while contributing to the network. This guide walks you through the process of staking your LiqSOL tokens on Wire.

## Prerequisites

- A Solana wallet successfully connected to [Wire Hub](https://pre.wire.network).
- LiqSOL tokens in your wallet; see [Use the Faucet](./use-faucet.md) to request test tokens.
- A Wire account username to receive staked tokens.

import BrowserWindow from '@site/src/components/BrowserWindow';

## Steps

### Step 1: Access the Staking Page

Navigate to the [Staking page](https://pre.wire.network/network/staking) from the sidebar.

<BrowserWindow url="https://pre.wire.network/network/staking">
      <img src="/img/pre-hub-stake-liqsol-start.png" alt="pre-hub-stake-liqsol-start" />

 </BrowserWindow>

### Step 2: Enter Stake Amount

In the Staking interface:

- Ensure the **SOL** tab is selected (for LiqSOL staking)
- Choose **STAKE** tab (not UNSTAKE)
- Enter the amount of LiqSOL you want to stake (e.g., "9")
- Review the available balance displayed (e.g., "Available: 26.61 LiqSOL")
- Click the **Stake LiqSOL** button

### Step 3: Confirm Transaction in Solana Wallet

Your Solana wallet (e.g., Phantom) will prompt you to confirm the staking transaction.

<BrowserWindow url="https://pre.wire.network/network/staking">
      <img src="/img/pre-hub-stake-liqsol-confirm.png" alt="pre-hub-stake-liqsol-confirm" />

 </BrowserWindow>

Review the transaction warnings:

- **Balance Changes**: Understand that amounts are estimated and may change
- **Network fee**: Review the Solana network fee

Click **Confirm** to execute the stake.

:::warning Transaction Risks
The Solana wallet will display warnings about the transaction. These warnings are standard for new contract interactions on testnet.
:::

### Step 4: Monitor Transaction Progress

Once confirmed, the staking transaction will be processed. A progress panel will appear showing each step.

<img src="/img/pre-hub-stake-liqsol-progress.png" alt="LiqSOL Staking Progress" width="700" />

The panel displays the stake amount (e.g., "1.0000 LiqETH ↔ 25.4576 LiqSOL") and shows status for each step.

You can click **VIEW TRACE** to see detailed transaction logs, **REFRESH** to update the status, or **DISMISS** to close the panel.

### Step 5: View Transaction Trace (Optional)

Click **VIEW TRACE** to see detailed information about the staking transaction.

<img src="/img/pre-hub-stake-liqsol-trace.png" alt="LiqSOL Staking Trace" width="800" />

---

### Step 6: Verify Staking Completion

Once the staking is complete, the progress panel will show all steps as confirmed.

<img src="/img/pre-hub-stake-liqsol-complete.png" alt="LiqSOL Staking Complete" width="700" />

## Important Notes

:::warning Test Environment
Staking on Wire Testnet uses test tokens with no real value. This feature is for development and testing purposes only.
:::

:::info Wire Username Required
You must provide a valid Wire username to receive staked tokens. Make sure you've created a Wire account before staking.
:::

:::caution Transaction Warnings
Your Solana wallet may display security warnings for new contract interactions.
:::
