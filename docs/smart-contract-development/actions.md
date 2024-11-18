# Actions

An action is a specific function or operation that can be executed on a smart contract. Smart contracts are self-executing programs with predefined rules and conditions, and actions are the entry points that allow accounts or other contracts to interact with them.

## Defining an Action in Wire Smart Contracts

- **Action with specified return type**

If you want the action to have a return type, you must use the `[[sysio::action]]` syntax followed by the desired return type.

```cpp
[[sysio::action]] std::string myaction() {
    // ...
    return "Hello";
}
```

:::warning
Return values are only usable **outside the blockchain** and cannot currently be used within Wire for smart contract composability.
:::

- **Simple Action**: A shorthand method that always returns `void`

If you don’t need to specify the return type, you can use the `ACTION` macro, which is a shorthand for `[[sysio::action]] void`.

```cpp
ACTION myaction() {
    //...
}
```

## Inline Actions

Inline actions allow a contract to call an action of another contract from within its own code. This is useful for building functionality on top of existing contracts.

Let’s demonstrate this with two simple contracts: `seller` and `buyer`. In this example we will define an inline action `notifysale` on `seller` contract which would be called within `buyitem` action on the `buyer` contract.

```cpp
#include <sysio/sysio.hpp>
using namespace sysio;

#include <sysio/sysio.hpp>
#include <sysio/asset.hpp>
using namespace sysio;

CONTRACT seller : public contract {
public:
    using contract::contract;

    ACTION notifysale(name buyer_name, uint64_t item_id, asset price) {
        require_auth(get_self()); // Only the seller contract can call this action

        // ...business logic to process the sale

        print("Item ", item_id, " sold to ", buyer_name, " for ", price);
    }
};
```

```cpp
#include <sysio/sysio.hpp>
#include <sysio/asset.hpp>
using namespace sysio;

CONTRACT buyer : public contract {
public:
    using contract::contract;

    ACTION buyitem(name buyer_account, name seller_account, uint64_t item_id, asset price) {
        require_auth(buyer_account);

        // ...business logic

        // highlight-start
        // Notify seller of the purchase
        action(
            permission_level{get_self(), "active"_n},
            seller_account,             // Seller's contract account
            "notifysale"_n,               // Action on the seller contract
            std::make_tuple(buyer_account, item_id)
        ).send();
        // highlight-end
        print("Buyer: Purchased item ", item_id, " from ", seller_account);
    }
};
```

### Inline Action Constructor

The action constructor takes four arguments:

```txt
action(
    <permission_level>,
    <contract>,
    <action>,
    <data>
).send();
```

#### Parameters of the `action` constructor

| Parameter          | Type               | Description                                                                                                                                      |
|--------------------|--------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| `permission_level` | `permission_level` | Specifies who is authorizing the action and at what permission level. Constructed using `{actor, permission}`.                                    |
| `contract`         | `name`             | The account name where the target action is deployed. This is the contract you are calling.                                                      |
| `action_name`      | `name`             | The name of the action you want to invoke on the target contract.                                                                                |
| `data`             | `std::tuple`       | The data to be passed to the action, packaged as a tuple containing the arguments required by the target action. Use `std::make_tuple` to create it. |

:::success[TIP]

- To convert a string into a `name` type for parameters like `contract` and `action_name`, use the `name()` function.

- Use `std::make_tuple()` to package multiple arguments together into the `data` parameter that matches the target action’s expected structure.

  - `std::make_tuple(arg1, arg2, arg3, ...);`

:::

##### Setting Up the Permission Level

The `permission_level` argument specifies the permission level under which the action will be executed. It consists of two components:

```cpp
permission_level(
    account,
    permission  
)
```

- `account` (name type): The account authorizing the action.
- `permission` (name type): The permission level of the account (e.g., "active"_n).

:::danger[IMPORTANT]
 When you call an inline action, **the contract initiating the call becomes the new sender**. For security reasons, the original authorization is **not** passed to the called contract. This prevents the called contract from performing actions on behalf of the original sender, such as transferring tokens without explicit permission.
:::

###### Setting Up Special Permission (`eosio.code`)

To allow your contract to call inline actions on other contracts,**you need to grant it the special `eosio.code` permission**. Without this permission, your contract cannot execute actions on other contracts.

This permission is on the `active` permission level so that it allows other contracts using the `require_auth()` to verify that your contract has the authority to perform the action.

###### How to Add the `eosio.code` Permission

Add the `eosio.code` permission to the contract account `active` permission to enable calling inline actions by the contract account's `active` permission.

```sh
clio set account permission yourcontract active --add-code -p yourcontract@active
```

Example of post-update permission's hierarchy:

```txt
owner
  • YOUR_PUBLIC_KEY
    ↳ active
      • YOUR_PUBLIC_KEY
      • <yourcontract@eosio.code>
```
