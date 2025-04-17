---
sidebar_position: 1
id: getting-started-intro
tags:
  - wire-sysio
  - wire-cdt
  - nodeop
  - clio
  - kiod
---

# Getting Started

:::info
The diagram below serves as a comprehensive roadmap, detailing the *sequential steps required to effectively utilize the documentation provided*. For optimal understanding and efficiency, it’s important to follow the order of the steps, beggining with this article, contunuing with setting up your local environment and progressing through the smart development contracts section.

:::

![infographic](/img/infographic1.png)

## Supported Operating Systems

The Wire platform is supported on the following environments:

**Linux Distributions**:

- Ubuntu v22 & v20

## System Info

The subsequent tutorials([hello world contract](../smart-contract-development/hello-world-contract-short.md), [company contract](../smart-contract-development/company-contract.md)) are up to date with the following Wire components.

| Component          | Version |
| ------------------ | ------- |
| Wire Sysio Core Version | 5.1.0   |
| Wire CDT                | 4.0.1   |
| sysio.contracts    | 3.3.0   |

## Development Experience

Wire based blockchains execute user-generated applications and code using WebAssembly (WASM). WASM is an emerging web standard with widespread support from Google, Microsoft, Apple, and industry leading companies.

At the moment the most mature toolchain for building applications that compile to WASM is clang/llvm with their C/C++ compiler.

### Command Line Knowledge

There are a variety of tools provided along with Wire core and CDT packages which requires you to have a basic command line knowledge in order to interact with them.

### Development Tools

We recommend using an Integrated Development Environment (IDE) rather than a text editor, as IDEs offer a more sophisticated code completion and a more comprehensive development experience. While you can use any text editor that supports C++ syntax highlighting, such as Sublime Text or Atom, IDEs provide additional features that can enhance your coding efficiency. You are welcome to use the software of your personal preference, but if you're unsure what to use, we've provided some options for you to explore.

### IDEs

- [Visual Studio Code](https://code.visualstudio.com/)
- [CLion](https://www.jetbrains.com/clion/)
- [Eclipse](https://eclipseide.org/)

:::info[NOTE]

The resources mentioned above are developed, offered, and maintained _by third parties_, **not** by Wire Network. Sharing information, materials, or commentaries about these third-party resources does not constitute an endorsement or recommendation by us. We disclaim any responsibility or liability for your use of or reliance on these resources. Third-party resources may be updated, changed, or terminated at any time, which could render the information below outdated or inaccurate. Your use and reliance on these resources are entirely at your own risk.

:::

## What You Will Learn

- [Manage wallets and keys](./create-development-wallet.md)
- [Create accounts](./create-development-accounts.md)
- [Write your first contract](../smart-contract-development/hello-world-contract-short.md#1-clone-the-contract-repository)
- [Compilation and ABI](../smart-contract-development/hello-world-contract-short.md#2-compile-the-contract)
- [Contracts deployment](../smart-contract-development/hello-world-contract-short.md#3-deploy-the-contract)
- [Utilizing Wire Hub Block Explorer](../wire-hub/connect-to-a-rpc.md)

## Code Reference

- [wire-sysio](https://github.com/Wire-Network/wire-sysio)
- [wire-cdt](https://github.com/Wire-Network/wire-cdt)
- [wire-system-contracts](https://github.com/Wire-Network/wire-system-contracts)
