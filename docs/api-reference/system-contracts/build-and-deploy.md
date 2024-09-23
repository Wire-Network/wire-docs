# How to build the sysio.contracts

## Prerequisites

Ensure an appropriate version of `sysio.cdt` is installed. Installing `sysio.cdt` from binaries is sufficient, follow the [`sysio.cdt` installation instructions steps](https://github.com/EOSIO/sysio.cdt/tree/master/#binary-releases) to install it. To verify if you have `sysio.cdt` installed and its version run the following command

```sh
sysio-cpp -v
```

### Build contracts using the build script

#### To build contracts alone

Run the `build.sh` script in the top directory to build all the contracts.

##### To build the contracts and unit tests

1. Ensure an appropriate version of `sysio` has been built from source and installed. Installing `sysio` from binaries `is not` sufficient. You can find instructions on how to do it [here](https://github.com/EOSIO/eos/blob/master/README.md) in section `Building from Sources`.
2. Run the `build.sh` script in the top directory with the `-t` flag to build all the contracts and the unit tests for these contracts.

#### Build contracts manually

To build the `sysio.contracts` execute the following commands.

On all platforms except macOS:

```sh
cd you_local_path_to/sysio.contracts/
rm -fr build
mkdir build
cd build
cmake ..
make -j$( nproc )
cd ..
```

For macOS:

```sh
cd you_local_path_to/sysio.contracts/
rm -fr build
mkdir build
cd build
cmake ..
make -j$(sysctl -n hw.ncpu)
cd ..
```

#### After build

*If the build was configured to also build unit tests, the unit tests executable is placed in the _build/tests_ folder and is named __unit_test__.
* The contracts (both `.wasm` and `.abi` files) are built into their corresponding _build/contracts/\<contract name\>_ folder.
* Finally, simply use __clio__ to _set contract_ by pointing to the previously mentioned directory for the specific contract.

## How to deploy the sysio.contracts

### To deploy sysio.bios contract execute the following command

Let's assume your account name to which you want to deploy the contract is `testerbios`

```sh
clio set contract testerbios you_local_path_to/sysio.contracts/build/contracts/sysio.bios/ -p testerbios
```

### To deploy sysio.msig contract execute the following command

Let's assume your account name to which you want to deploy the contract is `testermsig`

```sh
clio set contract testermsig you_local_path_to/sysio.contracts/build/contracts/sysio.msig/ -p testermsig
```

### To deploy sysio.system contract execute the following command

Let's assume your account name to which you want to deploy the contract is `testersystem`

```sh
clio set contract testersystem you_local_path_to/sysio.contracts/build/contracts/sysio.system/ -p testersystem
```

### To deploy sysio.token contract execute the following command

Let's assume your account name to which you want to deploy the contract is `testertoken`

```sh
clio set contract testertoken you_local_path_to/sysio.contracts/build/contracts/sysio.token/ -p testertoken
```

### To deploy sysio.wrap contract execute the following command

Let's assume your account name to which you want to deploy the contract is `testerwrap`

```sh
clio set contract testerwrap you_local_path_to/sysio.contracts/build/contracts/sysio.wrap/ -p testerwrap
```
