// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'WICBW Wiki',
  tagline: 'Well, it could be worse',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://wicbwwiki.netlify.app',
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          editUrl: ({versionDocsDirPath, docPath}) =>
            `https://github.com/mikehaart/wicbwwiki/edit/main/${versionDocsDirPath}/${docPath}`,
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
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        }
      },
      navbar: {
        title: 'WICBW Wiki',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            href: 'https://github.com/mikehaart/wicbwwiki',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Wiki',
            items: [
              {
                label: 'Welcome',
                to: '/',
              },
            ],
          },
          {
            title: 'Links',
            items: [
              {
                label: 'Character Sheets',
                href: 'https://paizo.com/community/blog/v5748dyo6sgsn?Pathfinder-Second-Edition-Character-Sheets',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/mikehaart/wicbwwiki',
              },
              {
                label: 'Docusaurus',
                href: 'https://docusaurus.io/'
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} WICBW. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'DGMONGHJKH',
        // Public API key: it is safe to commit it
        apiKey: '211080b0a4c2c33dc0a2d0e25ac0c0f6',
        indexName: 'netlify_2b25d0d1-0404-4bf1-a96d-fe292ed9901b_main_all',
        // Optional: see doc section below
        contextualSearch: false
      }
    }),
};

module.exports = config;