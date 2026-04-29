# View Account Details

## Overview

Wire Hub provides a comprehensive account explorer where you can view detailed information about any Wire account, including resource usage, account balances, and permissions.

## Prerequisites

- Access to [Wire Hub](https://pre.wire.network)
- A Wire account username to search for

import BrowserWindow from '@site/src/components/BrowserWindow';

## Steps

### Step 1: Access the Accounts Explorer

Navigate to the [**Accounts**](https://pre.wire.network/network/explorer/accounts) section from the sidebar under the *Explorer* menu.

### Step 2: Search for an Account

Use the search bar to find a specific Wire account, or browse the list of accounts.

### Step 3: View Account Details

Once you select an account, you will see its detailed information:

<BrowserWindow url="https://pre.wire.network/network/explorer/accounts/4sqanaylhdoz">
      <img src="/img/pre-hub-account-details.png" alt="pre-hub-account-details" />

 </BrowserWindow>

The account page displays:

- **Account Name**: The Wire username (e.g., "4sqanaylhdoz")
- **RAM Usage**: Shows allocated RAM percentage (e.g., "87.76%") with a progress bar indicating used bytes vs. total (e.g., "1004.00 bytes / 1.12 KB")
- **CPU Usage**: Displays CPU allocation percentage with microseconds used (e.g., "0.00 µs / 0.00 µs")
- **NET Usage**: Shows network bandwidth allocation percentage with bytes used (e.g., "0.00 bytes / 0.00 bytes")
- **Permissions**: View account permissions with tabs for:
  - **Actions**: Available contract actions
  - **Permissions**: Permission levels (active, owner) with thresholds and associated public keys
  - **RAW**: Raw account data
