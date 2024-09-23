# CDT (Contract Development Toolkit)

Contract Development Toolkit (CDT) is a C/C++ toolchain targeting WebAssembly (WASM) and a set of tools to facilitate development of smart contracts written in C/C++ that are meant to be deployed to a [Wire](https://github.com/Wire-Network/) blockchain.

In addition to being a general purpose WebAssembly toolchain, specific features and optimizations are available to support building Antelope-based smart contracts. This new toolchain is built around [Clang 9](https://github.com/Wire-Network/cdt-llvm), which means that CDT inherits the optimizations and analyses from that version of LLVM, but as the WASM target is still considered experimental, some optimizations are incomplete or not available.
