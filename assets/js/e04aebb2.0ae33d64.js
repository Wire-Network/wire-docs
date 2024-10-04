"use strict";(self.webpackChunkwire_docs=self.webpackChunkwire_docs||[]).push([[6024],{1088:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>a});var o=t(74848),s=t(28453);const i={},c=void 0,r={id:"api-reference/tooling/clio/how-to-guides/how-to-unstake-net",title:"how-to-unstake-net",description:"Goal",source:"@site/docs/api-reference/tooling/clio/how-to-guides/how-to-unstake-net.md",sourceDirName:"api-reference/tooling/clio/how-to-guides",slug:"/api-reference/tooling/clio/how-to-guides/how-to-unstake-net",permalink:"/docs/api-reference/tooling/clio/how-to-guides/how-to-unstake-net",draft:!1,unlisted:!1,editUrl:"https://github.com/Wire-Network/wire-docs/edit/master/docs/api-reference/tooling/clio/how-to-guides/how-to-unstake-net.md",tags:[],version:"current",frontMatter:{}},l={},a=[{value:"Goal",id:"goal",level:2},{value:"Before you begin",id:"before-you-begin",level:2},{value:"Steps",id:"steps",level:2}];function d(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"goal",children:"Goal"}),"\n",(0,o.jsx)(n.p,{children:"Unstake resource from your account"}),"\n",(0,o.jsx)(n.p,{children:"Beware that only the account which originally delegated resource can undelegate"}),"\n",(0,o.jsx)(n.h2,{id:"before-you-begin",children:"Before you begin"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Install the currently supported version of ",(0,o.jsx)(n.code,{children:"clio"})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Ensure the reference system contracts from ",(0,o.jsx)(n.code,{children:"sysio.contracts"})," repository is deployed and used to manage system resources"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Understand the following:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"What is an account"}),"\n",(0,o.jsx)(n.li,{children:"What is network bandwidth"}),"\n",(0,o.jsx)(n.li,{children:"What is CPU bandwidth"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"steps",children:"Steps"}),"\n",(0,o.jsxs)(n.p,{children:["Unstake 0.01 SYS network bandwidth from account ",(0,o.jsx)(n.code,{children:"alice"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:'clio system undelegatebw alice alice "0 SYS" "0.01 SYS"\n'})}),"\n",(0,o.jsx)(n.p,{children:"You should see something below:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-console",children:'executed transaction: e7e7edb6c5556de933f9d663fea8b4a9cd56ece6ff2cebf056ddd0835efa6606  184 bytes  452 us\n#         sysio <= sysio::undelegatebw          {"from":"alice","receiver":"alice","unstake_net_quantity":"0.01 EOS","unstake_cpu_qu...\nwarning: transaction executed locally, but may not be confirmed by the network yet         ]\n'})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>r});var o=t(96540);const s={},i=o.createContext(s);function c(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);