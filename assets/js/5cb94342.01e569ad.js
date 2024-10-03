"use strict";(self.webpackChunkwire_docs=self.webpackChunkwire_docs||[]).push([[2857],{12784:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var s=t(74848),i=t(28453);const r={},a=void 0,o={id:"api-reference/wire-cdt/tutorials/create-an-abi-file",title:"create-an-abi-file",description:"Overview",source:"@site/docs/api-reference/wire-cdt/tutorials/create-an-abi-file.md",sourceDirName:"api-reference/wire-cdt/tutorials",slug:"/api-reference/wire-cdt/tutorials/create-an-abi-file",permalink:"/wire-docs/docs/api-reference/wire-cdt/tutorials/create-an-abi-file",draft:!1,unlisted:!1,editUrl:"https://github.com/Wire-Network/wire-docs/docs/api-reference/wire-cdt/tutorials/create-an-abi-file.md",tags:[],version:"current",frontMatter:{}},c={},l=[{value:"Overview",id:"overview",level:2},{value:"Introduction",id:"introduction",level:2},{value:"Types",id:"types",level:2},{value:"Structs",id:"structs",level:2},{value:"Implicit Structs",id:"implicit-structs",level:2},{value:"create",id:"create",level:3},{value:"issue",id:"issue",level:3},{value:"retire",id:"retire",level:3},{value:"transfer",id:"transfer",level:3},{value:"close",id:"close",level:3},{value:"Explicit Structs",id:"explicit-structs",level:2},{value:"account",id:"account",level:3},{value:"currency_stats",id:"currency_stats",level:3},{value:"Actions",id:"actions",level:2},{value:"create",id:"create-1",level:2},{value:"issue",id:"issue-1",level:2},{value:"retire",id:"retire-1",level:2},{value:"transfer",id:"transfer-1",level:2},{value:"close",id:"close-1",level:2},{value:"Tables",id:"tables",level:2},{value:"Putting it all Together",id:"putting-it-all-together",level:2},{value:"Cases not Covered by Token Contract",id:"cases-not-covered-by-token-contract",level:2},{value:"Vectors",id:"vectors",level:3},{value:"Struct Base",id:"struct-base",level:3},{value:"ABI Properties Not Covered Here",id:"abi-properties-not-covered-here",level:2},{value:"Ricardian Clauses",id:"ricardian-clauses",level:2},{value:"ABI Extensions",id:"abi-extensions",level:2},{value:"Maintenance",id:"maintenance",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Table returns no rows",id:"table-returns-no-rows",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsxs)(n.p,{children:["This tutorial provides instructions to how to hand-write an ABI file. This should normally not be necessary since ",(0,s.jsx)(n.code,{children:"cdt-cpp"})," can automatically generate an ABI file from your source code if it is properly annotated."]}),"\n",(0,s.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(n.p,{children:"The Application Binary Interface (ABI) is a JSON-based description to convert user actions between their JSON and Binary representations. The ABI also describes how to convert the database state to/from JSON. Once you have described your contract via an ABI then developers and users will be able to interact with your contract seamlessly via JSON."}),"\n",(0,s.jsxs)(n.p,{children:["This tutorial will use the ",(0,s.jsx)(n.a,{href:"https://github.com/Wire-Network/wire-system-contracts/tree/master/contracts/sysio.token",children:"sysio.token"})," contract as an example. *sysio.token contract does not cover every possible permutation of an ABI definition."]}),"\n",(0,s.jsx)(n.p,{children:"To make things easy, we will start with an empty ABI."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:'\n{\n   "version": "sysio::abi/1.0",\n   "types": [],\n   "structs": [],\n   "actions": [],\n   "tables": [],\n   "ricardian_clauses": [],\n   "abi_extensions": [],\n   "___comment" : ""\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"types",children:"Types"}),"\n",(0,s.jsx)(n.p,{children:"An ABI enables any client or interface to interpret and even generate an GUI for you contract. For this to work in a consistent manner, we'll need to describe the custom types that are used as a parameter in any public action or struct that we would like to describe in the ABI."}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsx)(n.p,{children:"|Built-in Types"}),(0,s.jsx)(n.p,{children:"Wire implements a number of custom built-ins. Built-in types don't need to be described in an ABI file."})]}),"\n",(0,s.jsxs)(n.p,{children:["Using ",(0,s.jsx)(n.strong,{children:"sysio.token"})," as an example, the only type that requires a description in the ABI file is ",(0,s.jsx)(n.code,{children:"account_name"}),'. The ABI uses "new_type_name" to describe explicit types, in this case ',(0,s.jsx)(n.code,{children:"account_name"}),", and ",(0,s.jsx)(n.code,{children:"account_name"})," is an alias of ",(0,s.jsx)(n.code,{children:"name"})," type."]}),"\n",(0,s.jsx)(n.p,{children:"So in the ABI file we'll add the following object"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n   "new_type_name": "account_name",\n   "type": "name"\n }\n'})}),"\n",(0,s.jsx)(n.p,{children:"Our ABI now looks like this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n   "version": "sysio::abi/1.0",\n   "types": [{\n     "new_type_name": "account_name",\n     "type": "name"\n   }],\n   "structs": [],\n   "actions": [],\n   "tables": [],\n   "ricardian_clauses": [],\n   "abi_extensions": []\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"structs",children:"Structs"}),"\n",(0,s.jsx)(n.p,{children:"We now need to describe the structs of the token contract. By looking at sysio.token.hpp, we can quickly determine which structs are utilized by public actions. This is particularly important for when we describe our actions in the the ABI file in the next step."}),"\n",(0,s.jsx)(n.p,{children:"A struct's object definition in JSON looks like the following:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n     "name": "issue", //The name\n     "base": "",    //Inheritance, parent struct\n     "fields": []   //Array of field objects describing the struct\'s fields.\n  }\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "name":"", // The field\'s name\n  "type":""   // The field\'s type\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Looking through the ",(0,s.jsx)(n.code,{children:"sysio.token"})," contract, we see a number of structs that require definition. Please note, not all of the structs are explicitly defined, some correspond to an actions' parameters. Here's a list of structs that require an ABI description for the ",(0,s.jsx)(n.code,{children:"sysio.token"})," contract:"]}),"\n",(0,s.jsx)(n.h2,{id:"implicit-structs",children:"Implicit Structs"}),"\n",(0,s.jsxs)(n.p,{children:["The following structs are implicit in that a struct was never explicitly defined in the contract. Looking at the ",(0,s.jsx)(n.a,{href:"https://github.com/Wire-Network/wire-system-contracts/blob/master/contracts/sysio.token/include/sysio.token/sysio.token.hpp#L24",children:"create"})," action, you'll find two parameters, ",(0,s.jsx)(n.code,{children:"issuer"})," of type ",(0,s.jsx)(n.code,{children:"account_name"})," and ",(0,s.jsx)(n.code,{children:"maximum_supply"})," of type ",(0,s.jsx)(n.code,{children:"asset"}),". For brevity this tutorial won't break down every struct, but applying the same logic, you will end up with the following:"]}),"\n",(0,s.jsx)(n.h3,{id:"create",children:(0,s.jsx)(n.a,{href:"https://github.com/Wire-Network/wire-system-contracts/blob/master/contracts/sysio.token/include/sysio.token/sysio.token.hpp#L24",children:"create"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "name": "create",\n  "base": "",\n  "fields": [\n    {\n      "name":"issuer",\n      "type":"account_name"\n    },\n    {\n      "name":"maximum_supply",\n      "type":"asset"\n    }\n  ]\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"issue",children:(0,s.jsx)(n.a,{href:"https://github.com/Wire-Network/wire-system-contracts/blob/master/contracts/sysio.token/include/sysio.token/sysio.token.hpp#L27",children:"issue"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "name": "issue",\n  "base": "",\n  "fields": [\n    {\n      "name":"to",\n      "type":"account_name"\n    },\n    {\n      "name":"quantity",\n      "type":"asset"\n    },\n    {\n      "name":"memo",\n      "type":"string"\n    }\n  ]\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"retire",children:(0,s.jsx)(n.a,{href:"https://github.com/Wire-Network/wire-system-contracts/blob/master/contracts/sysio.token/include/sysio.token/sysio.token.hpp#L29",children:"retire"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "name": "retire",\n  "base": "",\n  "fields": [\n    {\n      "name":"quantity",\n      "type":"asset"\n    },\n    {\n      "name":"memo",\n      "type":"string"\n    }\n  ]\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"transfer",children:(0,s.jsx)(n.a,{href:"https://github.com/Wire-Network/wire-system-contracts/blob/master/contracts/sysio.token/include/sysio.token/sysio.token.hpp#L31-L34",children:"transfer"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "name": "transfer",\n  "base": "",\n  "fields": [\n    {\n      "name":"from",\n      "type":"account_name"\n    },\n    {\n      "name":"to",\n      "type":"account_name"\n    },\n    {\n      "name":"quantity",\n      "type":"asset"\n    },\n    {\n      "name":"memo",\n      "type":"string"\n    }\n  ]\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"close",children:(0,s.jsx)(n.a,{href:"https://github.com/Wire-Network/wire-system-contracts/blob/master/contracts/sysio.token/include/sysio.token/sysio.token.hpp#L36",children:"close"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "name": "close",\n  "base": "",\n  "fields": [\n    {\n      "name":"owner",\n      "type":"account_name"\n    },\n    {\n      "name":"symbol",\n      "type":"symbol"\n    }\n  ]\n }\n'})}),"\n",(0,s.jsx)(n.h2,{id:"explicit-structs",children:"Explicit Structs"}),"\n",(0,s.jsx)(n.p,{children:"These structs are explicitly defined, as they are a requirement to instantiate a multi-index table. Describing them is no different than defining the implicit structs as demonstrated above."}),"\n",(0,s.jsx)(n.h3,{id:"account",children:(0,s.jsx)(n.a,{href:"https://github.com/Wire-Network/wire-system-contracts/blob/master/contracts/sysio.token/include/sysio.token/sysio.token.hpp#L43-L47",children:"account"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "name": "account",\n  "base": "",\n  "fields": [\n    {\n      "name":"balance",\n      "type":"asset"\n    }\n  ]\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"currency_stats",children:(0,s.jsx)(n.a,{href:"https://github.com/Wire-Network/wire-system-contracts/blob/master/contracts/sysio.token/include/sysio.token/sysio.token.hpp#L49-L55",children:"currency_stats"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "name": "currency_stats",\n  "base": "",\n  "fields": [\n    {\n      "name":"supply",\n      "type":"asset"\n    },\n    {\n      "name":"max_supply",\n      "type":"asset"\n    },\n    {\n      "name":"issuer",\n      "type":"account_name"\n    }\n  ]\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"actions",children:"Actions"}),"\n",(0,s.jsx)(n.p,{children:"An action's JSON object definition looks like the following:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "name": "transfer",    //The name of the action as defined in the contract\n  "type": "transfer",    //The name of the implicit struct as described in the ABI\n  "ricardian_contract": ""  //An optional ricardian clause to associate to this action describing its intended functionality.\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Next, we'll describe the actions of the ",(0,s.jsx)(n.code,{children:"sysio.token"})," contract by aggregating all the public functions describe in the ",(0,s.jsx)(n.code,{children:"sysio.token"})," contract's ",(0,s.jsx)(n.a,{href:"https://github.com/Wire-Network/wire-system-contracts/blob/master/contracts/sysio.token/include/sysio.token/sysio.token.hpp#L24-L36",children:"header file"}),". We'll then describe each action's ",(0,s.jsx)(n.em,{children:"type"})," to their previously described struct. In most situations, the function name and the struct name will be equal, but are not required to be equal."]}),"\n",(0,s.jsx)(n.p,{children:"Below is a list of actions that link to their source code with example JSON provided for how each action would be described."}),"\n",(0,s.jsx)(n.h2,{id:"create-1",children:(0,s.jsx)(n.a,{href:"https://github.com/Wire-Network/wire-system-contracts/blob/master/contracts/sysio.token/include/sysio.token/sysio.token.hpp#L24-L25",children:"create"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "name": "create",\n  "type": "create",\n  "ricardian_contract": ""\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"issue-1",children:(0,s.jsx)(n.a,{href:"https://github.com/Wire-Network/wire-system-contracts/blob/master/contracts/sysio.token/include/sysio.token/sysio.token.hpp#L27",children:"issue"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "name": "issue",\n  "type": "issue",\n  "ricardian_contract": ""\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"retire-1",children:(0,s.jsx)(n.a,{href:"https://github.com/Wire-Network/wire-system-contracts/blob/master/contracts/sysio.token/include/sysio.token/sysio.token.hpp#L31-L34",children:"retire"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "name": "retire",\n  "type": "retire",\n  "ricardian_contract": ""\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"transfer-1",children:(0,s.jsx)(n.a,{href:"https://github.com/Wire-Network/wire-system-contracts/blob/master/contracts/sysio.token/include/sysio.token/sysio.token.hpp#L31-L34",children:"transfer"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "name": "transfer",\n  "type": "transfer",\n  "ricardian_contract": ""\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"close-1",children:(0,s.jsx)(n.a,{href:"https://github.com/Wire-Network/wire-system-contracts/blob/master/contracts/sysio.token/include/sysio.token/sysio.token.hpp#L36",children:"close"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "name": "close",\n  "type": "close",\n  "ricardian_contract": ""\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:'You will notice we previously described all of these in the "structs" array of the ABI definition.'}),"\n",(0,s.jsx)(n.h2,{id:"tables",children:"Tables"}),"\n",(0,s.jsx)(n.p,{children:"Finally, we need to describe our tables. Here's a table's JSON object definition:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "name": "",       // The name of the table, determined during instantiation.\n  "type": "",       // The table\'s corresponding struct\n  "index_type": "", // The type of primary index of this table\n  "key_names" : [], // An array of key names, length must equal length of key_types member\n  "key_types" : []  // An array of key types that correspond to key names array member, length of array must equal length of key names array.\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The sysio.token contract instantiates two tables, ",(0,s.jsx)(n.a,{href:"https://github.com/Wire-Network/wire-system-contracts/blob/master/contracts/sysio.token/include/sysio.token/sysio.token.hpp#L57",children:"accounts"})," and ",(0,s.jsx)(n.a,{href:"https://github.com/Wire-Network/wire-system-contracts/blob/master/contracts/sysio.token/include/sysio.token/sysio.token.hpp#L58",children:"stat"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The accounts table is an i64 index, based on the ",(0,s.jsxs)(n.a,{href:"https://github.com/Wire-Network/wire-system-contracts/blob/master/contracts/sysio.token/include/sysio.token/sysio.token.hpp#L43-L47",children:[(0,s.jsx)(n.code,{children:"account"})," struct"]}),", has a ",(0,s.jsxs)(n.a,{href:"https://github.com/Wire-Network/wire-system-contracts/blob/master/contracts/sysio.token/include/sysio.token/sysio.token.hpp#L46",children:[(0,s.jsx)(n.code,{children:"uint64"})," as it's primary key"]}),' and it\'s key been arbitrarily named "currency".']}),"\n",(0,s.jsx)(n.p,{children:"Here's how the accounts table would be described in the ABI"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:'{\n  "name": "accounts",\n  "type": "account", // Corresponds to previously defined struct\n  "index_type": "i64",\n  "key_names" : ["currency"],\n  "key_types" : ["uint64"]\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The stat table is an i64 index, based on the ",(0,s.jsxs)(n.a,{href:"https://github.com/Wire-Network/wire-system-contracts/blob/master/contracts/sysio.token/include/sysio.token/sysio.token.hpp#L49-L55",children:[(0,s.jsx)(n.code,{children:"currenct_stats"})," struct"]}),", has a ",(0,s.jsxs)(n.a,{href:"https://github.com/Wire-Network/wire-system-contracts/blob/master/contracts/sysio.token/include/sysio.token/sysio.token.hpp#L54",children:[(0,s.jsx)(n.code,{children:"uint64"})," as it's primary key"]}),' and it\'s key been arbitrarily named "currency"']}),"\n",(0,s.jsx)(n.p,{children:"Here's how the stat table would be described in the ABI"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:'{\n  "name": "stat",\n  "type": "currency_stats",\n  "index_type": "i64",\n  "key_names" : ["currency"],\n  "key_types" : ["uint64"]\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:'You\'ll notice the above tables have the same "key name." Naming your keys similar names is symbolic in that it can potentially suggest a subjective relationship. As with this implementation, implying that any given value can be used to query different tables.'}),"\n",(0,s.jsx)(n.h2,{id:"putting-it-all-together",children:"Putting it all Together"}),"\n",(0,s.jsxs)(n.p,{children:["Finally, once all the pieces are strewn together, we have ourselves a ABI file that accurately describes the ",(0,s.jsx)(n.code,{children:"sysio.token"})," contract."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "version": "sysio::abi/1.0",\n  "types": [\n    {\n      "new_type_name": "account_name",\n      "type": "name"\n    }\n  ],\n  "structs": [\n    {\n      "name": "create",\n      "base": "",\n      "fields": [\n        {\n          "name":"issuer",\n          "type":"account_name"\n        },\n        {\n          "name":"maximum_supply",\n          "type":"asset"\n        }\n      ]\n    },\n    {\n       "name": "issue",\n       "base": "",\n       "fields": [\n          {\n            "name":"to",\n            "type":"account_name"\n          },\n          {\n            "name":"quantity",\n            "type":"asset"\n          },\n          {\n            "name":"memo",\n            "type":"string"\n          }\n       ]\n    },\n    {\n       "name": "retire",\n       "base": "",\n       "fields": [\n          {\n            "name":"quantity",\n            "type":"asset"\n          },\n          {\n            "name":"memo",\n            "type":"string"\n          }\n       ]\n    },\n    {\n       "name": "close",\n       "base": "",\n       "fields": [\n          {\n            "name":"owner",\n            "type":"account_name"\n          },\n          {\n            "name":"symbol",\n            "type":"symbol"\n          }\n       ]\n    },\n    {\n      "name": "transfer",\n      "base": "",\n      "fields": [\n        {\n          "name":"from",\n          "type":"account_name"\n        },\n        {\n          "name":"to",\n          "type":"account_name"\n        },\n        {\n          "name":"quantity",\n          "type":"asset"\n        },\n        {\n          "name":"memo",\n          "type":"string"\n        }\n      ]\n    },\n    {\n      "name": "account",\n      "base": "",\n      "fields": [\n        {\n          "name":"balance",\n          "type":"asset"\n        }\n      ]\n    },\n    {\n      "name": "currency_stats",\n      "base": "",\n      "fields": [\n        {\n          "name":"supply",\n          "type":"asset"\n        },\n        {\n          "name":"max_supply",\n          "type":"asset"\n        },\n        {\n          "name":"issuer",\n          "type":"account_name"\n        }\n      ]\n    }\n  ],\n  "actions": [\n    {\n      "name": "transfer",\n      "type": "transfer",\n      "ricardian_contract": ""\n    },\n    {\n      "name": "issue",\n      "type": "issue",\n      "ricardian_contract": ""\n    },\n    {\n      "name": "retire",\n      "type": "retire",\n      "ricardian_contract": ""\n    },\n    {\n      "name": "create",\n      "type": "create",\n      "ricardian_contract": ""\n    },\n    {\n      "name": "close",\n      "type": "close",\n      "ricardian_contract": ""\n    }\n  ],\n  "tables": [\n    {\n      "name": "accounts",\n      "type": "account",\n      "index_type": "i64",\n      "key_names" : ["currency"],\n      "key_types" : ["uint64"]\n    },\n    {\n      "name": "stat",\n      "type": "currency_stats",\n      "index_type": "i64",\n      "key_names" : ["currency"],\n      "key_types" : ["uint64"]\n    }\n  ],\n  "ricardian_clauses": [],\n  "abi_extensions": []\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"cases-not-covered-by-token-contract",children:"Cases not Covered by Token Contract"}),"\n",(0,s.jsx)(n.h3,{id:"vectors",children:"Vectors"}),"\n",(0,s.jsxs)(n.p,{children:["When describing a vector in your ABI file, simply append the type with ",(0,s.jsx)(n.code,{children:"[]"}),", so if you need to describe a vector of permission levels, you would describe it like so: ",(0,s.jsx)(n.code,{children:"permission_level[]"})]}),"\n",(0,s.jsx)(n.h3,{id:"struct-base",children:"Struct Base"}),"\n",(0,s.jsxs)(n.p,{children:["It's a rarely used property worth mentioning. You can use ",(0,s.jsx)(n.strong,{children:"base"})," ABI struct property to reference another struct for inheritance, as long as that struct is also described in the same ABI file. Base will do nothing or potentially throw an error if your smart contract logic does not support inheritance."]}),"\n",(0,s.jsxs)(n.p,{children:["You can see an example of base in use in the system contract ",(0,s.jsx)(n.a,{href:"https://github.com/AntelopeIO/reference-contracts/blob/9d9401e1bd937406b4e2c4f2fd234f22a2d6e3bc/contracts/sysio.system/include/sysio.system/sysio.system.hpp#L141",children:"source code"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"The corresponsing ABI definition would look like this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n      "name": "sysio_global_state",\n      "base": "blockchain_parameters",\n      "fields": [\n         {"name":"max_ram_size",                  "type":"uint64"},\n         {"name":"total_ram_bytes_reserved",      "type":"uint64"},\n         {"name":"total_ram_stake",               "type":"int64"},\n      ]\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"abi-properties-not-covered-here",children:"ABI Properties Not Covered Here"}),"\n",(0,s.jsx)(n.p,{children:"A few properties of the ABI specification were skipped here for brevity, however, there is a pending ABI specification that will outline every property of the ABI in its entirety."}),"\n",(0,s.jsx)(n.h2,{id:"ricardian-clauses",children:"Ricardian Clauses"}),"\n",(0,s.jsx)(n.p,{children:"Ricardian clauses describe the intended outcome of a particular actions. It may also be utilized to establish terms between the sender and the contract."}),"\n",(0,s.jsx)(n.h2,{id:"abi-extensions",children:"ABI Extensions"}),"\n",(0,s.jsx)(n.p,{children:'A generic "future proofing" layer that allows old clients to skip the parsing of "chunks" of extension data. For now, this property is unused. In the future each extension would have its own "chunk" in that vector so that older clients skip it and newer clients that understand how to interpret it.'}),"\n",(0,s.jsx)(n.h2,{id:"maintenance",children:"Maintenance"}),"\n",(0,s.jsx)(n.p,{children:"Every time you change a struct, add a table, add an action or add parameters to an action, use a new type, you will need to remember to update your ABI file. In many cases failure to update your ABI file will not produce any error."}),"\n",(0,s.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,s.jsx)(n.h3,{id:"table-returns-no-rows",children:"Table returns no rows"}),"\n",(0,s.jsxs)(n.p,{children:["Check that your table is accurately described in the ",(0,s.jsx)(n.code,{children:"<<glossary:ABI>>"})," file. For example, If you use ",(0,s.jsx)(n.code,{children:"clio"})," to add a table on a contract with a malformed ",(0,s.jsx)(n.code,{children:"<<glossary:ABI>>"})," definition and then get rows from that table, you will recieve an empty result. ",(0,s.jsx)(n.code,{children:"clio"})," will not produce an error when adding a row nor reading a row when a contract has failed to properly describe its tables in its ",(0,s.jsx)(n.code,{children:"<<glossary:ABI>>"})," File."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var s=t(96540);const i={},r=s.createContext(i);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);