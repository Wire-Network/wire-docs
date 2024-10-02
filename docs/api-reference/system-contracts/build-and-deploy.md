# Build and deploy system contracts

## Build

Please refer to the build instructions outline [here](https://github.com/Wire-Network/wire-system-contracts).

### Post build check

- The contracts (both `.wasm` and `.abi` files) are built into their corresponding _build/contracts/\<contract name\>_ folder.

## Deployment

To deploy a contract, simply use the  [`clio set contract [OPTIONS]`](../tooling/clio/command-reference/set/set-contract.md) command, pointing to the appropriate directory for that specific contract.

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
