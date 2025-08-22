import comp from "D:/PEPITO-DESCARGAS/DOCS-HOPE/my-docs/src/.vuepress/.temp/pages/proyectos/runa/index.html.vue"
const data = JSON.parse("{\"path\":\"/proyectos/runa/\",\"title\":\"Runa\",\"lang\":\"es-ES\",\"frontmatter\":{\"title\":\"Runa\",\"article\":false,\"feed\":false,\"sitemap\":false,\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"Runa\\\"}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/my-docs/proyectos/runa/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Computación\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Runa\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"es-ES\"}]]},\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null}")
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
