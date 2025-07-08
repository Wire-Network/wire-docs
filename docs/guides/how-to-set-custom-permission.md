---
id: how-to-set-custom-permission
title: Setting Custom Action Permissions
---

## Overview

This tutorial explains how to link a smart contract action to a custom permission using the [`clio set action permission`](/docs/api-reference/tooling/clio/command-reference/set/set-action-permission.md) command. Custom permissions allow you to precisely control which accounts or permission levels can perform certain actions.

As shown in the tutorial below, you can assign a custom permission — such as `customp1` or `customp2` — to an action, ensuring that it can only be executed under that specific permission level. To remove the custom permission link, set the permission to NULL.

## Prerequisites

* Install the currently supported version of `clio.`

:::note
| The `clio` tool and `kiod` are bundled with the Wire software. [Installing Wire core](/docs/getting-started/install-dependencies.md) will install the `clio` and `kiod` command line tools.

:::

* You have authority over the `sysio`, `bob` and `scontract1` accounts and access to their `active` private keys.
* You have created a custom permission. See [clio set account permission](/docs/api-reference/tooling/clio/command-reference/set/set-account.md) or use the following command:

```sh
clio push action sysio updateauth '{
  "account": "bob",
  "permission": "customp1",
  "parent": "active",
  "auth": {
    "threshold": 1,
    "keys": [
      { "key": "SYS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV", "weight": 1 }
    ],
    "accounts": [],
    "waits": []
  }
}' -p bob@active
```

:::warning[REMINDER]
The install process has already set up the wallet for the *root* user. To interact with clio, ensure **you are on the root user**. Run `sudo su -` to switch to the root user.
:::

## Steps

### 1. Setting a Custom Permission on an Action

Set permission on a *hi* action deployed to the `scontract1` account so that the `bob` account requires the custom permission `customp1` for executing the action:

```shell
clio set action permission bob scontract1 hi customp1 -p bob@active
```

**Explanation:**

* **bob:** Account linking the custom permission.
* **scontract1:** Account that owns the smart contract.
* **hi:** The action to which the permission is being linked.
* **customp1:** The permission required for executing the action.
* **-p bob@active:** Uses bob’s active permission to authorize the change.

*Example Output:*

```shell
xecuted transaction: 389545ab293099e3e612200da713012556109f6fd3b312e76b54275c0cf9e117  128 bytes  241 us
#         sysio <= sysio::linkauth              {"account":"bob","code":"scontract1","type":"hi","requirement":"customp1"}
warning: transaction executed locally, but may not be confirmed by the network yet         ] 
```

### 2. Setting a Different Custom Permission

For a *bye* action deployed to the same `scontract1` account, you may want to require a different custom permission (e.g., `customp2`):

```shell
clio set action permission bob scontract1 bye customp2 -p bob@active
```

*Example Output:*

```shell
executed transaction: 5723f72e9f316c5ea740d8ff65e92ed4c97c702ff17d49ee1f056ca5c57b2280  128 bytes  298 us
#         sysio <= sysio::linkauth              {"account":"bob","code":"scontract1","type":"bye","requirement":"customp2"}
warning: transaction executed locally, but may not be confirmed by the network yet         ] 
```

Check bob's account:

```sh
clio get account bob
```

```sh
permissions: 
     owner     1:    1 SYS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV
        active     1:    1 SYS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV
           customp1     1:    1 SYS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV
           customp2     1:    1 SYS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV

permission links: 
     customp1:
          scontract1::hi
     customp2:
          scontract1::bye
     sysio.any: 

... 
```

### 3. Removing the Custom Permission

To remove the custom permission requirement from the *hi* action, set the permission requirement to `NULL`:

```shell
clio set action permission bob scontract1 hi NULL -p bob@active
```

```sh
permissions: 
     owner     1:    1 SYS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV
        active     1:    1 SYS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV
           customp1     1:    1 SYS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV
           customp2     1:    1 SYS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV

permission links: 
     customp2:
          scontract1::bye
     sysio.any: 

...
```

*Example Output:*

```shell
executed transaction: 7773ea2bcd5f335e842f4289094302faa06a8d4ff293bc1afaa9cdba0cdecb9a  120 bytes  234 us
#         sysio <= sysio::unlinkauth            {"account":"bob","code":"scontract1","type":"hi"}
warning: transaction executed locally, but may not be confirmed by the network yet         ] 
```

## See Also

* [Accounts and Permissions](/docs/smart-contract-development/accounts-permissions.md)
