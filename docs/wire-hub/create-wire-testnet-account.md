# Create an Account

## Prerequisites

- This tutorial assumes that you have a Metamask Wallet and that you have installed the [Metamask Chrome Extension](https://chromewebstore.google.com/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en).
- A Metamask Wallet successfully connected to [Wire Hub](https://pre.wire.network); please see [Connect a Wallet](./connect-a-wallet.md) guide.

## Steps

import BrowserWindow from '@site/src/components/BrowserWindow';

### Step 1: Access the Wire Hub Dashboard

Begin by navigating to the [Wire Hub](https://pre.wire.network) website with your wallet connected.

<BrowserWindow url="https://pre.wire.network/">
      <img src="/img/pre-hub-account-dashboard.png" alt="pre-hub-account-dashboard" />

 </BrowserWindow>

### Step 2: Request a Wire Username

Clicking your address in the top right of the website will open up the Connection sidebar, where under **Wire Identity** you'll see *NO WIRE IDENTITY SELECTED* with a message to *Connect your wallet to sync with a Wire account*. Click the blue **REQUEST A WIRE USERNAME** button.

This takes you to the Faucet page, where you can request a Wire username from your connected wallet.

<BrowserWindow url="https://pre.wire.network/">
      <img src="/img/pre-hub-create-wire-username.png" alt="pre-hub-create-wire-username" />

 </BrowserWindow>

### Step 3: Request a Wire Username on the Faucet Page

On the Faucet page, click the **Request Wire Username** button to create a new Wire account from your connected wallet.

<BrowserWindow url="https://pre.wire.network/network/faucet">
      <img src="/img/pre-hub-faucet-request-wire-username.png" alt="pre-hub-faucet" />

 </BrowserWindow>

:::note
You can create additional Wire accounts via this Faucet page, each of which is directly linked to your connected ETH address.
:::

### Step 4: Verify Account Creation

If account creation has been successful, you will see a notification at the bottom of the page showing a green pop-up *Wire identity account* followed by your new Wire username (e.g., "xk6j4pka6c").

<BrowserWindow url="https://pre.wire.network/">
      <img src="/img/pre-hub-post-create-wire-username.png" alt="pre-hub-account-created-success" />

 </BrowserWindow>
