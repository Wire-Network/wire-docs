"use strict";(self.webpackChunkwire_docs=self.webpackChunkwire_docs||[]).push([[5168],{67097:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>p,default:()=>a,frontMatter:()=>s,metadata:()=>c,toc:()=>r});var o=i(74848),l=i(28453);const s={},p=void 0,c={id:"api-reference/tooling/nodeop/plugins/login-plugin",title:"login-plugin",description:"Description",source:"@site/docs/api-reference/tooling/nodeop/plugins/login-plugin.md",sourceDirName:"api-reference/tooling/nodeop/plugins",slug:"/api-reference/tooling/nodeop/plugins/login-plugin",permalink:"/docs/api-reference/tooling/nodeop/plugins/login-plugin",draft:!1,unlisted:!1,editUrl:"https://github.com/Wire-Network/wire-docs/docs/api-reference/tooling/nodeop/plugins/login-plugin.md",tags:[],version:"current",frontMatter:{},sidebar:"apiReferenceSidebar",previous:{title:"http-plugin",permalink:"/docs/api-reference/tooling/nodeop/plugins/http-plugin"},next:{title:"net-api-plugin",permalink:"/docs/api-reference/tooling/nodeop/plugins/net-api-plugin"}},t={},r=[{value:"Description",id:"description",level:2},{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Load Dependency Examples",id:"load-dependency-examples",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"login_plugin"})," supports the concept of applications authenticating with the Wire blockchain. The ",(0,o.jsx)(n.code,{children:"login_plugin"})," API allows an application to verify whether an account is allowed to sign in order to satisfy a specified authority."]}),"\n",(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-console",children:"# config.ini\nplugin = sysio::login_plugin\n[options]\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"# command-line\nnodeop ... --plugin sysio::login_plugin [options]\n"})}),"\n",(0,o.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,o.jsxs)(n.p,{children:["These can be specified from both the ",(0,o.jsx)(n.code,{children:"nodeop"})," command-line or the ",(0,o.jsx)(n.code,{children:"config.ini"})," file:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-console",children:"Config Options for sysio::login_plugin:\n  --max-login-requests arg (=1000000)   The maximum number of pending login \n                                        requests\n  --max-login-timeout arg (=60)         The maximum timeout for pending login \n                                        requests (in seconds)\n"})}),"\n",(0,o.jsx)(n.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/api-reference/tooling/nodeop/plugins/chain-plugin",children:(0,o.jsx)(n.code,{children:"chain_plugin"})})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/api-reference/tooling/nodeop/plugins/http-plugin",children:(0,o.jsx)(n.code,{children:"http_plugin"})})}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"load-dependency-examples",children:"Load Dependency Examples"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-console",children:"# config.ini\nplugin = sysio::chain_plugin\n[options]\nplugin = sysio::http_plugin \n[options]\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"# command-line\nnodeop ... --plugin sysio::chain_plugin [options]  \\\n           --plugin sysio::http_plugin [options]\n"})})]})}function a(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>p,x:()=>c});var o=i(96540);const l={},s=o.createContext(l);function p(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:p(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);