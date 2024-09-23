## Overview

This guide provides instructions on how to connect to specifc Wire blockchain when using `clio`. `Clio` can connect to a specific node by using the `--url` optional argument, followed by the http address and port number.

The examples use the `--url`optional argument to send commands to the specified blockchain.

:::info[Default address:port]
| If no optional arguments are used (i.e. no `--url`), `clio` attempts to connect to a local `nodeop` running at localhost or `127.0.0.1` and default port `8888`. Use the `nodeop` command line arguments or [config.ini](../../../nodeop/usage/nodeop-configuration.md) file to specify a different address.
:::

## Before you Begin

Make sure you meet the following requirements:

* Install the currently supported version of `clio`.

:::info
| The `clio` tool and `kiod` are bundled with the Wire software. [Installing Wire core](/docs/getting-started/install-dependencies.md) will install the `clio` and `kiod` command line tools.
:::

* You have access to an Wire blockchain and the http afddress and port number of a `nodeop` instance.

## Reference

See the following reference guides for command line usage and related options:

* [clio](../../command-reference/index.md) command

## Example

1. Add the `-url` option to specify the `nodeop` instance

```shell
clio -url http://nodeop-host:8888 COMMAND
```

**Where**

* `-url http://nodeop-host:8888` = The http address and port number of the `nodeop` instance to connect to
* COMMAND = The `clio`command.

## Summary

In conclusion, by following these instructions you are able to connect to a specified `nodeop` instance.
