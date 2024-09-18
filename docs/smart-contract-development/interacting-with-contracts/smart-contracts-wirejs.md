---
sidebar_position: 2
id: smart-contracts-wirejs
title: Using WireJS
---


# Smart Contract Interactions with `wirejs`


[//]: # (## Overview )


## Prerequisites

Before starting this tutorial, ensure the following software is installed on your machine:

**Dependencies Used:**

| Dependency | Version | Purpose                                                                             | Installation Link                                              |
|------------|---------|-------------------------------------------------------------------------------------|----------------------------------------------------------------|
| Node.js    | 18.8.0  | Runtime environment for executing JavaScript outside the browser.                   | [Install Node.js](https://nodejs.org/)                         |
| npm        | 9.8.1   | Package manager for managing and installing JavaScript libraries.                   | Included with Node.js installation                             |
| TypeScript | 5.1.6   | Adds static types to JavaScript to enhance developer productivity and code quality. | [Install TypeScript](https://www.npmjs.com/package/typescript) |

You should also install and use [NVM](https://github.com/nvm-sh/nvm), to set a specific Node version in your project. 

Once installed, you can use it like:

```shell
nvm use 18.18.0 
```


## Project Structure

Before diving into the setup instructions, let’s establish the project structure for this tutorial. We will create a TypeScript project named `ts-dapp-wirejs`. Both this project and the `wirejs` will be set up as sibling directories within a parent folder:
```
parent-folder/
├── wirejs/
└── ts-dapp-wirejs/
```

/* TODO add reference to repo */
`cd parent-folder && git clone ....`


## Steps 

### 1. Set up WireJS locally 

At the moment `wirejs` package is not available in the public npm registry. However, we provide you with detailed instructions on setting it up locally using either [_TS project references_](https://www.typescriptlang.org/docs/handbook/project-references.html) or using `npm link`.
Implementing either method will allow for seamless integration and effective use of `wirejs` in your development environment.

#### 1.1. Create & set up `ts-dapp-wirejs`

```bash
mkdir -p ts-dapp-wirejs && cd ts-dapp-wirejs && npm init -y && npm install --save-dev typescript@5.1.6 ts-node node-fetch tsconfig-paths && mkdir -p src && touch src/index.ts && touch .gitignore tsconfig.json && echo -e "node_modules/\ndist/" >> .gitignore
```

#### 1.2. Add `tsconfig.json`

```json title="tsconfig.json"
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "CommonJS",
    "lib": ["ES2022", "DOM"],
    "allowJs": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,           
    "moduleResolution": "Node",
    "strict": false,                                    
    "paths": {
      "wirejs": ["../wirejs/src"]
    },
    "outDir": "dist"
  },
  "references": [
    {
        "path": "../wirejs"
    }
  ]
}
```

#### 1.3. Add scripts to `package.json`

Modify `scripts` in `package.json` to:

```json title="package.json"
{
  "scripts": {
    "watch": "tsc -w",
    "run": "npx ts-node -r tsconfig-paths/register src/index.ts"
  }
}
```

## 2. Write the code 

In this section, we will set up our application to interact with our local node from [Company Contract Tutorial](../company-contract.md).  

### 2.1. Initialize `ChainService()`

```ts showLineNumbers title="index.ts"
import { ChainService } from "wirejs";
import * as fetch from "node-fetch";

const privateKeys = ["<your-private-key>"];

const chainService = new ChainService({
  endpoint: "<rpc-url>",
  privateKeys: privateKeys
});
```

**Chain Service Initialization**: We instantiate ChainService with two key properties:
- `endpoint`: Replace **`<rpc-url>`** with `http://localhost:8888` for local development or testing. For production or other networks, use the appropriate RPC URL. (ex: Wire devnet - `https://dev-hyperion.gitgo.app/`)
- `privateKeys`: Replace **`<your-private-key>`** with your actual private key.(generated in [Create Development Wallet](/docs/getting-started/create-development-wallet.md#create-a-wallet))

:::tip[List your private keys with `clio`]
clio wallet private_keys --password $(cat ./my-secret-pass.txt)
::: 

Open up a terminal and run `npm watch` to run TypeScript compilation in watch mode. You should see the compiled `dist` folder.

### 2.2. Write API calls
---

Below is a breakdown of the API calls performed in the [code snippet](#code), along with the corresponding line numbers for each operation:

- **Fetch Local Blockchain Info:** Retrieves the current blockchain status. See line **26**.
- **Access Smart Contract Data:** Fetches the current state of the `employees` table from the `company` smart contract, including the number of rows and user details. See line **32**.
- **Retrieve Contract ABI:** Obtains and prints the ABI (Application Binary Interface) of the `company` smart contract, detailing its methods and structures. See line **38**.
- **Prepare Transaction:** Constructs a transaction to update the details of an employee named “Jack,” changing his name to “Jackson Smith.” See line **43**.
- **Execute Transaction:** Sends the transaction to the blockchain, ensuring it is processed within recent blocks and expires after 30 seconds if not confirmed. See line **63**.


---

#### code
```ts {26,32,38,43-60,63-66} showLineNumbers
import { ChainService } from "wirejs";
import * as fetch from "node-fetch";

const privateKeys = ["<your-private-key>"];

const chainService = new ChainService({
  endpoint: "<rpc-url>",
  privateKeys: privateKeys
});


export interface TransactionAuth {
    actor: string;
    permission: string;
  }
  
export interface PushTransactionOptions {
    account: string,
    name: string,
    authorization : TransactionAuth[],
    data: any
  }

(async () => {

    const info = await chainService.rpc.get_info();
  
    console.log("\nBlockchain Info:");
    console.log(JSON.stringify(info, null, 2)); 
  
    // Retrieve rows from employees table in our company contract
    const tableRows = await chainService.getRows({contract: "company", table: "employees"});
  
    console.log(`\nEmployees Table Info:`);
    console.log(`- Number of rows: ${tableRows.rows.length}`);
    console.log(`- User emails: ${tableRows.rows.map(a => a.email).join(", ")}`);
  
    const abi = await chainService.api.getAbi('company');
    
    console.log("\nContract ABI:");
    console.log(JSON.stringify(abi, null, 2));  // Pretty-print the ABI JSON
  
    const payload: PushTransactionOptions[] =[
      {
        account: "company",
        name: "upsertemp",
        authorization: [
          {
            actor: "jack",
            permission: "active"
          }
        ],
        data: {
          user: "jack",
          name: "Jackson Smith",
          email: "jack@example.com",
          status: "active"
        }
      }
    ];
    
    const trx = await chainService.api.transact({ actions: payload },  {
        blocksBehind: 3,      
        expireSeconds: 30 
    });
    console.log("\nTransaction Result:");
    console.log(JSON.stringify(trx, null, 2));
  
})();
```


## 3.Execute the code 


You can inspect the `employees` table on the [EOS Block Explorer](https://eosauthority.com/account/company?network=localtest&endpoint=http:%2F%2F127.0.0.1:8888&token_symbol=EOS&scope=company&table=employees&limit=10&index_position=1&key_type=i64&reverse=0&mode=contract&sub=tables) before executing the script.

![Table Before Update](/img/be-table-wirejs-pre-update.png)

Run `npm run` and you should see output in the console with the logs like:

```console
Blockchain Info:
{
  "server_version": "9c08be0b",
  "chain_id": "8a34ec7df1b8cd06ff4a8abbaa7cc50300823350cadc59ab296cb00d104d2b8f",
  "head_block_num": 699221,
  "last_irreversible_block_num": 699220,
  "last_irreversible_block_id": "000aab54316cfeedebd51913d1499646982860db601878114e26a97d68cbc72f",
  "head_block_id": "000aab55275835472e463a1aebc6a312fa7711c91c91b0ca7f5edab8896ad627",
  "head_block_time": "2024-08-19T15:54:13.500",
  "head_block_producer": "sysio",
  "virtual_block_cpu_limit": 200000000,
  "virtual_block_net_limit": 1048576000,
  "block_cpu_limit": 200000,
  "block_net_limit": 1048576,
  "server_version_string": "v2.0.13",
  "fork_db_head_block_num": 699221,
  "fork_db_head_block_id": "000aab55275835472e463a1aebc6a312fa7711c91c91b0ca7f5edab8896ad627",
  "server_full_version_string": "v2.0.13-9c08be0b7d05ac29c5a18600f8c3d21f482f896e-dirty"
}

Employees Table Info:
- Number of rows: 2
- User emails: jack@example.com, nick@example.com

....
```

Check update on [EOS Block Explorer](https://eosauthority.com/account/company?network=localtest&endpoint=http:%2F%2F127.0.0.1:8888&token_symbol=EOS&scope=company&table=employees&limit=10&index_position=1&key_type=i64&reverse=0&mode=contract&sub=tables)
![be-table-pre-update](/img/be-table-wirejs-post-update.png)

`npm link`



