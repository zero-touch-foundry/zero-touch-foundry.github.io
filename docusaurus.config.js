// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Stack Automation',
  tagline: 'Stack Automation Online Help',
  url: 'https://jarvis-docs.qtorque.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'zero-touch-foundry', // Usually your GitHub org/user name.
  projectName: 'zero-touch-foundry.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  customFields: {
    productName: 'Stack Automation',
  },
  trailingSlash: false,
  future: {
    v4: true,
    experimental_faster: true,
  },
  plugins: [
    require.resolve("docusaurus-plugin-sass")
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          // Please change this to your repo.
          editUrl: 'https://github.com/zero-touch-foundry/zero-touch-foundry.github.io/tree/main/',
        },
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/footer.scss'),
            require.resolve('./src/css/dark-mode.scss'),            
          ],
        },
        sitemap: {
          lastmod: 'date',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
          createSitemapItems: async (params) => {
            const {defaultCreateSitemapItems, ...rest} = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.filter((item) => !item.url.includes('/page/'));
          },
        },
      }),
    ],
  ],

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      ({
        hashed: true,
        indexBlog: false,
        highlightSearchTermsOnTargetPage: true,
        searchResultLimits: 8,
        searchResultContextMaxLength: 80,
        explicitSearchResultPath: true,
        docsRouteBasePath: '/',
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'Torque',
          src: '/img/logo.png',
          srcDark: '/img/logo-dm.png',
        },
        items: [
          {
            href: 'https://github.com/zero-touch-foundry/zero-touch-foundry.github.io/discussions/categories/announcements',
            className: 'header-announcments-link',
            position: 'right',
          },
          {
            href: 'https://github.com/zero-touch-foundry/zero-touch-foundry.github.io',
            className: 'header-github-link',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'Company',
            items: [
              {
                label: 'Cisco Website',
                href: 'https://www.cisco.com/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub Community',
                href: 'https://github.com/zero-touch-foundry/zero-touch-foundry.github.io/discussions',
              },
            ],
          },          
        ]
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['bash', 'powershell'],
      },
    }),
};

module.exports = config;