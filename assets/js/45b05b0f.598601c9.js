"use strict";(self.webpackChunkwire_docs=self.webpackChunkwire_docs||[]).push([[6827],{29602:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>r});var i=o(74848),c=o(28453);const t={},s=void 0,l={id:"api-reference/tooling/clio/usage/how-to-guides/how-to-connect-to-a-specific-kiod",title:"how-to-connect-to-a-specific-kiod",description:"Overview",source:"@site/docs/api-reference/tooling/clio/usage/how-to-guides/how-to-connect-to-a-specific-kiod.md",sourceDirName:"api-reference/tooling/clio/usage/how-to-guides",slug:"/api-reference/tooling/clio/usage/how-to-guides/how-to-connect-to-a-specific-kiod",permalink:"/docs/api-reference/tooling/clio/usage/how-to-guides/how-to-connect-to-a-specific-kiod",draft:!1,unlisted:!1,editUrl:"https://github.com/Wire-Network/wire-docs/docs/api-reference/tooling/clio/usage/how-to-guides/how-to-connect-to-a-specific-kiod.md",tags:[],version:"current",frontMatter:{}},d={},r=[{value:"Overview",id:"overview",level:2},{value:"Before you Begin",id:"before-you-begin",level:2},{value:"Reference",id:"reference",level:2},{value:"Example",id:"example",level:2},{value:"Summary",id:"summary",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(n.p,{children:["This guide provides instructions on how to connect to specifc wallet when using ",(0,i.jsx)(n.code,{children:"clio"}),". ",(0,i.jsx)(n.code,{children:"Clio"})," can connect to a specific wallet by using the ",(0,i.jsx)(n.code,{children:"--wallet-url"})," optional argument, followed by the http address and port number."]}),"\n",(0,i.jsxs)(n.p,{children:["The example uses the ",(0,i.jsx)(n.code,{children:"wallet-url"})," optional arguments to request data from the the specified ",(0,i.jsx)(n.code,{children:"kiod"})," instance."]}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsxs)(n.mdxAdmonitionTitle,{children:["Default address",":port"]}),(0,i.jsxs)(n.p,{children:["| If no optional arguments are used (i.e. no ",(0,i.jsx)(n.code,{children:"--wallet-url"}),"), ",(0,i.jsx)(n.code,{children:"clio"})," attempts to connect to a local ",(0,i.jsx)(n.code,{children:"nodeop"})," or ",(0,i.jsx)(n.code,{children:"kiod"})," running at localhost or ",(0,i.jsx)(n.code,{children:"127.0.0.1"})," and default port ",(0,i.jsx)(n.code,{children:"8900"}),". Use the ",(0,i.jsx)(n.code,{children:"kiod"})," command line arguments or ",(0,i.jsx)(n.a,{href:"/docs/api-reference/tooling/kiod/usage#launching-kiod-manually",children:"config.ini"})," file to specify a different address."]})]}),"\n",(0,i.jsx)(n.h2,{id:"before-you-begin",children:"Before you Begin"}),"\n",(0,i.jsx)(n.p,{children:"Make sure you meet the following requirements:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Install the currently supported version of ",(0,i.jsx)(n.code,{children:"clio"})," and ",(0,i.jsx)(n.code,{children:"kiod"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["| The ",(0,i.jsx)(n.code,{children:"clio"})," tool and ",(0,i.jsx)(n.code,{children:"kiod"})," are bundled with the Wire software. ",(0,i.jsx)(n.a,{href:"/docs/getting-started/install-dependencies",children:"Installing Wire core"})," will install the ",(0,i.jsx)(n.code,{children:"clio"})," and ",(0,i.jsx)(n.code,{children:"kiod"})," command line tools."]})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["You have access to an Wire blockchain and the http address and port number of a ",(0,i.jsx)(n.code,{children:"nodeop"})," instance."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"reference",children:"Reference"}),"\n",(0,i.jsx)(n.p,{children:"See the following reference guides for command line usage and related options:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/docs/api-reference/tooling/clio/command-reference/",children:"clio"})," command"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Add the ",(0,i.jsx)(n.code,{children:"--wallet-url"})," option to specify the ",(0,i.jsx)(n.code,{children:"kiod"})," instance"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"clio --wallet-url http://kiod-host:8900 COMMAND\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"where"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"--wallet-url http://kiod-host:8900"})," = The http address and port number of the ",(0,i.jsx)(n.code,{children:"kiod"})," instance to connect to"]}),"\n",(0,i.jsxs)(n.li,{children:["COMMAND = The ",(0,i.jsx)(n.code,{children:"clio"}),"command."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,i.jsxs)(n.p,{children:["In conclusion, by following these instructions you are able to connect to a specified ",(0,i.jsx)(n.code,{children:"kiod"})," instance."]})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>l});var i=o(96540);const c={},t=i.createContext(c);function s(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);