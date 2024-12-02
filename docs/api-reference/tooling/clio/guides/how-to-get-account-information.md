# Get Account Information

## Prerequisites

* Install the currently supported version of `clio`

:::note
| The `clio` tool is bundled with the Wire software. [Installing Wire core](/docs/getting-started/install-dependencies.md) will install the `clio` and `kiod` command line tools.
:::

```sh
clio get account <account-name>
```

```console
created: 2024-11-11T18:28:34.000
permissions: 
     owner     1:    1 SYS6stkNixN...
        active     1:    1 SYS6stkNixN...

permission links: 
     sysio.any: 

memory: 
     quota:     489.6 KiB    used:      3.76 KiB  

net bandwidth: 
     delegated:      50.0000 SYS           (total staked delegated to account from others)
     used:               976 bytes
     available:        17.28 MiB  
     limit:            17.28 MiB  

cpu bandwidth:
     delegated:      50.0000 SYS           (total staked delegated to account from others)
     used:             3.016 ms   
     available:          861 ms   
     limit:              864 ms   

subjective cpu bandwidth:
     used:                 0 us   

SYS balances: 
     liquid:            9.0000 SYS
     staked:            0.0000 SYS
     unstaking:         0.0000 SYS
     total:             9.0000 SYS
```

:::info[Account Fields]
| Depending on the network you are connected, you might see different fields associated with an account.
:::
