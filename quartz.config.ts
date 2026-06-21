import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Fenice bRain",
    pageTitleSuffix: " | Fenice bRain",
    enableSPA: true,
    enablePopovers: true,
    analytics: { provider: "umami" },
    locale: "pt-BR",
    baseUrl: "fenicejus.fenice.ia.br",
    ignorePatterns: [
      "private",
      "templates",
      ".obsidian",
      "scripts",
      ".claude",
      "node_modules",
      "*.tmp",
      "*.bak",
      "*.log",
    ],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Playfair Display",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#faf9f7",
          lightgray: "#e8e4dc",
          gray: "#a09880",
          darkgray: "#3a3028",
          dark: "#1e1810",
          secondary: "#7b2d1e",
          tertiary: "#c4a052",
          highlight: "rgba(196, 160, 82, 0.12)",
          textHighlight: "#c4a05280",
        },
        darkMode: {
          light: "#1a1410",
          lightgray: "#2e2820",
          gray: "#6b6055",
          darkgray: "#d4c8b8",
          dark: "#f0e8d8",
          secondary: "#e07060",
          tertiary: "#c4a052",
          highlight: "rgba(196, 160, 82, 0.15)",
          textHighlight: "#c4a05260",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: { light: "github-light", dark: "github-dark" },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
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
      Plugin.ContentIndex({ enableSiteMap: true, enableRSS: true }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
