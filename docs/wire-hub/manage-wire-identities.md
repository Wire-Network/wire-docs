# Manage Multiple Wire Accounts

## Overview

A single wallet address can be associated with multiple Wire accounts. This allows you to create and manage different accounts for various purposes while using the same connected wallet. You can easily switch between these accounts as needed.

## Prerequisites

- A Metamask Wallet successfully connected to [Wire Hub](https://pre.wire.network); see [Connect a Wallet](./connect-a-wallet.md) guide.
- At least one Wire account created; see [Create a Wire Testnet Account](./create-wire-testnet-account.md) guide.

import BrowserWindow from '@site/src/components/BrowserWindow';

## Steps

### Step 1: Access Wire Identity Section

Open the Connection sidebar by clicking on your address in the top right of the website, then locate the **Wire Identity** section. You will see your currently active Wire account displayed with an `active` permission.

<BrowserWindow url="https://pre.wire.network/">
      <img src="/img/pre-hub-change-wire-identity.png" alt="pre-hub-change-wire-identity" />

 </BrowserWindow>

### Step 2: Open Account Selection

Click on the Wire Identity section to open the account selection modal.

### Step 3: Choose Wire Account

A modal titled *Choose Wire Account* will appear showing all Wire accounts associated with your connected wallet address. The currently selected account will have a checkmark next to it.

Select the Wire account you want to switch to from the list.

<BrowserWindow url="https://pre.wire.network/">
      <img src="/img/pre-hub-change-wire-identity-modal.png" alt="pre-hub-change-wire-identity-modal" />

 </BrowserWindow>

### Step 4: Confirm Selection

Click the **Select** button to switch to the chosen Wire account. The sidebar will update to show the newly selected account as active.

## Creating Additional Accounts

To create additional Wire accounts for the same wallet:

- Navigate to the [Faucet page](https://pre.wire.network/network/faucet) from the sidebar
- Click the **Request Wire Username** button to create or fetch a Wire username from your connected wallet
- Confirm the signature request in MetaMask
- Your new Wire account will be created and associated with your wallet

<BrowserWindow url="https://pre.wire.network/network/faucet">
      <img src="/img/pre-hub-faucet-request-wire-username.png" alt="pre-hub-faucet-request-username" />

 </BrowserWindow>

You can then switch between all your Wire accounts using the steps above.
