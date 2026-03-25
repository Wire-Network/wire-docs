---
title: Key Formats
sidebar_position: 2
---

# Key Formats

Wire supports multiple key formats for both private and public keys. Understanding these formats is important when working with wallets, accounts, and transactions.

## Overview

Wire uses elliptic curve cryptography for key generation. Wire supports six key types, covering all major blockchain ecosystems:

| Type | Curve/Algorithm | Use Case |
|------|-----------------|----------|
| **K1** (`PUB_K1_`) | secp256k1 + SHA-256 | Standard Wire keys (Bitcoin-compatible). Default and most common. |
| **R1** (`PUB_R1_`) | secp256r1 (P-256) | Hardware security modules, iPhone Secure Enclave, Android. |
| **WA** (`PUB_WA_`) | WebAuthn | Hardware security keys (YubiKey, etc.) |
| **EM** (`PUB_EM_`) | secp256k1 + Keccak-256 | **Ethereum** wallets (MetaMask). Native Ethereum signing. |
| **ED** (`PUB_ED_`) | Ed25519 | **Solana** wallets (Phantom). Public key embedded in signature. |
| **BLS** (`PUB_BLS_`) | BLS12-381 | Consensus only (not for user transactions). |

:::tip Multi-Chain Support
The **EM key type** is fully compatible with Ethereum. An Ethereum private key produces valid `SIG_EM_` signatures that Wire accepts natively, enabling MetaMask users to sign Wire transactions.

The **ED key type** is compatible with Solana's Ed25519 curve. The 32-byte public key is embedded directly in the signature blob, making ED signatures fully self-contained.

You can mix key types in a single account authority. For example, an active permission could accept either a K1 key or an EM key, allowing the account to be controlled from either a Wire wallet or MetaMask.
:::

## Key Format Types

### Legacy Format (WIF)

The legacy format uses Wallet Import Format (WIF) encoding for private keys and a custom Base58 encoding for public keys.

| Key Type | Prefix | Example |
|----------|--------|---------|
| **Private Key** | `5` (K1) | `5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3` |
| **Public Key** | `SYS` | `SYS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV` |

:::info
The WIF format was inherited from Bitcoin. For technical details on WIF encoding, see [Wallet Specification](./wallet-specification.md).
:::

### New Format (Prefixed)

The new format uses explicit prefixes that indicate the key type and curve:

| Key Type | Private Key Prefix | Public Key Prefix | Signature Prefix |
|----------|-------------------|-------------------|------------------|
| **K1** | `PVT_K1_` | `PUB_K1_` | `SIG_K1_` |
| **R1** | `PVT_R1_` | `PUB_R1_` | `SIG_R1_` |
| **WA** | — | `PUB_WA_` | `SIG_WA_` |
| **EM** | — | `PUB_EM_` | `SIG_EM_` |
| **ED** | — | `PUB_ED_` | `SIG_ED_` |

**Examples:**

| Key Type | Prefix | Example |
|----------|--------|---------|
| **K1 Private Key** | `PVT_K1_` | `PVT_K1_2bfGi9rYsXQSXXTvJbDAPhHLQUojjaNLomdm3cEJ1XTzMqUt3V` |
| **K1 Public Key** | `PUB_K1_` | `PUB_K1_6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5BoDq63` |
| **R1 Private Key** | `PVT_R1_` | `PVT_R1_Dj4hMNXEmZUXeDoYAN5BixgozwcT63DYakH9y6mnLP8UBZvhr` |
| **R1 Public Key** | `PUB_R1_` | `PUB_R1_85ZevNAVuWTrEHKt4v2agyLccgUaP3H97t4kPaYBRjL6itkdm1` |

The new format is recommended because:

- It's self-describing (you can tell the curve type from the prefix)
- It's consistent across all key types
- It avoids confusion with other blockchain key formats

:::note EM and ED Keys
EM (Ethereum) and ED (Solana) keys are managed through external wallets (MetaMask, Phantom) and linked to Wire accounts via the `sysio.authex` system contract. See [Multi-Chain Keys](/docs/smart-contract-development/multi-chain-keys.md) for details.
:::

## Converting Between Formats

You can convert K1 keys between legacy and new formats using the `clio convert` commands.

:::note
Conversion commands are only available for K1 keys. R1 keys are always generated in the new format (`PVT_R1_`, `PUB_R1_`).
:::

### Convert Private Key

```sh
# Legacy to new format
clio convert k1_private_key 5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3
```

**Output:**

```sh
Private key: 5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3
Private key: PVT_K1_2bfGi9rYsXQSXXTvJbDAPhHLQUojjaNLomdm3cEJ1XTzMqUt3V
```

### Convert Public Key

```sh
# Legacy to new format
clio convert k1_public_key SYS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV
```

**Output:**

```sh
Public key: SYS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV
Public key: PUB_K1_6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5BoDq63
```

## Generating Keys

### Generate K1 Keys (Default)

```sh
# Legacy format (default)
clio create key --to-console

# New format (recommended)
clio create key --k1 --to-console
```

### Generate R1 Keys

```sh
clio create key --r1 --to-console
```

### Generate Keys Directly in Wallet

```sh
# K1 key (default)
clio wallet create_key

# Explicitly specify K1
clio wallet create_key K1

# R1 key
clio wallet create_key R1
```

## Importing Keys

Both legacy and new format keys can be imported into wallets:

```sh
# Import legacy format
clio wallet import --private-key 5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3

# Import new format
clio wallet import --private-key PVT_K1_2bfGi9rYsXQSXXTvJbDAPhHLQUojjaNLomdm3cEJ1XTzMqUt3V
```

## Security Considerations

:::danger

- Never share your private keys
- Never commit private keys to version control
- Never use the development key (`5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3`) for production accounts
- Store private keys securely and maintain backups

:::

## Reference

- [Wallet Specification](./wallet-specification.md) - Technical details on WIF encoding
- [clio create key](/docs/api-reference/tooling/clio/command-reference/create/key.md)
- [clio wallet create_key](/docs/api-reference/tooling/clio/command-reference/wallet/create-key.md)
- [clio wallet import](/docs/api-reference/tooling/clio/command-reference/wallet/import.md)
- [clio convert k1_private_key](/docs/api-reference/tooling/clio/command-reference/convert/k1-private-key.md)
- [clio convert k1_public_key](/docs/api-reference/tooling/clio/command-reference/convert/k1-public-key.md)
