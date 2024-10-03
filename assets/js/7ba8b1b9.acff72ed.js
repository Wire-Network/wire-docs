"use strict";(self.webpackChunkwire_docs=self.webpackChunkwire_docs||[]).push([[8819],{95449:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var t=n(74848),r=n(28453);const i={title:"Replay or resync with full history"},s=void 0,l={id:"api-reference/tooling/nodeop/how-to/how-to-replay-or-resync-with-full-history",title:"Replay or resync with full history",description:"Goal",source:"@site/docs/api-reference/tooling/nodeop/how-to/how-to-replay-or-resync-with-full-history.md",sourceDirName:"api-reference/tooling/nodeop/how-to",slug:"/api-reference/tooling/nodeop/how-to/how-to-replay-or-resync-with-full-history",permalink:"/docs/api-reference/tooling/nodeop/how-to/how-to-replay-or-resync-with-full-history",draft:!1,unlisted:!1,editUrl:"https://github.com/Wire-Network/wire-docs/docs/api-reference/tooling/nodeop/how-to/how-to-replay-or-resync-with-full-history.md",tags:[],version:"current",frontMatter:{title:"Replay or resync with full history"},sidebar:"apiReferenceSidebar",previous:{title:"Replay from a snapshot",permalink:"/docs/api-reference/tooling/nodeop/how-to/how-to-replay-from-a-snapshot"},next:{title:"Restore snapshot with full state history",permalink:"/docs/api-reference/tooling/nodeop/how-to/how-to-restore-snapshot-with-full-history"}},c={},a=[{value:"Goal",id:"goal",level:2},{value:"Before you begin",id:"before-you-begin",level:2},{value:"Steps",id:"steps",level:2}];function h(e){const o={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h2,{id:"goal",children:"Goal"}),"\n",(0,t.jsx)(o.p,{children:"This procedure records the entire chain history."}),"\n",(0,t.jsx)(o.h2,{id:"before-you-begin",children:"Before you begin"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:["Make sure ",(0,t.jsx)(o.a,{href:"/docs/getting-started/install-dependencies",children:"Wire core"})," is installed."]}),"\n",(0,t.jsxs)(o.li,{children:["Learn about ",(0,t.jsx)(o.a,{href:"/docs/api-reference/tooling/nodeop/usage/",children:"Using Nodeop"}),"."]}),"\n",(0,t.jsxs)(o.li,{children:["Get familiar with ",(0,t.jsx)(o.a,{href:"/docs/api-reference/tooling/nodeop/plugins/state-history-plugin",children:"state_history_plugin"}),"."]}),"\n"]}),"\n",(0,t.jsx)(o.h2,{id:"steps",children:"Steps"}),"\n",(0,t.jsxs)(o.ol,{children:["\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsxs)(o.p,{children:["Get a block log and place it in ",(0,t.jsx)(o.code,{children:"data/blocks"}),", or get a genesis file and use the ",(0,t.jsx)(o.code,{children:"--genesis-json"})," option"]}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsxs)(o.p,{children:["Make sure ",(0,t.jsx)(o.code,{children:"data/state"})," does not exist, or use the ",(0,t.jsx)(o.code,{children:"--replay-blockchain"})," option"]}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsxs)(o.p,{children:["Start ",(0,t.jsx)(o.code,{children:"nodeop"})," with the options listed in the ",(0,t.jsx)(o.a,{href:"/docs/api-reference/tooling/nodeop/plugins/state-history-plugin",children:(0,t.jsx)(o.code,{children:"state_history_plugin"})})]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,o,n)=>{n.d(o,{R:()=>s,x:()=>l});var t=n(96540);const r={},i=t.createContext(r);function s(e){const o=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(i.Provider,{value:o},e.children)}}}]);