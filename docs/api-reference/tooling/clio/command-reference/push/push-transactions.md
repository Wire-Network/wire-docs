---
id: push-transactions
title: push transactions
---

## Command

```sh
clio push transactions <transactions> [OPTIONS]
```

## Description

Push an array of arbitrary JSON transactions

## Synopsis

```sh
clio push transactions
  <transactions>                     # REQUIRED: The JSON string or filename defining the array of the transactions to push
  [-h | --help]                      # Print this help message and exit
  [--help-all]                       # Show all help 
```

## Examples

The following examples demonstrate how to use the `clio push transactions` command:

### Create and push multiple transactions

#### Step 1: Create the signed JSON transactions

```sh
sudo clio push action sysio newaccount '{
  "creator": "sysio",
  "name":    "calico",
  "owner": {
    "threshold": 1,
    "keys": [
      {
        "key":    "SYS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV",
        "weight": 1
      }
    ],
    "accounts": [],
    "waits":    []
  },
  "active": {
    "threshold": 1,
    "keys": [
      {
        "key":    "SYS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV",
        "weight": 1
      }
    ],
    "accounts": [],
    "waits":    []
  }
}' \
-p sysio@active \
-d -j \
-x 500 \
> calico_signed.json
```

```sh  
sudo clio push action sysio newaccount '{
  "creator": "sysio",
  "name":    "tabby",
  "owner": {
    "threshold": 1,
    "keys": [
      {
        "key":    "SYS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV",
        "weight": 1
      }
    ],
    "accounts": [],
    "waits":    []
  },
  "active": {
    "threshold": 1,
    "keys": [
      {
        "key":    "SYS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV",
        "weight": 1
      }
    ],
    "accounts": [],
    "waits":    []
  }
}' \
-p sysio@active \
-d -j \
-x 300 \
> tabby_signed.json
```

#### Step 2: Pack the signed transactions

Pack the signed `calico` transaction into the format required by `clio push transactions`:

```sh
clio convert pack_transaction "$(cat calico_signed.json)" \
> calico_packed.json     # produces { signatures, compression, packed_trx, ... }
```

Pack the signed `tabby` transaction as well:

```sh
clio convert pack_transaction "$(cat tabby_signed.json)" \
> tabby_packed.json      # produces the second packed blob
```

#### Step 3: Merge the packed transactions into one

Merge both packed transactions into a single JSON array:

```sh
jq -s '.' tabby_packed.json calico_packed.json \
> tx_array.json          # [ {…calico_blob…}, {…tabby_blob…} ]
```

#### Step 4: Broadcast the trx array

```sh
clio push transactions tx_array.json
```

#### Step 5: Verify each account was created successfully

```sh
clio get account tabby
clio get account calico
```
