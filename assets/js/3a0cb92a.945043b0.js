"use strict";(self.webpackChunkwire_docs=self.webpackChunkwire_docs||[]).push([[516],{6841:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var c=t(74848),o=t(28453);const a={id:"account"},i=void 0,r={id:"api-reference/tooling/clio/command-reference/create/account",title:"account",description:"Description",source:"@site/docs/api-reference/tooling/clio/command-reference/create/account.md",sourceDirName:"api-reference/tooling/clio/command-reference/create",slug:"/api-reference/tooling/clio/command-reference/create/account",permalink:"/docs/api-reference/tooling/clio/command-reference/create/account",draft:!1,unlisted:!1,editUrl:"https://github.com/Wire-Network/wire-docs/edit/master/docs/api-reference/tooling/clio/command-reference/create/account.md",tags:[],version:"current",frontMatter:{id:"account"},sidebar:"apiReferenceSidebar",previous:{title:"create",permalink:"/docs/api-reference/tooling/clio/command-reference/create/"},next:{title:"key",permalink:"/docs/api-reference/tooling/clio/command-reference/create/key"}},s={},d=[{value:"Description",id:"description",level:2},{value:"Usage",id:"usage",level:2},{value:"Command",id:"command",level:2},{value:"Output",id:"output",level:2}];function u(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,c.jsx)(n.p,{children:"Create a new account on the blockchain (assumes system contract does not restrict RAM usage)"}),"\n",(0,c.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-console",children:"Usage: clio create account [OPTIONS] creator name OwnerKey [ActiveKey]\n\nPositionals:\n  creator TEXT                The name of the account creating the new account (required)\n  name TEXT                   The name of the new account (required)\n  OwnerKey TEXT               The owner public key or permission level for the new account (required)\n  ActiveKey TEXT              The active public key or permission level for the new account\n\nOptions:\n  -h,--help                   Print this help message and exit\n  -x,--expiration             set the time in seconds before a transaction expires, defaults to 30s\n  -f,--force-unique           force the transaction to be unique. this will consume extra bandwidth and remove any protections against accidently issuing the same transaction multiple times\n  -s,--skip-sign              Specify if unlocked wallet keys should be used to sign transaction\n  -j,--json                   print result as json\n  --json-file TEXT            save result in json format into a file\n  -d,--dont-broadcast         don't broadcast transaction to the network (just print to stdout)\n  --return-packed             used in conjunction with --dont-broadcast to get the packed transaction\n  -r,--ref-block TEXT         set the reference block num or block id used for TAPOS (Transaction as Proof-of-Stake)\n  --use-old-rpc               use old RPC push_transaction, rather than new RPC send_transaction\n  -p,--permission TEXT ...    An account and permission level to authorize, as in 'account@permission' (defaults to 'creator@active')\n  --max-cpu-usage-ms UINT     set an upper limit on the milliseconds of cpu usage budget, for the execution of the transaction (defaults to 0 which means no limit)\n  --max-net-usage UINT        set an upper limit on the net usage budget, in bytes, for the transaction (defaults to 0 which means no limit)\n  --delay-sec UINT            set the delay_sec seconds, defaults to 0s\n"})}),"\n",(0,c.jsx)(n.h2,{id:"command",children:"Command"}),"\n",(0,c.jsxs)(n.p,{children:["A set of ",(0,c.jsx)(n.code,{children:"sysio"})," keys is required to create an account. The ",(0,c.jsx)(n.code,{children:"sysio"})," keys can be generated by using ",(0,c.jsx)(n.code,{children:"clio create key"}),"."]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sh",children:"clio create account inita tester EOS4toFS3YXEQCkuuw1aqDLrtHim86Gz9u3hBdcBw5KNPZcursVHq EOS7d9A3uLe6As66jzN8j44TXJUqJSK3bFjjEEqR4oTvNAB3iM9SA\n"})}),"\n",(0,c.jsx)(n.h2,{id:"output",children:"Output"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-json",children:'{\n  "transaction_id": "6acd2ece68c4b86c1fa209c3989235063384020781f2c67bbb80bc8d540ca120",\n  "processed": {\n    "refBlockNum": "25217",\n    "refBlockPrefix": "2095475630",\n    "expiration": "2017-07-25T17:54:55",\n    "scope": [\n      "eos",\n      "inita"\n    ],\n    "signatures": [],\n    "messages": [{\n        "code": "eos",\n        "type": "newaccount",\n        "authorization": [{\n            "account": "inita",\n            "permission": "active"\n          }\n        ],\n        "data": "c9251a0000000000b44c5a2400000000010000000102bcca6347d828d4e1868b7dfa91692a16d5b20d0ee3d16a7ca2ddcc7f6dd03344010000010000000102bcca6347d828d4e1868b7dfa91692a16d5b20d0ee3d16a7ca2ddcc7f6dd03344010000010000000001c9251a000000000061d0640b000000000100010000000000000008454f5300000000"\n      }\n    ],\n    "output": [{\n        "notify": [],\n        "sync_transactions": [],\n        "async_transactions": []\n      }\n    ]\n  }\n}\n'})})]})}function l(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(u,{...e})}):u(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>r});var c=t(96540);const o={},a=c.createContext(o);function i(e){const n=c.useContext(a);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),c.createElement(a.Provider,{value:n},e.children)}}}]);