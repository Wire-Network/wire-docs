---
id: sysio.token
---

# `sysio.token`

## Overview

The `sysio.token` contract defines structures and actions for creating, issuing, and managing tokens on Wire-based blockchains. It allows for creating new tokens, managing balances, and transferring tokens between accounts. It also includes utility methods for checking token supply and balances.

## Actions

### `create`

Creates a new token with a specified maximum supply.

| Parameter Name    | Description                                        |
|-------------------|----------------------------------------------------|
| `issuer`          | The account that creates the token.                |
| `maximum_supply`  | The maximum supply of the token being created.      |

---

It allows `issuer` to create a token in supply of `maximum_supply`. If validation is successful a new entry in [`currency_stats`](#currency_stats) for token symbol scope gets created.

### `issue`

Issues a specified quantity of tokens to the given account.

| Parameter Name    | Description                                        |
|-------------------|----------------------------------------------------|
| `to`              | The account to issue tokens to (must be the `issuer`).|
| `quantity`        | The amount of tokens to be issued.                 |
| `memo`            | A memo string accompanying the token issue.        |

---

### `retire`

Retires a specified quantity of tokens, reducing the total supply.

| Parameter Name    | Description                                        |
|-------------------|----------------------------------------------------|
| `quantity`        | The quantity of tokens to retire.                  |
| `memo`            | A memo string accompanying the transaction.        |

---

### `transfer`

Transfers tokens from one account to another.

| Parameter Name    | Description                                        |
|-------------------|----------------------------------------------------|
| `from`            | The account to transfer tokens from.               |
| `to`              | The account to transfer tokens to.                 |
| `quantity`        | The quantity of tokens to transfer.                |
| `memo`            | A memo string accompanying the transaction.        |

---

### `open`

Opens a zero-balance account for a specific token symbol at the expense of the RAM payer.

| Parameter Name    | Description                                        |
|-------------------|----------------------------------------------------|
| `owner`           | The account to be created.                         |
| `symbol`          | The token symbol for which to open the account.    |
| `ram_payer`       | The account paying for the RAM.                    |

---

### `close`

Closes the token account for the specified owner and symbol, provided the balance is zero.

| Parameter Name    | Description                                        |
|-------------------|----------------------------------------------------|
| `owner`           | The owner of the account to be closed.             |
| `symbol`          | The token symbol for the account to be closed.     |

---

## Static Methods

### `get_supply`

Returns the total supply of a specified token.

| Parameter Name              | Description                                        |
|-----------------------------|----------------------------------------------------|
| `token_contract_account`     | The account that manages the token contract.       |
| `sym_code`                   | The symbol code of the token.                     |

---

### `get_balance`

Returns the balance of a specified token for a given account.

| Parameter Name              | Description                                        |
|-----------------------------|----------------------------------------------------|
| `token_contract_account`     | The account that manages the token contract.       |
| `owner`                      | The account to check the balance for.             |
| `sym_code`                   | The symbol code of the token.                     |

---

## Tables

### `accounts`

Stores token balances for each account.

| Field     | Description                                        |
|-----------|----------------------------------------------------|
| `balance` | The token balance for the account.                 |

---

### `currency_stats`

Stores information about the supply and issuer of each token.

| Field        | Description                                        |
|--------------|----------------------------------------------------|
| `supply`     | The current supply of the token.                   |
| `max_supply` | The maximum supply allowed for the token.          |
| `issuer`     | The account that created the token.                |

---
