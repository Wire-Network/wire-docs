## Goal

Query infomation of a table

## Before you begin

* Install the currently supported version of `clio`

* Understand the following:
  * What is an [account](/docs/introduction/glossary.md#account). See also [Accounts and Permissions](/docs/smart-contract-development/accounts-permissions.md)
  * What is a [table](/docs/introduction/glossary.md#account) and understanding [scope](/docs/smart-contract-development/state-data.md#scope).

## Command

```sh
clio get table <account> <scope> <table>
```

## Example

```sh
clio get table sysio sysio abihash
```

Output:

```json
{
  "rows": [{
      "owner": "sysio",
      "hash": "38589666191bf8ad1f1c3e9ee0387f4e7d77ed9a410d5f2f35698aaf82e0f94d"
    }
  ],
  "more": false,
  "next_key": ""
}
````
