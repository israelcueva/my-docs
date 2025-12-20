import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  darkmode: "toggle",
  fullscreen: true,
  hostname: "https://vuepress-theme-hope-docs-demo.netlify.app",
  focus: false,
  pure: false,
  author: {
    name: "Pepito",
    url: "https://github.com/pepito-mrc",
  },

  logo: "/logo.svg",

  repo: "israelcueva/my-docs",
  docsRepo: "israelcueva/my-docs",
  docsBranch: "main",
  docsDir: "src",
  // navbar
  navbar,

  // sidebar
  sidebar,

  footer: "",

  displayFooter: true,


  encrypt: {
    config: {
      "/demo/encrypt.html": {
        hint: "Password: 1234",
        password: "1234",
      },
    },
  },

  metaLocales: {
    editLink: "Editar página en Github",
  },

  // These features are enabled for demo, only preserve features you need here
  markdown: {
    align: true,
    attrs: true,
    codeTabs: true,
    component: true,
    demo: true,
    figure: true,
    gfm: true,
    imgLazyload: true,
    imgSize: true,
    include: true,
    mark: true,
    alert: true,
    plantuml: true,
    spoiler: true,
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
        },
      },
    ],
    highlighter: {
      type: "shiki", // or "prismjs"
      lineNumbers: true,
      highlightLines: true,
      notationDiff: true,
      notationFocus: true,
      notationHighlight: true,
      notationErrorLevel: true,// shiki themes: github-light, github-dark, dracula, etc.
      // prism themes: prism-okaidia, prism-tomorrow, etc.
      // you can also use custom themes by providing a path to a JSON file
      // or an object with the theme definition
      // for example: { light: { ... }, dark: { ... } }
      // see https://vuepress.github.io/plugins/highlighter.html#shiki for more details
      // shiki or prism options
      // ...
    },
    sub: true,
    sup: true,
    tabs: true,
    tasklist: true,
    vPre: true,

    // uncomment these if you need TeX support
    // math: {
    //   // install katex before enabling it
    //   type: "katex",
    //   // or install mathjax-full before enabling it
    //   type: "mathjax",
    // },

    // install chart.js before enabling it
    // chartjs: true,

    // install echarts before enabling it
    // echarts: true,

    // install flowchart.ts before enabling it
    // flowchart: true,

    // install mermaid before enabling it
    mermaid: true,

    // playground: {
    //   presets: ["ts", "vue"],
    // },

    // install @vue/repl before enabling it
    // vuePlayground: true,

    // install sandpack-vue3 before enabling it
    // sandpack: true,

    // install @vuepress/plugin-revealjs and uncomment these if you need slides
    // revealjs: {
    //   plugins: ["highlight", "math", "search", "notes", "zoom"],
    // },
  },

  plugins: {

    // Note: This is for testing ONLY!
    // You MUST generate and use your own comment service in production.
    /*comment: {
      provider: "Giscus",
      repo: "vuepress-theme-hope/giscus-discussions",
      repoId: "R_kgDOG_Pt2A",
      category: "Announcements",
      categoryId: "DIC_kwDOG_Pt2M4COD69",
    },*/

    notice: [
      {
        path: "/",
        title: "Límite de entregas",
        content: "El cierre de entregas de tarea es hasta mañana Sábado 20 a las 11:00 a.m. Si necesitas enviar cualquier tarea o práctica hazlo hasta esa fecha. Feliz Navidad y próspero año nuevo: 😊",
        fullscreen: true,
        actions: [
          {
            text: "Aceptar",
            type: "primary",
          },
          { text: "Cerrar" },
        ],
      },
      {
        path: "/zh/",
        title: "Notice Title",
        content: "Notice Content",
        actions: [
          {
            text: "Primary Action",
            link: "https://theme-hope.vuejs.press/",
            type: "primary",
          },
          { text: "Default Action" },
        ],
      },
    ],
    components: {
      components: ["Badge", "VPCard"],
    },

    icon: {
      prefix: "fa6-solid:",
      assets: "iconify",
    }

    // install @vuepress/plugin-pwa and uncomment these if you want a PWA
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cacheImage: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
