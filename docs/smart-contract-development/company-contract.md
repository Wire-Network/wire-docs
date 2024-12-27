---
sidebar_position: 3
id: company-contract
title: Create Company Contract
---


# Company Contract

## Overview

This page will guide you to creating and developing a simple contract using Wire CDT and C++ language. While prior knowledge of C++ is not necessary for this tutorial, we encourage you to familiarize yourself with the basics of C++ to enhance your understanding.

## Prerequisites

- Before proceeding forward, ensure that **you have completed Getting Started section** and that you have followed [Getting Started Documentation Diagram](/docs/getting-started/getting-started-intro.md).
- This page assumes you are familiar with [Smart Contract Basics](./smart-contract-basics.md).

## Step-by-Step Guide to Creating a *Company Contract* Smart Contract

### 1\. Set Up Your Contract Workspace

Navigate to a directory of your choice and create a new subdirectory for your contract, along with its content `include/` and `src/`.

```bash title="/your-contracts-workspace"
mkdir company-contract && cd company-contract && mkdir include src company && touch include/company.hpp src/company.cpp
```

Open `company-contract` in your preferred text editor to begin coding.

### 2\. Write the Contract Code

In C++, splitting class declarations and definitions into separate header (.hpp) and source  (.cpp) files is a common practice that promotes better code organization, readability, and compile time-efficiency. This approach helps segregating interface from implementation; as well hiding the implementation details from other parts of the program and exposing only what is necessary. For the purposes of this and future tutorials, we will stick to that approach.

2.1. Define contract interfaces in `company.hpp`

- The `sysio/sysio.hpp` header file contains necessary classes and built-in utility functions for contract development.

```cpp title="/your-contracts-workspace/company-contract/company.hpp"
#pragma once

#include <sysio/sysio.hpp>
#include <string>

using namespace sysio;
```

***

#### 2.1. Define the `employees` contract class

You can use either the simplified or the long syntax for defining contracts. In this tutorial we will be using primarily the short syntax for better readability. We would also define two actions `upsertemp()` and `getallemp()`.

```cpp title="/your-contracts-workspace/company-contract/company.hpp"
#pragma once

#include <sysio/sysio.hpp>
#include <string>

using namespace sysio;

// highlight-start
// Using short syntax for structs
CONTRACT company : public contract {
    public:
        using contract::contract;

    // Action to upsert (insert or update) an employee record
    ACTION upsertemp(name user, const std::string& name, const std::string& email, const std::string& status);

    // Action to retrieve and print all employee records
    ACTION getallemp();
}
// highlight-end
```

:::info

**Long syntax**

```cpp
// Using long syntax for structs
class [[sysio::contract("employees")]] employees : public contract {
public:
    using contract::contract;  // Inherits the base contract constructor.

    employees(name receiver, name code, datastream<const char*> ds) : contract(receiver, code, ds) {}

};
```

:::

:::tip[LEARN]
The short syntax in C++ contracts, such as those used in the Wire blockchain framework, is possible due to the language’s support for preprocessor's directive like `#define`. This directive is a preprocessor command that creates *macros*, serving as symbolic names or aliases for code fragments. Before compilation, the preprocessor scans the source code and replaces these macros with their defined sequences. Essentially, `#define` allows developers to define constants, create function-like macros, or insert code snippets, improving readability and maintainability by eliminating repetitive code segments.

[Source code](https://github.com/Wire-Network/wire-cdt/blob/main/libraries/sysiolib/contracts/sysio/contract.hpp#L18)

```cpp title=wire-cdt/libraries/sysiolib/contracts/sysio/contract.hpp
#define CONTRACT class [[sysio::contract]]
```

:::
***

#### 2.2. Define the Employee Struct and Multi-Index Table

Within the employees contract class, let's add a struct named `employee` to represent the table that holds individual employee records. We will define it with several fields:

 • `user`: The name of the employee, which will serve as the primary key for the table. It uniquely identifies each employee record.

 • `name`: A string that stores the full name of the employee.

 • `email`: A string representing the employee’s email address.

 • `status`: A string that indicates the current status of the employee within the organization. (e.g., “active”, “inactive").

The `primary_key()` function within the struct returns the `user.value`, which is the numeric representation of the user.
The multi_index container named `employee_index` is defined to manage the storage of these records. It allows for efficient storing, updating, and querying of employee data based on the primary key.

```cpp title="/your-contracts-workspace/company-contract/company.hpp"
#pragma once

#include <sysio/sysio.hpp>
#include <string>

using namespace sysio;

CONTRACT company : public contract {
    public:
        using contract::contract;

    // Action to upsert (insert or update) an employee record
    ACTION upsertemp(name user, const std::string& name, const std::string& email, const std::string& status);

    // Action to retrieve and print all employee records
    ACTION getallemp();

    // highlight-start
    private:
        // Employee struct representing a record in the employees table.
        TABLE employee {
            name user;
            std::string name;
            std::string email;
            std::string status;

            uint64_t primary_key() const { return user.value; }
        };
        // Type definition for the multi-index table handling employee records.
        using employee_index = sysio::multi_index<"employees"_n, employee>;
    // highlight-end
};
```

Next let's define the implementation for the actions `upsertemp` and `getallemp`.

#### 2.3. Defining the `upsertemp()` action

`upsertemp`  will be used for upserting an employee record. Refer to the comments within the code for more explanation of what each line/block do.

```cpp title="/your-contracts-workspace/company-contract/company.cpp"
#include <sysio/print.hpp>
#include <company.hpp>


void company::upsertemp(name user, const std::string& name, const std::string& email, const std::string& status) {
    require_auth(user); //built-in method that only the authenticated user can execute this action
    // Including the require_auth() method in this action ensures that only authenticated users, typically those verified to be the smart contract’s account or another authorized account, can initiate these actions. This method is typically used for actions that involve sensitive operations like updating a user record. By requiring authentication, you can safeguard customer-specific actions, ensuring that such operations are performed exclusively by the account owner and not by unauthorized parties.

    // Access the table with `get_self()` as the scope
    employee_index emp_table(get_self(), get_self().value);

    // Find the record with PK matching the user
    auto employee_itr = emp_table.find(user.value);

    if (employee_itr == emp_table.end()) {
        // If no record is found, create a new one
        emp_table.emplace(user, [&](auto& new_employee) {
            new_employee.user = user;
            new_employee.name = name;
            new_employee.email = email;
            new_employee.status = status;
        });
        print("Employee added: ", user);
    } else {
        // Modify the record if the user matches
        emp_table.modify(employee_itr, user, [&](auto& mod_employee) {
            mod_employee.name = name;
            mod_employee.email = email;
            mod_employee.status = status;
        });
        print("Employee updated: ", user);
    } 
}
```

#### 2.4. Defining the `getall()` action

The action below will retrieve all employee records from the employees multi-index table.

```cpp title="/your-contracts-workspace/company-contract/company.cpp"
void company::getallemp() {
    employee_index emp_table(get_self(), get_self().value);
    for (auto itr = emp_table.begin(); itr != emp_table.end(); itr++) {
        print("Employee ID: ", itr->user, ", Name: ", itr->name, ", Email: ", itr->email, ", Status: ", itr->status, "\n");
    }
}
```

### 3\. Compile the Contract

Compile your contract into WebAssembly (WASM) format using the Wire Contract Development Toolkit (CDT). This command also generates the ABI file in the `company` folder.

```bash
cdt-cpp -abigen -contract company -o company/company.wasm src/company.cpp -I include
```

<!-- ```bash title="/your-contracts-workspace"
cdt-cpp -abigen -R ./ricardian -contract company-contract -o company-contract/company-contract.wasm src/company-contract.cpp -I include
``` -->

### 4\. Deploy the Contract

Before deploying, ensure you have an open wallet and account to deploy the contract to.  

:::note

In Wire ecosystem, deploying a smart contract requires an account; an account can own one smart contract instance and a smart contract instance must be deployed to an account. Each account functions as a distinct namespace for the contract, which means that the contract’s code and its state are encapsulated within that account.

:::

***

#### 4.1 Retrieve public key

Before proceeding, make sure you have the public key available from the key pair that was created when setting up your wallet. If you haven’t yet created a wallet or a key pair, you can do so by following the instructions [here](../getting-started/create-development-wallet.md).

```bash
export PUBLIC_KEY=<public-key-value>
```

```bash
clio create account sysio company $PUBLIC_KEY -p sysio@active
```

#### 4.2 Deploy the compiled contract

```bash
                  [account] [WASM dir]  [permission level] 
clio set contract company  company -p  company@active
```

The smart contract should now be live on your local blockchain. You can inspect through [Block Explorer](https://eosauthority.com/).
