import comp from "D:/PEPITO-DESCARGAS/DOCS-HOPE/my-docs/src/.vuepress/.temp/pages/proyectos/index.html.vue"
const data = JSON.parse("{\"path\":\"/proyectos/\",\"title\":\"Proyectos\",\"lang\":\"es-ES\",\"frontmatter\":{\"home\":true,\"portfolio\":true,\"title\":\"Proyectos\",\"icon\":\"fluent-color:briefcase-48\",\"name\":\"Conan Edogawa\",\"avatar\":\"https://theme-hope-assets.vuejs.press/hero/conan.png\",\"titles\":[\"Genius young detective\",\"Lan’s childhood sweetheart\",\"The biggest rival of the black organization\"],\"footer\":false,\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"Proyectos\\\"}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/my-docs/proyectos/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Computación\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Proyectos\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"es-ES\"}]]},\"readingTime\":{\"minutes\":0.12,\"words\":36},\"filePathRelative\":\"proyectos/README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
