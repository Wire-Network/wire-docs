---
title: Context-Free Data 
---

## Overview
The immutable nature of the blockchain allows data to be stored securely while also enforcing the integrity of such data. However, this benefit also complicates the removal of non-essential data from the blockchain. Consequently, Wire blockchains contain a special section within the transaction, called the *context-free data*. As its name implies, data stored in the context-free data section is considered free of previous contexts or dependencies, which makes their potential removal possible. More importantly, such removal can be performed safely without compromising the integrity of the blockchain.

:::info[Blockchain Integrity]
| Pruning of context-free data does not bend or relax the security of the blockchain. Nodes configured in full validation mode can still detect integrity violations on blocks with pruned transaction data.
:::

## Concept
The goal of context-free data is to allow blockchain applications the option to store non-essential information within a transaction. Some examples of context-free data include:

* Secondary blockchain data that is transient or temporary in nature
* Short-term, non-critical data associated with a transaction message
* User comments made to an online article stored on the blockchain

In general, any data that is not vital for the operation and integrity of the blockchain may be stored as context-free data. It may also be used to comply with regional laws and regulations concerning data usage and personal information.

## Pruning
Blockchain applications that use context-free data might also want to remove the contents without affecting blockchain integrity. This can be achieved through a process called *pruning*. Removal of the context-free data associated with a transaction provides more functionality to blockchain applications, namely:

* A mechanism to delete transaction data free of any context or inter-dependencies.
* A way to maintain blockchain integrity while removing such context-free data.

Pruning of context-free data only allows light block validation between trusted nodes. Full block validation, which involves transaction signature verification and permission authorization checks, is not fully feasible without violating the integrity checks of blocks and transactions where the pruning occurred.

:::note[Pruning on Private Blockchains]
| Private Wire blockchains can benefit the most from context-free data pruning. Their controlled environment allows for trusted nodes to operate in light validation mode. This allows blockchain applications to use private Wire blockchains for this powerful feature.
:::

### Pruning Support
`nodeop` supports the pruning of context-free data by meeting the following requirements:

* Correct handling of irreversible blocks with removed context-free data in pruned transactions
* Efficient deletion of existing context-free data within arbitrary finalized transactions
* Correct handling of transaction traces with removed context-free data generated by the state history plugin
* Efficient deletion of existing context-free data within finalized transactions from the trace log used by the state history plugin
* Peer-to-peer synchronization of blocks with removed context-free data from applicable transactions
* Tool support for the actual CFD pruning within the irreversible blocks log and the state history plugin trace log

::: -->