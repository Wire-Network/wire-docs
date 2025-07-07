# Wire Hub(Testnet Only): Request a Developer Contract Policy

## Overview

On the Wire Testnet, to develop decentralized applications (dApps), you’ll need resources for your smart contracts. These resources are collectively managed by Node Owners via the [`sysio.roa`](/docs/api-reference/system-contracts/contracts/sysio.roa.md) contract. Therefore, *you must request a baseline Developer Contract Policy* for a new contract account. This initial policy, issued by a test Node Owner, it is a necessary step and it provides essential resources to start your smart contract development.

## Prerequisites

- A Metamask Wallet successfully connected to [Wire Hub](https://hub.wire.network); see [Connect a Wallet](./connect-a-wallet.md) guide.
- A Wire identity linked to the wallet; if you haven't done it already, see [Create a Wire Testnet Account](./create-wire-testnet-account.md) guide.

## Steps

import BrowserWindow from '@site/src/components/BrowserWindow';

### Step 1: Access the Wire Hub

Begin by navigating to the [Node Owner Dashboard](https://hub.wire.network/explore/node-owner) on the Wire Hub website.

<BrowserWindow url="https://hub.wire.network/explore/node-owner">
      <img src="/img/node-owner-dashboard-new.png" alt="hub-policy-init" />
</BrowserWindow>

### Step 2: Copy Account Contract's Username and Keys

Copy the account contract's username and keys to a safe place, check *I have saved the username and key pair to a safe place* and click **Request New Contract Policy**.

<BrowserWindow url="https://hub.wire.network/explore/node-owner">
      <img src="/img/hub-policy-copy-details.png" alt="hub-policy-copy-details" />

 </BrowserWindow>

### Step 3: Verify Policy Creation

If policy creation has been successful, you will be able to see it on the right side along with other contracts' policies:

<BrowserWindow url="https://hub.wire.network/explore/node-owner">
      <img src="/img/hub-policy-created-success.png" alt="hub-policy-created-success" />

 </BrowserWindow>
