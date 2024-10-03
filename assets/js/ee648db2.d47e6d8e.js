"use strict";(self.webpackChunkwire_docs=self.webpackChunkwire_docs||[]).push([[371],{79950:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var n=i(74848),d=i(28453);const o={},s=void 0,r={id:"api-reference/wire-cdt/how-to-guides/multi-index/how-to-modify-data-in-a-multi-index-table",title:"how-to-modify-data-in-a-multi-index-table",description:"\x3c!-- ---",source:"@site/docs/api-reference/wire-cdt/how-to-guides/multi-index/how-to-modify-data-in-a-multi-index-table.md",sourceDirName:"api-reference/wire-cdt/how-to-guides/multi-index",slug:"/api-reference/wire-cdt/how-to-guides/multi-index/how-to-modify-data-in-a-multi-index-table",permalink:"/docs/api-reference/wire-cdt/how-to-guides/multi-index/how-to-modify-data-in-a-multi-index-table",draft:!1,unlisted:!1,editUrl:"https://github.com/Wire-Network/wire-docs/docs/api-reference/wire-cdt/how-to-guides/multi-index/how-to-modify-data-in-a-multi-index-table.md",tags:[],version:"current",frontMatter:{}},a={},l=[{value:"Overview",id:"overview",level:2},{value:"Reference",id:"reference",level:2},{value:"Before you begin",id:"before-you-begin",level:2},{value:"Procedure",id:"procedure",level:2},{value:"1. Define The mod(...) Action",id:"1-define-the-mod-action",level:3},{value:"2. Find The User You Want To Modify",id:"2-find-the-user-you-want-to-modify",level:3},{value:"3. Yield Error If User Not Found",id:"3-yield-error-if-user-not-found",level:3},{value:"4. Update The User If Found",id:"4-update-the-user-if-found",level:3},{value:"Summary",id:"summary",level:2},{value:"Next Steps",id:"next-steps",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,d.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(t.p,{children:"This guide provides instructions to modify data in a multi-index table."}),"\n",(0,n.jsx)(t.h2,{id:"reference",children:"Reference"}),"\n",(0,n.jsx)(t.p,{children:"See the following code reference:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.a,{href:"http://example/com",children:(0,n.jsx)(t.code,{children:"multi-index"})})," class."]}),"\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.a,{href:"http://example/com",children:(0,n.jsx)(t.code,{children:"multi-index::modify(...)"})})," method."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"before-you-begin",children:"Before you begin"}),"\n",(0,n.jsx)(t.p,{children:"Make sure you have the following prerequisites in place:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["A Wire development environment, for details consult the ",(0,n.jsx)(t.a,{href:"https://docs.eosnetwork.com/docs/latest/getting-started/",children:"Get Started Guide"}),","]}),"\n",(0,n.jsxs)(t.li,{children:["A multi-index ",(0,n.jsx)(t.code,{children:"testab"})," table instance which stores ",(0,n.jsx)(t.code,{children:"user"})," objects indexed by the primary key which is of type ",(0,n.jsx)(t.code,{children:"sysio::name"}),". Consult the section ",(0,n.jsx)(t.a,{href:"./how-to-instantiate-a-multi-index-table",children:"How to instantiate a multi-index table"})," to learn how to set it up."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"procedure",children:"Procedure"}),"\n",(0,n.jsxs)(t.p,{children:["Complete the following steps to modify data in the ",(0,n.jsx)(t.code,{children:"testtab"})," multi-index table."]}),"\n",(0,n.jsx)(t.h3,{id:"1-define-the-mod-action",children:"1. Define The mod(...) Action"}),"\n",(0,n.jsxs)(t.p,{children:["Add a ",(0,n.jsx)(t.code,{children:"mod"})," action to the ",(0,n.jsx)(t.code,{children:"testtab"})," multi-index table. The ",(0,n.jsx)(t.code,{children:"mod"})," action takes as input parameters a ",(0,n.jsx)(t.code,{children:"user"})," of type ",(0,n.jsx)(t.code,{children:"sysio::name"})," and a ",(0,n.jsx)(t.code,{children:"value"})," of type ",(0,n.jsx)(t.code,{children:"uint32_t"}),". The ",(0,n.jsx)(t.code,{children:"mod"})," action updates the ",(0,n.jsx)(t.code,{children:"user"})," object ",(0,n.jsx)(t.code,{children:"datum"})," data member with the ",(0,n.jsx)(t.code,{children:"uint32_t"})," value."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-cpp",children:"[[sysio::action]] void mod( name user, uint32_t value );\n"})}),"\n",(0,n.jsx)(t.p,{children:"Optionally, for ease of use add the action wrapper definition as well."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-diff",children:'[[sysio::action]] void mod( name user, uint32_t value );\n\n+using mod_action = action_wrapper<"mod"_n, &multi_index_example::mod>;\n'})}),"\n",(0,n.jsx)(t.h3,{id:"2-find-the-user-you-want-to-modify",children:"2. Find The User You Want To Modify"}),"\n",(0,n.jsxs)(t.p,{children:["Use the multi-index ",(0,n.jsx)(t.code,{children:"find(...)"})," method to locate the user object you want to modify. The targeted user is searched based on its account name."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-cpp",children:"[[sysio::action]] void multi_index_example::mod( name user, uint32_t value ) {\n  auto itr = testtab.find(user.value);\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"3-yield-error-if-user-not-found",children:"3. Yield Error If User Not Found"}),"\n",(0,n.jsxs)(t.p,{children:["If the ",(0,n.jsx)(t.code,{children:"user"})," object you want to update is not found then raise an error message by using the ",(0,n.jsx)(t.code,{children:"sysio::check"})," method."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-diff",children:'[[sysio::action]] void multi_index_example::mod( name user, uint32_t value ) {\n  auto itr = testtab.find(user.value);\n+  check( itr != testtab.end(), "user does not exist in table" );\n}\n'})}),"\n",(0,n.jsx)(t.h3,{id:"4-update-the-user-if-found",children:"4. Update The User If Found"}),"\n",(0,n.jsxs)(t.p,{children:["If the ",(0,n.jsx)(t.code,{children:"user"})," object you want to update is found, the ",(0,n.jsx)(t.code,{children:"sysio::check"})," method will do nothing and the iterator ",(0,n.jsx)(t.code,{children:"itr"})," will be pointing at the object which you want to update. Use the ",(0,n.jsx)(t.code,{children:"multi-index::modify(...)"})," method to update the user object ",(0,n.jsx)(t.code,{children:"datum"})," data member with the ",(0,n.jsx)(t.code,{children:"value"})," parameter."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-diff",children:'[[sysio::action]] void multi_index_example::mod( name user, uint32_t value ) {\n  // check if the user already exists\n  auto itr = testtab.find(user.value);\n  check( itr != testtab.end(), "user does not exist in table" );\n\n+  testtab.modify( itr, _self, [&]( auto& row ) {\n+    row.datum = value;\n+  });\n}\n'})}),"\n",(0,n.jsxs)(t.p,{children:["Now you have implemented a new action ",(0,n.jsx)(t.code,{children:"mod"}),". Call ",(0,n.jsx)(t.code,{children:"mod"})," to update the ",(0,n.jsx)(t.code,{children:"datum"})," data member for the user object identified by the ",(0,n.jsx)(t.code,{children:"user"})," name parameter."]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["| A full example project demonstrating the instantiation and usage of multi-index table can be found ",(0,n.jsx)(t.a,{href:"https://github.com/Wire-Network/cdt/blob/main/examples/multi_index_example",children:"here"}),"."]})}),"\n",(0,n.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,n.jsx)(t.p,{children:"In conclusion, the above instructions show how to modify data in a multi-index table."}),"\n",(0,n.jsx)(t.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["You can ",(0,n.jsx)(t.a,{href:"./how-to-insert-data-into-a-multi-index-table",children:"insert data"})," into the multi-index table."]}),"\n",(0,n.jsxs)(t.li,{children:["You can ",(0,n.jsx)(t.a,{href:"./how-to-delete-data-from-a-multi-index-table",children:"delete data"})," from the multi-index table."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>r});var n=i(96540);const d={},o=n.createContext(d);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);