---
id: table
title: table
---

## Command

```sh
clio get table <account> <scope> <table> [OPTIONS]
```

## Description

Retrieves the contents of a database table.

## Synopsis

```sh
clio get table
  <account>                        # REQUIRED: The account who owns the table where the smart contract was deployed
  <scope>                          # REQUIRED: The scope within the contract in which the table is found
  <table>                          # REQUIRED: The name of the table as specified by the contract abi
  [[-l | --limit] <rows>]          # The maximum number of rows to return
  [[-k | --key] <key_name>]        # (Deprecated) The name of the key to index by as defined by the abi, defaults to primary key
  [[-L | --lower] <value>]         # JSON representation of lower bound value of key, defaults to first
  [[-U | --upper] <value>]         # JSON representation of upper bound value value of key, defaults to last
  [--index <number>]               # Index number, `1`: primary (first), `2`: secondary index (in order defined by multi_index), `3`: third index, etc. Number or name of index can be specified, e.g. `secondary` or `2`
  [--key-type <type>]              # The key type of `--index`; primary only supports `i64`. All others support `i64`, `i128`, `i256`, `float64`, `float128`, `ripemd160`, `sha256`. Special type `name` indicates an account name
  [--encode-type <type>]           # The encoding type of `--key_type`; `dec` for decimal encoding of (`i[64|128|256]`, `float[64|128]`); `hex` for hexadecimal encoding of (`i256`, `ripemd160`, `sha256`)
  [[-b | --binary] <bytes>]        # Return the value as BINARY rather than using abi to interpret as JSON
  [-r | --reverse]                 # Iterate in reverse order
  [--show-payer]                   # Show RAM payer
  [-h | --help]                    # Print this help message and exit
```

## Examples

### Get the data from the `accounts` table

```sh
clio get table sysio.token sysio accounts
```

**Output:**

```json
{
  "rows": [{
      "balance": "75496.0000 SYS"
    }
  ],
  "more": false,
  "next_key": ""
}
```
