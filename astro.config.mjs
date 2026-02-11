// @ts-check
import { defineConfig } from "astro/config";
import { resolve } from "path";
import sitemap from "@astrojs/sitemap";
import mermaid from "astro-mermaid";

// https://astro.build/config
export default defineConfig({
  site: "https://julienrousseau.ca",

  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr"],
    fallback: { fr: "en" },
    routing: { fallbackType: "rewrite" },
  },

  build: {
    assets: "res",
  },

  vite: {
    resolve: {
      alias: {
        "@fonts": resolve("./src/fonts"),
      },
    },
  },

  integrations: [
    mermaid(),
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en-US",
          fr: "fr-CA",
        },
      },
    }),
  ],
});
