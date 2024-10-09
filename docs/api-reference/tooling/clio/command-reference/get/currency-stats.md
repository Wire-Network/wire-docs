---
id: currency-stats
title: currency stats
---

## Description
Retrieve the stats of for a given currency.

## Positionals
`contract` _TEXT_  - The contract that operates the currency

`symbol` _TEXT_ - The symbol for the currency if the contract operates multiple currencies

## Options
There are no options for this subcommand

## Example
Get stats of the SYS token from the sysio.token contract. 

```sh
clio get currency stats sysio.token SYS
```
```json
{
  "SYS": {
    "supply": "1000000000.0000 SYS",
    "max_supply": "10000000000.0000 SYS",
    "issuer": "sysio"
  }
}
```