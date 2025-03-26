import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import * as Preset from "@docusaurus/preset-classic";
import { tailwindLoader } from "./plugins/docusaurus-tailwindcss-loader";
import type * as Plugin from "@docusaurus/types/src/plugin";
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";
import type * as Redocusaurus from "redocusaurus";

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
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "producer",
        docsPluginId: "classic",
        config: {
          producerApi: {
            specPath: "openapi/ProducerApiCodeSnippets.yaml",
            outputDir: "docs/api-reference",
            // sidebarOptions: {
            //   groupPathsBy: "tag",
            // },
          } satisfies OpenApiPlugin.Options,
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
  themes: ["@docusaurus/theme-mermaid", "docusaurus-theme-openapi-docs"],
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
          docItemComponent: "@theme/ApiItem",
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
            id: "chain-api",
            spec: "openapi/ChainApiCS.yaml",
            route: "docs/api-reference/chain-api",
          },
          {
            id: "producer-api",
            spec: "openapi/ProducerApiCS.yaml",
            route: "docs/api-reference/producer-api",
          },
          {
            id: "net-api",
            spec: "openapi/NetApiCS.yaml",
            route: "docs/api-reference/net-api",
          },
          {
            id: "db-size-api",
            spec: "openapi/DBSizeApiCS.yaml",
            route: "docs/api-reference/db-size-api",
          },
          {
            id: "trace-api",
            spec: "openapi/TraceApiCS.yaml",
            route: "docs/api-reference/trace-api",
          },
        ],
      },
    ] satisfies Redocusaurus.PresetEntry,
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
      additionalLanguages: ["bash", "json"],
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
