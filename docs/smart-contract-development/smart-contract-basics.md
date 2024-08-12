---
sidebar_position: 4
id: smart-contract-basics
title: Smart Contract Basics
---


# Anatomy of Wire Smart Basics

## Development Language

C++ is the primary language for developing smart contracts on the Wire blockchain. The required C++ expertise for writing smart contracts on Wire is minimal, which makes it accessible if you have prior experience with languages such as C, Java, C#, or TypeScript.

## Project Structure

### Flexibility in Structure

Smart contract development on Wire offers significant flexibility regarding how you structure your project. You can opt for a single monolithic `.cpp` file or divide your code across multiple files. For more complex projects, a build system like CMake can be used to manage the project components effectively.

#### Single File Example
Below is an example of a simple smart contract contained within a single file. This basic setup requires no additional files to compile:

```cpp title="project/contractname.cpp"
#include <eosio/eosio.hpp>

CONTRACT contractname : public contract {
  public:
    using contract::contract;

    ACTION doSomething() {
    // Action implementation
    }
};
```

#### Multi-File Structure

For developers who prefer to organize their code more granularly, splitting the project into multiple files is also an option.

**Header File (contractname.hpp):**
```cpp title="project/include/contractname.hpp"
#pragma once

#include <eosio/eosio.hpp>

CONTRACT contractname : public contract {
    public:
        using contract::contract;

    ACTION dosomething()
}
```

The code snippet above are essentially equivalent to: 

```cpp title="project/include/contractname.hpp"
#pragma once

// Import built-in classes and utilities
#include <eosio/eosio.hpp>

// Class definition
class [[eosio::contract]] contractname : public eosio::contract {
public:
    using contract::contract;

    [[eosio::action]]
    void dosomething();
};
```


**Source File (contractname.cpp):**
```cpp title="project/src/contractname.cpp"
void contractname::dosomething() {
    // Actual function implementation goes here
}
```


### Header vs. Source Files
In C++, code is typically split into header files (`.hpp` or `.h`) and source files (`.cpp`), especially when projects get large. This helps with code organization and readibility.

- **Header files** are used to declare functions, classes, structs, and other types.
- **Source files** are used for the implementation of functions declared in header files.

### Managing Include Directories

When compiling your project, you will need to tell the compiler where to find your header files.

Generally, you will want to put your header files in a directory called `include/`, and your source files in a directory called `src/`.

**Directory Structure Example:**
```
project/
  include/
    contractname.hpp
  src/
    contractname.cpp
```

### Additional directories

#### `/ricardian`

This directory stores *Ricardian contracts*, which are written in human-readable language (`.md`) and describe what the contract actions intend to achieve, clarifying the technical and legal terms of the contract. They are typically included alongside the smart contract code, ensuring that each action within the smart contract is accompanied by a corresponding Ricardian contract that clearly states its purpose and implications.

```md title="/project/ricardian/contractname.md"

## `dosomething` Action

### Description
...

### Intent
...

### Authorization
...
```

&nbsp;
***
&nbsp;


# Basic Contract Structure

Smart contracts resemble classes in traditional object-oriented programming. Here's a basic overview of how you structure a smart contract.


```cpp title="project/contractname.cpp"
#include <eosio/eosio.hpp>

CONTRACT contractname : public eosio::contract {
    public:
        using contract::contract;  // Inherit constructor
};
```

### Key Components

#### CONTRACT Definition

The `CONTRACT` keyword is utilized to inform the compiler that we are defining an EOSIO smart contract. It is followed by the contract's name and the base class from which this contract inherits.

```cpp title="project/contractname.cpp"
    CONTRACT contractname : public eosio::contract { 
        // Contract code here
    };
```

**Good to Know:**
- It's a common practice to keep the contract name the same as the `.cpp` file name. Some build systems enforce this, and errors related to discrepancies can be obscure.

#### Access Modifiers

Access modifiers in C++ define the scope of accessibility for elements within your contract. All elements under an access modifier will inherit that scope.

- `public`: Elements are visible and accessible from any part of the program, as well as by other programs that interact with the contract.
- `private`: Accessibility is restricted solely to the contract itself.
- `protected`: This modifier allows visibility of elements to the contract and any inheriting contracts.



```cpp
public:
    // Public elements here
private:
    // Private elements here
```

:::warning

Access modifiers in C++ do not control the external accessibility of the contract's elements like actions and tables, which are always publicly accessible outside your contract.

::: 



## Primary Elements of Smart Contracts

Smart contracts primarily consist of:

- **Actions**: These are the entry points for your contract. Actions are functions that you define to interact with and modify data.
- **Tables**: These are used to store persistent data within your smart contract on the blockchain.

We’ll explore this topic in greater detail in the following sections.