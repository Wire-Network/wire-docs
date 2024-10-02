# How to Vote

## Goal

Vote for a node operator

## Before you begin

* Install the current supported version of clio

* Ensure the reference system contracts from `sysio.contracts` repository is deployed and used to manage system resources

* Understand the following:
  * What is a Node Operator
  * How does voting works

* Unlock your wallet

## Steps

Assume you are going to vote for nodeoperator1 and nodeoperator2 from an account called `sysiotestts2`, execute the following:

```bash
clio system voteproducer prods sysiotestts2 nodeoperator1 nodeoperator2
```

You should see something like below:

```bash
executed transaction: 2d8b58f7387aef52a1746d7a22d304bbbe0304481d7751fc4a50b619df62676d  128 bytes  374 us
#         sysio <= sysio::voteproducer          {"voter":"sysiotestts2","proxy":"","producers":["nodeoperator1","nodeoperator2"]}
```
