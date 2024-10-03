"use strict";(self.webpackChunkwire_docs=self.webpackChunkwire_docs||[]).push([[2308],{17003:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>l});var i=o(74848),c=o(28453);const t={},r=void 0,s={id:"api-reference/tooling/clio/usage/how-to-guides/how-to-connect-to-a-specific-network",title:"how-to-connect-to-a-specific-network",description:"Overview",source:"@site/docs/api-reference/tooling/clio/usage/how-to-guides/how-to-connect-to-a-specific-network.md",sourceDirName:"api-reference/tooling/clio/usage/how-to-guides",slug:"/api-reference/tooling/clio/usage/how-to-guides/how-to-connect-to-a-specific-network",permalink:"/docs/api-reference/tooling/clio/usage/how-to-guides/how-to-connect-to-a-specific-network",draft:!1,unlisted:!1,editUrl:"https://github.com/Wire-Network/wire-docs/docs/api-reference/tooling/clio/usage/how-to-guides/how-to-connect-to-a-specific-network.md",tags:[],version:"current",frontMatter:{}},d={},l=[{value:"Overview",id:"overview",level:2},{value:"Before you Begin",id:"before-you-begin",level:2},{value:"Reference",id:"reference",level:2},{value:"Example",id:"example",level:2},{value:"Summary",id:"summary",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(n.p,{children:["This guide provides instructions on how to connect to specifc Wire blockchain when using ",(0,i.jsx)(n.code,{children:"clio"}),". ",(0,i.jsx)(n.code,{children:"Clio"})," can connect to a specific node by using the ",(0,i.jsx)(n.code,{children:"--url"})," optional argument, followed by the http address and port number."]}),"\n",(0,i.jsxs)(n.p,{children:["The examples use the ",(0,i.jsx)(n.code,{children:"--url"}),"optional argument to send commands to the specified blockchain."]}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsxs)(n.mdxAdmonitionTitle,{children:["Default address",":port"]}),(0,i.jsxs)(n.p,{children:["| If no optional arguments are used (i.e. no ",(0,i.jsx)(n.code,{children:"--url"}),"), ",(0,i.jsx)(n.code,{children:"clio"})," attempts to connect to a local ",(0,i.jsx)(n.code,{children:"nodeop"})," running at localhost or ",(0,i.jsx)(n.code,{children:"127.0.0.1"})," and default port ",(0,i.jsx)(n.code,{children:"8888"}),". Use the ",(0,i.jsx)(n.code,{children:"nodeop"})," command line arguments or ",(0,i.jsx)(n.a,{href:"/docs/api-reference/tooling/nodeop/usage/nodeop-configuration",children:"config.ini"})," file to specify a different address."]})]}),"\n",(0,i.jsx)(n.h2,{id:"before-you-begin",children:"Before you Begin"}),"\n",(0,i.jsx)(n.p,{children:"Make sure you meet the following requirements:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Install the currently supported version of ",(0,i.jsx)(n.code,{children:"clio"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["| The ",(0,i.jsx)(n.code,{children:"clio"})," tool and ",(0,i.jsx)(n.code,{children:"kiod"})," are bundled with the Wire software. ",(0,i.jsx)(n.a,{href:"/docs/getting-started/install-dependencies",children:"Installing Wire core"})," will install the ",(0,i.jsx)(n.code,{children:"clio"})," and ",(0,i.jsx)(n.code,{children:"kiod"})," command line tools."]})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["You have access to an Wire blockchain and the http afddress and port number of a ",(0,i.jsx)(n.code,{children:"nodeop"})," instance."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"reference",children:"Reference"}),"\n",(0,i.jsx)(n.p,{children:"See the following reference guides for command line usage and related options:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/docs/api-reference/tooling/clio/command-reference/",children:"clio"})," command"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Add the ",(0,i.jsx)(n.code,{children:"-url"})," option to specify the ",(0,i.jsx)(n.code,{children:"nodeop"})," instance"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"clio -url http://nodeop-host:8888 COMMAND\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Where"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-url http://nodeop-host:8888"})," = The http address and port number of the ",(0,i.jsx)(n.code,{children:"nodeop"})," instance to connect to"]}),"\n",(0,i.jsxs)(n.li,{children:["COMMAND = The ",(0,i.jsx)(n.code,{children:"clio"}),"command."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,i.jsxs)(n.p,{children:["In conclusion, by following these instructions you are able to connect to a specified ",(0,i.jsx)(n.code,{children:"nodeop"})," instance."]})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>s});var i=o(96540);const c={},t=i.createContext(c);function r(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);