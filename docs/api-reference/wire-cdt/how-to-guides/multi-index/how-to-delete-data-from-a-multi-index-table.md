<!-- ---
title: How to delete data from a multi-index table
--- -->

## Overview

This guide provides instructions to to delete data from a multi-index table.

## Reference

See the following code reference:

<!-- Add references to classes -->
* The `multi-index` class.
* The `multi-index::find(...)` method.
* The `multi-index::erase(...)` method.

## Before you begin

Make sure you have the following prerequisites in place:

* A Wire development environment, for details consult the [Get Started Guide](../../../../getting-started/getting-started-intro.md),
* A multi-index `testab` table instance which stores `user` objects indexed by the primary key which is of type `sysio::name`. Consult the section [How to instantiate a multi-index table](./how-to-instantiate-a-multi-index-table.md) to learn how to set it up.

## Procedure

Complete the following steps to implement a `del` action which deletes an user object, identified by its account name, from the multi-index table.

### 1. Find The User You Want To Delete

Use the multi-index `find(...)` method to locate the user object you want to delete. The targeted user is searched based on its account name.

```cpp
[[sysio::action]] void multi_index_example::del( name user ) {
  // check if the user already exists
  auto itr = testtab.find(user.value);
}
```

### 2. Delete The User If Found

Check to see if the user exists and use `erase`(...) method to delete the row from table. Otherwise print an informational message and return.

```diff
[[sysio::action]] void multi_index_example::del( name user ) {
  // check if the user already exists
  auto itr = testtab.find(user.value);
+  if ( itr == testtab.end() ) {
+    printf("User does not exist in table, nothing to delete");
+    return;
+  }

+  testtab.erase( itr );
}
```

:::info
| A full example project demonstrating the instantiation and usage of multi-index table can be found [here](https://github.com/Wire-Network/cdt/blob/master/examples/multi_index_example).
:::


## Next Steps

* You can verify if the user object was deleted from the multi-index table. .

```cpp
  // check if the user was deleted
  auto itr = testtab.find(user.value);
  if ( itr == testtab.end() ) {
    printf("User was deleted successfully.");
  }
  else {
    printf("User was NOT deleted!");
  }
```
