"use strict";(self.webpackChunkwire_docs=self.webpackChunkwire_docs||[]).push([[6108],{72147:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>y,contentTitle:()=>a,default:()=>p,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var r=i(74848),s=i(28453);const t={},a=void 0,o={id:"api-reference/wire-cdt/features/binary-extension",title:"binary-extension",description:"Let's fully explain what the sysio::binary_extension type is, what it does, and why we need it for contract upgrades in certain situations.",source:"@site/docs/api-reference/wire-cdt/features/binary-extension.md",sourceDirName:"api-reference/wire-cdt/features",slug:"/api-reference/wire-cdt/features/binary-extension",permalink:"/docs/api-reference/wire-cdt/features/binary-extension",draft:!1,unlisted:!1,editUrl:"https://github.com/Wire-Network/wire-docs/edit/master/docs/api-reference/wire-cdt/features/binary-extension.md",tags:[],version:"current",frontMatter:{}},y={},c=[];function d(n){const e={code:"code",em:"em",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.p,{children:["Let's fully explain what the ",(0,r.jsx)(e.code,{children:"sysio::binary_extension"})," type is, what it does, and why we need it for contract upgrades in certain situations."]}),"\n",(0,r.jsxs)(e.p,{children:["You can find the implementation of ",(0,r.jsx)(e.code,{children:"sysio::binary_extension"})," within the CDT repository in the file: ",(0,r.jsx)(e.code,{children:"libraries/sysiolib/core/sysio/binary_extension.hpp"}),"."]}),"\n",(0,r.jsxs)(e.p,{children:["Our primary concern when using this type is when we are adding a new field to a smart contract's data structure that is currently utilized in an ",(0,r.jsx)(e.code,{children:"sysio::multi_index"})," type (AKA a ",(0,r.jsx)(e.em,{children:"table"}),"), or when adding a new parameter to an action declaration."]}),"\n",(0,r.jsxs)(e.p,{children:["By wrapping the new field in an ",(0,r.jsx)(e.code,{children:"sysio::binary_extension"}),", you are enabling your contract to be backwards compatible for future use. Note that this new field/parameter ",(0,r.jsx)(e.strong,{children:"MUST"})," be appended at the end of a data structure (this is due to implementation details in ",(0,r.jsx)(e.code,{children:"sysio::multi_index"}),", which relies on the ",(0,r.jsx)(e.code,{children:"boost::multi_index"})," type), or at the end of the parameter list in an action declaration."]}),"\n",(0,r.jsxs)(e.p,{children:["If you don't wrap the new field in an ",(0,r.jsx)(e.code,{children:"sysio::binary_extension"}),", the ",(0,r.jsx)(e.code,{children:"sysio::multi_index"})," table will be reformatted in such a way that disallows reads to the former datum; or in an action's case, the function will be uncallable."]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsxs)(e.p,{children:["But let's see how the ",(0,r.jsx)(e.code,{children:"sysio::binary_extension"})," type works with a good example."]}),"\n",(0,r.jsxs)(e.p,{children:["Take a moment to study this smart contract and its corresponding ",(0,r.jsx)(e.code,{children:".abi"}),"."]}),"\n",(0,r.jsxs)(e.p,{children:["This contract not only serves as a good example to the ",(0,r.jsx)(e.code,{children:"sysio::binary_extension"})," type, but can also be used as a gateway for developing smart contracts on the sysio protocol."]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"binary_extension_contract.hpp"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c++",children:'#include <sysio/contract.hpp>         // sysio::contract\n#include <sysio/binary_extension.hpp> // sysio::binary_extension\n#include <sysio/datastream.hpp>       // sysio::datastream\n#include <sysio/name.hpp>             // sysio::name\n#include <sysio/multi_index.hpp>      // sysio::indexed_by, sysio::multi_index\n#include <sysio/print.hpp>            // sysio::print_f\n\nclass [[sysio::contract]] binary_extension_contract : public sysio::contract {\npublic:\n   using contract::contract;\n   binary_extension_contract(sysio::name receiver, sysio::name code, sysio::datastream<const char*> ds)\n      : contract{receiver, code, ds}, _table{receiver, receiver.value}\n   { }\n\n   [[sysio::action]] void regpkey (sysio::name primary_key);                ///< Register primary key.\n   [[sysio::action]] void printbyp(sysio::name primary_key);                ///< Print by primary key.\n   [[sysio::action]] void printbys(sysio::name secondary_key);              ///< Print by secondary key.\n   [[sysio::action]] void modifyp (sysio::name primary_key, sysio::name n); ///< Modify primary key by primary key.\n   [[sysio::action]] void modifys (sysio::name primary_key, sysio::name n); ///< Modify secondary key by primary key.\n\n   struct [[sysio::table]] structure {\n      sysio::name _primary_key;\n      sysio::name _secondary_key;\n         \n      uint64_t primary_key()   const { return _primary_key.value;   }\n      uint64_t secondary_key() const { return _secondary_key.value; }\n   };\n\n   using index1 = sysio::indexed_by<"index1"_n, sysio::const_mem_fun<structure, uint64_t, &structure::primary_key>>;\n   using index2 = sysio::indexed_by<"index2"_n, sysio::const_mem_fun<structure, uint64_t, &structure::secondary_key>>;\n   using table  = sysio::multi_index<"table"_n, structure, index1, index2>;\n\nprivate:\n   table _table;\n};\n\n'})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"binary_extension_contract.cpp"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c++",children:'#include "binary_extension_contract.hpp"\n\nusing sysio::name;\n\n[[sysio::action]] void binary_extension_contract::regpkey(name primary_key) {\n   sysio::print_f("`regpkey` executing.\\n");\n   \n   auto index{_table.get_index<"index1"_n>()}; ///< `index` represents `_table` organized by `index1`.\n   auto iter {index.find(primary_key.value) }; ///< Note: the type returned by `index.find` is different than the type returned by `_table.find`.\n   \n   if (iter == _table.get_index<"index1"_n>().end()) {\n      sysio::print_f("`_primary_key`: % not found; registering.\\n", primary_key.to_string());\n      _table.emplace(_self, [&](auto& row) {\n         row._primary_key   = primary_key;\n         row._secondary_key = "nothin"_n;\n      });\n   }\n   else {\n      sysio::print_f("`_primary_key`: % found; not registering.\\n", primary_key.to_string());\n   }\n\n   sysio::print_f("`regpkey` finished executing.\\n");\n}\n\n[[sysio::action]] void binary_extension_contract::printbyp(sysio::name primary_key) {\n   sysio::print_f("`printbyp` executing.\\n");\n   \n   auto index{_table.get_index<"index1"_n>()};\n   auto iter {index.find(primary_key.value) };\n   \n   if (iter != _table.get_index<"index1"_n>().end()) {\n      sysio::print_f("`_primary_key`: % found; printing.\\n", primary_key.to_string());\n      sysio::print_f("{%, %}\\n", iter->_primary_key, iter->_secondary_key);\n   }\n   else {\n      sysio::print_f("`_primary_key`: % not found; not printing.\\n", primary_key.to_string());\n   }\n\n   sysio::print_f("`printbyp` finished executing.\\n");\n}\n\n[[sysio::action]] void binary_extension_contract::printbys(sysio::name secondary_key) {\n   sysio::print_f("`printbys` executing.\\n");\n   \n   auto index{_table.get_index<"index2"_n>()};\n   auto iter {index.find(secondary_key.value)};\n   \n   if (iter != _table.get_index<"index2"_n>().end()) {\n      sysio::print_f("`_secondary_key`: % found; printing.\\n", secondary_key.to_string());\n      printbyp(iter->_primary_key);\n   }\n   else {\n      sysio::print_f("`_secondary_key`: % not found; not printing.\\n", secondary_key.to_string());\n   }\n\n   sysio::print_f("`printbys` finished executing.\\n");\n}\n\n[[sysio::action]] void binary_extension_contract::modifyp(sysio::name primary_key, name n) {\n   sysio::print_f("`modifyp` executing.\\n");\n   \n   auto index{_table.get_index<"index1"_n>()};\n   auto iter {index.find(primary_key.value)};\n   \n   if (iter != _table.get_index<"index1"_n>().end()) {\n      sysio::print_f("`_primary_key`: % found; modifying `_primary_key`.\\n", primary_key.to_string());\n      index.modify(iter, _self, [&](auto& row) {\n         row._primary_key = n;\n      });\n   }\n   else {\n      sysio::print_f("`_primary_key`: % not found; not modifying `_primary_key`.\\n", primary_key.to_string());\n   }\n\n   sysio::print_f("`modifyp` finished executing.\\n");\n}\n\n[[sysio::action]] void binary_extension_contract::modifys(sysio::name primary_key, name n) {\n   sysio::print_f("`modifys` executing.\\n");\n   \n   auto index{_table.get_index<"index1"_n>()};\n   auto iter {index.find(primary_key.value)};\n   \n   if (iter != _table.get_index<"index1"_n>().end()) {\n      sysio::print_f("`_primary_key`: % found; modifying `_secondary_key`.\\n", primary_key.to_string());\n      index.modify(iter, _self, [&](auto& row) {\n         row._secondary_key = n;\n      });\n   }\n   else {\n      sysio::print_f("`_primary_key`: % not found; not modifying `_secondary_key`.\\n", primary_key.to_string());\n   }\n\n   sysio::print_f("`modifys` finished executing.\\n");\n}\n'})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"binary_extension_contract.abi"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-javascript",children:'{\n    "____comment": "This file was generated with sysio-abigen. DO NOT EDIT ",\n    "version": "sysio::abi/1.1",\n    "types": [],\n    "structs": [\n        {\n            "name": "modifyp",\n            "base": "",\n            "fields": [\n                {\n                    "name": "primary_key",\n                    "type": "name"\n                },\n                {\n                    "name": "n",\n                    "type": "name"\n                }\n            ]\n        },\n        {\n            "name": "modifys",\n            "base": "",\n            "fields": [\n                {\n                    "name": "primary_key",\n                    "type": "name"\n                },\n                {\n                    "name": "n",\n                    "type": "name"\n                }\n            ]\n        },\n        {\n            "name": "printbyp",\n            "base": "",\n            "fields": [\n                {\n                    "name": "primary_key",\n                    "type": "name"\n                }\n            ]\n        },\n        {\n            "name": "printbys",\n            "base": "",\n            "fields": [\n                {\n                    "name": "secondary_key",\n                    "type": "name"\n                }\n            ]\n        },\n        {\n            "name": "regpkey",\n            "base": "",\n            "fields": [\n                {\n                    "name": "primary_key",\n                    "type": "name"\n                }\n            ]\n        },\n        {\n            "name": "structure",\n            "base": "",\n            "fields": [\n                {\n                    "name": "_primary_key",\n                    "type": "name"\n                },\n                {\n                    "name": "_secondary_key",\n                    "type": "name"\n                }\n            ]\n        }\n    ],\n    "actions": [\n        {\n            "name": "modifyp",\n            "type": "modifyp",\n            "ricardian_contract": ""\n        },\n        {\n            "name": "modifys",\n            "type": "modifys",\n            "ricardian_contract": ""\n        },\n        {\n            "name": "printbyp",\n            "type": "printbyp",\n            "ricardian_contract": ""\n        },\n        {\n            "name": "printbys",\n            "type": "printbys",\n            "ricardian_contract": ""\n        },\n        {\n            "name": "regpkey",\n            "type": "regpkey",\n            "ricardian_contract": ""\n        }\n    ],\n    "tables": [\n        {\n            "name": "table",\n            "type": "structure",\n            "index_type": "i64",\n            "key_names": [],\n            "key_types": []\n        }\n    ],\n    "ricardian_clauses": [],\n    "variants": []\n}\n'})}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsxs)(e.p,{children:["Take note of the action ",(0,r.jsx)(e.code,{children:"regpkey"}),", and the struct ",(0,r.jsx)(e.code,{children:"structure"})," in ",(0,r.jsx)(e.code,{children:"con.hpp"})," and ",(0,r.jsx)(e.code,{children:"con.cpp"}),"; the parts of the contract we will be upgrading."]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"binary_extension_contract.hpp"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c++",children:"[[sysio::action]] void regpkey (sysio::name primary_key);\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c++",children:"struct [[sysio::table]] structure {\n    sysio::name _primary_key;\n    sysio::name _secondary_key;\n\n    uint64_t primary_key()   const { return _primary_key.value;   }\n    uint64_t secondary_key() const { return _secondary_key.value; }\n};\n"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"binary_extension_contract.cpp"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c++",children:'[[sysio::action]] void binary_extension_contract::regpkey(name primary_key) {\n   sysio::print_f("`regpkey` executing.\\n");\n   \n   auto index{_table.get_index<"index1"_n>()}; ///< `index` represents `_table` organized by `index1`.\n   auto iter {index.find(primary_key.value) }; ///< Note: the type returned by `index.find` is different than the type returned by `_table.find`.\n   \n   if (iter == _table.get_index<"index1"_n>().end()) {\n      sysio::print_f("`_primary_key`: % not found; registering.\\n", primary_key.to_string());\n      _table.emplace(_self, [&](auto& row) {\n         row._primary_key   = primary_key;\n         row._secondary_key = "nothin"_n;\n      });\n   }\n   else {\n      sysio::print_f("`_primary_key`: % found; not registering.\\n", primary_key.to_string());\n   }\n\n   sysio::print_f("`regpkey` finished executing.\\n");\n}\n'})}),"\n",(0,r.jsxs)(e.p,{children:["Find below their corresponding sections in the ",(0,r.jsx)(e.code,{children:".abi"})," files:"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"binary_extension_contract.abi"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-javascript",children:'{\n    "name": "regpkey",\n    "base": "",\n    "fields": [\n        {\n            "name": "primary_key",\n            "type": "name"\n        }\n    ]\n}\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-javascript",children:'{\n    "name": "structure",\n    "base": "",\n    "fields": [\n        {\n            "name": "_primary_key",\n            "type": "name"\n        },\n        {\n            "name": "_secondary_key",\n            "type": "name"\n        }\n    ]\n}\n'})}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.p,{children:"Now, let's start up a blockchain instance, compile this smart contract, and test it out."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"~/binary_extension_contract $ cdt-cpp binary_extension_contract.cpp -o binary_extension_contract.wasm\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"~/binary_extension_contract $ clio set contract sysio ./\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'Reading WASM from /Users/john.debord/binary_extension_contract/binary_extension_contract.wasm...\nPublishing contract...\nexecuted transaction: 6c5c7d869a5be67611869b5f300bc452bc57d258d11755f12ced99c7d7fe154c  4160 bytes  729 us\n#         sysio <= sysio::setcode               "0000000000ea30550000d7600061736d01000000018f011760000060017f0060027f7f0060037f7f7f017f6000017e60067...\n#         sysio <= sysio::setabi                "0000000000ea3055d1020e656f73696f3a3a6162692f312e310006076d6f646966797000020b7072696d6172795f6b65790...\nwarning: transaction executed locally, but may not be confirmed by the network yet\n'})}),"\n",(0,r.jsx)(e.p,{children:"Next, let's push some data to our contract."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'~/binary_extension_contract $ clio push action sysio regpkey \'{"primary_key":"sysio.name"}\' -p sysio\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'executed transaction: 3c708f10dcbf4412801d901eb82687e82287c2249a29a2f4e746d0116d6795f0  104 bytes  248 us\n#         sysio <= sysio::regpkey               {"primary_key":"sysio.name"}\n[(sysio,regpkey)->sysio]: CONSOLE OUTPUT BEGIN =====================\n`regpkey` executing.\n`_primary_key`: sysio.name not found; registering.\n`regpkey` finished executing.\n[(sysio,regpkey)->sysio]: CONSOLE OUTPUT END   =====================\nwarning: transaction executed locally, but may not be confirmed by the network yet\n'})}),"\n",(0,r.jsx)(e.p,{children:"Finally, let's read back the data we have just written."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'~/binary_extension_contract $ clio push action sysio printbyp \'{"primary_key":"sysio.name"}\' -p sysio\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'executed transaction: e9b77d3cfba322a7a3a93970c0c883cb8b67e2072a26d714d46eef9d79b2f55e  104 bytes  227 us\n#         sysio <= sysio::printbyp              {"primary_key":"sysio.name"}\n[(sysio,printbyp)->sysio]: CONSOLE OUTPUT BEGIN =====================\n`printbyp` executing.\n`_primary_key`: sysio.name found; printing.\n{sysio.name, nothin}\n`printbyp` finished executing.\n[(sysio,printbyp)->sysio]: CONSOLE OUTPUT END   =====================\nwarning: transaction executed locally, but may not be confirmed by the network yet\n'})}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsxs)(e.p,{children:["Now, let's upgrade the smart contract by adding a new field to the table and a new parameter to an action while ",(0,r.jsx)(e.strong,{children:"NOT"})," wrapping the new field/parameter in an ",(0,r.jsx)(e.code,{children:"sysio::binary_extension"})," type and see what happens:"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"binary_extension_contract.hpp"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-diff",children:"+[[sysio::action]] void regpkey (sysio::name primary_key, sysio::name secondary_key);\n-[[sysio::action]] void regpkey (sysio::name primary_key);\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-diff",children:"struct [[sysio::table]] structure {\n    sysio::name _primary_key;\n    sysio::name _secondary_key;\n+   sysio::name _non_binary_extension_key;\n\n    uint64_t primary_key()   const { return _primary_key.value;   }\n    uint64_t secondary_key() const { return _secondary_key.value; }\n};\n"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"binary_extension_contract.cpp"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-diff",children:'+[[sysio::action]] void binary_extension_contract::regpkey(name primary_key, name secondary_key) {\n-[[sysio::action]] void binary_extension_contract::regpkey(name primary_key) {\n   sysio::print_f("`regpkey` executing.\\n");\n   \n   auto index{_table.get_index<"index1"_n>()}; ///< `index` represents `_table` organized by `index1`.\n   auto iter {index.find(primary_key.value) }; ///< Note: the type returned by `index.find` is different than the type returned by `_table.find`.\n   \n   if (iter == _table.get_index<"index1"_n>().end()) {\n      sysio::print_f("`_primary_key`: % not found; registering.\\n", primary_key.to_string());\n      _table.emplace(_self, [&](auto& row) {\n         row._primary_key   = primary_key;\n+        if (secondary_key) {\n+           row._secondary_key = secondary_key;\n+         }\n+         else {\n            row._secondary_key = "nothin"_n;\n+         }\n      });\n   }\n   else {\n      sysio::print_f("`_primary_key`: % found; not registering.\\n", primary_key.to_string());\n   }\n\n   sysio::print_f("`regpkey` finished executing.\\n");\n}\n'})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"binary_extension_contract.abi"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-diff",children:'{\n    "name": "regpkey",\n    "base": "",\n    "fields": [\n        {\n            "name": "primary_key",\n            "type": "name"\n+       },\n+       {\n+           "name": "secondary_key",\n+           "type": "name"\n        }\n    ]\n}\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-diff",children:'{\n    "name": "structure",\n    "base": "",\n    "fields": [\n        {\n            "name": "_primary_key",\n            "type": "name"\n        },\n        {\n            "name": "_secondary_key",\n            "type": "name"\n+       },\n+ {\n+           "name": "_non_binary_extension_key",\n+           "type": "name"\n        }\n    ]\n}\n'})}),"\n",(0,r.jsx)(e.p,{children:"Next, let's upgrade the contract and try to read from our table and write to our table the original way:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"~/binary_extension_contract $ cdt-cpp binary_extension_contract.cpp -o binary_extension_contract.wasm\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"~/binary_extension_contract $ clio set contract sysio ./\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'Reading WASM from /Users/john.debord/binary_extension_contract/binary_extension_contract.wasm...\nPublishing contract...\nexecuted transaction: b8ea485842fa5645e61d35edd97e78858e062409efcd0a4099d69385d9bc6b3e  4408 bytes  664 us\n#         sysio <= sysio::setcode               "0000000000ea30550000a2660061736d01000000018f011760000060017f0060027f7f0060037f7f7f017f6000017e60067...\n#         sysio <= sysio::setabi                "0000000000ea305583030e656f73696f3a3a6162692f312e310006076d6f646966797000020b7072696d6172795f6b65790...\nwarning: transaction executed locally, but may not be confirmed by the network yet\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'~/binary_extension_contract $ clio push action sysio printbyp \'{"primary_key":"sysio.name"}\' -p sysio\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"Error 3050003: sysio_assert_message assertion failure\nError Details:\nassertion failure with message: read\n"})}),"\n",(0,r.jsx)(e.p,{children:"Whoops! We aren't able to read the data we've previously written to our table!"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'~/binary_extension_contract $ clio push action sysio regpkey \'{"primary_key":"sysio.name2"}\' -p sysio\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"Error 3015014: Pack data exception\nError Details:\nMissing field 'secondary_key' in input object while processing struct 'regpkey'\n"})}),"\n",(0,r.jsx)(e.p,{children:"Whoops! We aren't able to write to our table the original way with the upgraded action either!"}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsxs)(e.p,{children:["Ok, let's back up and wrap the new field and the new action parameter in an ",(0,r.jsx)(e.code,{children:"sysio::binary_extension"})," type:"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"binary_extension_contract.hpp"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-diff",children:"+[[sysio::action]] void regpkey (sysio::name primary_key. sysio::binary_extension<sysio::name> secondary_key);\n-[[sysio::action]] void regpkey (sysio::name primary_key, sysio::name secondary_key);\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-diff",children:"struct [[sysio::table]] structure {\n    sysio::name                          _primary_key;\n    sysio::name                          _secondary_key;\n+   sysio::binary_extension<sysio::name> _binary_extension_key;\n-   sysio::name                          _non_binary_extension_key;\n\n    uint64_t primary_key()   const { return _primary_key.value;   }\n    uint64_t secondary_key() const { return _secondary_key.value; }\n};\n"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"binary_extension_contract.cpp"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-diff",children:'+[[sysio::action]] void binary_extension_contract::regpkey(name primary_key, binary_extension<name> secondary_key) {\n-[[sysio::action]] void binary_extension_contract::regpkey(name primary_key, name secondary_key) {\n   sysio::print_f("`regpkey` executing.\\n");\n   \n   auto index{_table.get_index<"index1"_n>()}; ///< `index` represents `_table` organized by `index1`.\n   auto iter {index.find(primary_key.value) }; ///< Note: the type returned by `index.find` is different than the type returned by `_table.find`.\n   \n   if (iter == _table.get_index<"index1"_n>().end()) {\n      sysio::print_f("`_primary_key`: % not found; registering.\\n", primary_key.to_string());\n      _table.emplace(_self, [&](auto& row) {\n         row._primary_key   = primary_key;\n         if (secondary_key) {\n+           row._secondary_key = secondary_key.value();\n-           row._secondary_key = secondary_key;\n          }\n          else {\n            row._secondary_key = "nothin"_n;\n          }\n      });\n   }\n   else {\n      sysio::print_f("`_primary_key`: % found; not registering.\\n", primary_key.to_string());\n   }\n\n   sysio::print_f("`regpkey` finished executing.\\n");\n}\n'})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"binary_extension_contract.abi"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-diff",children:'{\n    "name": "regpkey",\n    "base": "",\n    "fields": [\n        {\n            "name": "primary_key",\n            "type": "name"\n        },\n        {\n            "name": "secondary_key",\n+           "type": "name$"\n-           "type": "name"\n        }\n    ]\n}\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-diff",children:'{\n    "name": "structure",\n    "base": "",\n    "fields": [\n        {\n            "name": "_primary_key",\n            "type": "name"\n        },\n        {\n            "name": "_secondary_key",\n            "type": "name"\n        },\n {\n+           "name": "_binary_extension_key",\n+           "type": "name$"\n-           "name": "_non_binary_extension_key",\n-           "type": "name"\n        }\n    ]\n}\n'})}),"\n",(0,r.jsxs)(e.p,{children:["Note the ",(0,r.jsx)(e.code,{children:"$"})," after the types now; this indicates that this type is an ",(0,r.jsx)(e.code,{children:"sysio::binary_extension"})," type field."]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-diff",children:'{\n    "name": "secondary_key",\n+   "type": "name$"\n-   "type": "name"\n}\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-diff",children:'{\n    "name": "_binary_extension_key",\n+   "type": "name$"\n-   "type": "name"\n}\n'})}),"\n",(0,r.jsx)(e.p,{children:"Now, let's upgrade the contract again and try to read/write from/to our table:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"~/binary_extension_contract $ clio set contract sysio ./\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'Reading WASM from /Users/john.debord/binary_extension_contract/binary_extension_contract.wasm...\nPublishing contract...\nexecuted transaction: 497584d4e43ec114dbef83c134570492893f49eacb555d0cd47d08ea4a3a72f7  4696 bytes  648 us\n#         sysio <= sysio::setcode               "0000000000ea30550000cb6a0061736d01000000018f011760000060017f0060027f7f0060037f7f7f017f6000017e60017...\n#         sysio <= sysio::setabi                "0000000000ea305581030e656f73696f3a3a6162692f312e310006076d6f646966797000020b7072696d6172795f6b65790...\nwarning: transaction executed locally, but may not be confirmed by the network yet\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'~/binary_extension_contract $ clio push action sysio printbyp \'{"primary_key":"sysio.name"}\' -p sysio\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'executed transaction: 6108f3206e1824fe3a1fdcbc2fe733f38dc07ae3d411a1ccf777ecef56ddec97  104 bytes  224 us\n#         sysio <= sysio::printbyp              {"primary_key":"sysio.name"}\n[(sysio,printbyp)->sysio]: CONSOLE OUTPUT BEGIN =====================\n`printbyp` executing.\n`_primary_key`: sysio.name found; printing.\n{sysio.name, nothin}\n`printbyp` finished executing.\n[(sysio,printbyp)->sysio]: CONSOLE OUTPUT END   =====================\nwarning: transaction executed locally, but may not be confirmed by the network yet\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'~/binary_extension_contract $ clio push action sysio regpkey \'{"primary_key":"sysio.name2"}\' -p sysio\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'executed transaction: 75a135d1279a9c967078b0ebe337dc0cd58e1ccd07e370a899d9769391509afc  104 bytes  227 us\n#         sysio <= sysio::regpkey               {"primary_key":"sysio.name2"}\n[(sysio,regpkey)->sysio]: CONSOLE OUTPUT BEGIN =====================\n`regpkey` executing.\n`_primary_key`: sysio.name2 not found; registering.\n`regpkey` finished executing.\n[(sysio,regpkey)->sysio]: CONSOLE OUTPUT END   =====================\nwarning: transaction executed locally, but may not be confirmed by the network yet\n'})}),"\n",(0,r.jsx)(e.p,{children:"Nice! The smart contract is now backwards compatible for the future use of its tables and/or actions."}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsxs)(e.p,{children:["Just keep these simple rules in mind when upgrading a smart contract.\nIf you are adding a new field to a struct currently in use by a ",(0,r.jsx)(e.code,{children:"sysio::multi_index"})," be ",(0,r.jsx)(e.strong,{children:"SURE"})," to:"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"add the field at the end of the struct."}),"\n",(0,r.jsxs)(e.li,{children:["wrap the type using an ",(0,r.jsx)(e.code,{children:"sysio::binary_extension"})," type."]}),"\n"]})]})}function p(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},28453:(n,e,i)=>{i.d(e,{R:()=>a,x:()=>o});var r=i(96540);const s={},t=r.createContext(s);function a(n){const e=r.useContext(t);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:a(n.components),r.createElement(t.Provider,{value:e},n.children)}}}]);