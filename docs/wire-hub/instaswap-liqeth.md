# InstaSwap LiqETH to LiqSOL

## Prerequisites

- A Metamask Wallet successfully connected to [Wire Hub](https://pre.wire.network); see [Connect a Wallet](./connect-a-wallet.md) guide.
- LiqETH tokens in your wallet; see [Use the Faucet](./use-faucet.md) to request test tokens.
- A connected Solana account for receiving LiqSOL tokens.

import BrowserWindow from '@site/src/components/BrowserWindow';

## Steps

### Step 1: Access InstaSwap

Navigate to the [InstaSwap page](https://pre.wire.network/network/instaswap) from the sidebar.

<BrowserWindow url="https://pre.wire.network/network/instaswap">
      <img src="/img/pre-hub-instaswap-liqeth-start.png" alt="pre-hub-instaswap-liqeth-start" />

 </BrowserWindow>

### Step 2: Enter Swap Amount

In the InstaSwap interface:

- Enter the amount of LiqETH you want to swap (e.g., "1")
- The interface will automatically calculate the equivalent LiqSOL amount (e.g., "25.694 LiqSOL")
- Review the exchange rate and balances displayed
- Ensure that the displayed Solana recipient address matches your currently connected Solana wallet
- Click the **Swap to LiqSOL** button

### Step 3: Approve Spending Cap

MetaMask will prompt you to approve a spending cap request. This permission allows the InstaSwap contract to withdraw your LiqETH tokens.

<BrowserWindow url="https://pre.wire.network/network/instaswap">
      <img src="/img/pre-hub-instaswap-liqeth-spending-cap.png" alt="pre-hub-instaswap-liqeth-spending-cap" />

 </BrowserWindow>

Review the details:

- **Network**: ETH Wire Devnet
- **Request from**: pre.wire.network
- **Interacting with**: Contract address

Click **Confirm** to approve.

### Step 4: Confirm Transaction

After approving the spending cap, MetaMask will prompt you to confirm the swap transaction.

<BrowserWindow url="https://pre.wire.network/network/instaswap">
      <img src="/img/pre-hub-instaswap-liqeth-confirm.png" alt="pre-hub-instaswap-liqeth-confirm" />

 </BrowserWindow>

Review the transaction details:

- **Network**: ETH Wire Devnet
- **Network fee**: Gas fee for the transaction (e.g., "$0.50")
- **Speed**: Transaction speed setting

Click **Confirm** to execute the swap.

### Step 5: Monitor Transaction Progress

Once confirmed, the swap will be processed. A detailed transaction progress panel will appear showing each step of the cross-chain swap.

<img src="/img/pre-hub-instaswap-liqeth-progress-detailed.png" alt="InstaSwap LiqETH Progress" width="700" />

---

The transaction panel displays the swap amount (e.g., "1.0000 LiqETH → 25.6056 LiqSOL") and shows status for each step.

<!-- - **Approve LiqETH spend** (CONFIRMED): Approval submitted from Ethereum
- **Submitted on Ethereum** (CONFIRMED): LiqETH entered the outpost route
- **OPP outbound relay** (IN PROGRESS): Waiting for outbound attestation to reach Wire
- **Wire settlement** (QUEUED): Waiting for Wire swap row to store and finalize
- **OPP inbound relay** (QUEUED): Waiting for destination release routing on Solana
- **Release on Solana** (QUEUED): Waiting for LiqSOL to be released and available in portfolio -->

You can click **VIEW TRACE** to see detailed transaction logs, **REFRESH** to update the status, or **DISMISS** to close the panel.

### Step 6: Verify Swap Completion

Once the swap is complete, check your **Wire Portfolio** in the sidebar. Your balances will be updated:

<img src="/img/pre-hub-instaswap-liqeth-portfolio-updated.png" alt="Wire Portfolio Updated" width="400" />

---

You should see:

- Your **LiqETH** balance decreased by the swapped amount
- Your **LiqSOL** balance increased by the received amount (e.g., 25.8276000000 LiqSOL)
- The transaction will appear in your transaction history

## Important Notes

:::warning Test Environment
InstaSwap on Wire Testnet uses test tokens with no real value. This feature is for development and testing purposes only.
:::

:::info Connected Accounts
Ensure both your Ethereum wallet (MetaMask) and Solana account are connected before initiating a swap.
:::
