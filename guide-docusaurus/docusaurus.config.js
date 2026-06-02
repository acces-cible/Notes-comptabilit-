// @ts-check
const { themes } = require('prism-react-renderer')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Guide Comptable',
  tagline: 'Procédures — Les Adaptations Accès-Cible Inc.',
  url: 'https://notes-comptabilit.vercel.app',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  i18n: { defaultLocale: 'fr', locales: ['fr'] },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl: 'https://github.com/acces-cible/Notes-comptabilit-/edit/main/guide-docusaurus/',
        },
        blog: false,
        theme: { customCss: require.resolve('./src/css/custom.css') },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: '📋 Guide Comptable',
      items: [
        {
          href: 'https://github.com/acces-cible/Notes-comptabilit-',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      copyright: 'Les Adaptations Accès-Cible Inc.',
    },
    prism: {
      theme: themes.github,
      darkTheme: themes.dracula,
    },
  },
}

module.exports = config
