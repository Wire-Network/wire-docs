"use strict";(self.webpackChunkwire_docs=self.webpackChunkwire_docs||[]).push([[2529],{64302:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>p,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var o=i(74848),r=i(28453);const t={},s=void 0,c={id:"api-reference/tooling/nodeop/plugins/producer-plugin",title:"producer-plugin",description:"Description",source:"@site/docs/api-reference/tooling/nodeop/plugins/producer-plugin.md",sourceDirName:"api-reference/tooling/nodeop/plugins",slug:"/api-reference/tooling/nodeop/plugins/producer-plugin",permalink:"/docs/api-reference/tooling/nodeop/plugins/producer-plugin",draft:!1,unlisted:!1,editUrl:"https://github.com/Wire-Network/wire-docs/docs/api-reference/tooling/nodeop/plugins/producer-plugin.md",tags:[],version:"current",frontMatter:{},sidebar:"apiReferenceSidebar",previous:{title:"producer-api-plugin",permalink:"/docs/api-reference/tooling/nodeop/plugins/producer-api-plugin"},next:{title:"resource-monitor-plugin",permalink:"/docs/api-reference/tooling/nodeop/plugins/resource-monitor-plugin"}},a={},l=[{value:"Description",id:"description",level:2},{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"The priority of transaction",id:"the-priority-of-transaction",level:2},{value:"Load Dependency Examples",id:"load-dependency-examples",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"producer_plugin"})," loads functionality required for a node to produce blocks."]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["| Additional configuration is required to produce blocks. Please read ",(0,o.jsx)(n.a,{href:"/docs/api-reference/tooling/nodeop/usage/node-setups/producing-node",children:"Configuring Block Producing Node"}),"."]})}),"\n",(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-console",children:"# config.ini\nplugin = sysio::producer_plugin [options]\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"# nodeop startup params\nnodeop ... -- plugin sysio::producer_plugin [options]\n"})}),"\n",(0,o.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,o.jsxs)(n.p,{children:["These can be specified from both the ",(0,o.jsx)(n.code,{children:"nodeop"})," command-line or the ",(0,o.jsx)(n.code,{children:"config.ini"})," file:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-console",children:'Config Options for sysio::producer_plugin:\n\n  -e [ --enable-stale-production ]      Enable block production, even if the \n                                        chain is stale.\n  -x [ --pause-on-startup ]             Start this node in a state where \n                                        production is paused\n  --max-transaction-time arg (=30)      Limits the maximum time (in \n                                        milliseconds) that is allowed a pushed \n                                        transaction\'s code to execute before \n                                        being considered invalid\n  --max-irreversible-block-age arg (=-1)\n                                        Limits the maximum age (in seconds) of \n                                        the DPOS Irreversible Block for a chain\n                                        this node will produce blocks on (use \n                                        negative value to indicate unlimited)\n  -p [ --producer-name ] arg            ID of producer controlled by this node \n                                        (e.g. inita; may specify multiple \n                                        times)\n  --private-key arg                     (DEPRECATED - Use signature-provider \n                                        instead) Tuple of [public key, WIF \n                                        private key] (may specify multiple \n                                        times)\n  --signature-provider arg (=SYS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV=KEY:5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3)\n                                        Key=Value pairs in the form \n                                        <public-key>=<provider-spec>\n                                        Where:\n                                           <public-key>    is a string form of \n                                                           a vaild public\n                                                           key\n                                        \n                                           <provider-spec> is a string in the \n                                                           form <provider-type>\n                                                           :<data>\n                                        \n                                           <provider-type> is KEY, KIOD, or SE\n                                        \n                                           KEY:<data>      is a string form of \n                                                           a valid  \n                                                           private key which \n                                                           maps to the provided\n                                                           public key\n                                        \n                                           KIOD:<data>    is the URL where \n                                                           kiod is available \n                                                           and the approptiate \n                                                           wallet(s) are \n                                                           unlocked\n                                        \n                                           SE:             indicates the key \n                                                           resides in Secure \n                                                           Enclave\n  --greylist-account arg                account that can not access to extended\n                                        CPU/NET virtual resources\n  --greylist-limit arg (=1000)          Limit (between 1 and 1000) on the \n                                        multiple that CPU/NET virtual resources\n                                        can extend during low usage (only \n                                        enforced subjectively; use 1000 to not \n                                        enforce any limit)\n  --produce-time-offset-us arg (=0)     Offset of non last block producing time\n                                        in microseconds. Valid range 0 .. \n                                        -block_time_interval.\n  --last-block-time-offset-us arg (=-200000)\n                                        Offset of last block producing time in \n                                        microseconds. Valid range 0 .. \n                                        -block_time_interval.\n  --cpu-effort-percent arg (=80)        Percentage of cpu block production time\n                                        used to produce block. Whole number \n                                        percentages, e.g. 80 for 80%\n  --last-block-cpu-effort-percent arg (=80)\n                                        Percentage of cpu block production time\n                                        used to produce last block. Whole \n                                        number percentages, e.g. 80 for 80%\n  --max-block-cpu-usage-threshold-us arg (=5000)\n                                        Threshold of CPU block production to \n                                        consider block full; when within \n                                        threshold of max-block-cpu-usage block \n                                        can be produced immediately\n  --max-block-net-usage-threshold-bytes arg (=1024)\n                                        Threshold of NET block production to \n                                        consider block full; when within \n                                        threshold of max-block-net-usage block \n                                        can be produced immediately\n  --max-scheduled-transaction-time-per-block-ms arg (=100)\n                                        Maximum wall-clock time, in \n                                        milliseconds, spent retiring scheduled \n                                        transactions in any block before \n                                        returning to normal transaction \n                                        processing.\n  --subjective-cpu-leeway-us arg (=31000)\n                                        Time in microseconds allowed for a \n                                        transaction that starts with \n                                        insufficient CPU quota to complete and \n                                        cover its CPU usage.\n  --incoming-defer-ratio arg (=1)       ratio between incoming transactions and\n                                        deferred transactions when both are \n                                        queued for execution\n  --incoming-transaction-queue-size-mb arg (=1024)\n                                        Maximum size (in MiB) of the incoming \n                                        transaction queue. Exceeding this value\n                                        will subjectively drop transaction with\n                                        resource exhaustion.\n  --producer-threads arg (=2)           Number of worker threads in producer \n                                        thread pool\n  --snapshots-dir arg (="snapshots")    the location of the snapshots directory\n                                        (absolute path or relative to \n                                        application data dir)\n'})}),"\n",(0,o.jsx)(n.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/api-reference/tooling/nodeop/plugins/chain-plugin",children:(0,o.jsx)(n.code,{children:"chain_plugin"})})}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"the-priority-of-transaction",children:"The priority of transaction"}),"\n",(0,o.jsx)(n.p,{children:"You can give one of the transaction types priority over another when the producer plugin has a queue of transactions pending."}),"\n",(0,o.jsx)(n.p,{children:"The option below sets the ratio between the incoming transaction and the deferred transaction:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-console",children:"  --incoming-defer-ratio arg (=1)       \n"})}),"\n",(0,o.jsxs)(n.p,{children:["By default value of ",(0,o.jsx)(n.code,{children:"1"}),", the ",(0,o.jsx)(n.code,{children:"producer"})," plugin processes one incoming transaction per deferred transaction. When ",(0,o.jsx)(n.code,{children:"arg"})," sets to ",(0,o.jsx)(n.code,{children:"10"}),", the ",(0,o.jsx)(n.code,{children:"producer"})," plugin processes 10 incoming transactions per deferred transaction."]}),"\n",(0,o.jsxs)(n.p,{children:["If the ",(0,o.jsx)(n.code,{children:"arg"})," is set to a sufficiently large number, the plugin always processes the incoming transaction first until the queue of the incoming transactions is empty. Respectively, if the ",(0,o.jsx)(n.code,{children:"arg"})," is 0, the ",(0,o.jsx)(n.code,{children:"producer"})," plugin processes the deferred transactions queue first."]}),"\n",(0,o.jsx)(n.h3,{id:"load-dependency-examples",children:"Load Dependency Examples"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-console",children:"# config.ini\nplugin = sysio::chain_plugin [operations] [options]\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"# command-line\nnodeop ... --plugin sysio::chain_plugin [operations] [options]\n"})}),"\n",(0,o.jsxs)(n.p,{children:["For details about how blocks are produced please read the following ",(0,o.jsx)(n.a,{href:"/docs/api-reference/tooling/nodeop/plugins/block-producing-explained",children:"block producing explainer"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>c});var o=i(96540);const r={},t=o.createContext(r);function s(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);