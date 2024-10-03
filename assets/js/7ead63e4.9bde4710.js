"use strict";(self.webpackChunkwire_docs=self.webpackChunkwire_docs||[]).push([[1098],{85260:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>g,frontMatter:()=>r,metadata:()=>c,toc:()=>s});var i=o(74848),t=o(28453);const r={title:"Deep-mind Logger Integration",link_text:"Deep-mind Logger Integration"},d=void 0,c={id:"api-reference/tooling/nodeop/logging/third-party-logging/deep-mind-logger",title:"Deep-mind Logger Integration",description:"Overview",source:"@site/docs/api-reference/tooling/nodeop/logging/third-party-logging/deep-mind-logger.md",sourceDirName:"api-reference/tooling/nodeop/logging/third-party-logging",slug:"/api-reference/tooling/nodeop/logging/third-party-logging/deep-mind-logger",permalink:"/wire-docs/docs/api-reference/tooling/nodeop/logging/third-party-logging/deep-mind-logger",draft:!1,unlisted:!1,editUrl:"https://github.com/Wire-Network/wire-docs/docs/api-reference/tooling/nodeop/logging/third-party-logging/deep-mind-logger.md",tags:[],version:"current",frontMatter:{title:"Deep-mind Logger Integration",link_text:"Deep-mind Logger Integration"},sidebar:"apiReferenceSidebar",previous:{title:"Third-Party Logging And Tracing Integration",permalink:"/wire-docs/docs/api-reference/tooling/nodeop/logging/third-party-logging/"},next:{title:"Nodeop Replays",permalink:"/wire-docs/docs/api-reference/tooling/nodeop/replays"}},a={},s=[{value:"Overview",id:"overview",level:2},{value:"How To Enable Deep-mind Logger",id:"how-to-enable-deep-mind-logger",level:3}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"Deep-mind logger"})," is part of the ",(0,i.jsx)(n.code,{children:"dfuse"})," ",(0,i.jsx)(n.a,{href:"https://dfuse.io/",children:"platform"})," which is a highly scalable and performant ",(0,i.jsx)(n.a,{href:"https://github.com/dfuse-io/dfuse-sysio/tree/master",children:"open-source"})," platform for searching and processing blockchain data."]}),"\n",(0,i.jsx)(n.h3,{id:"how-to-enable-deep-mind-logger",children:"How To Enable Deep-mind Logger"}),"\n",(0,i.jsxs)(n.p,{children:["Wire Sysio integrates the ",(0,i.jsx)(n.code,{children:"nodeop"})," core service daemon with ",(0,i.jsx)(n.code,{children:"deep-mind logger"}),". To benefit from full ",(0,i.jsx)(n.code,{children:"deep-mind"})," logging functionality you must start your ",(0,i.jsx)(n.code,{children:"nodeop"})," instance with the flag ",(0,i.jsx)(n.code,{children:"--deep-mind"}),". After the start you can observe in the ",(0,i.jsx)(n.code,{children:"nodeop"})," console output the informative details outputs created by the ",(0,i.jsx)(n.code,{children:"deep-mind"})," logger. They distinguish themselves from the default ",(0,i.jsx)(n.code,{children:"nodeop"})," output lines because they start with the ",(0,i.jsx)(n.code,{children:"DMLOG"})," keyword."]}),"\n",(0,i.jsxs)(n.p,{children:["Examples of ",(0,i.jsx)(n.code,{children:"deep-mind"})," log lines as you would see them in the ",(0,i.jsx)(n.code,{children:"nodeop"})," output console:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:'DMLOG START_BLOCK 30515\n\nDMLOG TRX_OP CREATE onblock 308f77bf49ab4ddde74d37c7310c0742e253319d9da57ebe51eb7b35f1ffe174 {"expiration":"2020-11-12T10:13:06","ref_block_num":30514,...}\n\nDMLOG CREATION_OP ROOT 0\n\nDMLOG RLIMIT_OP ACCOUNT_USAGE UPD {"owner":"sysio","net_usage":{"last_ordinal":1316982371,"value_ex":0,"consumed":0},"cpu_usage":{"last_ordinal":1316982371,"value_ex":24855,"consumed":101},"ram_usage":27083}\n\nDMLOG APPLIED_TRANSACTION 30515 {"id":"308f77bf49ab4ddde74d37c7310c0742e253319d9da57ebe51eb7b35f1ffe174","block_num":30515,"block_time":"2020-11-12T10:13:05.500",...}\n\nDMLOG RLIMIT_OP STATE UPD {"average_block_net_usage":{"last_ordinal":30514,"value_ex":0,"consumed":0},"average_block_cpu_usage":{"last_ordinal":30514,...}\nDMLOG ACCEPTED_BLOCK 30516 {"block_num":30516,"dpos_proposed_irreversible_blocknum":30516,"dpos_irreversible_blocknum":30515,...\n\n...\n\nDMLOG FEATURE_OP ACTIVATE 0ec7e080177b2c02b278d5088611686b49d739925a92d9bfcacd7fc6b74053bd {"feature_digest":"0ec7e080177b2c02b278d5088611686b49d739925a92d9bfcacd7fc6b74053bd","subjective_restrictions":{"enabled":true,"preactivation_required":false,"earliest_allowed_activation_time":"1970-01-01T00:00:00.000"},"description_digest":"64fe7df32e9b86be2b296b3f81dfd527f84e82b98e363bc97e40bc7a83733310","dependencies":[],"protocol_feature_type":"builtin","specification":\n[{"name":"builtin_feature_codename","value":"PREACTIVATE_FEATURE"}]}\n\n...\n\nDMLOG FEATURE_OP ACTIVATE 825ee6288fb1373eab1b5187ec2f04f6eacb39cb3a97f356a07c91622dd61d16 {"feature_digest":"825ee6288fb1373eab1b5187ec2f04f6eacb39cb3a97f356a07c91622dd61d16","subjective_restrictions":{"enabled":true,"preactivation_required":true,"earliest_allowed_activation_time":"1970-01-01T00:00:00.000"},"description_digest":"14cfb3252a5fa3ae4c764929e0bbc467528990c9cc46aefcc7f16367f28b6278","dependencies":[],"protocol_feature_type":"builtin","specification":\n[{"name":"builtin_feature_codename","value":"KV_DATABASE"}]}\n\n...\n\nDMLOG FEATURE_OP ACTIVATE c3a6138c5061cf291310887c0b5c71fcaffeab90d5deb50d3b9e687cead45071 {"feature_digest":"c3a6138c5061cf291310887c0b5c71fcaffeab90d5deb50d3b9e687cead45071","subjective_restrictions":{"enabled":true,"preactivation_required":true,"earliest_allowed_activation_time":"1970-01-01T00:00:00.000"},"description_digest":"69b064c5178e2738e144ed6caa9349a3995370d78db29e494b3126ebd9111966","dependencies":[],"protocol_feature_type":"builtin","specification":\n[{"name":"builtin_feature_codename","value":"ACTION_RETURN_VALUE"}]}\n'})})]})}function g(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>d,x:()=>c});var i=o(96540);const t={},r=i.createContext(t);function d(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);