# How to build & deploy the `sysio.contracts`

## Prerequisites

- Ensure Wire CDT is installed - follow [Installation guide](https://github.com/Wire-Network/wire-cdt/tree/master/#installation) to install it.

- To verify if you have Wire CDT installed and its version run the following command:

```sh
cdt-cpp -v
```

## Build

### Build contracts using the build script

- #### To build contracts alone

Run the `build.sh` script in the top directory to build all the contracts.

- ##### To build the contracts and unit tests

1. Ensure an appropriate version of Wire Sysio has been built from source and installed. Installing Wire Sysio from binaries  **IS NOT** sufficient. You can find instructions on how to do it [here](https://github.com/Wire-Network/wire-sysio#installation).
2. Run the `build.sh` script in the top directory with the `-t` flag to build all the contracts and the unit tests.

### Build contracts manually

To build the `sysio.contracts` execute the following commands.

- For Linux:

```sh
cd you_local_path_to/sysio.contracts/
rm -fr build
mkdir build
cd build
cmake ..
make -j$(nproc)
cd ..
```

## Post build

- If the build was configured to also build unit tests, the unit tests executable are placed in the _build/tests_ folder and the directory is named **unit_test**.
- The contracts (both `.wasm` and `.abi` files) are built into their corresponding _build/contracts/\<contract name\>_ folder.
- To deploy a contract, simply use the  `clio set contract [ARGS]` command, pointing to the appropriate directory for that specific contract. Check out some examples below.

## Deployment

To deploy each `sysio` contract, use the following commands, replacing the account name and source code path as needed.

### Deploy `sysio.bios`

```sh
clio set contract testerbios /path/to/sysio.contracts/build/contracts/sysio.bios/ -p testerbios
```

### Deploy `sysio.msig`

```sh
clio set contract testermsig /path/to/sysio.contracts/build/contracts/sysio.msig/ -p testermsig
```

### Deploy `sysio.system`

```sh
clio set contract testersystem /path/to/sysio.contracts/build/contracts/sysio.system/ -p testersystem
```

### Deploy `sysio.token`

```sh
clio set contract testertoken /path/to/sysio.contracts/build/contracts/sysio.token/ -p testertoken
```

### Deploy `sysio.wrap`

```sh
clio set contract testerwrap /path/to/sysio.contracts/build/contracts/sysio.wrap/ -p testerwrap
```
