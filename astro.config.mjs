import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";
import webmanifest from "astro-webmanifest";
import robotsTxt from "astro-robots-txt";

export default defineConfig({
  site: "https://adam-schinzel.vercel.app/",
  integrations: [
    tailwind(),
    sitemap(),
    robotsTxt(),
    compress(),
    webmanifest({
      name: "Adam Schinzel",
      short_name: "Full stack developer insterested in blockchain and AI.",
      start_url: "/",
      display: "standalone",
      background_color: "#fff",
      theme_color: "#F97316",
      orientation: "portrait-primary",
      icons: [
        {
          src: "/static/favicon.png",
          type: "image/png",
          sizes: "24x24",
        },
      ],
    }),
  ],
  output: "server",
  adapter: vercel(),
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "nord",
      wrap: false,
    },
  },
});
