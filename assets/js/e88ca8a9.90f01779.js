"use strict";(self.webpackChunkwire_docs=self.webpackChunkwire_docs||[]).push([[3290],{62249:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var t=l(74848),o=l(28453);const i={},s=void 0,r={id:"api-reference/tooling/clio/how-to-guides/how-to-create-a-wallet",title:"how-to-create-a-wallet",description:"Goal",source:"@site/docs/api-reference/tooling/clio/how-to-guides/how-to-create-a-wallet.md",sourceDirName:"api-reference/tooling/clio/how-to-guides",slug:"/api-reference/tooling/clio/how-to-guides/how-to-create-a-wallet",permalink:"/wire-docs/docs/api-reference/tooling/clio/how-to-guides/how-to-create-a-wallet",draft:!1,unlisted:!1,editUrl:"https://github.com/Wire-Network/wire-docs/docs/api-reference/tooling/clio/how-to-guides/how-to-create-a-wallet.md",tags:[],version:"current",frontMatter:{}},a={},c=[{value:"Goal",id:"goal",level:2},{value:"Before you begin",id:"before-you-begin",level:2},{value:"Steps",id:"steps",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"goal",children:"Goal"}),"\n",(0,t.jsxs)(n.p,{children:["Create a wallet using ",(0,t.jsx)(n.code,{children:"kiod"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"before-you-begin",children:"Before you begin"}),"\n",(0,t.jsx)(n.p,{children:"Make sure you meet the following requirements:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Familiarize with the ",(0,t.jsx)(n.a,{href:"/wire-docs/docs/api-reference/tooling/clio/command-reference/wallet/create",children:(0,t.jsx)(n.code,{children:"clio wallet create"})})," command and its parameters."]}),"\n",(0,t.jsxs)(n.li,{children:["Familiarize with the other ",(0,t.jsx)(n.a,{href:"/wire-docs/docs/api-reference/tooling/clio/command-reference/wallet/",children:(0,t.jsx)(n.code,{children:"clio wallet"})})," commands."]}),"\n",(0,t.jsxs)(n.li,{children:["Install the currently supported version of ",(0,t.jsx)(n.code,{children:"clio"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["| The ",(0,t.jsx)(n.code,{children:"clio"})," tool and ",(0,t.jsx)(n.code,{children:"kiod"})," are bundled with the Wire software. ",(0,t.jsx)(n.a,{href:"/wire-docs/docs/getting-started/install-dependencies",children:"Installing Wire core"})," will install the ",(0,t.jsx)(n.code,{children:"clio"})," and ",(0,t.jsx)(n.code,{children:"kiod"})," command line tools."]})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Understand what an ",(0,t.jsx)(n.a,{href:"/wire-docs/docs/introduction/glossary#account",children:"account"})," is and its role in the blockchain."]}),"\n",(0,t.jsx)(n.li,{children:"Understand Accounts and Permissions in the protocol documents."}),"\n",(0,t.jsxs)(n.li,{children:["Understand what a ",(0,t.jsx)(n.a,{href:"/wire-docs/docs/introduction/glossary#public-key",children:"public"})," and ",(0,t.jsx)(n.a,{href:"/wire-docs/docs/introduction/glossary#private-key",children:"private"})," key pair is."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"steps",children:"Steps"}),"\n",(0,t.jsx)(n.p,{children:"Perform the step below:"}),"\n",(0,t.jsx)(n.p,{children:"Create a default or named wallet and save the wallet password to a file:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"clio wallet create [-n named_wallet] -f <file_to_save_pwd>\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Where ",(0,t.jsx)(n.code,{children:"file_to_save_pwd"})," is the name of the file to write the wallet password to and ",(0,t.jsx)(n.code,{children:"named_wallet"})," is an optional parameter to assign a name to the wallet."]}),"\n",(0,t.jsx)(n.p,{children:"Some examples are provided below:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Create a default wallet and save the password to the file ",(0,t.jsx)(n.code,{children:"default_wallet.pwd"}),":"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example Output"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"clio wallet create -f default_wallet.pwd\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"Creating wallet: default\nSave password to use in the future to unlock this wallet.\nWithout password imported keys will not be retrievable.\nsaving password to default_wallet.pwd\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Create a named wallet ",(0,t.jsx)(n.code,{children:"my_wallet"})," and save the password to the file ",(0,t.jsx)(n.code,{children:"my_wallet.pwd"}),":"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example Output"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"clio wallet create -n my_wallet -f my_wallet.pwd\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"Creating wallet: my_wallet\nSave password to use in the future to unlock this wallet.\nWithout password imported keys will not be retrievable.\nsaving password to my_wallet.pwd\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,l)=>{l.d(n,{R:()=>s,x:()=>r});var t=l(96540);const o={},i=t.createContext(o);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);