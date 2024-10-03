"use strict";(self.webpackChunkwire_docs=self.webpackChunkwire_docs||[]).push([[7113],{67146:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var t=i(74848),o=i(28453);const r={},c=void 0,a={id:"api-reference/wire-cdt/how-to-guides/compile/how-to-configure-cmake",title:"how-to-configure-cmake",description:"\x3c!-- ---",source:"@site/docs/api-reference/wire-cdt/how-to-guides/compile/how-to-configure-cmake.md",sourceDirName:"api-reference/wire-cdt/how-to-guides/compile",slug:"/api-reference/wire-cdt/how-to-guides/compile/how-to-configure-cmake",permalink:"/docs/api-reference/wire-cdt/how-to-guides/compile/how-to-configure-cmake",draft:!1,unlisted:!1,editUrl:"https://github.com/Wire-Network/wire-docs/docs/api-reference/wire-cdt/how-to-guides/compile/how-to-configure-cmake.md",tags:[],version:"current",frontMatter:{}},s={},d=[{value:"Overview",id:"overview",level:2},{value:"Before you begin",id:"before-you-begin",level:2},{value:"Procedure",id:"procedure",level:2},{value:"Automatic generation of CMake configuration",id:"automatic-generation-of-cmake-configuration",level:3},{value:"Manual generation of CMake configuration",id:"manual-generation-of-cmake-configuration",level:3}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(n.p,{children:"This guide provides instructions how to configure CMake."}),"\n",(0,t.jsx)(n.h2,{id:"before-you-begin",children:"Before you begin"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["You have installed CMake, for detailed instructions consult the official ",(0,t.jsx)(n.a,{href:"https://CMake.org/install/",children:"CMake installation page"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"procedure",children:"Procedure"}),"\n",(0,t.jsx)(n.p,{children:"The following steps show:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#overview",children:"Overview"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#before-you-begin",children:"Before you begin"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#procedure",children:"Procedure"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#automatic-generation-of-cmake-configuration",children:"Automatic generation of CMake configuration"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#manual-generation-of-cmake-configuration",children:"Manual generation of CMake configuration"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"automatic-generation-of-cmake-configuration",children:"Automatic generation of CMake configuration"}),"\n",(0,t.jsxs)(n.p,{children:["To compile a smart contract project with CMake, you'll need a CMake file. To use the new ",(0,t.jsx)(n.code,{children:"cdt-init"})," tool to generate the directory structure stub ",(0,t.jsx)(n.code,{children:".hpp/.cpp"})," files and the CMake configuration files follow these steps:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"cd ~\ncdt-init --path=. --project=test_contract\ncd test_contract\ncd build\ncmake ..\nmake\nls -al test_contract\n"})}),"\n",(0,t.jsxs)(n.p,{children:["At this point, you'll have the ",(0,t.jsx)(n.code,{children:"test_contract.abi"})," and ",(0,t.jsx)(n.code,{children:"test_contract.wasm"})," files in ",(0,t.jsx)(n.code,{children:"~/test_contract/test_contract"}),". These files are ready to be deployed."]}),"\n",(0,t.jsx)(n.h3,{id:"manual-generation-of-cmake-configuration",children:"Manual generation of CMake configuration"}),"\n",(0,t.jsxs)(n.p,{children:["To create manually the CMake configuration, the template ",(0,t.jsx)(n.code,{children:"CMakeLists.txt"})," in the examples folder is a good boilerplate for manual usage."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.code,{children:"CMakeLists.txt"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"cmake_minimum_required(VERSION 3.5)\nproject(test_example VERSION 1.0.0)\n\nfind_package(cdt)\n\nadd_contract( test test test.cpp )\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.code,{children:"test.cpp"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c++",children:"#include <sysio/sysio.hpp>\nusing namespace sysio;\n\nclass [[sysio::contract]] test : public sysio::contract {\npublic:\n   using contract::contract;\n\n   [[sysio::action]] void testact( name test ) {\n   }\n};\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The following CMake macros are provided:"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"add_contract"})," is used to build your smart contract and generate an ABI. The first parameter is the contract name, the second is the CMake target name, and the rest are the CPP files needed to build the contract."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"target_ricardian_directory"})," can be used to add the directory where your ricardian contracts live to a specific CMake target."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"add_native_library"})," and ",(0,t.jsx)(n.code,{children:"add_native_executable"})," are CMake macros for the native tester. They are drop in replacements for ",(0,t.jsx)(n.code,{children:"add_library"})," and ",(0,t.jsx)(n.code,{children:"add_executable"}),"."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>a});var t=i(96540);const o={},r=t.createContext(o);function c(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);