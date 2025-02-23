---
title: Wallet Specification
---

## Wallet Import Format (WIF)

Wallet Import Format is an encoding for a private EDSA key.  Wire uses the same version, checksum, and encoding scheme as the Bitcoin WIF addresses and should be compatible with existing libraries [1]. Check [Bitcoin WIF](https://en.bitcoin.it/wiki/Wallet_import_format) for more information.

**Example of a WIF Private Key:**

```
5HpHagT65TZzG1PH3CSu63k8DbpvD8s5ip4nEB3kEsreAbuatmU
```

This encoding is good for:

* Copy and Pasting private keys (ensures the entire key is copied)
* Including keys in text or user editable file formats
* Shortening the key-length

This encoding is **not suitable** for:

* Writing keys down by hand (even a single upper / lowercase mistake can cause a major problem)
* Binary or computer storage where code handles the key and data is already checked

**Considerations**:

* If a key could be written down or re-keyed, the BIP39 Mnemonic Code standard is a better option to use.
* It is a good idea to always label a WIF key using the word "Private" or "Private Key".

## Private key to WIF

1. A fake private key of all zeros is used.  This is 32 bytes long (shown here as hex).

```console
0000000000000000000000000000000000000000000000000000000000000000
```

1. Add a 0x80 byte in front.  This byte represents the Bitcoin mainnet.  SYS uses the same version byte.  When encoded the version byte helps to identify this as a private key.  Unlike Bitcoin, SYS always uses compressed public keys (derived from a private key) and therefore does not suffix the private key with a 0x01 byte.

```console
800000000000000000000000000000000000000000000000000000000000000000
```

1. Perform a binary SHA-256 hash on the versioned key.

```console
ce145d282834c009c24410812a60588c1085b63d65a7effc2e0a5e3a2e21b236
```

1. Perform a binary SHA-256 hash on result of SHA-256 hash.

```console
0565fba7ebf8143516e0222d7950c28589a34c3ee144c3876ceb01bfb0e9bb70
```

1. Take the first 4 bytes of the second SHA-256 hash, this is the checksum.

```console
0565fba7
```

1. Add the 4 checksum bytes to the versioned key from step 2.

```console
8000000000000000000000000000000000000000000000000000000000000000000565fba7
```

1. [Base58](http://npmjs.com/package/bs58) encode the binary data from step 6.

```console
5HpHagT65TZzG1PH3CSu63k8DbpvD8s5ip4nEB3kEsreAbuatmU
```

---

## WIF to private key (checksum checking)

1. Start with the Wallet Import Private Key.

```console
5HpHagT65TZzG1PH3CSu63k8DbpvD8s5ip4nEB3kEsreAbuatmU
```

1. [Base58](http://npmjs.com/package/bs58) decode the WIF string (shown as HEX here).

```console
8000000000000000000000000000000000000000000000000000000000000000000565fba7
```

1. Slice the decoded WIF into the versioned key and the checksum (last 4 bytes).

```console
800000000000000000000000000000000000000000000000000000000000000000
0565fba7
```

1. Perform a binary SHA-256 hash on the versioned key.

```console
ce145d282834c009c24410812a60588c1085b63d65a7effc2e0a5e3a2e21b236
```

1. Perform a binary SHA-256 hash on result of SHA-256 hash.

```console
0565fba7ebf8143516e0222d7950c28589a34c3ee144c3876ceb01bfb0e9bb70
```

1. Take the first 4 bytes of the second SHA-256 hash, this is the checksum.

```console
0565fba7
```

1. Make sure the checksum in steps 3 and 6 match.

2. Slice the versioned private key from step 3 into the version and private key.

```console
80
0000000000000000000000000000000000000000000000000000000000000000
```

1. If the version is 0x80 then there is no error.

---

## [Base58check](https://www.npmjs.com/package/base58check)

Base58Check is a JavaScript implementation of this algorithm and may be used to encode and decode SYS WIF private keys.

```sh
base58check = require('base58check')
wif = base58check.encode(privateKey = '00'.repeat(32), version = '80', encoding = 'hex')
assert.equal('5HpHagT65TZzG1PH3CSu63k8DbpvD8s5ip4nEB3kEsreAbuatmU', wif)
let {prefix, data} = base58check.decode(wif)
assert.equal(prefix.toString('hex'), '80')
assert.equal(data.toString('hex'), '00'.repeat(32)))
```
