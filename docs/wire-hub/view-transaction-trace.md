# View Transaction Trace

## Overview

The Transaction Trace feature provides detailed information about cross-chain transactions on Wire Hub. You can view comprehensive details about swaps, stakes, and other operations, including transaction hashes, blockchain confirmations, and raw payload data.

## Prerequisites

- A completed transaction on Wire Hub (swap, stake, etc.)
- Access to [Wire Hub](https://pre.wire.network)

import BrowserWindow from '@site/src/components/BrowserWindow';

## Accessing Transaction Trace

After completing a transaction (such as an InstaSwap or staking operation), you can view its trace by clicking the **VIEW TRACE** button in the transaction progress panel.

## Understanding the Trace View

### Overview Section

The trace overview shows the complete transaction flow across multiple chains.

<img src="/img/pre-hub-view-trace-overview.png" alt="Transaction Trace Overview" width="800" />

The overview displays:

- **Transaction ID**: Unique identifier for the transaction (e.g., "1.0000 LiqETH ↔ 5.1248 LiqSOL")
- **Visual Flow**: A diagram showing the transaction path through different chains
  - **Ethereum** → **Wire** → **Solana** (for LiqETH to LiqSOL swaps)
- **Timeline Steps**: Each step in the transaction with confirmation status
- **Right Panel**: List of all transaction events with timestamps and completion status

### Chain-Specific Details

#### Solana Details

Click on any chain step to view detailed information.

<img src="/img/pre-hub-view-trace-solana-details.png" alt="Solana Transaction Details" width="700" />

The Solana section shows:

- **Status**: Transaction confirmation status (e.g., "CONFIRMED" or "DEST-RELEASE")
- **Release Information**: Description of the transaction (e.g., "Released detected on the destination chain. Waiting for the wallet balance to reflect it.")
- **SOL**: Token information (e.g., "2PyfMa...vcspl.6")
- **Destination Chain**: Target blockchain (e.g., "sol")
- **Amount Out**: Tokens released (e.g., "5.1248 LiqSOL")
- **Recipient**: Wallet address receiving tokens
- **Release TX**: Transaction hash on Solana
- **Raw Payload**: View the complete transaction data

### Transaction Evidence

<img src="/img/pre-hub-view-trace-transactions.png" alt="Transaction Evidence" width="700" />

The **Evidence** section lists all blockchain transactions involved:

**Transactions**:

- **Ethereum approval transaction** (ETH - CONFIRMED)
- **Ethereum transaction** (ETH - CONFIRMED)
- **Wire relay transaction** (WIRE - CONFIRMED)
- **Wire settlement transaction** (WIRE - CONFIRMED)
- **Solana release signature** (SOL - CONFIRMED)

**Participants** (Accounts and recipients):

- **Destination**: Solana wallet address receiving the tokens

### Wire Trace & References

<img src="/img/pre-hub-view-trace-references.png" alt="Wire Trace References" width="700" />

**Wire Trace** section includes:

- **WIRE SWAP ID**: Internal Wire swap identifier (e.g., "#39")
- **SOURCE CHAIN**: Origin blockchain (e.g., "Ethereum")
- **DESTINATION CHAIN**: Target blockchain (e.g., "Solana")
- **AMOUNT IN**: Input amount (e.g., "0.2000 LiqETH")
- **AMOUNT OUT**: Output amount (e.g., "5.1248 LiqSOL")

**References** section provides:

- **PROVER SWAP ID**: Cryptographic proof identifier
- **SOURCE RELEASE TX**: Source chain transaction hash
- **DESTINATION RELEASE ID**: Destination chain transaction hash
- **DESTINATION RECIPIENT**: Final recipient address

### Raw Data

<img src="/img/pre-hub-view-trace-raw-data.png" alt="Raw Transaction Data" width="700" />

The **Raw** section displays the complete underlying activity data in JSON format, including:

```json
{
  "attemptId": 39,
  "destinationChain": 1,
  "sourceReleaseTxId": "0x...",
  "amountIn": "0.2000 LiqETH",
  "amountOut": "5.1248 LiqSOL",
  "destinationReleaseId": "5x...",
  "destinationRecipient": "8x3dPX7Dw8d1d...",
  "failedReason": 0,
  "failedMessage": ""
}
```

## Use Cases

### Debugging Failed Transactions

If a transaction fails or gets stuck, the trace view helps identify:

- Which chain step failed
- Error messages in the raw data
- Transaction hashes for blockchain explorers

### Verifying Cross-Chain Transfers

Confirm that tokens were:

- Locked on the source chain (e.g., Ethereum)
- Processed through Wire
- Released on the destination chain (e.g., Solana)

### Auditing Transaction Details

Review complete transaction information:

- Exact amounts transferred
- All wallet addresses involved
- Transaction fees and gas costs
- Timestamps for each step

## Important Notes

:::info Blockchain Confirmations
Transactions may take time to confirm on each blockchain. The trace view updates as confirmations are received.
:::

:::tip External Verification
Use the transaction hashes provided in the trace to verify transactions on blockchain explorers like Etherscan (Ethereum) or Solscan (Solana).
:::

:::warning Testnet Data
All transaction data on Wire Testnet is for development and testing purposes only. Real mainnet transactions will differ.
:::
