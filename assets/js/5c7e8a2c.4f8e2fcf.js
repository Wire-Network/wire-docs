"use strict";(self.webpackChunkwire_docs=self.webpackChunkwire_docs||[]).push([[51],{99671:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>c,metadata:()=>r,toc:()=>a});var s=n(74848),t=n(28453);const c={id:"multisig-cancel",title:"multisig cancel"},o=void 0,r={id:"api-reference/tooling/clio/command-reference/multisig/multisig-cancel",title:"multisig cancel",description:"Description",source:"@site/docs/api-reference/tooling/clio/command-reference/multisig/multisig-cancel.md",sourceDirName:"api-reference/tooling/clio/command-reference/multisig",slug:"/api-reference/tooling/clio/command-reference/multisig/multisig-cancel",permalink:"/docs/api-reference/tooling/clio/command-reference/multisig/multisig-cancel",draft:!1,unlisted:!1,editUrl:"https://github.com/Wire-Network/wire-docs/docs/api-reference/tooling/clio/command-reference/multisig/multisig-cancel.md",tags:[],version:"current",frontMatter:{id:"multisig-cancel",title:"multisig cancel"},sidebar:"apiReferenceSidebar",previous:{title:"multisig approve",permalink:"/docs/api-reference/tooling/clio/command-reference/multisig/multisig-approve"},next:{title:"multisig exec",permalink:"/docs/api-reference/tooling/clio/command-reference/multisig/multisig-exec"}},l={},a=[{value:"Description",id:"description",level:2},{value:"Positional Arguments",id:"positional-arguments",level:2},{value:"Options",id:"options",level:2}];function d(e){const i={code:"code",em:"em",h2:"h2",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(i.p,{children:"Cancel proposed transaction."}),"\n",(0,s.jsx)(i.h2,{id:"positional-arguments",children:"Positional Arguments"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"proposer"})," ",(0,s.jsx)(i.em,{children:"TEXT"})," - Proposer name (string)"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"proposal_name"})," ",(0,s.jsx)(i.em,{children:"TEXT"})," - Proposal name (string)"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"canceler"})," ",(0,s.jsx)(i.em,{children:"TEXT"})," - Canceler name (string)"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"options",children:"Options"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"-h,--help"})," Print this help message and exit"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"-x,--expiration"})," ",(0,s.jsx)(i.em,{children:"TEXT"})," - set the time in seconds before a transaction expires, defaults to 30s"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"-f,--force-unique"})," - force the transaction to be unique. this will consume extra bandwidth and remove any protections against accidently issuing the same transaction multiple times"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"-s,--skip-sign"})," Specify if unlocked wallet keys should be used to sign transaction"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"-d,--dont-broadcast"})," - Don't broadcast transaction to the network (just print to stdout))"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"-r,--ref-block"})," ",(0,s.jsx)(i.em,{children:"TEXT"}),"         set the reference block num or block id used for TAPOS (Transaction as Proof-of-Stake))"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"-p,--permission"}),"  ",(0,s.jsx)(i.em,{children:"TEXT"})," - An account and permission level to authorize, as in 'account@permission' (defaults to 'account@active'))"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"--max-cpu-usage-ms"})," ",(0,s.jsx)(i.em,{children:"UINT"})," - set an upper limit on the milliseconds of cpu usage budget, for the execution of the transaction (defaults to 0 which means no limit))"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"--max-net-usage"})," ",(0,s.jsx)(i.em,{children:"UINT"})," - set an upper limit on the net usage budget, in bytes, for the transaction (defaults to 0 which means no limit))"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"--delay-sec"})," ",(0,s.jsx)(i.em,{children:"UINT"})," - set the delay_sec seconds, defaults to 0s"]}),"\n"]})]})}function m(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>o,x:()=>r});var s=n(96540);const t={},c=s.createContext(t);function o(e){const i=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(c.Provider,{value:i},e.children)}}}]);