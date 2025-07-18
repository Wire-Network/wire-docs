---
title: Kiod
tags:
  - kiod
  - wallet
  - key-management
---

## Introduction

`kiod` is a key manager service daemon for storing private keys and signing digital messages. It provides a secure key storage medium for keys to be encrypted at rest in the associated wallet file. `kiod` also defines a secure enclave for signing transaction created by `clio` or a third part library.

## Installation

`kiod` is distributed as part of the [Wire software suite](https://github.com/Wire-Network/wire-sysio/blob/master/README.md). To install `kiod` just visit the [Wire software Installation](/docs/getting-started/install-dependencies.md) section.

## Usage

:::tip[Recommended Usage]
| For most users, the easiest way to use `kiod` is to have `clio` launch it automatically. Wallet files will be created in the default directory (`~/sysio-wallet`).
:::

### Basic operation

When a wallet is unlocked with the corresponding password, `clio` can request `kiod` to sign a transaction with the appropriate private keys.

:::info[Audience]
| `kiod` is intended to be used by Wire developers only.
:::

### Launching kiod manually

`kiod` can be launched manually from the terminal by running:

```sh
kiod
```

By default, `kiod` creates the folder `~/sysio-wallet` and populates it with a basic `config.ini` file.  The location of the config file can be specified on the command line using the `--config-dir` argument.  The configuration file contains the HTTP server endpoint for incoming HTTP connections and other parameters for cross-origin resource sharing.

:::info[Wallet Location]
| The location of the wallet data folder can be specified on the command line with the `--data-dir` option.
:::

### Auto-locking

By default, `kiod` is set to lock your wallet after 15 minutes of inactivity. This is configurable in the `config.ini` by setting the timeout seconds in `unlock-timeout`. Setting it to 0 will cause `kiod` to always lock your wallet.

### Stopping kiod

The most effective way to stop `kiod` is to find the kiod process and send a SIGTERM signal to it.

```sh
pidof kiod
```

```sh
kill -9 <processId>
```

### Other options

For a list of all commands known to `kiod`, run:

```sh
kiod --help
```

```console
Application Options:

Config Options for sysio::http_plugin:
  --unix-socket-path arg (=kiod.sock)  The filename (relative to data-dir) to
                                        create a unix socket for HTTP RPC; set
                                        blank to disable.
  --http-server-address arg             The local IP and port to listen for
                                        incoming http connections; leave blank
                                        to disable.
  --access-control-allow-origin arg     Specify the Access-Control-Allow-Origin
                                        to be returned on each request.
  --access-control-allow-headers arg    Specify the Access-Control-Allow-Header
                                        s to be returned on each request.
  --access-control-max-age arg          Specify the Access-Control-Max-Age to
                                        be returned on each request.
  --access-control-allow-credentials    Specify if Access-Control-Allow-Credent
                                        ials: true should be returned on each
                                        request.
  --max-body-size arg (=1048576)        The maximum body size in bytes allowed
                                        for incoming RPC requests
  --http-max-bytes-in-flight-mb arg (=500)
                                        Maximum size in megabytes http_plugin
                                        should use for processing http
                                        requests. 503 error response when
                                        exceeded.
  --verbose-http-errors                 Append the error log to HTTP responses
  --http-validate-host arg (=1)         If set to false, then any incoming
                                        "Host" header is considered valid
  --http-alias arg                      Additionaly acceptable values for the
                                        "Host" header of incoming HTTP
                                        requests, can be specified multiple
                                        times.  Includes http/s_server_address
                                        by default.
  --http-threads arg (=2)               Number of worker threads in http thread
                                        pool

Config Options for sysio::wallet_plugin:
  --wallet-dir arg (=".")               The path of the wallet files (absolute
                                        path or relative to application data
                                        dir)
  --unlock-timeout arg (=900)           Timeout for unlocked wallet in seconds
                                        (default 900 (15 minutes))). Wallets
                                        will automatically lock after specified
                                        number of seconds of inactivity.
                                        Activity is defined as any wallet
                                        command e.g. list-wallets.

Application Config Options:
  --plugin arg                          Plugin(s) to enable, may be specified
                                        multiple times

Application Command Line Options:
  -h [ --help ]                         Print this help message and exit.
  -v [ --version ]                      Print version information.
  --print-default-config                Print default configuration template
  -d [ --data-dir ] arg                 Directory containing program runtime
                                        data
  --config-dir arg                      Directory containing configuration
                                        files such as config.ini
  -c [ --config ] arg (=config.ini)     Configuration file name relative to
                                        config-dir
  -l [ --logconf ] arg (=logging.json)  Logging configuration file name/path
                                        for library users
```

## Key Concepts

### Key Storage and Encryption

`kiod` encrypts key pairs under-the-hood before storing them on a wallet file. Depending on the wallet implementation, say Secure Clave or YubiHSM, a specific cryptographic algorithm will be used. When the standard file system of a UNIX-based OS is used, `kiod` encrypts key pairs using 256-bit AES in CBC mode.

### Wallet Locking Mechanism

From a user's perspective, when a wallet is created, it remains in an `unlocked` state. Depending on the way `kiod` is launched, it may remain `unlocked` until the process is restarted. When a wallet is locked (either by timeout or process restart) the password is required to unlock it.

:::warning
It must be emphasized that `kiod` has no authentication/authorization mechanism besides locking/unlocking the wallet for storing/retrieving private keys and signing digital messages.
:::

### Service Access and Security

The way `kiod` is accessed has significant security implications:

- **Domain Socket**: When accessed via a domain socket, any UNIX user/group that has the rights to write to the socket file on the filesystem can submit transactions and receive signed transactions from kiod using any key in any unlocked wallet.
Security Warning: Proper filesystem permissions are crucial to ensure that only trusted users can access the domain socket.

- **TCP Socket on Localhost**: If bound to localhost, any local process (regardless of the owner or permissions) can perform the same actions as mentioned above. This includes potentially risky snippets of JavaScript code running in a web browser.

- **TCP Socket on LAN/WAN**: Binding kiod to a LAN/WAN address allows any remote actor who can send packets to the machine running kiod to perform these actions.

:::warning
That present a huge security risk, even if the communication is encrypted or secured via HTTPS.
:::

## Troubleshooting

### Common errors

#### **Error**: `Failed to lock access to wallet directory; is another kiod running"?`

Since `clio` may auto-launch an instance of `kiod`, it is possible to end up with multiple instances of `kiod` running. That can cause unexpected behavior or the error message above.

To fix this issue, you can terminate all running `kiod` instances and restart `kiod`. The following command will find and terminate all instances of `kiod` running on the system:

```sh
pkill kiod
```
