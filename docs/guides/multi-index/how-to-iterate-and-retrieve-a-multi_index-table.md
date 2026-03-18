---
title: Iterate and Retrieve from Multi-Index Table
---

## Overview

This guide provides instructions for iterating and retrieving data from a multi-index table.

## Prerequisites

- Before proceeding, ensure that **you have completed the Getting Started section** and that you have followed the [Getting Started Documentation Diagram](/docs/getting-started/getting-started-intro.md).
- This page assumes you are familiar with [Smart Contract Basics](/docs/smart-contract-development/smart-contract-basics).
- A multi-index `testtab` table instance which stores `user` objects indexed by the primary key which is of type `sysio::name`. Consult the section [How to instantiate a multi-index table](./how-to-instantiate-a-multi-index-table.md) to learn how to set it up.

## Steps

Complete the following steps to iterate, retrieve and print data from the `testtab` multi-index table.

### 1. Define the print(...) Action

Add a `print` action to the `testtab` multi-index table. The `print` action takes an account name as a parameter.

```cpp title="contract.hpp"
[[sysio::action]] void print(name user);
```

Optionally, for ease of use add the action wrapper definition as well.

```cpp title="contract.hpp"
[[sysio::action]] void print(name user);
// diff-add
using print_action = action_wrapper<"print"_n, &multi_index_example::print>;
```

### 2. Implement the `print(...)` Action

Search for the `user` name in the multi-index table using the primary index. If found, print out the value of field `datum`. Otherwise raise an error with a custom message. In the contract definition add the following implementation for `print` action:

```cpp title="contract.cpp"
[[sysio::action]] void multi_index_example::print(name user) {
    // searches for the row that corresponds to the user parameter
    auto itr = testtab.find(user.value);
    
    // asserts if the row was found for user parameter, if fails use the given message
    check(itr != testtab.end(), "user does not exist in table");

    // prints the test_primary and datum fields stored for user parameter
    sysio::print_f("Test Table : {%, %}\n", itr->test_primary, itr->datum);
}
```

### 3. Put It All Together

The full definition and implementation files for the contract should look like this:

```cpp title="multi_index_example.hpp"
#include <sysio/sysio.hpp>
using namespace sysio;

// multi-index example contract class
class [[sysio::contract]] multi_index_example : public contract {
public:
    using contract::contract;

    // contract class constructor
    multi_index_example(name receiver, name code, datastream<const char*> ds) :
        // contract base class constructor
        contract(receiver, code, ds),
        // instantiate multi-index instance as data member (find it defined below)
        testtab(receiver, receiver.value)
    { }

    // the row structure of the multi-index table, that is, each row of the table
    // will contain an instance of this type of structure
    struct [[sysio::table]] test_table {
        // this data member stores a name for each row of the multi-index table
        name test_primary;
        // additional data stored in table row
        uint64_t datum;
        // mandatory definition for primary key getter
        uint64_t primary_key() const { return test_primary.value; }
    };

    // the multi-index type definition, for ease of use define a type alias `test_table_t`, 
    // based on the multi_index template type, parameterized with a random name and 
    // the test_table data structure
    typedef sysio::multi_index<"testtaba"_n, test_table> test_table_t;

    // the multi-index table instance declared as a data member of type test_table_t
    test_table_t testtab;

    [[sysio::action]] void set(name user);
    [[sysio::action]] void print(name user);

    using set_action = action_wrapper<"set"_n, &multi_index_example::set>;
    using print_action = action_wrapper<"print"_n, &multi_index_example::print>;
};
```

```cpp title="multi_index_example.cpp"
#include <multi_index_example.hpp>

[[sysio::action]] void multi_index_example::set(name user) {
    // check if the user already exists
    auto itr = testtab.find(user.value);

    if (itr == testtab.end()) {
        // user is not found in table, use emplace to insert a new row data structure in table
        testtab.emplace(_self, [&](auto& u) {
            u.test_primary = user;
            u.secondary = "second"_n;
            u.datum = 0;
        });
    }
}

[[sysio::action]] void multi_index_example::print(name user) {
    // searches for the row that corresponds to the user parameter
    auto itr = testtab.find(user.value);
    
    // asserts if the row was found for user parameter, if fails use the given message
    check(itr != testtab.end(), "user does not exist in table");

    // prints the test_primary and datum fields stored for user parameter
    sysio::print_f("Test Table : {%, %}\n", itr->test_primary, itr->datum);
}
```

:::info
A full example project demonstrating the instantiation and usage of multi-index tables can be found in the [`multi_index example` project](https://github.com/Wire-Network/wire-cdt/blob/master/examples/multi_index_example).
:::

## Reference

Relevant classes and methods:

- The [`multi-index` class](https://github.com/Wire-Network/wire-cdt/blob/master/libraries/sysiolib/contracts/sysio/multi_index.hpp#L438).
- The [`multi-index::find(...)` method](https://github.com/Wire-Network/wire-cdt/blob/master/libraries/sysiolib/contracts/sysio/multi_index.hpp#L438).

## Next Steps

- [Insert data](./how-to-insert-data-into-a-multi-index-table) into the multi-index table.
- [Delete data](./how-to-delete-data-from-a-multi-index-table) from the multi-index table.
