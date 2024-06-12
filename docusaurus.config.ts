import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Wire Docs",
  tagline: "Official Wire Network Documentation",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.wire.network",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",
  plugins: ["@docusaurus/theme-live-codeblock"],
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Wire-Network",
  projectName: "wire-docs",

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/Wire-Network/wire-docs",
          // breadcrumbs: false,
        },
        blog: false,
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: [
            "/tags/**",
            "/index-off",
            "/markdown-page",
            "/my-react-page",
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
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
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
          type: "docSidebar",
          sidebarId: "contentSidebar",
          position: "left",
          label: "Developers Portal",
          to: "docs/intro",
        },
        { to: "docs/api-reference", label: "API Reference", position: "left" },
        {
          to: "https://www.wire.network/updates.html",
          label: "News",
          position: "left",
        },
        {
          href: "https://github.com/Wire-Network/wire-docs",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      // logo: {
      //   alt: 'Wire Network Logo',
      //   src: 'img/wire-network-logo.png',
      //   // href: 'https://wire.network',
      //   width: 160,
      //   height: 51,
      // },
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs",
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
        // {
        //   title: 'More',
        //   items: [
        //     {
        //       label: 'Blog',
        //       to: '/blog',
        //     },
        //     {
        //       label: 'GitHub',
        //       href: 'https://github.com/facebook/docusaurus',
        //     },
        //   ],
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Wire Network`,
    },
    prism: {
      theme: prismThemes.palenight,
      darkTheme: prismThemes.dracula,
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
      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      // replaceSearchResultPathname: {
      //   from: "https://docs.wire.network/",
      //   to: "http://localhost:3000/",
      // },

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
