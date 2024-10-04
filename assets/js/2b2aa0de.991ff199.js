"use strict";(self.webpackChunkwire_docs=self.webpackChunkwire_docs||[]).push([[5734],{61499:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var n=r(74848),o=r(28453);const i={id:"sysio.msig"},t="sysio.msig",c={id:"api-reference/system-contracts/contracts/sysio.msig",title:"sysio.msig",description:"Overview",source:"@site/docs/api-reference/system-contracts/contracts/sysio.msig.md",sourceDirName:"api-reference/system-contracts/contracts",slug:"/api-reference/system-contracts/contracts/sysio.msig",permalink:"/docs/api-reference/system-contracts/contracts/sysio.msig",draft:!1,unlisted:!1,editUrl:"https://github.com/Wire-Network/wire-docs/edit/master/docs/api-reference/system-contracts/contracts/sysio.msig.md",tags:[],version:"current",frontMatter:{id:"sysio.msig"},sidebar:"apiReferenceSidebar",previous:{title:"sysio.boot",permalink:"/docs/api-reference/system-contracts/contracts/sysio.boot"},next:{title:"sysio.system",permalink:"/docs/api-reference/system-contracts/contracts/sysio.system"}},d={},a=[{value:"Overview",id:"overview",level:2},{value:"Actions",id:"actions",level:2},{value:"<code>propose</code>",id:"propose",level:3},{value:"<code>approve</code>",id:"approve",level:3},{value:"<code>unapprove</code>",id:"unapprove",level:3},{value:"<code>cancel</code>",id:"cancel",level:3},{value:"<code>exec</code>",id:"exec",level:3},{value:"<code>invalidate</code>",id:"invalidate",level:3},{value:"Tables and Storage",id:"tables-and-storage",level:2},{value:"<code>proposal</code>",id:"proposal",level:3},{value:"<code>approvals</code>",id:"approvals",level:3},{value:"<code>invalidation</code>",id:"invalidation",level:3}];function l(e){const s={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",mermaid:"mermaid",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"sysiomsig",children:(0,n.jsx)(s.code,{children:"sysio.msig"})})}),"\n",(0,n.jsx)(s.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"sysio.msig"})," contract facilitates the management of multi-signature proposals on a Wire-based blockchain. It enables creating, approving, and executing proposed transactions which require authorization from multiple accounts."]}),"\n",(0,n.jsx)(s.p,{children:"Below is a diagram describing the flow of operations:"}),"\n",(0,n.jsx)(s.mermaid,{value:"sequenceDiagram\n  actor User\n  participant sysio.msig contract\n  participant Blockchain\n  participant Approving Accounts\n  User->>sysio.msig contract: 1.Create transaction.json file <br /> 2.Submit proposal<br/>with required permissions\n  sysio.msig contract->>Blockchain: Store proposal on blockchain\n  loop Each Approving Account\n    Approving Accounts->>Blockchain: Review proposal\n    Approving Accounts->>Blockchain: Approve proposal\n  end\n  Blockchain--\x3e>sysio.msig contract: Approved\n    sysio.msig contract--\x3e>Blockchain: 1.Validate transaction has not expired <br/> 2. Validate that it is not canceled <br /> Validate it has been signed by all the persmissions in the initial proposal's required permissions list\n  sysio.msig contract--\x3e>User: Grant permission to execute transaction\n  User->>Blockchain: Execute transaction"}),"\n",(0,n.jsx)(s.h2,{id:"actions",children:"Actions"}),"\n",(0,n.jsx)(s.h3,{id:"propose",children:(0,n.jsx)(s.code,{children:"propose"})}),"\n",(0,n.jsx)(s.p,{children:"Creates a proposal for a transaction that requires approvals from specified permission levels."}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Parameter Name"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"proposer"})}),(0,n.jsx)(s.td,{children:"The account proposing the transaction."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"proposal_name"})}),(0,n.jsx)(s.td,{children:"Unique name for the proposal."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"requested"})}),(0,n.jsx)(s.td,{children:"List of permission levels expected to approve the proposal."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"trx"})}),(0,n.jsx)(s.td,{children:"The transaction proposed for execution."})]})]})]}),"\n",(0,n.jsxs)(s.p,{children:["It allows a ",(0,n.jsx)(s.code,{children:"proposer"}),"(an account) to make a ",(0,n.jsx)(s.code,{children:"proposal_name"}),"(proposal) which has ",(0,n.jsx)(s.code,{children:"requested"})," permission levels needed to approve the proposal."]}),"\n",(0,n.jsx)(s.h3,{id:"approve",children:(0,n.jsx)(s.code,{children:"approve"})}),"\n",(0,n.jsx)(s.p,{children:"Approves n existing proposal."}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Parameter Name"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"proposer"})}),(0,n.jsx)(s.td,{children:"The account that initiated the proposal."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"proposal_name"})}),(0,n.jsx)(s.td,{children:"The name of the proposal to approve."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"level"})}),(0,n.jsx)(s.td,{children:"The permission level that is approving the proposal."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"proposal_hash"})}),(0,n.jsx)(s.td,{children:"The checksum of the transaction being approved."})]})]})]}),"\n",(0,n.jsxs)(s.p,{children:["It allows an account, the owner of ",(0,n.jsx)(s.code,{children:"level"})," permission, to approve a proposal ",(0,n.jsx)(s.code,{children:"proposal_name"})," proposed by ",(0,n.jsx)(s.code,{children:"proposer"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["If the proposal's requested approval list contains the ",(0,n.jsx)(s.code,{children:"level"})," permission required, then the ",(0,n.jsx)(s.code,{children:"level"})," permission is moved from ",(0,n.jsx)(s.code,{children:"requested_approvals"})," list to ",(0,n.jsx)(s.code,{children:"provided_approvals"})," list of the proposal, thus persisting the approval for\nthe proposal. Storage changes are billed to ",(0,n.jsx)(s.code,{children:"proposer"}),"."]}),"\n",(0,n.jsx)(s.h3,{id:"unapprove",children:(0,n.jsx)(s.code,{children:"unapprove"})}),"\n",(0,n.jsxs)(s.p,{children:["Revokes approval of a proposed transaction(reverse of the ",(0,n.jsx)(s.code,{children:"approve"})," action)."]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Parameter Name"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"proposer"})}),(0,n.jsx)(s.td,{children:"The account that initiated the proposal."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"proposal_name"})}),(0,n.jsx)(s.td,{children:"The name of the proposal to unapprove."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"level"})}),(0,n.jsx)(s.td,{children:"The permission level revoking approval."})]})]})]}),"\n",(0,n.jsxs)(s.p,{children:["If all validations pass, the ",(0,n.jsx)(s.code,{children:"level"})," permission is erased from internal ",(0,n.jsx)(s.code,{children:"provided_approvals"})," and added to the internal\n",(0,n.jsx)(s.code,{children:"requested_approvals"})," list, and thus un-approve or revoke the proposal."]}),"\n",(0,n.jsx)(s.h3,{id:"cancel",children:(0,n.jsx)(s.code,{children:"cancel"})}),"\n",(0,n.jsx)(s.p,{children:"Cancels an existing proposal."}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Parameter Name"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"proposer"})}),(0,n.jsx)(s.td,{children:"The account that initiated the proposal."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"proposal_name"})}),(0,n.jsx)(s.td,{children:"The name of the proposal to be canceled."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"canceler"})}),(0,n.jsx)(s.td,{children:"The account responsible for canceling the proposal."})]})]})]}),"\n",(0,n.jsxs)(s.p,{children:["Allows the ",(0,n.jsx)(s.code,{children:"canceler"})," account to cancel the ",(0,n.jsx)(s.code,{children:"proposal_name"})," proposal, created by a ",(0,n.jsx)(s.code,{children:"proposer"}),",\nonly after time has expired on the proposed transaction. It removes corresponding entries from internal tables."]}),"\n",(0,n.jsx)(s.h3,{id:"exec",children:(0,n.jsx)(s.code,{children:"exec"})}),"\n",(0,n.jsx)(s.p,{children:"Executes a proposal that has been approved by all required permission levels."}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Parameter Name"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"proposer"})}),(0,n.jsx)(s.td,{children:"The account that initiated the proposal."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"proposal_name"})}),(0,n.jsx)(s.td,{children:"The name of the proposal to execute."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"executer"})}),(0,n.jsx)(s.td,{children:"The account executing the proposal."})]})]})]}),"\n",(0,n.jsxs)(s.p,{children:["Prerequisites for ",(0,n.jsx)(s.code,{children:"exec"})," action:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"executer"})," has authorization"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"proposal_name"})," is found in the proposals table"]}),"\n",(0,n.jsx)(s.li,{children:"all requested approvals have been received"}),"\n",(0,n.jsxs)(s.li,{children:["proposed transaction is ",(0,n.jsx)(s.strong,{children:"not"})," expired"]}),"\n",(0,n.jsx)(s.li,{children:"and approval accounts are not found in invalidations table"}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["If all prerequisites are met, the transaction is executed as a ",(0,n.jsx)(s.em,{children:"deferred transaction"}),",\nand the proposal is erased from the proposals table."]}),"\n",(0,n.jsx)(s.h3,{id:"invalidate",children:(0,n.jsx)(s.code,{children:"invalidate"})}),"\n",(0,n.jsx)(s.p,{children:"Invalidates the sender\u2019s approvals, preventing execution of any dependent proposals."}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Parameter Name"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"account"})}),(0,n.jsx)(s.td,{children:"The account invalidating its own approvals."})]})})]}),"\n",(0,n.jsx)(s.h2,{id:"tables-and-storage",children:"Tables and Storage"}),"\n",(0,n.jsx)(s.h3,{id:"proposal",children:(0,n.jsx)(s.code,{children:"proposal"})}),"\n",(0,n.jsx)(s.p,{children:"Stores the details of each proposed transaction."}),"\n",(0,n.jsx)(s.h3,{id:"approvals",children:(0,n.jsx)(s.code,{children:"approvals"})}),"\n",(0,n.jsx)(s.p,{children:"Manages the approvals needed and given for each proposal."}),"\n",(0,n.jsx)(s.h3,{id:"invalidation",children:(0,n.jsx)(s.code,{children:"invalidation"})}),"\n",(0,n.jsx)(s.p,{children:"Keeps track of invalidated approvals to ensure they are not used in executing proposals."})]})}function h(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,s,r)=>{r.d(s,{R:()=>t,x:()=>c});var n=r(96540);const o={},i=n.createContext(o);function t(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);