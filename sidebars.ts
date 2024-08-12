import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // contentSidebar: [{ type: "autogenerated", dirName: "." }],

  // But you can create a sidebar manually

  contentSidebar: [
    // "introduction",
    // "overview",
    {
      type: "category",
      link: {
        type: "generated-index",
      },
      collapsed: false,
      label: "Introduction",
      items: ["introduction/overview", "introduction/glossary"],
    },
    {
      type: "category",
      link: {
        type: "doc",
        id: "getting-started/getting-started-intro",
        // keywords: ["setup"],
      },
      label: "Getting Started",
      items: [
        // "getting-started/getting-started", // Main page (can be omitted if it's linked above)
        "getting-started/install-dependencies",
        "getting-started/launch-local-node",
        "getting-started/system-requirements",
        "getting-started/create-development-wallet",
        "getting-started/create-development-accounts",
      ],
    },
    {
      type: "category",
      link: {
        type: "doc",
        id: "smart-contract-development/smart-contract-development-intro",
      },
      label: "Smart Contract Development",
      items: [
        "smart-contract-development/smart-contract-basics",
        // "smart-contract-development/hello-world-contract",
        "smart-contract-development/hello-world-contract-short",
        "smart-contract-development/company-contract",
        "smart-contract-development/interacting-with-deployed-contract-1",
        "smart-contract-development/block-explorer",
      ],
    },

    {
      type: "category",
      link: {
        type: "doc",
        id: "api-reference/api-reference-intro",
        // keywords: ["setup"],
      },
      collapsed: false,
      label: "API Reference",
      items: [],
    },
  ],
};

export default sidebars;
