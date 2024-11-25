---
id: sysio.roa
---

# `sysio.roa`

## Actions

---

### `activateroa`

Sets ROA as active and sets `ram_byte_price`. Called as the last step in the Bios Boot sequence. It assigns networks `max_ram_bytes` to `sysio.roa`'s policy as well as set the cost in `SYS` of 1 byte of RAM stored in [roa_state](#roa_state) table.

Permissions: `roa@active`

| Parameter Name   | Type       | Description        |
|------------------|------------|--------------------|
| `max_ram_bytes`  | `uint64_t` | The maximum amount of RAM that can be allocated network-wide, defining the upper limit for the `sysio.roa`’s policy.|
| `ram_byte_price` | `asset`    | The set price in `SYS` for each byte of RAM, used for calculating costs of RAM allocation under the `sysio.roa` policy.|

### `addpolicy`

Adds a row to [`policies`](#policies) scoped to Node Owner, checks if Node Owner has enough `SYS` and updates [`reslimit`](#reslimit) respectively. If a row exists, it increments weights; else add a row for `owner`.

| Parameter Name | Type       | Description        |
|----------------|------------|--------------------|
| `owner`        | `name`     | The account name associated with this policy.  |
| `issuer`       | `name`     | The account name of the Node Owner. |
| `net_weight`   | `asset`    | The amount of `SYS` allocated for network bandwidth under this policy. |
| `cpu_weight`   | `asset`    | The amount of `SYS` allocated for CPU resources under this policy. |
| `ram_weight`   | `asset`    | The amount of `SYS` allocated for RAM under this policy. |
| `time_block`   | `uint32_t` | The block number beyond which the policy can be deleted or the weights reduced. |

Permissions:
-**Node Owners only**: This action can only be initiated by the account that is registered as a Node Owner.

### `updatepolicy`

Updates `reslimit` table with increased values only if the current block number is less than the `time_block`.

Permissions:
-**Node Owners only**: This action can only be initiated by the account that is registered as a Node Owner.

| Parameter Name | Type       | Description        |
|----------------|------------|--------------------|
| `owner`        | `name`     | The account name associated with this policy.    |
| `issuer`       | `name`     | The account name of the Node Owner. |
| `net_weight`   | `asset`    | The amount of `SYS` allocated for network bandwidth under this policy. |
| `cpu_weight`   | `asset`    | The amount of `SYS` allocated for CPU resources under this policy. |
| `ram_weight`   | `asset`    | The amount of `SYS` allocated for RAM under this policy. |
| `time_block`   | `uint32_t` | The block number beyond which the policy can be deleted or the weights reduced. |

### `deletepolicy`

Checks `policies` table scoped to the Node Owner (`issuer`), looking for a row with `owner`  and ensures that the current block number meets or exceeds the `time_block` specified for this policy. Verifies the `owner`s’ row existence in the `reslimit` table, then reduces the weights according to the amounts specified in the `issuer`s’ policy for this contract. Only unused RAM will be reclaimed. If, after reclaiming, all weights are 0, the `owner`s’ policy will be updated in the `reslimit` table and removed if all CPU,NET and RAM are 0. The same process applies to the `issuer`s’ policy row in the `policies` table.

Permissions:

- **Node Owners only**: This action can only be initiated by the account that is registered as a Node Owner.

| Parameter Name   | Type       | Description        |
|------------------|------------|--------------------|
| `owner`          | `name`     | The account name associated with this policy.    |
| `issuer`         | `name`     | The account name of the Node Owner. |

### `upramcost`

Updates `ram_byte_price` in `roa_state` table.

| Parameter Name   | Type       | Description        |
|------------------|------------|--------------------|
| `ram_byte_price` | `name`     |  |
| `tier`           | `uint8_t`  |  |

### regnodeowner **

Updates `ram_price` in `roa_state` table.

| Parameter Name   | Type       | Description        |
|------------------|------------|--------------------|
| `owner`          | `name`     |  |
| `tier`           | `uint8_t`  |  |

### `xferpolicy`

Transfers an existing policy to a different Node Owner, requiring multisig approval from both the `receiver` and the `issuer`

**Prerequisite**: `receiver` must have sufficient unallocated `SYS` to accommodate the policy.

| Parameter Name   | Type       | Description        |
|------------------|------------|--------------------|
| `owner`          | `name`     |  |
| `issuer`         | `name`     |  |
| `receiver`       | `name`     |  |

## Tables

### `nodeowners`

A table tracking all Node Owners and their `SYS` allocations.

| Field Name      | Type       | Description                                                          |
|-----------------|------------|----------------------------------------------------------------------|
| `owner`         | `name`     | The account name of the Node Owner.                                  |
| `tier`          | `uint8_t`  | Indicates which tier the Node Owner belongs to.                      |
| `total_sys`     | `asset`    | Total amount of `SYS` allotted to the Node Owner based on their tier.|
| `allocated_sys` | `asset`    | Total `SYS` allocated across policies issued by the Node Owner.        |

### `policies`

This table to look up A Node Owners issued policies.

| Field Name       | Type       | Description                                                                         |
|------------------|------------|-------------------------------------------------------------------------------------|
| `owner`          | `name`     | The account name associated with this policy.                 |
| `cpu_weight`     | `asset`    | The amount of `SYS` allocated for CPU resources under this policy.                    |
| `net_weight`     | `asset`    | The amount of `SYS` allocated for NET under this policy.                |
| `ram_weight`     | `asset`    | The amount of `SYS` allocated for RAM under this policy.                              |
| `ram_byte_price` | `asset`    | The price in `SYS` for 1 byte of RAM at the time the policy was created.            |
| `time_block`     | `uint32_t` | The block number beyond which the policy can be deleted or the weights reduced. |

### `roa_state`

Config table for the `sysio.roa` contract, used in managing resource pricing and activation settings.

| Field Name       | Type    | Description                                                                                             |
|------------------|---------|---------------------------------------------------------------------------------------------------------|
| `is_active`      | `bool`  | Flag used to determine if the ROA is ready to be used for resource management, typically activated as the last step in the Bios Boot sequence.(already handled in [wire-install](https://github.com/Wire-Network/wire-install)) |
| `ram_byte_price` | `asset` | The current price (SYS) for 1 byte of RAM. This pricing method is used instead of Bancor due to its ability to maintain stable pricing amidst SYS issuance changes and network expansion. |

### `reslimit`

Stores and tracks upper limits of an accounts resource allocation(s). Single row per `owner`, replaces the `userres` table on the `sysio.system` contract.

| Field Name   | Type       | Description                                                                       |
|--------------|------------|-----------------------------------------------------------------------------------|
| `owner`      | `name`     | The account name for which this resource limit is defined for.                        |
| `cpu_weight` | `asset`    | The total amount of `SYS` allocated for CPU from all policies issued for this account. |
| `net_weight` | `asset`    | The total amount of `SYS` allocated for NET from all policies issued for this account. |
| `ram_bytes`  | `uint64_t` | The total number of bytes allocated for RAM from all policies issued for this account. |
