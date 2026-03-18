---
id: stop
title: stop
---

## Command

```sh
clio wallet stop [OPTIONS]
```

## Description

Stop the `kiod` wallet service. This command terminates the wallet daemon process.

## Synopsis

```sh
clio wallet stop
  [-h | --help]                       # Print this help message and exit
  [--help-all]                        # Show all help
```

## Examples

The following examples demonstrate how to use the `clio wallet stop` command:

### Stop the kiod service

```sh
clio wallet stop
```

This will terminate the `kiod` process that manages wallet operations.

## Requirements

- Install the currently supported version of `clio` and `kiod`.

:::note
The `clio` tool is bundled with the Wire software. [Installing Wire core](/docs/getting-started/install-dependencies.md) will install the `clio` and `kiod` command line tools.
:::

:::warning
Stopping `kiod` will lock all wallets and terminate any active wallet sessions. Make sure to save any important work before stopping the service.
:::
