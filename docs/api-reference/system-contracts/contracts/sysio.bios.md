---
id: sysio.bios
---

# `sysio.bios`

## Overview

The `sysio.bios` is a minimalist system contract that supplies **only the actions** that are absolutely critical to bootstrap a chain and nothing more. Similar to `sysio.system` sample contract implementation, there are a few actions which are not implemented at the contract level (`newaccount`, `updateauth`, `deleteauth`, `linkauth`, `unlinkauth`, `canceldelay`, `onerror`, `setcode`), they are just declared in the contract so they will show in the contract's ABI and users will be able to push those actions to the chain via the account holding the `sysio.system` contract, but the implementation is at the Wire Sysio core level. They are referred to as native actions

## Actions

### `newaccount`

Type: `void`

Called after a new account is created, enforcing resource limits and naming conventions for new accounts.

| Parameter Name | Description |
| -------------- | ----------- |
| `creator`      | The account creating the new account |
| `name`         | The name of the new account |
| `owner`        | The owner authority of the new account |
| `active`       | The active authority of the new account |

---

### `updateauth`

Type: `void`

Update authorization action updates permission for an account.

| Parameter Name | Description |
| -------------- | ----------- |
| `account`      | The account for which the permission is updated. |
| `permission`   | The permission name which is updated. |
| `parent`       | The parent of the permission which is updated. |
| `auth`         | The JSON describing the permission authorization. |

---

### `deleteauth`

Type: `void`

Deletes the authorization for an account's permission.

| Parameter Name | Description |
| -------------- | ----------- |
| `account`      | The account for which the permission is deleted. |
| `permission`   | The permission name to be deleted. |

---

### `linkauth`

Type: `void`

Assigns a specific action from a contract to a permission you have created.

| Parameter Name | Description |
| -------------- | ----------- |
| `account`      | The permission's owner to be linked |
| `code`         | The contract to link the action from |
| `type`         | The action to be linked |
| `requirement`  | The permission to be linked |

Five system actions **can not** be linked: `updateauth`, `deleteauth`, `linkauth`, `unlinkauth`, and `canceldelay`.

When doing authorization checks, Wire based blockchain starts with the action needed to be authorized (and the contract belonging to), and looks up which permission is needed to pass authorization validation. If a link is set, that permission is used for authorization validation, otherwise `active` is the default, with the exception of `sysio.any`. `sysio.any` is an implicit permission which exists on every account. By linking actions to `sysio.any` they become accessible to any permissions defined for the account.

---

### `unlinkauth`

Type: `void`

Unlinks a previously linked action.

| Parameter Name | Description |
| -------------- | ----------- |
| `account`      | The owner of the permission to be unlinked. |
| `code`         | The contract from which the action is unlinked. |
| `type`         | The action to be unlinked. |

---

### `canceldelay`

Type: `void`

Cancel delay action cancels a deferred transaction..

| Parameter Name | Description |
| -------------- | ----------- |
| `canceling_auth` |the permission that authorizes this action. |
| `trx_id`       | the deferred transaction id to be cancelled.  |

---

### `setcode`

Type: `void`

Sets the contract code for an account.

| Parameter Name | Description |
| -------------- | ----------- |
| `account`      | The account for which to set the contract code. |
| `vmtype`       | Reserved, set to zero. |
| `vmversion`    | Reserved, set to zero. |
| `code`         | The contract code content. |

---

### `setabi`

Type: `void`

Sets the ABI for a contract.

| Parameter Name | Description |
| -------------- | ----------- |
| `account`      | The account to set the ABI for. |
| `abi`          | The ABI content represented as a vector of characters. |

---

### `onerror`

Type: `void`

On error action, notification of this action is delivered to the sender of a deferred transaction when an objective error occurs while executing the deferred transaction. This action **is not meant** to be called directly.

| Parameter Name | Description |
| -------------- | ----------- |
| sender_id      | the id for the deferred transaction chosen by the sender. |
| sent_trx       | the deferred transaction that failed. |

---

### `setpriv`

Sets the privilege status for an account (turn it on/off).

| Parameter Name | Description                               |
| -------------- | ----------------------------------------- |
| `account`      | The account to set the privileged status for. |
| `is_priv`      | 0 for false, > 0 for true to indicate privilege status. |

---

### `setalimits`

Sets the resource limits of an account.

| Parameter Name | Description                                                                       |
| -------------- | --------------------------------------------------------------------------------- |
| `account`      | Name of the account whose resource limit to be set.                               |
| `ram_bytes`    | RAM limit in absolute bytes.                                                      |
| `net_weight`   | Fractionally proportionate net limit of available resources based on weight ratio. |
| `cpu_weight`   | Fractionally proportionate CPU limit of available resources based on weight ratio. |

---

### `setprods`

Sets a new list of active producers by proposing a schedule change. This schedule change becomes “pending” once the proposal’s block is irreversible and then “active” once the block promoting the schedule is also irreversible.

| Parameter Name | Description                           |
| -------------- | ------------------------------------- |
| `schedule`     | New list of active producers to set.  |

---

### `setparams`

Sets the blockchain parameters allowing for various degrees of customization.

| Parameter Name | Description                                       |
| -------------- | ------------------------------------------------- |
| `params`       | New blockchain parameters to set for customization.|

---

### `reqauth`

Checks if `from` has authorization to access the current action, assuming if it's listed in the action’s allowed permissions vector.

| Parameter Name | Description                                    |
| -------------- | ---------------------------------------------- |
| `from`         | The account name to check authorization for.   |

---

### `activate`

Activates a protocol feature.

| Parameter Name | Description                               |
| -------------- | ----------------------------------------- |
| `feature_digest` | Hash of the protocol feature to activate. |

---

### `reqactivated`

Asserts that a protocol feature has been activated.

| Parameter Name | Description                                           |
| -------------- | ----------------------------------------------------- |
| `feature_digest` | Hash of the protocol feature to check for activation. |

---
