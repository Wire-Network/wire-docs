"use strict";(self.webpackChunkwire_docs=self.webpackChunkwire_docs||[]).push([[7945],{29596:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var i=t(74848),o=t(28453);const s={},r="cdt-cpp",c={id:"api-reference/tooling/cdt/cdt-cpp",title:"cdt-cpp",description:"To manually compile the source code, use cdt-cpp and cdt-ld as if it were clang and lld. All the includes and options specific to Wire Sysio and CDT are baked in.",source:"@site/docs/api-reference/tooling/cdt/cdt-cpp.md",sourceDirName:"api-reference/tooling/cdt",slug:"/api-reference/tooling/cdt/cdt-cpp",permalink:"/docs/api-reference/tooling/cdt/cdt-cpp",draft:!1,unlisted:!1,editUrl:"https://github.com/Wire-Network/wire-docs/docs/api-reference/tooling/cdt/cdt-cpp.md",tags:[],version:"current",frontMatter:{},sidebar:"apiReferenceSidebar",previous:{title:"cdt-cc",permalink:"/docs/api-reference/tooling/cdt/cdt-cc"},next:{title:"About System Contracts",permalink:"/docs/api-reference/system-contracts/"}},a={},l=[{value:"Notes",id:"notes",level:2}];function d(n){const e={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"cdt-cpp",children:"cdt-cpp"})}),"\n",(0,i.jsxs)(e.p,{children:["To manually compile the source code, use ",(0,i.jsx)(e.code,{children:"cdt-cpp"})," and ",(0,i.jsx)(e.code,{children:"cdt-ld"})," as if it were ",(0,i.jsx)(e.strong,{children:"clang"})," and ",(0,i.jsx)(e.strong,{children:"lld"}),". All the includes and options specific to Wire Sysio and CDT are baked in."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sh",children:"USAGE: cdt-cpp [options] <input file> ...\n\nOPTIONS:\n\nGeneric Options:\n\n  -help                    - Display available options (-help-hidden for more)\n  -help-list               - Display list of available options (-help-list-hidden for more)\n  -version                 - Display the version of this program\n\ncompiler options:\n\n  -C                       - Include comments in preprocessed output\n  -CC                      - Include comments from within macros in preprocessed output\n  -D=<string>              - Define <macro> to <value> (or 1 if <value> omitted)\n  -E                       - Only run the preprocessor\n  -I=<string>              - Add directory to include search path\n  -L=<string>              - Add directory to library search path\n  -MD                      - Write depfile containing user and system headers\n  -MF=<string>             - Write depfile output\n  -MMD                     - Write depfile containing user\n  -MT=<string>             - Specify name of main file output in depfile\n  -O=<string>              - Optimization level s, 0-3\n  -R=<string>              - Add a resource path for inclusion\n  -S                       - Only run preprocess and compilation steps\n  -U=<string>              - Undefine macro <macro>\n  -W=<string>              - Enable the specified warning\n  -abigen                  - Generate ABI\n  -abigen_output=<string>  - ABIGEN output\n  -c                       - Only run preprocess, compile, and assemble steps\n  -contract=<string>       - Contract name\n  -dD                      - Print macro definitions in -E mode in addition to normal output\n  -dI                      - Print include directives in -E mode in addition to normal output\n  -dM                      - Print macro definitions in -E mode instead to normal output\n  -emit-ast                - Emit Clang AST files for source inputs\n  -emit-llvm               - Use the LLVM representation for assembler and object files\n  -faligned-allocation     - Enable C++17 aligned allocation functions\n  -fasm                    - Assemble file for x86-64\n  -fcolor-diagnostics      - Use colors in diagnostics\n  -fcoroutine-ts           - Enable support for the C++ Coroutines TS\n  -finline-functions       - Inline suitable functions\n  -finline-hint-functions  - Inline functions which are (explicitly or implicitly) marked inline\n  -fmerge-all-constants    - Allow merging of constants\n  -fnative                 - Compile and link for x86-64\n  -fno-cfl-aa              - Disable CFL Alias Analysis\n  -fno-elide-constructors  - Disable C++ copy constructor elision\n  -fno-lto                 - Disable LTO\n  -fno-post-pass           - Don't run post processing pass\n  -fno-stack-first         - Don't set the stack first in memory\n  -stack-size              - Specifies the maximum stack size for the contract\n  -fstack-protector        - Enable stack protectors for functions potentially vulnerable to stack smashing\n  -fstack-protector-all    - Force the usage of stack protectors for all functions\n  -fstack-protector-strong - Use a strong heuristic to apply stack protectors to functions\n  -fstrict-enums           - Enable optimizations based on the strict definition of an enum's value range\n  -fstrict-return          - Always treat control flow paths that fall off the end of a non-void function as unreachable\n  -fstrict-vtable-pointers - Enable optimizations based on the strict rules for overwriting polymorphic C++ objects\n  -fuse-main               - Use main as entry\n  -include=<string>        - Include file before parsing\n  -isystem=<string>        - Add directory to SYSTEM include search path\n  -l=<string>              - Root name of library to link\n  -lto-opt=<string>        - LTO Optimization level (O0-O3)\n  -o=<string>              - Write output to <file>\n  -std=<string>            - Language standard to compile for\n  -sysroot=<string>        - Set the system root directory\n  -v                       - Show commands to run and use verbose output\n  -w                       - Suppress all warnings\n  -no-missing-ricardian-clause - Defaults to false, disables warnings for missing Ricardian clauses\n  --warn-action-read-only  - Issue a warning if a read-only action uses a write API and continue compilation\n"})}),"\n",(0,i.jsx)(e.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"-no-missing-ricardian-clause"}),": Defaults to false, if enabled, it suppresses warnings for missing Ricardian clauses on contracts and contract actions. That includes the warnings generated when there is no independent Ricardian clause file."]}),"\n"]})]})}function p(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>r,x:()=>c});var i=t(96540);const o={},s=i.createContext(o);function r(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:r(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);