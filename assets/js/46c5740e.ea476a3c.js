"use strict";(self.webpackChunkwire_docs=self.webpackChunkwire_docs||[]).push([[9237],{77908:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var o=t(74848),i=t(28453);const s={},r=void 0,c={id:"api-reference/tooling/nodeop/plugins/http-plugin",title:"http-plugin",description:"Description",source:"@site/docs/api-reference/tooling/nodeop/plugins/http-plugin.md",sourceDirName:"api-reference/tooling/nodeop/plugins",slug:"/api-reference/tooling/nodeop/plugins/http-plugin",permalink:"/docs/api-reference/tooling/nodeop/plugins/http-plugin",draft:!1,unlisted:!1,editUrl:"https://github.com/Wire-Network/wire-docs/edit/master/docs/api-reference/tooling/nodeop/plugins/http-plugin.md",tags:[],version:"current",frontMatter:{},sidebar:"apiReferenceSidebar",previous:{title:"http-client-plugin",permalink:"/docs/api-reference/tooling/nodeop/plugins/http-client-plugin"},next:{title:"login-plugin",permalink:"/docs/api-reference/tooling/nodeop/plugins/login-plugin"}},l={},p=[{value:"Description",id:"description",level:2},{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Dependencies",id:"dependencies",level:2}];function a(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"http_plugin"})," is a core plugin supported by both ",(0,o.jsx)(n.code,{children:"nodeop"})," and ",(0,o.jsx)(n.code,{children:"kiod"}),". The plugin is required to enable any RPC API functionality provided by a ",(0,o.jsx)(n.code,{children:"nodeop"})," or ",(0,o.jsx)(n.code,{children:"kiod"})," instance."]}),"\n",(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-console",children:"# config.ini\nplugin = sysio::http_plugin\n[options]\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"# command-line\nnodeop ... --plugin sysio::http_plugin [options]\n (or))\nkiod ... --plugin sysio::http_plugin [options]\n"})}),"\n",(0,o.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,o.jsxs)(n.p,{children:["These can be specified from both the command-line or the ",(0,o.jsx)(n.code,{children:"config.ini"})," file:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-console",children:'Config Options for sysio::http_plugin:\n\n  --unix-socket-path arg                The filename (relative to data-dir)) to \n                                        create a unix socket for HTTP RPC; set \n                                        blank to disable.\n  --http-server-address arg (=127.0.0.1:8888))\n                                        The local IP and port to listen for \n                                        incoming http connections; set blank to\n                                        disable.\n  --https-server-address arg            The local IP and port to listen for \n                                        incoming https connections; leave blank\n                                        to disable.\n  --https-certificate-chain-file arg    Filename with the certificate chain to \n                                        present on https connections. PEM \n                                        format. Required for https.\n  --https-private-key-file arg          Filename with https private key in PEM \n                                        format. Required for https\n  --https-ecdh-curve arg (=secp384r1))   Configure https ECDH curve to use: \n                                        secp384r1 or prime256v1\n  --access-control-allow-origin arg     Specify the Access-Control-Allow-Origin\n                                        to be returned on each request.\n  --access-control-allow-headers arg    Specify the Access-Control-Allow-Header\n                                        s to be returned on each request.\n  --access-control-max-age arg          Specify the Access-Control-Max-Age to \n                                        be returned on each request.\n  --access-control-allow-credentials    Specify if Access-Control-Allow-Credent\n                                        ials: true should be returned on each \n                                        request.\n  --max-body-size arg (=1048576))        The maximum body size in bytes allowed \n                                        for incoming RPC requests\n  --http-max-bytes-in-flight-mb arg (=500))\n                                        Maximum size in megabytes http_plugin \n                                        should use for processing http \n                                        requests. 429 error response when \n                                        exceeded.\n  --http-max-in-flight-requests arg (=-1))\n                                        Maximum number of requests http_plugin \n                                        should use for processing http \n                                        requests. 429 error response when \n                                        exceeded.\n  --http-max-response-time-ms arg (=30)) Maximum time for processing a request.\n  --verbose-http-errors                 Append the error log to HTTP responses\n  --http-validate-host arg (=1))         If set to false, then any incoming \n                                        "Host" header is considered valid\n  --http-alias arg                      Additionaly acceptable values for the \n                                        "Host" header of incoming HTTP \n                                        requests, can be specified multiple \n                                        times.  Includes http/s_server_address \n                                        by default.\n  --http-threads arg (=2))               Number of worker threads in http thread\n                                        pool\n'})}),"\n",(0,o.jsx)(n.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,o.jsx)(n.p,{children:"None"})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var o=t(96540);const i={},s=o.createContext(i);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);