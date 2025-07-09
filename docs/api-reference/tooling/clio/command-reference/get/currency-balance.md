---
id: currency-balance
title: currency balance
---

## Command

```sh
clio get currency balance contract account symbol [OPTIONS]
```

## Description

Retrieve the balance of an account for a given currency.

## Synopsis

```sh
clio get currency balance
  contract <TEXT>         # REQUIRED: The contract that operates the currency
  account <TEXT>          # REQUIRED: The account to query balances for
  symbol <TEXT>           # REQUIRED: The symbol for the currency if the contract operates multiple currencies
  [-h, --help]            # Print this help message and exit
  [-j, --json]            # Output in JSON format
```

## Examples

### Get balance of sysio from `sysio.token` contract for SYS symbol

```sh
clio get currency balance sysio.token sysio SYS
```

**Output:**

```console
75496.0000 SYS
```
