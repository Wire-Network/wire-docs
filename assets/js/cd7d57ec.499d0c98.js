"use strict";(self.webpackChunkwire_docs=self.webpackChunkwire_docs||[]).push([[3207],{21023:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>t,contentTitle:()=>d,default:()=>p,frontMatter:()=>c,metadata:()=>r,toc:()=>l});var i=o(74848),s=o(28453);const c={title:"Nodeop Configuration"},d=void 0,r={id:"api-reference/tooling/nodeop/usage/nodeop-configuration",title:"Nodeop Configuration",description:"The plugin-specific options can be configured using either CLI options or a configuration file, config.ini. Nodeop-specific options can only be configured from the command line. All CLI options and config.ini options can be found by running nodeop --help as shown above.",source:"@site/docs/api-reference/tooling/nodeop/usage/nodeop-configuration.md",sourceDirName:"api-reference/tooling/nodeop/usage",slug:"/api-reference/tooling/nodeop/usage/nodeop-configuration",permalink:"/docs/api-reference/tooling/nodeop/usage/nodeop-configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/Wire-Network/wire-docs/edit/master/docs/api-reference/tooling/nodeop/usage/nodeop-configuration.md",tags:[],version:"current",frontMatter:{title:"Nodeop Configuration"}},t={},l=[{value:"<code>config.ini</code> location",id:"configini-location",level:2},{value:"Nodeop Example",id:"nodeop-example",level:2}];function a(n){const e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.p,{children:["The plugin-specific options can be configured using either CLI options or a configuration file, ",(0,i.jsx)(e.code,{children:"config.ini"}),". Nodeop-specific options can only be configured from the command line. All CLI options and ",(0,i.jsx)(e.code,{children:"config.ini"})," options can be found by running ",(0,i.jsx)(e.code,{children:"nodeop --help"})," as shown above."]}),"\n",(0,i.jsxs)(e.p,{children:["Each ",(0,i.jsx)(e.code,{children:"config.ini"})," option has a corresponding CLI option. However, not all CLI options are available in ",(0,i.jsx)(e.code,{children:"config.ini"}),". For instance, most plugin-specific options that perform actions are not available in ",(0,i.jsx)(e.code,{children:"config.ini"}),", such as ",(0,i.jsx)(e.code,{children:"--delete-state-history"})," from ",(0,i.jsx)(e.code,{children:"state_history_plugin"}),"."]}),"\n",(0,i.jsxs)(e.p,{children:["For example, the CLI option ",(0,i.jsx)(e.code,{children:"--plugin sysio::chain_api_plugin"})," can also be set by adding ",(0,i.jsx)(e.code,{children:"plugin = sysio::chain_api_plugin"})," in ",(0,i.jsx)(e.code,{children:"config.ini"}),"."]}),"\n",(0,i.jsxs)(e.h2,{id:"configini-location",children:[(0,i.jsx)(e.code,{children:"config.ini"})," location"]}),"\n",(0,i.jsxs)(e.p,{children:["The default ",(0,i.jsx)(e.code,{children:"config.ini"})," can be found in the following folders:"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["Mac OS: ",(0,i.jsx)(e.code,{children:"~/Library/Application Support/sysio/nodeop/config"})]}),"\n",(0,i.jsxs)(e.li,{children:["Linux: ",(0,i.jsx)(e.code,{children:"~/.local/share/sysio/nodeop/config"})]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["A custom ",(0,i.jsx)(e.code,{children:"config.ini"})," file can be set by passing the ",(0,i.jsx)(e.code,{children:"nodeop"})," option ",(0,i.jsx)(e.code,{children:"--config path/to/config.ini"}),"."]}),"\n",(0,i.jsx)(e.h2,{id:"nodeop-example",children:"Nodeop Example"}),"\n",(0,i.jsxs)(e.p,{children:["The example below shows a typical usage of ",(0,i.jsx)(e.code,{children:"nodeop"})," when starting a block producing node:"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sh",children:"nodeop \\\n  -e -p sysio \\\n  --data-dir /users/mydir/sysio/data     \\\n  --config-dir /users/mydir/sysio/config \\\n  --plugin sysio::producer_plugin      \\\n  --plugin sysio::chain_plugin         \\\n  --plugin sysio::http_plugin          \\\n  --plugin sysio::state_history_plugin \\\n  --contracts-console   \\\n  --disable-replay-opts \\\n  --access-control-allow-origin='*' \\\n  --http-validate-host=false        \\\n  --verbose-http-errors             \\\n  --state-history-dir /shpdata \\\n  --trace-history              \\\n  --chain-state-history        \\\n  >> nodeop.log 2>&1 &\n"})}),"\n",(0,i.jsxs)(e.p,{children:["The above ",(0,i.jsx)(e.code,{children:"nodeop"})," command starts a producing node by:"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["enabling block production (",(0,i.jsx)(e.code,{children:"-e"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:['identifying itself as block producer "sysio" (',(0,i.jsx)(e.code,{children:"-p"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["setting the blockchain data directory (",(0,i.jsx)(e.code,{children:"--data-dir"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["setting the ",(0,i.jsx)(e.code,{children:"config.ini"})," directory (",(0,i.jsx)(e.code,{children:"--config-dir"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["loading plugins ",(0,i.jsx)(e.code,{children:"producer_plugin"}),", ",(0,i.jsx)(e.code,{children:"chain_plugin"}),", ",(0,i.jsx)(e.code,{children:"http_plugin"}),", ",(0,i.jsx)(e.code,{children:"state_history_plugin"})," (",(0,i.jsx)(e.code,{children:"--plugin"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["passing ",(0,i.jsx)(e.code,{children:"chain_plugin"})," options (",(0,i.jsx)(e.code,{children:"--contracts-console"}),", ",(0,i.jsx)(e.code,{children:"--disable-replay-opts"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["passing ",(0,i.jsx)(e.code,{children:"http-plugin"})," options (",(0,i.jsx)(e.code,{children:"--access-control-allow-origin"}),", ",(0,i.jsx)(e.code,{children:"--http-validate-host"}),", ",(0,i.jsx)(e.code,{children:"--verbose-http-errors"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["passing ",(0,i.jsx)(e.code,{children:"state_history"})," options (",(0,i.jsx)(e.code,{children:"--state-history-dir"}),", ",(0,i.jsx)(e.code,{children:"--trace-history"}),", ",(0,i.jsx)(e.code,{children:"--chain-state-history"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["redirecting both ",(0,i.jsx)(e.code,{children:"stdout"})," and ",(0,i.jsx)(e.code,{children:"stderr"})," to the ",(0,i.jsx)(e.code,{children:"nodeop.log"})," file"]}),"\n",(0,i.jsx)(e.li,{children:"returning to the shell by running in the background (&)"}),"\n"]})]})}function p(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(a,{...n})}):a(n)}},28453:(n,e,o)=>{o.d(e,{R:()=>d,x:()=>r});var i=o(96540);const s={},c=i.createContext(s);function d(n){const e=i.useContext(c);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:d(n.components),i.createElement(c.Provider,{value:e},n.children)}}}]);