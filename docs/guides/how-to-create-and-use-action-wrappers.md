---
id: how-to-create-and-use-action-wrappers
description: Learn how to create and use action wrappers for type-safe cross-contract action calls in Wire smart contracts.
---

# How to Create and Use Action Wrappers

## Overview

This guide provides instructions to create and use an action wrapper in a smart contract. Action wrappers are a convenient way to call actions on other contracts from within your smart contract, providing type safety and a cleaner interface compared to direct action calls.

## Prerequisites

- Before proceeding forward, ensure that **you have completed Getting Started section** and that you have followed [Getting Started Documentation Diagram](/docs/getting-started/getting-started-intro.md).
- This page assumes you are familiar with [Smart Contract Basics](/docs/smart-contract-development/smart-contract-basics).

- A smart contract named `multiexample`, defined in file `multiexample.hpp` with a resource policy.

```sh
clio create account sysio multiindex PUB_K1_6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5BoDq63 -p sysio@active

sudo clio push action sysio.roa addpolicy '{"owner": multiindex, "issuer": nodeownera, "net_weight": "0.0100 SYS", "cpu_weight": "0.0100 SYS", "ram_weight": "1.0000 SYS", "time_block": 1, "network_gen": 0 }' -p nodeownera@active
```

## Contract Code

You can find the full sample code in the [multi_index example contract](https://github.com/wire-network/wire-cdt/tree/master/examples/multi_index_example).

```cpp title="multiexample.hpp"
#pragma once

#include <sysio/sysio.hpp>
#include <sysio/action.hpp>
using namespace sysio;

class [[sysio::contract]] multi_index_example : public contract {
public:
    multi_index_example(name receiver, name code, datastream<const char*> ds);

    struct [[sysio::table]] test_table {
        name     test_primary;
        name     secondary;
        uint64_t datum;

        uint64_t primary_key() const { return test_primary.value; }
        uint64_t by_secondary() const { return secondary.value; }
    };

    using test_tables = multi_index<"testtaba"_n, test_table,
        indexed_by<"secid"_n,
            const_mem_fun<test_table, uint64_t, &test_table::by_secondary>
        >
    >;

    test_tables testtab;

    [[sysio::action]] void set(name user);
    [[sysio::action]] void print(name user);
    [[sysio::action]] void bysec(name secid);
    [[sysio::action]] void mod(name user, uint32_t n);
    [[sysio::action]] void del(name user);
};
```

```cpp title="multiexample.cpp"
#include "multi_index_example.hpp"

using namespace sysio;

multi_index_example::multi_index_example(name receiver, name code, datastream<const char*> ds)
    : contract(receiver, code, ds), testtab(receiver, receiver.value) {}

[[sysio::action]]
void multi_index_example::set(name user) {
    auto itr = testtab.find(user.value);
    if (itr == testtab.end()) {
        testtab.emplace(_self, [&](auto& u) {
            u.test_primary = user;
            u.secondary    = "second"_n;
            u.datum        = 0;
        });
    }
}

[[sysio::action]]
void multi_index_example::print(name user) {
    check(testtab.find(user.value) != testtab.end(), "user not in table");
    auto itr = testtab.find(user.value);
    print_f("Test Table: {%, %, %}\n",
            itr->test_primary,
            itr->secondary,
            itr->datum);
}

[[sysio::action]]
void multi_index_example::bysec(name secid) {
    auto idx = testtab.get_index<"secid"_n>();
    for (auto itr = idx.begin(); itr != idx.end(); ++itr) {
        sysio::print(itr->test_primary);
        sysio::print("\n");
    }
}

[[sysio::action]]
void multi_index_example::mod(name user, uint32_t n) {
    auto itr = testtab.find(user.value);
    check(itr != testtab.end(), "user not in table");
    testtab.modify(itr, _self, [&](auto& row) {
        row.secondary = user;
        row.datum     = n;
    });
}

[[sysio::action]]
void multi_index_example::del(name user) {
    auto itr = testtab.find(user.value);
    if (itr == testtab.end()) {
        sysio::print("user does not exist in table\n");
        return;
    }
    testtab.erase(itr);
}

SYSIO_DISPATCH(multi_index_example, (set)(print)(bysec)(mod)(del));
```

Here is a quick `setup.sh` script to scaffold the project and add necessary scripts:

```sh title="setup.sh"
#!/usr/bin/env bash
set -euo pipefail

echo "Creating project structure and source files…"

PROJECT_DIR="action_wrappers_tutorial"
mkdir -p "${PROJECT_DIR}/include" "${PROJECT_DIR}/src" "${PROJECT_DIR}/build/multi_index_example"

# Write include file
cat > "${PROJECT_DIR}/include/multi_index_example.hpp" << 'EOF'
#pragma once

#include <sysio/sysio.hpp>
#include <sysio/action.hpp>
using namespace sysio;

class [[sysio::contract]] multi_index_example : public contract {
public:
    multi_index_example(name receiver, name code, datastream<const char*> ds);

    struct [[sysio::table]] test_table {
        name     test_primary;
        name     secondary;
        uint64_t datum;

        uint64_t primary_key() const { return test_primary.value; }
        uint64_t by_secondary() const { return secondary.value; }
    };

    using test_tables = multi_index<"testtaba"_n, test_table,
        indexed_by<"secid"_n,
            const_mem_fun<test_table, uint64_t, &test_table::by_secondary>
        >
    >;

    test_tables testtab;

    [[sysio::action]] void set(name user);
    [[sysio::action]] void print(name user);
    [[sysio::action]] void bysec(name secid);
    [[sysio::action]] void mod(name user, uint32_t n);
    [[sysio::action]] void del(name user);
};
EOF

# Write source file
cat > "${PROJECT_DIR}/src/multi_index_example.cpp" << 'EOF'
#include "multi_index_example.hpp"

using namespace sysio;

multi_index_example::multi_index_example(name receiver, name code, datastream<const char*> ds)
    : contract(receiver, code, ds), testtab(receiver, receiver.value) {}

[[sysio::action]]
void multi_index_example::set(name user) {
    auto itr = testtab.find(user.value);
    if (itr == testtab.end()) {
        testtab.emplace(_self, [&](auto& u) {
            u.test_primary = user;
            u.secondary    = "second"_n;
            u.datum        = 0;
        });
    }
}

[[sysio::action]]
void multi_index_example::print(name user) {
    check(testtab.find(user.value) != testtab.end(), "user not in table");
    auto itr = testtab.find(user.value);
    print_f("Test Table: {%, %, %}\n",
            itr->test_primary,
            itr->secondary,
            itr->datum);
}

[[sysio::action]]
void multi_index_example::bysec(name secid) {
    auto idx = testtab.get_index<"secid"_n>();
    for (auto itr = idx.begin(); itr != idx.end(); ++itr) {
        sysio::print(itr->test_primary);
        sysio::print("\n");
    }
}

[[sysio::action]]
void multi_index_example::mod(name user, uint32_t n) {
    auto itr = testtab.find(user.value);
    check(itr != testtab.end(), "user not in table");
    testtab.modify(itr, _self, [&](auto& row) {
        row.secondary = user;
        row.datum     = n;
    });
}

[[sysio::action]]
void multi_index_example::del(name user) {
    auto itr = testtab.find(user.value);
    if (itr == testtab.end()) {
        sysio::print("user does not exist in table\n");
        return;
    }
    testtab.erase(itr);
}

SYSIO_DISPATCH(multi_index_example, (set)(print)(bysec)(mod)(del));
EOF

# 5) Create root-level build.sh
cd action_wrappers_tutorial
cat > build.sh << 'EOF'
#!/usr/bin/env bash
set -e

echo "Building multiindex…"

cdt-cpp -I include -o build/multi_index_example/multi_index_example.wasm src/multi_index_example.cpp

echo "Build complete!"
EOF
chmod +x build.sh

# 6) Create root-level deploy.sh
cat > deploy.sh << 'EOF'
#!/usr/bin/env bash
set -e

echo "Deploying multiindex"

clio set contract multiindex build/multi_index_example -p multiindex@active

echo "Deployment complete!"
EOF
chmod +x deploy.sh

# 7) Create README & .gitignore
cat > README.md << 'EOF'
# Action Wrappers Example (sysio)

## Quickstart

\`\`\`bash
./build.sh
./deploy.sh
./test.sh
\`\`\`
EOF

cat > .gitignore << 'EOF'
build/
*.o *.d
.DS_Store
EOF

echo "Setup complete! Directory structure:" 
tree -L 2


echo "Project scaffold created at: ${PROJECT_DIR}/"
```

## Steps: Setting Up and Using Action Wrappers

---

### 1. Scaffold the Project

Run the provided `setup.sh` script. This creates a clean directory structure for this tutorial, including folders for headers (`include/`), source files (`src/`), and build outputs (`build/`). Organizing your project this way makes it easier to manage, build, and deploy your smart contracts.

---

### 2. Inspect the Action Wrapper

In your contract header, the `mod_action` action wrapper is defined for the `mod` action. This provides a type-safe, convenient C++ object for sending the `mod` action to the contract.

```cpp
using mod_action = sysio::action_wrapper<"mod"_n, &multi_index_example::mod>;
```

---

### 3. `./build.sh`

Use `build.sh` to compile the contract with `cdt-cpp`, which will output the WASM and ABI files to `build/multi_index_example/`

---

### 4. `./deploy.sh`

Use the `deploy.sh` to deploy your compiled contract to the blockchain using `clio set contract`.

```sh
sudo ./deploy.sh
```

---

### 5. Use the Action Wrapper in Practice

Look at the contract header file above (in the `multi_index_example.hpp` snippet). Notice that the `set` action is declared:

```hpp
[[sysio::action]] void set(name user);
```

To create an action wrapper for this action, you would add this line to the header file; in our case, line 36.

```cpp
using set_action = sysio::action_wrapper<"set"_n, &multi_index_example::set>;
```

This would create a type-safe wrapper for the `set` action. The wrapper would know the action name (`"set"`) and the function signature (`&multi_index_example::set`).

In the contract source file (in the `multi_index_example.cpp` snippet), you can see the `set` action implementation:

```cpp
[[sysio::action]]
void multi_index_example::set(name user) {
    auto itr = testtab.find(user.value);
    if (itr == testtab.end()) {
        testtab.emplace(_self, [&](auto& u) {
            u.test_primary = user;
            u.secondary    = "second"_n;
            u.datum        = 0;
        });
    }
}
```

---

### 6. Build the Contract

Compile your contract by running:

```bash
./build.sh
```

---

### 7. Deploy the Contract

Deploy the contract to the blockchain with:

```bash
./deploy.sh
```

---

### 8. Test the Action Wrapper

Push actions to the contract to verify that the action wrapper works as expected:

```bash
# Add a user
clio push action multiindex set '["alice"]' -p multiindex@active

# Modify the user using the action wrapper
clio push action multiindex mod '["alice", 200]' -p multiindex@active

# Check the result
clio push action multiindex print '["alice"]' -p multiindex@active
```
