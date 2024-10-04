"use strict";(self.webpackChunkwire_docs=self.webpackChunkwire_docs||[]).push([[2229],{95194:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>d});var l=i(74848),o=i(28453);const r={},s=void 0,t={id:"api-reference/tooling/clio/command-reference/wallet/import",title:"import",description:"Command",source:"@site/docs/api-reference/tooling/clio/command-reference/wallet/import.md",sourceDirName:"api-reference/tooling/clio/command-reference/wallet",slug:"/api-reference/tooling/clio/command-reference/wallet/import",permalink:"/docs/api-reference/tooling/clio/command-reference/wallet/import",draft:!1,unlisted:!1,editUrl:"https://github.com/Wire-Network/wire-docs/edit/master/docs/api-reference/tooling/clio/command-reference/wallet/import.md",tags:[],version:"current",frontMatter:{},sidebar:"apiReferenceSidebar",previous:{title:"create_key",permalink:"/docs/api-reference/tooling/clio/command-reference/wallet/create-key"},next:{title:"keys",permalink:"/docs/api-reference/tooling/clio/command-reference/wallet/keys"}},c={},d=[{value:"Command",id:"command",level:2},{value:"Description",id:"description",level:2},{value:"Command Usage",id:"command-usage",level:2},{value:"Positionals:",id:"positionals",level:3},{value:"Options",id:"options",level:3},{value:"Requirements",id:"requirements",level:2},{value:"Examples",id:"examples",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"command",children:"Command"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"clio wallet import [OPTIONS]\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Where"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["[OPTIONS] = See Options in  ",(0,l.jsx)(n.a,{href:"#command-usage",children:"Command Usage"})," section below."]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Note"}),": The arguments and options enclosed in square brackets are optional."]}),"\n",(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(n.p,{children:["Imports private key into wallet. This command will launch ",(0,l.jsx)(n.code,{children:"kiod"})," if it is not already running."]}),"\n",(0,l.jsx)(n.h2,{id:"command-usage",children:"Command Usage"}),"\n",(0,l.jsxs)(n.p,{children:["The following information shows the different positionals and options you can use with the ",(0,l.jsx)(n.code,{children:"clio wallet import"})," command:"]}),"\n",(0,l.jsx)(n.h3,{id:"positionals",children:"Positionals:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"none"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"-h,--help"})," - Print this help message and exit"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"-n, --name"})," ",(0,l.jsx)(n.em,{children:"TEXT"})," - The name of the wallet to import key into."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"--private-key"})," ",(0,l.jsx)(n.em,{children:"TEXT"})," - Private key in WIF format to import."]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Install the currently supported version of ",(0,l.jsx)(n.code,{children:"clio"})," and ",(0,l.jsx)(n.code,{children:"kiod"}),"."]}),"\n"]}),"\n",(0,l.jsx)(n.admonition,{type:"info",children:(0,l.jsxs)(n.p,{children:["| The ",(0,l.jsx)(n.code,{children:"clio"})," and ",(0,l.jsx)(n.code,{children:"kiod"})," tools are bundled with the Wire software. ",(0,l.jsx)(n.a,{href:"/docs/getting-started/install-dependencies",children:"Installing Wire core"})," will install the ",(0,l.jsx)(n.code,{children:"clio"})," and ",(0,l.jsx)(n.code,{children:"kiod"})," command line tools."]})}),"\n",(0,l.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["Import a private key to the default wallet. The wallet must be ",(0,l.jsx)(n.strong,{children:"open"})," and ",(0,l.jsx)(n.strong,{children:"unlocked"}),"."]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"clio wallet import\n"})}),"\n",(0,l.jsx)(n.p,{children:"The command asks for the private key. Enter it."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"5KDNWQvY2seBPVUz7MiiaEDGTwACfuXu78bwZu7w2UDM9A3u3Fs\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Example Output"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"private key: imported private key for: EOS5zG7PsdtzQ9achTdRtXwHieL7yyigBFiJDRAQonqBsfKyL3XhC\n"})}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["Import a private key to a named wallet. The wallet must be ",(0,l.jsx)(n.code,{children:"open"})," and ",(0,l.jsx)(n.code,{children:"unlocked."})]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"clio wallet import --name my_wallet --private-key 5KDNWQvY2seBPVUz7MiiaEDGTwACfuXu78bwZu7w2UDM9A3u3Fs\n"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Where"}),"\n",(0,l.jsx)(n.code,{children:"--name"})," my_wallet = Tells the ",(0,l.jsx)(n.code,{children:"clio wallet import"})," command to import the key to ",(0,l.jsx)(n.code,{children:"my_wallet"}),"\n",(0,l.jsx)(n.code,{children:"--private-key"})," 5KDNWQvY2seBPVUz7MiiaEDGTwACfuXu78bwZu7w2UDM9A3u3Fs = Tells the ",(0,l.jsx)(n.code,{children:"clio wallet import"})," command the private key to import"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Example Output"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"imported private key for: EOS5zG7PsdtzQ9achTdRtXwHieL7yyigBFiJDRAQonqBsfKyL3XhC\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>t});var l=i(96540);const o={},r=l.createContext(o);function s(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);