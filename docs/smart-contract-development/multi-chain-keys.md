---
title: Multi-Chain Keys
sidebar_position: 8
---

# Multi-Chain Keys

Wire's `sysio.authex` system contract manages the binding of external chain keys to Wire accounts, enabling users to sign Wire transactions using their existing Ethereum or Solana wallets.

## How It Works

1. You link your external key (Ethereum/Solana) through the `sysio.authex` contract.
2. The system creates a protected `ex.*` permission on your account (e.g., `ex.eth`, `ex.sol`) with the external key. Only the system can modify this permission.
3. Contracts that support external authentication can require this permission for specific actions.
4. Your external wallet (MetaMask, Phantom, etc.) signs Wire transactions using its native signing algorithm.

## Supported Chains

| Chain | Key Type | Wallet Examples |
|-------|----------|-----------------|
| **Ethereum** | EM (`PUB_EM_`) | MetaMask, Coinbase Wallet, Rainbow |
| **Solana** | ED (`PUB_ED_`) | Phantom, Solflare, Backpack |

### Ethereum (EM Keys)

The **EM key type** is fully compatible with Ethereum. An Ethereum private key produces valid `SIG_EM_` signatures that Wire accepts natively. This uses the same secp256k1 curve as K1 keys but with Keccak-256 hashing (Ethereum's native hash function) instead of SHA-256.

MetaMask and other Ethereum wallets can sign Wire transactions using the same algorithm Ethereum uses natively.

### Solana (ED Keys)

The **ED key type** is compatible with Solana's Ed25519 curve. The 32-byte public key is embedded directly in the signature blob, making ED signatures fully self-contained — no special extensions or extra data needed.

Solana wallets using Ed25519 can sign Wire transactions directly.

## The `ex.*` Protected Namespace

Permissions starting with `ex.` (e.g., `ex.eth`, `ex.sol`) are a protected namespace:

- Only the `sysio` system account can create or modify permissions starting with "ex."
- These permissions are managed by the `sysio.authex` contract
- They provide a secure way to bind external chain keys to Wire accounts

## Special Permission Names

| Permission | What It Does |
|-----------|-------------|
| `sysio.code` | Automatically satisfied by a contract's running code. Used for inline action delegation. |
| `sysio.any` | When linked to an action, allows any of the account's permissions to authorize that action. |
| `sysio.payer` | Designates a separate resource payer for an action. Must be the first authorization, and the payer must also appear with a real permission. |
| `ex.*` | Protected namespace for external chain key bindings managed by `sysio.authex`. |

## Mixing Key Types

You can mix key types in a single account authority. For example, an active permission could accept either a K1 key or an EM key:

```json
{
  "threshold": 1,
  "keys": [
    { "key": "PUB_K1_...", "weight": 1 },
    { "key": "PUB_EM_...", "weight": 1 }
  ],
  "accounts": []
}
```

This allows the account to be controlled from either a Wire wallet or MetaMask.

## Reference

- [Key Formats](/docs/api-reference/tooling/kiod/key-formats.md) - Supported key types and formats
- [Accounts & Permissions](/docs/smart-contract-development/accounts-permissions.md) - Permission hierarchy and authorities
