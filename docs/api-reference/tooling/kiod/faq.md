---
title: FAQ
---

### How does `kiod` store key pairs

`kiod` encrypts key pairs under-the-hood before storing them on a wallet file. Depending on the wallet implementation, say Secure Clave or YubiHSM, a specific cryptographic algorithm will be used. When the standard file system of a UNIX-based OS is used, `kiod` encrypts key pairs using 256-bit AES in CBC mode.

### How does `kiod` locking/unlocking mechanism works?

From a user's perspective, when a wallet is created, it remains in an `unlocked` state. Depending on the way `kiod` is launched, it may remain `unlocked` until the process is restarted. When a wallet is locked (either by timeout or process restart) the password is required to unlock it.

:::warning
It must be emphasized that `kiod` has no authentication/authorization mechanism besides locking/unlocking the wallet for storing/retrieving private keys and signing digital messages.
:::

### How is the `kiod` service accessed?

<!-- When a domain socket is used to access `kiod`, any UNIX user/group that has access rights to write to the socket file on the filesystem can submit transactions and receive signed transactions from `kiod` using any key in any unlocked wallet.

In the case of a TCP socket bound to localhost, any local process (regardless of owner or permission) can do the same things mentioned above. That includes a snippet of JavaScript code in a web page running in a local browser (though some browsers may have some security mitigations for this). -->

<!-- In the case of a TCP socket bound to a LAN/WAN address, any remote actor that can send packets to a machine running `kiod` may do the same.  -->
- **Domain Socket**: When accessed via a domain socket, any UNIX user/group that has the rights to write to the socket file on the filesystem can submit transactions and receive signed transactions from kiod using any key in any unlocked wallet.
Security Warning: Proper filesystem permissions are crucial to ensure that only trusted users can access the domain socket.
- **TCP Socket on Localhost**: If bound to localhost, any local process (regardless of the owner or permissions) can perform the same actions as mentioned above. This includes potentially risky snippets of JavaScript code running in a web browser.
- **TCP Socket on LAN/WAN**: Binding kiod to a LAN/WAN address allows any remote actor who can send packets to the machine running kiod to perform these actions.
:::warning
That present a huge security risk, even if the communication is encrypted or secured via HTTPS. 
:::
