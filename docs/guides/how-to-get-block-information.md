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

:::warning[REMINDER]
The install process has already set up the wallet for the *root* user. To interact with clio, ensure **you are on the root user**. Run `sudo su -` to switch to the root user.
:::

## Steps

Retrieve full or partial information about a block:

```sh
clio get block [--info] <block_number_or_id>
```

* `block_number_or_id` is the specified block number or block ID and `--info` is an optional parameter to retrieve a partial subset of the block information.

Some examples are provided below:

* Query a testnet to retrieve full block information about block number `110000` or block ID `0001adaf4206cf1e77a5042caeed1741f5c8a37441a287cddfb9ac19180d5b64`:

**Example Output**

```sh
clio -u https://testnet-hyperion.wire.foundation get block 110000 | jq .
```

```json
{
  "timestamp": "2025-01-17T08:11:58.500",
  "producer": "lima",
  "confirmed": 0,
  "previous": "0001adaf4206cf1e77a5042caeed1741f5c8a37441a287cddfb9ac19180d5b64",
  "transaction_mroot": "0000000000000000000000000000000000000000000000000000000000000000",
  "action_mroot": "5f728a0a980547176710addcd0aebe08029995bddf3cde7175e0fbdd687aa3e2",
  "schedule_version": 1,
  "new_producers": null,
  "producer_signature": "SIG_K1_Kc6Zcy3Qx9HjNyLuCzpD7Jp8GUQ1HHVtN2kr1dtu7BvMZ91ScMP8PS9scsYiyAHqjvgufjevJu1Xg2ELDzft9WF8qbhE7m",
  "transactions": [],
  "id": "0001adb03039cd98e6568b80bb0307c3b9aeecc219ecdf6ddfbdfeb557a19b7e",
  "block_num": 110000,
  "ref_block_prefix": 2156615398
}
```

* Query the testnet to retrieve full block information about block ID `0001adb09b790f991773d65fb535f686583f19d28c044fdc2e57cb16134600fa`:

**Example Output**

```sh
clio -u https://testnet-hyperion.wire.foundation get block 0001adaf4206cf1e77a5042caeed1741f5c8a37441a287cddfb9ac19180d5b64
```

```json
{
  "timestamp": "2025-01-17T08:11:58.000",
  "producer": "lima",
  "confirmed": 0,
  "previous": "0001adae7207d4a5ec8924d1fee3c2ff2915ae39e82f52c9c1204b9fd6639574",
  "transaction_mroot": "0000000000000000000000000000000000000000000000000000000000000000",
  "action_mroot": "54fe866491295e2f380ec5cc89c8cb29842a86ad067f3d077212b8dcb7f81b2e",
  "schedule_version": 1,
  "new_producers": null,
  "producer_signature": "SIG_K1_KjF2zB8ZbySmiaHPjYXfjQxsKNQCGH7vsNZBz4mvMfkL4pRSYDFkDiVnGeA5AhjgHeVcA3q5GXc2aXEGBxF3sFU9kkUFCq",
  "transactions": [],
  "id": "0001adaf4206cf1e77a5042caeed1741f5c8a37441a287cddfb9ac19180d5b64",
  "block_num": 109999,
  "ref_block_prefix": 738502007
}
```

* Query a local chain(omit the `-u` option) to retrieve partial block information about block number `3355`:

**Example Output**

```sh
clio get block --info 3355011
```

```json
{
  "block_num": 3355,
  "ref_block_num": 3355,
  "id": "00000d1bde672567bb080a3a777baac66cacca79f373dcc3033456202048d939",
  "timestamp": "2025-02-06T17:51:42.500",
  "producer": "sysio",
  "confirmed": 0,
  "previous": "00000d1a9bdaec35d5fa12b738735e8826f0222cc762f0f19eb337fc8ee4e167",
  "transaction_mroot": "0000000000000000000000000000000000000000000000000000000000000000",
  "action_mroot": "3da6e79fb0eeedd2cfd09d7d54a4e97f86e0fb0bf6ec62f37fc01d942bb625f7",
  "schedule_version": 0,
  "producer_signature": "SIG_K1_Jub1L3hWJvD1kEZ4KaqpUQBKmZdjRq8HnM57kZxKGPiRMoK3Xs5QJnp4xFmooZxvJpTMmK1aLenirYXvh8xEidf4zgRDwh",
  "ref_block_prefix": 973736123
}
```

The partial block information excludes the variable fields `new_producers`, `header_extensions`, `transactions`, or `block_extensions`.
