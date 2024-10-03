"use strict";(self.webpackChunkwire_docs=self.webpackChunkwire_docs||[]).push([[3140],{30184:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var t=s(74848),i=s(28453);const o={title:"system rex mvtosavings",excerpt:"Move REX tokens to savings bucket"},c=void 0,r={id:"api-reference/tooling/clio/command-reference/system/system-rex-mvtosavings",title:"system rex mvtosavings",description:"Description:",source:"@site/docs/api-reference/tooling/clio/command-reference/system/system-rex-mvtosavings.md",sourceDirName:"api-reference/tooling/clio/command-reference/system",slug:"/api-reference/tooling/clio/command-reference/system/system-rex-mvtosavings",permalink:"/docs/api-reference/tooling/clio/command-reference/system/system-rex-mvtosavings",draft:!1,unlisted:!1,editUrl:"https://github.com/Wire-Network/wire-docs/docs/api-reference/tooling/clio/command-reference/system/system-rex-mvtosavings.md",tags:[],version:"current",frontMatter:{title:"system rex mvtosavings",excerpt:"Move REX tokens to savings bucket"}},l={},d=[{value:"Description:",id:"description",level:2},{value:"Positionals",id:"positionals",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2}];function a(e){const n={code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"description",children:"Description:"}),"\n",(0,t.jsx)(n.p,{children:"Move REX tokens to savings bucket."}),"\n",(0,t.jsx)(n.h2,{id:"positionals",children:"Positionals"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"owner"})," ",(0,t.jsx)(n.em,{children:"TEXT"})," - Account which owns the REX fund (required)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"rex"})," ",(0,t.jsx)(n.em,{children:"TEXT"})," - Amount to be Amount of REX to be moved to savings bucket (required) into REX fund (required)"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"-h,--help"})," Print this help message and exit"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"-x,--expiration"})," ",(0,t.jsx)(n.em,{children:"TEXT"})," - set the time in seconds before a transaction expires, defaults to 30s"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"-f,--force-unique"})," - Force the transaction to be unique. this will consume extra bandwidth and remove any protections against accidently issuing the same transaction multiple times"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"-s,--skip-sign"})," Specify if unlocked wallet keys should be used to sign transaction"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"-d,--dont-broadcast"})," - Don't broadcast transaction to the network (just print to stdout)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"-r,--ref-block"})," ",(0,t.jsx)(n.em,{children:"TEXT"})," - Set the reference block num or block id used for TAPOS (Transaction as Proof-of-Stake)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"-p,--permission"}),"  ",(0,t.jsx)(n.em,{children:"TEXT"})," - An account and permission level to authorize, as in 'account@permission' (defaults to 'account@active')"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"--max-cpu-usage-ms"})," ",(0,t.jsx)(n.em,{children:"UINT"})," - Set an upper limit on the milliseconds of cpu usage budget, for the execution of the transaction (defaults to 0 which means no limit)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"--max-net-usage"})," ",(0,t.jsx)(n.em,{children:"UINT"})," - Set an upper limit on the net usage budget, in bytes, for the transaction (defaults to 0 which means no limit)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"--delay-sec"})," ",(0,t.jsx)(n.em,{children:"UINT"}),"            set the delay_sec seconds, defaults to 0s"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"-j,--json"})," print result as json"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:'clio system rex mvtosavings accountname1 "1 REX"\n'})})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>r});var t=s(96540);const i={},o=t.createContext(i);function c(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);