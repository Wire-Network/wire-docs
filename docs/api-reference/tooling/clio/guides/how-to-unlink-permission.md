# Unlink a linked permission level

## Prerequisites

* Install the currently supported version of `clio`

* Understand the following:
  * What is an [account](/docs/introduction/glossary.md#account)
  * What is a [permission level](/docs/introduction/glossary.md#permission-level)
  * What is an [action](/docs/introduction/glossary.md#action)

## Steps

Remove a linked permission level from an action `transfer` of contract `hodlcontract`

```sh
clio set action permission alice hodlcontract transfer NULL
```
