// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const path = require('path')
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ben Butterworth',
  tagline: 'Your life is purchased by where you spend your attention.',
  url: 'https://orth.uk',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Ben-xD', // Usually your GitHub org/user name.
  projectName: 'orth.uk', // Usually your repo name.
  plugins: [
    path.resolve(__dirname, 'plugins/service-worker-remover-plugin')
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        // docs: {
        //   sidebarPath: require.resolve('./sidebars.js'),
        //   editUrl: 'https://github.com/ben-xD/orth.uk',
        // },
        blog: {
          path: './blog',
          routeBasePath: '/',
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/ben-xD/orth.uk/blob/main/website',
        },
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
        title: 'Ben Butterworth',
        logo: {
          alt: 'Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          // {to: '/blog', label: 'Blog', position: 'left'},
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Guides',
          // },
          {to: '/about', label: 'About', position: 'left'},
          {to: '/projects', label: 'Projects', position: 'left'},
          {
            label: 'Stack Overflow',
            href: 'https://stackoverflow.com/users/7365866/ben-butterworth',
            position: 'right',
          },
          {
            href: 'https://github.com/ben-xD',
            label: 'GitHub',
            position: 'right',
          },
          {
            label: 'LinkedIn',
            href: 'https://www.linkedin.com/in/bbutterworth/',
            position: 'right',
          },
          {
            label: 'Twitter',
            href: 'https://twitter.com/orth_uk',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Navigation',
            items: [
              {
                label: 'Home',
                to: '/',
              },
              {
                label: 'About',
                to: '/about',
              },
              {
                label: 'Projects',
                to: '/projects',
              },
              {
                label: 'All Blog Posts',
                to: '/archive',
              },
              {
                label: 'Video Room',
                to: 'https://orth.uk/video',
              },
            ],
          },
          {
            title: 'Profiles',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/orth_uk',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/bbutterworth/',
              },
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/users/7365866/ben-butterworth',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/ben-xD',
              },
            ],
          },
          {
            title: 'Favourite websites, projects and tools',
            items: [
              {
                label: 'High Scalability',
                href: 'http://highscalability.com/',
              },
              {
                label: 'Hacker News',
                href: 'http://news.ycombinator.com/',
              },
              {
                label: 'Flutter',
                href: 'https://flutter.dev/'
              },
              {
                label: 'Figma',
                href: 'http://figma.com'
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Ben Butterworth`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
