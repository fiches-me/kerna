import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "📑 FICHES",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "fr-FR",
    baseUrl: "fiches.me",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Funnel Display",
        body: "Poppins",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#f2e1cd",
          lightgray: "#d8c8b3",
          gray: "#745f47",
          darkgray: "#322719",
          dark: "#2b2926",
          secondary: "#bb1a34",
          tertiary: "#d67685",
          highlight: "rgba(214, 118, 133, 0.15)",
          textHighlight: "#ff5555",
        },
        darkMode: {
          light: "#2b2926",
          lightgray: "#322719",
          gray: "#745f47",
          darkgray: "#d8c8b3",
          dark: "#f2e1cd",
          secondary: "#d67685",
          tertiary: "#bb1a34",
          highlight: "rgba(214, 118, 133, 0.15)",
          textHighlight: "#ff5555",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents({ showByDefault: false }),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
