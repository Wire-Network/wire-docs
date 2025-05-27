# Working with Different Action Return Types

## Prerequisites

- Before proceeding forward, ensure that **you have completed Getting Started section** and that you have followed [Getting Started Documentation Diagram](/docs/getting-started/getting-started-intro.md).
- This page assumes you are familiar with [Smart Contract Basics](/docs/smart-contract-development/smart-contract-basics).

:::warning[REMINDER]
The install process has already set up the wallet for the *root* user. To interact with clio, ensure **you are on the root user**. Run `sudo su -` to switch to the root user.
:::

## Steps

### 1\. Create a new directory for our contract

```sh
mkdir -p returndemo && cd returndemo
```

### 2\. Create the contract file `returndemo.cpp`

```cpp
#include <sysio.hpp>
#include <string>
#include <vector>

class [[sysio::contract]] returndemo : public sysio::contract {
public:
    using contract::contract;

    struct [[sysio::table]] tmp {
        uint32_t id = 1;
        std::vector<uint16_t> list{ 1, 2 };
    };

    [[sysio::action]]
    std::string rstring(const std::string & str) { 
        return str;   
    }

    [[sysio::action]]
    uint16_t ruint(uint16_t i) { 
        return i;     
    }

    [[sysio::action]]
    tmp rtmp() { 
        return tmp{}; 
    }
};
```

### 3\. Build the Contract

```sh
cdt-cpp -abigen  -contract returndemo -o returndemo/returndemo.wasm returndemo.cpp -I include
```

### 4\. Deploy the Contract

Before deploying, ensure you have an open wallet and account to deploy the contract to.  

:::note

In Wire ecosystem, deploying a smart contract requires an account; an account can own one smart contract instance and a smart contract instance must be deployed to an account. Each account functions as a distinct namespace for the contract, which means that the contract’s code and its state are encapsulated within that account.

:::

---

#### 4.1 Retrieve public key

Before proceeding, make sure you have the public key available from the key pair that was created when setting up your wallet(key pair is also listed [here](#development-key-pair)). If you haven’t yet created a wallet or a key pair, you can do so by following the instructions [here](/docs/getting-started/manage-local-wallet-with-clio.md).

```bash
export PUBLIC_KEY=<public-key-value>
```

#### 4.2. Create the account that we will deploy the contract to

```bash
clio create account sysio returndemo $PUBLIC_KEY -p sysio@active
```

#### 4.3. Issue a contract policy to `returndemo` account

`nodedaddy`'s credentials(those should be already imported in your wallet):

##### development key pair

```txt
PUBLIC_KEY=SYS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV
PRIVATE_KEY=5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3
```

Issue the policy:

```sh
clio push action sysio.roa addpolicy '{"owner": returndemo, "issuer": nodedaddy, "netWeight": "0.0100 SYS", "cpuWeight": "0.0100 SYS", "ramWeight": "0.0010 SYS", "timeBlock": 1, "networkGen": 0 }' -p nodedaddy@active
```

#### 4.2 Deploy the compiled contract

```bash
                 [account]     [WASM dir]  [permission level] 
clio set contract returndemo  returndemo -p  returndemo@active
```

Now that our contract is deployed, we can interact with it using the `clio push action` command. Here are some examples:

```sh
> clio push action returndemo rstring '{"str":null}'  -p returndemo@active

executed transaction: bd82b06bf56a3fb61564cb566b2412ec60ade76b4aa683980150428d94d480dd  96 bytes  314 us
#    returndemo <= returndemo::rstring          {"str":""}
=>                                return value: ""

> clio push action returndemo rstring '{"str":"test"}'  -p returndemo@active

executed transaction: 69366ff9edad9a16a1d5f9181ad3415512f7bfaca4bd15ce2be38163a6642be1  104 bytes  148 us
#    returndemo <= returndemo::rstring          {"str":"test"}
=>                                return value: "test"

> clio push action returndemo ruint '{"i":42}'  -p returndemo@active

executed transaction: f90221965a81c53da7d8f5b49a2be34994ed6ed463afe80f4f23f48f7ece5fb9  96 bytes  195 us
#    returndemo <= returndemo::ruint            {"i":42}
=>                                return value: 42
```

The `rtmp` action output, returning a default `tmp` object, looks like this:

```sh
> clio push action returndemo rtmp '{}'  -p returndemo@active

executed transaction: 42386687d94695d77d67cf901cf8d1a4f83ac9f89382f0b01f3fb51267cc21cd  96 bytes  110 us
#         returndemo <= returndemo::rtmp        ""
=>                                return value: {"id":1,"list":[1,2]}
```

If the length of the return value string is more than 100 chars, the string will be truncated to the first 100 chars and three dots `...` will be added at the end. It's similar to what `clio` does to action parameters output.

```sh
> clio push action returndemo rstring '{"str":"qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq"}'  -p returndemo@active
executed transaction: 985b4f7acefafd018659a544b3a5c3288d8ac76e53a5747e928a85d49256d4a2  248 bytes  243 us
#    returndemo <= returndemo::rstring          {"str":"qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq...
=>                                return value: "qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq...
```

When the ABI doesn't include the return type definition for an action, the return value will be displayed in hexadecimal format, like this:

```sh
=>                          return value (hex): 1400000001000770656e64696e6700000000
```
