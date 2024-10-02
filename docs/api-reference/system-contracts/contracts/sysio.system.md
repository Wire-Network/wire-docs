---
id: sysio.system
---

# `sysio.system`

The `sysio.system` contract provides essential structures and actions to manage various system-level features, such as resource allocation, voting, RAM market, and governance in SysIO-based blockchains.

## Actions

---

### `init`

Initializes the system contract with a specified version and core symbol.

| Parameter Name | Description |
|----------------|-------------|
| `version`      | The version of the contract initialization (should be `0`). |
| `core`         | The core symbol of the system. |

---

### `onblock`

Triggered when a block is applied, used to pay producers and calculate producer rewards and block information.

| Parameter Name | Description |
|----------------|-------------|
| `header`       | The block header produced. |

---

### `setalimits`

Sets the resource limits (RAM, NET, CPU) for a specific account.

| Parameter Name | Description |
|----------------|-------------|
| `account`      | Name of the account whose resource limits are being set. |
| `ram_bytes`    | RAM limit in absolute bytes. |
| `net_weight`   | Fractional NET limit based on the total weight of all accounts. |
| `cpu_weight`   | Fractional CPU limit based on the total weight of all accounts. |

---

### `setacctram`

Sets the RAM limit for an account.

| Parameter Name | Description |
|----------------|-------------|
| `account`      | Name of the account whose RAM limit is being set. |
| `ram_bytes`    | RAM limit in absolute bytes (optional). |

---

### `setacctnet`

Sets the NET resource limit for an account.

| Parameter Name | Description |
|----------------|-------------|
| `account`      | Name of the account whose NET limit is being set. |
| `net_weight`   | NET resource limit (optional). |

---

### `setacctcpu`

Sets the CPU resource limit for an account.

| Parameter Name | Description |
|----------------|-------------|
| `account`      | Name of the account whose CPU limit is being set. |
| `cpu_weight`   | CPU resource limit (optional). |

---

### `activate`

Activates a protocol feature.

| Parameter Name       | Description |
|----------------------|-------------|
| `feature_digest`      | Hash of the protocol feature to activate. |

---

### `delegatebw`

Delegates bandwidth (NET and CPU) from one account to another.

| Parameter Name         | Description |
|------------------------|-------------|
| `from`                 | Account from which resources are being delegated. |
| `receiver`             | Account to receive the delegated bandwidth. |
| `stake_net_quantity`   | Quantity of tokens staked for NET bandwidth. |
| `stake_cpu_quantity`   | Quantity of tokens staked for CPU bandwidth. |
| `transfer`             | Boolean flag indicating whether ownership of the staked tokens is transferred to the receiver. |

---

### `setrex`

Sets the total rent balance of the REX pool to a specified value.

| Parameter Name | Description |
|----------------|-------------|
| `balance`      | The balance to set for the REX pool. |

---

### `deposit`

Deposits core tokens into the REX fund for a user.

| Parameter Name | Description |
|----------------|-------------|
| `owner`        | REX fund owner account. |
| `amount`       | Amount of tokens to deposit. |

---

### `withdraw`

Withdraws core tokens from a user’s REX fund.

| Parameter Name | Description |
|----------------|-------------|
| `owner`        | REX fund owner account. |
| `amount`       | Amount of tokens to withdraw. |

---

### `buyrex`

Buys REX tokens using the deposited core tokens.

| Parameter Name | Description |
|----------------|-------------|
| `from`         | The account buying REX. |
| `amount`       | Amount of core tokens to convert into REX. |

---

### `unstaketorex`

Uses staked tokens to buy REX.

| Parameter Name         | Description |
|------------------------|-------------|
| `owner`                | Owner of the staked tokens. |
| `receiver`             | Account that the tokens were staked to. |
| `from_net`             | Amount of tokens to unstake from NET bandwidth. |
| `from_cpu`             | Amount of tokens to unstake from CPU bandwidth. |

---

### `sellrex`

Sells REX in exchange for core tokens at the current exchange rate.

| Parameter Name | Description |
|----------------|-------------|
| `from`         | Account selling the REX. |
| `rex`          | Amount of REX to sell. |

---

### `cnclrexorder`

Cancels an unfilled REX sell order.

| Parameter Name | Description |
|----------------|-------------|
| `owner`        | The account owning the unfilled sell order. |

---

### `rentcpu`

Rents CPU resources by paying the market-determined amount of tokens.

| Parameter Name | Description |
|----------------|-------------|
| `from`         | Account paying for the CPU loan. |
| `receiver`     | Account receiving the rented CPU resources. |
| `loan_payment` | Tokens paid for the loan. |
| `loan_fund`    | Additional tokens added to the loan balance. |

---

### `rentnet`

Rents NET resources by paying the market-determined amount of tokens.

| Parameter Name | Description |
|----------------|-------------|
| `from`         | Account paying for the NET loan. |
| `receiver`     | Account receiving the rented NET resources. |
| `loan_payment` | Tokens paid for the loan. |
| `loan_fund`    | Additional tokens added to the loan balance. |

---

### `fundcpuloan`

Adds funds to a specific CPU loan to extend its duration.

| Parameter Name | Description |
|----------------|-------------|
| `from`         | The account adding funds to the loan. |
| `loan_num`     | The ID of the loan to fund. |
| `payment`      | Tokens transferred from the REX fund to the loan fund. |

---

### `fundnetloan`

Adds funds to a specific NET loan to extend its duration.

| Parameter Name | Description |
|----------------|-------------|
| `from`         | The account adding funds to the loan. |
| `loan_num`     | The ID of the loan to fund. |
| `payment`      | Tokens transferred from the REX fund to the loan fund. |

---

### `defcpuloan`

Withdraws funds from a specific CPU loan and adds them back to the REX fund.

| Parameter Name | Description |
|----------------|-------------|
| `from`         | The account withdrawing funds from the loan. |
| `loan_num`     | The ID of the loan to defund. |
| `amount`       | Amount of tokens to withdraw. |

---

### `defnetloan`

Withdraws funds from a specific NET loan and adds them back to the REX fund.

| Parameter Name | Description |
|----------------|-------------|
| `from`         | The account withdrawing funds from the loan. |
| `loan_num`     | The ID of the loan to defund. |
| `amount`       | Amount of tokens to withdraw. |

---

### `updaterex`

Updates a user's vote weight to reflect the current value of held REX tokens.

| Parameter Name | Description |
|----------------|-------------|
| `owner`        | The account whose REX balance is updated. |

---

### `rexexec`

Processes a specified number of queued REX-related actions, such as CPU/NET loans and sell orders.

| Parameter Name | Description |
|----------------|-------------|
| `user`         | The account executing the action. |
| `max`          | Maximum number of items to process. |

---

### `consolidate`

Consolidates REX maturity buckets into a single bucket available for selling after 4 days.

| Parameter Name | Description |
|----------------|-------------|
| `owner`        | The REX owner account. |

---

### `mvtosavings`

Moves a specified amount of REX into a savings bucket that never matures.

| Parameter Name | Description |
|----------------|-------------|
| `owner`        | The REX owner account. |
| `rex`          | Amount of REX to move to savings. |

---

### `mvfrsavings`

Moves a specified amount of REX out of savings, which will mature in 4 days.

| Parameter Name | Description |
|----------------|-------------|
| `owner`        | The REX owner account. |
| `rex`          | Amount of REX to move out of savings. |

---

### `closerex`

Deletes all of the REX-related records for an account and frees up the associated RAM.

| Parameter Name | Description |
|----------------|-------------|
| `owner`        | The user account whose REX entries are being closed. |

---

### `undelegatebw`

Decreases the total tokens delegated from one account to another for NET or CPU bandwidth.

| Parameter Name         | Description |
|------------------------|-------------|
| `from`                 | The account to undelegate bandwidth from. |
| `receiver`             | The account to undelegate bandwidth to. |
| `unstake_net_quantity` | Amount of tokens to unstake from NET bandwidth. |
| `unstake_cpu_quantity` | Amount of tokens to unstake from CPU bandwidth. |

---

### `buyram`

Increases the RAM quota for an account by purchasing RAM using tokens.

| Parameter Name | Description |
|----------------|-------------|
| `payer`        | The account buying the RAM. |
| `receiver`     | The account receiving the RAM. |
| `quant`        | The quantity of tokens to use for purchasing RAM. |

---

### `buyrambytes`

Increases the RAM quota for an account by purchasing a specified amount of RAM in bytes.

| Parameter Name | Description |
|----------------|-------------|
| `payer`        | The account buying the RAM. |
| `receiver`     | The account receiving the RAM. |
| `bytes`        | The quantity of RAM to buy, in bytes. |

---

### `sellram`

Decreases the RAM quota for an account by selling RAM and receiving tokens in exchange.

| Parameter Name | Description |
|----------------|-------------|
| `account`      | The account selling the RAM. |
| `bytes`        | The amount of RAM to sell, in bytes. |

---

### `refund`

Claims all pending unstaked tokens after the delegation period.

| Parameter Name | Description |
|----------------|-------------|
| `owner`        | The owner of the unstaked tokens. |
