// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Stack Automation by Quali',
  tagline: 'Stack Automation Online Help',
  url: 'https://stackautomation.cisco.com/',
  baseUrl: '/help/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon-cisco.ico',
  organizationName: 'zero-touch-foundry', // Usually your GitHub org/user name.
  projectName: 'zero-touch-foundry.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
      type: 'text/css',
    },
  ],
  future: {
    v4: true,
    experimental_faster: true,
  },
  scripts: [
    // One Trust Cookie policy
    // {
    //   src: 'https://cdn.cookielaw.org/consent/31859194-4ed7-4958-bfc5-08046e0f6ab7/OtAutoBlock.js',
    //   type: "text/javascript",
    // },
    // {
    //   src: 'https://cdn.cookielaw.org/scripttemplates/otSDKStub.js',
    //   charset: 'UTF-8',
    //   type: "text/javascript",
    //   "data-domain-script": "31859194-4ed7-4958-bfc5-08046e0f6ab7"
    // },
    // {  src: 'http://jarvis-docs.qtorque.io/one-trust.js',
    //   type: "text/javascript"
    // }
  ],
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
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: false,
      },
      navbar: {
        hideOnScroll: true,
        title: 'Stack Automation by Quali',
        logo: {
          alt: 'Stack Automation by Quali',
          src: '/img/cisco-logo-blue.svg',
          srcDark: '/img/cisco-logo-white.svg',
        },
        items: [
          {
            label: 'Announcements',
            href: 'https://github.com/zero-touch-foundry/zero-touch-foundry.github.io/discussions/categories/announcements',
            className: 'header-link',
            position: 'right',
          },
          {
            label: 'GitHub',
            href: 'https://github.com/zero-touch-foundry/zero-touch-foundry.github.io',
            className: 'header-link',
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
                label: 'Quali Website',
                href: 'https://www.quali.com/',
              },
              {
                label: 'Cisco Website',
                href: 'https://www.cisco.com/',
              }              
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