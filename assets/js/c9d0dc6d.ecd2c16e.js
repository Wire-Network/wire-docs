"use strict";(self.webpackChunkwire_docs=self.webpackChunkwire_docs||[]).push([[1262],{31734:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var i=t(74848),o=t(28453);const a={id:"transaction"},c=void 0,r={id:"api-reference/tooling/clio/command-reference/get/transaction",title:"transaction",description:"Description",source:"@site/docs/api-reference/tooling/clio/command-reference/get/transaction.md",sourceDirName:"api-reference/tooling/clio/command-reference/get",slug:"/api-reference/tooling/clio/command-reference/get/transaction",permalink:"/docs/api-reference/tooling/clio/command-reference/get/transaction",draft:!1,unlisted:!1,editUrl:"https://github.com/Wire-Network/wire-docs/edit/master/docs/api-reference/tooling/clio/command-reference/get/transaction.md",tags:[],version:"current",frontMatter:{id:"transaction"},sidebar:"apiReferenceSidebar",previous:{title:"transaction_id",permalink:"/docs/api-reference/tooling/clio/command-reference/get/transaction-id"},next:{title:"multisig",permalink:"/docs/api-reference/tooling/clio/command-reference/multisig/"}},s={},d=[{value:"Description",id:"description",level:2},{value:"Positionals",id:"positionals",level:2},{value:"Options",id:"options",level:2},{value:"Example",id:"example",level:2}];function l(e){const n={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Retrieves a transaction from the blockchain."}),"\n",(0,i.jsx)(n.h2,{id:"positionals",children:"Positionals"}),"\n",(0,i.jsxs)(n.p,{children:["`id`` ",(0,i.jsx)(n.em,{children:"TEXT"})," - ID of the transaction to retrieve"]}),"\n",(0,i.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:" -b,--block-hint"})," UINT        the block number this transaction may be in"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Command"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"clio get transaction\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Output"})}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"clio get transaction eb4b94b72718a369af09eb2e7885b3f494dd1d8a20278a6634611d5edd76b703\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "transaction_id": "eb4b94b72718a369af09eb2e7885b3f494dd1d8a20278a6634611d5edd76b703",\n  "processed": {\n    "refBlockNum": 2206,\n    "refBlockPrefix": 221394282,\n    "expiration": "2017-09-05T08:03:58",\n    "scope": [\n      "inita",\n      "tester"\n    ],\n    "signatures": [\n      "1f22e64240e1e479eee6ccbbd79a29f1a6eb6020384b4cca1a958e7c708d3e562009ae6e60afac96f9a3b89d729a50cd5a7b5a7a647540ba1678831bf970e83312"\n    ],\n    "messages": [{\n        "code": "eos",\n        "type": "transfer",\n        "authorization": [{\n            "account": "inita",\n            "permission": "active"\n          }\n        ],\n        "data": {\n          "from": "inita",\n          "to": "tester",\n          "amount": 1000,\n          "memo": ""\n        },\n        "hex_data": "000000008040934b00000000c84267a1e80300000000000000"\n      }\n    ],\n    "output": [{\n        "notify": [{\n            "name": "tester",\n            "output": {\n              "notify": [],\n              "sync_transactions": [],\n              "async_transactions": []\n            }\n          },{\n            "name": "inita",\n            "output": {\n              "notify": [],\n              "sync_transactions": [],\n              "async_transactions": []\n            }\n          }\n        ],\n        "sync_transactions": [],\n        "async_transactions": []\n      }\n    ]\n  }\n}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>r});var i=t(96540);const o={},a=i.createContext(o);function c(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);