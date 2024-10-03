"use strict";(self.webpackChunkwire_docs=self.webpackChunkwire_docs||[]).push([[4121],{48871:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>t,toc:()=>d});var i=s(74848),r=s(28453);const c={title:"system buyram"},o=void 0,t={id:"api-reference/tooling/clio/command-reference/system/system-buyram",title:"system buyram",description:"Command",source:"@site/docs/api-reference/tooling/clio/command-reference/system/system-buyram.md",sourceDirName:"api-reference/tooling/clio/command-reference/system",slug:"/api-reference/tooling/clio/command-reference/system/system-buyram",permalink:"/docs/api-reference/tooling/clio/command-reference/system/system-buyram",draft:!1,unlisted:!1,editUrl:"https://github.com/Wire-Network/wire-docs/docs/api-reference/tooling/clio/command-reference/system/system-buyram.md",tags:[],version:"current",frontMatter:{title:"system buyram"},sidebar:"apiReferenceSidebar",previous:{title:"system bidnameinfo",permalink:"/docs/api-reference/tooling/clio/command-reference/system/system-bidnameinfo"},next:{title:"system canceldelay",permalink:"/docs/api-reference/tooling/clio/command-reference/system/system-canceldelay"}},l={},d=[{value:"Command",id:"command",level:2},{value:"Description",id:"description",level:2},{value:"Command Usage",id:"command-usage",level:2},{value:"Positionals",id:"positionals",level:3},{value:"Options",id:"options",level:3},{value:"Requirements",id:"requirements",level:2}];function a(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"command",children:"Command"}),"\n",(0,i.jsx)(n.p,{children:"clio system buyram [OPTIONS] payer receiver amount"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Where"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["[OPTIONS] = See Options in  ",(0,i.jsx)(n.a,{href:"#command-usage",children:"Command Usage"})," section below."]}),"\n",(0,i.jsx)(n.li,{children:"payer = The account paying for RAM."}),"\n",(0,i.jsx)(n.li,{children:"receiver = The account receiving bought RAM."}),"\n",(0,i.jsx)(n.li,{children:"amount = The amount of EOS to pay for RAM"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note"}),": The arguments and options enclosed in square brackets are optional."]}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Use this command to buy RAM for a blockchain account on EOSIO."}),"\n",(0,i.jsx)(n.h2,{id:"command-usage",children:"Command Usage"}),"\n",(0,i.jsxs)(n.p,{children:["The following information shows the different positionals and options you can use with the ",(0,i.jsx)(n.code,{children:"clio system buyram"})," command:"]}),"\n",(0,i.jsx)(n.h3,{id:"positionals",children:"Positionals"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"payer"})," ",(0,i.jsx)(n.em,{children:"TEXT"})," - The account paying for RAM"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"receiver"})," ",(0,i.jsx)(n.em,{children:"TEXT"})," - The account receiving bought RAM"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"amount"})," ",(0,i.jsx)(n.em,{children:"TEXT"})," - The amount of EOS to pay for RAM"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"-h,--help"})," - Print this help message and exit"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"-k,--kbytes"})," - Buyram in number of kibibytes (KiB)"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"-b,--bytes"})," - Buyram in number of bytes"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"-x,--expiration"})," ",(0,i.jsx)(n.em,{children:"TEXT"})," - Set the time in seconds before a transaction expires, defaults to 30s"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"-f,--force-unique"})," - Force the transaction to be unique. This will consume extra bandwidth and remove any protections against accidently issuing the same transaction multiple times"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"-s,--skip-sign"})," - Specify if unlocked wallet keys should be used to sign transaction"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"-j,--json"})," - Print result as json"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"--json-file"})," ",(0,i.jsx)(n.em,{children:"TEXT"})," - save result in json format into a file"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"-d,--dont-broadcast"})," - Don't broadcast transaction to the network (just print to stdout)"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"--return-packed"})," - Used in conjunction with --dont-broadcast to get the packed transaction"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"-r,--ref-block"})," ",(0,i.jsx)(n.em,{children:"TEXT"})," - Set the reference block num or block id used for TAPOS (Transaction as Proof-of-Stake)"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"--use-old-rpc"})," - Use old RPC push_transaction, rather than new RPC send_transaction"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"-p,--permission"})," ",(0,i.jsx)(n.em,{children:"TEXT"})," - An account and permission level to authorize, as in 'account@permission' (defaults to 'account@active')"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"--max-cpu-usage-ms"})," ",(0,i.jsx)(n.em,{children:"UINT"})," - Set an upper limit on the milliseconds of cpu usage budget, for the execution of the transaction (defaults to 0 which means no limit)"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"--max-net-usage"})," ",(0,i.jsx)(n.em,{children:"UINT"})," - Set an upper limit on the net usage budget, in bytes, for the transaction (defaults to 0 which means no limit)"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"--delay-sec"})," ",(0,i.jsx)(n.em,{children:"UINT"})," - Set the delay_sec seconds, defaults to 0s"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"requirements",children:"Requirements"})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>t});var i=s(96540);const r={},c=i.createContext(r);function o(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);