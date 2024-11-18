# State Data

There are two types of data in a smart contract: **state data** and **transient data**. State data is persistent data that is stored on the
blockchain. Transient data is only stored during the execution of a transaction.

## Data Models

Data model is a serializable C++ struct that represents the data object to be stored on the blockchain. It can contain
any data type that is also serializable. All common data types are serializable, and you can also create your own
serializable data types, such as other models that start with the `TABLE` keyword.

```cpp
TABLE UserModel {
    uint64_t id;
    name account_name;
    uint64_t primary_key() const { return id; }
};
```

### Defining a model

Defining a model in Wire smart contracts is similar to defining a C++ struct, but there are some important differences:

 1. **Use the `TABLE` Macro instead of Struct**: Instead of using the `Struct` keyword, you must use the `TABLE` macro. This macro tells the Wire system that you’re defining a data table that can be stored on the blockchain.
 2. **Define a primary_key Function**: You must include a `primary_key()` that returns a `uint64_t`. This function specifies the primary key for the table, which is crucial for indexing and lookup.

#### Primary Key

- The primary key must be a `uint64_t` (you can also use `name.value` since it evaluates to a `uint64_t`).
- It must be **unique** for each row in the table.

#### Secondary Key

A secondary index is more flexible than a primary key and it's primaraly used when you intend to associate multiple rows with the same key. It can be any of the following data types:

- `uint64_t`
- `uint128_t`
- `double`
- `long double`
- `checksum256`

:::warning[💰 **Cost considerations**]
 Each index costs RAM per row, so you should only use secondary indices with caution.
:::

### Scope

The scope of a table is a way to partition the data in the table using a `uint64_t`, that determines which _partition_ the data is stored in.

If we were to imagine the database as a `JSON` object, it might look like this:

```json title="tables.json"
{
    "users": {
        1: [
            {
                "id": 1,
                "account_name": "jack"
            },
            {
                "id": 2,
                "account_name": "nick"
            }
        ],
        2: [
            {
                "id": 1,
                "account_name": "daniel"
            }
        ]
    }
}
```

By design, the same primary key can be used in different scopes without causing any conflicts. This is a useful approach because it allows you to partition your data logically within the same table, offering flexibility to organize data according to your needs.

## Multi-Index Table

The multi-index table is the most common way to store data on the Wire blockchain. It is a persistent key-value store that
can be indexed in multiple ways, but **always has a primary key**.

### Defining a Multi-Index Table

To create a multi-index table you must have a model defined with at least a primary key. You can then create a multi-index
table by using the `multi_index` template, and passing in the name of the table/collection and the model you want to use.

```cpp
TABLE UserModel ...

using users_table = multi_index<"users"_n, UserModel>;
```

This will create a table called `users` that uses the `UserModel` model. You can then use this table to store and retrieve
data from the blockchain.

### Instantiating a table

To do anything with a table, you must first instantiate it. To do this, you must pass in the contract that owns the table,
and the scope that you want to use.

```cpp
ACTION myaction() {
    name mycontractaccount = get_self();
    users_table users(mycontractaccount, mycontractaccount.value);
}
```

### Inserting data

To insert data, use the `emplace()`, which takes a lambda/anonymous function that accepts a reference to the model that you want to insert.

```cpp
users.emplace(mycontractaccount, [&](auto& row) {
    row.id = 1;
    row.account_name = "jack"_n;
});
```

You can also define a model first, and insert it into the entire row.

```cpp
UserModel user = {
    .id = 1,
    .account_name = name("jack")
};

users.emplace(mycontractaccount, [&](auto& row) {
    row = user;
});
```

### Retrieving data

To retrieve data from a table, you will use the `find()` method on the table, which takes the primary key of the row that
you want to retrieve. This will return an iterator (reference) to the row.

```cpp
auto iterator = users.find(1);
```

:::warning[Always Check If the Row Exists]

When you retrieve data from a table using the `find(`) method, you must check whether the row actually exists. If the row is not found, the iterator returned will be equal to `users.end()`, which is a special iterator representing the end of the table.

```cpp
if (iterator != users.end()) {
    // You found the row
}
```

:::

#### Access the data

You have two ways to access the data in the row from the iterator:

- **Using the * (dereference) Operator**: This gives you a reference to the row’s data object.

```cpp
UserModel user = *iterator;
uint64_t id = user.id;
name account = user.account_name;
```

- **Using the -> (member access) Operator**: This allows you to access the members of the row directly through the iterator.

```cpp
UserModel user = *iterator;
uint64_t id = iterator->id;
name account = iterator->account_name;
```

### Modifying data

To modify data in a table, you must use the `modify` method, which takes a reference to the iterator you want to modify, a RAM payer,
and a lambda/anonymous function that allows us to modify the data.

```cpp
users.modify(iterator, mycontractaccount, [&](auto& row) {
    row.account_name = name("nick");
});
```

### Removing data

To remove data from a table, use the `erase` method, which takes a reference to the iterator you want to remove.

```cpp
users.erase(iterator);
```

### Using a secondary index

Using a secondary index will allow you to query your table in a different way. For example, if you wanted to query your
table by the `account_name` field, you will need to create a secondary index on that field.

#### Redefining our model and table

To use a secondary index, you must first define it in your model. You do this by using the `indexed_by` template, and passing
in the name of the index, and the type of the index.

```cpp
TABLE UserModel {
    uint64_t id;
    name account_name;

    uint64_t primary_key() const { return id; }
    uint64_t account_index() const { return account_name.value; }
};

using users_table = multi_index<"users"_n, UserModel,
    indexed_by<"byaccount"_n, const_mem_fun<UserModel, uint64_t, &UserModel::account_index>>
>;
```

The `indexed_by` template can be a bit confusing, so let's break it down.

```cpp
indexed_by<
    <name_of_index>,
    const_mem_fun<
        <model_to_use>, 
        <index_type>,
        <pointer_to_index_function>
    >
>
```

The `name_of_index` is the name of the index that you want to use. This can be anything, but it's best to use something
that describes what the index is for.

The `model_to_use` is the model that you want to use for the index. This is usually the same model that you are using for
the table, but it doesn't have to be. This is useful if you want to use a different model for the index, but still want
to be able to access the data in the table.

The `index_type` is the type of the index, and is limited to the types we discussed earlier.

The `pointer_to_index_function` is a pointer to a function that returns the value that you want to use for the index. This
function must be a `const_mem_fun` function, and must be a member function of the model that you are using for the index.

#### Using the secondary index

To query your table by a secondary index , you must get the index from the table first, and
then use `find()` on the index.

```cpp
auto index = users.get_index<"byaccount"_n>();
auto iterator = index.find(name("jack").value);
```

To modify data in the table using the secondary index, you use the `modify()` method on the index.

```cpp
index.modify(iterator, mycontractaccount, [&](auto& row) {
    row.account_name = name("foobar");
});
```

## Singleton Table

A `singleton` table is a special type of table that can only have one row per scope. This is useful for storing data that
you only want to have one instance of.

The primary differences between a `singleton` table and a `multi-index` table are:

- Singletons do not need a primary key on the model.
- Singletons can store any type of data, not just predefined models.
- Singletons do not support secondary indices.

### Defining a Siggleton Table

To define a singleton table, you use the `singleton` template, and pass in the name of the table, and the type of the
data that you want to store.

```cpp
#include <sysio/singleton.hpp>

TABLE ConfigModel {
    bool is_active;
};

using config_table = singleton<"config"_n, ConfigModel>;

using is_active_table = singleton<"isactive"_n, bool>;
```

n the example above, both tables are identical; however, the is_active table will be more efficient and performant since it eliminates the overhead associated with storing the entire `ConfigModel` struct.

### Instantiating a table

Just like the `multi_index` table, you must first instantiate the table, and then you can use it.

```cpp
name mycontractaccount = get_self();
config_table configs(mycontractaccount, mycontractaccount.value);
```

The `singleton` table takes two parameters in its constructor. The first parameter is the contract that the table is
owned by, and the second parameter is the `scope`.

### Retrieving data

There are a few ways to fetch data from a `singleton`.

#### Get or fail

This will error out at runtime if there is no existing data.
To prevent this, you can use the `exists` method to check if there is existing data.

```cpp
if (!configs.exists()) {
    // handle error
}
ConfigModel config = configs.get();
bool isActive = config.is_active;
```

#### Get or default

This will return a default value, but **will not** persist the value.

```cpp
ConfigModel config = configs.get_or_default(ConfigModel{
  .is_active = true
});
```

#### Get or create

This will return a default value, and **will** persist the value.

```cpp
ConfigModel config = configs.get_or_create(ConfigModel{
  .is_active = true
});
```

### Inserting data

To persist data in a `singleton`, you can use the `set` method, which takes a reference to the data that you want to set.

```cpp
configs.set(ConfigModel{
    .is_active = true
}, mycontractaccount);
```

### Removing data

Once you've instantiated a `singleton`, it's easy to remove it. Just called the `remove` method on the instance itself.

```cpp
configs.remove();
```
