import comp from "D:/PEPITO-DESCARGAS/DOCS-HOPE/my-docs/src/.vuepress/.temp/pages/aulas/5-secundaria/4-bimestre/index.html.vue"
const data = JSON.parse("{\"path\":\"/aulas/5-secundaria/4-bimestre/\",\"title\":\"Bimestre IV\",\"lang\":\"es-ES\",\"frontmatter\":{\"title\":\"Bimestre IV\",\"category\":[\"Bimestre\"],\"tag\":[\"4-bimestre\",\"2-Secundaria\"],\"author\":\"Pepito\",\"order\":1,\"icon\":\"fluent-color:calendar-48\",\"description\":\"Contenido\"},\"readingTime\":{\"minutes\":0.12,\"words\":36},\"filePathRelative\":\"aulas/5-secundaria/4-bimestre/README.md\",\"autoDesc\":true}")
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
