---
id: currency-balance
title: currency balance
---

## Description

Retrieve the balance of an account for a given currency.

## Positionals
`contract` _TEXT_ - The contract that operates the currency

`account` _TEXT_ - The account to query balances for

`symbol` _TEXT_ - The symbol for the currency if the contract operates multiple currencies

## Options
There are no options for this subcommand

## Example
Get balance of sysio from sysio.token contract for SYS symbol. 

```sh
clio get currency balance sysio.token sysio SYS
```
```console
999999920.0000 SYS
```
