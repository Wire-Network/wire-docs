"use strict";(self.webpackChunkwire_docs=self.webpackChunkwire_docs||[]).push([[2904],{11075:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>d});var s=o(74848),i=o(28453);const c={title:"net disconnect"},t=void 0,r={id:"api-reference/tooling/clio/command-reference/net/disconnect",title:"net disconnect",description:"Command",source:"@site/docs/api-reference/tooling/clio/command-reference/net/disconnect.md",sourceDirName:"api-reference/tooling/clio/command-reference/net",slug:"/api-reference/tooling/clio/command-reference/net/disconnect",permalink:"/docs/api-reference/tooling/clio/command-reference/net/disconnect",draft:!1,unlisted:!1,editUrl:"https://github.com/Wire-Network/wire-docs/docs/api-reference/tooling/clio/command-reference/net/disconnect.md",tags:[],version:"current",frontMatter:{title:"net disconnect"},sidebar:"apiReferenceSidebar",previous:{title:"net connect",permalink:"/docs/api-reference/tooling/clio/command-reference/net/connect"},next:{title:"net peers",permalink:"/docs/api-reference/tooling/clio/command-reference/net/peers"}},l={},d=[{value:"Command",id:"command",level:2},{value:"Description",id:"description",level:2},{value:"Command Usage",id:"command-usage",level:2},{value:"Positionals",id:"positionals",level:3},{value:"Options",id:"options",level:3},{value:"Requirements",id:"requirements",level:2},{value:"Examples",id:"examples",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"command",children:"Command"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"clio net disconnect [OPTIONS] host\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Where:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["[OPTIONS] = See ",(0,s.jsx)(n.strong,{children:"Options"})," in the ",(0,s.jsx)(n.a,{href:"#command-usage",children:(0,s.jsx)(n.strong,{children:"Command Usage"})})," section below."]}),"\n",(0,s.jsxs)(n.li,{children:["host = The hostname",":port"," to disconnect from"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," The arguments and options enclosed in square brackets are optional."]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Close an existing connection to a specified peer. A node operator can use this command to instruct a node to disconnect from another peer without restarting the node."}),"\n",(0,s.jsx)(n.h2,{id:"command-usage",children:"Command Usage"}),"\n",(0,s.jsxs)(n.p,{children:["The following information shows the different positionals and options you can use with the ",(0,s.jsx)(n.code,{children:"clio net disconnect"})," command:"]}),"\n",(0,s.jsx)(n.h3,{id:"positionals",children:"Positionals"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"host"})," ",(0,s.jsx)(n.em,{children:"TEXT"})," REQUIRED - The hostname",":port"," to disconnect from"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-h,--help"})," - Print this help message and exit"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,s.jsx)(n.p,{children:"Make sure you meet the following requirements:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Install the currently supported version of ",(0,s.jsx)(n.code,{children:"clio"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["| The ",(0,s.jsx)(n.code,{children:"clio"})," tool is bundled with the Wire software. ",(0,s.jsx)(n.a,{href:"/docs/getting-started/install-dependencies",children:"Installing Wire core"})," will install the ",(0,s.jsx)(n.code,{children:"clio"})," and ",(0,s.jsx)(n.code,{children:"kiod"})," command line tools."]})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["You have access to a producing node instance with the ",(0,s.jsx)(n.a,{href:"/docs/api-reference/tooling/nodeop/plugins/net-api-plugin",children:(0,s.jsx)(n.code,{children:"net_api_plugin"})})," loaded."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(n.p,{children:["The following examples demonstrate how to use the ",(0,s.jsx)(n.code,{children:"clio net disconnect"})," command:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Instruct default local node (listening at default http address ",(0,s.jsx)(n.code,{children:"http://127.0.0.1:8888"}),") to disconnect from peer node listening at p2p address ",(0,s.jsx)(n.code,{children:"localhost:9002"}),":"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"clio net disconnect localhost:9002\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Output:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:'"connection removed"\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Instruct local node listening at http address ",(0,s.jsx)(n.code,{children:"http://127.0.0.1:8001"})," to disconnect from peer node listening at p2p address ",(0,s.jsx)(n.code,{children:"localhost:9002"}),":"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"clio -u http://127.0.0.1:8001 net disconnect localhost:9002\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Output:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:'"connection removed"\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," If any of the above commands are re-executed, ",(0,s.jsx)(n.code,{children:"clio"})," returns the following message as expected:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:'"no known connection for host"\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>t,x:()=>r});var s=o(96540);const i={},c=s.createContext(i);function t(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);