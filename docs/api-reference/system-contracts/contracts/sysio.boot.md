---
id: sysio.boot
---

# `sysio.boot`

## Overview

The `sysio.boot` is a lightweight version of [`sysio.bios`](./sysio.bios.md).

## Actions

### `onerror`

Type: `void`

On error action, notification of this action is delivered to the sender of a deferred transaction when an objective error occurs while executing the deferred transaction. This action **is not meant** to be called directly.

| Parameter Name | Description |
| -------------- | ----------- |
| sender_id      | the id for the deferred transaction chosen by the sender. |
| sent_trx       | the deferred transaction that failed. |

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
