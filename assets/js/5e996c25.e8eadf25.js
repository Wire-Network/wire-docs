"use strict";(self.webpackChunkwire_docs=self.webpackChunkwire_docs||[]).push([[9149],{1062:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var t=c(74848),o=c(28453);const i={id:"unpack-transaction"},a=void 0,r={id:"api-reference/tooling/clio/command-reference/convert/unpack-transaction",title:"unpack-transaction",description:"Description",source:"@site/docs/api-reference/tooling/clio/command-reference/convert/unpack-transaction.md",sourceDirName:"api-reference/tooling/clio/command-reference/convert",slug:"/api-reference/tooling/clio/command-reference/convert/unpack-transaction",permalink:"/wire-docs/docs/api-reference/tooling/clio/command-reference/convert/unpack-transaction",draft:!1,unlisted:!1,editUrl:"https://github.com/Wire-Network/wire-docs/docs/api-reference/tooling/clio/command-reference/convert/unpack-transaction.md",tags:[],version:"current",frontMatter:{id:"unpack-transaction"},sidebar:"apiReferenceSidebar",previous:{title:"unpack-action-data",permalink:"/wire-docs/docs/api-reference/tooling/clio/command-reference/convert/unpack-action-data"},next:{title:"create",permalink:"/wire-docs/docs/api-reference/tooling/clio/command-reference/create/"}},s={},d=[{value:"Description",id:"description",level:2},{value:"Positionals",id:"positionals",level:2},{value:"Options",id:"options",level:2},{value:"Usage",id:"usage",level:2},{value:"Output",id:"output",level:2}];function l(e){const n={code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"From packed to plain signed json form"}),"\n",(0,t.jsx)(n.h2,{id:"positionals",children:"Positionals"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"transaction"})," ",(0,t.jsx)(n.em,{children:"TEXT"})," - The packed transaction json (string containing packed_trx and optionally compression fields.)"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"-h,--help"})," - Print this help message and exit"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"--unpack-action-data"})," - Unpack all action data within transaction, needs interaction with ",(0,t.jsx)(n.code,{children:"nodeop"})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:'clio convert unpack_transaction \'{\n  "signatures": [\n    "SIG_K1_KmRbWahefwxs6uyCGNR6wNRjw7cntEeFQhNCbyg8S92Kbp7zdSSVGTD2QS7pNVWgcU126zpxaBp9CwUxFpRwSnfkjd46bS"\n  ],\n  "compression": "none",\n  "packed_context_free_data": "",\n  "packed_trx": "8468635b7f379feeb95500000000010000000000ea305500409e9a2264b89a010000000000ea305500000000a8ed3232660000000000ea305500a6823403ea30550100000001000240cc0bf90a5656c8bb81f0eb86f49f89613c5cd988c018715d4646c6bd0ad3d8010000000100000001000240cc0bf90a5656c8bb81f0eb86f49f89613c5cd988c018715d4646c6bd0ad3d80100000000"\n}\'\n'})}),"\n",(0,t.jsx)(n.h2,{id:"output",children:"Output"}),"\n",(0,t.jsx)("pre",{children:(0,t.jsx)("code",{class:"language-json",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'{\n  "expiration": "2018-08-02T20:24:36",\n  "ref_block_num": 14207,\n  "ref_block_prefix": 1438248607,\n  "max_net_usage_words": 0,\n  "max_cpu_usage_ms": 0,\n  "delay_sec": 0,\n  "context_free_actions": [],\n  "actions": [{\n      "account": "sysio",\n      "name": "newaccount",\n      "authorization": [{\n          "actor": "sysio",\n          "permission": "active"\n        }\n      ],\n      "data": "0000000000ea305500a6823403ea30550100000001000240cc0bf90a5656c8bb81f0eb86f49f89613c5cd988c018715d4646c6bd0ad3d8010000000100000001000240cc0bf90a5656c8bb81f0eb86f49f89613c5cd988c018715d4646c6bd0ad3d801000000"\n    }\n  ],\n  "transaction_extensions": [],\n  "signatures": [\n    "SIG_K1_KmRbWahefwxs6uyCGNR6wNRjw7cntEeFQhNCbyg8S92Kbp7zdSSVGTD2QS7pNVWgcU126zpxaBp9CwUxFpRwSnfkjd46bS"\n  ],\n  "context_free_data": []\n}\n'})})})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,c)=>{c.d(n,{R:()=>a,x:()=>r});var t=c(96540);const o={},i=t.createContext(o);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);