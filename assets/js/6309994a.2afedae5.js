"use strict";(self.webpackChunkwire_docs=self.webpackChunkwire_docs||[]).push([[9916],{47617:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var n=i(74848),o=i(28453);const s={sidebar_position:1,id:"getting-started-intro",sidebar_label:"Getting Started",tags:["wire-sysio","wire-cdt","nodeop","clio","kiod"]},r="Basic Components",a={id:"getting-started/getting-started-intro",title:"Basic Components",description:"Wire Network blockchain platform comes with various components and tooling. See the table below for a brief explanation of each component.",source:"@site/docs/getting-started/getting-started-intro.md",sourceDirName:"getting-started",slug:"/getting-started/getting-started-intro",permalink:"/wire-docs/docs/getting-started/getting-started-intro",draft:!1,unlisted:!1,editUrl:"https://github.com/Wire-Network/wire-docs/docs/getting-started/getting-started-intro.md",tags:[{inline:!0,label:"wire-sysio",permalink:"/wire-docs/docs/tags/wire-sysio"},{inline:!0,label:"wire-cdt",permalink:"/wire-docs/docs/tags/wire-cdt"},{inline:!0,label:"nodeop",permalink:"/wire-docs/docs/tags/nodeop"},{inline:!0,label:"clio",permalink:"/wire-docs/docs/tags/clio"},{inline:!0,label:"kiod",permalink:"/wire-docs/docs/tags/kiod"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"getting-started-intro",sidebar_label:"Getting Started",tags:["wire-sysio","wire-cdt","nodeop","clio","kiod"]},sidebar:"contentSidebar",previous:{title:"Glossary",permalink:"/wire-docs/docs/introduction/glossary"},next:{title:"Install Dependencies",permalink:"/wire-docs/docs/getting-started/install-dependencies"}},c={},d=[{value:"Reference",id:"reference",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",mermaid:"mermaid",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"basic-components",children:"Basic Components"})}),"\n",(0,n.jsx)(t.p,{children:"Wire Network blockchain platform comes with various components and tooling. See the table below for a brief explanation of each component."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Function"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"nodeop"})}),(0,n.jsxs)(t.td,{children:["nodeop is the ",(0,n.jsx)(t.strong,{children:"core service daemon"})," that runs on every Wire node, responsible for processing smart contracts, validating transactions, producing blocks containing valid transactions, and confirming blocks to record them on the blockchain. It can be configured with various plugins to suit specific needs, including block production, dedicated API endpoints, and local development environments. As the main component of Wire, nodeop ensures efficient and secure operation of the blockchain network by leveraging its capabilities for transaction validation, smart contract processing, and block confirmation."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"kiod"})}),(0,n.jsxs)(t.td,{children:["kiod is the ",(0,n.jsx)(t.strong,{children:"key manager service daemon"})," that securely stores private keys and signs digital messages. It ensures that keys are encrypted at rest in the associated wallet file and provides a secure enclave for signing transactions created by ",(0,n.jsx)(t.code,{children:"clio"})," or third-party libraries."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"clio"})}),(0,n.jsx)(t.td,{children:"clio is a CLI that interfaces with the REST API exposed by nodeop. It also allows developers to deploy and test Wire smart contracts."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"CDT"})}),(0,n.jsx)(t.td,{children:"The Contract Development Toolkit is a C/C++ toolchain targeting WebAssembly (WASM) and a set of tools to facilitate development and deployment of smart contracts written in C/C++. In addition to being a general-purpose WebAssembly toolchain, Wire-specific optimizations are available to support building Wire smart contracts. This new toolchain is built around Clang 7, which means that CDT has most of the current optimizations and analyses from LLVM."})]})]})]}),"\n",(0,n.jsx)(t.p,{children:"The basic relationship between these components is illustrated in the following diagram:"}),"\n",(0,n.jsx)(t.mermaid,{value:'flowchart LR\n    A[["Smart Contract Code"]] --\x3e B(("CDT"))\n    B --\x3e C["clio"]\n    C --\x3e D["nodeop"]\n    C --\x3e E["kiod"]\n    E --\x3e C\n    D --\x3e F[("Wire Blockchain")]'}),"\n",(0,n.jsx)(t.h2,{id:"reference",children:"Reference"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/wire-docs/docs/api-reference/tooling/nodeop/",children:"nodeop"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/wire-docs/docs/api-reference/tooling/clio/",children:"clio"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/wire-docs/docs/api-reference/tooling/kiod/",children:"kiod"})}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{title:"NOTE",type:"info",children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"kiod"})," can be accessed using the Wallet API, but it is important to note that the intended usage is for local light client applications. kiod is not for cross network access by web applications trying to access users' wallets."]})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/wire-docs/docs/api-reference/tooling/cdt/",children:"CDT Contract Development Kit"})}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{title:"NOTE",type:"info",children:(0,n.jsxs)(t.p,{children:["Wire also provides a collection of JavaScript libraries published under ",(0,n.jsx)(t.a,{href:"https://www.npmjs.com/org/wireio",children:"@wireio npm org"}),"."]})})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>a});var n=i(96540);const o={},s=n.createContext(o);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);