"use strict";(self.webpackChunkwire_docs=self.webpackChunkwire_docs||[]).push([[6841],{44257:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>a});var i=n(74848),o=n(28453);const s={title:"How To Attach a YubiHSM Hard Wallet",link_text:"How To Attach a YubiHSM Hard Wallet"},l=void 0,r={id:"api-reference/tooling/kiod/guides/how-to-attach-a-yubihsm-hard-wallet",title:"How To Attach a YubiHSM Hard Wallet",description:"Goal",source:"@site/docs/api-reference/tooling/kiod/guides/how-to-attach-a-yubihsm-hard-wallet.md",sourceDirName:"api-reference/tooling/kiod/guides",slug:"/api-reference/tooling/kiod/guides/how-to-attach-a-yubihsm-hard-wallet",permalink:"/docs/api-reference/tooling/kiod/guides/how-to-attach-a-yubihsm-hard-wallet",draft:!1,unlisted:!1,editUrl:"https://github.com/Wire-Network/wire-docs/edit/master/docs/api-reference/tooling/kiod/guides/how-to-attach-a-yubihsm-hard-wallet.md",tags:[],version:"current",frontMatter:{title:"How To Attach a YubiHSM Hard Wallet",link_text:"How To Attach a YubiHSM Hard Wallet"}},c={},a=[{value:"Goal",id:"goal",level:2},{value:"Before you begin",id:"before-you-begin",level:2},{value:"Steps",id:"steps",level:2},{value:"Configure <code>kiod</code>",id:"configure-kiod",level:3},{value:"Using a YubiHSM connector",id:"using-a-yubihsm-connector",level:4},{value:"Directly connect via USB",id:"directly-connect-via-usb",level:4},{value:"Start <code>kiod</code> with AuthKey:",id:"start-kiod-with-authkey",level:3},{value:"Unlock YubiHSM wallet with the password of AuthKey using the following option:",id:"unlock-yubihsm-wallet-with-the-password-of-authkey-using-the-following-option",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"goal",children:"Goal"}),"\n",(0,i.jsx)(t.p,{children:"Attach a YubiHSM as a hard wallet"}),"\n",(0,i.jsx)(t.h2,{id:"before-you-begin",children:"Before you begin"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Install the currently supported version of ",(0,i.jsx)(t.code,{children:"kiod"})]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Install YubiHSM2 Software Toolkit (YubiHSM2 SDK)"}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Create an AuthKey with at least the following Capabilities:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"sign-ecdsa"}),"\n",(0,i.jsx)(t.li,{children:"generate-asymmetric-key"}),"\n",(0,i.jsx)(t.li,{children:"export-wrapped"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Delete the default AuthKey"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{title:"Security",type:"danger",children:(0,i.jsx)(t.p,{children:"| It is extremely important to create a new AuthKey and remove the default AuthKey before proceed to the following steps."})}),"\n",(0,i.jsx)(t.h2,{id:"steps",children:"Steps"}),"\n",(0,i.jsxs)(t.h3,{id:"configure-kiod",children:["Configure ",(0,i.jsx)(t.code,{children:"kiod"})]}),"\n",(0,i.jsxs)(t.p,{children:["There are two options to connect ",(0,i.jsx)(t.code,{children:"kiod"})," to YubiHSM:"]}),"\n",(0,i.jsx)(t.h4,{id:"using-a-yubihsm-connector",children:"Using a YubiHSM connector"}),"\n",(0,i.jsxs)(t.p,{children:["By default, ",(0,i.jsx)(t.code,{children:"kiod"})," will connect to the YubiHSM connector on the default host and port. If a non-default URL is used, set the ",(0,i.jsx)(t.code,{children:"--yubihsm-url"})," option or ",(0,i.jsx)(t.code,{children:"yubihsm-url"})," in ",(0,i.jsx)(t.code,{children:"config.ini"})," with the correct connector URL"]}),"\n",(0,i.jsx)(t.h4,{id:"directly-connect-via-usb",children:"Directly connect via USB"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"kiod"})," also can directly connect to YubiHSM via USB protocol"]}),"\n",(0,i.jsxs)(t.p,{children:["If this option is used, set ",(0,i.jsx)(t.code,{children:"kiod"})," startup option as the below:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:"--yubihsm-url=ysb://\n"})}),"\n",(0,i.jsxs)(t.h3,{id:"start-kiod-with-authkey",children:["Start ",(0,i.jsx)(t.code,{children:"kiod"})," with AuthKey:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:"--yubihsm-authkey Your_AuthKey_Object_Number\n"})}),"\n",(0,i.jsxs)(t.p,{children:["if a YubiHSM connector is used, check the YubiHSM connector is up and running by visiting YubiHSM URL:\nhttp://YubiHSM_HOST",":YubiHSM_PORT","/connector/status ((Default HOST and Port: ",(0,i.jsx)(t.a,{href:"http://127.0.0.1:12345",children:"http://127.0.0.1:12345"}),")"]}),"\n",(0,i.jsx)(t.p,{children:"You should see something like this:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-console",children:"status=OK\nserial=*\nversion=2.0.0\npid=666\naddress=localhost\nport=12345\n"})}),"\n",(0,i.jsx)(t.h3,{id:"unlock-yubihsm-wallet-with-the-password-of-authkey-using-the-following-option",children:"Unlock YubiHSM wallet with the password of AuthKey using the following option:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:"clio wallet unlock -n YubiHSM --password YOUR_AUTHKEY_PASSWORD\n"})}),"\n",(0,i.jsxs)(t.p,{children:["After unlocking the wallet, you can use ",(0,i.jsx)(t.code,{children:"clio wallet"})," commands as usual. Beware as a part of security mechanism, some wallet subcommands, such as retrieve private keys, or remove a key, are not supported when a YubiHSM is used"]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>r});var i=n(96540);const o={},s=i.createContext(o);function l(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);