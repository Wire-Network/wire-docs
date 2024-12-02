---
id: info
---

## Description

Gets current blockchain information.

## Position Parameters

This command does not accept any parameters.

## Options

- `-h, --help`                   Print this help message and exit

## Example

```sh
clio get info
```

This command simply returns the current blockchain state information.

```json
{
  "server_version": "702827a4",
  "chain_id": "d06acae4e2ae21346cd7cffb820cd06eb1ad2b9f37303b3c2a4d93c2841cb31a",
  "head_block_num": 3514487,
  "last_irreversible_block_num": 3514444,
  "last_irreversible_block_id": "0035a04cc34011422c37cbd8187203241d535bc3171659a9f36278e76affe6f5",
  "head_block_id": "0035a077140d1c7cf28191f45436da57a18f64f6008395062ffa2cdf5f16ea9d",
  "head_block_time": "2024-12-02T14:17:03.000",
  "head_block_producer": "charlie",
  "virtual_block_cpu_limit": 100000000,
  "virtual_block_net_limit": 1048576000,
  "block_cpu_limit": 99900,
  "block_net_limit": 1048576,
  "server_version_string": "v3.1.7",
  "fork_db_head_block_num": 3514487,
  "fork_db_head_block_id": "0035a077140d1c7cf28191f45436da57a18f64f6008395062ffa2cdf5f16ea9d",
  "server_full_version_string": "v3.1.7-702827a43b514e5caa0caf1343c0483b7a608653",
  "total_cpu_weight": "10000002000000",
  "total_net_weight": "5000002000000",
  "earliest_available_block_num": 457125,
  "last_irreversible_block_time": "2024-12-02T14:16:35.500"
}
```
