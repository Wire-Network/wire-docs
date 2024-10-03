"use strict";(self.webpackChunkwire_docs=self.webpackChunkwire_docs||[]).push([[3136],{97556:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var s=t(74848),o=t(28453);const i={},r="How to upgrade the system contract",c={id:"api-reference/system-contracts/how-to-guides/upgrading-the-sysio.system-contract",title:"How to upgrade the system contract",description:"Indirect method using sysio.msig contract",source:"@site/docs/api-reference/system-contracts/how-to-guides/upgrading-the-sysio.system-contract.md",sourceDirName:"api-reference/system-contracts/how-to-guides",slug:"/api-reference/system-contracts/how-to-guides/upgrading-the-sysio.system-contract",permalink:"/docs/api-reference/system-contracts/how-to-guides/upgrading-the-sysio.system-contract",draft:!1,unlisted:!1,editUrl:"https://github.com/Wire-Network/wire-docs/docs/api-reference/system-contracts/how-to-guides/upgrading-the-sysio.system-contract.md",tags:[],version:"current",frontMatter:{}},a={},d=[{value:"Indirect method using sysio.msig contract",id:"indirect-method-using-sysiomsig-contract",level:2},{value:"Direct method (avoids using sysio.msig contract)",id:"direct-method-avoids-using-sysiomsig-contract",level:2}];function h(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"how-to-upgrade-the-system-contract",children:"How to upgrade the system contract"})}),"\n",(0,s.jsx)(n.h2,{id:"indirect-method-using-sysiomsig-contract",children:"Indirect method using sysio.msig contract"}),"\n",(0,s.jsx)(n.p,{children:"Clio currently provides tools to propose an action with the sysio.msig contract, but it does not provide an easy interface to propose a custom transaction."}),"\n",(0,s.jsxs)(n.p,{children:["So, at the moment it is difficult to propose an atomic transaction with multiple actions (for example ",(0,s.jsx)(n.code,{children:"sysio::setcode"})," followed by ",(0,s.jsx)(n.code,{children:"sysio::setabi"}),")."]}),"\n",(0,s.jsxs)(n.p,{children:["The advantage of the ",(0,s.jsx)(n.code,{children:"sysio.msig"})," method is that it makes coordination much easier and does not place strict time limits (less than 9 hours) on signature collection."]}),"\n",(0,s.jsx)(n.p,{children:"The disadvantage of the sysio.msig method is that it requires the proposer to have sufficient RAM to propose the transaction and currently clio does not provide convenient tools to use it with custom transactions like the one that would be necessary to atomically upgrade the system contract."}),"\n",(0,s.jsx)(n.p,{children:"For now, it is recommended to use the direct method to upgrade the system contract."}),"\n",(0,s.jsx)(n.h2,{id:"direct-method-avoids-using-sysiomsig-contract",children:"Direct method (avoids using sysio.msig contract)"}),"\n",(0,s.jsx)(n.p,{children:"Each of the top 21 block producers should do the following:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Get current system contract for later comparison (actual hash and ABI on the main-net blockchain will be different)"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"$ clio get code -c original_system_contract.wast -a original_system_contract.abi sysio\ncode hash: cc0ffc30150a07c487d8247a484ce1caf9c95779521d8c230040c2cb0e2a3a60\nsaving wast to original_system_contract.wast\nsaving abi to original_system_contract.abi\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"Generate the unsigned transaction which upgrades the system contract:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"clio set contract -s -j -d sysio contracts/sysio.system | tail -n +4 > upgrade_system_contract_trx.json\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The first few lines of the generated file should be something similar to (except with very different numbers for ",(0,s.jsx)(n.code,{children:"expiration"}),", ",(0,s.jsx)(n.code,{children:"ref_block_num"}),", and ",(0,s.jsx)(n.code,{children:"ref_block_prefix"}),"):"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "expiration": "2018-06-15T22:17:10",\n  "ref_block_num": 4552,\n  "ref_block_prefix": 511016679,\n  "max_net_usage_words": 0,\n  "max_cpu_usage_ms": 0,\n  "delay_sec": 0,\n  "context_free_actions": [],\n  "actions": [{\n      "account": "sysio",\n      "name": "setcode",\n      "authorization": [{\n          "actor": "sysio",\n          "permission": "active"\n        }\n      ],\n'})}),"\n",(0,s.jsx)(n.p,{children:"and the last few lines should be:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'      }\n  ],\n  "transaction_extensions": [],\n  "signatures": [],\n  "context_free_data": []\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["One of the top block producers should be chosen to lead the upgrade process. This lead producer should take their generated ",(0,s.jsx)(n.code,{children:"upgrade_system_contract_trx.json"}),", rename it to ",(0,s.jsx)(n.code,{children:"upgrade_system_contract_official_trx.json"}),", and do the following:"]}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Modify the ",(0,s.jsx)(n.code,{children:"expiration"})," timestamp in ",(0,s.jsx)(n.code,{children:"upgrade_system_contract_official_trx.json"})," to a time that is sufficiently far in the future to give enough time to collect all the necessary signatures, but not more than 9 hours from the time the transaction was generated. Also, keep in mind that the transaction will not be accepted into the blockchain if the expiration is more than 1 hour from the present time."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Pass the ",(0,s.jsx)(n.code,{children:"upgrade_system_contract_official_trx.json"})," file to all the other top 21 block producers."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Then each of the top 21 block producers should do the following:"}),"\n",(0,s.jsxs)(n.ol,{start:"6",children:["\n",(0,s.jsxs)(n.li,{children:["Compare their generated ",(0,s.jsx)(n.code,{children:"upgrade_system_contract_official_trx.json"})," file with the ",(0,s.jsx)(n.code,{children:"upgrade_system_contract_official_trx.json"})," provided by the lead producer. The only difference should be in ",(0,s.jsx)(n.code,{children:"expiration"}),", ",(0,s.jsx)(n.code,{children:"ref_block_num"}),", ",(0,s.jsx)(n.code,{children:"ref_block_prefix"}),", for example:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:'  $ diff upgrade_system_contract_official_trx.json upgrade_system_contract_trx.json\n  2,4c2,4\n  <   "expiration": "2018-06-15T22:17:10",\n  <   "ref_block_num": 4552,\n  <   "ref_block_prefix": 511016679,\n  ---\n  >   "expiration": "2018-06-15T21:20:39",\n  >   "ref_block_num": 4972,\n  >   "ref_block_prefix": 195390844,\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"7",children:["\n",(0,s.jsx)(n.li,{children:'If the comparison is good, each block producer should proceed with signing the official upgrade transaction with the keys necessary to satisfy their active permission. If the block producer only has a single key (i.e the "active key") in the active permission of their block producing account, then they only need to generate one signature using that active key. This signing process can be done offline for extra security.'}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["First, the block producer should collect all the necessary information. Let us assume that the block producers active key pair is ",(0,s.jsx)(n.code,{children:"(EOS5kBmh5kfo6c6pwB8j77vrznoAaygzoYvBsgLyMMmQ9B6j83i9c, 5JjpkhxAmEfynDgSn7gmEKEVcBqJTtu6HiQFf4AVgGv5A89LfG3)"}),". The block producer needs their active private key (",(0,s.jsx)(n.code,{children:"5JjpkhxAmEfynDgSn7gmEKEVcBqJTtu6HiQFf4AVgGv5A89LfG3"})," in this example), the ",(0,s.jsx)(n.code,{children:"upgrade_system_contract_official_trx.json"}),", and the ",(0,s.jsx)(n.code,{children:"chain_id"})," (",(0,s.jsx)(n.code,{children:"d0242fb30b71b82df9966d10ff6d09e4f5eb6be7ba85fd78f796937f1959315e"})," in this example) which can be retrieved through ",(0,s.jsx)(n.code,{children:"clio get info"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Then on a secure computer the producer can sign the transaction (the producer will need to paste in their private key when prompted):"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'$ clio sign --chain-id d0242fb30b71b82df9966d10ff6d09e4f5eb6be7ba85fd78f796937f1959315e upgrade_system_contract_trx.json | tail -n 5\nprivate key:   "signatures": [\n    "SIG_K1_JzABB9gzDGwUHaRmox68UNcfxMVwMnEXqqS1MvtsyUX8KGTbsZ5aZQZjHD5vREQa5BkZ7ft8CceLBLAj8eZ5erZb9cHuy5"\n  ],\n  "context_free_data": []\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Make sure to use the ",(0,s.jsx)(n.code,{children:"chain_id"})," of the actual main-net blockchain that the transaction will be submitted to and not the example ",(0,s.jsx)(n.code,{children:"chain_id"})," provided above."]}),"\n",(0,s.jsxs)(n.p,{children:["The output should include the signature (in this case ",(0,s.jsx)(n.code,{children:'"SIG_K1_JzABB9gzDGwUHaRmox68UNcfxMVwMnEXqqS1MvtsyUX8KGTbsZ5aZQZjHD5vREQa5BkZ7ft8CceLBLAj8eZ5erZb9cHuy5"'}),") which the producer should then send to the lead producer."]}),"\n",(0,s.jsx)(n.p,{children:"When the lead producer collects 15 producer signatures, the lead producer should do the following:"}),"\n",(0,s.jsxs)(n.ol,{start:"8",children:["\n",(0,s.jsxs)(n.li,{children:["Make a copy of the ",(0,s.jsx)(n.code,{children:"upgrade_system_contract_official_trx.json"})," and call it ",(0,s.jsx)(n.code,{children:"upgrade_system_contract_official_trx_signed.json"}),", and then modify the ",(0,s.jsx)(n.code,{children:"upgrade_system_contract_official_trx_signed.json"})," so that the ",(0,s.jsx)(n.code,{children:"signatures"})," field includes all 15 collected signatures. So the tail end of ",(0,s.jsx)(n.code,{children:"upgrade_system_contract_official_trx_signed.json"})," could look something like:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'$ cat upgrade_system_contract_official_trx_signed.json | tail -n 20\n  "transaction_extensions": [],\n  "signatures": [\n  "SIG_K1_JzABB9gzDGwUHaRmox68UNcfxMVwMnEXqqS1MvtsyUX8KGTbsZ5aZQZjHD5vREQa5BkZ7ft8CceLBLAj8eZ5erZb9cHuy5",\n  "SIG_K1_Kj7XJxnPQSxEXZhMA8uK3Q1zAxp7AExzsRd7Xaa7ywcE4iUrhbVA3B6GWre5Ctgikb4q4CeU6Bvv5qmh9uJjqKEbbjd3sX",\n  "SIG_K1_KbE7qyz3A9LoQPYWzo4e6kg5ZVojQVAkDKuufUN2EwVUqtFhtjmGoC6QPQqLi8J7ftiysBp52wJBPjtNQUfZiGpGMsnZ1f",\n  "SIG_K1_KdQsE7ahHA9swE9SDGg4oF6XahpgHmZfEgQAy9KPBLd9HuwrF6c8m6jz43zizK2oo32Ejg1DYuMfoEvJgVfXo81jsqTHvA",\n  "SIG_K1_K6228Hi2z1WabgVdf5bk2UdKyyDSVFwkMaagTn9oLVDV8rCX7aQcjY94c39ah2CkLTsTEqzTPAYknJ8m2m9B7npPkHaFzc",\n  "SIG_K1_Jzdx75hBCA2WSaXgrupmrNbcQocUCsP8r1BKkPXMreiAKPZDwX9J3G8fS1HhyqWjc7FbukwZf8sVRdS3wKbJVpytqXe7Nn",\n  "SIG_K1_KW7Qu2SdPD3zuQKh2ziFLzn9QbKqeMpeiemULky5Bbg1Mst6ijbCX3k2AVFGNFLkNLA36PM1WAT5oipzu1B1K7ymRxTx1Z",\n  "SIG_K1_KXJf1KZNpz73YFKKE7u6jFgsQ8XcX3yA7rDX6ZmG1Qfnc9FLLmT1WViv4bwcPbxaEYfR6SNWfk5cCR9eao2si1soqkXq92",\n  "SIG_K1_JynjkHFT5UFGDpEcqdriXTzCGCwS36Xztq4UAWQHLQgRUZT2YFoLhUcc87kvUteqCUGVxsmSbfgWv1KLy24voKN4Qs5zTe",\n  "SIG_K1_JxhfCaGBhuNShpDHn7j1CryG3iSebvfi7FUnJsfkXNTiwLyq2NDBkeakwjCMWFbzr6qqWuMDLjfXbzdtU17f1wCXMjKSgk",\n  "SIG_K1_KcMSz89QG1ZRFNrXc69R63d5KXbJA8CBjNPYv1VEA3TRfjqVYuhyaHpGXQN4RSKDq4ygr3UTRYBQQVutkJnR6zZ4Ssgd7R",\n  "SIG_K1_JuxT6bhUAbDs6Q2ppuKyKauduvbaJLxvh4gBH4e4A9yRhvUBT7w3DcvMyhdaor27Kbu29jnqhTbvXcb57QqKWQDpboLv7e",\n  "SIG_K1_K8BuFYpCiC5FhpVK8ZAzc3VUg7vz6WwLoWBrGN6nnuqUjngGqvHp3UxDVzcwhqccHdv8kdPXvF6G1NszwF1dd3wjCrHBYw",\n  "SIG_K1_KfH5ZirPwDk1RQKvJv2AGPfsJyPXvXLegZ7LvcPmRtjtMiErs1STXLNT8kiBfhZr4xkWRA5NR1kMF3d49DFMJiB2iWMXJc",\n  "SIG_K1_KjJB8jtcqpVe3r5jouFiAa9wJeYqoLMh5xrUV6kBF6UWfbYjimMWBJWz2ZPomGDsk7JtdUESVrYj1AhYbdp3X48KLm5Cev"\n  ],\n  "context_free_data": []\n}\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"9",children:["\n",(0,s.jsx)(n.li,{children:"Push the signed transaction to the blockchain:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'$ clio push transaction --skip-sign upgrade_system_contract_official_trx_signed.json\n{\n  "transaction_id": "202888b32e7a0f9de1b8483befac8118188c786380f6e62ced445f93fb2b1041",\n  "processed": {\n    "id": "202888b32e7a0f9de1b8483befac8118188c786380f6e62ced445f93fb2b1041",\n    "receipt": {\n      "status": "executed",\n      "cpu_usage_us": 4909,\n      "net_usage_words": 15124\n    },\n    "elapsed": 4909,\n    "net_usage": 120992,\n    "scheduled": false,\n    "action_traces": [{\n...\n'})}),"\n",(0,s.jsx)(n.p,{children:"If you get an error message like the following:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"Error 3090003: provided keys, permissions, and delays do not satisfy declared authorizations\nEnsure that you have the related private keys inside your wallet and your wallet is unlocked.\n"})}),"\n",(0,s.jsx)(n.p,{children:"That means that at least one of the signatures provided were bad. This may be because a producer signed the wrong transaction, used the wrong private key, or used the wrong chain ID."}),"\n",(0,s.jsx)(n.p,{children:"If you get an error message like the following:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"Error 3090002: irrelevant signature included\nPlease remove the unnecessary signature from your transaction!\n"})}),"\n",(0,s.jsx)(n.p,{children:"That means unnecessary signatures were included. If there are 21 active producers, only signatures from exactly 15 of those 21 active producers are needed."}),"\n",(0,s.jsx)(n.p,{children:"If you get an error message like the following:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"Error 3040006: Transaction Expiration Too Far\nPlease decrease the expiration time of your transaction!\n"})}),"\n",(0,s.jsx)(n.p,{children:"That means that the expiration time is more than 1 hour in the future and you need to wait some time before being allowed to push the transaction."}),"\n",(0,s.jsx)(n.p,{children:"If you get an error message like the following:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"Error 3040005: Expired Transaction\nPlease increase the expiration time of your transaction!\n"})}),"\n",(0,s.jsx)(n.p,{children:"That means the expiration time of the signed transaction has passed and this entire process has to restart from step 1."}),"\n",(0,s.jsxs)(n.ol,{start:"9",children:["\n",(0,s.jsx)(n.li,{children:"Assuming the transaction successfully executes, everyone can then verify that the new contract is in place:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:'$ clio get code -c new_system_contract.wast -a new_system_contract.abi sysio\ncode hash: 9fd195bc5a26d3cd82ae76b70bb71d8ce83dcfeb0e5e27e4e740998fdb7b98f8\nsaving wast to new_system_contract.wast\nsaving abi to new_system_contract.abi\n$ diff original_system_contract.abi new_system_contract.abi\n584,592d583\n<         },{\n<           "name": "deferred_trx_id",\n<           "type": "uint32"\n<         },{\n<           "name": "last_unstake_time",\n<           "type": "time_point_sec"\n<         },{\n<           "name": "unstaking",\n<           "type": "asset"\n'})})]})}function l(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var s=t(96540);const o={},i=s.createContext(o);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);