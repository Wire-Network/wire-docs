"use strict";(self.webpackChunkwire_docs=self.webpackChunkwire_docs||[]).push([[3951],{29446:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var t=n(74848),i=n(28453);const o={title:"system rex closerex"},c=void 0,r={id:"api-reference/tooling/clio/command-reference/system/system-rex-closerex",title:"system rex closerex",description:"Description",source:"@site/docs/api-reference/tooling/clio/command-reference/system/system-rex-closerex.md",sourceDirName:"api-reference/tooling/clio/command-reference/system",slug:"/api-reference/tooling/clio/command-reference/system/system-rex-closerex",permalink:"/docs/api-reference/tooling/clio/command-reference/system/system-rex-closerex",draft:!1,unlisted:!1,editUrl:"https://github.com/Wire-Network/wire-docs/docs/api-reference/tooling/clio/command-reference/system/system-rex-closerex.md",tags:[],version:"current",frontMatter:{title:"system rex closerex"}},l={},d=[{value:"Description",id:"description",level:2},{value:"Positionals",id:"positionals",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2}];function a(e){const s={code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(s.p,{children:"Delete unused REX-related user table entries."}),"\n",(0,t.jsx)(s.h2,{id:"positionals",children:"Positionals"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"owner"})," ",(0,t.jsx)(s.em,{children:"TEXT"})," - Account which owns the REX fund (required)"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"options",children:"Options"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"-h,--help"})," Print this help message and exit"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"-x,--expiration"})," ",(0,t.jsx)(s.em,{children:"TEXT"})," - set the time in seconds before a transaction expires, defaults to 30s"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"-f,--force-unique"})," - Force the transaction to be unique. this will consume extra bandwidth and remove any protections against accidently issuing the same transaction multiple times"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"-s,--skip-sign"})," Specify if unlocked wallet keys should be used to sign transaction"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"-d,--dont-broadcast"})," - Don't broadcast transaction to the network (just print to stdout)"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"-r,--ref-block"})," ",(0,t.jsx)(s.em,{children:"TEXT"})," - Set the reference block num or block id used for TAPOS (Transaction as Proof-of-Stake)"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"-p,--permission"}),"  ",(0,t.jsx)(s.em,{children:"TEXT"})," - An account and permission level to authorize, as in 'account@permission' (defaults to 'account@active')"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"--max-cpu-usage-ms"})," ",(0,t.jsx)(s.em,{children:"UINT"})," - Set an upper limit on the milliseconds of cpu usage budget, for the execution of the transaction (defaults to 0 which means no limit)"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"--max-net-usage"})," ",(0,t.jsx)(s.em,{children:"UINT"})," - Set an upper limit on the net usage budget, in bytes, for the transaction (defaults to 0 which means no limit)"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"--delay-sec"})," ",(0,t.jsx)(s.em,{children:"UINT"}),"            set the delay_sec seconds, defaults to 0s"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"-j,--json"})," print result as json"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sh",children:"clio system rex closerex accountname1\n"})})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>c,x:()=>r});var t=n(96540);const i={},o=t.createContext(i);function c(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);