## Goal
Create a keypair consisting of a public and a private key for signing transactions in the Wire blockchain.

## Before you begin
Before you follow the steps to create a new key pair, make sure the following items are fulfilled:


* Install the currently supported version of `clio`

:::info[Note]
| The `clio` tool and `kiod` are bundled with the Wire software. [Installing Wire core](/docs/getting-started/install-dependencies.md) will install the `clio` and `kiod` command line tools. 
:::

* Acquire functional understanding of asymmetric cryptography (public and private keypair) in the context of blockchain

## Steps

To create a keypair and print the result to the console:

```sh
clio create key --to-console
```

**Example Output**

```sh
clio create key --to-console
Private key: 5KPzrqNMJdr6AX6abKg*******************************cH
Public key: EOS4wSiQ2jbYGrqiiKCm8oWR88NYoqnmK4nNL1RCtSQeSFkGtqsNc
```


To create a keypair and save it to a file:

```sh
clio create key --file FILE_TO_SAVEKEY
```
Where: FILE_TO_SAVEKEY = name of the file

**Example Output**
```sh
clio create key --file pw.txt         
saving keys to pw.txt
```

To view the saved keypair in the file:
```sh
cat pw.txt
Private key: 5K7************************************************
Public key: EOS71k3WdpLDeqeyqVRAAxwpz6TqXwDo9Brik5dQhdvvpeTKdNT59
```
