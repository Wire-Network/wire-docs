---
id: supported-protocol-features
title: supported_protocol_features
---

## Command

```sh
clio get supported_protocol_features [OPTIONS]
```

## Description

Get supported protocol features from the blockchain. This command retrieves a list of all protocol features that the node supports, including their activation status.

## Synopsis

```sh
clio get supported_protocol_features
  [-h | --help]                       # Print this help message and exit
  [--help-all]                        # Show all help
```

## Examples

### Get supported protocol features

```sh
clio get supported_protocol_features
```

**Output:**

```json
[
  {
    "feature_digest": "0ec7e080177b2c02b278d5088611686b49d739925a92d9bfcacd7fc6b74053bd",
    "subjective_restrictions": {
      "enabled": true,
      "preactivation_required": false,
      "earliest_allowed_activation_time": "1970-01-01T00:00:00.000"
    },
    "description_digest": "64fe7df32e9b86be2b296b3f81dfd527f84e82b98e363bc97e40bc7a83733310",
    "dependencies": [],
    "protocol_feature_type": "builtin",
    "specification": [
      {
        "name": "builtin_feature_codename",
        "value": "PREACTIVATE_FEATURE"
      }
    ]
  },
  {
    "feature_digest": "1a99a59d87e06e09ec5b028a9cbb7749b4a5ad8819004365d02dc4379a8b7241",
    "subjective_restrictions": {
      "enabled": true,
      "preactivation_required": true,
      "earliest_allowed_activation_time": "1970-01-01T00:00:00.000"
    },
    "description_digest": "f3c3d91c4603cde2397c50e50d96e1fe3b6a0c1d85e06e8e73dd3d03f0e7b2b4",
    "dependencies": [
      "0ec7e080177b2c02b278d5088611686b49d739925a92d9bfcacd7fc6b74053bd"
    ],
    "protocol_feature_type": "builtin",
    "specification": [
      {
        "name": "builtin_feature_codename",
        "value": "ONLY_LINK_TO_EXISTING_PERMISSION"
      }
    ]
  }
]
```

## Requirements

- Install the currently supported version of `clio`.
- A running `nodeop` instance with the chain API plugin enabled.

:::note
The `clio` tool is bundled with the Wire software. [Installing Wire core](/docs/getting-started/install-dependencies.md) will install the `clio` and `kiod` command line tools.
:::

:::note
Use this command to discover available protocol features before activating them with `clio system activate`.
:::
