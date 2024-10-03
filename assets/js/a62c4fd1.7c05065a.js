"use strict";(self.webpackChunkwire_docs=self.webpackChunkwire_docs||[]).push([[4096],{76016:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var i=s(74848),t=s(28453);const o={title:"system rex defundcpuloan"},r=void 0,c={id:"api-reference/tooling/clio/command-reference/system/system-rex-defundnetloan",title:"system rex defundcpuloan",description:"Description",source:"@site/docs/api-reference/tooling/clio/command-reference/system/system-rex-defundnetloan.md",sourceDirName:"api-reference/tooling/clio/command-reference/system",slug:"/api-reference/tooling/clio/command-reference/system/system-rex-defundnetloan",permalink:"/wire-docs/docs/api-reference/tooling/clio/command-reference/system/system-rex-defundnetloan",draft:!1,unlisted:!1,editUrl:"https://github.com/Wire-Network/wire-docs/docs/api-reference/tooling/clio/command-reference/system/system-rex-defundnetloan.md",tags:[],version:"current",frontMatter:{title:"system rex defundcpuloan"}},l={},d=[{value:"Description",id:"description",level:2},{value:"Positionals",id:"positionals",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2}];function a(e){const n={code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Withdraw from a Network loan fund."}),"\n",(0,i.jsx)(n.h2,{id:"positionals",children:"Positionals"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"from"})," ",(0,i.jsx)(n.em,{children:"TEXT"})," - Loan owner (required)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"loan_num"})," ",(0,i.jsx)(n.em,{children:"TEXT"})," - Loan ID (required)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"payment"})," ",(0,i.jsx)(n.em,{children:"TEXT"})," - Amount to be deposited (required)"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-h,--help"})," Print this help message and exit"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-x,--expiration"})," ",(0,i.jsx)(n.em,{children:"TEXT"})," - set the time in seconds before a transaction expires, defaults to 30s"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-f,--force-unique"})," - Force the transaction to be unique. this will consume extra bandwidth and remove any protections against accidently issuing the same transaction multiple times"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-s,--skip-sign"})," Specify if unlocked wallet keys should be used to sign transaction"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-j,--json"})," print result as json"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-d,--dont-broadcast"})," - Don't broadcast transaction to the network (just print to stdout)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-r,--ref-block"})," ",(0,i.jsx)(n.em,{children:"TEXT"})," - Set the reference block num or block id used for TAPOS (Transaction as Proof-of-Stake)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-p,--permission"}),"  ",(0,i.jsx)(n.em,{children:"TEXT"})," - An account and permission level to authorize, as in 'account@permission' (defaults to 'account@active')"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"--max-cpu-usage-ms"})," ",(0,i.jsx)(n.em,{children:"UINT"})," - Set an upper limit on the milliseconds of cpu usage budget, for the execution of the transaction (defaults to 0 which means no limit)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"--max-net-usage"})," ",(0,i.jsx)(n.em,{children:"UINT"})," - Set an upper limit on the net usage budget, in bytes, for the transaction (defaults to 0 which means no limit)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"--delay-sec"})," ",(0,i.jsx)(n.em,{children:"UINT"}),"            set the delay_sec seconds, defaults to 0s"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:'clio system rex defundnetloan accountname1 abc123 "1 EOS"\n'})})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>c});var i=s(96540);const t={},o=i.createContext(t);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);