"use strict";(self.webpackChunkwire_docs=self.webpackChunkwire_docs||[]).push([[2170],{64819:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var t=o(74848),c=o(28453);const i={},r=void 0,s={id:"api-reference/tooling/clio/usage/how-to-guides/how-to-create-an-account",title:"how-to-create-an-account",description:"Goal",source:"@site/docs/api-reference/tooling/clio/usage/how-to-guides/how-to-create-an-account.md",sourceDirName:"api-reference/tooling/clio/usage/how-to-guides",slug:"/api-reference/tooling/clio/usage/how-to-guides/how-to-create-an-account",permalink:"/wire-docs/docs/api-reference/tooling/clio/usage/how-to-guides/how-to-create-an-account",draft:!1,unlisted:!1,editUrl:"https://github.com/Wire-Network/wire-docs/docs/api-reference/tooling/clio/usage/how-to-guides/how-to-create-an-account.md",tags:[],version:"current",frontMatter:{}},a={},l=[{value:"Goal",id:"goal",level:2},{value:"Before you begin",id:"before-you-begin",level:2},{value:"Steps",id:"steps",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"goal",children:"Goal"}),"\n",(0,t.jsx)(n.p,{children:"Create a new Wire blockchain account"}),"\n",(0,t.jsx)(n.h2,{id:"before-you-begin",children:"Before you begin"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Install the currently supported version of ",(0,t.jsx)(n.code,{children:"clio"})]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["| The ",(0,t.jsx)(n.code,{children:"clio"})," tool is bundled with the Wire software. ",(0,t.jsx)(n.a,{href:"/wire-docs/docs/getting-started/install-dependencies",children:"Installing Wire Core"})," will also install the clio tool."]})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Acquire functional understanding of the following:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developers.eos.io/welcome/v2.1/protocol/accounts_and_permissions",children:"Accounts and Permissions"})}),"\n",(0,t.jsx)(n.li,{children:"Asymmetric cryptography (public and private keypair)"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Created an Owner and an Active key pair"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/wire-docs/docs/api-reference/tooling/clio/usage/how-to-guides/how-to-import-a-key",children:"Import a private key"})," to the wallet which can authorize on behalf of a creator account"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"steps",children:"Steps"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Command"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"clio create account [creator account name] [new account name][OwnerKey] [ActiveKey]\n"})}),"\n",(0,t.jsx)(n.p,{children:"Where:"}),"\n",(0,t.jsx)(n.p,{children:"[creator account name] = name of the existing account that authorizes the creation of a new account"}),"\n",(0,t.jsx)(n.p,{children:"[new account name] = The name of the new account account adhering to Wire's account naming conventions"}),"\n",(0,t.jsx)(n.p,{children:"[OwnerKey] = The owner permissions linked to the ownership of the account"}),"\n",(0,t.jsx)(n.p,{children:"[ActiveKey] = The active permissions linked with the creator account"}),"\n",(0,t.jsx)(n.admonition,{title:"Reccomend",type:"tip",children:(0,t.jsxs)(n.p,{children:["| ",(0,t.jsx)(n.code,{children:"ActiveKey"})," is optional but recommended."]})}),"\n",(0,t.jsx)(n.admonition,{title:"Note",type:"info",children:(0,t.jsxs)(n.p,{children:["| To create a new account in the Wire blockchain, an existing account, also referred to as a creator account, is required to authorize the creation of a new account. For a newly created Wire blockchain, the default system account used to create a new account is ",(0,t.jsx)(n.code,{children:"sysio"}),"."]})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example Output"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:'clio create account sysio bob EOS87TQktA5RVse2EguhztfQVEh6XXxBmgkU8b4Y5YnGvtYAoLGNN\nexecuted transaction: 4d65a274de9f809f9926b74c3c54aadc0947020bcfb6dd96043d1bcd9c46604c  200 bytes  166 us\n#         sysio <= sysio::newaccount            {"creator":"sysio","name":"bob","owner":{"threshold":1,"keys":[{"key":"EOS87TQktA5RVse2EguhztfQVEh6X...\nwarning: transaction executed locally, but may not be confirmed by the network yet         ]\n'})})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>s});var t=o(96540);const c={},i=t.createContext(c);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);