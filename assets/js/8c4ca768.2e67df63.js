"use strict";(self.webpackChunkwire_docs=self.webpackChunkwire_docs||[]).push([[2409],{13757:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var i=t(74848),o=t(28453);const s={},r="Method",a={id:"api-reference/wire-cdt/best-practices/debugging_a_smart_contract",title:"debugging_a_smart_contract",description:"In order to be able to debug your smart contract, you will need to setup a local nodeop node. This local nodeop node can be run as separate private testnet or as an extension of a public testnet.  This local node also needs to be run with the contracts-console option on, either --contracts-console via the command line or contracts-console = true via the config.ini file and/or by setting up logging on your running node and checking the output logs.",source:"@site/docs/api-reference/wire-cdt/best-practices/debugging_a_smart_contract.md",sourceDirName:"api-reference/wire-cdt/best-practices",slug:"/api-reference/wire-cdt/best-practices/debugging_a_smart_contract",permalink:"/docs/api-reference/wire-cdt/best-practices/debugging_a_smart_contract",draft:!1,unlisted:!1,editUrl:"https://github.com/Wire-Network/wire-docs/docs/api-reference/wire-cdt/best-practices/debugging_a_smart_contract.md",tags:[],version:"current",frontMatter:{}},c={},d=[{value:"debug.hpp",id:"debughpp",level:2},{value:"debug.cpp",id:"debugcpp",level:2},{value:"debug.abi",id:"debugabi",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["In order to be able to debug your smart contract, you will need to setup a local ",(0,i.jsx)(n.code,{children:"nodeop"})," node. This local ",(0,i.jsx)(n.code,{children:"nodeop"})," node can be run as separate private testnet or as an extension of a public testnet.  This local node also needs to be run with the contracts-console option on, either ",(0,i.jsx)(n.code,{children:"--contracts-console"})," via the command line or ",(0,i.jsx)(n.code,{children:"contracts-console = true"})," via the ",(0,i.jsx)(n.code,{children:"config.ini"})," file and/or by setting up logging on your running node and checking the output logs."]}),"\n",(0,i.jsx)(n.p,{children:"See below for details on logging."}),"\n",(0,i.jsx)(n.p,{children:"When you are creating your smart contract for the first time, it is recommended to test and debug your smart contract on a private testnet first, since you have full control of the whole blockchain and can easily add suitable logging. This enables you to have unlimited amount of eos needed and you can just reset the state of the blockchain whenever you want. When it is ready for production, debugging  on the public testnet (or official testnet) can be done by connecting your local nodeop to the public testnet (or official testnet) so you can see the log of the testnet in your local nodeop."}),"\n",(0,i.jsx)(n.p,{children:"The concept is the same, so for the following guide, debugging on the private testnet will be covered."}),"\n",(0,i.jsxs)(n.p,{children:["If you haven't set up your own local ",(0,i.jsx)(n.code,{children:"nodeop"}),", follow the ",(0,i.jsx)(n.a,{href:"https://github.com/Wire-Network/wire-sysio#installation",children:"Setup guide"}),". By default, your local nodeop will just run in a private testnet unless you modify the config.ini file to connect with public testnet (or official testnet) nodes."]}),"\n",(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"method",children:"Method"})}),"\n",(0,i.jsxs)(n.p,{children:["The main method used to debug smart contract is ",(0,i.jsx)(n.strong,{children:"Caveman Debugging"}),". Printing is utilized to inspect the value of a variable and check the flow of the contract. Printing in smart contracts can be done through the Print API. The C++ API is a wrapper for C API and is the recommended API."]}),"\n",(0,i.jsx)(n.h1,{id:"print",children:"Print"}),"\n",(0,i.jsx)(n.p,{children:"Print C API supports the following data type that you can print:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"prints - a null terminated char array (string)"}),"\n",(0,i.jsx)(n.li,{children:"prints_l - any char array (string) with given size"}),"\n",(0,i.jsx)(n.li,{children:"printi - 64-bit signed integer"}),"\n",(0,i.jsx)(n.li,{children:"printui - 64-bit unsigned integer"}),"\n",(0,i.jsx)(n.li,{children:"printi128 - 128-bit signed integer"}),"\n",(0,i.jsx)(n.li,{children:"printui128 - 128-bit unsigned integer"}),"\n",(0,i.jsx)(n.li,{children:"printsf - single-precision floating point number"}),"\n",(0,i.jsx)(n.li,{children:"printdf - double encoded as 64-bit unsigned integer"}),"\n",(0,i.jsx)(n.li,{children:"printqf - quadruple encoded as 64-bit unsigned integer"}),"\n",(0,i.jsx)(n.li,{children:"printn - 64 bit names as base32 encoded string"}),"\n",(0,i.jsx)(n.li,{children:"printhex - hex given binary of data and its size"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The Print C++ API wraps some of the above C API by overriding the print() function, so the user doesn't need to determine which specific print function to use. Print C++ API supports:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"a null terminated char array (string)"}),"\n",(0,i.jsx)(n.li,{children:"integer (128-bit unsigned, 64-bit unsigned, 32-bit unsigned, signed, unsigned)"}),"\n",(0,i.jsx)(n.li,{children:"base32 string encoded as 64-bit unsigned integer"}),"\n",(0,i.jsx)(n.li,{children:"struct that has print() method"}),"\n"]}),"\n",(0,i.jsx)(n.h1,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.p,{children:"Here's an example contract for debugging"}),"\n",(0,i.jsx)(n.h2,{id:"debughpp",children:"debug.hpp"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:'namespace debug {\n    struct foo {\n        account_name from;\n        account_name to;\n        uint64_t amount;\n        void print() const {\n            sysio::print("Foo from ", sysio::name(from), " to ", sysio::name(to), " with amount ", amount, "\\n");\n        }\n    };\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"debugcpp",children:"debug.cpp"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:'#include <debug.hpp>\n\nextern "C" {\n\n    void apply( uint64_t code, uint64_t action ) {\n        if (code == N(debug)) {\n            sysio::print("Code is debug\\n");\n            if (action == N(foo)) {\n                 sysio::print("Action is foo\\n");\n                debug::foo f = sysio::unpack_action_data<debug::foo>();\n               if (f.amount >= 100) {\n                    sysio::print("Amount is larger or equal than 100\\n");\n                } else {\n                    sysio::print("Amount is smaller than 100\\n");\n                    sysio::print("Increase amount by 10\\n");\n                    f.amount += 10;\n                    sysio::print(f);\n                }\n            }\n        }\n    }\n} // extern "C"\n'})}),"\n",(0,i.jsx)(n.h2,{id:"debugabi",children:"debug.abi"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "structs": [{\n      "name": "foo",\n      "base": "",\n      "fields": {\n        "from": "account_name",\n        "to": "account_name",\n        "amount": "uint64"\n      }\n    }\n  ],\n  "actions": [{\n      "action_name": "foo",\n      "type": "foo"\n    }\n  ]\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Deploy it and push an action to it. It is assumed you have a ",(0,i.jsx)(n.code,{children:"debug"})," account created and have its key in your wallet."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'cdt-cpp -abigen debug.cpp -o debug.wasm\nclio set contract debug CONTRACT_DIR/debug -p youraccount@active\nclio push action debug foo \'{"from":"inita", "to":"initb", "amount":10}\' --scope debug\n'})}),"\n",(0,i.jsxs)(n.p,{children:["When you check your local ",(0,i.jsx)(n.code,{children:"nodeop"})," node log, you will see the following lines after the above message is sent."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"Code is debug\nAction is foo\nAmount is smaller than 100\nIncrease amount by 10\nFoo from inita to initb with amount 20\n"})}),"\n",(0,i.jsx)(n.p,{children:"There, you can confirm that your message is going to the right control flow and the amount is updated correctly. You might see the above message at least 2 times and that's normal because each transaction is being applied during verification, block generation, and block application."})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(96540);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);