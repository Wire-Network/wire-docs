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

- Ubuntu 22.04 Jammy

- Ubuntu 20.04 Focal

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
sudo wire-cli install --g --enable-roa
```

:::info
It is important to note that we are *intentially* using wire-cli to launch a full-scale Wire blockchain environment. This is a multi-node setup(blockproducer and chain-api) with deployed system contracts, resource management, including contract policies, as well as protocol features, etc. and identical to testnet configuration setup.
:::

##### Verify installation

**Wire Sysio**

```sh
nodeop --full-version
```

You should see a semantic version string followed by a commit hash with no errors. For example:

```console
v5.1.0-1fd21e2b206a5a97d2c41b4afefa42b25c5c15be
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

Expected Output -> cdt-cpp version 4.0.1
```

:::info
Wire CDT is located at `/usr/opt` with symlinks to each of its executable in `/usr/bin`. You can list the contents using `ls -la usr/opt/cdt/<version>/bin`.
:::

&nbsp;

***

#### Removing Wire Sysio and Wire CDT

##### Uninstall Wire Sysio and Wire CDT

```sh
sudo wire-cli uninstall --y 
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
info  [timestamp] nodeop producer_plugin.cpp:2293 produce_block ] Produced block b50adde5943bdde1... #44 at [timestamp] signed by sysio [trxs: 0, lib: 43, confirmed: 0]
info  [timestamp] nodeop producer_plugin.cpp:2293 produce_block ] Produced block 39b2a4fef9db084f... #45 at [timestamp] signed by sysio [trxs: 0, lib: 44, confirmed: 0]
info  [timestamp] nodeop producer_plugin.cpp:2293 produce_block ] Produced block cd23d3646d0166dc... #46 at [timestamp] signed by sysio [trxs: 0, lib: 45, confirmed: 0]
info  [timestamp] nodeop producer_plugin.cpp:2293 produce_block ] Produced block 14bd99c3c3ffd441... #47 at [timestamp] signed by sysio [trxs: 0, lib: 46, confirmed: 0]
info  [timestamp] nodeop producer_plugin.cpp:2293 produce_block ] Produced block 2e5fb9d0f2dce119... #48 at [timestamp] signed by sysio [trxs: 0, lib: 47, confirmed: 0]
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
          "server_version": "1fd21e2b",
          "chain_id": "4b6ea11bff557dbaef04100a15ee8b5864bd0daf4103b98468bdb297356951fa",
          "head_block_num": 1920,
          "last_irreversible_block_num": 1919,
          "last_irreversible_block_id": "0000077f97d283793011d0e11d270e2c3bcc0c9c2634a2620c96b55988780b0f",
          "head_block_id": "0000078034dc84be41b08732fe8e0b40639db355f70b1ebcc4246fd69e669d53",
          "head_block_time": "2025-04-17T16:47:14.500",
          "head_block_producer": "sysio",
          "virtual_block_cpu_limit": 1361215,
          "virtual_block_net_limit": 7149134,
          "block_cpu_limit": 100000,
          "block_net_limit": 1048576,
          "server_version_string": "v5.1.0",
          "fork_db_head_block_num": 1920,
          "fork_db_head_block_id": "0000078034dc84be41b08732fe8e0b40639db355f70b1ebcc4246fd69e669d53",
          "server_full_version_string": "v5.1.0-1fd21e2b206a5a97d2c41b4afefa42b25c5c15be",
          "total_cpu_weight": 500,
          "total_net_weight": 500,
          "earliest_available_block_num": 1,
          "last_irreversible_block_time": "2025-04-17T16:47:14.000"
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
Note, selecting 'wire-sysio' instead of './wire-sysio-5.1.0_amd64.deb'
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
