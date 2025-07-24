---
title: Define a Secondary Index
---

## Overview

This guide provides instructions for defining a secondary index for a multi-index table.

## Prerequisites

Make sure you have the following prerequisites in place:

- Before proceeding, ensure that **you have completed the Getting Started section** and that you have followed the [Getting Started Documentation Diagram](/docs/getting-started/getting-started-intro.md).
- This page assumes you are familiar with [Smart Contract Basics](/docs/smart-contract-development/smart-contract-basics).

- A multi-index table `testtab` along with its `test_table` data structure, its mandatory primary index, and the type alias definition `test_table_t`. Please see [How To Define A Primary Index](./how-to-define-a-primary-index).

## Steps

Complete the following steps to define a secondary index for the multi-index table `testtab`.

### 1. Extend the Multi-Index Data Structure

Add a second data member `secondary`, of type `sysio::name`, to the `test_table` data structure that defines the `testtab` data.

```cpp title="contract.hpp"
// the data structure which defines each row of the table
struct [[sysio::table]] test_table {
    // this data member stores a name for each row of the multi-index table
    name test_primary;
    // diff-add
    name secondary;  // Secondary key field for indexing
    // additional data stored in table row, e.g. an uint64_t type data
    uint64_t datum;
    // mandatory definition for primary key getter
    uint64_t primary_key() const { return test_primary.value; }
};
```

### 2. Add the Secondary Index Accessor Method

Add `by_secondary()` method, which is the index accessor method to the new data member. The secondary index, that will be added in the next step, will index this new data structure data member.

```cpp title="contract.hpp"
// the data structure which defines each row of the table
struct [[sysio::table]] test_table {
    // this data member stores a name for each row of the multi-index table
    name test_primary;
    name secondary;
    // additional data stored in table row, e.g. an uint64_t type data
    uint64_t datum;
    // mandatory definition for primary key getter
    uint64_t primary_key() const { return test_primary.value; }
    // diff-add
    uint64_t by_secondary() const { return secondary.value; }  // Secondary index getter
};
```

### 3. Define the Secondary Index

In the `test_table_t` type definition, add the definition of the secondary index with the use of the `sysio::indexed_by` template. `sysio::indexed_by` needs two parameters: the name of the index, `"secid"_n`, and a function call operator which extracts the value from the secondary data member as an index key. The function call operator is defined with the use of `sysio::const_mem_fun` template which receives two parameters: the data structure `test_table` and the reference to the getter function member `by_secondary`.

```cpp title="contract.hpp"
// the data structure which defines each row of the table
struct [[sysio::table]] test_table {
    // this data member stores a name for each row of the multi-index table
    name test_primary;
    name secondary;
    // additional data stored in table row, e.g. an uint64_t type data
    uint64_t datum;
    // mandatory definition for primary key getter
    uint64_t primary_key() const { return test_primary.value; }
    uint64_t by_secondary() const { return secondary.value; }  // Secondary index getter
};

// diff-add
typedef sysio::multi_index<"testtaba"_n, test_table, sysio::indexed_by<"secid"_n, sysio::const_mem_fun<test_table, uint64_t, &test_table::by_secondary>>> test_table_t;  // Multi-index with secondary index
```

:::info
Secondary indexes are optional and can be non-unique. Each table supports up to 16 secondary indexes with the following data types:

- uint64_t
- uint128_t
- uint256_t
- double
- long double

:::

See the full contract code below:

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

    struct [[sysio::table]] test_table {
        // this data member stores a name for each row of the multi-index table
        name test_primary;
        name secondary;
        // additional data stored in table row
        uint64_t datum;
        // mandatory definition for primary key getter
        uint64_t primary_key() const { return test_primary.value; }
        uint64_t by_secondary() const { return secondary.value; }
    };

    // the multi-index type definition, for ease of use a type alias `test_table_t` is defined, 
    // based on the multi_index template type, parameterized with a random name, the 
    // test_table data structure, and the secondary index
    typedef sysio::multi_index<"testtaba"_n, test_table, sysio::indexed_by<"secid"_n, sysio::const_mem_fun<test_table, uint64_t, &test_table::by_secondary>>> test_table_t;

    // the multi-index table instance declared as a data member of type test_table_t
    test_table_t testtab;

    [[sysio::action]] void set(name user);
    [[sysio::action]] void print(name user);

    using set_action = action_wrapper<"set"_n, &multi_index_example::set>;
    using print_action = action_wrapper<"print"_n, &multi_index_example::print>;
};
```

Now you have instantiated the `testtab` as a multi-index table which has a primary index defined for its `test_primary` data member and a secondary index for its `secondary` data member.

:::info
A full example project demonstrating the instantiation and usage of multi-index tables can be found in the [`multi_index example` project](https://github.com/Wire-Network/wire-cdt/blob/master/examples/multi_index_example).
:::

## Reference

See the following code reference:

- The [`multi-index` class](https://github.com/Wire-Network/wire-cdt/blob/master/libraries/sysiolib/contracts/sysio/multi_index.hpp#L438).

## Next Steps

- [Iterate and retrieve data using the secondary index](./how-to-iterate-and-retrieve-a-multi_index-table-based-on-secondary-index) from the multi-index table.
