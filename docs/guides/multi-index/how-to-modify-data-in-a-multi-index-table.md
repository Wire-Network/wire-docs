---
title: Modify Data in a Multi-Index Table
tags:
  - guide
  - multi-index
  - tables
---

## Overview

This guide provides instructions for modifying data in a multi-index table.

## Prerequisites

- Before proceeding, ensure that **you have completed the Getting Started section** and that you have followed the [Getting Started Documentation Diagram](/docs/getting-started/getting-started-intro.md).
- This page assumes you are familiar with [Smart Contract Basics](/docs/smart-contract-development/smart-contract-basics).
- A multi-index `testab` table instance which stores `user` objects indexed by the primary key which is of type `sysio::name`. Consult the section [How to instantiate a multi-index table](./how-to-instantiate-a-multi-index-table.md) to learn how to set it up.

## Steps

Complete the following steps to modify data in the `testtab` multi-index table.

### 1. Define the mod(...) Action

Add a `mod` action to the `testtab` multi-index table. The `mod` action takes as input parameters a `user` of type `sysio::name` and a `value` of type `uint32_t`. The `mod` action updates the `user` object `datum` data member with the `uint32_t` value.

```cpp title="contract.hpp"
[[sysio::action]] void mod(name user, uint32_t value);
```

Optionally, for ease of use add the action wrapper definition as well.

```cpp title="contract.hpp"
[[sysio::action]] void mod(name user, uint32_t value);
using mod_action = action_wrapper<"mod"_n, &multi_index_example::mod>;
```

### 2. Find the User You Want to Modify

Use the multi-index `find(...)` method to locate the user object you want to modify. The targeted user is searched based on its account name.

```cpp title="contract.cpp"
[[sysio::action]] void multi_index_example::mod(name user, uint32_t value) {
    auto itr = testtab.find(user.value);
}
```

### 3. Yield Error If User Not Found

If the `user` you want to update is not found, then raise an error message by using the `sysio::check` method.

```cpp title="contract.cpp"
[[sysio::action]] void multi_index_example::mod(name user, uint32_t value) {
    auto itr = testtab.find(user.value);
    check(itr != testtab.end(), "user does not exist in table");
}
```

### 4. Update the User(if found)

If the `user` object you want to update is found, the `sysio::check` method will do nothing and the iterator `itr` will be pointing at the object which you want to update. Use the `multi-index::modify(...)` method to update the user object `datum` data member with the `value` parameter.

```cpp title="contract.cpp"
[[sysio::action]] void multi_index_example::mod(name user, uint32_t value) {
    // check if the user already exists
    auto itr = testtab.find(user.value);
    check(itr != testtab.end(), "user does not exist in table");
    testtab.modify(itr, _self, [&](auto& row) {
        row.datum = value;
    });
}
```

Now you have implemented a new action `mod`. Call `mod` to update the `datum` data member for the user object identified by the `user` name parameter.

:::info
A full example project demonstrating the instantiation and usage of multi-index tables can be found in the [`multi_index example` project](https://github.com/Wire-Network/wire-cdt/blob/master/examples/multi_index_example).
:::

## Reference

See the following code reference:

- The [`multi-index` class](https://github.com/Wire-Network/wire-cdt/blob/master/libraries/sysiolib/contracts/sysio/multi_index.hpp#L438).
- The [`multi-index::modify(...)` method](https://github.com/Wire-Network/wire-cdt/blob/master/libraries/sysiolib/contracts/sysio/multi_index.hpp#L438).

## Next Steps

- [Insert data](./how-to-insert-data-into-a-multi-index-table) into the multi-index table.
- [Delete data](./how-to-delete-data-from-a-multi-index-table) from the multi-index table.
