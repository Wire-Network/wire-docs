"use strict";(self.webpackChunkwire_docs=self.webpackChunkwire_docs||[]).push([[5486],{53401:(e,c,n)=>{n.r(c),n.d(c,{assets:()=>o,contentTitle:()=>f,default:()=>l,frontMatter:()=>s,metadata:()=>d,toc:()=>i});var a=n(74848),t=n(28453);const s={id:"set-contract",title:"set contract"},f=void 0,d={id:"api-reference/tooling/clio/command-reference/set/set-contract",title:"set contract",description:"Description",source:"@site/docs/api-reference/tooling/clio/command-reference/set/set-contract.md",sourceDirName:"api-reference/tooling/clio/command-reference/set",slug:"/api-reference/tooling/clio/command-reference/set/set-contract",permalink:"/docs/api-reference/tooling/clio/command-reference/set/set-contract",draft:!1,unlisted:!1,editUrl:"https://github.com/Wire-Network/wire-docs/edit/master/docs/api-reference/tooling/clio/command-reference/set/set-contract.md",tags:[],version:"current",frontMatter:{id:"set-contract",title:"set contract"},sidebar:"apiReferenceSidebar",previous:{title:"set code",permalink:"/docs/api-reference/tooling/clio/command-reference/set/set-code"},next:{title:"index",permalink:"/docs/api-reference/tooling/clio/command-reference/system/"}},o={},i=[{value:"Description",id:"description",level:2},{value:"Positionals",id:"positionals",level:2},{value:"Options",id:"options",level:2},{value:"Example",id:"example",level:2}];function r(e){const c={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(c.p,{children:"Creates or updates the contract on an account."}),"\n",(0,a.jsx)(c.h2,{id:"positionals",children:"Positionals"}),"\n",(0,a.jsxs)(c.p,{children:[(0,a.jsx)(c.code,{children:"account"})," ",(0,a.jsx)(c.em,{children:"TEXT"})," - The account to publish a contract for\n",(0,a.jsx)(c.code,{children:"wast-file"}),"  ",(0,a.jsx)(c.em,{children:"TEXT"})," - The file containing the contract WAST or WASM\n",(0,a.jsx)(c.code,{children:"abi-file"}),"  ",(0,a.jsx)(c.em,{children:"TEXT"})," - The ABI for the contract"]}),"\n",(0,a.jsx)(c.h2,{id:"options",children:"Options"}),"\n",(0,a.jsxs)(c.p,{children:[(0,a.jsx)(c.code,{children:"-h,--help"})," Print this help message and exit"]}),"\n",(0,a.jsxs)(c.p,{children:[(0,a.jsx)(c.code,{children:"-a,--abi"})," ",(0,a.jsx)(c.em,{children:"TEXT"})," - The ABI for the contract"]}),"\n",(0,a.jsxs)(c.p,{children:[(0,a.jsx)(c.code,{children:"-c,--clear"})," Remove contract on an account"]}),"\n",(0,a.jsxs)(c.p,{children:[(0,a.jsx)(c.code,{children:"--suppress-duplicate-check"}),"  Don't check for duplicate"]}),"\n",(0,a.jsxs)(c.p,{children:[(0,a.jsx)(c.code,{children:"-x,--expiration"})," ",(0,a.jsx)(c.em,{children:"TEXT"})," - set the time in seconds before a transaction expires, defaults to 30s"]}),"\n",(0,a.jsxs)(c.p,{children:[(0,a.jsx)(c.code,{children:"-f,--force-unique"})," - force the transaction to be unique. this will consume extra bandwidth and remove any protections against accidently issuing the same transaction multiple times"]}),"\n",(0,a.jsxs)(c.p,{children:[(0,a.jsx)(c.code,{children:"-s,--skip-sign"})," Specify if unlocked wallet keys should be used to sign transaction"]}),"\n",(0,a.jsxs)(c.p,{children:[(0,a.jsx)(c.code,{children:"-d,--dont-broadcast"})," - Don't broadcast transaction to the network (just print to stdout)"]}),"\n",(0,a.jsxs)(c.p,{children:[(0,a.jsx)(c.code,{children:"--return-packed"}),"             used in conjunction with --dont-broadcast to get the packed transaction"]}),"\n",(0,a.jsxs)(c.p,{children:[(0,a.jsx)(c.code,{children:"-r,--ref-block"})," ",(0,a.jsx)(c.em,{children:"TEXT"}),"         set the reference block num or block id used for TAPOS (Transaction as Proof-of-Stake)"]}),"\n",(0,a.jsxs)(c.p,{children:[(0,a.jsx)(c.code,{children:"-p,--permission"}),"  ",(0,a.jsx)(c.em,{children:"TEXT"})," - An account and permission level to authorize, as in 'account@permission' (defaults to 'account@active')"]}),"\n",(0,a.jsxs)(c.p,{children:[(0,a.jsx)(c.code,{children:"--max-cpu-usage-ms"})," ",(0,a.jsx)(c.em,{children:"UINT"})," - set an upper limit on the milliseconds of cpu usage budget, for the execution of the transaction (defaults to 0 which means no limit)"]}),"\n",(0,a.jsxs)(c.p,{children:[(0,a.jsx)(c.code,{children:"--max-net-usage"})," ",(0,a.jsx)(c.em,{children:"UINT"})," - set an upper limit on the net usage budget, in bytes, for the transaction (defaults to 0 which means no limit)"]}),"\n",(0,a.jsxs)(c.p,{children:[(0,a.jsx)(c.code,{children:"--delay-sec"})," ",(0,a.jsx)(c.em,{children:"UINT"})," - set the delay_sec seconds, defaults to 0s"]}),"\n",(0,a.jsx)(c.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(c.p,{children:"Here we deploy the standard currency contract."}),"\n",(0,a.jsx)(c.pre,{children:(0,a.jsx)(c.code,{className:"language-sh",children:"clio set contract currency ../../../contracts/currency/currency.wast ../../../contracts/currency/currency.abi\n"})}),"\n",(0,a.jsx)(c.p,{children:"This will output something similar to..."}),"\n",(0,a.jsx)(c.pre,{children:(0,a.jsx)(c.code,{className:"language-console",children:"Reading WAST...\nAssembling WASM...\nPublishing contract...\n"})}),"\n",(0,a.jsx)(c.pre,{children:(0,a.jsx)(c.code,{className:"language-json",children:'{\n  "transaction_id": "9990306e13f630a9c5436a5a0b6fb8fe2c7f3da2f342b4898a39c4a2c17dcdb3",\n  "processed": {\n    "refBlockNum": 1208,\n    "refBlockPrefix": 3058534156,\n    "expiration": "2017-08-24T18:29:52",\n    "scope": [\n      "currency",\n      "eos"\n    ],\n    "signatures": [],\n    "messages": [{\n        "code": "eos",\n        "type": "setcode",\n        "authorization": [{\n            "account": "currency",\n            "permission": "active"\n          }\n        ],\n        "data": "00000079b822651d0000e8150061736d0100000001390a60017e0060037e7e7f017f60047e7e7f7f017f60017f0060057e7e7e7f7f017f60027f7f0060027f7f017f60027e7f0060000060027e7e00029d010a03656e7606617373657274000503656e76086c6f61645f693634000403656e76067072696e7469000003656e76067072696e746e000003656e76067072696e7473000303656e760b726561644d657373616765000603656e760a72656d6f76655f693634000103656e760b7265717569726541757468000003656e760d726571756972654e6f74696365000003656e760973746f72655f6936340002030706000007030809040401700000050301000107cc0107066d656d6f72790200205f5a4e33656f733133726571756972654e6f74696365454e535f344e616d6545000a1e5f5a4e33656f7331317265717569726541757468454e535f344e616d6545000b345f5a4e3863757272656e6379313273746f72654163636f756e74454e33656f73344e616d6545524b4e535f374163636f756e7445000c355f5a4e3863757272656e637932336170706c795f63757272656e63795f7472616e7366657245524b4e535f385472616e7366657245000d04696e6974000e056170706c79000f0a9d0d060600200010080b0600200010070b3400024020012903084200510d0020004280808080a8d7bee3082001411010091a0f0b20004280808080a8d7bee308200110061a0b8a0604017e027f047e017f4100410028020441206b2208360204200029030821052000290300210720002903102104411010042004100241c000100442808080c887d7c8b21d100341d00010042007100341e000100420051003200029030021052000290308100820051008200029030010072000290300210142002105423b210441f00021034200210603400240024002400240024020054206560d0020032c00002202419f7f6a41ff017141194b0d01200241a0016a21020c020b420021072005420b580d020c030b200241ea016a41002002414f6a41ff01714105491b21020b2002ad42388642388721070b2007421f83200442ffffffff0f838621070b200341016a2103200542017c2105200720068421062004427b7c2204427a520d000b420021052008420037031820082006370310200142808080c887d7c8b21d4280808080a8d7bee308200841106a411010011a200041086a2903002101423b210441f00021034200210603400240024002400240024020054206560d0020032c00002202419f7f6a41ff017141194b0d01200241a0016a21020c020b420021072005420b580d020c030b200241ea016a41002002414f6a41ff01714105491b21020b2002ad42388642388721070b2007421f83200442ffffffff0f838621070b200341016a2103200542017c2105200720068421062004427b7c2204427a520d000b2008200637030020084200370308200142808080c887d7c8b21d4280808080a8d7bee3082008411010011a200841186a2203290300200041106a22022903005a418001100020032003290300200229030022057d370300200520082903087c20055a41b00110002008200829030820022903007c370308200029030021050240024020032903004200510d0020054280808080a8d7bee308200841106a411010091a0c010b20054280808080a8d7bee308200841106a10061a0b200041086a290300210502400240200841086a2903004200510d0020054280808080a8d7bee3082008411010091a0c010b20054280808080a8d7bee308200810061a0b4100200841206a3602040b980303027f057e017f4100410028020441106b220736020442002103423b210241e00121014200210403400240024002400240024020034207560d0020012c00002200419f7f6a41ff017141194b0d01200041a0016a21000c020b420021052003420b580d020c030b200041ea016a41002000414f6a41ff01714105491b21000b2000ad42388642388721050b2005421f83200242ffffffff0f838621050b200141016a2101200342017c2103200520048421042002427b7c2202427a520d000b42002103423b210241f00021014200210603400240024002400240024020034206560d0020012c00002200419f7f6a41ff017141194b0d01200041a0016a21000c020b420021052003420b580d020c030b200041ea016a41002000414f6a41ff01714105491b21000b2000ad42388642388721050b2005421f83200242ffffffff0f838621050b200141016a2101200342017c2103200520068421062002427b7c2202427a520d000b2007428094ebdc033703082007200637030020044280808080a8d7bee3082007411010091a4100200741106a3602040bb10303027f047e017f4100410028020441206b220836020442002105423b210441e00121034200210603400240024002400240024020054207560d0020032c00002202419f7f6a41ff017141194b0d01200241a0016a21020c020b420021072005420b580d020c030b200241ea016a41002002414f6a41ff01714105491b21020b2002ad42388642388721070b2007421f83200442ffffffff0f838621070b200341016a2103200542017c2105200720068421062004427b7c2204427a520d000b024020062000520d0042002105423b210441f00121034200210603400240024002400240024020054207560d0020032c00002202419f7f6a41ff017141194b0d01200241a0016a21020c020b420021072005420b580d020c030b200241ea016a41002002414f6a41ff01714105491b21020b2002ad42388642388721070b2007421f83200442ffffffff0f838621070b200341016a2103200542017c2105200720068421062004427b7c2204427a520d000b20062001520d00200842003703102008420037030820084200370318200841086a4118100541174b4180021000200841086a100d0b4100200841206a3602040b0bff010b0041040b04200500000041100b2254686973206170706561727320746f2062652061207472616e73666572206f6620000041c0000b0220000041d0000b072066726f6d20000041e0000b0520746f20000041f0000b086163636f756e7400004180010b2c696e746567657220756e646572666c6f77207375627472616374696e6720746f6b656e2062616c616e6365000041b0010b26696e7465676572206f766572666c6f7720616464696e6720746f6b656e2062616c616e6365000041e0010b0963757272656e6379000041f0010b097472616e7366657200004180020b1e6d6573736167652073686f72746572207468616e2065787065637465640000fd02046e616d651006617373657274020000086c6f61645f693634050000000000067072696e74690100067072696e746e0100067072696e747301000b726561644d6573736167650200000a72656d6f76655f693634030000000b726571756972654175746801000d726571756972654e6f7469636501000973746f72655f6936340400000000205f5a4e33656f733133726571756972654e6f74696365454e535f344e616d65450101301e5f5a4e33656f7331317265717569726541757468454e535f344e616d6545010130345f5a4e3863757272656e6379313273746f72654163636f756e74454e33656f73344e616d6545524b4e535f374163636f756e74450201300131355f5a4e3863757272656e637932336170706c795f63757272656e63795f7472616e7366657245524b4e535f385472616e73666572450901300131013201330134013501360137013804696e69740801300131013201330134013501360137056170706c7909013001310132013301340135013601370138010b4163636f756e744e616d65044e616d6502087472616e7366657200030466726f6d0b4163636f756e744e616d6502746f0b4163636f756e744e616d65087175616e746974790655496e743634076163636f756e740002036b65790655496e7436340762616c616e63650655496e74363401000000b298e982a4087472616e736665720100000080bafac608076163636f756e74"\n      }\n    ],\n    "output": [{\n        "notify": [],\n        "sync_transactions": [],\n        "async_transactions": []\n      }\n    ]\n  }\n}\n'})})]})}function l(e={}){const{wrapper:c}={...(0,t.R)(),...e.components};return c?(0,a.jsx)(c,{...e,children:(0,a.jsx)(r,{...e})}):r(e)}},28453:(e,c,n)=>{n.d(c,{R:()=>f,x:()=>d});var a=n(96540);const t={},s=a.createContext(t);function f(e){const c=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(c):{...c,...e}}),[c,e])}function d(e){let c;return c=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:f(e.components),a.createElement(s.Provider,{value:c},e.children)}}}]);