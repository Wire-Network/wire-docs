---
title: Update Account Keys
---

## Overview

This tutorial demonstrates how to update the keys associated with a Wire blockchain account using the `clio` CLI tool. You'll learn how to generate new key pairs, import them into your wallet, and update account permissions to use the new keys.

:::danger[Security Consideration]
Always ensure you have a secure backup of your current keys before updating them. If you lose access to both old and new keys, **you may permanently lose access to your account.**
:::

## Prerequisites

* Install the currently supported version of `clio.`
  
:::info[Note]
| The `clio` tool and `kiod` are bundled with the Wire software. [Installing Wire core](/docs/getting-started/install-dependencies.md) will install the `clio` and `kiod` command line tools.
:::

* You have access to a local Wire node.
* You have authority over the `sysio` account and access to the account's private key.
* You have created an account (e.g., `alice`) and imported its private key. For more information, see [how to create an account](/docs/guides/how-to-create-an-account.md).
* You are familiar with the basic `clio set account` commands. For reference, see [set account](/docs/api-reference/tooling/clio/command-reference/set/set-account.md).

:::warning[REMINDER]
The install process has already set up the wallet for the *root* user. To interact with clio, ensure **you are on the root user**. Run `sudo su -` to switch to the root user before proceeding with the tutorial.
:::

## Steps

This tutorial uses the **alice** account as an example. Replace `alice` with your actual account name throughout the process.

### Step 1: Generate a New Key Pair

Create a new key pair for the permission you want to update. Using `--to-console` will output the private and public keys directly to the console.

```sh
clio create key --to-console
```

**Example Output:**

```sh
Private key: 5JvdXZ6TkKvpZxYvpF5TLvuyiFTzUUW4YF67u1MfD4F2vDv2ina
Public key: SYS6nVfXcwEqZTxrrJCYBcePP9tVpqaH8ReKkBJxv9MuUuiZ46a4N
```

:::important
Save both the private and public keys. You'll need the private key for wallet import and the public key for permission updates.
:::

### Step 2: Import the New Private Key

Import the newly generated private key into your wallet:

```sh
clio wallet import --private-key 5JvdXZ6TkKvpZxYvpF5TLvuyiFTzUUW4YF67u1MfD4F2vDv2ina
```

**Example Output:**

```sh
imported private key for: SYS6nVfXcwEqZTxrrJCYBcePP9tVpqaH8ReKkBJxv9MuUuiZ46a4N
```

### Step 3: Update Account Permission

Update the account permission to use the new public key:

```sh
clio set account permission alice active '{
  "threshold": 1,
  "keys": [
    {
      "key": "SYS6nVfXcwEqZTxrrJCYBcePP9tVpqaH8ReKkBJxv9MuUuiZ46a4N",
      "weight": 1
    }
  ],
  "accounts": [],
  "waits": []
}' -p alice@owner
```

**Arguments:**

* `alice`: The account name to update
* `active`: The permission level to update (can be `active`, `owner`, or custom permissions)
* `{ "threshold": 1, keys: [{key: "SYS6nVfXcwEqZTxrrJCYBcePP9tVpqaH8ReKkBJxv9MuUuiZ46a4N", weight: 1}], "accounts": [], "waits": []}` - authorization object with the **new** key
* `-p alice@owner`: The permission used to authorize the transaction (requires `owner` permission)

**Example Output:**

```sh
executed transaction: cc2226e7751db645acb74de93a82e7e34f6fdead0cd32078d875393b3da0d57e  160 bytes  322 us
#         sysio <= sysio::updateauth            {"account":"alice","permission":"active","parent":"owner","auth":{"threshold":1,"keys":[{"key":"SYS6...
warning: transaction executed locally, but may not be confirmed by the network yet         ] 
```

### Step 4: Verify the Update

Confirm that the account permission has been updated successfully:

```sh
clio get account alice
```

**Example Output:**

```sh
permissions: 
     owner     1:    1 SYS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV
        active     1:    1 SYS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV

permission links: 
     sysio.any: 

memory: 
     quota:      1016 KiB    used:         0 bytes

net bandwidth: 
     used:                 0 bytes
     available:         10.3 TiB  
     limit:             10.3 TiB  

cpu bandwidth:
     used:                 0 us   
     available:          300 hr   
     limit:              300 hr   
```

## Additional Considerations

### Updating Owner Permission

To update the owner permission, follow the same process but use `owner` instead of `active`:

```sh
clio set account permission alice owner '{
  "threshold": 1,
  "keys": [
    {
      "key": "SYS6nVfXcwEqZTxrrJCYBcePP9tVpqaH8ReKkBJxv9MuUuiZ46a4N",
      "weight": 1
    }
  ],
  "accounts": [],
  "waits": []
}' -p alice@owner
```

:::danger[Critical Warning]
Updating the `owner` permission is irreversible and requires extreme caution. Ensure you have secure backups and understand the implications before proceeding.
:::

### Multi-Signature Permissions

For accounts with multi-signature permissions, you may need to update multiple keys or adjust threshold values. Use the `--help` flag with the `set account permission` command for advanced options.

## Troubleshooting

### `Irrelevant authority included updateauth action declares irrelevant authority`

Ensure you're using the correct permission level (usually `@owner` for key updates)

---

### `Error 3120003: Locked wallet`

Make sure your wallet is unlocked before importing keys.

---

### `Error 3010004: Invalid authority Ensure that your authority JSON is valid follows the following format!...`

```txt
Error 3010004: Invalid authority
Ensure that your authority JSON is valid follows the following format!
{
  "threshold":      <INTEGER [1-2^32): the threshold that must be met to satisfy this authority>,
  "keys": [         <keys must be alpha-numerically sorted by their string representations and unique>
    ...
    {
      "key":        <STRING: SYS.IO compatible Public Key>,
      "weight":     <INTEGER [1-2^16): a signature from this key contributes this to satisfying the threshold>
    }
    ...
  ],
  "accounts": [     <accounts must be alpha-numerically sorted by their permission (actor, then permission) and unique>
    ...
    {
      "permission": {
        "actor":      <STRING: account name of the delegated signer>,
        "permission": <STRING: permission level on the account that must be satisfied>,
      },
      "weight":     <INTEGER [1-2^16): satisfying the delegation contributes this to satisfying the threshold>
    }
    ...
  ],
  "waits": [        <waits must be sorted by wait_sec, largest first, and be unique>
    ...
    {
      "wait_sec":   <INTEGER [1-2^32): seconds of delay which qualifies as passing this wait>
      "weight":     <INTEGER [1-2^16): satisfying the delay contributes this to satisfying the threshold>
    }
    ...
  ]
}
```

Ensure authorization object is valid and follows the format above.

:::caution[Recovery]
Always retain your old keys until you’ve confirmed that the new keys function correctly. If any issues arise during the update, you can still revert to the previous keys and restore access.
:::

## Reference

See the following reference guides for detailed command options:

* [clio create key](/docs/api-reference/tooling/clio/command-reference/create/key.md) - Generate new key pairs
* [clio wallet import](/docs/api-reference/tooling/clio/command-reference/wallet/import.md) - Import keys into wallet
* [clio set account permission](/docs/api-reference/tooling/clio/command-reference/set/set-account.md) - Update account permissions
* [clio get account](/docs/api-reference/tooling/clio/command-reference/get/account.md) - View account information
