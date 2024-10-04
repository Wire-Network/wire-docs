"use strict";(self.webpackChunkwire_docs=self.webpackChunkwire_docs||[]).push([[2773],{17394:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var o=n(74848),i=n(28453);const r={title:"Context-Free Data"},a=void 0,c={id:"api-reference/tooling/nodeop/concepts/context-free-data",title:"Context-Free Data",description:"Overview",source:"@site/docs/api-reference/tooling/nodeop/concepts/context-free-data.md",sourceDirName:"api-reference/tooling/nodeop/concepts",slug:"/api-reference/tooling/nodeop/concepts/context-free-data",permalink:"/docs/api-reference/tooling/nodeop/concepts/context-free-data",draft:!1,unlisted:!1,editUrl:"https://github.com/Wire-Network/wire-docs/edit/master/docs/api-reference/tooling/nodeop/concepts/context-free-data.md",tags:[],version:"current",frontMatter:{title:"Context-Free Data"},sidebar:"apiReferenceSidebar",previous:{title:"Nodeop Concepts",permalink:"/docs/api-reference/tooling/nodeop/concepts/"},next:{title:"Storage and Read Modes",permalink:"/docs/api-reference/tooling/nodeop/concepts/storage-and-read-modes"}},s={},l=[{value:"Overview",id:"overview",level:2},{value:"Concept",id:"concept",level:2},{value:"Pruning",id:"pruning",level:2},{value:"Pruning Support",id:"pruning-support",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,o.jsxs)(t.p,{children:["The immutable nature of the blockchain allows data to be stored securely while also enforcing the integrity of such data. However, this benefit also complicates the removal of non-essential data from the blockchain. Consequently, Wire blockchains contain a special section within the transaction, called the ",(0,o.jsx)(t.em,{children:"context-free data"}),". As its name implies, data stored in the context-free data section is considered free of previous contexts or dependencies, which makes their potential removal possible. More importantly, such removal can be performed safely without compromising the integrity of the blockchain."]}),"\n",(0,o.jsx)(t.admonition,{title:"Blockchain Integrity",type:"info",children:(0,o.jsx)(t.p,{children:"| Pruning of context-free data does not bend or relax the security of the blockchain. Nodes configured in full validation mode can still detect integrity violations on blocks with pruned transaction data."})}),"\n",(0,o.jsx)(t.h2,{id:"concept",children:"Concept"}),"\n",(0,o.jsx)(t.p,{children:"The goal of context-free data is to allow blockchain applications the option to store non-essential information within a transaction. Some examples of context-free data include:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Secondary blockchain data that is transient or temporary in nature"}),"\n",(0,o.jsx)(t.li,{children:"Short-term, non-critical data associated with a transaction message"}),"\n",(0,o.jsx)(t.li,{children:"User comments made to an online article stored on the blockchain"}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"In general, any data that is not vital for the operation and integrity of the blockchain may be stored as context-free data. It may also be used to comply with regional laws and regulations concerning data usage and personal information."}),"\n",(0,o.jsx)(t.h2,{id:"pruning",children:"Pruning"}),"\n",(0,o.jsxs)(t.p,{children:["Blockchain applications that use context-free data might also want to remove the contents without affecting blockchain integrity. This can be achieved through a process called ",(0,o.jsx)(t.em,{children:"pruning"}),". Removal of the context-free data associated with a transaction provides more functionality to blockchain applications, namely:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"A mechanism to delete transaction data free of any context or inter-dependencies."}),"\n",(0,o.jsx)(t.li,{children:"A way to maintain blockchain integrity while removing such context-free data."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Pruning of context-free data only allows light block validation between trusted nodes. Full block validation, which involves transaction signature verification and permission authorization checks, is not fully feasible without violating the integrity checks of blocks and transactions where the pruning occurred."}),"\n",(0,o.jsx)(t.admonition,{title:"Pruning on Private Blockchains",type:"note",children:(0,o.jsx)(t.p,{children:"| Private Wire blockchains can benefit the most from context-free data pruning. Their controlled environment allows for trusted nodes to operate in light validation mode. This allows blockchain applications to use private Wire blockchains for this powerful feature."})}),"\n",(0,o.jsx)(t.h3,{id:"pruning-support",children:"Pruning Support"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"nodeop"})," supports the pruning of context-free data by meeting the following requirements:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Correct handling of irreversible blocks with removed context-free data in pruned transactions"}),"\n",(0,o.jsx)(t.li,{children:"Efficient deletion of existing context-free data within arbitrary finalized transactions"}),"\n",(0,o.jsx)(t.li,{children:"Correct handling of transaction traces with removed context-free data generated by the state history plugin"}),"\n",(0,o.jsx)(t.li,{children:"Efficient deletion of existing context-free data within finalized transactions from the trace log used by the state history plugin"}),"\n",(0,o.jsx)(t.li,{children:"Peer-to-peer synchronization of blocks with removed context-free data from applicable transactions"}),"\n",(0,o.jsx)(t.li,{children:"Tool support for the actual CFD pruning within the irreversible blocks log and the state history plugin trace log"}),"\n"]}),"\n",(0,o.jsx)(t.admonition,{title:"Pruning Tool",type:"info",children:(0,o.jsxs)(t.p,{children:["| Node operators can perform the pruning of context-free data within a given transaction by using the ",(0,o.jsx)(t.a,{href:"/docs/api-reference/tooling/utilities/sysio-blocklog",children:(0,o.jsx)(t.code,{children:"sysio-blocklog"})})," utility. For instructions on using this tool for CFD pruning, see ",(0,o.jsx)(t.a,{href:"/docs/api-reference/tooling/nodeop/how-to/how-to-prune-context-free-data",children:"How to prune context-free data"}),"."]})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>c});var o=n(96540);const i={},r=o.createContext(i);function a(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);