import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'GeyserExtras',
  tagline: 'A plugin which attempts to unify features for Bedrock Edition players on Java Edition Servers with GeyserMC, aswell as other handy features for Bedrock Players.',
  favicon: 'img/favicon.ico',

  url: 'https://geyserextras.github_CN.io', // Your website URL
  baseUrl: '/GeyserExtras_CN.github.io/',
  projectName: 'GeyserExtras.github_CN.io',
  organizationName: 'ning-g-mo',
  trailingSlash: false,
  deploymentBranch: 'main',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-CN'],
    path: 'i18n',
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
        calendar: 'gregory',
        path: 'en',
      },
      'zh-CN': {
        label: '简体中文',
        direction: 'ltr',
        htmlLang: 'zh-CN',
        calendar: 'gregory',
        path: 'zh-CN',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/GeyserExtras/GeyserExtras.github.io/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/GeyserExtras/GeyserExtras.github.io/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark'
    },
    image: 'img/logo.png',
    navbar: {
      title: 'GeyserExtras',
      logo: {
        alt: 'GeyserExtras',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          type: 'localeDropdown',
          position: 'left',
        },
        {
          to: 'blog',
          position: 'left',
          label: 'Blog',
        },
        {
          href: 'https://github.com/GeyserExtras/GeyserExtras/',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Downloads',
          items: [
            {
              label: 'Modrinth',
              href: 'https://modrinth.com/plugin/geyserextras/',
            },
            {
              label: 'Hangar',
              href: 'https://hangar.papermc.io/GeyserExtras/GeyserExtras/',
            },
            {
              label: 'Aternos',
              href: 'https://aternos.org/addons/a/modrinthbukkit/kOfJBurB'
            },
            {
              label: 'GitHub',
              href: 'https://github.com/GeyserExtras/GeyserExtras/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/2FfuShKQgy',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} LetsGoAway. Not affiliated with the GeyserMC project. Site built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
