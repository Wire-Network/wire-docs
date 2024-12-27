---
id: sysio.roa
---

# `sysio.roa`

## Overview

The `sysio.roa` is the system contract that defines how resources such as CPU, NET, and RAM are allocated and consumed within the network. As a system account, it has infinite CPU and NET as well as allotted access to all the RAM. In the context of Wire-based blockchains, CPU denotes the computational time required to process a transaction, NET refers to the volume of data transmitted over the network during a transaction, and RAM pertains to the storage or modification of data on the blockchain.
All resources are represented by a new core token called `SYS`, which is a non-transferable token used internally by the system. Users do not hold `SYS` tokens; instead,*tokens are allocated directly to the ROA*, which imposes usage limits based on the Node Owners' holdings (in Wire ecosystem, Node Owners are the entities who own all the system resources of the network).

ROA (Resource Owner Association) is a novel approach to manage system resources; it's the operational framework that enables Node Owners to allocate resources through *policies* that delegate portions of their `SYS` to smart contracts.

All actions except `activateroa`, `setbyprice` are only callable by accounts that are registered as Node Owners.

:::info
Similar to `sysio.system` sample contract implementation, `reducepolicy` is not implemented within the contract itself. This action is declared in the contract with the sole purpose of appearing in contract's ABI, but its implementation is in Wire Sysio core software.
:::

## Actions

---

### `activateroa`

**Permissions:** `roa@active`

Sets ROA as active and sets `bytes_per_unit`. Called as the last step in the Bios Boot sequence. It assigns networks `max_ram_bytes` to `sysio.roa`'s policy as well as set the cost in `SYS` of 1 byte of RAM stored in [roa_state](#roa_state) table.

| Parameter Name   | Type       | Description        |
|------------------|------------|--------------------|
| `max_ram_bytes`  | `uint64_t` | The maximum amount of RAM that can be allocated network-wide, defining the upper limit for the `sysio.roa`’s policy.|
| `bytes_per_unit` | `asset`    | The set price in `SYS` for each byte of RAM, used for calculating costs of RAM allocation under the `sysio.roa` policy.|

---

### `setbyprice`

**Permissions:** `roa@active`

Updates the `byte_per_unit` in our `roa_state` table.

:::info
**Only called on network expansion.**
:::

| Parameter Name   | Type       | Description        |
|------------------|------------|--------------------|
| `owner_name`     | `name`     | The account of the Node Owner. |
| `tier`           | `uint8_t`  | The tier of the Node Owner. |

---

### `regnodeowner`

Adds `owner` Node Owner to `nodeowners` and gives a predefined allocation of `SYS` according to `tier`. A default policy is issued to `owner`, whereby 10% of `owner`'s `SYS` is allocated to `sysio` for account creations.

| Parameter Name   | Type       | Description        |
|------------------|------------|--------------------|
| `owner_name`     | `name`     | The account of the Node Owner. |
| `tier`           | `uint8_t`  | The tier of the Node Owner. |

---

### `addpolicy`

Adds a row to [`policies`](#policies) scoped to Node Owner, it checks if Node Owner has enough `SYS` and updates [`reslimit`](#reslimit) respectively. If a row exists, it increments weights; else add a row for `owner`.

| Parameter Name | Type       | Description        |
|----------------|------------|--------------------|
| `owner`        | `name`     | The account name associated with this policy.  |
| `issuer`       | `name`     | The account name of the Node Owner. |
| `net_weight`   | `asset`    | The amount of `SYS` allocated for network bandwidth under this policy. |
| `cpu_weight`   | `asset`    | The amount of `SYS` allocated for CPU resources under this policy. |
| `ram_weight`   | `asset`    | The amount of `SYS` allocated for RAM under this policy. |
| `time_block`   | `uint32_t` | The block number beyond which the policy can be deleted or the weights reduced. |

---

### `expandpolicy`

Updates `reslimit` table with increased values only if the current block number is less than the `time_block`.

| Parameter Name | Type       | Description        |
|----------------|------------|--------------------|
| `owner`        | `name`     | The account name associated with this policy.    |
| `issuer`       | `name`     | The account name of the Node Owner. |
| `net_weight`   | `asset`    | The amount of `SYS` allocated for network bandwidth under this policy. |
| `cpu_weight`   | `asset`    | The amount of `SYS` allocated for CPU resources under this policy. |
| `ram_weight`   | `asset`    | The amount of `SYS` allocated for RAM under this policy. |
| `time_block`   | `uint32_t` | The block number beyond which the policy can be deleted or the weights reduced. |

---

### `reducepolicy` **

- `reducepolicy` is a *native action*

This action checks `policies` table scoped to the Node Owner (`issuer`), looking for a row with `owner`  and ensures that the current block number meets or exceeds the `time_block` specified for this policy. It verifies the `owner`s’ row existence in the `reslimit` table, then reduces the weights according to the amounts specified in the `issuer`s’ policy for this contract. Only unused RAM will be reclaimed. If, after reclaiming, all weights are 0, the `owner`s’ policy will be updated in the `reslimit` table and removed if all CPU,NET and RAM are 0. The same process applies to the `issuer`s’ policy row in the `policies` table.

| Parameter Name   | Type       | Description        |
|------------------|------------|--------------------|
| `owner`          | `name`     | The account name associated with this policy.    |
| `issuer`         | `name`     | The account name of the Node Owner. |

## Tables

---

### `nodeowners`

A table tracking all Node Owners and their `SYS` allocations.

| Field Name      | Type       | Description                                                          |
|-----------------|------------|----------------------------------------------------------------------|
| `owner`         | `name`     | The account name of the Node Owner.                                  |
| `tier`          | `uint8_t`  | Indicates which tier the Node Owner belongs to.                      |
| `total_sys`     | `asset`    | Total amount of `SYS` allotted to the Node Owner based on their tier.|
| `allocated_sys` | `asset`    | Total `SYS` allocated across policies issued by the Node Owner.        |
| `allocated_bw`  | `asset`    | Total `SYS` allocated to CPU/NET across policies issued by the Node Owner.        |
| `allocated_ram` | `asset`    | Total `SYS` aallocated to RAM across policies issued by the Node Owner.        |
| `network_gen`   | `uint8_t`  | Starts at 0 and increments each network expansion.          |

---

### `policies`

This table stores policies issued by Node Owners.

| Field Name       | Type       | Description                                                                         |
|------------------|------------|-------------------------------------------------------------------------------------|
| `owner`          | `name`     | The account name associated with this policy.                 |
| `issuer`          | `name`    | The account name of the Node Owner who issued this policy.                 |
| `cpu_weight`     | `asset`    | The amount of `SYS` allocated for CPU resources under this policy.                    |
| `net_weight`     | `asset`    | The amount of `SYS` allocated for NET under this policy.                |
| `ram_weight`     | `asset`    | The amount of `SYS` allocated for RAM under this policy.                              |
| `bytes_per_unit` | `uint64_t` | The number of bytes representing the smallest unit of SYS. |
| `time_block`     | `uint32_t` | The block number beyond which the policy can be deleted or the weights reduced. |

---

### `roa_state`

Config table for the `sysio.roa` contract, used in managing resource pricing and activation settings.

| Field Name       | Type    | Description                                                                                             |
|------------------|---------|---------------------------------------------------------------------------------------------------------|
| `is_active`      | `bool`  | Flag used to determine if the ROA is ready to be used for resource management, typically activated as the last step in the Bios Boot sequence. |
| `total_sys`      | `asset` | Total `SYS` of the network.         |
| `bytes_per_unit` | `uint64_t` | The number of bytes representing the smallest unit of SYS. |
| `network_gen`    | `uint8_t` | Starts at 0 and increments each network expansion.           |

---

### `reslimit`

Stores and tracks upper limits of accounts' resource allocation(s). Single row per `owner`, *replaces the `userres` table on the `sysio.system` contract.*

| Field Name   | Type       | Description                                                                       |
|--------------|------------|-----------------------------------------------------------------------------------|
| `owner`      | `name`     | The account name for which this resource limit is defined for.                        |
| `cpu_weight` | `asset`    | The total amount of `SYS` allocated for CPU from all policies issued for this account. |
| `net_weight` | `asset`    | The total amount of `SYS` allocated for NET from all policies issued for this account. |
| `ram_bytes`  | `uint64_t` | The total number of bytes allocated for RAM from all policies issued for this account. |
