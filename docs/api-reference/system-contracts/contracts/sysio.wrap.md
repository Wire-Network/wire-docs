---
id: sysio.wrap
---

# `sysio.wrap`

## Overview

The `sysio.wrap` system contract allows node owners to bypass authorization checks or run privileged actions with 15/21 producer approval.

It does not grant any new powers or privileges to node owners beyond what already exists in Wire-based blockchains, but provides a more straightforward method for executing important governance-related actions, such as modifying account permissions or contract code.

The only action implemented by the `sysio.wrap` system contract is the `exec` action. This action allows for execution of a transaction, which is passed to the `exec` method in the form of a packed transaction in JSON via the `trx` parameter and the `executer` account that executes the transaction. The same `executer` account will also be used to pay the RAM and CPU fees needed to execute the transaction.

## Actions

### `exec`

Executes a transaction while bypassing regular authorization checks.

#### Prerequisites

- Requires the authorization of `sysio.wrap`, which must be a privileged account.

#### Effect

- Deferred transaction RAM usage is billed to the `executer` account.

| Parameter Name  | Description                                        |
|-----------------|----------------------------------------------------|
| `executer`      | The account executing the transaction and paying for RAM and CPU usage. |
| `trx`           | The transaction to be executed, provided as a packed transaction in JSON format. |

---
