---
id: system-activate
title: system activate
tags:
  - clio
  - system
  - protocol
---

## Command

```sh
clio system activate [OPTIONS] <feature>
```

## Description

Activate a protocol feature by name. This command sends an action to the system contract to activate a specified protocol feature on the blockchain.

## Synopsis

```sh
clio system activate
  <feature>                           # REQUIRED: The name of the feature (from "clio get supported_protocol_features")
  [-h | --help]                       # Print this help message and exit
  [--help-all]                        # Show all help
  [-a | --account <account>]          # The contract account name, default is sysio
  [-p | --permission <permission>]    # The permission level to authorize, default is sysio
```

## Examples

### Activate a protocol feature

```sh
clio system activate PREACTIVATE_FEATURE -p sysio@active
```

**Where:**

- `PREACTIVATE_FEATURE` - The name of the protocol feature to activate
- `-p sysio@active` - The permission to authorize the action

### Activate with custom account

```sh
clio system activate ONLY_LINK_TO_EXISTING_PERMISSION -a sysio -p sysio@active
```

### List available features first

```sh
clio get supported_protocol_features
```

Then activate the desired feature by its codename.

## Requirements

- Install the currently supported version of `clio`.
- A running `nodeop` instance.
- The `sysio.system` contract must be deployed.
- Appropriate permissions to activate protocol features (typically requires `sysio@active`).

:::note
The `clio` tool is bundled with the Wire software. [Installing Wire core](/docs/getting-started/install-dependencies.md) will install the `clio` and `kiod` command line tools.
:::

:::note
Use `clio get supported_protocol_features` to discover available protocol features and their codenames before activation.
:::

:::warning
Protocol feature activation is irreversible. Ensure you understand the implications of activating a feature before proceeding.
:::
