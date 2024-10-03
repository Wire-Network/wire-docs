"use strict";(self.webpackChunkwire_docs=self.webpackChunkwire_docs||[]).push([[1748],{72695:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>c});var i=o(74848),t=o(28453);const r={},s=void 0,p={id:"api-reference/tooling/nodeop/plugins/net-plugin",title:"net-plugin",description:"Description",source:"@site/docs/api-reference/tooling/nodeop/plugins/net-plugin.md",sourceDirName:"api-reference/tooling/nodeop/plugins",slug:"/api-reference/tooling/nodeop/plugins/net-plugin",permalink:"/wire-docs/docs/api-reference/tooling/nodeop/plugins/net-plugin",draft:!1,unlisted:!1,editUrl:"https://github.com/Wire-Network/wire-docs/docs/api-reference/tooling/nodeop/plugins/net-plugin.md",tags:[],version:"current",frontMatter:{},sidebar:"apiReferenceSidebar",previous:{title:"net-api-plugin",permalink:"/wire-docs/docs/api-reference/tooling/nodeop/plugins/net-api-plugin"},next:{title:"producer-api-plugin",permalink:"/wire-docs/docs/api-reference/tooling/nodeop/plugins/producer-api-plugin"}},a={},c=[{value:"Description",id:"description",level:2},{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Dependencies",id:"dependencies",level:2}];function l(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"net_plugin"})," provides an authenticated p2p protocol to persistently synchronize nodes."]}),"\n",(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"# config.ini\nplugin = sysio::net_plugin\n[options]\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"# command-line\nnodeop ... --plugin sysio::net_plugin [options]\n"})}),"\n",(0,i.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,i.jsxs)(n.p,{children:["These can be specified from both the ",(0,i.jsx)(n.code,{children:"nodeop"})," command-line or the ",(0,i.jsx)(n.code,{children:"config.ini"})," file:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"Config Options for sysio::net_plugin:\n\n  --p2p-listen-endpoint arg (=0.0.0.0:9876))\n                                        The actual host:port used to listen for\n                                        incoming p2p connections.\n  --p2p-server-address arg              An externally accessible host:port for \n                                        identifying this node. Defaults to \n                                        p2p-listen-endpoint.\n  --p2p-peer-address arg                The public endpoint of a peer node to \n                                        connect to. Use multiple \n                                        p2p-peer-address options as needed to \n                                        compose a network.\n                                          Syntax: host:port[:<trx>|<blk>]\n                                          The optional 'trx' and 'blk' \n                                        indicates to node that only \n                                        transactions 'trx' or blocks 'blk' \n                                        should be sent.  Examples:\n                                            p2p.eos.io:9876\n                                            p2p.trx.eos.io:9876:trx\n                                            p2p.blk.eos.io:9876:blk\n                                        \n  --p2p-max-nodes-per-host arg (=1))     Maximum number of client nodes from any\n                                        single IP address\n  --p2p-accept-transactions arg (=1))    Allow transactions received over p2p \n                                        network to be evaluated and relayed if \n                                        valid.\n  --p2p-reject-incomplete-blocks arg (=1))\n                                        Reject pruned signed_blocks even in \n                                        light validation\n  --agent-name arg (=EOS Test Agent))    The name supplied to identify this node\n                                        amongst the peers.\n  --allowed-connection arg (=any))       Can be 'any' or 'producers' or \n                                        'specified' or 'none'. If 'specified', \n                                        peer-key must be specified at least \n                                        once. If only 'producers', peer-key is \n                                        not required. 'producers' and \n                                        'specified' may be combined.\n  --peer-key arg                        Optional public key of peer allowed to \n                                        connect.  May be used multiple times.\n  --peer-private-key arg                Tuple of [PublicKey, WIF private key] \n                                        (may specify multiple times))\n  --max-clients arg (=25))               Maximum number of clients from which \n                                        connections are accepted, use 0 for no \n                                        limit\n  --connection-cleanup-period arg (=30)) number of seconds to wait before \n                                        cleaning up dead connections\n  --max-cleanup-time-msec arg (=10))     max connection cleanup time per cleanup\n                                        call in millisec\n  --net-threads arg (=2))                Number of worker threads in net_plugin \n                                        thread pool\n  --sync-fetch-span arg (=100))          number of blocks to retrieve in a chunk\n                                        from any individual peer during \n                                        synchronization\n  --use-socket-read-watermark arg (=0))  Enable experimental socket read \n                                        watermark optimization\n  --peer-log-format arg (=[\"${_name}\" ${_ip}:${_port}]))\n                                        The string used to format peers when \n                                        logging messages about them.  Variables\n                                        are escaped with ${<variable name>}.\n                                        Available Variables:\n                                           _name  self-reported name\n                                        \n                                           _id    self-reported ID (64 hex \n                                                  characters)\n                                        \n                                           _sid   first 8 characters of \n                                                  _peer.id\n                                        \n                                           _ip    remote IP address of peer\n                                        \n                                           _port  remote port number of peer\n                                        \n                                           _lip   local IP address connected to\n                                                  peer\n                                        \n                                           _lport local port number connected \n                                                  to peer                                        \n  --p2p-keepalive-interval-ms arg (=32000))\n                                        peer heartbeat keepalive message \n                                        interval in milliseconds\n"})}),"\n",(0,i.jsx)(n.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,i.jsx)(n.p,{children:"None"})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>p});var i=o(96540);const t={},r=i.createContext(t);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function p(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);