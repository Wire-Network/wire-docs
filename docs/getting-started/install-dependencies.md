---
sidebar_position: 3
id: install-dependencies
title: Install Dependencies & Start a Local Node
description: Install Wire Sysio and Wire CDT, and start a local node.
tags:
  - installation 
  - dev setup
  - wire-sysio
  - wire-cdt
  - nodeop
  - clio
  - kiod
---

## Linux Distributions

### Ubuntu

Currently supported versions:

- Ubuntu 24.04 Noble

***

### Install `wire-cli`

`wire-cli` is a TypeScript-based command-line tool for spinning up a local node. It automates tasks such as installing Wire Sysio core and CDT, deploying system contracts, and starting blockproducer and chain-api nodes.

To install the Wire CLI, run the following command:

```sh
npm i -g @wireio/wire-cli
```

#### Install Dependencies & Start a Local Node

To start a local node, run:

```sh
sudo wire-cli install -g
```

:::info
It is important to note that we are *intentially* using wire-cli to launch a full-scale Wire blockchain environment. This is a multi-node setup(**blockproducer**, **bp-relay**, and **chain-api**) with deployed system contracts, resource management, including contract policies, all very similar to a testnet configuration setup.
:::

##### Verify installation

**Wire Sysio**

```sh
nodeop --full-version
```

You should see a semantic version string followed by a commit hash with no errors. For example:

```console
v1.0.0-dev-345c51c7b89a6821d4f351f3bdbd0838d8314ea2
```

:::info
Wire Sysio executables are located at `/usr/local/bin`.
:::
***

**Wire CDT**

```sh
which cdt-cpp

Expected Output -> /usr/bin/cdt-cpp
```

or

```sh
cdt-cpp --version

Expected Output -> cdt-cpp version 4.1.1
```

:::info
Wire CDT is located at `/usr/opt` with symlinks to each of its executable in `/usr/bin`. You can list the contents using `ls -la usr/opt/cdt/<version>/bin`.
:::

&nbsp;

***

#### Removing Wire Sysio and Wire CDT

##### Uninstall Wire Sysio and Wire CDT

```sh
sudo wire-cli uninstall -y 
```

:::danger
The uninstall command above will also remove the **default wallet** installed with Wire Sysio. To keep any imported keys, make sure to back them up before proceeding with deletion.
:::
***

### Validating `nodeop`

Check that `nodeop` is producing blocks. Run the following command:

```bash
tail -f /opt/wire-network/blockproducer/data/nodeop.log
```

You should see some output in the console similar to:

```bash
info  [timestamp] nodeop          controller.cpp:2375  log_applied          ] Produced block 14e5cb41b06b7020... #4246 @ [timestamp] signed by sysio [trxs: 0, lib: 4244, net: 0, cpu: 100 us, elapsed: 82 us, producing time: 462421 us]
info  [timestamp] nodeop          controller.cpp:2375  log_applied          ] Produced block c9bb3eb9c65b6971... #4247 @ [timestamp] signed by sysio [trxs: 0, lib: 4245, net: 0, cpu: 100 us, elapsed: 90 us, producing time: 462358 us]
info  [timestamp] nodeop          controller.cpp:2375  log_applied          ] Produced block a505dcb166388262... #4248 @ 2026-03-16T15:56:46.500 signed by sysio [trxs: 0, lib: 4246, net: 0, cpu: 100 us, elapsed: 81 us, producing time: 462054 us]
```

Verify the `[timestamp]` is a recent one and that you aren't looking at a stale logs.

To exit logs: <kbd>Ctrl</kbd> + <kbd>C</kbd>

### Check the Wallet

Open the shell and run the `sudo clio wallet list` command to list available wallets. We need to validate the installation and see that the command line client `clio` is working as intended.

```bash
Wallets:
[
  "default"
]
```

:::warning[IMPORTANT]
Wallets can exist on multiple Linux users. Since we ran the script as `sudo`, the wallet we use is on `sudo`.
:::

From this point forward, you'll be executing commands from your local system.

### Check `nodeop` endpoints

This step ensures that the RPC API is functioning properly. You can choose one of the following methods:

#### 3.1. Using `clio`

```bash
clio get info 
```

#### 3.2. HTTP GET request to `/get_info`

Use your browser to access the `get_info` endpoint from the `chain_api_plugin`. Simply click [http://localhost:8888/v1/chain/get_info](http://localhost:8888/v1/chain/get_info).

import BrowserWindow from '@site/src/components/BrowserWindow';

<BrowserWindow url="http://localhost:8888/v1/chain/get_info">
     ```json
       {
        "server_version": "345c51c7",
        "chain_id": "fc14abfad38fd1977d5096e4bd12bfe5dd1154e971743a5a222040951f7a7306",
        "head_block_num": 777,
        "last_irreversible_block_num": 775,
        "last_irreversible_block_id": "000003072d65064754524a9afc1644747158b6168b69f5333e157aa9584d9ed9",
        "head_block_id": "00000309975f63927f8a268a6c4f90dc0dcf1fcd6aa973245e68480e910793b1",
        "head_block_time": "2026-03-18T17:24:59.500",
        "head_block_producer": "sysio",
        "virtual_block_cpu_limit": 434132,
        "virtual_block_net_limit": 2278612,
        "block_cpu_limit": 200000,
        "block_net_limit": 1048576,
        "server_version_string": "v1.0.0-dev",
        "fork_db_head_block_num": 777,
        "fork_db_head_block_id": "00000309975f63927f8a268a6c4f90dc0dcf1fcd6aa973245e68480e910793b1",
        "server_full_version_string": "v1.0.0-dev-345c51c7b89a6821d4f351f3bdbd0838d8314ea2",
        "total_cpu_weight": 500,
        "total_net_weight": 500,
        "earliest_available_block_num": 1,
        "last_irreversible_block_time": "2026-03-18T17:24:58.500"
      }
   ```
 </BrowserWindow>

Alternatively, check the endpoint directly from your terminal using the command:

```sh
curl http://localhost:8888/v1/chain/get_info | jq .
```

---

Third-party tools used in the steps above:

- [JSON Formatter Chrome Extension](https://chromewebstore.google.com/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=en)
- [curl](https://curl.se/)
- [jq](https://jqlang.github.io/jq/download/)

### Troubleshooting

When wire-cli is trying to install the binaries and you are getting an error similar to:

```bash
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
Note, selecting 'wire-sysio' instead of './wire-sysio-6.0.0-dev_amd64.deb'
Some packages could not be installed. This may mean that you have
requested an impossible situation or if you are using the unstable
distribution that some required packages have not yet been created
or been moved out of Incoming.
The following information may help to resolve the situation:
The following packages have unmet dependencies:
 sysio : Depends: libssl1.1 but it is not installable
         Depends: libicu60 but it is not installable
E: Unable to correct problems, you have held broken packages.
```

- Try and resolve it by looking for exact dependencies at Index of /ubuntu/pool/main/o/openssl

- Find the exact version of `libssl` , in this case `libssl1.1`

- Download it:

``` bash
wget http://archive.ubuntu.com/ubuntu/pool/main/o/openssl/libssl1.1_1.1.1-1ubuntu2.1\~18.04.amd64.deb
```

- Install the downloaded package:

```bash
sudo dpkg -i libssl1.1_1.1.1-1ubuntu2.1~18.04.amd64.deb
```

Repeat the same for any other packages that appear in the error message.

```bash
wget http://mirrors.edge.kernel.org/ubuntu/pool/main/i/icu/libicu60_60.2-3ubuntu3.1_amd64.deb
sudo dpkg -i libicu60_60.2-3ubuntu3.2_amd64.deb
```

After successfully installing all missing packages, attempt to install the binaries again.
