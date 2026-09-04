// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const DefaultLocale = 'en-US';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'QuickShop Hikari Documentation',
  tagline: 'Documentation for QuickShop Hikari',
  url: 'https://quickshop-community.github.io/',
  baseUrl: '/QuickShop-Hikari-Documents/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  trailingSlash: false,

  organizationName: 'QuickShop-Community',
  projectName: 'QuickShop-Hikari-Documents',

  i18n: {
    defaultLocale: 'en-US',
    locales: ['de-DE', 'en-US', 'ja-JP', 'zh-CN', 'zh-HK', 'zh-TW'],
    localeConfigs: {
      'de-DE': { label: 'Deutsch' },
      'en-US': { label: 'English' },
      'ja-JP': { label: '日本語' },
      'zh-CN': { label: '简体中文' },
      'zh-HK': { label: '繁體中文（中國香港特別行政區）' },
      'zh-TW': { label: '繁體中文（中國臺灣）' },
    },
  },

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en', 'zh', 'ja', 'de'],
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: ({ locale, versionDocsDirPath, docPath }) => {
            if (locale !== DefaultLocale) {
              return `https://crowdin.com/project/quickshop-hikari-documents/${locale}`;
            }
            return `https://github.com/QuickShop-Community/QuickShop-Hikari-Documents/edit/master/${versionDocsDirPath}/${docPath}`;
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
      metadata: [
        { name: 'theme-color', content: '#0868f7' },
      ],

      navbar: {
        title: '',
        logo: {
          alt: 'QuickShop Hikari',
          src: 'img/quickshop-hikari-logo.webp',
        },
        items: [
          {
            to: '/',
            label: 'Home',
            position: 'left',
            exact: true,
          },
          {
            type: 'doc',
            docId: 'setup/install',
            label: 'Getting Started',
            position: 'left',
          },
          {
            type: 'doc',
            docId: '/category/addon',
            label: 'Addons',
            position: 'left',
          },
          {
            type: 'doc',
            docId: '/category/compatibility-modules',
            label: 'Compatibility',
            position: 'left',
          },
          {
            href: 'https://quickshophikari.org/en',
            label: 'Main Site',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },

      footer: {
        style: 'dark',
        links: [
          {
            title: 'Get QuickShop Hikari',
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
                label: 'GitHub Releases',
                href: 'https://github.com/QuickShop-Community/QuickShop-Hikari',
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
                label: 'GitHub Discussions',
                href: 'https://github.com/QuickShop-Community/QuickShop-Hikari/discussions',
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
              {
                label: 'Main Website',
                href: 'https://quickshophikari.org/en',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/QuickShop-Community/QuickShop-Hikari',
              },
              {
                label: 'Paste Viewer',
                href: 'https://ghost-chu.github.io/quickshop-hikari-paste-viewer',
              },
            ],
          },
        ],
        copyright:
          'All contents are licensed under <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a>. Built with Docusaurus.',
      },

      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },

      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
