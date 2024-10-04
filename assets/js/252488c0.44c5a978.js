"use strict";(self.webpackChunkwire_docs=self.webpackChunkwire_docs||[]).push([[5959],{48760:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var i=s(74848),c=s(28453);const o={id:"set-account",title:"set account"},t=void 0,r={id:"api-reference/tooling/clio/command-reference/set/set-account",title:"set account",description:"Command",source:"@site/docs/api-reference/tooling/clio/command-reference/set/set-account.md",sourceDirName:"api-reference/tooling/clio/command-reference/set",slug:"/api-reference/tooling/clio/command-reference/set/set-account",permalink:"/docs/api-reference/tooling/clio/command-reference/set/set-account",draft:!1,unlisted:!1,editUrl:"https://github.com/Wire-Network/wire-docs/edit/master/docs/api-reference/tooling/clio/command-reference/set/set-account.md",tags:[],version:"current",frontMatter:{id:"set-account",title:"set account"},sidebar:"apiReferenceSidebar",previous:{title:"set abi",permalink:"/docs/api-reference/tooling/clio/command-reference/set/set-abi"},next:{title:"set action",permalink:"/docs/api-reference/tooling/clio/command-reference/set/set-action"}},l={},d=[{value:"Command",id:"command",level:2},{value:"Description",id:"description",level:2},{value:"Command Usage",id:"command-usage",level:2},{value:"Positionals",id:"positionals",level:3},{value:"Options",id:"options",level:3},{value:"Requirements",id:"requirements",level:2},{value:"Examples",id:"examples",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"command",children:"Command"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"clio set account permission [OPTIONS] account permission [authority] [parent]\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Where"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["[OPTIONS] = See Options in ",(0,i.jsx)(n.a,{href:"#command-usage",children:"Command Usage"})," section below."]}),"\n",(0,i.jsx)(n.li,{children:"account = The name of the account you want to set."}),"\n",(0,i.jsx)(n.li,{children:"permission = The name of the permission you want to set."}),"\n",(0,i.jsx)(n.li,{children:"authority =  May be a public key, JSON string or filename defining the authority."}),"\n",(0,i.jsxs)(n.li,{children:["parent = The parent of this permission, defaults to ",(0,i.jsx)(n.code,{children:"active"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note"}),": The arguments and options enclosed in square brackets are optional."]}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Set or update blockchain account state. Can be used to set parameters dealing with account permissions."}),"\n",(0,i.jsx)(n.h2,{id:"command-usage",children:"Command Usage"}),"\n",(0,i.jsxs)(n.p,{children:["The following information shows the different positionals and options you can use with the ",(0,i.jsx)(n.code,{children:"clio set account"})," command:"]}),"\n",(0,i.jsx)(n.h3,{id:"positionals",children:"Positionals"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"account"})," ",(0,i.jsx)(n.em,{children:"TEXT"})," REQUIRED The account to set/delete a permission authority for"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"permission"})," ",(0,i.jsx)(n.em,{children:"TEXT"})," REQUIRED The permission name to set/delete an authority for"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"authority"})," ",(0,i.jsx)(n.em,{children:"TEXT"})," [delete] NULL, [create/update] public key, JSON string or filename defining the authority, [code] contract name"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"parent"})," ",(0,i.jsx)(n.em,{children:"TEXT"})," [create] The permission name of this parents permission, defaults to 'active'"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"-h,--help"})," Print this help message and exit"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"--add-code"})," [code] Add 'sysio.code' permission to specified permission authority"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"--remove-code"})," [code] Remove 'sysio.code' permission from specified permission authority"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"-x"}),",",(0,i.jsx)(n.code,{children:"--expiration"})," Set the time in seconds before a transaction expires, defaults to 30s"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"-f"}),",",(0,i.jsx)(n.code,{children:"--force-unique"})," Force the transaction to be unique. this will consume extra bandwidth and remove any protections against accidently issuing the same transaction multiple times"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"-s"}),",",(0,i.jsx)(n.code,{children:"--skip-sign"})," Specify if unlocked wallet keys should be used to sign transaction"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"-j"}),",",(0,i.jsx)(n.code,{children:"--json"})," Print result as json"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"--json-file"})," ",(0,i.jsx)(n.em,{children:"TEXT"})," Save result in json format into a file"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"-d"}),",",(0,i.jsx)(n.code,{children:"--dont-broadcast"})," Don't broadcast transaction to the network (just print to stdout)"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"--return-packed"})," Used in conjunction with --dont-broadcast to get the packed transaction"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"-r"}),",",(0,i.jsx)(n.code,{children:"--ref-block"})," ",(0,i.jsx)(n.em,{children:"TEXT"})," Set the reference block num or block id used for TAPOS (Transaction as Proof-of-Stake)"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"--use-old-rpc"})," Use old RPC push_transaction, rather than new RPC send_transaction"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"-p"}),",",(0,i.jsx)(n.code,{children:"--permission"})," ",(0,i.jsx)(n.em,{children:"TEXT"})," An account and permission level to authorize, as in 'account@permission' (defaults to 'account@active')"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"--max-cpu-usage-ms"})," ",(0,i.jsx)(n.em,{children:"UINT"})," Set an upper limit on the milliseconds of cpu usage budget, for the execution of the transaction (defaults to 0 which means no limit)"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"--max-net-usage"})," ",(0,i.jsx)(n.em,{children:"UINT"})," Set an upper limit on the net usage budget, in bytes, for the transaction (defaults to 0 which means no limit)"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"--delay-sec"})," ",(0,i.jsx)(n.em,{children:"UINT"})," Set the delay_sec seconds, defaults to 0s"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Install the currently supported version of ",(0,i.jsx)(n.code,{children:"clio"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["| The ",(0,i.jsx)(n.code,{children:"clio"})," tool is bundled with the Wire software. ",(0,i.jsx)(n.a,{href:"/docs/getting-started/install-dependencies",children:"Installing Wire core"})," will install the ",(0,i.jsx)(n.code,{children:"clio"})," and ",(0,i.jsx)(n.code,{children:"kiod"})," command line tools."]})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["You have a ",(0,i.jsx)(n.code,{children:"sysio"})," account and access to the account's private key."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Update the ",(0,i.jsx)(n.code,{children:"active"})," permission key:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"clio set account permission alice active EOS5zG7PsdtzQ9achTdRtXwHieL7yyigBFiJDRAQonqBsfKyL3XhC -p alice@owner\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Where"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"alice"})," = The name of the account to update the key."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"active"}),"= The name of the permission to update the key."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"EOS5zG7PsdtzQ9achTdRtXwHieL7yyigBFiJDRAQonqBsfKyL3XhC"})," = The new public key for the authority."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-p alice@owner"})," = The permission used to authorize the transaction."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example Output"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'executed transaction: ab5752ecb017f166d56e7f4203ea02631e58f06f2e0b67103b71874f608793e3  160 bytes  231 us\n#         sysio <= sysio::updateauth            {"account":"alice","permission":"active","parent":"owner","auth":{"threshold":1,"keys":[{"key":"E...\n'})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Add the ",(0,i.jsx)(n.code,{children:"sysio.code"})," permission to the contract account ",(0,i.jsx)(n.code,{children:"active"})," permission to enable calling inline actions by the contract account's ",(0,i.jsx)(n.code,{children:"active"})," permission:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"clio set account permission alice active --add-code -p alice@active\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Where"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"alice"})," = The name of the account to add ",(0,i.jsx)(n.code,{children:"sysio.code"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"active"}),"= The name of the permission to add ",(0,i.jsx)(n.code,{children:"sysio.code"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"--add-code"})," = Tells the command to add ",(0,i.jsx)(n.code,{children:"sysio.code"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-p alice@active"})," = The permission used to authorize the transaction."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example Output"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'executed transaction: ab5752ecb017f166d56e7f4203ea02631e58f06f2e0b67103b71874f608793e3  160 bytes  231 us\n#         sysio <= sysio::updateauth            {"account":"alice","permission":"active","parent":"owner","auth":{"threshold":1,"keys":[{"key":"E...\n'})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Add a custom permission to the ",(0,i.jsx)(n.strong,{children:"alice"})," account:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"clio set account permission alice customp EOS58wmANoBtT7RdPgMRCGDb37tcCQswfwVpj6NzC55D247tTMU9D active -p alice@active\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Where"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"alice"})," = The name of the account you are adding a custom permission to."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"customp"}),"= The name of the custom permission."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"EOS58wmANoBtT7RdPgMRCGDb37tcCQswfwVpj6NzC55D247tTMU9D"})," = The public key of the custom permission."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"active"})," = The parent of the custom permission."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-p alice@active"})," = The permission used to authorize the transaction."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example Output"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'executed transaction: 69c5297571ce3503edb9a1fd8a2f2a5cc1805ad19197a8751ca09093487c3cf8  160 bytes  134 us\n#         sysio <= sysio::updateauth            {"account":"alice","permission":"customp","parent":"active","auth":{"threshold":1,"keys":[{"key":"EOS...```\n\n## See Also\n- [Accounts and Permissions](https://developers.eos.io/welcome/v2.1/protocol/accounts_and_permissions) protocol document.\n- [Creating and Linking Custom Permissions](https://developers.eos.io/welcome/v2.1/smart-contract-guides/linking-custom-permission) tutorial.\n'})})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>r});var i=s(96540);const c={},o=i.createContext(c);function t(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:t(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);