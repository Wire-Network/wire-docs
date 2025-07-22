---
title: Insert data into a multi-index table
---

## Overview

This guide provides instructions to insert data into a multi-index table.

## Prerequisites

Make sure you have the following prerequisites in place:

* A Wire development environment, for details consult the [Getting Started](/docs/getting-started/getting-started-intro) section of our docs.
* A multi-index `testab` table instance which stores `user` objects indexed by the primary key which is of type `sysio::name`. Consult the section [How to instantiate a multi-index table](./how-to-instantiate-a-multi-index-table.md) to learn how to set it up.

## Procedure

Complete the following steps to insert an user object in the `testtab` multi-index table:

### 1. Verify If The User Already Exists

Use of the multi-index table iterator to find out if the user object already exists. The targeted user is searched based on its account name.

```cpp
[[sysio::action]] void multi_index_example::set( name user ) {
  // check if the user already exists
  auto itr = testtab.find(user.value);
}
```

### 2. Insert The User If Not Found In Table

Use the `emplace` method to make the insertion if the user object is not already in the multi-index table. Otherwise print an informational message.

```diff
[[sysio::action]] void multi_index_example::set( name user ) {
  // check if the user already exists
  auto itr = testtab.find(user.value);

  if ( itr == testtab.end() ) {
    testtab.emplace( _self, [&]( auto& u ) {
      u.test_primary = user;
      u.secondary = "second"_n;
      u.datum = 0;
    });
  }
  else {
    printf("User already exists.");
  }
}
```

:::info
| A full example project demonstrating the instantiation and usage of multi-index table can be found in the [`multi_index example` project](https://github.com/Wire-Network/cdt/blob/main/examples/multi_index_example).
:::

## Reference

Relevant classes and methods:

* The [`multi-index` class](https://github.com/Wire-Network/wire-cdt/blob/a0628aa6e947e8b4a83cde1b074e0cfa9f522369/libraries/sysiolib/contracts/sysio/multi_index.hpp#L438).
* The [`multi-index::find(...)` method](https://github.com/Wire-Network/wire-cdt/blob/a0628aa6e947e8b4a83cde1b074e0cfa9f522369/libraries/sysiolib/contracts/sysio/multi_index.hpp#L438).
* The [`multi-index::emplace(...)` method](https://github.com/Wire-Network/wire-cdt/blob/a0628aa6e947e8b4a83cde1b074e0cfa9f522369/libraries/sysiolib/contracts/sysio/multi_index.hpp#L438).

## Next Steps

* You can [iterate and retrieve newly inserted data](./how-to-iterate-and-retrieve-a-multi_index-table) from the multi-index table.
