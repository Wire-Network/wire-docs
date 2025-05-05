---
sidebar_label: DIABLE_COMPRESSION_IN_TRANSACTION_MERKLE
title: DIABLE_COMPRESSION_IN_TRANSACTION_MERKLE
sidebar_position: 1
---

## Overview

The `DIABLE_COMPRESSION_IN_TRANSACTION_MERKLE` protocol feature is designed to improve the efficiency of transaction proofs in the Wire blockchain. It does this by eliminating the need for zlib compression when calculating the transaction_mroot for a block.

Prior to this feature being turned on, the transaction_mroot for a block was logically determined using a packed, and possibly zlib-compressed, transaction to calculate each transaction's digest. Because of this, proving that a transaction is present in the block required a zlib compression algorithm, which could be costly and inefficient in Solidity.
In order to make proving that a transaction was part of the transaction_mroot more feasible and efficient, this protocol feature changes the transaction_mroot to pack and create the digest using the signatures (compression is no longer involved).
