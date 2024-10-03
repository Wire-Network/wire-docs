"use strict";(self.webpackChunkwire_docs=self.webpackChunkwire_docs||[]).push([[3459],{89694:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var t=o(74848),c=o(28453);const s={},i=void 0,r={id:"api-reference/tooling/clio/how-to-guides/how-to-undelegate-cpu",title:"how-to-undelegate-cpu",description:"Goal",source:"@site/docs/api-reference/tooling/clio/how-to-guides/how-to-undelegate-cpu.md",sourceDirName:"api-reference/tooling/clio/how-to-guides",slug:"/api-reference/tooling/clio/how-to-guides/how-to-undelegate-cpu",permalink:"/docs/api-reference/tooling/clio/how-to-guides/how-to-undelegate-cpu",draft:!1,unlisted:!1,editUrl:"https://github.com/Wire-Network/wire-docs/docs/api-reference/tooling/clio/how-to-guides/how-to-undelegate-cpu.md",tags:[],version:"current",frontMatter:{}},l={},d=[{value:"Goal",id:"goal",level:2},{value:"Before you begin",id:"before-you-begin",level:2},{value:"Steps",id:"steps",level:2}];function a(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"goal",children:"Goal"}),"\n",(0,t.jsx)(n.p,{children:"Undelegate resource for an account or application"}),"\n",(0,t.jsx)(n.p,{children:"Beware that only the account which originally delegated resource can undelegate"}),"\n",(0,t.jsx)(n.h2,{id:"before-you-begin",children:"Before you begin"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Install the currently supported version of ",(0,t.jsx)(n.code,{children:"clio"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Ensure the reference system contracts from ",(0,t.jsx)(n.code,{children:"sysio.contracts"})," repository is deployed and used to manage system resources"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Understand the following:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"What is an account"}),"\n",(0,t.jsx)(n.li,{children:"What is network bandwidth"}),"\n",(0,t.jsx)(n.li,{children:"What is CPU bandwidth"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"steps",children:"Steps"}),"\n",(0,t.jsxs)(n.p,{children:["Undelegate 0.01 SYS CPU bandwidth form from account ",(0,t.jsx)(n.code,{children:"alice"})," back to account ",(0,t.jsx)(n.code,{children:"bob"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:'clio system undelegatebw bob alice "0 SYS" "0.01 SYS"\n'})}),"\n",(0,t.jsx)(n.p,{children:"You should see something below:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:'executed transaction: e7e7edb6c5556de933f9d663fea8b4a9cd56ece6ff2cebf056ddd0835efa6606  184 bytes  452 us\n#         sysio <= sysio::undelegatebw          {"from":"alice","receiver":"bob","unstake_net_quantity":"0.0000 EOS","unstake_cpu_qu...\nwarning: transaction executed locally, but may not be confirmed by the network yet         ]\n'})})]})}function u(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>r});var t=o(96540);const c={},s=t.createContext(c);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);