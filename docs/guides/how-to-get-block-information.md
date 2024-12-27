# Query Block Information

## Prerequisites

* Familiarize yourself with the [`clio get block`](/docs/api-reference/tooling/clio/command-reference/get/block.md) command and its parameters.
* Install the currently supported version of `clio`.

:::info[Note]
| The `clio` tool and `kiod` are bundled with the Wire software. [Installing Wire core](/docs/getting-started/install-dependencies.md) will install the `clio` and `kiod` command line tools.
:::

<!-- TODO: add reference for block lifecycle -->

* Understand what a [block](/docs/introduction/glossary.md#block) is and its role in the blockchain.
* Understand the block lifecycle

## Steps

Retrieve full or partial information about a block:

```sh
clio get block [--info] <block_number_or_id>
```

* `block_number_or_id` is the specified block number or block ID and `--info` is an optional parameter to retrieve a partial subset of the block information.

Some examples are provided below:

* Query a testnet to retrieve full block information about block number `110000` or block ID `0001adb09b790f991773d65fb535f686583f19d28c044fdc2e57cb16134600fa`:

**Example Output**

```sh
clio -u https://testnet-hyperion.wire.foundation get block 110000 | jq .
```

```json
{
  "timestamp": "2024-12-14T12:36:20.000",
  "producer": "delta",
  "confirmed": 0,
  "previous": "0001adaf50055002bedc659112e3cee37fede0cd05efcf15786c3089ebc9f851",
  "transaction_mroot": "0000000000000000000000000000000000000000000000000000000000000000",
  "action_mroot": "913e3539d85282e5eb2668a66ed236afa4193b677fa56f8de8b2da03d68ad110",
  "schedule_version": 1,
  "new_producers": null,
  "producer_signature": "SIG_K1_K4y8Kbe6dKhBgdaAe2M5pad8i6B6VNNjbZNqfp1Gpez1sLh6sp471YhMceQLJaLKDXjX9TeHzGexcyN7qBjkPv3naRTSmJ",
  "transactions": [],
  "id": "0001adb09b790f991773d65fb535f686583f19d28c044fdc2e57cb16134600fa",
  "block_num": 110000,
  "ref_block_prefix": 1607889687
}
```

* Query the testnet to retrieve full block information about block ID `0001adb09b790f991773d65fb535f686583f19d28c044fdc2e57cb16134600fa`:

**Example Output**

```sh
clio -u https://testnet-hyperion.wire.foundation get block 0001adb09b790f991773d65fb535f686583f19d28c044fdc2e57cb16134600fa
```

```json
{
  "timestamp": "2024-12-14T12:36:20.000",
  "producer": "delta",
  "confirmed": 0,
  "previous": "0001adaf50055002bedc659112e3cee37fede0cd05efcf15786c3089ebc9f851",
  "transaction_mroot": "0000000000000000000000000000000000000000000000000000000000000000",
  "action_mroot": "913e3539d85282e5eb2668a66ed236afa4193b677fa56f8de8b2da03d68ad110",
  "schedule_version": 1,
  "new_producers": null,
  "producer_signature": "SIG_K1_K4y8Kbe6dKhBgdaAe2M5pad8i6B6VNNjbZNqfp1Gpez1sLh6sp471YhMceQLJaLKDXjX9TeHzGexcyN7qBjkPv3naRTSmJ",
  "transactions": [],
  "id": "0001adb09b790f991773d65fb535f686583f19d28c044fdc2e57cb16134600fa",
  "block_num": 110000,
  "ref_block_prefix": 1607889687
}
```

* Query a local chain(omit the `-u` option) to retrieve partial block information about block number `3355011`:

**Example Output**

```sh
clio get block --info 3355011
```

```json
{
  "block_num": 3355011,
  "ref_block_num": 12675,
  "id": "003331831d6760b4c74dcd8858cb3deb9b631e3a20eaabd941a697387116f4bf",
  "timestamp": "2024-12-01T11:53:11.000",
  "producer": "delta",
  "confirmed": 0,
  "previous": "00333182991b6066f6115f943dbb2069aef270bb9be022041c39a5cd08c43843",
  "transaction_mroot": "0000000000000000000000000000000000000000000000000000000000000000",
  "action_mroot": "13304e3551940565c830c51388c0253eb00dda287e76e8187ea4629dc8a22995",
  "schedule_version": 1,
  "producer_signature": "SIG_K1_KVZ6m9PHdfMpRTaUox2UQvnKwXei6AdXKCLXGHmDUeqBuKpZFxr9PmNK1tUHDUsLi6eDWHu1BEnrcvLTD6KhBcwDbLuHfz",
  "ref_block_prefix": 2295156167
}
```

The partial block information excludes the variable fields `new_producers`, `header_extensions`, `transactions`, or `block_extensions`.
