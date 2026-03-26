---
title: system listproducers
tags:
  - clio
  - system
  - producers
---

## Command

```sh
clio system listproducers [OPTIONS]
```

## Description

List producers

## Synopsis

```sh
clio system listproducers
  [-h | --help]                      # Print this help message and exit
  [--help-all]                       # Show all help
  [-j | --json]                      # Output in JSON format
  [[-l | --limit] <rows>]            # The maximum number of rows to return
  [[-L | --lower] <key>]             # Lower bound value of key, defaults to first
  [--time-limit <ms>]                # Limit time of execution in milliseconds
```

## Examples

The following examples demonstrate how to use the `clio system listproducers` command:

### List all producers

```sh
clio system listproducers
```

### List producers with limit

```sh
clio system listproducers -l 10
```

### List producers in JSON format

```sh
clio system listproducers -j
```
