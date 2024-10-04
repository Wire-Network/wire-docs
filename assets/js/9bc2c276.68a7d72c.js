"use strict";(self.webpackChunkwire_docs=self.webpackChunkwire_docs||[]).push([[9469],{75315:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var t=s(74848),o=s(28453);const i={title:"net status"},r=void 0,c={id:"api-reference/tooling/clio/command-reference/net/status",title:"net status",description:"Command",source:"@site/docs/api-reference/tooling/clio/command-reference/net/status.md",sourceDirName:"api-reference/tooling/clio/command-reference/net",slug:"/api-reference/tooling/clio/command-reference/net/status",permalink:"/docs/api-reference/tooling/clio/command-reference/net/status",draft:!1,unlisted:!1,editUrl:"https://github.com/Wire-Network/wire-docs/edit/master/docs/api-reference/tooling/clio/command-reference/net/status.md",tags:[],version:"current",frontMatter:{title:"net status"},sidebar:"apiReferenceSidebar",previous:{title:"net peers",permalink:"/docs/api-reference/tooling/clio/command-reference/net/peers"},next:{title:"push",permalink:"/docs/api-reference/tooling/clio/command-reference/push/"}},l={},a=[{value:"Command",id:"command",level:2},{value:"Description",id:"description",level:2},{value:"Command Usage",id:"command-usage",level:2},{value:"Positionals",id:"positionals",level:3},{value:"Options",id:"options",level:3},{value:"Requirements",id:"requirements",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"command",children:"Command"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"clio net status [OPTIONS] host\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Where:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["[OPTIONS] = See ",(0,t.jsx)(n.strong,{children:"Options"})," in the ",(0,t.jsx)(n.a,{href:"#command-usage",children:(0,t.jsx)(n.strong,{children:"Command Usage"})})," section below."]}),"\n",(0,t.jsxs)(n.li,{children:["host = The hostname",":port"," to query status of connection"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," The arguments and options enclosed in square brackets are optional."]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Returns the status of a connected peer. This command allows a node operator to check the status of a node's connected peer."}),"\n",(0,t.jsx)(n.h2,{id:"command-usage",children:"Command Usage"}),"\n",(0,t.jsxs)(n.p,{children:["The following information shows the different positionals and options you can use with the ",(0,t.jsx)(n.code,{children:"clio net status"})," command:"]}),"\n",(0,t.jsx)(n.h3,{id:"positionals",children:"Positionals"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"host"})," ",(0,t.jsx)(n.em,{children:"TEXT"})," REQUIRED - The hostname",":port"," to query status of connection"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"-h,--help"})," - Print this help message and exit"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,t.jsx)(n.p,{children:"Make sure you meet the following requirements:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Install the currently supported version of ",(0,t.jsx)(n.code,{children:"clio"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["| The ",(0,t.jsx)(n.code,{children:"clio"})," tool is bundled with the Wire software. ",(0,t.jsx)(n.a,{href:"/docs/getting-started/install-dependencies",children:"Installing Wire core"})," will install the ",(0,t.jsx)(n.code,{children:"clio"})," and ",(0,t.jsx)(n.code,{children:"kiod"})," command line tools."]})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["You have access to a producing node instance with the ",(0,t.jsx)(n.a,{href:"/docs/api-reference/tooling/nodeop/plugins/net-api-plugin",children:(0,t.jsx)(n.code,{children:"net_api_plugin"})})," loaded."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(n.p,{children:["The following examples demonstrate how to use the ",(0,t.jsx)(n.code,{children:"clio net status"})," command:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["List the status of a connected peer listening at p2p address ",(0,t.jsx)(n.code,{children:"localhost:9001"})," for a local node listening at http address ",(0,t.jsx)(n.code,{children:"http://127.0.0.1:8002"}),":"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"clio -u http://127.0.0.1:8002 net status localhost:9001\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Output:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "peer": "localhost:9001",\n  "connecting": false,\n  "syncing": false,\n  "last_handshake": {\n    "network_version": 1210,\n    "chain_id": "60fb0eb4742886af8a0e147f4af6fd363e8e8d8f18bdf73a10ee0134fec1c551",\n    "node_id": "7432b032b50a5a3b04a220c48d75f12e5a089405dfee578c3e5b4cf46865e86e",\n    "key": "EOS1111111111111111111111111111111114T1Anm",\n    "time": "1620935866018960000",\n    "token": "0000000000000000000000000000000000000000000000000000000000000000",\n    "sig": "SIG_K1_111111111111111111111111111111111111111111111111111111111111111116uk5ne",\n    "p2p_address": "127.0.0.1:9001 - 7432b03",\n    "last_irreversible_block_num": 184,\n    "last_irreversible_block_id": "000000b899bd9462ac4697b5d265e47ef5d88d5a66a24a1c2d37de7974fe32f5",\n    "head_num": 185,\n    "head_id": "000000b9f79e2394a48738fb3c8c87dac944094648c23818427e1d44375b6034",\n    "os": "osx",\n    "agent": "EOS Test Agent",\n    "generation": 1\n  }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," The ",(0,t.jsx)(n.code,{children:"last_handshake"})," field contains the chain state of the specified peer as of the last handshake message with the node. For more information read the ",(0,t.jsx)(n.a,{href:"https://developers.eos.io/welcome/latest/protocol/network_peer_protocol#421-handshake-message",children:"Handshake Message"})," in the ",(0,t.jsx)(n.em,{children:"Network Peer Protocol"})," document."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>c});var t=s(96540);const o={},i=t.createContext(o);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);