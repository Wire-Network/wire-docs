"use strict";(self.webpackChunkwire_docs=self.webpackChunkwire_docs||[]).push([[3729],{47224:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var i=t(74848),r=t(28453);const o={},s=void 0,c={id:"api-reference/wire-cdt/how-to-guides/authorization/how_to_restrict_access_to_an_action_by_user",title:"how_to_restrict_access_to_an_action_by_user",description:"\x3c!-- ---",source:"@site/docs/api-reference/wire-cdt/how-to-guides/authorization/how_to_restrict_access_to_an_action_by_user.md",sourceDirName:"api-reference/wire-cdt/how-to-guides/authorization",slug:"/api-reference/wire-cdt/how-to-guides/authorization/how_to_restrict_access_to_an_action_by_user",permalink:"/docs/api-reference/wire-cdt/how-to-guides/authorization/how_to_restrict_access_to_an_action_by_user",draft:!1,unlisted:!1,editUrl:"https://github.com/Wire-Network/wire-docs/docs/api-reference/wire-cdt/how-to-guides/authorization/how_to_restrict_access_to_an_action_by_user.md",tags:[],version:"current",frontMatter:{}},a={},h=[{value:"Overview",id:"overview",level:2},{value:"Before you begin",id:"before-you-begin",level:2},{value:"Code Reference",id:"code-reference",level:2},{value:"Procedure",id:"procedure",level:2},{value:"1. Use check(has_auth(...)...)",id:"1-use-checkhas_auth",level:3},{value:"2. Use require_auth",id:"2-use-require_auth",level:3},{value:"3. Use require_auth2",id:"3-use-require_auth2",level:3},{value:"Summary",id:"summary",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(n.p,{children:"This guide provides instructions how to perform authorization checks in a smart contract."}),"\n",(0,i.jsx)(n.h2,{id:"before-you-begin",children:"Before you begin"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["You have the sources of a contract with a ",(0,i.jsx)(n.code,{children:"hi"})," action defined and implemented."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"hi"})," action has defined one input parameter ",(0,i.jsx)(n.code,{children:"user"})," of type ",(0,i.jsx)(n.code,{children:"name"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"code-reference",children:"Code Reference"}),"\n",(0,i.jsx)(n.p,{children:"See the following code reference guides for functions which can be used to implement authorization checks in a smart contract:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["function ",(0,i.jsx)(n.a,{href:"http://docs.eosnetwork.com/cdt/latest/reference/Namespaces/namespacesysio#function-has_auth",children:"has_auth(name n)"})]}),"\n",(0,i.jsxs)(n.li,{children:["function ",(0,i.jsx)(n.a,{href:"http://docs.eosnetwork.com/cdt/latest/reference/Namespaces/namespacesysio#function-require_auth",children:"require_auth(name n)"})]}),"\n",(0,i.jsxs)(n.li,{children:["function ",(0,i.jsx)(n.a,{href:"http://docs.eosnetwork.com/cdt/latest/reference/Files/action_8h",children:"require_auth2(capi_name name, capi_name permission)"})]}),"\n",(0,i.jsxs)(n.li,{children:["function ",(0,i.jsx)(n.a,{href:"http://docs.eosnetwork.com/cdt/latest/reference/Namespaces/namespacesysio#function-check",children:"check(bool pred, ...)"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"procedure",children:"Procedure"}),"\n",(0,i.jsxs)(n.p,{children:["The following steps show how to check authorization for ",(0,i.jsx)(n.code,{children:"user"})," account for the ",(0,i.jsx)(n.code,{children:"hi"})," action. There are three ways to accomplish an authorization check in a smart contract action implementation. You can use any of the methods provided below depending on your needs:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#overview",children:"Overview"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#before-you-begin",children:"Before you begin"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#code-reference",children:"Code Reference"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#procedure",children:"Procedure"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#1-use-checkhas_auth",children:"1. Use check(has_auth(...)...)"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#2-use-require_auth",children:"2. Use require_auth"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#3-use-require_auth2",children:"3. Use require_auth2"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#summary",children:"Summary"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"1-use-checkhas_auth",children:"1. Use check(has_auth(...)...)"}),"\n",(0,i.jsxs)(n.p,{children:["The following code example enforces the action ",(0,i.jsx)(n.code,{children:"hi"})," to be executed only by the account that is sent as parameter to the action, no matter what permission the account uses to sign the transaction (e.g. owner, active, code)."]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"| Observe that in this case the yielded error message is a custom one and thus it can be used to provide a better experience for the user."})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:'#include <capi/sysio/action.h>\n\nvoid hi( name user ) {\n   check(has_auth(user), "User is not authorized to perform this action.");\n   print( "Hello, ", name{user} );\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Another example can be found in the ",(0,i.jsx)(n.a,{href:"https://docs.eosnetwork.com/docs/latest/tutorials/tic-tac-toe-game-contract#action-handler---move",children:"Tic Tac Toe Tutorial"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"2-use-require_auth",children:"2. Use require_auth"}),"\n",(0,i.jsxs)(n.p,{children:["The below code enforces the action ",(0,i.jsx)(n.code,{children:"hi"})," to be executed only by the account that is sent as parameter to the action, no matter what permission the account uses to sign the transaction (e.g. owner, active, code)."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:'void hi( name user ) {\n   require_auth( user );\n   print( "Hello, ", name{user} );\n}\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"| Note that this time you can not customize the yielded error message, it will be a generic authorization error message."})}),"\n",(0,i.jsx)(n.h3,{id:"3-use-require_auth2",children:"3. Use require_auth2"}),"\n",(0,i.jsxs)(n.p,{children:["The below code is enforces the action ",(0,i.jsx)(n.code,{children:"hi"})," to be executed only by the account that is sent as parameter to the action and only if the permission used to sign the transaction is the 'active' one. In other words, if the same user uses the transaction with a different permission (e.g. code, owner) the execution of the action is halted."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:'#include <capi/sysio/action.h>\n\nvoid hi( name user ) {\n   require_auth2(user.value, "active"_n.value);\n   print( "Hello, ", name{user} );\n}\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"| Note that this time, as well as previous method, you can not customize the yielded error message, it will be a generic authorization error message."})}),"\n",(0,i.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,i.jsx)(n.p,{children:"In conclusion, the above instructions show how to perform authorization checks in a smart contract."})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var i=t(96540);const r={},o=i.createContext(r);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);