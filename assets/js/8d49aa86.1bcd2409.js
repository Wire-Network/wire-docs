"use strict";(self.webpackChunkwire_docs=self.webpackChunkwire_docs||[]).push([[5550],{45105:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>p,contentTitle:()=>t,default:()=>a,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var o=i(74848),s=i(28453);const l={},t=void 0,r={id:"api-reference/tooling/nodeop/plugins/history-api-plugin",title:"history-api-plugin",description:"| The historyplugin that the historyapiplugin depends upon is deprecated and will no longer be maintained. Please use the statehistoryplugin or the traceapi_plugin instead.",source:"@site/docs/api-reference/tooling/nodeop/plugins/history-api-plugin.md",sourceDirName:"api-reference/tooling/nodeop/plugins",slug:"/api-reference/tooling/nodeop/plugins/history-api-plugin",permalink:"/docs/api-reference/tooling/nodeop/plugins/history-api-plugin",draft:!1,unlisted:!1,editUrl:"https://github.com/Wire-Network/wire-docs/docs/api-reference/tooling/nodeop/plugins/history-api-plugin.md",tags:[],version:"current",frontMatter:{},sidebar:"apiReferenceSidebar",previous:{title:"db-size-api-plugin",permalink:"/docs/api-reference/tooling/nodeop/plugins/db-size-api-plugin"},next:{title:"history-plugin",permalink:"/docs/api-reference/tooling/nodeop/plugins/history-plugin"}},p={},c=[{value:"Description",id:"description",level:2},{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Load Dependency Examples",id:"load-dependency-examples",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsxs)(n.p,{children:["| The ",(0,o.jsx)(n.code,{children:"history_plugin"})," that the ",(0,o.jsx)(n.code,{children:"history_api_plugin"})," depends upon is deprecated and will no longer be maintained. Please use the ",(0,o.jsx)(n.a,{href:"/docs/api-reference/tooling/nodeop/plugins/state-history-plugin",children:(0,o.jsx)(n.code,{children:"state_history_plugin"})})," or the ",(0,o.jsx)(n.a,{href:"/docs/api-reference/tooling/nodeop/plugins/trace-api-plugin",children:(0,o.jsx)(n.code,{children:"trace_api_plugin"})})," instead."]})}),"\n",(0,o.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"history_api_plugin"})," exposes functionality from the ",(0,o.jsx)(n.a,{href:"/docs/api-reference/tooling/nodeop/plugins/history-plugin",children:(0,o.jsx)(n.code,{children:"history_plugin"})})," to the RPC API interface managed by the ",(0,o.jsx)(n.a,{href:"/docs/api-reference/tooling/nodeop/plugins/http-plugin",children:(0,o.jsx)(n.code,{children:"http_plugin"})}),", providing read-only access to blockchain data."]}),"\n",(0,o.jsx)(n.p,{children:"It provides four RPC API endpoints:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"get_actions"}),"\n",(0,o.jsx)(n.li,{children:"get_transaction"}),"\n",(0,o.jsx)(n.li,{children:"get_key_accounts"}),"\n",(0,o.jsx)(n.li,{children:"get_controlled_accounts"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["The four actions listed above are used by the following ",(0,o.jsx)(n.code,{children:"clio"})," commands (matching order):"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"get actions"}),"\n",(0,o.jsx)(n.li,{children:"get transaction"}),"\n",(0,o.jsx)(n.li,{children:"get accounts"}),"\n",(0,o.jsx)(n.li,{children:"get servants"}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-console",children:"# config.ini\nplugin = sysio::history_api_plugin\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"# command-line\nnodeop ... --plugin sysio::history_api_plugin\n"})}),"\n",(0,o.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,o.jsx)(n.p,{children:"None"}),"\n",(0,o.jsx)(n.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/api-reference/tooling/nodeop/plugins/history-plugin",children:(0,o.jsx)(n.code,{children:"history_plugin"})})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/api-reference/tooling/nodeop/plugins/chain-plugin",children:(0,o.jsx)(n.code,{children:"chain_plugin"})})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/api-reference/tooling/nodeop/plugins/http-plugin",children:(0,o.jsx)(n.code,{children:"http_plugin"})})}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"load-dependency-examples",children:"Load Dependency Examples"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-console",children:"# config.ini\nplugin = sysio::history_plugin\n[options]\nplugin = sysio::chain_plugin\n[options]\nplugin = sysio::http_plugin\n[options]\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"# command-line\nnodeop ... --plugin sysio::history_plugin [options]  \\\n           --plugin sysio::chain_plugin [operations] [options]  \\\n           --plugin sysio::http_plugin [options]\n"})})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>r});var o=i(96540);const s={},l=o.createContext(s);function t(e){const n=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),o.createElement(l.Provider,{value:n},e.children)}}}]);