"use strict";(self.webpackChunkwire_docs=self.webpackChunkwire_docs||[]).push([[6718],{35069:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var i=t(74848),s=t(28453);const a={title:"How to Submit a Transaction"},o=void 0,r={id:"api-reference/tooling/clio/guides/how-to-submit-a-transaction",title:"How to Submit a Transaction",description:"Overview",source:"@site/docs/api-reference/tooling/clio/guides/how-to-submit-a-transaction.md",sourceDirName:"api-reference/tooling/clio/guides",slug:"/api-reference/tooling/clio/guides/how-to-submit-a-transaction",permalink:"/docs/api-reference/tooling/clio/guides/how-to-submit-a-transaction",draft:!1,unlisted:!1,editUrl:"https://github.com/Wire-Network/wire-docs/edit/master/docs/api-reference/tooling/clio/guides/how-to-submit-a-transaction.md",tags:[],version:"current",frontMatter:{title:"How to Submit a Transaction"},sidebar:"apiReferenceSidebar",previous:{title:"transfer",permalink:"/docs/api-reference/tooling/clio/command-reference/transfer"},next:{title:"Kiod",permalink:"/docs/api-reference/tooling/kiod/"}},c={},d=[{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Procedure",id:"procedure",level:2},{value:"1. Create the transaction as JSON snippet",id:"1-create-the-transaction-as-json-snippet",level:3},{value:"2. Send the transaction",id:"2-send-the-transaction",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(n.p,{children:["This how-to guide provides instructions on how to submit, or push, a transaction using the ",(0,i.jsx)(n.code,{children:"clio"})," CLI tool."]}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Install the currently supported version of ",(0,i.jsx)(n.code,{children:"clio"})]}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Understand the following:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["What a ",(0,i.jsx)(n.a,{href:"/docs/introduction/glossary#transaction",children:"transaction"})," is."]}),"\n",(0,i.jsxs)(n.li,{children:["How to generate a valid transaction JSON.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Consult ",(0,i.jsx)(n.a,{href:"/docs/api-reference/tooling/clio/command-reference/push/push-transaction",children:"clio push transaction"})," reference, and pay attention to option ",(0,i.jsx)(n.code,{children:"-d"})," and ",(0,i.jsx)(n.code,{children:"-j"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Consult ",(0,i.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(2462).A+"#operation/push_transactions",children:"push transaction"})," endpoint for chain api plug-in, and pay attention to the payload definition."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"procedure",children:"Procedure"}),"\n",(0,i.jsx)(n.p,{children:"The following steps show how to:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#overview",children:"Overview"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#prerequisites",children:"Prerequisites"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#procedure",children:"Procedure"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#1-create-the-transaction-as-json-snippet",children:"1. Create the transaction as JSON snippet"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#2-send-the-transaction",children:"2. Send the transaction"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"1-create-the-transaction-as-json-snippet",children:"1. Create the transaction as JSON snippet"}),"\n",(0,i.jsx)(n.p,{children:"You can create the JSON snippet defining the transaction in two ways:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Create a JSON snippet which contains a valid transaction and uses hex format for ",(0,i.jsx)(n.code,{children:"data"})," field."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-JSON",children:'{\n  "expiration": "2019-08-01T07:15:49",\n  "ref_block_num": 34881,\n  "ref_block_prefix": 2972818865,\n  "max_net_usage_words": 0,\n  "max_cpu_usage_ms": 0,\n  "delay_sec": 0,\n  "context_free_actions": [],\n  "actions": [{\n      "account": "sysio.token",\n      "name": "transfer",\n      "authorization": [{\n          "actor": "han",\n          "permission": "active"\n        }\n      ],\n      "data": "000000000000a6690000000000ea305501000000000000000453595300000000016d"\n    }\n  ],\n  "transaction_extensions": [],\n  "context_free_data": []\n}\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Alternatively, you can also create a JSON snippet that uses clear text JSON for ",(0,i.jsx)(n.code,{children:"data"})," field."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["| Be aware that if a clear text ",(0,i.jsx)(n.code,{children:"data"})," field is used, ",(0,i.jsx)(n.code,{children:"clio"})," needs to fetch the smart contract's ABI using ",(0,i.jsx)(n.code,{children:"nodeop"})," API. This operation has an overall performance overhead for both ",(0,i.jsx)(n.code,{children:"clio"})," and ",(0,i.jsx)(n.code,{children:"nodeop"}),". On the other hand if hex data is used in the ",(0,i.jsx)(n.code,{children:"data"})," field then the ABI fetching is not executed and thus the total time to send and execute the transaction is faster."]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "expiration": "2019-08-01T07:15:49",\n  "ref_block_num": 34881,\n  "ref_block_prefix": 2972818865,\n  "max_net_usage_words": 0,\n  "max_cpu_usage_ms": 0,\n  "delay_sec": 0,\n  "context_free_actions": [],\n  "actions": [{\n      "account": "sysio.token",\n      "name": "transfer",\n      "authorization": [{\n          "actor": "han",\n          "permission": "active"\n        }\n      ],\n      "data": {\n        "from": "han",\n        "to": "sysio",\n        "quantity": "0.0001 SYS",\n        "memo": "m"\n      }\n    }\n  ],\n  "transaction_extensions": [],\n  "context_free_data": []\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"2-send-the-transaction",children:"2. Send the transaction"}),"\n",(0,i.jsx)(n.p,{children:"You can send the transaction you created as JSON snippet in two ways:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["You can send the transaction stored in ",(0,i.jsx)(n.code,{children:"TRX_FILE.json"})," file:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"clio push transaction TRX_FILE.json\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Alternatively, you can send the transaction using the JSON content directly:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:'clio push transaction \'{"expiration": "2019-08-01T07:15:49", "ref_block_num": 34881,"ref_block_prefix": 2972818865,"max_net_usage_words": 0,"max_cpu_usage_ms": 0,"delay_sec": 0,"context_free_actions": [],"actions": [{"account": "sysio.token","name": "transfer","authorization": [{"actor": "han","permission": "active"}],"data": {"from": "han","to": "sysio","quantity": "0.0001 SYS","memo": "m"}}],"transaction_extensions": [],"context_free_data": []}\'\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},2462:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/files/ChainApi-fbc8b91f1e0757a4f8e942fe1823ba89.yaml"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var i=t(96540);const s={},a=i.createContext(s);function o(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);