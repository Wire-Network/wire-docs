---
slug: implementing-crypto-sso
title: Implementing Crypto SSO 
tags: [sso, login]
---


## WireJS Functionality Tutorial

This tutorial will guide you through using the WireJS functionality in your application. The steps include connecting the wallet, ensuring the wire identity, creating a link, and setting the necessary permissions.

## Step 1: Connect the Wallet

The first step is to connect the user's wallet using WireJS's built-in method.

```typescript
import WireJS from 'WireJS';

interface Wallet {
    ethAddress: string;
    publicKey: string;
}

async function connectWallet(): Promise<Wallet> {
    const wallet = await WireJS.connectWallet();
    console.log('Wallet connected:', wallet);
    return wallet;
}
```

### Explanation

- **connectWallet**: This function uses WireJS to connect the user's wallet. It logs the wallet details once connected.

## Step 2: Ensure Wire Identity

Next, we need to check if the wire identity exists for the given ETH address. If it doesn't exist, we create a new wire identity.

```typescript
async function ensureWireIdentity(wallet: Wallet): Promise<void> {
    const ethAddress = wallet.ethAddress;
    const publicKey = wallet.publicKey;
    
    const wireIdentity = await WireJS.checkOrCreateIdentity(publicKey, ethAddress);
    
    if (wireIdentity.exists) {
        console.log('Wire identity exists, wallet connected and logged in.');
    } else {
        console.log('Wire identity created and logged in.');
    }
}
```

### Explanation

- **ensureWireIdentity**: This function checks if the wire identity exists using the `checkOrCreateIdentity` method. If it doesn't exist, the method creates a new wire identity.

## Step 3: Create the Link

The next step involves creating a link using the public key.

```typescript
async function createLink(wallet: Wallet): Promise<void> {
    const publicKey = wallet.publicKey;
    const link = await WireJS.createLink(publicKey);
    console.log('Link created:', link);

    // Step 4: Provide authority
    const permissions = ['auth_external_permission_name'];
    await WireJS.setPermissions(link, permissions);
    console.log('Permissions set for link:', link);
}
```

### Explanation

- **createLink**: This function creates a link using the public key and sets the necessary permissions.
- **setPermissions**: This function sets the required permissions to interact with the WNS ecosystem.

## Main Function

Finally, we put all the steps together in the main function.

```typescript
async function main(): Promise<void> {
    try {
        const wallet = await connectWallet();
        await ensureWireIdentity(wallet);
        await createLink(wallet);
        console.log('All steps completed successfully.');
    } catch (error) {
        console.error('Error in the process:', error);
    }
}

// Run the main function
main();
```

### Explanation

- **main**: This function executes all the steps in sequence: connecting the wallet, ensuring the wire identity, creating the link, and setting permissions.

## Conclusion

By following these steps, you can successfully use WireJS functionality in your application. Each step is crucial to ensure the proper setup and functioning of the WireJS integration.
