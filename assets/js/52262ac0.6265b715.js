"use strict";(self.webpackChunkwire_docs=self.webpackChunkwire_docs||[]).push([[8052],{98036:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>a,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var o=i(74848),s=i(28453);const l={},t=void 0,p={id:"api-reference/tooling/nodeop/plugins/net-api-plugin",title:"net-api-plugin",description:"Description",source:"@site/docs/api-reference/tooling/nodeop/plugins/net-api-plugin.md",sourceDirName:"api-reference/tooling/nodeop/plugins",slug:"/api-reference/tooling/nodeop/plugins/net-api-plugin",permalink:"/docs/api-reference/tooling/nodeop/plugins/net-api-plugin",draft:!1,unlisted:!1,editUrl:"https://github.com/Wire-Network/wire-docs/docs/api-reference/tooling/nodeop/plugins/net-api-plugin.md",tags:[],version:"current",frontMatter:{},sidebar:"apiReferenceSidebar",previous:{title:"login-plugin",permalink:"/docs/api-reference/tooling/nodeop/plugins/login-plugin"},next:{title:"net-plugin",permalink:"/docs/api-reference/tooling/nodeop/plugins/net-plugin"}},c={},d=[{value:"Description",id:"description",level:2},{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Load Dependency Examples",id:"load-dependency-examples",level:3}];function r(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"net_api_plugin"})," exposes functionality from the ",(0,o.jsx)(n.code,{children:"net_plugin"})," to the RPC API interface managed by the ",(0,o.jsx)(n.code,{children:"http_plugin"}),". Node operators can use the ",(0,o.jsx)(n.code,{children:"net_api_plugin"})," to manage the p2p connections of an active node."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"net_api_plugin"})," provides four RPC API endpoints:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"connect"}),"\n",(0,o.jsx)(n.li,{children:"disconnect"}),"\n",(0,o.jsx)(n.li,{children:"connections"}),"\n",(0,o.jsx)(n.li,{children:"status"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["See ",(0,o.jsx)(n.a,{href:"https://developers.eos.io/manuals/eos/latest/nodeop/plugins/net_api_plugin/api-reference/index",children:"Net API Reference Documentation"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"[[caution | Caution]]\n| This plugin exposes endpoints that allow management of p2p connections. Running this plugin on a publicly accessible node is not recommended as it can be exploited."}),"\n",(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-console",children:"# config.ini\nplugin = sysio::net_api_plugin\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"# command-line\nnodeop ... --plugin sysio::net_api_plugin\n"})}),"\n",(0,o.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,o.jsx)(n.p,{children:"None"}),"\n",(0,o.jsx)(n.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/api-reference/tooling/nodeop/plugins/net-plugin",children:(0,o.jsx)(n.code,{children:"net_plugin"})})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/api-reference/tooling/nodeop/plugins/http-plugin",children:(0,o.jsx)(n.code,{children:"http_plugin"})})}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"load-dependency-examples",children:"Load Dependency Examples"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-console",children:"# config.ini\nplugin = sysio::net_plugin\n[options]\nplugin = sysio::http_plugin\n[options]\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"# command-line\nnodeop ... --plugin sysio::net_plugin [options]  \\\n           --plugin sysio::http_plugin [options]\n"})})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>p});var o=i(96540);const s={},l=o.createContext(s);function t(e){const n=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function p(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),o.createElement(l.Provider,{value:n},e.children)}}}]);