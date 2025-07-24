---
title: Define a Singleton
---

## Overview

This guide provides instructions for defining a singleton.

## Prerequisites

- Before proceeding, ensure that **you have completed the Getting Started section** and that you have followed the [Getting Started Documentation Diagram](/docs/getting-started/getting-started-intro.md).
- This page assumes you are familiar with [Smart Contract Basics](/docs/smart-contract-development/smart-contract-basics).

## Steps

A singleton uses a single multi-index table to store named objects of various types. To define a simple singleton, which is storing an account `name` as primary value and a `uint64_t` as secondary value in structure `testtable`, follow the steps below:

### 1. Preparation and Initialization

Include the `sysio.hpp` and `singleton.hpp` headers and declare the `sysio` namespace usage.

```cpp title="contract.hpp"
#include <sysio/sysio.hpp>
#include <sysio/singleton.hpp>
using namespace sysio;
```

### 2. Define the Table Data Structure

Define the data structure for the multi-index table:

```cpp title="contract.hpp"
struct [[sysio::table]] testtable {
    name primary_value;
    uint64_t secondary_value;
};
```

### 3. Define a Singleton Type Alias

For ease of use, define a type alias `singleton_type` based on the `sysio::singleton` template type, parameterized with a table name `"testtable"` and the `testtable` data structure. The names must adhere to the existing account name restrictions.

```cpp title="contract.hpp"
struct [[sysio::table]] testtable {
    name primary_value;
    uint64_t secondary_value;
};

// diff-add
using singleton_type = sysio::singleton<"testtable"_n, testtable>;  // Type alias for singleton
```

### 4. Define the Singleton Instance

Define the singleton table instance as a data member of type `singleton_type`.

```cpp title="contract.hpp"
struct [[sysio::table]] testtable {
    name primary_value;
    uint64_t secondary_value;
};

using singleton_type = sysio::singleton<"testtable"_n, testtable>;
// diff-add
singleton_type singleton_instance;  // Singleton table instance
```

### 5. Initialize and Use the Singleton Instance

Initialize the `singleton_instance` using the constructor with the parameters `receiver` and `code` (the last one in this case is `receiver.value`). These parameters, combined with `testtable`, provide access to the partition of the RAM cache used by this singleton. In our example you initialize the `singleton_instance` data member in the smart contract constructor, see below:

```cpp title="contract.hpp"
// singleton contract constructor
singleton_example(name receiver, name code, datastream<const char*> ds) :
    contract(receiver, code, ds),
    // diff-add
    singleton_instance(receiver, receiver.value)  // Initialize singleton instance
{ }
```

Now you have defined and initialized a singleton as a data member for the smart contract class. You can access it from any of the smart contract methods via `singleton_instance` data member. Below you can find a possible implementation for the full class singleton example contract.

```cpp title="singleton_example.hpp"
#include <sysio/sysio.hpp>
#include <sysio/singleton.hpp>
using namespace sysio;

class [[sysio::contract]] singleton_example : public contract {
public:
    using contract::contract;
    
    singleton_example(name receiver, name code, datastream<const char*> ds) :
        contract(receiver, code, ds),
        singleton_instance(receiver, receiver.value)
    { }

    [[sysio::action]]
    void set(name user, uint64_t value);
    [[sysio::action]]
    void get();

    struct [[sysio::table]] testtable {
        name primary_value;
        uint64_t secondary_value;
        uint64_t primary_key() const { return primary_value.value; }
    } testtablerow;

    using singleton_type = sysio::singleton<"testtable"_n, testtable>;
    singleton_type singleton_instance;

    using set_action = action_wrapper<"set"_n, &singleton_example::set>;
    using get_action = action_wrapper<"get"_n, &singleton_example::get>;
};
```

Below is an example for the `get` and `set` actions. It also demonstrates the usage of the `get` and `set` singleton methods. Note that the `set` action makes use of the singleton's `set` method, for which the second parameter is the payer account for the RAM needed to store the new value.

```cpp title="singleton_example.cpp"
#include <singleton_example.hpp>

[[sysio::action]] void singleton_example::set(name user, uint64_t value) {
    auto entry_stored = singleton_instance.get_or_create(user, testtablerow);
    entry_stored.primary_value = user;
    entry_stored.secondary_value = value;
    singleton_instance.set(entry_stored, user);
}

[[sysio::action]] void singleton_example::get() {
    if (singleton_instance.exists())
        sysio::print(
            "Value stored for: ", 
            name{singleton_instance.get().primary_value.value},
            " is ",
            singleton_instance.get().secondary_value,
            "\n");
    else
        sysio::print("Singleton is empty\n");
}
```

:::info
A full example project demonstrating the instantiation and usage of singletons can be found in the [`multi_index example` project](https://github.com/Wire-Network/wire-cdt/blob/main/examples/multi_index_example).
:::

## Reference

See the following code reference:

- The [`singleton` class](https://github.com/Wire-Network/wire-cdt/blob/master/libraries/sysiolib/contracts/sysio/singleton.hpp#L21).

## Next Steps

- Singleton uses as underlying structure a multi-index table therefore you can [iterate and retrieve data](./how-to-iterate-and-retrieve-a-multi_index-table) from the singleton the same way you would with a multi-index table.
