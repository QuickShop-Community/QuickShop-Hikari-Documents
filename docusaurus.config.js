// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const DefaultLocale = 'en-US';
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'QuickShop-Hikari Docs',
  tagline: 'QuickShop-Hikari User Documents',
  url: 'https://ghost-chu.github.io/',
  baseUrl: '/QuickShop-Hikari-Documents',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  trailingSlash: false,
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Ghost-chu', // Usually your GitHub org/user name.
  projectName: 'QuickShop-Hikari-Documents', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en-US',
    locales: ['af-ZA','ar-SA','bg-BG','ca-ES','cs-CZ','da-DK','de-DE','el-GR','en-US','es-ES','fi-FI','fr-FR','he-IL','hi-IN','hu-HU','it-IT','ja-JP','ko-KR','lt-LT','nl-NL','no-NO','pl-PL','pt-BR','pt-PT','ro-RO','ru-RU','sr-Cyrl','sr-SP','sv-SE','th-TH','tr-TR','uk-UA','vi-VN','zh-CN','zh-HK','zh-TW'],
  },
  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
      }),
    ],
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: ({locale, versionDocsDirPath, docPath}) => {
            // 将简体中文文档链接到 Crowdin
            if (locale !== DefaultLocale) {
              return `https://crowdin.com/project/quickshop-hikari-documents/${locale}`;
            }
            //  将英文文档链接到 GitHub
            return `https://github.com/Ghost-chu/QuickShop-Hikari-Documents/edit/master/docs/${versionDocsDirPath}/${docPath}`;
          },
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'QuickShop-Hikari User Documents',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          // { to: '/blog', label: 'Blog', position: 'left' },
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'Tutorial',
          //       to: '/docs/intro',
          //     },
          //   ],
          // },
          {
            title: 'Get QuickShop-Hikari',
            items: [
              {
                label: 'Modrinth',
                href: 'https://modrinth.com/mod/quickshop-hikari',
              },
              {
                label: 'SpigotMC',
                href: 'https://www.spigotmc.org/resources/100125',
              },
              {
                label: 'CodeMC CI',
                href: 'https://ci.codemc.io/job/Ghost-chu/job/QuickShop-Hikari',
              },
              {
                label: 'Github Releases',
                href: 'https://github.com/Ghost-chu/QuickShop-Hikari',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/Bu3dVtmsD3',
              },
              {
                label: 'Github',
                href: 'https://github.com/Ghost-chu/QuickShop-Hikari/discussions',
              },
              {
                label: 'SpigotMC',
                href: 'https://www.spigotmc.org/threads/547268',
              },
            ],
          },
          {
            title: 'More',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'GitHub',
                href: 'https://github.com/Ghost-chu/QuickShop-Hikari',
              },
              {
                label: 'Paste Viewer',
                href: 'https://ghost-chu.github.io/quickshop-hikari-paste-viewer',
              },
            ],
          },
        ],
        copyright: `All contents are licensed under <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a>. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
