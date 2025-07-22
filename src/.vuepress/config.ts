import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/my-docs/",
  head: [['link', { rel: 'icon', href: '/my-docs/favicon.ico' }]],
  lang: "es-ES",
  title: "Computación",
  description: "A docs demo for vuepress-theme-hope",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
