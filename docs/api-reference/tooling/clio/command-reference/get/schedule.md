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
