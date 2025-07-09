---
id: currency-stats
title: currency stats
---

## Command

```sh
clio get currency stats contract symbol [OPTIONS]
```

## Description

Retrieve the stats of for a given currency.

## Synopsis

```sh
clio get currency stats
  contract <TEXT>         # REQUIRED: The contract that operates the currency
  symbol <TEXT>           # REQUIRED: The symbol for the currency if the contract operates multiple currencies
  [-h, --help]            # Print this help message and exit
  [-j, --json]            # Output in JSON format
```

## Examples

### Get stats of the SYS token from the `sysio.token` contract

```sh
clio get currency stats sysio.token SYS
```

**Output:**

```json
{
  "SYS": {
    "supply": "75496.0000 SYS",
    "max_supply": "75496.0000 SYS",
    "issuer": "sysio"
  }
}
```
