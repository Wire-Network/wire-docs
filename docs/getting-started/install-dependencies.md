---
sidebar_position: 3
id: install-dependencies
title: Install Dependencies
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

#### Binary Installation

If you’d prefer to install the binaries yourself, follow along with the instructions provided below.

##### Install Wire Sysio

You can download Wire Sysio software from the [Official releases page](https://github.com/Wire-Network/wire-sysio/releases) or check the [Release tags page](https://github.com/Wire-Network/wire-sysio/tags) to download a specific version of Wire Sysio.

Once you have a `*.deb` file, you can install it by running:

```sh
sudo apt install ./wire-sysio-*.deb
```

:::info Quick install
To download and install latest release, run:

```sh
wget -O wire-sysio.deb https://github.com/Wire-Network/wire-sysio/releases/download/v3.1.7/wire-sysio_3.1.7.deb && sudo dpkg -i wire-sysio.deb  
```

:::

##### Verify installation

```sh
nodeop --full-version
```

You should see a semantic version string followed by a commit hash with no errors. For example:

```console
v3.1.6-8f6875608efc9aceab9218360822bba3bc664cfb
```

:::info
Wire Sysio executables are located at `/usr/local/bin`.
:::
***

##### Install Wire CDT

You can download Wire Sysio software from the [Official releases page](https://github.com/Wire-Network/wire-cdt/releases) or check the [Release tags page](https://github.com/Wire-Network/wire-cdt/tags) to download a specific version of Wire CDT.

Once you have a `*.deb` file, you can install it by running:

```sh
sudo apt install ./wire-cdt-*.deb
```

:::info Quick install
To download and install latest release, run:

```sh
wget -O wire-cdt.deb https://github.com/Wire-Network/wire-cdt/releases/download/v3.1.0/wire-cdt_3.1.0-1_amd64.deb && sudo dpkg -i wire-cdt.deb
```

:::

##### Verify installation

```sh
which cdt-cpp

Expected Output -> /usr/bin/cdt-cpp
```

or

```sh
cdt-cpp --version

Expected Output -> cdt-cpp version 3.1.0
```

:::info
Wire CDT is located at `/usr/opt` with symlinks to each of its executable in `/usr/bin`. You can list the contents using `ls -la usr/opt/cdt/<version>/bin`.
:::

&nbsp;

***

#### Removing Wire Sysio and Wire CDT

##### Uninstall Wire Sysio

To uninstall it, run:

```sh
sudo apt remove wire-sysio
```

If uninstalling has failed or if didn't remove all core components, you can manually delete them with the following command:

```sh
sudo rm -rf /usr/local/bin/clio \
/usr/local/bin/kiod \
/usr/local/bin/nodeop \
/usr/local/bin/sysio-blocklog \
/usr/local/bin/trace_api_util \
.local/share/sysio \
~/sysio-wallet
```

:::danger
The uninstall command above will also remove the **default wallet** installed with Wire Sysio. To keep any imported keys, make sure to back them up before proceeding with deletion.
:::
***

##### Uninstall Wire CDT

To uninstall Wire CDT, run:

```bash
sudo apt remove cdt
```

&nbsp;

***

### Troubleshooting

If you are missing certain dependencies and when trying to install the binaries you are getting an error similar to:

```bash
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
Note, selecting 'wire-sysio' instead of './wire-sysio-3.1.6_amd64.deb'
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
