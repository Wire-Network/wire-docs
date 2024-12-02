---
id: schedule
---

## Description

Retrieve the producer schedule.

## Options

- `-h,--help`                  Print this help message and exit

- `-j,--json`                  Output in JSON format

## Example

```sh
clio get schedule
```

This command simply returns the current producer schedule.

```console
active schedule version 1
    Producer      Producer Authority
    ============= ==================
    alpha         {"threshold":1,"keys":[{"key":"SYS6stkNi....","weight":1}]}
    beta          {"threshold":1,"keys":[{"key":"SYS8Z8Xj4....","weight":1}]}
    charlie       {"threshold":1,"keys":[{"key":"SYS5zB5kY....","weight":1}]}
    delta         {"threshold":1,"keys":[{"key":"SYS74fmHz....","weight":1}]}
```
