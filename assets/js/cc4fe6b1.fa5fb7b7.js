"use strict";(self.webpackChunkwire_docs=self.webpackChunkwire_docs||[]).push([[5381],{2079:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>t,metadata:()=>c,toc:()=>d});var i=s(74848),r=s(28453);const t={title:"system regproducer"},o=void 0,c={id:"api-reference/tooling/clio/command-reference/system/system-regproducer",title:"system regproducer",description:"Description",source:"@site/docs/api-reference/tooling/clio/command-reference/system/system-regproducer.md",sourceDirName:"api-reference/tooling/clio/command-reference/system",slug:"/api-reference/tooling/clio/command-reference/system/system-regproducer",permalink:"/docs/api-reference/tooling/clio/command-reference/system/system-regproducer",draft:!1,unlisted:!1,editUrl:"https://github.com/Wire-Network/wire-docs/edit/master/docs/api-reference/tooling/clio/command-reference/system/system-regproducer.md",tags:[],version:"current",frontMatter:{title:"system regproducer"},sidebar:"apiReferenceSidebar",previous:{title:"system newaccount",permalink:"/docs/api-reference/tooling/clio/command-reference/system/system-newaccount"},next:{title:"system regproxy",permalink:"/docs/api-reference/tooling/clio/command-reference/system/system-regproxy"}},l={},d=[{value:"Description",id:"description",level:2},{value:"Positional Arguments",id:"positional-arguments",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2}];function a(e){const n={code:"code",em:"em",h2:"h2",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Register a new producer."}),"\n",(0,i.jsx)(n.h2,{id:"positional-arguments",children:"Positional Arguments"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"account"})," ",(0,i.jsx)(n.em,{children:"TEXT"})," - The account to register as a producer"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"producer_key"})," ",(0,i.jsx)(n.em,{children:"TEXT"})," - The producer's public key"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"url"})," ",(0,i.jsx)(n.em,{children:"TEXT"})," - URL where info about producer can be found"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"location"})," ",(0,i.jsx)(n.em,{children:"UINT"})," - Relative location for purpose of nearest neighbor scheduling"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-x,--expiration"})," ",(0,i.jsx)(n.em,{children:"TEXT"})," - set the time in seconds before a transaction expires, defaults to 30s"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-f,--force-unique"})," - force the transaction to be unique. this will consume extra bandwidth and remove any protections against accidently issuing the same transaction multiple times"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-s,--skip-sign"})," Specify if unlocked wallet keys should be used to sign transaction"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-d,--dont-broadcast"})," - Don't broadcast transaction to the network (just print to stdout)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-r,--ref-block"})," ",(0,i.jsx)(n.em,{children:"TEXT"}),"         set the reference block num or block id used for TAPOS (Transaction as Proof-of-Stake)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-p,--permission"}),"  ",(0,i.jsx)(n.em,{children:"TEXT"})," - An account and permission level to authorize, as in 'account@permission' (defaults to 'account@active')"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"--max-cpu-usage-ms"})," ",(0,i.jsx)(n.em,{children:"UINT"})," - set an upper limit on the milliseconds of cpu usage budget, for the execution of the transaction (defaults to 0 which means no limit)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"--max-net-usage"})," ",(0,i.jsx)(n.em,{children:"UINT"})," - set an upper limit on the net usage budget, in bytes, for the transaction (defaults to 0 which means no limit)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"--delay-sec"})," ",(0,i.jsx)(n.em,{children:"UINT"}),"            set the delay_sec seconds, defaults to 0s"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-j,--json"})," print result as json"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>c});var i=s(96540);const r={},t=i.createContext(r);function o(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);