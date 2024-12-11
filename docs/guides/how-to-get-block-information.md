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

* Query a testnet to retrieve full block information about block number `48351112` or block ID `02e1c7888a92206573ae38d00e09366c7ba7bc54cd8b7996506f7d2a619c43ba`:

**Example Output**

```sh
clio -u https://hyperion.wire.foundation get block 48351112
```

```json
{
  "timestamp": "2024-10-23T15:42:31.500",
  "producer": "validator3",
  "confirmed": 0,
  "previous": "02e1c78734899ec03904154f0e8310d636cca88e2a8dda0d740d778b7cfcf356",
  "transaction_mroot": "0000000000000000000000000000000000000000000000000000000000000000",
  "action_mroot": "ec9948cff2cdc0311b1faf4e295398c61108800964f8cbe0d009b10eadb53f78",
  "schedule_version": 1,
  "new_producers": null,
  "producer_signature": "SIG_K1_KWXichmkKaQ7Sh47FVPjrEujhb2BNeTtwhPG5kiUx5TkgHP7aBLjkgycmpc32LaLpQNSixeMFn7YF5NYE1KckuMo5C5yWD",
  "transactions": [],
  "id": "02e1c7886987b2c61c19b1e65dc3c134f00ee8132d9ab34bc3459fadd10aa7c0",
  "block_num": 48351112,
  "ref_block_prefix": 3870365980
}
```

* Query the testnet to retrieve full block information about block ID `02e1c7886987b2c61c19b1e65dc3c134f00ee8132d9ab34bc3459fadd10aa7c0`:

**Example Output**

```sh
clio -u https://hyperion.wire.foundation get block 02e1c7886987b2c61c19b1e65dc3c134f00ee8132d9ab34bc3459fadd10aa7c0
```

```json
{
  "timestamp": "2024-10-23T15:42:31.500",
  "producer": "validator3",
  "confirmed": 0,
  "previous": "02e1c78734899ec03904154f0e8310d636cca88e2a8dda0d740d778b7cfcf356",
  "transaction_mroot": "0000000000000000000000000000000000000000000000000000000000000000",
  "action_mroot": "ec9948cff2cdc0311b1faf4e295398c61108800964f8cbe0d009b10eadb53f78",
  "schedule_version": 1,
  "new_producers": null,
  "producer_signature": "SIG_K1_KWXichmkKaQ7Sh47FVPjrEujhb2BNeTtwhPG5kiUx5TkgHP7aBLjkgycmpc32LaLpQNSixeMFn7YF5NYE1KckuMo5C5yWD",
  "transactions": [],
  "id": "02e1c7886987b2c61c19b1e65dc3c134f00ee8132d9ab34bc3459fadd10aa7c0",
  "block_num": 48351112,
  "ref_block_prefix": 3870365980
}
```

* Query the local chain to retrieve partial block information about block number `1`:

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
