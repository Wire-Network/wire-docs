---
id: accounts
---

:::warning Deprecation Notice
| **Important**: The command `clio get accounts <public_key>` relies on the `history_api_plugin`, which in turn depends on the `history_plugin`. Please be aware that the `history_plugin` is **deprecated** and will no longer be maintained. For accessing historical blockchain data, consider using the `state_history_plugin` for full-history solutions or the `trace_api_plugin`.
:::

## Description

Retrieves all accounts associated with a defined public key.

:::info
This command will not return privileged accounts.
:::

## Positionals

`public_key` _TEXT_  - The public key to retrieve accounts for

## Options

- `-j,--json` - Output in JSON format

## Example

```sh
clio get accounts SYS8mUftJXepGzdQ2TaCduNuSPAfXJHf22uex4u41ab1EVv9EAhWt
{
  "account_names": [
    "alpha"
  ]
}
```
