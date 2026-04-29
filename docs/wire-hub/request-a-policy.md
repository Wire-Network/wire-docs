# Request a Developer Contract Policy

## Overview

On the Wire Testnet, to develop decentralized applications (dApps), you'll need resources for your smart contracts. These resources are collectively managed by Node Owners via the [`sysio.roa`](/docs/api-reference/system-contracts/contracts/sysio.roa.md) contract. Therefore, *you must request a baseline Developer Contract Policy* for a new contract account. This initial policy, issued by a test Node Owner, is a necessary step and provides essential resources to start your smart contract development.

## Prerequisites

- A Metamask Wallet successfully connected to [Wire Hub](https://pre.wire.network); see [Connect a Wallet](./connect-a-wallet.md) guide.
- A Wire identity linked to the wallet; if you haven't done it already, see [Create a Wire Testnet Account](./create-wire-testnet-account.md) guide.

## Steps

import BrowserWindow from '@site/src/components/BrowserWindow';

### Step 1: Access Request Policy Page

Begin by navigating to the [Request Policy](https://pre.wire.network/network/request-policy) page on the Wire Hub website. You can access this from the **Contract** link in the sidebar.

<BrowserWindow url="https://pre.wire.network/network/request-policy">
      <img src="/img/pre-hub-request-developer-policy.png" alt="pre-hub-request-developer-policy" />
</BrowserWindow>

### Step 2: Copy Contract Account Details

On the Request a Developer Contract Policy page, you will see two sections:

**Contract Account Username**: A unique username for your contract account (e.g., "contractzxne")

- Click **Copy Username** to copy it to your clipboard

**Contract Account Key Pair**: Private and public keys for your contract account

- Click **Copy Keys** to copy both keys to your clipboard

**IMPORTANT**: Save these credentials securely before proceeding. You will need them to deploy and manage your smart contracts.

<BrowserWindow url="https://pre.wire.network/network/request-policy">
      <img src="/img/pre-hub-policy-copy-keys.png" alt="pre-hub-policy-copy-keys" />
</BrowserWindow>

### Step 3: Request the Policy

After saving your contract account username and keys:

1. Check the box *"I have saved the username and key pair to a safe place"*
2. Click the blue **Request New Contract Policy** button

### Step 4: Verify Policy Creation

If the policy request is successful, you will see:

- A green success notification: *Policy Request Success! Your policy request has been approved*
- Your policy details will appear in the **Your Policies** section on the right side, showing:
  - Contract Account name
  - Net Weight (e.g., 0.0500 SYS)
  - CPU Weight (e.g., 0.0500 SYS)
  - RAM Weight (e.g., 3.0000 SYS)

<BrowserWindow url="https://pre.wire.network/network/request-policy">
      <img src="/img/pre-hub-policy-success.png" alt="pre-hub-policy-success" />
</BrowserWindow>

:::warning Rate Limiting
You can only request one Developer Contract Policy within a specific timeframe. If you try to request another policy too soon, you will see a message indicating how long you need to wait before requesting another.
:::

## What's Next?

Once you have your Developer Contract Policy approved, you can:

- **Deploy your first smart contract**: Follow the [Hello World Contract Tutorial](/docs/smart-contract-development/hello-world-contract-short) or the comprehensive [Deploy on Wire Testnet Guide](/docs/guides/hello-world-video-testnet)
- **Learn smart contract development**: Explore [Smart Contract Development](/docs/smart-contract-development/smart-contract-development-intro) to understand contracts, actions, and state data management
- **Explore more tutorials**: Try the [Company Contract Tutorial](/docs/smart-contract-development/company-contract) for a more complex example
