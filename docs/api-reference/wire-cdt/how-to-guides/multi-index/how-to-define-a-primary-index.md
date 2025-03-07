# Define primary index

## Overview

This guide provides instructions to define a primary index for a multi-index table.

## Reference

See the following code reference:

* The `multi-index` class.

## Before you begin

Make sure you have the following prerequisites in place:

* A Wire development environment, for details consult the [Getting Started](https://docs.wire.network/docs/getting-started/getting-started-intro) section of our docs.

## Procedure

Complete the following steps to define a primary index for the multi-index table `testtab`.

### 1. Preparation And Initialization

Include the `sysio.hpp` header and use the `using` directive to access the `sysio` namespace.

  ```cpp
  #include <sysio/sysio.hpp>
  using namespace sysio;
  ```

### 2. Define The Table Data Structure

Define the data structure for the multi-index table.

  ```cpp
    struct [[sysio::table]] test_table {
    };
  ```

Add the data structure data members. Each data member corresponds to a field of the multi-index table. A primary key is required when defining a multi-index table structure, therefore you need to know which is the multi-index table field that is the primary key for your multi-index table. The corresponding data member for the primary key field must store unique values. In this case it is the `test_primary` data member of type `sysio::name`.

  ```diff
    // the data structure which defines each row of the table
    struct [[sysio::table]] test_table {
  +    // this data member stores a name for each row of the multi-index table
  +    name test_primary;
  +    // additional data stored in table row, e.g. an uint64_t type data
  +    uint64_t datum;
    };
  ```

### 3. Define The Primary Index

Add the definition of the primary index for the multi-index table. The primary index type must be uint64_t, it must be unique and must be named `primary_key()`, otherwise the compiler (cdt-cpp) will generate an error saying it can not find the field to use as the primary key:

  ```diff
    // the data structure which defines each row of the table
    struct [[sysio::table]] test_table {
      // this data member stores a name for each row of the multi-index table
      name test_primary;
      // additional data stored in table row
      uint64_t datum;
  +    // mandatory definition for primary key getter
  +    uint64_t primary_key( ) const { return test_primary.value; }
    };
  ```

:::info
| Secondary indexes may be defined which are not unique. There can be up to 16 secondary indexes. Secondary indices support the following types:

* uint64_t
* uint128_t
* uint256_t
* double
* long double

:::

### 4. Define A Multi-Index Type Alias

For ease of use, define a type alias `test_table_t` based on the `sysio::multi_index` template type, parametarized with a random name `"testtaba"` and the `test_table` data structure. The names must adhere to the existing account name restrictions.

  ```diff
    // the data structure which defines each row of the table
    struct [[sysio::table]] test_table {
      // this data member stores a name for each row of the multi-index table
      name test_primary;
      // additional data stored in table row
      uint64_t datum;
      // mandatory definition for primary key getter
      uint64_t primary_key( ) const { return test_primary.value; }
    };
    
  +  typedef sysio::multi_index<"testtaba"_n, test_table> test_table_t;
  ```

### 5. Instantiate The Multi-Index Table

Declare the `testtab` multi-index table as a data member of type `test_table_t`.

  ```diff
    // the data structure which defines each row of the table
    struct [[sysio::table]] test_table {
      // this data member stores a name for each row of the multi-index table
      name test_primary;
      // additional data stored in table row
      uint64_t datum;
      // mandatory definition for primary key getter
      uint64_t primary_key( ) const { return test_primary.value; }
    };
    
    typedef sysio::multi_index<"testtaba"_n, test_table> test_table_t;
  +  test_table_t testtab;
  ```

Now you have instantiated a multi-index table, and assigned to `testtab` variable, which has a primary index defined for its `test_primary` data member.

:::info
| A full example project demonstrating the instantiation and usage of multi-index table can be found [here](https://github.com/Wire-Network/cdt/blob/main/examples/multi_index_example).
:::

## Summary

In conclusion, the above instructions show how to define a primary index for a multi-index table.

## Next Steps

* You can [insert data in the multi-index table](./how-to-insert-data-into-a-multi-index-table).
* You can [iterate and retrieve data](./how-to-iterate-and-retrieve-a-multi_index-table) from the multi-index table.
