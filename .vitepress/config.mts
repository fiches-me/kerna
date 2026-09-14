import { defineConfig, UserConfig } from "vitepress";
import { primaryThemeConfig } from 'primary-vitepress/config';
import { withSidebar } from "vitepress-sidebar";
import { footnote } from "@mdit/plugin-footnote";
import mdItTaskLists from "markdown-it-task-lists";

import mdItObsidianCallouts from "markdown-it-obsidian-callouts";
import markdownItObsidian from "markdown-it-obsidian";
import mathjax3 from "markdown-it-mathjax3";

// https://vitepress.dev/reference/site-config
const vitePressConfigs: UserConfig<any> = {
  title: "📑 FICHES.ME Terminale",
  description: "Force pour la philo",
  extends: primaryThemeConfig,
  cleanUrls: true,
  lastUpdated: true,
  ignoreDeadLinks: true,
  metaChunk: true,
  markdown: {
    lineNumbers: true,
    math: true,
    languageAlias: {
      "pseudo-code": "python",
      conf: "yaml",
    },
    config: (md) => {
      //md.use(footnote);
      //md.use(mdItObsidianCallouts);
      //md.use(markdownItObsidian, { enabled: true });
      //md.use(mathjax3);
      //md.use(mdItTaskLists, { enabled: true });
    },
  },
  titleTemplate: ":title - FICHES KERNA",
  lang: "fr-FR",
  head: [["link", { rel: "icon", type: "image/png", href: "/logo.png" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo.png",
    editLink: {
      pattern: "https://github.com/fiches-me/kerna/edit/main/:path",
    },
    nav: [
      { text: '💫 Philosophie', link: '/philo' },
      { text: '💃 Espagnol', link: '/espagnol' },
      { text: '🍵 DNL', link: '/dnl' },
      { text: '💖 Nous Aider', link: '/contribution' },

    ],
    footer: {
      message: "Publié sous licence GPL-3.0.",
      copyright: "Copyright © 2019-2026 FUNASITIEN, Guilhem C.",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/fiches-me/kerna" },
      { icon: "discord", link: "https://dsc.gg/drmcld" },
    ],
  },
  sitemap: {
    hostname: "https://kerna.fiches.funa.dev",
  },
  transformPageData(ctx) {
    const canonicalUrl = `https://kerna.fiches.funa.dev/${ctx.relativePath.replace(/\.(md|html)$/, "").replace(/\index$/, "")}`;
    ctx.frontmatter.head = ctx.frontmatter.head || [];
    ctx.frontmatter.head.push([
      "link",
      { rel: "canonical", href: canonicalUrl },
    ]);
  },
};

const sections = [
  "espagnol",
  "contribution",
  "dnl",
  "philo",
];

const sidebarOptions = sections.map((section) => ({
  documentRootPath: "/",
  scanStartPath: section,
  resolvePath: `/${section}/`,
  useTitleFromFrontmatter: true,
  useFolderTitleFromIndexFile: true,
  sortMenusByFrontmatterOrder: true,
  excludeFilesByFrontmatterFieldName: "draft",
  hyphenToSpace: true,
  underscoreToSpace: true,
}));

export default defineConfig(
  withSidebar(vitePressConfigs, sidebarOptions)
);