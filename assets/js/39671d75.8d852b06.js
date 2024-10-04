"use strict";(self.webpackChunkwire_docs=self.webpackChunkwire_docs||[]).push([[4161],{55897:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var o=i(74848),p=i(28453);const r={},s=void 0,l={id:"api-reference/tooling/nodeop/plugins/producer-api-plugin",title:"producer-api-plugin",description:"Description",source:"@site/docs/api-reference/tooling/nodeop/plugins/producer-api-plugin.md",sourceDirName:"api-reference/tooling/nodeop/plugins",slug:"/api-reference/tooling/nodeop/plugins/producer-api-plugin",permalink:"/docs/api-reference/tooling/nodeop/plugins/producer-api-plugin",draft:!1,unlisted:!1,editUrl:"https://github.com/Wire-Network/wire-docs/edit/master/docs/api-reference/tooling/nodeop/plugins/producer-api-plugin.md",tags:[],version:"current",frontMatter:{},sidebar:"apiReferenceSidebar",previous:{title:"net-plugin",permalink:"/docs/api-reference/tooling/nodeop/plugins/net-plugin"},next:{title:"producer-plugin",permalink:"/docs/api-reference/tooling/nodeop/plugins/producer-plugin"}},c={},d=[{value:"Description",id:"description",level:2},{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Load Dependency Examples",id:"load-dependency-examples",level:3}];function t(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,p.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"producer_api_plugin"})," exposes a number of endpoints for the ",(0,o.jsx)(n.a,{href:"/docs/api-reference/tooling/nodeop/plugins/producer-plugin",children:(0,o.jsx)(n.code,{children:"producer_plugin"})})," to the RPC API interface managed by the ",(0,o.jsx)(n.a,{href:"/docs/api-reference/tooling/nodeop/plugins/http-plugin",children:(0,o.jsx)(n.code,{children:"http_plugin"})}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-console",children:"# config.ini\nplugin = sysio::producer_api_plugin\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"# nodeop startup params\nnodeop ... --plugin sysio::producer_api_plugin\n"})}),"\n",(0,o.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,o.jsx)(n.p,{children:"None"}),"\n",(0,o.jsx)(n.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/api-reference/tooling/nodeop/plugins/producer-plugin",children:(0,o.jsx)(n.code,{children:"producer_plugin"})})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/api-reference/tooling/nodeop/plugins/chain-plugin",children:(0,o.jsx)(n.code,{children:"chain_plugin"})})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/api-reference/tooling/nodeop/plugins/http-plugin",children:(0,o.jsx)(n.code,{children:"http_plugin"})})}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"load-dependency-examples",children:"Load Dependency Examples"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-console",children:"# config.ini\nplugin = sysio::producer_plugin\n[options]\nplugin = sysio::chain_plugin\n[options]\nplugin = sysio::http_plugin\n[options]\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"# command-line\nnodeop ... --plugin sysio::producer_plugin [options]  \\\n           --plugin sysio::chain_plugin [operations] [options]  \\\n           --plugin sysio::http_plugin [options]\n"})})]})}function u(e={}){const{wrapper:n}={...(0,p.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(t,{...e})}):t(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>l});var o=i(96540);const p={},r=o.createContext(p);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(p):e.components||p:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);