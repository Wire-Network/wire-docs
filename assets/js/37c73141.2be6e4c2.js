"use strict";(self.webpackChunkwire_docs=self.webpackChunkwire_docs||[]).push([[2490],{62639:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>a});var t=n(74848),i=n(28453);const s={title:"Nodeop Replays"},l=void 0,r={id:"api-reference/tooling/nodeop/replays",title:"Nodeop Replays",description:"Nodeop provides various options for replaying blockchain blocks. This can be useful if, for example, a node has downloaded a blocks.log file from the internet (as a faster alternative to synchronizing from the p2p network) and the node wants to use it to quickly catch up with the network, or if you want to know the chain state at specified points in a blockchain's life.",source:"@site/docs/api-reference/tooling/nodeop/replays.md",sourceDirName:"api-reference/tooling/nodeop",slug:"/api-reference/tooling/nodeop/replays",permalink:"/docs/api-reference/tooling/nodeop/replays",draft:!1,unlisted:!1,editUrl:"https://github.com/Wire-Network/wire-docs/docs/api-reference/tooling/nodeop/replays.md",tags:[],version:"current",frontMatter:{title:"Nodeop Replays"},sidebar:"apiReferenceSidebar",previous:{title:"Deep-mind Logger Integration",permalink:"/docs/api-reference/tooling/nodeop/logging/third-party-logging/deep-mind-logger"},next:{title:"Configure state storage",permalink:"/docs/api-reference/tooling/nodeop/how-to/how-to-configure-state-storage"}},c={},a=[{value:"Replay How-Tos",id:"replay-how-tos",level:2},{value:"Replay Snapshot-specific Options",id:"replay-snapshot-specific-options",level:2}];function h(e){const o={a:"a",br:"br",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.p,{children:["Nodeop provides various options for replaying blockchain blocks. This can be useful if, for example, a node has downloaded a ",(0,t.jsx)(o.code,{children:"blocks.log"})," file from the internet (as a faster alternative to synchronizing from the p2p network) and the node wants to use it to quickly catch up with the network, or if you want to know the chain state at specified points in a blockchain's life."]}),"\n",(0,t.jsx)(o.p,{children:"Replaying data can be done in two ways:"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsxs)(o.p,{children:["From a ",(0,t.jsxs)(o.strong,{children:[(0,t.jsx)(o.code,{children:"blocks.log"})," file"]}),":",(0,t.jsx)(o.br,{}),"\n","The ",(0,t.jsx)(o.code,{children:"blocks.log"})," file contains all irreversible transactions on the blockchain. All instances of ",(0,t.jsx)(o.code,{children:"nodeop"})," write irreversible blocks to the ",(0,t.jsx)(o.code,{children:"blocks.log"})," file, which is located at the ",(0,t.jsx)(o.code,{children:"data/blocks"})," directory relative to the ",(0,t.jsx)(o.code,{children:"nodeop"})," directory. Using a ",(0,t.jsx)(o.code,{children:"blocks.log"})," file to replay will allow you to start a ",(0,t.jsx)(o.code,{children:"nodeop"})," instance, which recreates the entire history of the blockchain locally, without adding unnecessary load to the network."]}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsxs)(o.p,{children:["From a ",(0,t.jsx)(o.strong,{children:"snapshot file"}),":",(0,t.jsx)(o.br,{}),"\n","Snapshot files can be created from a running ",(0,t.jsx)(o.code,{children:"nodeop"})," instance. The snapshot contains the chain state for the block referenced when created. It is recommended to use snapshot files created from blocks that are irreversible. Using a snapshot file to replay allows you to quickly start a ",(0,t.jsx)(o.code,{children:"nodeop"})," instance which has a full and correct chain state at a specified block number, but not a full history of transactions up to that block number. From that point on the ",(0,t.jsx)(o.code,{children:"nodeop"})," instance will operate in the configured manner."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(o.h2,{id:"replay-how-tos",children:"Replay How-Tos"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/api-reference/tooling/nodeop/how-to/how-to-generate-a-blocks.log",children:"How To Generate a Blocks Log"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/api-reference/tooling/nodeop/how-to/how-to-generate-a-snapshot",children:"How To Generate a Snapshot"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/api-reference/tooling/nodeop/how-to/how-to-replay-from-a-blocks.log",children:"How To Replay from a Blocks Log"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/api-reference/tooling/nodeop/how-to/how-to-replay-from-a-snapshot",children:"How to Replay from a Snapshot"})}),"\n"]}),"\n",(0,t.jsx)(o.h2,{id:"replay-snapshot-specific-options",children:"Replay Snapshot-specific Options"}),"\n",(0,t.jsxs)(o.p,{children:["Typing ",(0,t.jsx)(o.code,{children:"nodeop --help"})," on the command line will show you all the options available for running ",(0,t.jsx)(o.code,{children:"nodeop"}),". The snapshot and replay specific options are:"]}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"--force-all-checks"}),(0,t.jsx)(o.br,{}),"\n","The node operator may not trust the source of the ",(0,t.jsx)(o.code,{children:"blocks.log"})," file and may want to run ",(0,t.jsx)(o.code,{children:"nodeop"})," with ",(0,t.jsx)(o.code,{children:"--replay-blockchain --force-all-checks"})," the first time to make sure the blocks are good. The ",(0,t.jsx)(o.code,{children:"--force-all-checks"})," flag can be passed into ",(0,t.jsx)(o.code,{children:"nodeop"})," to tell it to not skip any checks during replay."]}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"--disable-replay-opts"}),(0,t.jsx)(o.br,{}),"\n","By default, during replay, ",(0,t.jsx)(o.code,{children:"nodeop"})," does not create a stack of chain state deltas (this stack is used to enable rollback of state for reversible blocks.) This is a replay performance optimization. Using this option turns off this replay optimization and creates a stack of chain state deltas. If you are using the state history plugin you must use this option."]}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"--replay-blockchain"}),(0,t.jsx)(o.br,{}),"\n","This option tells ",(0,t.jsx)(o.code,{children:"nodeop"})," to replay from the ",(0,t.jsx)(o.code,{children:"blocks.log"})," file located in the data/blocks directory. ",(0,t.jsx)(o.code,{children:"nodeop"})," will clear the chain state and replay all blocks."]}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"--hard-replay-blockchain"}),(0,t.jsx)(o.br,{}),"\n","This option tells ",(0,t.jsx)(o.code,{children:"nodeop"})," to replay from the ",(0,t.jsx)(o.code,{children:"blocks.log"})," file located in the data/blocks directory. ",(0,t.jsx)(o.code,{children:"nodeop"})," makes a backup of the existing ",(0,t.jsx)(o.code,{children:"blocks.log"})," file and will then clear the chain state and replay all blocks. This option assumes that the backup ",(0,t.jsx)(o.code,{children:"blocks.log"})," file may contain corrupted blocks, so ",(0,t.jsx)(o.code,{children:"nodeop"})," replays as many blocks as possible from the backup block log. When ",(0,t.jsx)(o.code,{children:"nodeop"})," finds the first corrupted block while replying from ",(0,t.jsx)(o.code,{children:"nodeop.log"})," it will synchronize the rest of the blockchain from the p2p network."]}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"--delete-all-blocks"}),(0,t.jsx)(o.br,{}),"\n","This tells ",(0,t.jsx)(o.code,{children:"nodeop"})," to clear the local chain state and local the ",(0,t.jsx)(o.code,{children:"blocks.log"})," file, If you intend to then synchronize from the p2p network you would need to provide a correct ",(0,t.jsx)(o.code,{children:"genesis.json"})," file. This option is not recommended."]}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"--truncate-at-block"}),(0,t.jsx)(o.br,{}),"\n","Default argument (=0), only used if the given value is non-zero.\nUsing this option when replaying the blockchain will force the replay to stop at the specified block number. This option will only work if replaying with the ",(0,t.jsx)(o.code,{children:"--hard-replay-blockchain"})," option, or, when not replaying, the ",(0,t.jsx)(o.code,{children:"--fix-reversible-blocks"})," option. The local ",(0,t.jsx)(o.code,{children:"nodeop"})," process will contain the chain state for that block. This option may be useful for checking blockchain state at specific points in time. It is intended for testing/validation and is not intended to be used when creating a local ",(0,t.jsx)(o.code,{children:"nodeop"})," instance which is synchronized with the network."]}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"--snapshot"}),(0,t.jsx)(o.br,{}),"\n","Use this option to specify which snapshot file to use to recreate the chain state from a snapshot file. This option will not replay the ",(0,t.jsx)(o.code,{children:"blocks.log"})," file. The ",(0,t.jsx)(o.code,{children:"nodeop"})," instance will not know the full transaction history of the blockchain."]}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"--snapshots-dir"}),(0,t.jsx)(o.br,{}),"\n","You can use this to specify the location of the snapshot file directory  (absolute path or relative to application data dir.)"]}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"--blocks-dir"}),(0,t.jsx)(o.br,{}),"\n","You can use this to specify the location of the ",(0,t.jsx)(o.code,{children:"blocks.log"})," file directory  (absolute path or relative to application data dir)"]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:o}={...(0,i.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,o,n)=>{n.d(o,{R:()=>l,x:()=>r});var t=n(96540);const i={},s=t.createContext(i);function l(e){const o=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function r(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(s.Provider,{value:o},e.children)}}}]);