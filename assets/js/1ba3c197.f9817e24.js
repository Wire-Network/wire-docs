"use strict";(self.webpackChunkwire_docs=self.webpackChunkwire_docs||[]).push([[2270],{87599:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>a});var s=l(74848),t=l(28453);const i={},o=void 0,r={id:"api-reference/tooling/clio/command-reference/wallet/create",title:"create",description:"Description",source:"@site/docs/api-reference/tooling/clio/command-reference/wallet/create.md",sourceDirName:"api-reference/tooling/clio/command-reference/wallet",slug:"/api-reference/tooling/clio/command-reference/wallet/create",permalink:"/docs/api-reference/tooling/clio/command-reference/wallet/create",draft:!1,unlisted:!1,editUrl:"https://github.com/Wire-Network/wire-docs/edit/master/docs/api-reference/tooling/clio/command-reference/wallet/create.md",tags:[],version:"current",frontMatter:{},sidebar:"apiReferenceSidebar",previous:{title:"wallet",permalink:"/docs/api-reference/tooling/clio/command-reference/wallet/"},next:{title:"create_key",permalink:"/docs/api-reference/tooling/clio/command-reference/wallet/create-key"}},c={},a=[{value:"Description",id:"description",level:2},{value:"Positionals",id:"positionals",level:2},{value:"Options",id:"options",level:2},{value:"Command",id:"command",level:2},{value:"Description",id:"description-1",level:2},{value:"Command Usage",id:"command-usage",level:2},{value:"Positionals:",id:"positionals-1",level:3},{value:"Options",id:"options-1",level:3},{value:"Requirements",id:"requirements",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Creates a wallet with the specified name. If no name is given, the wallet will be created with the name 'default'"}),"\n",(0,s.jsx)(n.h2,{id:"positionals",children:"Positionals"}),"\n",(0,s.jsx)(n.p,{children:"None"}),"\n",(0,s.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-n, --name"})," ",(0,s.jsx)(n.em,{children:"TEXT"})," - The name of the new wallet"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-f, --file"})," ",(0,s.jsx)(n.em,{children:"TEXT"}),' - Name of file to write wallet password output to. (Must be set, unless "--to-console" is passed']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--to-console"})," - Print password to console"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"command",children:"Command"}),"\n",(0,s.jsx)(n.p,{children:"clio wallet create [OPTIONS]"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Where"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["[OPTIONS] = See Options in  ",(0,s.jsx)(n.a,{href:"#command-usage",children:"Command Usage"})," section below."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note"}),": The arguments and options enclosed in square brackets are optional."]}),"\n",(0,s.jsx)(n.h2,{id:"description-1",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Create a new wallet locally."}),"\n",(0,s.jsx)(n.h2,{id:"command-usage",children:"Command Usage"}),"\n",(0,s.jsxs)(n.p,{children:["The following information shows the different positionals and options you can use with the ",(0,s.jsx)(n.code,{children:"clio wallet create"})," command:"]}),"\n",(0,s.jsx)(n.h3,{id:"positionals-1",children:"Positionals:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"none"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"options-1",children:"Options"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"-h"}),", ",(0,s.jsx)(n.code,{children:"--help"})," - Print this help message and exit\n",(0,s.jsx)(n.code,{children:"-n"}),", ",(0,s.jsx)(n.code,{children:"--name"})," ",(0,s.jsx)(n.em,{children:"TEXT"})," - The name of the new wallet, if blank the name is ",(0,s.jsx)(n.code,{children:"default"}),"\n",(0,s.jsx)(n.code,{children:"-f"}),", ",(0,s.jsx)(n.code,{children:"--file"})," ",(0,s.jsx)(n.em,{children:"TEXT"}),' - Name of file to write wallet password output to. Must be set, unless "--to-console" is passed\n',(0,s.jsx)(n.code,{children:"--to-console"})," - Print password to console."]}),"\n",(0,s.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Install the currently supported version of ",(0,s.jsx)(n.code,{children:"clio"})," and ",(0,s.jsx)(n.code,{children:"kiod"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["| The ",(0,s.jsx)(n.code,{children:"clio"})," tool is bundled with the Wire software. ",(0,s.jsx)(n.a,{href:"/docs/getting-started/install-dependencies",children:"Installing Wire core"})," will install the ",(0,s.jsx)(n.code,{children:"clio"})," and ",(0,s.jsx)(n.code,{children:"kiod"})," command line tools."]})}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Create a new wallet called ",(0,s.jsx)(n.code,{children:"default"})," and output the wallet password to the screen"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"clio wallet create  --to-console\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Where"}),"\n",(0,s.jsx)(n.code,{children:"--to-console"})," = Tells the ",(0,s.jsx)(n.code,{children:"clio wallet create"})," command to print the wallet password to the console."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example Output"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'Creating wallet: default\nSave password to use in the future to unlock this wallet.\nWithout password imported keys will not be retrievable.\n"PW5HuN7hkCBdMNQAa8z3NuThp3LSDtjv77odQYs5t2wgghJq4MUxo"\n'})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Create a new wallet called ",(0,s.jsx)(n.code,{children:"my_wallet"})," and output the wallet password to a file called ",(0,s.jsx)(n.code,{children:"my_wallet_password.txt"})]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"clio wallet create --name my_wallet --file my_wallet_passwords.txt \n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Where"}),"\n",(0,s.jsx)(n.code,{children:"--name"})," my_wallet = Tells the ",(0,s.jsx)(n.code,{children:"clio wallet create"})," command to create a wallet called ",(0,s.jsx)(n.code,{children:"my_wallet_password.txt"}),"\n",(0,s.jsx)(n.code,{children:"--file"})," my_wallet_passwords.txt = Tells the ",(0,s.jsx)(n.code,{children:"clio wallet create"})," command to store the password in a file called ",(0,s.jsx)(n.code,{children:"my_wallet_password.txt"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example Output"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"Creating wallet: my_wallet\nSave password to use in the future to unlock this wallet.\nWithout password imported keys will not be retrievable.\nsaving password to my_wallet_passwords.txt\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"cat my_wallet_passwords.txt\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example Output"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"PW5JZaEQXoTKWZRg313aTYS7iNh2jMH4Xs7zWS3vrTZ4p5hCSFGFH(base)\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"clio wallet list\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example Output"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'Wallets:\n[\n  "default *",\n  "my_wallet *"\n]\n'})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,l)=>{l.d(n,{R:()=>o,x:()=>r});var s=l(96540);const t={},i=s.createContext(t);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);