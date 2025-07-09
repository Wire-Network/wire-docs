---
id: schedule
title: schedule
---

## Command

```sh
clio get schedule [OPTIONS]
```

## Description

Retrieve the producer schedule.

## Synopsis

```sh
clio get schedule
  [-h, --help]            # Print this help message and exit
  [-j, --json]            # Output in JSON format
```

## Examples

### Get current producer schedule

```sh
clio get schedule
```

**Output:**

```json
{
  "active": {
    "version": 3,
    "producers": [
      {
        "producer_name": "alpha",
        "authority": [
          0,
          {
            "threshold": 1,
            "keys": [
              {
                "key": "SYS6stkNixNfrWSzduips3XaQE47XZAXGv89Gbquqsrpm5zP6ExVB",
                "weight": 1
              }
            ]
          }
        ]
      },
      ...
    ]
  }
```
