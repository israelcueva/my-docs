import comp from "D:/PEPITO-DESCARGAS/DOCS-HOPE/my-docs/src/.vuepress/.temp/pages/aulas/index.html.vue"
const data = JSON.parse("{\"path\":\"/aulas/\",\"title\":\"Aulas\",\"lang\":\"es-ES\",\"frontmatter\":{\"title\":\"Aulas\",\"category\":[\"Aulas\"],\"tag\":[\"Inicio\"],\"icon\":\"fluent-color:layer-diagonal-person-24\",\"description\":\"Contenido\",\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Aulas\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Pepito\\\",\\\"url\\\":\\\"https://github.com/pepito-mrc\\\"}]}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/my-docs/aulas/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Computación\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Aulas\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Contenido\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"es-ES\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Inicio\"}]]},\"readingTime\":{\"minutes\":0.23,\"words\":69},\"filePathRelative\":\"aulas/README.md\",\"autoDesc\":true}")
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
