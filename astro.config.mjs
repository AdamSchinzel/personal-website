import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import compress from "astro-compress";
import robotsTxt from "astro-robots-txt";
import webmanifest from "astro-webmanifest";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://www.adamschinzel.com/",
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
