---
title: Key Formats
sidebar_position: 2
---

# Key Formats

Wire supports multiple key formats for both private and public keys. Understanding these formats is important when working with wallets, accounts, and transactions.

## Overview

Wire uses elliptic curve cryptography for key generation. The two primary curves supported are:

- **K1 (secp256k1)**: The same curve used by Bitcoin. This is the default and most commonly used curve.
- **R1 (secp256r1)**: Also known as P-256 or prime256v1. Used by hardware security modules and iPhone's Secure Enclave.

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
