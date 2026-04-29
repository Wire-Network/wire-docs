# InstaSwap LiqSOL to LiqETH

## Prerequisites

- A Solana wallet successfully connected to [Wire Hub](https://pre.wire.network).
- LiqSOL tokens in your wallet; see [Use the Faucet](./use-faucet.md) to request test tokens.
- A connected Ethereum account (MetaMask) for receiving LiqETH tokens.

import BrowserWindow from '@site/src/components/BrowserWindow';

## Steps

### Step 1: Access InstaSwap

Navigate to the [InstaSwap page](https://pre.wire.network/network/instaswap) from the sidebar.

<BrowserWindow url="https://pre.wire.network/network/instaswap">
      <img src="/img/pre-hub-instaswap-liqsol-start.png" alt="pre-hub-instaswap-liqsol-start" />

 </BrowserWindow>

### Step 2: Enter Swap Amount

In the InstaSwap interface:

- Enter the amount of LiqSOL you want to swap (e.g., "27")
- The interface will automatically calculate the equivalent LiqETH amount (e.g., "1.0445 LiqETH")
- Review the exchange rate and balances displayed
- Ensure your Ethereum account is connected (shown at the bottom)
- Click the **Swap To LiqETH** button

### Step 3: Confirm Transaction in Solana Wallet

Your Solana wallet (e.g., Phantom) will prompt you to confirm the transaction.

<BrowserWindow url="https://pre.wire.network/network/instaswap">
      <img src="/img/pre-hub-instaswap-liqsol-confirm.png" alt="pre-hub-instaswap-liqsol-confirm" />

 </BrowserWindow>

Review the transaction warnings:

- **Balance Changes**: Understand that amounts are estimated and may change
- **View**: This action is new and requires trust
- **Transaction may fail**: Proceed only if you trust the site
- **Insufficient SOL**: Ensure you have enough SOL in your account

Click **Confirm (unsafe)** to execute the swap.

:::warning Transaction Risks
The Solana wallet will display warnings about the transaction. These warnings are standard for new contract interactions on testnet. Only proceed after confirming that you are on the pre.wire.network website.
:::

### Step 4: Review Transaction Details

A transaction details panel will appear on the right side showing the swap progress and transaction steps along with status for each step.

<BrowserWindow url="https://pre.wire.network/network/instaswap">
      <img src="/img/pre-hub-instaswap-liqsol-popup.png" alt="pre-hub-instaswap-liqsol-popup" />

 </BrowserWindow>

### Step 5: Transaction Complete

Once confirmed, the swap will be processed.

<img src="/img/pre-hub-instaswap-liqsol-complete.png" alt="InstaSwap LiqSOL Progress" width="700" />

### Step 6: Verify Swap Completion

Once the swap is complete, check your **Wire Portfolio** in the sidebar. Your balances will be updated:

<img src="/img/pre-hub-instaswap-liqsol-portfolio-updated.png" alt="Wire Portfolio Updated" width="400" />

---

You should see:

- Your **LiqSOL** balance decreased by the swapped amount
- Your **LiqETH** balance increased by the received amount (highlighted in green)
- The transaction will appear in your transaction history

## Important Notes

:::warning Test Environment
InstaSwap on Wire Testnet uses test tokens with no real value. This feature is for development and testing purposes only.
:::

:::info Connected Accounts
Ensure both your Solana wallet and Ethereum account (MetaMask) are connected before initiating a swap.
:::

:::caution Transaction Warnings
Your Solana wallet may display security warnings for new contract interactions.
:::
