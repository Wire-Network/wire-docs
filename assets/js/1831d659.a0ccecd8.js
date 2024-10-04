"use strict";(self.webpackChunkwire_docs=self.webpackChunkwire_docs||[]).push([[9644],{10961:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>t,metadata:()=>r,toc:()=>c});var i=o(74848),l=o(28453);const t={},a=void 0,r={id:"api-reference/tooling/nodeop/plugins/blockvault-client-plugin",title:"blockvault-client-plugin",description:"Overview",source:"@site/docs/api-reference/tooling/nodeop/plugins/blockvault-client-plugin.md",sourceDirName:"api-reference/tooling/nodeop/plugins",slug:"/api-reference/tooling/nodeop/plugins/blockvault-client-plugin",permalink:"/docs/api-reference/tooling/nodeop/plugins/blockvault-client-plugin",draft:!1,unlisted:!1,editUrl:"https://github.com/Wire-Network/wire-docs/edit/master/docs/api-reference/tooling/nodeop/plugins/blockvault-client-plugin.md",tags:[],version:"current",frontMatter:{},sidebar:"apiReferenceSidebar",previous:{title:"Storage and Read Modes",permalink:"/docs/api-reference/tooling/nodeop/concepts/storage-and-read-modes"},next:{title:"chain-api-plugin",permalink:"/docs/api-reference/tooling/nodeop/plugins/chain-api-plugin"}},s={},c=[{value:"Overview",id:"overview",level:2},{value:"Goals",id:"goals",level:2},{value:"Usage",id:"usage",level:2},{value:"Configuration Options",id:"configuration-options",level:2},{value:"Plugin Dependencies",id:"plugin-dependencies",level:2},{value:"Configuration Example",id:"configuration-example",level:2},{value:"Software Dependencies",id:"software-dependencies",level:2},{value:"Block Vault Storage",id:"block-vault-storage",level:2},{value:"Running PostgreSQL for Testing",id:"running-postgresql-for-testing",level:3},{value:"Running PostgreSQL for Production",id:"running-postgresql-for-production",level:3},{value:"Database Schema",id:"database-schema",level:3},{value:"Block Vault Operation",id:"block-vault-operation",level:2},{value:"Block Vault Client API",id:"block-vault-client-api",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"blockvault_client_plugin"})," enables blockchain administrators to implement industry standard disaster recovery to maximize producer operational uptime. The plugin allows a block producer to cluster two or more nodes deployed as a single logical producer. If one of the nodes goes down, the other nodes in the cluster continue to operate, thereby meeting certain guarantees for the producer to continue to function with minimal service disruption."]}),"\n",(0,i.jsx)(n.h2,{id:"goals",children:"Goals"}),"\n",(0,i.jsxs)(n.p,{children:["Block Vault is a clustered component within a Wire network architecture that enables replicated durable storage with strong consistency guarantees for the input required by a redundant cluster of nodes. In particular, Block Vault achieves the following guarantees for any cluster node running ",(0,i.jsx)(n.code,{children:"nodeop"})," configured as a Block Vault client in producing mode:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Guarantee against double-production of blocks"}),"\n",(0,i.jsx)(n.li,{children:"Guarantee against finality violation"}),"\n",(0,i.jsx)(n.li,{children:"Guarantee of liveness (ability to make progress as a blockchain)"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["To facilitate these guarantees, Block Vault allows ",(0,i.jsx)(n.code,{children:"nodeop"})," to run in a redundant and/or highly available mode. Block Vault itself does not implement any coordination of nodes in a cluster. It merely guarantees that any such coordination, including faulty coordination leading to multiple active block constructing nodes, will be safe as defined by the above guarantees. For more information, read the ",(0,i.jsx)(n.a,{href:"#block-vault-operation",children:"Block Vault Operation"})," section below."]}),"\n",(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"# config.ini\nplugin = sysio::blockvault_client_plugin\n[options]\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"# command-line\nnodeop ... --plugin sysio::blockvault_client_plugin [options]\n"})}),"\n",(0,i.jsx)(n.h2,{id:"configuration-options",children:"Configuration Options"}),"\n",(0,i.jsxs)(n.p,{children:["These can be specified from both the ",(0,i.jsx)(n.code,{children:"nodeop"})," command-line or the ",(0,i.jsx)(n.code,{children:"config.ini"})," file:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"Config Options for sysio::blockvault_client_plugin:\n\n  --block-vault-backend arg             the uri for block vault backend. \n                                        Currently, only PostgreSQL is \n                                        supported, the format is \n                                        'postgresql://username:password@localho\n                                        st/company'\n"})}),"\n",(0,i.jsx)(n.h2,{id:"plugin-dependencies",children:"Plugin Dependencies"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/api-reference/tooling/nodeop/plugins/producer-plugin",children:(0,i.jsx)(n.code,{children:"producer_plugin"})})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"configuration-example",children:"Configuration Example"}),"\n",(0,i.jsxs)(n.p,{children:["To use ",(0,i.jsx)(n.code,{children:"blockvault_client_plugin"}),", the ",(0,i.jsx)(n.code,{children:"nodeop"})," service must be configured as a producer with the ",(0,i.jsx)(n.code,{children:"--block-vault-backend"})," option:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"nodeop --plugin sysio::producer_plugin --producer-name myproducer --plugin sysio::blockvault_client_plugin --block-vault-backend postgresql://user:password@mycompany.com\n"})}),"\n",(0,i.jsxs)(n.p,{children:["For production deployments, it is recommend to use the ",(0,i.jsx)(n.code,{children:"PGPASSWORD"})," environment variable to configure the password, instead of embedding the password in the URI."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"export PGPASSWORD=password\nnodeop --plugin sysio::producer_plugin --producer-name myproducer --plugin sysio::blockvault_client_plugin --block-vault-backend postgresql://user@mycompany.com\n"})}),"\n",(0,i.jsx)(n.h2,{id:"software-dependencies",children:"Software Dependencies"}),"\n",(0,i.jsxs)(n.p,{children:["To build ",(0,i.jsx)(n.code,{children:"blockvault_client_plugin"})," you need ",(0,i.jsx)(n.code,{children:"libpq"})," version 10 or above and ",(0,i.jsx)(n.code,{children:"libpqxx"})," version 6 or above. These dependencies are typically installed (alongside other dependencies) when you either ",(0,i.jsx)(n.a,{href:"/docs/getting-started/install-dependencies",children:"Install EOSIO"})," from prebuilt binaries or build from source. You may also opt to install these dependencies manually prior to installing or building EOSIO."]}),"\n",(0,i.jsx)(n.p,{children:"For MacOS, you can simply use homebrew to install these dependencies:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"brew install libpq libpqxx\n"})}),"\n",(0,i.jsxs)(n.p,{children:["For Linux, the versions of ",(0,i.jsx)(n.code,{children:"libpq"})," and ",(0,i.jsx)(n.code,{children:"libpqxx"})," provided by the system package managers may not be current enough. We recommend to follow the ",(0,i.jsx)(n.code,{children:"install libpq"})," and ",(0,i.jsx)(n.code,{children:"install libpqxx"})," sections of the corresponding dockerfile in ",(0,i.jsx)(n.code,{children:".cicd/platform/pinned"})," for your platform to install these dependencies."]}),"\n",(0,i.jsx)(n.h2,{id:"block-vault-storage",children:"Block Vault Storage"}),"\n",(0,i.jsxs)(n.p,{children:["Currently, Block Vault uses ",(0,i.jsx)(n.code,{children:"PostgreSQL"})," for its durable storage. Other distributed databases may be supported in the future."]}),"\n",(0,i.jsx)(n.h3,{id:"running-postgresql-for-testing",children:"Running PostgreSQL for Testing"}),"\n",(0,i.jsxs)(n.p,{children:["We recommend to use ",(0,i.jsx)(n.code,{children:"docker"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"docker run  -p 5432:5432 -e POSTGRES_PASSWORD=password -d postgres\n"})}),"\n",(0,i.jsx)(n.h3,{id:"running-postgresql-for-production",children:"Running PostgreSQL for Production"}),"\n",(0,i.jsxs)(n.p,{children:["We recommend to deploy ",(0,i.jsx)(n.code,{children:"PostgreSQL"})," with HA (high availability) mode and synchronous replication strategy."]}),"\n",(0,i.jsx)(n.h3,{id:"database-schema",children:"Database Schema"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"blockvault_client_plugin"})," creates two tables ",(0,i.jsx)(n.code,{children:"BlockData"})," and ",(0,i.jsx)(n.code,{children:"SnapshotData"})," if not already in the database. The tables are created with the following SQL commands when the plugin starts:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"CREATE TABLE IF NOT EXISTS BlockData (watermark_bn bigint, watermark_ts bigint, lib bigint, block_num bigint, block_id bytea UNIQUE, previous_block_id bytea, block oid, block_size bigint);\n\nCREATE TABLE IF NOT EXISTS SnapshotData (watermark_bn bigint, watermark_ts bigint, snapshot oid);\n"})}),"\n",(0,i.jsx)(n.h2,{id:"block-vault-operation",children:"Block Vault Operation"}),"\n",(0,i.jsx)(n.p,{children:"As new nodes join a cluster, the Block Vault will be their exclusive source of sync data, enabling it to guarantee a consistent view of the blockchain as a base. When a node participating in the cluster constructs a new block, it will submit it to the Block Vault for approval prior to broadcasting it to external peers via the P2P network."}),"\n",(0,i.jsx)(n.p,{children:"Block Vault is exclusively responsible for providing guarantees against double-production of blocks and finality violations. It facilitates partial guarantee of liveness through node redundancy by ensuring that data needed to construct new blocks are durable and replicated. However, Block Vault cannot guarantee that the data it contains was not malformed. To that end, Block Vault depends on the proper operation of the clustered nodes."}),"\n",(0,i.jsx)(n.h2,{id:"block-vault-client-api",children:"Block Vault Client API"}),"\n",(0,i.jsx)(n.p,{children:"Cluster nodes interact with the Block Vault through the following messages:"})]})}function u(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>a,x:()=>r});var i=o(96540);const l={},t=i.createContext(l);function a(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);