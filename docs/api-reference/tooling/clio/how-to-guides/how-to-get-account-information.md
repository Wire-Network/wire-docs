## Goal

Query infomation of an account

## Before you begin

* Install the currently supported version of `clio`

:::note
| The `clio` tool is bundled with the Wire software. [Installing Wire core](/docs/getting-started/install-dependencies.md) will install the `clio` and `kiod` command line tools.
:::

<!-- TODO add references to article about Accounts and Permissions -->
* Understanding Accounts and Permissions

## Steps

Execute the command below:

```sh
clio get account ACCOUNT_NAME
```

Where ACCOUNT_NAME = name of the existing account in the Wire blockchain.

**Example Output**

```console
created: 2018-06-01T12:00:00.000
privileged: true
permissions:
     owner     1:    1 EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV
        active     1:    1 EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV
memory:
     quota:       unlimited  used:     3.004 KiB

net bandwidth:
     used:               unlimited
     available:          unlimited
     limit:              unlimited

cpu bandwidth:
     used:               unlimited
     available:          unlimited
     limit:              unlimited
```

:::info[Account Fields]
| Depending on the network you are connected, you might see different fields associated with an account. That depends on which system contract has been deployed on the network.
:::
