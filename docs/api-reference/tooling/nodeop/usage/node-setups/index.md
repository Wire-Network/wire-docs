---
title: Nodeop Common Setups
---

`nodeop` generally runs in two modes:

* [Producing Node](producing-node.md)
* [Non-Producing Node](non-producing-node.md)

_Producing Nodes_ are configured for block production. They connect to the peer-to-peer network and actively produce new blocks. Loose transactions are also validated and relayed. On mainnet, _Producing Nodes_ only produce blocks if their assigned block producer is part of an active schedule.

_Non-Producing Nodes_ connect to the peer-to-peer network but do not actively produce new blocks; they are useful for acting as proxy nodes, relaying API calls, validating transactions, broadcasting information to other nodes, etc. _Non-Producing Nodes_ are also useful for monitoring the blockchain state.
