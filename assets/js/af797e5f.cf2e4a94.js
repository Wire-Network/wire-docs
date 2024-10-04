"use strict";(self.webpackChunkwire_docs=self.webpackChunkwire_docs||[]).push([[8619],{66754:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var o=t(74848),s=t(28453);const i={},r=void 0,c={id:"api-reference/tooling/clio/how-to-guides/how-to-delegate-cpu-resource",title:"how-to-delegate-cpu-resource",description:"Goal",source:"@site/docs/api-reference/tooling/clio/how-to-guides/how-to-delegate-cpu-resource.md",sourceDirName:"api-reference/tooling/clio/how-to-guides",slug:"/api-reference/tooling/clio/how-to-guides/how-to-delegate-cpu-resource",permalink:"/docs/api-reference/tooling/clio/how-to-guides/how-to-delegate-cpu-resource",draft:!1,unlisted:!1,editUrl:"https://github.com/Wire-Network/wire-docs/edit/master/docs/api-reference/tooling/clio/how-to-guides/how-to-delegate-cpu-resource.md",tags:[],version:"current",frontMatter:{}},d={},a=[{value:"Goal",id:"goal",level:2},{value:"Before you begin",id:"before-you-begin",level:2},{value:"Steps",id:"steps",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"goal",children:"Goal"}),"\n",(0,o.jsx)(n.p,{children:"Delegate CPU bandwidth for an account or application."}),"\n",(0,o.jsx)(n.h2,{id:"before-you-begin",children:"Before you begin"}),"\n",(0,o.jsx)(n.p,{children:"Make sure you meet the following requirements:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Familiarize with the ",(0,o.jsx)(n.a,{href:"/docs/api-reference/tooling/clio/command-reference/system/system-delegatebw",children:(0,o.jsx)(n.code,{children:"clio system delegatebw"})})," command and its parameters."]}),"\n",(0,o.jsxs)(n.li,{children:["Install the currently supported version of ",(0,o.jsx)(n.code,{children:"clio"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{title:"Note",type:"info",children:(0,o.jsxs)(n.p,{children:["| The ",(0,o.jsx)(n.code,{children:"clio"})," tool and ",(0,o.jsx)(n.code,{children:"kiod"})," are bundled with the Wire software. ",(0,o.jsx)(n.a,{href:"/docs/getting-started/install-dependencies",children:"Installing Wire core"})," will install the ",(0,o.jsx)(n.code,{children:"clio"})," and ",(0,o.jsx)(n.code,{children:"kiod"})," command line tools."]})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Ensure the reference system contracts from ",(0,o.jsx)(n.a,{href:"https://github.com/Wire-Network/wire-system-contracts",children:(0,o.jsx)(n.code,{children:"sysio.contracts"})})," repository is deployed and used to manage system resources."]}),"\n",(0,o.jsxs)(n.li,{children:["Understand what an ",(0,o.jsx)(n.a,{href:"/docs/introduction/glossary#account",children:"account"})," is and its role in the blockchain."]}),"\n",(0,o.jsxs)(n.li,{children:["Understand ",(0,o.jsx)(n.a,{href:"/docs/introduction/glossary#cpu",children:"CPU bandwidth"})," in an Wire blockchain."]}),"\n",(0,o.jsxs)(n.li,{children:["Understand ",(0,o.jsx)(n.a,{href:"/docs/introduction/glossary#net",children:"NET bandwidth"})," in an Wire blockchain."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"steps",children:"Steps"}),"\n",(0,o.jsx)(n.p,{children:"Perform the step below:"}),"\n",(0,o.jsx)(n.p,{children:"Delegate CPU bandwidth from a source account to a receiver account:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"clio system delegatebw <from> <receiver> <stake_net_quantity> <stake_cpu_quantity>\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Where ",(0,o.jsx)(n.code,{children:"from"})," is the account to delegate bandwidth from, ",(0,o.jsx)(n.code,{children:"receiver"})," is the account to receive the delegated bandwidth, and ",(0,o.jsx)(n.code,{children:"stake_net_quantity"})," and/or ",(0,o.jsx)(n.code,{children:"stake_cpu_quantity"})," is the amount of tokens to stake for network (NET) bandwidth and/or CPU bandwidth, respectively."]}),"\n",(0,o.jsx)(n.p,{children:"Some examples are provided below:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Delegate 0.01 SYS CPU bandwidth from ",(0,o.jsx)(n.code,{children:"bob"})," to ",(0,o.jsx)(n.code,{children:"alice"}),":"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Example Output"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:'clio system delegatebw bob alice "0 SYS" "0.01 SYS"\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'executed transaction: 5487afafd67bf459a20fcc2dbc5d0c2f0d1f10e33123eaaa07088046fd18e3ae  192 bytes  503 us\n#         sysio <= sysio::delegatebw            {"from":"bob","receiver":"alice","stake_net_quantity":"0.0000 SYS","stake_cpu_quantity":"0.0100 SYS"...\n#   sysio.token <= sysio.token::transfer        {"from":"bob","to":"sysio.stake","quantity":"0.0010 SYS","memo":"stake bandwidth"}\n#  bob <= sysio.token::transfer        {"from":"bob","to":"sysio.stake","quantity":"0.0010 SYS","memo":"stake bandwidth"}\n#   sysio.stake <= sysio.token::transfer        {"from":"bob","to":"sysio.stake","quantity":"0.0010 SYS","memo":"stake bandwidth"}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var o=t(96540);const s={},i=o.createContext(s);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);