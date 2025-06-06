---
sidebar_position: 2
id: smart-contracts-sdk-core
title: Using SDK Core
---

# Smart Contract Interactions with `sdk-core` JS library

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

This tutorial uses [EOS Authority Block Explorer](https://eosauthority.com/), but you can use [Wire Hub](https://hub.wire.network).

:::warning[REMINDER]
The install process has already set up the wallet for the *root* user. To interact with clio, ensure **you are on the root user**. Run `sudo su -` to switch to the root user before proceeding with the tutorial.
:::

## Steps

### 1. Create & set up `ts-dapp-sdk-wire`

```bash
mkdir -p ts-dapp-sdk-wire && cd ts-dapp-sdk-wire && npm init -y && npm install --save-dev typescript@5.1.6 ts-node node-fetch && mkdir -p src && touch src/index.ts && touch .gitignore tsconfig.json && echo -e "node_modules/\ndist/" >> .gitignore
```

#### 1.1. Add `tsconfig.json`

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
    "outDir": "dist"
  }
}
```

#### 1.2. Get your private key

You could output a key pair value stored in your wallet by running:

```sh
clio wallet private_keys --password=$(cat ~/path/to/my-wallet-pass.txt)
```

#### 1.3. Add scripts to `package.json`

Modify `scripts` in `package.json` to:

```json title="package.json"
{
  "scripts": {
    "watch": "tsc -w",
    "exec": "node dist/index.js"
  }
}
```

## 2. Write the code

In this section, we will set up our application to interact with our local node from [Company Contract Tutorial](../company-contract.md).  

### 2.1. Initialize `ApiClient()`

```ts showLineNumbers title="index.ts"
import { API, APIClient, FetchProvider, PrivateKey, SignedTransaction, Transaction, AnyAction, Action, PackedTransaction } from "@wireio/core";

const privateKey = "<your-private-key>"

const endpoint = "http://localhost:8888"


const apiClient = new APIClient(
  { provider: new FetchProvider(endpoint) }
);

```

#### API Client Initialization

- We import necessary modules like `APIClient`, `FetchProvider`, and transaction-related classes. You can see full SDK reference [here](https://wire-network.github.io/sdk-core).
- A private key is defined for signing transactions (make sure to replace it with your actual key).
- We specify the blockchain node’s API endpoint, in this case, a locally running node at `http://localhost:8888`.
- Finally, we initialize an instance of APIClient, which communicates with the blockchain via the FetchProvider, allowing us to interact with smart contracts for operations like signing and sending transactions.

Open up a terminal and run `npm watch` to run TypeScript compilation in watch mode. You should see the compiled `dist` folder.

### 2.2. Write API calls

#### code

<!-- {14,20-28,36-39,45-71,73-76} showLineNumbers -->
```ts
import { API, APIClient, FetchProvider, PrivateKey, SignedTransaction, Transaction, AnyAction, Action, PackedTransaction } from "@wireio/core";

const privateKey = "<your-private-key>"

const endpoint = "http://localhost:8888"


const apiClient = new APIClient(
  { provider: new FetchProvider(endpoint) }
);

(async () => {

        // highlight-start
        // Fetch Local Blockchain Info: Retrieves the current blockchain status
        const info = await apiClient.v1.chain.get_info()
        // highlight-end
        console.log("\nBlockchain Info:");
        console.log(JSON.stringify(info, null, 2)); 
      
  

        // Fetches the current state of the `employees` table from the `company` smart contract, including the number of rows and user details
        // highlight-start
        const tableRows: API.v1.GetTableRowsResponse = await apiClient.call({
            path: '/v1/chain/get_table_rows',
            params: {
              code: "company", 
              table: "employees",
              scope: "company",
              json: true
            },
        });
        // highlight-end
        console.log(tableRows)
      
        console.log(`\nEmployees Table Info:`);
        console.log(`- Number of rows: ${tableRows.rows.length}`);
        console.log(`- User emails: ${tableRows.rows.map(a => a.email).join(", ")}`);
      
        // highlight-start
        // Obtains and prints the ABI (Application Binary Interface) of the `company` smart contract, detailing its methods and structures
        const abiRes: API.v1.GetAbiResponse = await apiClient.call({
          path: '/v1/chain/get_abi',
          params: {account_name: untypedAction.account},
        });
        // highlight-end


        const { abi } = abiRes;
        console.log("\nContract ABI:");
        console.log(JSON.stringify(abi, null, 2)); 

        // highlight-start
        //Constructs a transaction payload to update the details of an employee named “Jack” and constructs a signature required to authorize this transaction.
        const untypedAction: AnyAction =  {
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
              name: "Jackson Smith!!",
              email: "jack@example.com",
              status: "active"
            }
          }

          const action = Action.from(untypedAction, abi);
          const header = info.getTransactionHeader()

          const transaction = Transaction.from({ ...header, actions: [action] })
          const digest = transaction.signingDigest(info.chain_id)
          const privKey = PrivateKey.from(privateKey)

          const signature = privKey.signDigest(digest).toString()
          let signedTrx = SignedTransaction.from({ ...transaction, signatures: [signature] })
          const packed =  PackedTransaction.fromSigned(SignedTransaction.from(signedTrx));
          // highlight-end


          // highlight-start
          // Sends the transaction to the blockchain.
          const trx = await apiClient.call({
            path: '/v1/chain/push_transaction',
            params: packed
          })
          // highlight-end
          console.log("\nTransaction Result:");
          console.log(JSON.stringify(trx, null, 2));
      
})();
```

## 3.Execute the code

You can inspect the `employees` table on the [EOS Block Explorer](https://eosauthority.com/account/company?network=localtest&endpoint=http:%2F%2F127.0.0.1:8888&token_symbol=EOS&scope=company&table=employees&limit=10&index_position=1&key_type=i64&reverse=0&mode=contract&sub=tables) **before** executing the script.

![Table Before Update](/img/be-table-wirejs-pre-update.png)

Run `npm run exec` and you should see output in the console with the logs like:

```console
➜  ts-app-sdk-wire: npm run exec
Blockchain Info:
{
  "server_version": "1fd21e2b",
  "chain_id": "4b6ea11bff557dbaef04100a15ee8b5864bd0daf4103b98468bdb297356951fa",
  "head_block_num": 1920,
  "last_irreversible_block_num": 1919,
  "last_irreversible_block_id": "0000077f97d283793011d0e11d270e2c3bcc0c9c2634a2620c96b55988780b0f",
  "head_block_id": "0000078034dc84be41b08732fe8e0b40639db355f70b1ebcc4246fd69e669d53",
  "head_block_time": "2025-04-17T16:47:14.500",
  "head_block_producer": "sysio",
  "virtual_block_cpu_limit": 1361215,
  "virtual_block_net_limit": 7149134,
  "block_cpu_limit": 100000,
  "block_net_limit": 1048576,
  "server_version_string": "v5.1.0",
  "fork_db_head_block_num": 1920,
  "fork_db_head_block_id": "0000078034dc84be41b08732fe8e0b40639db355f70b1ebcc4246fd69e669d53",
  "server_full_version_string": "v5.1.0-1fd21e2b206a5a97d2c41b4afefa42b25c5c15be",
  "total_cpu_weight": 500,
  "total_net_weight": 500,
  "earliest_available_block_num": 1,
  "last_irreversible_block_time": "2025-04-17T16:47:14.000"
}
{
  rows: [
    {
      user: 'jack',
      name: 'Jackson Smith',
      ...
....
```

Check update on [EOS Block Explorer](https://eosauthority.com/account/company?network=localtest&endpoint=http:%2F%2F127.0.0.1:8888&token_symbol=EOS&scope=company&table=employees&limit=10&index_position=1&key_type=i64&reverse=0&mode=contract&sub=tables).
![be-table-pre-update](/img/be-table-wirejs-post-update.png).
