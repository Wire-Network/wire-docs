"use strict";(self.webpackChunkwire_docs=self.webpackChunkwire_docs||[]).push([[6004],{8988:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>g,frontMatter:()=>a,metadata:()=>c,toc:()=>h});var o=i(74848),l=i(28453);const s={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};var d=i(34164);function t(e){let{children:n,minHeight:i,url:l="http://localhost:3000",style:t,bodyStyle:a}=e;return(0,o.jsxs)("div",{className:s.browserWindow,style:{...t,minHeight:i},children:[(0,o.jsxs)("div",{className:s.browserWindowHeader,children:[(0,o.jsxs)("div",{className:s.buttons,children:[(0,o.jsx)("span",{className:s.dot,style:{background:"#f25f58"}}),(0,o.jsx)("span",{className:s.dot,style:{background:"#fbbe3c"}}),(0,o.jsx)("span",{className:s.dot,style:{background:"#58cb42"}})]}),(0,o.jsx)("div",{className:(0,d.A)(s.browserWindowAddressBar,"text--truncate"),children:l}),(0,o.jsx)("div",{className:s.browserWindowMenuIcon,children:(0,o.jsxs)("div",{children:[(0,o.jsx)("span",{className:s.bar}),(0,o.jsx)("span",{className:s.bar}),(0,o.jsx)("span",{className:s.bar})]})})]}),(0,o.jsx)("div",{className:s.browserWindowBody,style:a,children:n})]})}const a={sidebar_position:5,id:"launch-local-node",toc_max_heading_level:5,toc_min_heading_level:2},r="Launching Local Node",c={id:"getting-started/launch-local-node",title:"Launching Local Node",description:"This section explains launching a local node by starting up the nodeop and kiod services.",source:"@site/docs/getting-started/launch-local-node.mdx",sourceDirName:"getting-started",slug:"/getting-started/launch-local-node",permalink:"/docs/getting-started/launch-local-node",draft:!1,unlisted:!1,editUrl:"https://github.com/Wire-Network/wire-docs/docs/getting-started/launch-local-node.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,id:"launch-local-node",toc_max_heading_level:5,toc_min_heading_level:2},sidebar:"contentSidebar",previous:{title:"Install Dependencies",permalink:"/docs/getting-started/install-dependencies"},next:{title:"System Requirements",permalink:"/docs/getting-started/system-requirements"}},p={},h=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Starting <code>kiod</code>",id:"starting-kiod",level:2},{value:"Troubleshooting",id:"troubleshooting",level:3},{value:"Starting <code>nodeop</code>",id:"starting-nodeop",level:2},{value:"Troubleshooting",id:"troubleshooting-1",level:3},{value:"<code>Database dirty flag</code> error",id:"database-dirty-flag-error",level:4},{value:"Validating <code>nodeop</code>",id:"validating-nodeop",level:3},{value:"Check the Wallet",id:"check-the-wallet",level:3},{value:"Check <code>nodeop</code> endpoints",id:"check-nodeop-endpoints",level:3},{value:"3.1. Using <code>clio</code>",id:"31-using-clio",level:4},{value:"3.2. HTTP GET request to <code>/get_info</code>",id:"32-http-get-request-to-get_info",level:4}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"launching-local-node",children:"Launching Local Node"})}),"\n",(0,o.jsxs)(n.p,{children:["This section explains launching a local node by starting up the ",(0,o.jsx)(n.code,{children:"nodeop"})," and ",(0,o.jsx)(n.code,{children:"kiod"})," services."]}),"\n",(0,o.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["You have successfully installed Wire Sysio and Wire CDT on your computer ",(0,o.jsx)(n.strong,{children:"without"})," using the ",(0,o.jsx)(n.code,{children:"wire-cli"})," automation script. The steps below are only relevant if you followed the ",(0,o.jsx)(n.a,{href:"/docs/getting-started/install-dependencies#binary-installation",children:"Binary Installation"})," instructions."]}),"\n"]}),"\n",(0,o.jsxs)(n.h2,{id:"starting-kiod",children:["Starting ",(0,o.jsx)(n.code,{children:"kiod"})]}),"\n",(0,o.jsxs)(n.p,{children:["Typically a user would just create a wallet ",(0,o.jsx)(n.strong,{children:"first"})," and in doing so it would start up ",(0,o.jsx)(n.a,{href:"/docs/introduction/glossary#kiod",children:"kiod"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["You can use ",(0,o.jsx)(n.code,{children:"kiod"})," command to start and restart the process."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"kiod\ninfo  2024-05-29T13:48:18.634 kiod     wallet_plugin.cpp:38          plugin_initialize    ] initializing wallet plugin\ninfo  2024-05-29T13:48:18.635 kiod     wallet_api_plugin.cpp:69      plugin_startup       ] starting wallet_api_plugin\ninfo  2024-05-29T13:48:18.635 kiod     http_plugin.cpp:927           add_handler          ] add api url: /v1/wallet/create\ninfo  2024-05-29T13:48:18.635 kiod     http_plugin.cpp:927           add_handler          ] add api url: /v1/wallet/create_key\ninfo  2024-05-29T13:48:18.635 kiod     http_plugin.cpp:927           add_handler          ] add api url: /v1/wallet/get_public_keys\ninfo  2024-05-29T13:48:18.635 kiod     http_plugin.cpp:927           add_handler          ] add api url: /v1/wallet/import_key\ninfo  2024-05-29T13:48:18.635 kiod     http_plugin.cpp:927           add_handler          ] add api url: /v1/wallet/list_keys\ninfo  2024-05-29T13:48:18.635 kiod     http_plugin.cpp:927           add_handler          ] add api url: /v1/wallet/list_wallets\ninfo  2024-05-29T13:48:18.635 kiod     http_plugin.cpp:927           add_handler          ] add api url: /v1/wallet/lock\ninfo  2024-05-29T13:48:18.635 kiod     http_plugin.cpp:927           add_handler          ] add api url: /v1/wallet/lock_all\ninfo  2024-05-29T13:48:18.635 kiod     http_plugin.cpp:927           add_handler          ] add api url: /v1/wallet/open\ninfo  2024-05-29T13:48:18.635 kiod     http_plugin.cpp:927           add_handler          ] add api url: /v1/wallet/remove_key\ninfo  2024-05-29T13:48:18.635 kiod     http_plugin.cpp:927           add_handler          ] add api url: /v1/wallet/set_timeout\ninfo  2024-05-29T13:48:18.635 kiod     http_plugin.cpp:927           add_handler          ] add api url: /v1/wallet/sign_digest\ninfo  2024-05-29T13:48:18.635 kiod     http_plugin.cpp:927           add_handler          ] add api url: /v1/wallet/sign_transaction\ninfo  2024-05-29T13:48:18.635 kiod     http_plugin.cpp:927           add_handler          ] add api url: /v1/wallet/unlock\ninfo  2024-05-29T13:48:18.636 kiod     http_plugin.cpp:927           add_handler          ] add api url: /v1/node/get_supported_apis\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Verify that ",(0,o.jsx)(n.code,{children:"kiod"})," is running by:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"pidof kiod\n"})}),"\n",(0,o.jsx)(n.h3,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,o.jsx)(n.p,{children:"If you encounter a message similar to the one below:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"info  2024-09-25T13:51:58.918 kiod      wallet_plugin.cpp:38          plugin_initialize    ] initializing wallet plugin\nwarn  2024-09-25T13:51:58.918 kiod      wallet_plugin.cpp:65          plugin_initialize    ] 3120000 wallet_exception: Wallet exception\nFailed to lock access to wallet directory; is another kiod running?\n    {}\n    kiod  wallet_manager.cpp:304 initialize_lock\n\nFailed to initialize\n"})}),"\n",(0,o.jsxs)(n.p,{children:["This is because another instance of ",(0,o.jsx)(n.code,{children:"kiod"})," process might be running in the background."]}),"\n",(0,o.jsxs)(n.p,{children:["Kill all instances: ",(0,o.jsx)(n.code,{children:"pkill kiod"})," and the restart it."]}),"\n",(0,o.jsxs)(n.h2,{id:"starting-nodeop",children:["Starting ",(0,o.jsx)(n.code,{children:"nodeop"})]}),"\n",(0,o.jsxs)(n.p,{children:["To start ",(0,o.jsx)(n.code,{children:"nodeop"}),", run:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"nodeop -e -p sysio \\\n--plugin sysio::producer_plugin \\\n--plugin sysio::producer_api_plugin \\\n--plugin sysio::chain_api_plugin \\\n--plugin sysio::http_plugin \\\n--plugin sysio::state_history_plugin \\\n--access-control-allow-origin='*' \\\n--contracts-console \\\n--http-validate-host=false --disable-replay-opts \\\n--verbose-http-errors >> ~/nodeop.log 2>&1 &\n"})}),"\n",(0,o.jsx)(n.p,{children:"Command breakdown:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["starts ",(0,o.jsx)(n.code,{children:"nodeop"})," with essential plugins;"]}),"\n",(0,o.jsx)(n.li,{children:"configures the server address;"}),"\n",(0,o.jsxs)(n.li,{children:["enables CORS without restrictions (*) and includes development logging; logs will be saved to ",(0,o.jsx)(n.code,{children:"~/nodeop.log"}),";"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["For more information on ",(0,o.jsx)(n.code,{children:"nodeop"})," flags, see ",(0,o.jsx)(n.code,{children:"nodeop --help"})," or the output of this command ",(0,o.jsx)(n.a,{href:"/docs/api-reference/tooling/nodeop/nodeop-cli",children:"here"}),"."]}),"\n",(0,o.jsx)(n.admonition,{title:"NOTE",type:"info",children:(0,o.jsx)(n.p,{children:"CORS is enabled for all (*) for development only. Never enable unrestricted CORS on publicly accessible nodes!"})}),"\n",(0,o.jsx)(n.h3,{id:"troubleshooting-1",children:"Troubleshooting"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.h4,{id:"database-dirty-flag-error",children:[(0,o.jsx)(n.code,{children:"Database dirty flag"})," error"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"If you see error that looks like the examples below:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"info  timestamp nodeop    chain_plugin.cpp:461          operator()           ] Support for builtin protocol feature 'GET_SENDER' (with digest of 'f0af56d2c5a48d60a4a5b5c903edfb7db3a736a94ed589d0b797df33ff9d3e1d') is enabled with preactivation required\ninfo  timestamp nodeop    chain_plugin.cpp:955          plugin_initialize    ] Starting fresh blockchain state using genesis state extracted from blocks.log.\nwarn  timestamp nodeop    chain_plugin.cpp:1237         plugin_initialize    ] 13 N5boost10wrapexceptISt12system_errorEE: Database dirty flag set\nrethrow Database dirty flag set: \n    {\"what\":\"Database dirty flag set\"}\n    nodeop  chain_plugin.cpp:1237 plugin_initialize\nerror timestamp nodeop    main.cpp:153                  main                 ] database dirty flag set (likely due to unclean shutdown): replay required\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"Database dirty flag set (likely due to unclean shutdown): replay required\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Try and include ",(0,o.jsx)(n.code,{children:"--replay-blockchain"})," or ",(0,o.jsx)(n.code,{children:"--hard-replay-blockchain"})," flag to the ",(0,o.jsx)(n.code,{children:"nodeop"})," startup command."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"nodeop -e -p sysio \\\n--plugin sysio::producer_plugin \\\n--plugin sysio::producer_api_plugin \\\n--plugin sysio::chain_api_plugin \\\n--plugin sysio::http_plugin \\\n--plugin sysio::state_history_plugin \\\n--access-control-allow-origin='*' \\\n--contracts-console \\\n--http-validate-host=false --replay-blockchain --disable-replay-opts \\\n--verbose-http-errors >> ~/nodeop.log 2>&1 &\n"})}),"\n",(0,o.jsxs)(n.p,{children:["If you want to a clean fresh state of the chain, you may want to use ",(0,o.jsx)(n.code,{children:"--delete-all-blocks"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["More details on troubleshooting ",(0,o.jsx)(n.code,{children:"nodeop"})," can be found ",(0,o.jsx)(n.a,{href:"/docs/api-reference/tooling/nodeop/troubleshooting",children:"here"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["You could also change ",(0,o.jsx)(n.code,{children:"nodeop.log"})," file's location to whatever directory you want."]}),"\n",(0,o.jsxs)(n.p,{children:["If there isn't a process running, use the ",(0,o.jsx)(n.a,{href:"#starting-nodeop",children:"startup command"}),"."]}),"\n",(0,o.jsxs)(n.h3,{id:"validating-nodeop",children:["Validating ",(0,o.jsx)(n.code,{children:"nodeop"})]}),"\n",(0,o.jsxs)(n.p,{children:["Check that ",(0,o.jsx)(n.code,{children:"nodeop"})," is producing blocks. Run the following command:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"tail -f ~/nodeop.log\n"})}),"\n",(0,o.jsx)(n.p,{children:"You should see some output in the console similar to:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"info  [timestamp] nodeop producer_plugin.cpp:2293 produce_block ] Produced block b50adde5943bdde1... #44 at [timestamp] signed by sysio [trxs: 0, lib: 43, confirmed: 0]\ninfo  [timestamp] nodeop producer_plugin.cpp:2293 produce_block ] Produced block 39b2a4fef9db084f... #45 at [timestamp] signed by sysio [trxs: 0, lib: 44, confirmed: 0]\ninfo  [timestamp] nodeop producer_plugin.cpp:2293 produce_block ] Produced block cd23d3646d0166dc... #46 at [timestamp] signed by sysio [trxs: 0, lib: 45, confirmed: 0]\ninfo  [timestamp] nodeop producer_plugin.cpp:2293 produce_block ] Produced block 14bd99c3c3ffd441... #47 at [timestamp] signed by sysio [trxs: 0, lib: 46, confirmed: 0]\ninfo  [timestamp] nodeop producer_plugin.cpp:2293 produce_block ] Produced block 2e5fb9d0f2dce119... #48 at [timestamp] signed by sysio [trxs: 0, lib: 47, confirmed: 0]\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Verify the ",(0,o.jsx)(n.code,{children:"[timestamp]"})," is a recent one and that you aren't looking at a stale logs."]}),"\n",(0,o.jsxs)(n.p,{children:["To exit logs: ",(0,o.jsx)("kbd",{children:"Ctrl"})," + ",(0,o.jsx)("kbd",{children:"C"})]}),"\n",(0,o.jsx)(n.h3,{id:"check-the-wallet",children:"Check the Wallet"}),"\n",(0,o.jsxs)(n.p,{children:["Open the shell and run the ",(0,o.jsx)(n.code,{children:"clio wallet list"})," command to list available wallets. We need to validate the installation and see that the command line client clio is working as intended."]}),"\n",(0,o.jsx)(n.p,{children:"You should see a response with an empty list of wallets:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"Wallets:\n[]\n"})}),"\n",(0,o.jsx)(n.p,{children:"From this point forward, you'll be executing commands from your local system."}),"\n",(0,o.jsxs)(n.h3,{id:"check-nodeop-endpoints",children:["Check ",(0,o.jsx)(n.code,{children:"nodeop"})," endpoints"]}),"\n",(0,o.jsx)(n.p,{children:"This step ensures that the RPC API is functioning properly. You can choose one of the following methods:"}),"\n",(0,o.jsxs)(n.h4,{id:"31-using-clio",children:["3.1. Using ",(0,o.jsx)(n.code,{children:"clio"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"clio get info \n"})}),"\n",(0,o.jsxs)(n.h4,{id:"32-http-get-request-to-get_info",children:["3.2. HTTP GET request to ",(0,o.jsx)(n.code,{children:"/get_info"})]}),"\n",(0,o.jsxs)(n.p,{children:["Use your browser to access the ",(0,o.jsx)(n.code,{children:"get_info"})," endpoint from the ",(0,o.jsx)(n.code,{children:"chain_api_plugin"}),". Simply click ",(0,o.jsx)(n.a,{href:"http://localhost:8888/v1/chain/get_info",children:"http://localhost:8888/v1/chain/get_info"}),"."]}),"\n","\n",(0,o.jsx)(t,{url:"http://localhost:8888/v1/chain/get_info",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'  {\n       "server_version": "1dd2fd86",\n       "chain_id": "8a34ec7df1b8cd06ff4a8abbaa7cc50300823350cadc59ab296cb00d104d2b8f",\n       "head_block_num": 1769,\n       "last_irreversible_block_num": 1768,\n       "last_irreversible_block_id": "000006e810b62ae346aa0066d7e3d5fe152285692c4d15dc742e1733b61eb27b",\n       "head_block_id": "000006e931c346d88fc5cb63ce025bfd5f0843656761ac074b35c1c941684f64",\n       "head_block_time": "2024-09-25T15:43:18.000",\n       "head_block_producer": "sysio",\n       "virtual_block_cpu_limit": 1170419,\n       "virtual_block_net_limit": 6146775,\n       "block_cpu_limit": 200000,\n       "block_net_limit": 1048576,\n       "server_version_string": "v3.1.6",\n       "fork_db_head_block_num": 1769,\n       "fork_db_head_block_id": "000006e931c346d88fc5cb63ce025bfd5f0843656761ac074b35c1c941684f64",\n       "server_full_version_string": "v3.1.6-1dd2fd862c04c1b49df6b2314eb1a621d0301c9f",\n       "total_cpu_weight": 0,\n       "total_net_weight": 0,\n       "earliest_available_block_num": 1,\n       "last_irreversible_block_time": "<timestamp>"\n   }\n'})})}),"\n",(0,o.jsx)(n.p,{children:"Alternatively, check the endpoint directly from your terminal using the command:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"curl http://localhost:8888/v1/chain/get_info | jq .\n"})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"Third-party tools used in the steps above:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://chromewebstore.google.com/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=en",children:"JSON Formatter Chrome Extension"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://curl.se/",children:"curl"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://jqlang.github.io/jq/download/",children:"jq"})}),"\n"]})]})}function g(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>t});var o=i(96540);const l={},s=o.createContext(l);function d(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);