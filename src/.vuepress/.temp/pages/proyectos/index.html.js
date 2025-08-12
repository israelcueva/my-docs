import comp from "D:/PEPITO-DESCARGAS/DOCS-HOPE/my-docs/src/.vuepress/.temp/pages/proyectos/index.html.vue"
const data = JSON.parse("{\"path\":\"/proyectos/\",\"title\":\"Proyectos\",\"lang\":\"es-ES\",\"frontmatter\":{\"title\":\"Proyectos\",\"icon\":\"fluent-color:briefcase-48\",\"description\":\"Contenido\"},\"readingTime\":{\"minutes\":0.17,\"words\":52},\"filePathRelative\":\"proyectos/README.md\",\"autoDesc\":true}")
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
