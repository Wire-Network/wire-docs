"use strict";(self.webpackChunkwire_docs=self.webpackChunkwire_docs||[]).push([[3648],{90600:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var n=t(74848),s=t(28453);const i={title:"Replay from a snapshot"},a=void 0,r={id:"api-reference/tooling/nodeop/how-to/how-to-replay-from-a-snapshot",title:"Replay from a snapshot",description:"Once you have obtained a copy of a valid snapshot file from which you wish to create a valid chain state, copy it to your data/snapshots directory, backing up (if you wish to keep them) and removing any existing contents of the data directory.",source:"@site/docs/api-reference/tooling/nodeop/how-to/how-to-replay-from-a-snapshot.md",sourceDirName:"api-reference/tooling/nodeop/how-to",slug:"/api-reference/tooling/nodeop/how-to/how-to-replay-from-a-snapshot",permalink:"/docs/api-reference/tooling/nodeop/how-to/how-to-replay-from-a-snapshot",draft:!1,unlisted:!1,editUrl:"https://github.com/Wire-Network/wire-docs/docs/api-reference/tooling/nodeop/how-to/how-to-replay-from-a-snapshot.md",tags:[],version:"current",frontMatter:{title:"Replay from a snapshot"},sidebar:"apiReferenceSidebar",previous:{title:"Replay from a blocks.log file",permalink:"/docs/api-reference/tooling/nodeop/how-to/how-to-replay-from-a-blocks.log"},next:{title:"Replay or resync with full history",permalink:"/docs/api-reference/tooling/nodeop/how-to/how-to-replay-or-resync-with-full-history"}},l={},c=[];function h(e){const o={code:"code",em:"em",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.p,{children:"Once you have obtained a copy of a valid snapshot file from which you wish to create a valid chain state, copy it to your data/snapshots directory, backing up (if you wish to keep them) and removing any existing contents of the data directory."}),"\n",(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{children:"location"}),(0,n.jsx)(o.th,{children:"name"}),(0,n.jsx)(o.th,{children:"action"})]})}),(0,n.jsxs)(o.tbody,{children:[(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"data/snapshots"}),(0,n.jsx)(o.td,{children:(0,n.jsx)(o.code,{children:"<head block id in hex>.bin"})}),(0,n.jsx)(o.td,{children:"place the snapshot file you want to replay here"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"data/"}),(0,n.jsx)(o.td,{children:"*"}),(0,n.jsx)(o.td,{children:"remove"})]})]})]}),"\n",(0,n.jsxs)(o.p,{children:["You can use ",(0,n.jsx)(o.code,{children:'snapshots-dir = "snapshots"'})," in the configuration file or using the ",(0,n.jsx)(o.code,{children:"--snapshots-dir"})," command line option, to specify the where to find the the snapshot to replay, use ",(0,n.jsx)(o.code,{children:"--snapshot"})," to specify the name of the snapshot to replay."]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-sh",children:"nodeop --snapshot yoursnapshot.name \\\n  --plugin sysio::producer_plugin  \\\n  --plugin sysio::chain_api_plugin \\\n  --plugin sysio::http_plugin      \\\n  >> nodeop.log 2>&1 &\n"})}),"\n",(0,n.jsxs)(o.p,{children:["When replaying from a snapshot file it is recommended that all existing data is removed, however if a blocks.log file is provided it ",(0,n.jsx)(o.em,{children:"must"})," at least contain blocks up to the snapshotted block and ",(0,n.jsx)(o.em,{children:"may"})," contain additional blocks that will be applied as part of startup.  If a blocks.log file exists, but does not contain blocks up to and/or after the snapshotted block then replaying from a snapshot will create an exception. Any available reversible blocks will also be applied."]}),"\n",(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{children:"blocks.log"}),(0,n.jsx)(o.th,{children:"snapshot"}),(0,n.jsx)(o.th,{children:"action"})]})}),(0,n.jsxs)(o.tbody,{children:[(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"no blocks.log"}),(0,n.jsx)(o.td,{children:"for irreversible block 2000"}),(0,n.jsx)(o.td,{children:"ok"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"contains blocks 1 - 1999"}),(0,n.jsx)(o.td,{children:"for irreversible block 2000"}),(0,n.jsx)(o.td,{children:"exception"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"contains blocks 1 - 2001"}),(0,n.jsx)(o.td,{children:"for irreversible block 2000"}),(0,n.jsx)(o.td,{children:"ok - will recreate from snapshot and 'play' block 2001"})]})]})]}),"\n",(0,n.jsxs)(o.p,{children:["When instantiating a node from a snapshot file, it is invalid to pass in the ",(0,n.jsx)(o.code,{children:"--genesis-json"})," or ",(0,n.jsx)(o.code,{children:"--genesis-timestamp"})," arguments to ",(0,n.jsx)(o.code,{children:"nodeop"})," as that information is loaded from the snapshot file. If a ",(0,n.jsx)(o.code,{children:"blocks.log"})," file exists, the genesis information it contains will be validated against the genesis data in the snapshot.  The replay will fail with an error if the genesis data is not consistent, i.e. it checks that the blocks.log file and the snapshot file are for the same blockchain."]})]})}function d(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,o,t)=>{t.d(o,{R:()=>a,x:()=>r});var n=t(96540);const s={},i=n.createContext(s);function a(e){const o=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function r(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(i.Provider,{value:o},e.children)}}}]);