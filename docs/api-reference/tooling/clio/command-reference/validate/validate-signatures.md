---
title: validate signatures
---

## Description

Validate signatures and recover public keys

:::info
| This command involves specifying JSON input which depends on underlying class definitions. Therefore, such JSON input is subject to change in future versions of the Wire software.
:::

## Usage

```sh
clio validate signatures [OPTIONS] transaction
```

## Positional Arguments

- `transaction` _TEXT_ - The JSON string or filename defining the signed transaction to validate

## Options

- `-c,--chain-id` _TEXT_ - The chain id that will be used in signature verification

## Example

If you need the create a signed transaction, see [this example](/docs/api-reference/tooling/clio/command-reference/push/push-transactions#create-the-signed-json-transactions).

Assuming you have a signed transaction:

```json
{
  "expiration": "2025-05-27T18:57:56",
  "ref_block_num": 25537,
  "ref_block_prefix": 2094524613,
  "max_net_usage_words": 0,
  "max_cpu_usage_ms": 0,
  "delay_sec": 0,
  "context_free_actions": [],
  "actions": [{
      "account": "sysio",
      "name": "newaccount",
      "authorization": [{
          "actor": "sysio",
          "permission": "active"
        }
      ],
      "data": "0000000000eab0c70000000050e4a24101000000010002c0ded2bc1f1305fb0faac5e6c03ee3a1924234985427b6167ca569d13df435cf0100000001000000010002c0ded2bc1f1305fb0faac5e6c03ee3a1924234985427b6167ca569d13df435cf01000000"
    }
  ],
  "transaction_extensions": [],
  "signatures": [
    "SIG_K1_K1a79tBD8rYBZjYD1BdQHqkNa5z8FeoEuTEMFG95xhXw3CVSyTZE3eomUQgZxWDwt9AFyZpVd4RK1j93nT1YFXBsxoDZmT"
  ],
  "context_free_data": []
}
```

To validate the signatures, run:

```sh
clio validate signatures --chain-id 36f1517f04abdb122eb261484d43a45f9bf6b5af6e120dcc351690d55572d33a '{"expiration":"2025-05-27T18:57:56","ref_block_num":25537,"ref_block_prefix":2094524613,"max_net_usage_words":0,"max_cpu_usage_ms":0,"delay_sec":0,"context_free_actions":[],"actions":[{"account":"sysio","name":"newaccount","authorization":[{"actor":"sysio","permission":"active"}],"data":"0000000000eab0c70000000050e4a24101000000010002c0ded2bc1f1305fb0faac5e6c03ee3a1924234985427b6167ca569d13df435cf0100000001000000010002c0ded2bc1f1305fb0faac5e6c03ee3a1924234985427b6167ca569d13df435cf01000000"}],"transaction_extensions":[],"signatures":["SIG_K1_K1a79tBD8rYBZjYD1BdQHqkNa5z8FeoEuTEMFG95xhXw3CVSyTZE3eomUQgZxWDwt9AFyZpVd4RK1j93nT1YFXBsxoDZmT"],"context_free_data":[]}'
```

or

```sh
clio -u http://localhost:8888 validate signatures '{"expiration":"2025-05-27T18:57:56","ref_block_num":25537,"ref_block_prefix":2094524613,"max_net_usage_words":0,"max_cpu_usage_ms":0,"delay_sec":0,"context_free_actions":[],"actions":[{"account":"sysio","name":"newaccount","authorization":[{"actor":"sysio","permission":"active"}],"data":"0000000000eab0c70000000050e4a24101000000010002c0ded2bc1f1305fb0faac5e6c03ee3a1924234985427b6167ca569d13df435cf0100000001000000010002c0ded2bc1f1305fb0faac5e6c03ee3a1924234985427b6167ca569d13df435cf01000000"}],"transaction_extensions":[],"signatures":["SIG_K1_K1a79tBD8rYBZjYD1BdQHqkNa5z8FeoEuTEMFG95xhXw3CVSyTZE3eomUQgZxWDwt9AFyZpVd4RK1j93nT1YFXBsxoDZmT"],"context_free_data":[]}'
```

## Output

```console
[
  "SYS7pCywBCz5zw2bc7teCVcT7MEWUr9s749qnYDNPEsBoH32vGqqN"
]
```

## See Also

- [How to submit a transaction](/docs/guides/how-to-submit-a-transaction.md)
