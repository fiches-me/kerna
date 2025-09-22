import { defineConfig } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar';
import { withMermaid } from "vitepress-plugin-mermaid";
import { footnote } from "@mdit/plugin-footnote";
import mdItObsidianCallouts from "markdown-it-obsidian-callouts";

// https://vitepress.dev/reference/site-config
const vitePressConfigs = {
  title: "📑 FICHES.ME",
  description: "Mes super fiches ig",
  cleanUrls: true,
  lastUpdated: true,
  markdown: {
    lineNumbers: true,
    math: true,
    languageAlias: {
      'pseudo-code': 'python',
      'conf': 'yaml',
    },
    config: (md) => {
      // use more markdown-it plugins!
      md.use(footnote)
      md.use(mdItObsidianCallouts)
    }
  },
  titleTemplate: ':title - FICHES',
  lang: 'fr-FR',
  head: [['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    editLink: {
      pattern: 'https://github.com/fiches-cc/cpes/edit/main/:path'
    },
    nav: [
      { text: '💫 Philosophie', link: '/philo' },
      { text: '💃 Espagnol', link: '/espagnol' },
      { text: '🍵 DNL', link: '/dnl' },
      { text: '💖 Nous Aider', link: '/contribution' },
    ],
    footer: {
      message: 'Released under the GPL-3.0 License.',
      copyright: 'Copyright © 2019-2025 FUNASITIEN'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/fiches-cc/cpes' }
    //  { icon: 'discord', link: 'https://join.aelysium.group/' }
    ]
  },
  sitemap: {
    hostname: 'https://cpes.fiches.me'
  }
}
export default defineConfig(
  withMermaid(
    withSidebar(
      vitePressConfigs, [
      {
        documentRootPath: '/',
        scanStartPath: 'philo',
        resolvePath: '/philo/',
        useTitleFromFrontmatter: true,
        useFolderTitleFromIndexFile: true,
        sortMenusByFrontmatterOrder: true,
        excludeFilesByFrontmatterFieldName: 'draft',
      },
      {
        documentRootPath: '/',
        scanStartPath: 'espagnol',
        resolvePath: '/espagnol/',
        useTitleFromFrontmatter: true,
        useFolderTitleFromIndexFile: true,
        sortMenusByFrontmatterOrder: true,
      },
      {
        documentRootPath: '/',
        scanStartPath: 'dnl',
        resolvePath: '/dnl/',
        useTitleFromFrontmatter: true,
        useFolderTitleFromIndexFile: true,
        sortMenusByFrontmatterOrder: true,
      },
      {
        documentRootPath: '/',
        scanStartPath: 'contribution',
        resolvePath: '/contribution/',
        useTitleFromFrontmatter: true,
        useFolderTitleFromIndexFile: true,
        sortMenusByFrontmatterOrder: true,
      }
    ]),
    
  )
);
