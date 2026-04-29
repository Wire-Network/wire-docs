# Connect Wallet

## Prerequisites

- This tutorial assumes that you have a Metamask Wallet and that you have installed the [Metamask Chrome Extension](https://chromewebstore.google.com/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en).
- A Metamask Wallet successfully connected to [Wire Hub](https://pre.wire.network)

import BrowserWindow from '@site/src/components/BrowserWindow';

## Steps

### Step 1: Access the Wire Hub

Begin by navigating to the [Wire Hub](https://pre.wire.network) website.

<BrowserWindow url="https://pre.wire.network/">
      <img src="/img/pre-hub.png" alt="pre-hub page" />

 </BrowserWindow>

### Step 2: Click the Connect Button

Click the blue "Connect" button in the top right corner of the page.

<BrowserWindow url="https://pre.wire.network/">
      <img src="/img/pre-hub.png" alt="pre-hub-connect" />

 </BrowserWindow>

### Step 3: Select Your Wallet Provider

A modal will appear showing available wallet options. Select **MetaMask** from the list of Web3 Connections.

<BrowserWindow url="https://pre.wire.network/">
      <img src="/img/pre-hub-connect-metamast-wallet.png" alt="pre-hub-connect-metamask-wallet" />

 </BrowserWindow>

### Step 4: Unlock MetaMask (if needed)

If your MetaMask wallet is locked, enter your password and click **Unlock** to proceed.

<BrowserWindow url="https://pre.wire.network/">
      <img src="/img/pre-hub-connect-metamask-password.png" alt="pre-hub-connect-metamask-password" />

 </BrowserWindow>

### Step 5: Confirm Signature Request

MetaMask will request a signature to retrieve your public key. Review the request details and click **Confirm**.

<BrowserWindow url="https://pre.wire.network/">
      <img src="/img/pre-hub-connect-website-to-metamast-signature.png" alt="pre-hub-signature-request" />

 </BrowserWindow>

### Step 6: Add ETH Wire Devnet Network

MetaMask will prompt you to add the ETH Wire Devnet network. Review the network details and click **Confirm** to add the network.

<BrowserWindow url="https://pre.wire.network/">
      <img src="/img/pre-hub-add-eth-devnet.png" alt="pre-hub-add-eth-devnet" />

 </BrowserWindow>

### Step 7: Verify Connection

Once connected, you will see your wallet address displayed in the Web3 Connections section of the sidebar (e.g., 0x2840...3646).

<BrowserWindow url="https://pre.wire.network/">
      <img src="/img/pre-hub-wallet-connected.png" alt="pre-hub-wallet-connected" />

 </BrowserWindow>
