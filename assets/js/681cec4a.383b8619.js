"use strict";(self.webpackChunkwire_docs=self.webpackChunkwire_docs||[]).push([[7112],{12320:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var i=t(74848),s=t(28453);const c={sidebar_position:2,id:"smart-contracts-wirejs",title:"Using SDK Core"},r="Smart Contract Interactions with sdk-core JS library",o={id:"smart-contract-development/interacting-with-contracts/smart-contracts-wirejs",title:"Using SDK Core",description:"Prerequisites",source:"@site/docs/smart-contract-development/interacting-with-contracts/smart-contracts-wirejs.md",sourceDirName:"smart-contract-development/interacting-with-contracts",slug:"/smart-contract-development/interacting-with-contracts/smart-contracts-wirejs",permalink:"/docs/smart-contract-development/interacting-with-contracts/smart-contracts-wirejs",draft:!1,unlisted:!1,editUrl:"https://github.com/Wire-Network/wire-docs/edit/master/docs/smart-contract-development/interacting-with-contracts/smart-contracts-wirejs.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,id:"smart-contracts-wirejs",title:"Using SDK Core"},sidebar:"contentSidebar",previous:{title:"Using clio",permalink:"/docs/smart-contract-development/interacting-with-contracts/smart-contracts-clio"}},a={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Create &amp; set up <code>ts-dapp-sdk-wire</code>",id:"1-create--set-up-ts-dapp-sdk-wire",level:3},{value:"1.1. Add <code>tsconfig.json</code>",id:"11-add-tsconfigjson",level:4},{value:"1.2. Get your private key",id:"12-get-your-private-key",level:4},{value:"1.3. Add scripts to <code>package.json</code>",id:"13-add-scripts-to-packagejson",level:4},{value:"2. Write the code",id:"2-write-the-code",level:2},{value:"2.1. Initialize <code>ApiClient()</code>",id:"21-initialize-apiclient",level:3},{value:"API Client Initialization",id:"api-client-initialization",level:4},{value:"2.2. Write API calls",id:"22-write-api-calls",level:3},{value:"code",id:"code",level:4},{value:"3.Execute the code",id:"3execute-the-code",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsxs)(n.h1,{id:"smart-contract-interactions-with-sdk-core-js-library",children:["Smart Contract Interactions with ",(0,i.jsx)(n.code,{children:"sdk-core"})," JS library"]})}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(n.p,{children:"Before starting this tutorial, ensure the following software is installed on your machine:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Dependencies Used:"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Dependency"}),(0,i.jsx)(n.th,{children:"Version"}),(0,i.jsx)(n.th,{children:"Purpose"}),(0,i.jsx)(n.th,{children:"Installation Link"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Node.js"}),(0,i.jsx)(n.td,{children:"18.8.0"}),(0,i.jsx)(n.td,{children:"Runtime environment for executing JavaScript outside the browser."}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://nodejs.org/",children:"Install Node.js"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"npm"}),(0,i.jsx)(n.td,{children:"9.8.1"}),(0,i.jsx)(n.td,{children:"Package manager for managing and installing JavaScript libraries."}),(0,i.jsx)(n.td,{children:"Included with Node.js installation"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"TypeScript"}),(0,i.jsx)(n.td,{children:"5.1.6"}),(0,i.jsx)(n.td,{children:"Adds static types to JavaScript to enhance developer productivity and code quality."}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://www.npmjs.com/package/typescript",children:"Install TypeScript"})})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["You should also install and use ",(0,i.jsx)(n.a,{href:"https://github.com/nvm-sh/nvm",children:"NVM"}),", to set a specific Node version in your project."]}),"\n",(0,i.jsx)(n.p,{children:"Once installed, you can use it like:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"nvm use 18.18.0 \n"})}),"\n",(0,i.jsx)(n.h2,{id:"steps",children:"Steps"}),"\n",(0,i.jsxs)(n.h3,{id:"1-create--set-up-ts-dapp-sdk-wire",children:["1. Create & set up ",(0,i.jsx)(n.code,{children:"ts-dapp-sdk-wire"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'mkdir -p ts-dapp-sdk-wire && cd ts-dapp-sdk-wire && npm init -y && npm install --save-dev typescript@5.1.6 ts-node node-fetch && mkdir -p src && touch src/index.ts && touch .gitignore tsconfig.json && echo -e "node_modules/\\ndist/" >> .gitignore\n'})}),"\n",(0,i.jsxs)(n.h4,{id:"11-add-tsconfigjson",children:["1.1. Add ",(0,i.jsx)(n.code,{children:"tsconfig.json"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="tsconfig.json"',children:'{\n  "compilerOptions": {\n    "target": "ES2022",\n    "module": "CommonJS",\n    "lib": ["ES2022", "DOM"],\n    "allowJs": true,\n    "esModuleInterop": true,\n    "forceConsistentCasingInFileNames": true,           \n    "moduleResolution": "Node",\n    "strict": false,                                    \n    "outDir": "dist"\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h4,{id:"12-get-your-private-key",children:"1.2. Get your private key"}),"\n",(0,i.jsx)(n.p,{children:"Note your private key from the key pair generated earlier.\nYou could output key pair  value by running:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"clio wallet private_keys --password=$(cat ~/my-secret-pass.txt)\n"})}),"\n",(0,i.jsxs)(n.h4,{id:"13-add-scripts-to-packagejson",children:["1.3. Add scripts to ",(0,i.jsx)(n.code,{children:"package.json"})]}),"\n",(0,i.jsxs)(n.p,{children:["Modify ",(0,i.jsx)(n.code,{children:"scripts"})," in ",(0,i.jsx)(n.code,{children:"package.json"})," to:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="package.json"',children:'{\n  "scripts": {\n    "watch": "tsc -w",\n    "exec": "node dist/index.js"\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"2-write-the-code",children:"2. Write the code"}),"\n",(0,i.jsxs)(n.p,{children:["In this section, we will set up our application to interact with our local node from ",(0,i.jsx)(n.a,{href:"/docs/smart-contract-development/company-contract",children:"Company Contract Tutorial"}),"."]}),"\n",(0,i.jsxs)(n.h3,{id:"21-initialize-apiclient",children:["2.1. Initialize ",(0,i.jsx)(n.code,{children:"ApiClient()"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:'showLineNumbers title="index.ts"',children:'import { API, APIClient, FetchProvider, PrivateKey, SignedTransaction, Transaction, AnyAction, Action, PackedTransaction } from "@wireio/core";\n\nconst privateKey = "<your-private-key>"\n\nconst endpoint = "http://localhost:8888"\n\n\nconst apiClient = new APIClient(\n  { provider: new FetchProvider(endpoint) }\n);\n\n'})}),"\n",(0,i.jsx)(n.h4,{id:"api-client-initialization",children:"API Client Initialization"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["We import necessary modules like ",(0,i.jsx)(n.code,{children:"APIClient"}),", ",(0,i.jsx)(n.code,{children:"FetchProvider"}),", and transaction-related classes. You can see full SDK reference ",(0,i.jsx)(n.a,{href:"https://wire-network.github.io/sdk-core",children:"here"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"A private key is defined for signing transactions (make sure to replace it with your actual key)."}),"\n",(0,i.jsxs)(n.li,{children:["We specify the blockchain node\u2019s API endpoint, in this case, a locally running node at ",(0,i.jsx)(n.code,{children:"http://localhost:8888"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Finally, we initialize an instance of APIClient, which communicates with the blockchain via the FetchProvider, allowing us to interact with smart contracts for operations like signing and sending transactions."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Open up a terminal and run ",(0,i.jsx)(n.code,{children:"npm watch"})," to run TypeScript compilation in watch mode. You should see the compiled ",(0,i.jsx)(n.code,{children:"dist"})," folder."]}),"\n",(0,i.jsx)(n.h3,{id:"22-write-api-calls",children:"2.2. Write API calls"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.p,{children:["Below is a breakdown of the API calls performed in the ",(0,i.jsx)(n.a,{href:"#code",children:"code snippet"}),", along with the corresponding line numbers for each operation:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Fetch Local Blockchain Info:"})," Retrieves the current blockchain status. See line ",(0,i.jsx)(n.strong,{children:"14"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Access Smart Contract Data:"})," Fetches the current state of the ",(0,i.jsx)(n.code,{children:"employees"})," table from the ",(0,i.jsx)(n.code,{children:"company"})," smart contract, including the number of rows and user details. See line ",(0,i.jsx)(n.strong,{children:"20-28"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Retrieve Contract ABI:"})," Obtains and prints the ABI (Application Binary Interface) of the ",(0,i.jsx)(n.code,{children:"company"})," smart contract, detailing its methods and structures. See line ",(0,i.jsx)(n.strong,{children:"36-39"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Prepare Transaction:"})," Constructs a transaction payload to update the details of an employee named \u201cJack\u201d and constructs a signature required to authorize this transaction. See line ",(0,i.jsx)(n.strong,{children:"45-71"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Execute Transaction:"})," Sends the transaction to the blockchain. See line ",(0,i.jsx)(n.strong,{children:"73-76"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h4,{id:"code",children:"code"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:"{14,20-28,36-39,45-71,73-76} showLineNumbers",children:'import { API, APIClient, FetchProvider, PrivateKey, SignedTransaction, Transaction, AnyAction, Action, PackedTransaction } from "@wireio/core";\n\nconst privateKey = "<your-private-key>"\n\nconst endpoint = "http://localhost:8888"\n\n\nconst apiClient = new APIClient(\n  { provider: new FetchProvider(endpoint) }\n);\n\n(async () => {\n\n    const info = await apiClient.v1.chain.get_info()\n  \n    console.log("\\nBlockchain Info:");\n    console.log(JSON.stringify(info, null, 2)); \n  \n    // Retrieve rows from employees table in our company contract\n    const tableRows: API.v1.GetTableRowsResponse = await apiClient.call({\n        path: \'/v1/chain/get_table_rows\',\n        params: {\n          code: "company", \n          table: "employees",\n          scope: "company",\n          json: true\n        },\n    });\n\n    console.log(tableRows)\n  \n    console.log(`\\nEmployees Table Info:`);\n    console.log(`- Number of rows: ${tableRows.rows.length}`);\n    console.log(`- User emails: ${tableRows.rows.map(a => a.email).join(", ")}`);\n  \n    const abiRes: API.v1.GetAbiResponse = await apiClient.call({\n      path: \'/v1/chain/get_abi\',\n      params: {account_name: untypedAction.account},\n    });\n\n    const { abi } = abiRes;\n    console.log("\\nContract ABI:");\n    console.log(JSON.stringify(abi, null, 2)); \n\n    const untypedAction: AnyAction =  {\n        account: "company",\n        name: "upsertemp",\n        authorization: [\n          {\n            actor: "jack",\n            permission: "active"\n          }\n        ],\n        data: {\n          user: "jack",\n          name: "Jackson Smith!!",\n          email: "jack@example.com",\n          status: "active"\n        }\n      }\n\n      const action = Action.from(untypedAction, abi);\n      const header = info.getTransactionHeader()\n\n      const transaction = Transaction.from({ ...header, actions: [action] })\n      const digest = transaction.signingDigest(info.chain_id)\n      const privKey = PrivateKey.from(privateKey)\n\n      const signature = privKey.signDigest(digest).toString()\n      let signedTrx = SignedTransaction.from({ ...transaction, signatures: [signature] })\n      const packed =  PackedTransaction.fromSigned(SignedTransaction.from(signedTrx));\n\n      const trx = await apiClient.call({\n        path: \'/v1/chain/push_transaction\',\n        params: packed\n      })\n      console.log("\\nTransaction Result:");\n      console.log(JSON.stringify(trx, null, 2));\n  \n})();\n'})}),"\n",(0,i.jsx)(n.h2,{id:"3execute-the-code",children:"3.Execute the code"}),"\n",(0,i.jsxs)(n.p,{children:["You can inspect the ",(0,i.jsx)(n.code,{children:"employees"})," table on the ",(0,i.jsx)(n.a,{href:"https://eosauthority.com/account/company?network=localtest&endpoint=http:%2F%2F127.0.0.1:8888&token_symbol=EOS&scope=company&table=employees&limit=10&index_position=1&key_type=i64&reverse=0&mode=contract&sub=tables",children:"EOS Block Explorer"})," ",(0,i.jsx)(n.strong,{children:"before"})," executing the script."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Table Before Update",src:t(75114).A+"",width:"1337",height:"594"})}),"\n",(0,i.jsxs)(n.p,{children:["Run ",(0,i.jsx)(n.code,{children:"npm run exec"})," and you should see output in the console with the logs like:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:'\u279c  ts-app-sdk-wire npm run\nBlockchain Info:\n{\n  "server_version": "c83d8e08",\n  "chain_id": "8a34ec7df1b8cd06ff4a8abbaa7cc50300823350cadc59ab296cb00d104d2b8f",\n  "head_block_num": 538955,\n  "last_irreversible_block_num": 538954,\n  "last_irreversible_block_id": "0008394a52821c9552c17f8620576d53fe417e29068aee6ba6fe91b31591d052",\n  "head_block_id": "0008394bd3b0ae2b818eed6a626ef66c3750a2a7cfff48e61f1bc6a8d5203076",\n  "head_block_time": "2024-09-30T13:09:22.000",\n  "head_block_producer": "sysio",\n  "virtual_block_cpu_limit": 200000000,\n  "virtual_block_net_limit": 1048576000,\n  "block_cpu_limit": 200000,\n  "block_net_limit": 1048576,\n  "server_version_string": "v3.1.6",\n  "fork_db_head_block_num": 538955,\n  "fork_db_head_block_id": "0008394bd3b0ae2b818eed6a626ef66c3750a2a7cfff48e61f1bc6a8d5203076"\n}\n{\n  rows: [\n    {\n      user: \'jack\',\n      name: \'Jackson Smith\',\n      ...\n....\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Check update on ",(0,i.jsx)(n.a,{href:"https://eosauthority.com/account/company?network=localtest&endpoint=http:%2F%2F127.0.0.1:8888&token_symbol=EOS&scope=company&table=employees&limit=10&index_position=1&key_type=i64&reverse=0&mode=contract&sub=tables",children:"EOS Block Explorer"}),"\n",(0,i.jsx)(n.img,{alt:"be-table-pre-update",src:t(20045).A+"",width:"1428",height:"627"})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},20045:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/be-table-wirejs-post-update-8cb0545f26423093ee8c04d3528c05b8.png"},75114:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/be-table-wirejs-pre-update-c62ff4b9228908586bc848d97f101444.png"},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var i=t(96540);const s={},c=i.createContext(s);function r(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);