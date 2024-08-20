---
sidebar_position: 1
id: getting-started-intro
sidebar_label: Getting Started
---

# Basic Components

Wire Network blockchain platform comes with various components and tooling. See the table below for a brief explanation.

| Name | Function |
| --- | --- |
| `nodeos` | nodeos (node + EOSIO) is the **core service daemon** that runs on every EOSIO node, responsible for processing smart contracts, validating transactions, producing blocks containing valid transactions, and confirming blocks to record them on the blockchain. It can be configured with various plugins to suit specific needs, including block production, dedicated API endpoints, and local development environments. As the main component of EOSIO, nodeos ensures efficient and secure operation of the blockchain network by leveraging its capabilities for transaction validation, smart contract processing, and block confirmation. |
| `keosd` | keosd is the **key manager service daemon** that securely stores private keys and signs digital messages. It ensures that keys are encrypted at rest in the associated wallet file and provides a secure enclave for signing transactions created by `cleos` or third-party libraries. |
| `cleos` | cleos is a CLI that interfaces with the REST API exposed by nodeos. It also allows developers to deploy and test EOSIO smart contracts. |
| `CDT` | The Contract Development Toolkit is a C/C++ toolchain targeting WebAssembly (WASM) and a set of tools to facilitate development and deployment of smart contracts written in C/C++. In addition to being a general-purpose WebAssembly toolchain, Wire-specific optimizations are available to support building Wire smart contracts. This new toolchain is built around Clang 7, which means that CDT has most of the current optimizations and analyses from LLVM. |

The basic relationship between these components is illustrated in the following diagram:

![Core components diagram](/img/core-components-diagram.png)

## References

- [nodeos](/docs/api-reference/tooling/nodeos/index.md)

<!-- GitHub - siliconswampio/wire-eosio  -->

<!-- `nodeos` is the core Wire node daemon. nodeos handles the blockchain data persistence layer, peer-to-peer networking, and contract code scheduling. For development environments, nodeos enables you to set up a single node blockchain network. It offers a wide range of features through plugins which can be enabled or disabled at start time via the command line parameters or configuration files. -->

- [cleos](/docs/api-reference/tooling/cleos/index.md)

<!-- cleos is a command line tool that interfaces with the REST APIs exposed by nodeos. You can also use cleos to deploy and test Wire smart contracts. -->

- [keosd](/docs/api-reference/tooling/keosd/index.md)

<!-- keosd is a key manager daemon for storing private keys and signing digital messages. keosd provides a secure key storage medium for keys to be encrypted in the associated wallet file. The keosd daemon also defines a secure enclave for signing transaction created by cleos or a third party library. -->

:::info[NOTE] Note: keosd can be accessed using the Wallet API, but it is important to note that the intended usage is for local light client applications. keosd is not for cross network access by web applications trying to access users' wallets. :::

_CDT Contract Development Kit_

<!-- CDT is a toolchain for WebAssembly (Wasm) and a set of tools to facilitate contract writing for the Wire framework. In addition to being a general-purpose WebAssembly toolchain, Wire-specific optimizations are available to support building Wire smart contracts. This new toolchain is built around Clang 7, which means that CDT has most of the current optimizations and analyses from LLVM. -->

:::info[NOTE]

Wire Network also provides a frontend library for JavaScript development called WireJS.

:::

---

_WireJS_ A Javascript API SDK for integration with Wire-based blockchains, built on top of EOSJS
