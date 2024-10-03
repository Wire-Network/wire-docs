"use strict";(self.webpackChunkwire_docs=self.webpackChunkwire_docs||[]).push([[316],{96106:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var n=t(74848),s=t(28453);const i={title:"Create a snapshot with full state history"},r=void 0,l={id:"api-reference/tooling/nodeop/how-to/how-to-create-snapshot-with-full-history",title:"Create a snapshot with full state history",description:"Goal",source:"@site/docs/api-reference/tooling/nodeop/how-to/how-to-create-snapshot-with-full-history.md",sourceDirName:"api-reference/tooling/nodeop/how-to",slug:"/api-reference/tooling/nodeop/how-to/how-to-create-snapshot-with-full-history",permalink:"/wire-docs/docs/api-reference/tooling/nodeop/how-to/how-to-create-snapshot-with-full-history",draft:!1,unlisted:!1,editUrl:"https://github.com/Wire-Network/wire-docs/docs/api-reference/tooling/nodeop/how-to/how-to-create-snapshot-with-full-history.md",tags:[],version:"current",frontMatter:{title:"Create a snapshot with full state history"},sidebar:"apiReferenceSidebar",previous:{title:"Configure state storage",permalink:"/wire-docs/docs/api-reference/tooling/nodeop/how-to/how-to-configure-state-storage"},next:{title:"Fast start without previous history",permalink:"/wire-docs/docs/api-reference/tooling/nodeop/how-to/how-to-fast-start-without-old-history"}},c={},a=[{value:"Goal",id:"goal",level:2},{value:"Before you begin",id:"before-you-begin",level:2},{value:"Steps",id:"steps",level:2}];function h(e){const o={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h2,{id:"goal",children:"Goal"}),"\n",(0,n.jsx)(o.p,{children:"This procedure creates a database containing the chain state, with full history since genesis state."}),"\n",(0,n.jsx)(o.h2,{id:"before-you-begin",children:"Before you begin"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["Make sure ",(0,n.jsx)(o.a,{href:"/wire-docs/docs/getting-started/install-dependencies",children:"Wire core"})," is installed."]}),"\n",(0,n.jsxs)(o.li,{children:["Learn about ",(0,n.jsx)(o.a,{href:"/wire-docs/docs/api-reference/tooling/nodeop/usage/",children:"Using Nodeop"}),"."]}),"\n",(0,n.jsxs)(o.li,{children:["Get familiar with ",(0,n.jsx)(o.a,{href:"/wire-docs/docs/api-reference/tooling/nodeop/plugins/state-history-plugin",children:"state_history_plugin"}),"."]}),"\n"]}),"\n",(0,n.jsx)(o.h2,{id:"steps",children:"Steps"}),"\n",(0,n.jsxs)(o.ol,{children:["\n",(0,n.jsxs)(o.li,{children:["Enable the ",(0,n.jsx)(o.code,{children:"producer_api_plugin"})," on a node with full state-history."]}),"\n"]}),"\n",(0,n.jsxs)(o.p,{children:["[[caution | Caution when using ",(0,n.jsx)(o.code,{children:"producer_api_plugin"}),"]]\n| Either use a firewall to block access to ",(0,n.jsx)(o.code,{children:"http-server-address"}),", or change it to ",(0,n.jsx)(o.code,{children:"localhost:8888"})," to disable remote access."]}),"\n",(0,n.jsxs)(o.ol,{children:["\n",(0,n.jsx)(o.li,{children:"Create a portable snapshot:"}),"\n"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-sh",children:"curl http://127.0.0.1:8888/v1/producer/create_snapshot | json_pp\n"})}),"\n",(0,n.jsxs)(o.ol,{children:["\n",(0,n.jsxs)(o.li,{children:["Wait for ",(0,n.jsx)(o.code,{children:"nodeop"})," to process several blocks after the snapshot completed. The goal is for the state-history files to contain at least 1 more block than the portable snapshot has, and for the ",(0,n.jsx)(o.code,{children:"blocks.log"})," file to contain the block after it has become irreversible."]}),"\n"]}),"\n",(0,n.jsx)(o.admonition,{type:"info",children:(0,n.jsx)(o.p,{children:"| If the block included in the portable snapshot is forked out, then the snapshot will be invalid. Repeat this process if this happens."})}),"\n",(0,n.jsxs)(o.ol,{children:["\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsxs)(o.p,{children:["Stop ",(0,n.jsx)(o.code,{children:"nodeop"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsx)(o.p,{children:"Make backups of:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["The newly-created portable snapshot (",(0,n.jsx)(o.code,{children:"data/snapshots/snapshot-xxxxxxx.bin"}),")"]}),"\n",(0,n.jsxs)(o.li,{children:["The contents of ",(0,n.jsx)(o.code,{children:"data/state-history"}),":","\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:(0,n.jsx)(o.code,{children:"chain_state_history.log"})}),"\n",(0,n.jsx)(o.li,{children:(0,n.jsx)(o.code,{children:"trace_history.log"})}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"chain_state_history.index"}),": optional. Restoring will take longer without this file."]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"trace_history.index"}),": optional. Restoring will take longer without this file."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["Optional: the contents of ",(0,n.jsx)(o.code,{children:"data/blocks"}),", but excluding ",(0,n.jsx)(o.code,{children:"data/blocks/reversible"}),"."]}),"\n"]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,o,t)=>{t.d(o,{R:()=>r,x:()=>l});var n=t(96540);const s={},i=n.createContext(s);function r(e){const o=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(i.Provider,{value:o},e.children)}}}]);