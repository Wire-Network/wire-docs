"use strict";(self.webpackChunkwire_docs=self.webpackChunkwire_docs||[]).push([[3128],{95127:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>l,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=n(74848),o=n(28453);const r={},a="Deposits",s={id:"introduction/deposits",title:"Deposits",description:"Before users can transact with tokens on the Wire network, their tokens must be \u2018shadowed\u2019 from the origin chain. Shadowing, also known as token wrapping, is creating a digital representation of a token from one blockchain on another. For example, Ethereum (ETH) on the Wire Network is represented as Wrapped Ethereum (WETH) to enable its use within that specific ecosystem.",source:"@site/docs/introduction/deposits.md",sourceDirName:"introduction",slug:"/introduction/deposits",permalink:"/docs/introduction/deposits",draft:!1,unlisted:!1,editUrl:"https://github.com/Wire-Network/wire-docs/docs/introduction/deposits.md",tags:[],version:"current",frontMatter:{},sidebar:"contentSidebar",previous:{title:"WNS Transaction Flow",permalink:"/docs/introduction/wns-trx-flow"},next:{title:"Glossary",permalink:"/docs/introduction/glossary"}},d={},c=[{value:"Deposit Root",id:"deposit-root",level:2}];function h(e){const t={em:"em",h1:"h1",h2:"h2",header:"header",li:"li",mermaid:"mermaid",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"deposits",children:"Deposits"})}),"\n",(0,i.jsx)(t.p,{children:"Before users can transact with tokens on the Wire network, their tokens must be \u2018shadowed\u2019 from the origin chain. Shadowing, also known as token wrapping, is creating a digital representation of a token from one blockchain on another. For example, Ethereum (ETH) on the Wire Network is represented as Wrapped Ethereum (WETH) to enable its use within that specific ecosystem."}),"\n",(0,i.jsxs)(t.p,{children:["The deposit process involves ",(0,i.jsx)(t.em,{children:"transferring the ownership of the tokens to a special escrow contract"}),", where they are held until the eventual recipient decides to claim them. This contract serves as the foundational mechanism for managing the ",(0,i.jsx)(t.em,{children:"deposit root"}),", which is essential for tracking and verifying the deposits within the network."]}),"\n",(0,i.jsx)(t.h2,{id:"deposit-root",children:"Deposit Root"}),"\n",(0,i.jsx)(t.p,{children:"The deposit root is a dynamic cryptographic hash used as a cumulative verification point within the escrow account on the external chain."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Initialization and Update"}),": The deposit root is initialized with a deterministic value. Each transaction updates this root by hashing the transaction details with the existing deposit root value and incorporating a sequential identifier to ensure traceability."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Proof Construction"}),": This updating mechanism facilitates the creation of a verifiable proof that includes the initial deposit root value, detailed transaction information, and all subsequent transaction hashes."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Below is a detailed diagram of the deposit flow of operations:"}),"\n",(0,i.jsx)(t.mermaid,{value:"sequenceDiagram\n    autonumber\n    participant User\n    participant External Chain\n    participant Validator\n    participant Wire Network\n\n    User->>Wire Network: Intent to deposit\n    rect rgb(255, 210, 128)\n        User -> Wire Network: amount/kind of token to be deposited <br/> the current deposit root on the origin chain <br/> the user's account on the origin chain <br/> the next sequential nonce for that user's account (if applicable)\n    end\n\n    %% alt Proposed deposit is valid\n    Validator->>External Chain: Verifies\n    Validator->>Validator: wait for acceptance\n    Validator->>Wire Network: Acceptance\n\n    User->>External Chain: Perform deposit\n    External Chain->>External Chain: on_received() \n    External Chain->>External Chain: Hash transaction details\n    Note over External Chain,External Chain: - The sender (depositor)<br/>- contract address for the token<br/>- Token ID (for ERC 721 & 1155)<br/>- Amount (for ERC 20 & 1155)    \n    External Chain->>External Chain: Hash with existing deposit root\n    External Chain->>External Chain: Take 32 LSB from existing root<br/>Increment and update new deposit root\n    External Chain->>External Chain: Write new deposit root to contract state\n    External Chain--\x3e>User: event with new deposit root\n    \n    User->>Wire Network: Perform 'report' transaction\n    rect rgb(191, 223, 255)\n        User -> Wire Network: Signed Transaction, deposit root, and chained roots\n    end\n    Wire Network->>Validator: Send report transaction\n    Validator->>External Chain: Verify deposit\n    External Chain--\x3e>Validator: Is deposit valid?\n    \n    alt Deposit is valid\n        Validator->>Wire Network: Emit ratification\n        \n    else Deposit not performed\n        alt Nonce used\n            Validator->>Wire Network: Write denial with transaction data\n        else Nonce not used\n            Validator->>External Chain: Perform signed transaction on external chain\n            Validator->>Wire Network: Emit ratification\n            External Chain--\x3e>Validator: Transaction executed\n\n            Validator->>Wire Network: Write denial showing chain <br/> from proposal deposit root not including deposit\n        end\n    end\n"})]})}function l(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>s});var i=n(96540);const o={},r=i.createContext(o);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);