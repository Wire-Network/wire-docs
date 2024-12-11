import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import * as Preset from "@docusaurus/preset-classic";
import { tailwindLoader } from "./plugins/docusaurus-tailwindcss-loader";

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
  favicon: "https://wire.foundation/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.wire.network",
  baseUrl: "/",
  plugins: [
    "@docusaurus/theme-live-codeblock",
    tailwindLoader,
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {
            from: "/docs",
            to: "/docs/introduction/overview",
          },
        ],
        createRedirects(existingPath) {
          if (existingPath.includes("/community")) {
            // Redirect from /docs/team/X to /community/X and /docs/support/X to /community/X
            return [
              existingPath.replace("/community", "/docs/team"),
              existingPath.replace("/community", "/docs/support"),
            ];
          }
          return undefined; // Return a falsy value: no redirect created
        },
      },
    ],
  ],
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
          editUrl: "https://github.com/Wire-Network/wire-docs/edit/master",
        },
        blog: false,
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: [
            "/tags/**",
            "/index-off",
            "/markdown-page",
            "/docs/api-reference/tooling/clio/how-to-guides",
          ],
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
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 6,
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    hideOnScroll: true,
    liveCodeBlock: {
      playgroundPosition: "bottom",
    },
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    image: "https://wire.foundation/favicon.ico",
    navbar: {
      title: "Wire Docs",
      logo: {
        alt: "Wire Network",
        src: "https://wire.foundation/favicon.ico",
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
        {
          label: "Guides",
          type: "docSidebar",
          sidebarId: "guidesReferenceSidebar",
          position: "left",
        },
        // {
        //   to: "https://www.wire.network/updates.html",
        //   label: "News",
        //   position: "left",
        // },
      ],
    },
    footer: {
      logo: {
        alt: "Wire Network Logo",
        src: "https://wire.foundation/favicon.ico",
        width: 80,
        height: 80,
      },
      style: "dark",
      links: [
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
      additionalLanguages: ["php", "bash", "json"],
    },
    algolia: {
      appId: "17BRJEIISS",
      apiKey: "d63efc4f24c3834793e915a5a4838d07",
      indexName: "wire",
      contextualSearch: false,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
