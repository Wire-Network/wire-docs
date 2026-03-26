---
title: Delete Data from a Multi-Index Table
tags:
  - guide
  - multi-index
  - tables
---

## Overview

This guide provides instructions for deleting data from a multi-index table.

## Prerequisites

- Before proceeding, ensure that **you have completed the Getting Started section** and that you have followed the [Getting Started Documentation Diagram](/docs/getting-started/getting-started-intro.md).
- This page assumes you are familiar with [Smart Contract Basics](/docs/smart-contract-development/smart-contract-basics).
- A multi-index `testtab` table instance which stores `user` objects indexed by the primary key which is of type `sysio::name`. Consult the section [How to instantiate a multi-index table](./how-to-instantiate-a-multi-index-table.md) to learn how to set it up.

## Steps

Complete the following steps to implement a `del` action which deletes a user object, identified by its account name, from the multi-index table.

### 1. Find the User You Want to Delete

Use the multi-index `find(...)` method to locate the user object you want to delete. The targeted user is searched based on its account name.

```cpp title="contract.cpp"
[[sysio::action]] void multi_index_example::del(name user) {
    // check if the user already exists
    auto itr = testtab.find(user.value);
}
```

### 2. Delete the User(if found)

Check to see if the user exists and use `erase(...)` method to delete the row from table. Otherwise print an informational message and return.

```cpp title="contract.cpp"
[[sysio::action]] void multi_index_example::del(name user) {
    // check if the user already exists
    auto itr = testtab.find(user.value);
    // diff-add
    if (itr == testtab.end()) {
        printf("User does not exist in table, nothing to delete");
        return;
    }
    // diff-add
    testtab.erase(itr);
}
```

:::info
A full example project demonstrating the instantiation and usage of multi-index tables can be found in the [`multi_index example` project](https://github.com/Wire-Network/wire-cdt/blob/master/examples/multi_index_example).
:::

## Reference

See the following code reference:

- The [`multi-index` class](https://github.com/Wire-Network/wire-cdt/blob/master/libraries/sysiolib/contracts/sysio/multi_index.hpp#L438).
- The [`multi-index::find(...)` method](https://github.com/Wire-Network/wire-cdt/blob/master/libraries/sysiolib/contracts/sysio/multi_index.hpp#L438).
- The [`multi-index::erase(...)` method](https://github.com/Wire-Network/wire-cdt/blob/master/libraries/sysiolib/contracts/sysio/multi_index.hpp#L438).

## Next Steps

You can verify if the user object was deleted from the multi-index table:

```cpp title="contract.cpp"
// check if the user was deleted
auto itr = testtab.find(user.value);
if (itr == testtab.end()) {
    printf("User was deleted successfully.");
} else {
    printf("User was NOT deleted!");
}
```
