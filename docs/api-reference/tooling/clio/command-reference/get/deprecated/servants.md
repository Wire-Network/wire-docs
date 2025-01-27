---
id: servants
---

:::warning Deprecation Notice
| **Important**: The command `clio get servants <account>` relies on the `history_api_plugin`, which in turn depends on the `history_plugin`. Please be aware that the `history_plugin` is **deprecated** and will no longer be maintained. For accessing historical blockchain data, consider using the `state_history_plugin` for full-history solutions or the `trace_api_plugin`.
:::

## Description

Retrieve accounts which are servants of a given account.

## Info

**Command**

```sh
clio get servants
```

**Output**

```console
Usage: clio get servants <account>

Positional Arguments:
  account TEXT                The name of the controlling account
```

## Command

```sh
clio get servants inita
```

## Output

```json
{
  "controlled_accounts": [
    "tester"
  ]
}
```
