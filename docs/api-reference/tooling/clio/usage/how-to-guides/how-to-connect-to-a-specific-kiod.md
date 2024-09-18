## Overview
This guide provides instructions on how to connect to specifc wallet when using `clio`. `Cleos` can connect to a specific wallet by using the `--wallet-url` optional argument, followed by the http address and port number.

The example uses the `wallet-url` optional arguments to request data from the the specified `kiod` instance.

:::info[Default address:port]
| If no optional arguments are used (i.e. no `--wallet-url`), `clio` attempts to connect to a local `nodeop` or `kiod` running at localhost or `127.0.0.1` and default port `8900`. Use the `kiod` command line arguments or [config.ini](../../../kiod/usage.md#launching-kiod-manually) file to specify a different address.
:::

## Before you Begin
Make sure you meet the following requirements: 

* Install the currently supported version of `clio` and `kiod`.
  
:::info
| The `clio` tool and `kiod` are bundled with the Wire software. [Installing Wire core](/docs/getting-started/install-dependencies.md) will install the `clio` and `kiod` command line tools. 
:::
* You have access to an Wire blockchain and the http address and port number of a `nodeop` instance. 

## Reference
See the following reference guides for command line usage and related options:

* [clio](../../../clio/command-reference/index.md) command

## Example

1. Add the `--wallet-url` option to specify the `kiod` instance

```shell
clio --wallet-url http://kiod-host:8900 COMMAND
```

**where**
* `--wallet-url http://kiod-host:8900` = The http address and port number of the `kiod` instance to connect to
* COMMAND = The `clio`command.

## Summary
In conclusion, by following these instructions you are able to connect to a specified `kiod` instance. 
