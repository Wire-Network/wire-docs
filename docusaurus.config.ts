import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import * as Preset from "@docusaurus/preset-classic";

// prism themes

// [
//   "dracula",
//   "duotoneDark",
//   "duotoneLight",
//   "github",
//   "jettwaveDark",
//   "jettwaveLight",
//   "nightOwl",
//   "nightOwlLight",
//   "oceanicNext",
//   "okaidia",
//   "oneDark",
//   "oneLight",
//   "palenight",
//   "shadesOfPurple",
//   "synthwave84",
//   "ultramin",
//   "vsDark",
//   "vsLight",
// ];
const config: Config = {
  title: "Wire Docs",
  tagline: "Official Wire Network Documentation",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://Wire-Network.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",
  plugins: ["@docusaurus/theme-live-codeblock"],
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Wire-Network",
  projectName: "wire-docs",
  deploymentBranch: "gh-pages",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  trailingSlash: false,
  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  themes: ["@docusaurus/theme-mermaid"],
  markdown: {
    mermaid: true,
  },
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/Wire-Network/wire-docs",
        },
        blog: false,
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/tags/**", "/index-off", "/markdown-page"],
          filename: "sitemap.xml",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
    [
      "redocusaurus",
      {
        specs: [
          {
            spec: "openapi/ChainApi.yaml",
            route: "docs/api-reference/chain-api",
          },
          {
            spec: "openapi/ProducerApi.yaml",
            route: "docs/api-reference/producer-api",
          },
          {
            spec: "openapi/NetApi.yaml",
            route: "docs/api-reference/net-api",
          },
          {
            spec: "openapi/DBSizeApi.yaml",
            route: "docs/api-reference/db-size-api",
          },
          {
            spec: "openapi/TraceApi.yaml",
            route: "docs/api-reference/trace-api",
          },
        ],
      },
    ],
  ],

  themeConfig: {
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    hideOnScroll: true,
    // Replace with your project's social card
    liveCodeBlock: {
      playgroundPosition: "bottom",
    },
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    image: "img/wire-network-logo.png",
    navbar: {
      title: "Wire Docs",
      logo: {
        alt: "Wire Network",
        src: "img/wire-network-logo.png",
      },
      items: [
        {
          label: "Developers Portal",
          type: "docSidebar",
          sidebarId: "contentSidebar",
          position: "left",
        },
        {
          label: "API Reference",
          type: "docSidebar",
          sidebarId: "apiReferenceSidebar",
          position: "left",
        },
        // {
        //   to: "https://www.wire.network/updates.html",
        //   label: "News",
        //   position: "left",
        // },
        {
          href: "https://github.com/Wire-Network/wire-docs",
          label: "GitHub",
          // html: `<img src="img/github.png" style="width: 30px; height: 30px;" />`,
          position: "right",
        },
      ],
    },
    footer: {
      logo: {
        alt: "Wire Network Logo",
        src: "img/wire-network-logo.png",
        href: "https://wire.foundation/favicon.ico",
        width: 80,
        height: 51,
      },
      style: "dark",
      links: [
        {
          items: [
            {
              label: "GitHub",
              to: "https://github.com/Wire-Network",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/company/wire-network-blockchain/",
            },
            {
              label: "Twitter",
              href: "https://x.com/wire_blockchain",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.com/invite/AbGDQv9qVZ",
            },
            {
              label: "YouTube",
              href: "https://www.youtube.com/@wirenetwork1515",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Wire Network`,
    },
    prism: {
      theme: prismThemes.dracula,
      darkTheme: prismThemes.palenight,
      additionalLanguages: [
        // "powershell",
        // "cpp",
        "php",
        "bash",
        "json",
        // "typescript",
        // "javascript",
        // "wasm"
      ],
    },
    algolia: {
      // The application ID provided by Algolia
      appId: "17BRJEIISS",
      // Public API key: it is safe to commit it
      apiKey: "d63efc4f24c3834793e915a5a4838d07",
      indexName: "wire",
      contextualSearch: true,
      // Optional: see doc section below
      // contextualSearch: true,
      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      // externalUrlRegex: "external\\.com|domain\\.com",
      // Optional: Algolia search parameters
      // searchParameters: {},
      // // Optional: path for sarch page that enabled by default (`false` to disable it)
      // searchPagePath: "search",
      // // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
      // insights: false,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
