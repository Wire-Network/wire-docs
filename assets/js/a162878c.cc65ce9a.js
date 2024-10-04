"use strict";(self.webpackChunkwire_docs=self.webpackChunkwire_docs||[]).push([[4645],{64175:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>s,metadata:()=>t,toc:()=>l});var o=i(74848),r=i(28453);const s={title:"Producing Node Setup"},d=void 0,t={id:"api-reference/tooling/nodeop/usage/node-setups/producing-node",title:"Producing Node Setup",description:"| These instructions assume you want to launch a producing node on a network with system contracts loaded. These instructions will not work on a default development node using native functionality, or one without system contracts loaded.",source:"@site/docs/api-reference/tooling/nodeop/usage/node-setups/producing-node.md",sourceDirName:"api-reference/tooling/nodeop/usage/node-setups",slug:"/api-reference/tooling/nodeop/usage/node-setups/producing-node",permalink:"/docs/api-reference/tooling/nodeop/usage/node-setups/producing-node",draft:!1,unlisted:!1,editUrl:"https://github.com/Wire-Network/wire-docs/edit/master/docs/api-reference/tooling/nodeop/usage/node-setups/producing-node.md",tags:[],version:"current",frontMatter:{title:"Producing Node Setup"}},c={},l=[{value:"Goal",id:"goal",level:2},{value:"Before you begin",id:"before-you-begin",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Register your account as a producer",id:"1-register-your-account-as-a-producer",level:3},{value:"2. Set Producer Name",id:"2-set-producer-name",level:3},{value:"3. Set the Producer&#39;s signature-provider",id:"3-set-the-producers-signature-provider",level:3},{value:"Using a Key",id:"using-a-key",level:4},{value:"Using Kiod",id:"using-kiod",level:4},{value:"4. Define a peers list",id:"4-define-a-peers-list",level:3},{value:"5. Load the Required Plugins",id:"5-load-the-required-plugins",level:3}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.admonition,{title:"System contracts required",type:"info",children:(0,o.jsxs)(n.p,{children:["| These instructions assume you want to launch a producing node on a network with ",(0,o.jsx)(n.strong,{children:"system contracts loaded"}),". These instructions will not work on a default development node using native functionality, or one without system contracts loaded."]})}),"\n",(0,o.jsx)(n.h2,{id:"goal",children:"Goal"}),"\n",(0,o.jsxs)(n.p,{children:["This section describes how to set up a producing node within the network. A producing node, as its name implies, is a node that is configured to produce blocks in an Wire-based blockchain. This functionality if provided through the ",(0,o.jsx)(n.code,{children:"producer_plugin"})," as well as other ",(0,o.jsx)(n.a,{href:"/docs/api-reference/tooling/nodeop/plugins/",children:"Nodeop Plugins"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"before-you-begin",children:"Before you begin"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/docs/getting-started/install-dependencies",children:"Install the Wire software"})," before starting this section."]}),"\n",(0,o.jsxs)(n.li,{children:["Know how to pass ",(0,o.jsx)(n.a,{href:"/docs/api-reference/tooling/nodeop/usage/nodeop-options",children:"Nodeop options"})," to enable or disable functionality."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"steps",children:"Steps"}),"\n",(0,o.jsx)(n.p,{children:"Please follow the steps below to set up a producing node:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#goal",children:"Goal"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#before-you-begin",children:"Before you begin"})}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"#steps",children:"Steps"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#1-register-your-account-as-a-producer",children:"1. Register your account as a producer"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#2-set-producer-name",children:"2. Set Producer Name"})}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"#3-set-the-producers-signature-provider",children:"3. Set the Producer's signature-provider"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#using-a-key",children:"Using a Key"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#using-kiod",children:"Using Kiod"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#4-define-a-peers-list",children:"4. Define a peers list"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#5-load-the-required-plugins",children:"5. Load the Required Plugins"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"1-register-your-account-as-a-producer",children:"1. Register your account as a producer"}),"\n",(0,o.jsx)(n.p,{children:"In order for your account to be eligible as a producer, you will need to register the account as a producer:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"clio system regproducer accountname1 EOS1234534... http://producer.site Antarctica\n"})}),"\n",(0,o.jsx)(n.h3,{id:"2-set-producer-name",children:"2. Set Producer Name"}),"\n",(0,o.jsxs)(n.p,{children:["Set the ",(0,o.jsx)(n.code,{children:"producer-name"})," option in ",(0,o.jsx)(n.code,{children:"config.ini"})," to your account, as follows:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-console",children:"# config.ini:\n\n# ID of producer controlled by this node (e.g. inita; may specify multiple times) (sysio::producer_plugin)\nproducer-name = youraccount\n"})}),"\n",(0,o.jsx)(n.h3,{id:"3-set-the-producers-signature-provider",children:"3. Set the Producer's signature-provider"}),"\n",(0,o.jsx)(n.p,{children:"You will need to set the private key for your producer. The public key should have an authority for the producer account defined above."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"signature-provider"})," is defined with a 3-field tuple:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"public-key"})," - A valid public key in form of a string."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"provider-spec"})," - It's a string formatted like ",(0,o.jsx)(n.code,{children:"<provider-type>:<data>"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"provider-type"})," - KEY or KIOD"]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"using-a-key",children:"Using a Key"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-console",children:"# config.ini:\n\nsignature-provider = PUBLIC_SIGNING_KEY=KEY:PRIVATE_SIGNING_KEY\n\n//Example\n//signature-provider = EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV=KEY:5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3\n"})}),"\n",(0,o.jsx)(n.h4,{id:"using-kiod",children:"Using Kiod"}),"\n",(0,o.jsxs)(n.p,{children:["You can also use ",(0,o.jsx)(n.code,{children:"kiod"})," instead of hard-defining keys."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-console",children:"# config.ini:\n\nsignature-provider = KIOD:<data>   \n\n//Example\n//EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV=KIOD:https://127.0.0.1:88888\n"})}),"\n",(0,o.jsx)(n.h3,{id:"4-define-a-peers-list",children:"4. Define a peers list"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-console",children:"# config.ini:\n\n# Default p2p port is 9876\np2p-peer-address = 123.255.78.9:9876\n"})}),"\n",(0,o.jsx)(n.h3,{id:"5-load-the-required-plugins",children:"5. Load the Required Plugins"}),"\n",(0,o.jsxs)(n.p,{children:["In your ",(0,o.jsx)(n.a,{href:"/docs/api-reference/tooling/nodeop/usage/",children:"config.ini"}),", confirm the following plugins are loading or append them if necessary."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-console",children:"# config.ini:\n\nplugin = sysio::chain_plugin\nplugin = sysio::producer_plugin\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>t});var o=i(96540);const r={},s=o.createContext(r);function d(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);