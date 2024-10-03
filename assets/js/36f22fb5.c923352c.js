"use strict";(self.webpackChunkwire_docs=self.webpackChunkwire_docs||[]).push([[9159],{85844:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var n=t(74848),o=t(28453);const s={},i="Error handling",a={id:"api-reference/wire-cdt/best-practices/error-handling",title:"Error handling",description:"Contracts can use uint64t error codes as an alternative (and shorter) means of signaling error conditions, as opposed to string error messages. However, Wire Sysio and CDT reserve certain ranges of the uint64t value space for their own purposes. Contract developers must be aware of the following ranges and restrictions:",source:"@site/docs/api-reference/wire-cdt/best-practices/error-handling.md",sourceDirName:"api-reference/wire-cdt/best-practices",slug:"/api-reference/wire-cdt/best-practices/error-handling",permalink:"/wire-docs/docs/api-reference/wire-cdt/best-practices/error-handling",draft:!1,unlisted:!1,editUrl:"https://github.com/Wire-Network/wire-docs/docs/api-reference/wire-cdt/best-practices/error-handling.md",tags:[],version:"current",frontMatter:{}},c={},d=[];function l(e){const r={br:"br",code:"code",h1:"h1",header:"header",li:"li",ol:"ol",p:"p",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"error-handling",children:"Error handling"})}),"\n",(0,n.jsxs)(r.p,{children:["Contracts can use ",(0,n.jsx)(r.code,{children:"uint64_t"})," error codes as an alternative (and shorter) means of signaling error conditions, as opposed to string error messages. However, Wire Sysio and CDT reserve certain ranges of the ",(0,n.jsx)(r.code,{children:"uint64_t"})," value space for their own purposes. Contract developers must be aware of the following ranges and restrictions:"]}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:["$0 - 4,999,999,999,999,999,999$:",(0,n.jsx)(r.br,{}),"\n","Available for contract developers to assign error codes specific to their contracts."]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:["$5,000,000,000,000,000,000 - 7,999,999,999,999,999,999$:",(0,n.jsx)(r.br,{}),"\n","Reserved for the CDT compiler to allocate as appropriate. Although the WASM code generated by the CDT compiler may use error code values that were automatically generated from within this range, the error codes in this range are meant to have meaning specific to the particular compiled contract (the meaning would typically be conveyed through the mapping between the error code value and strings in the associated generated ABI file)."]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:["$8,000,000,000,000,000,000 - 9,999,999,999,999,999,999$:",(0,n.jsx)(r.br,{}),"\n","Reserved for the CDT compiler to allocate as appropriate. The error codes in this range are not specific to any contract but rather are used to convey general runtime error conditions associated with the generated code by CDT."]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:["$10,000,000,000,000,000,000 - 18,446,744,073,709,551,615$:",(0,n.jsx)(r.br,{}),"\n","Reserved by the Antelope protocol to represent protocol-level error conditions. Antelope will actually enforce this by restricting the ability for ",(0,n.jsx)(r.code,{children:"sysio_assert_code"})," to be used to fail with error code values used within this range."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"Therefore, contract developers should only reserve error codes from the first range above to use in their contracts."})]})}function h(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>a});var n=t(96540);const o={},s=n.createContext(o);function i(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);