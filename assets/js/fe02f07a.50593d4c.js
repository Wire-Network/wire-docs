"use strict";(self.webpackChunkwire_docs=self.webpackChunkwire_docs||[]).push([[4480],{33188:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>a});var s=o(74848),r=o(28453);const t={},i=void 0,c={id:"api-reference/tooling/clio/usage/how-to-guides/how-to-transfer-an-sysio-token",title:"how-to-transfer-an-sysio-token",description:"Overview",source:"@site/docs/api-reference/tooling/clio/usage/how-to-guides/how-to-transfer-an-sysio-token.md",sourceDirName:"api-reference/tooling/clio/usage/how-to-guides",slug:"/api-reference/tooling/clio/usage/how-to-guides/how-to-transfer-an-sysio-token",permalink:"/docs/api-reference/tooling/clio/usage/how-to-guides/how-to-transfer-an-sysio-token",draft:!1,unlisted:!1,editUrl:"https://github.com/Wire-Network/wire-docs/docs/api-reference/tooling/clio/usage/how-to-guides/how-to-transfer-an-sysio-token.md",tags:[],version:"current",frontMatter:{}},l={},a=[{value:"Overview",id:"overview",level:2},{value:"Before you begin",id:"before-you-begin",level:2},{value:"Command Reference",id:"command-reference",level:2},{value:"Procedure",id:"procedure",level:2},{value:"Summary",id:"summary",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsxs)(n.p,{children:["This how-to guide provides instructions on how to transfer tokens created by ",(0,s.jsx)(n.code,{children:"sysio.token"})," contract."]}),"\n",(0,s.jsx)(n.h2,{id:"before-you-begin",children:"Before you begin"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Install the currently supported version of ",(0,s.jsx)(n.code,{children:"clio"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"sysio.token"})," contract is deployed on the network you are connected to."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Understand the following:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["What a ",(0,s.jsx)(n.a,{href:"https://developers.eos.io/welcome/v2.1/glossary/index/#transaction",children:"transaction"})," is."]}),"\n",(0,s.jsx)(n.li,{children:"Token transfers are irreversible."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"command-reference",children:"Command Reference"}),"\n",(0,s.jsxs)(n.p,{children:["See the following reference guides for command line usage and related options for the ",(0,s.jsx)(n.code,{children:"clio"})," command:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.a,{href:"https://developers.eos.io/manuals/eos/latest/clio/command-reference/transfer",children:"clio transfer"})," reference."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"procedure",children:"Procedure"}),"\n",(0,s.jsxs)(n.p,{children:["The following steps show how to transfer ",(0,s.jsx)(n.code,{children:"0.0001 SYS"})," tokens to an account called ",(0,s.jsx)(n.code,{children:"bob"})," from an account called ",(0,s.jsx)(n.code,{children:"alice"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:'clio transfer alice bob "0.0001 SYS" "Hodl!" -p alice@active\n'})}),"\n",(0,s.jsx)(n.p,{children:"Where:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"alice"})," = the account that transfers the tokens."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"bob"})," = the account that receives the tokens."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"0.0001 SYS"})," = the amount of ",(0,s.jsx)(n.code,{children:"SYS"})," tokens sent."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Hodl!"})," = the message, or memo, that is accompanying the transaction."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Example output:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:'executed transaction: 800835f28659d405748f4ac0ec9e327335eae579a0d8e8ef6330e78c9ee1b67c  128 bytes  1073 us\n#   sysio.token <= sysio.token::transfer        {"from":"alice","to":"bob","quantity":"25.0000 SYS","memo":"m"}\n#         alice <= sysio.token::transfer        {"from":"alice","to":"bob","quantity":"25.0000 SYS","memo":"m"}\n#           bob <= sysio.token::transfer        {"from":"alice","to":"bob","quantity":"25.0000 SYS","memo":"m"}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,s.jsxs)(n.p,{children:["In conclusion, the above instructions show how to transfer tokens created by ",(0,s.jsx)(n.code,{children:"sysio.token"})," contract from one account to another."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>c});var s=o(96540);const r={},t=s.createContext(r);function i(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);