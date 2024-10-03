"use strict";(self.webpackChunkwire_docs=self.webpackChunkwire_docs||[]).push([[5957],{77453:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var n=r(74848),i=r(28453);const o={},a=void 0,c={id:"api-reference/wire-cdt/features/deferred_transactions",title:"deferred_transactions",description:"Deferred communication conceptually takes the form of action notifications sent to a peer transaction. Deferred actions get scheduled to run, at best, at a later time, at the producer's discretion. There is no guarantee that a deferred action will be executed.",source:"@site/docs/api-reference/wire-cdt/features/deferred_transactions.md",sourceDirName:"api-reference/wire-cdt/features",slug:"/api-reference/wire-cdt/features/deferred_transactions",permalink:"/docs/api-reference/wire-cdt/features/deferred_transactions",draft:!1,unlisted:!1,editUrl:"https://github.com/Wire-Network/wire-docs/docs/api-reference/wire-cdt/features/deferred_transactions.md",tags:[],version:"current",frontMatter:{}},s={},d=[];function l(e){const t={admonition:"admonition",code:"code",p:"p",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Deferred communication conceptually takes the form of action notifications sent to a peer transaction. Deferred actions get scheduled to run, at best, at a later time, at the producer's discretion. There is no guarantee that a deferred action will be executed."}),"\n",(0,n.jsx)(t.p,{children:"As already mentioned, deferred communication will get scheduled later at the producer's discretion. From the perspective of the originating transaction, i.e., the transaction that creates the deferred transaction, it can only determine whether the create request was submitted successfully or whether it failed (if it fails, it will fail immediately). Deferred transactions carry the authority of the contract that sends them. A transaction can cancel a deferred transaction."}),"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsx)(t.p,{children:"| Deferred transactions are deprecated."})}),"\n",(0,n.jsxs)(t.p,{children:["Due to the above described behaviors it is not recommended to use ",(0,n.jsx)(t.code,{children:"deferred transactions"}),"."]}),"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsxs)(t.p,{children:["| In earlier versions, prior to ",(0,n.jsx)(t.code,{children:"v1.8.0"}),", it is possible to observe rare deferred transaction ID collisions because technically the protocol's validation rules allow any number of duplicate deferred transaction IDs. However, the block producing code prior to ",(0,n.jsx)(t.code,{children:"v1.8.0"})," limited this to exactly one duplicate ID in the same block followed by at-most one duplicate ID in the following block. This behavior was mitigated starting with version ",(0,n.jsx)(t.code,{children:"v1.8.0"})," making it functionally impossible to be achieved at the block producing code level. On top of that, the same version ",(0,n.jsx)(t.code,{children:"v1.8.0"})," introduced the optional ",(0,n.jsx)(t.code,{children:"NO_DUPLICATE_DEFERRED_ID"})," protocol feature which, if deployed, it makes this behavior impossible at the protocol layer as well."]})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>c});var n=r(96540);const i={},o=n.createContext(i);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);