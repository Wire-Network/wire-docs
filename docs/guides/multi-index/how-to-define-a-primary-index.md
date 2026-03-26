---
id: how-to-define-a-primary-index
title: Define a Primary Index
tags:
  - guide
  - multi-index
  - tables
---

# Define a Primary Index

## Overview

This guide provides instructions for defining a primary index for a multi-index table.

## Prerequisites

- Before proceeding, ensure that **you have completed the Getting Started section** and that you have followed the [Getting Started Documentation Diagram](/docs/getting-started/getting-started-intro.md).
- This page assumes you are familiar with [Smart Contract Basics](/docs/smart-contract-development/smart-contract-basics).

## Steps

Complete the following steps to define a primary index for the multi-index table `testtab`.

### 1. Preparation and Initialization

Include the `sysio.hpp` header and use the `using` directive to access the `sysio` namespace.

```cpp title="contract.hpp"
#include <sysio/sysio.hpp>
using namespace sysio;
```

### 2. Define the Table Data Structure

Define the data structure for the multi-index table.

```cpp title="contract.hpp"
struct [[sysio::table]] test_table {
};
```

Add the data structure members. Each member corresponds to a field of the multi-index table. A primary key is required when defining a multi-index table structure, so you need to identify which field will serve as the primary key. The corresponding data member for the primary key field must store unique values. In this case, it is the `test_primary` data member of type `sysio::name`.

```cpp title="contract.hpp"
// the data structure which defines each row of the table
struct [[sysio::table]] test_table {
    // diff-add
    name test_primary;  // Primary key field - must store unique values
    // diff-add
    uint64_t datum;     // additional data stored in table row, e.g. an uint64_t type data
};
```

### 3. Define the Primary Index

Add the definition of the primary index for the multi-index table. The primary index type must be `uint64_t`, it must be unique, and the method must be named `primary_key()`. Otherwise, the `cdt-cpp` will error with a message indicating it cannot find the field to use as the primary key:

```cpp title="contract.hpp"
// the data structure which defines each row of the table
struct [[sysio::table]] test_table {
    // this data member stores a name for each row of the multi-index table
    name test_primary;
    // additional data stored in table row, e.g. an uint64_t type data
    uint64_t datum;
    // diff-add
    uint64_t primary_key() const { return test_primary.value; }  // Mandatory primary key getter
};
```

:::info
Secondary indexes may be defined which are not unique. There can be up to 16 secondary indexes. Secondary indices support the following types:

- uint64_t
- uint128_t
- uint256_t
- double
- long double

:::

### 4. Define a Multi-Index Type Alias

For ease of use, define a type alias `test_table_t` based on the `sysio::multi_index` template type, parameterized with a table name `"testtaba"` and the `test_table` data structure. The names must adhere to the existing account name restrictions.

```cpp title="contract.hpp"
// the data structure which defines each row of the table
struct [[sysio::table]] test_table {
    // this data member stores a name for each row of the multi-index table
    name test_primary;
    // additional data stored in table row, e.g. an uint64_t type data
    uint64_t datum;
    // mandatory definition for primary key getter
    uint64_t primary_key() const { return test_primary.value; }
};

// diff-add
typedef sysio::multi_index<"testtaba"_n, test_table> test_table_t;  // Type alias for multi-index table
```

### 5. Instantiate the Multi-Index Table

Declare the `testtab` multi-index table as a data member of type `test_table_t`.

```cpp title="contract.hpp"
// the data structure which defines each row of the table
struct [[sysio::table]] test_table {
    // this data member stores a name for each row of the multi-index table
    name test_primary;
    // additional data stored in table row, e.g. an uint64_t type data
    uint64_t datum;
    // mandatory definition for primary key getter
    uint64_t primary_key() const { return test_primary.value; }
};

typedef sysio::multi_index<"testtaba"_n, test_table> test_table_t;
// diff-add
test_table_t testtab;  // Multi-index table instance
```

Now you have instantiated a multi-index table and assigned it to the `testtab` variable, which has a primary index defined for its `test_primary` data member.

:::info
A full example project demonstrating the instantiation and usage of multi-index tables can be found in the [`multi_index example` project](https://github.com/Wire-Network/wire-cdt/blob/master/examples/multi_index_example).
:::

## Reference

See the following code reference:

- The [`multi-index` class](https://github.com/Wire-Network/wire-cdt/blob/master/libraries/sysiolib/contracts/sysio/multi_index.hpp#L438).

## Next Steps

- [Insert data into the multi-index table](./how-to-insert-data-into-a-multi-index-table).
- [Iterate and retrieve data](./how-to-iterate-and-retrieve-a-multi_index-table) from the multi-index table.
