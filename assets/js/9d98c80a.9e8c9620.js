"use strict";(self.webpackChunkwire_docs=self.webpackChunkwire_docs||[]).push([[6959],{44230:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var n=t(74848),r=t(28453);const s={title:"Replay from a blocks.log file"},i=void 0,c={id:"api-reference/tooling/nodeop/how-to/how-to-replay-from-a-blocks.log",title:"Replay from a blocks.log file",description:"Once you have obtained a copy of the blocks.log file which you wish to replay the blockchain from, copy it to your data/blocks directory, backing up any existing contents if you wish to keep them, and remove the blocks.index, forkdb.dat, sharedmemory.bin, and sharedmemory.meta.",source:"@site/docs/api-reference/tooling/nodeop/how-to/how-to-replay-from-a-blocks.log.md",sourceDirName:"api-reference/tooling/nodeop/how-to",slug:"/api-reference/tooling/nodeop/how-to/how-to-replay-from-a-blocks.log",permalink:"/docs/api-reference/tooling/nodeop/how-to/how-to-replay-from-a-blocks.log",draft:!1,unlisted:!1,editUrl:"https://github.com/Wire-Network/wire-docs/edit/master/docs/api-reference/tooling/nodeop/how-to/how-to-replay-from-a-blocks.log.md",tags:[],version:"current",frontMatter:{title:"Replay from a blocks.log file"},sidebar:"apiReferenceSidebar",previous:{title:"Generate a snapshot",permalink:"/docs/api-reference/tooling/nodeop/how-to/how-to-generate-a-snapshot"},next:{title:"Replay from a snapshot",permalink:"/docs/api-reference/tooling/nodeop/how-to/how-to-replay-from-a-snapshot"}},l={},d=[];function a(e){const o={code:"code",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o.p,{children:["Once you have obtained a copy of the ",(0,n.jsx)(o.code,{children:"blocks.log"})," file which you wish to replay the blockchain from, copy it to your ",(0,n.jsx)(o.code,{children:"data/blocks"})," directory, backing up any existing contents if you wish to keep them, and remove the ",(0,n.jsx)(o.code,{children:"blocks.index"}),", ",(0,n.jsx)(o.code,{children:"forkdb.dat"}),", ",(0,n.jsx)(o.code,{children:"shared_memory.bin"}),", and ",(0,n.jsx)(o.code,{children:"shared_memory.meta"}),"."]}),"\n",(0,n.jsx)(o.p,{children:"The table below sumarizes the actions you should take for each of the files enumerated above:"}),"\n",(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{children:"Folder name"}),(0,n.jsx)(o.th,{children:"File name"}),(0,n.jsx)(o.th,{children:"Action"})]})}),(0,n.jsxs)(o.tbody,{children:[(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"data/blocks"}),(0,n.jsx)(o.td,{children:"blocks.index"}),(0,n.jsx)(o.td,{children:"Remove"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"data/blocks"}),(0,n.jsx)(o.td,{children:"blocks.log"}),(0,n.jsxs)(o.td,{children:["Replace this file with the ",(0,n.jsx)(o.code,{children:"blocks.log"})," you want to replay"]})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"data/state"}),(0,n.jsx)(o.td,{children:"fork_db.dat"}),(0,n.jsx)(o.td,{children:"Remove"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"data/blocks/reversible"}),(0,n.jsx)(o.td,{children:"shared_memory.bin"}),(0,n.jsx)(o.td,{children:"Remove"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"data/blocks/reversible"}),(0,n.jsx)(o.td,{children:"shared_memory.meta"}),(0,n.jsx)(o.td,{children:"Remove"})]})]})]}),"\n",(0,n.jsxs)(o.p,{children:["You can use ",(0,n.jsx)(o.code,{children:'blocks-dir = "blocks"'})," in the ",(0,n.jsx)(o.code,{children:"config.ini"})," file, or use the ",(0,n.jsx)(o.code,{children:"--blocks-dir"})," command line option, to specify where to find the ",(0,n.jsx)(o.code,{children:"blocks.log"})," file to replay."]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-sh",children:"nodeop --replay-blockchain \\\n  --plugin sysio::producer_plugin  \\\n  --plugin sysio::chain_api_plugin \\\n  --plugin sysio::http_plugin      \\\n  >> nodeop.log 2>&1 &\n"})})]})}function h(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},28453:(e,o,t)=>{t.d(o,{R:()=>i,x:()=>c});var n=t(96540);const r={},s=n.createContext(r);function i(e){const o=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(s.Provider,{value:o},e.children)}}}]);