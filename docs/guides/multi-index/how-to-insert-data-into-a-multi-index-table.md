---
title: Insert Data into a Multi-Index Table
tags:
  - guide
  - multi-index
  - tables
---

## Overview

This guide provides instructions for inserting data into a multi-index table.

## Prerequisites

- Before proceeding, ensure that **you have completed the Getting Started section** and that you have followed the [Getting Started Documentation Diagram](/docs/getting-started/getting-started-intro.md).
- This page assumes you are familiar with [Smart Contract Basics](/docs/smart-contract-development/smart-contract-basics).
- A multi-index `testtab` table instance which stores `user` objects indexed by the primary key which is of type `sysio::name`. Consult the section [How to instantiate a multi-index table](./how-to-instantiate-a-multi-index-table.md) to learn how to set it up.

## Steps

Complete the following steps to insert a user object in the `testtab` multi-index table:

### 1. Verify If the User Already Exists

Use the multi-index table iterator to find out if the user object already exists. The targeted user is searched based on its account name.

```cpp title="contract.cpp"
[[sysio::action]] void multi_index_example::set(name user) {
    // check if the user already exists
    auto itr = testtab.find(user.value);
}
```

### 2. Insert the User If Not Found in Table

Use the `emplace` method to make the insertion if the user object is not already in the multi-index table. Otherwise print an informational message.

```cpp title="contract.cpp"
[[sysio::action]] void multi_index_example::set(name user) {
    // check if the user already exists
    auto itr = testtab.find(user.value);
    // diff-add
    if (itr == testtab.end()) {
        testtab.emplace(_self, [&](auto& u) {
            u.test_primary = user;
            u.secondary = "second"_n;
            u.datum = 0;
        });
    } else {
        printf("User already exists.");
    }
}
```

:::info
A full example project demonstrating the instantiation and usage of multi-index tables can be found in the [`multi_index example` project](https://github.com/Wire-Network/wire-cdt/blob/master/examples/multi_index_example).
:::

## Reference

Relevant classes and methods:

- The [`multi-index` class](https://github.com/Wire-Network/wire-cdt/blob/master/libraries/sysiolib/contracts/sysio/multi_index.hpp#L438).
- The [`multi-index::find(...)` method](https://github.com/Wire-Network/wire-cdt/blob/master/libraries/sysiolib/contracts/sysio/multi_index.hpp#L438).
- The [`multi-index::emplace(...)` method](https://github.com/Wire-Network/wire-cdt/blob/master/libraries/sysiolib/contracts/sysio/multi_index.hpp#L438).

## Next Steps

- [Iterate and retrieve newly inserted data](./how-to-iterate-and-retrieve-a-multi_index-table) from the multi-index table.
