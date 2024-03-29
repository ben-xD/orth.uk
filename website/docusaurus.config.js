// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const path = require("path");
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Ben Butterworth",
  tagline: "Your life is purchased by where you spend your attention.",
  url: "https://orth.uk",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "Ben-xD", // Usually your GitHub org/user name.
  projectName: "orth.uk", // Usually your repo name.
  plugins: [path.resolve(__dirname, "plugins/service-worker-remover-plugin")],
  presets: [
    [
      // docs: https://docusaurus.io/docs/using-plugins#docusauruspreset-classic
      "@docusaurus/preset-classic",
      {
        docs: false,
        // docs: {
        //   sidebarPath: require.resolve('./sidebars.js'),
        //   editUrl: 'https://github.com/ben-xD/orth.uk',
        // },
        // docs: https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-pages#mdxPageComponent
        blog: {
          path: "./blog",
          routeBasePath: "/",
          blogSidebarTitle: "All posts",
          blogSidebarCount: "ALL",
          showReadingTime: true,
          editUrl: "https://github.com/ben-xD/orth.uk/blob/main/website",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: "Ben Butterworth",
      logo: {
        alt: "Site Logo",
        src: "img/logo.svg",
      },
      items: [
        // {to: '/blog', label: 'Blog', position: 'left'},
        // {
        //   type: 'doc',
        //   docId: 'intro',
        //   position: 'left',
        //   label: 'Guides',
        // },
        { to: "/about", label: "About", position: "left" },
        { to: "/projects", label: "Projects", position: "left" },
        { to: "/feedback", label: "Feedback", position: "left" },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Navigation",
          items: [
            {
              label: "Home",
              to: "/",
            },
            {
              label: "About",
              to: "/about",
            },
            {
              label: "Projects",
              to: "/projects",
            },
            {
              label: "All Blog Posts",
              to: "/archive",
            },
            {
              label: "Feedback",
              to: "/feedback",
            },
            {
              label: "Support me",
              to: "https://orth.uk/support",
            },
          ],
        },
        {
          title: "Profiles",
          items: [
            {
              label: "Twitter",
              href: "https://twitter.com/orth_uk",
            },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/bbutterworth/",
            },
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/users/7365866/ben-butterworth",
            },
            {
              label: "GitHub",
              href: "https://github.com/ben-xD",
            },
          ],
        },
        {
          title: "Favourite websites, projects and tools",
          items: [
            {
              label: "High Scalability",
              href: "http://highscalability.com/",
            },
            {
              label: "Hacker News",
              href: "http://news.ycombinator.com/",
            },
            {
              label: "Flutter",
              href: "https://flutter.dev/",
            },
            {
              label: "Figma",
              href: "http://figma.com",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Ben Butterworth`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
};

module.exports = config;
