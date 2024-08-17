---
sidebar_position: 3
id: install-dependencies
title: Install Dependencies
---

## Linux Distributions

### Ubuntu

***

#### Wire Binaries

##### Install Wire Binaries

Download and install the Wire binaries using the following commands:

```bash
wget https://github.com/siliconswampio/wire-eosio/releases/download/v2.0.13/eosio_2.0.13-1_amd64.deb && sudo apt install ./eosio_2.0.13-1_amd64.deb
```

##### Uninstall Wire Binaries

To uninstall the Wire binaries:

```bash
sudo apt remove eosio
```

***

#### Wire.CDT

##### Install Wire.CDT

Download and install the Wire.CDT using the following command:

```bash
wget https://github.com/siliconswampio/wire-eosio-cdt/releases/download/v1.7.0/eosio.cdt_1.7.0-1_amd64.deb && sudo apt install ./eosio.cdt_1.7.0-1_amd64.deb
```

##### Uninstall Wire.CDT

To uninstall Wire.CDT:

```bash
sudo apt remove eosio.cdt
```

***

### Troubleshooting

If you are missing certain dependencies and when trying to install the binaries you are getting an error similar to:

```bash
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
Note, selecting 'eosio' instead of './eosio_2.0.13-1_amd64.deb'
Some packages could not be installed. This may mean that you have
requested an impossible situation or if you are using the unstable
distribution that some required packages have not yet been created
or been moved out of Incoming.
The following information may help to resolve the situation:
The following packages have unmet dependencies:
 eosio : Depends: libssl1.1 but it is not installable
         Depends: libicu60 but it is not installable
E: Unable to correct problems, you have held broken packages.
```

- Try and resolve it by looking for exact dependencies at Index of /ubuntu/pool/main/o/openssl

- Find the exact version of libssl , in this case libssl1.1

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



## Mac(Intel)

Before proceeding with the installation of Wire Binaries and Wire.CDT, you need to ensure that Homebrew is installed on your system. To check if Homebrew is already installed, open your terminal and run:

```sh
brew --version
```

If Homebrew is not installed on your machine, you can install it by running the following command:

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

##### Install Wire Binaries
```sh
brew tap eosio/eosio
brew install eosio
```

##### Install Wire.CDT

```sh
brew tap eosio/eosio.cdt
brew install eosio.cdt
```

## Verify Installation

To verify that the installation was successful, run the following command:

```bash
eosio-cpp --version
```

The output of this command should look like:

![Verify Installation](/img/video-gifs/verify-installation.gif)