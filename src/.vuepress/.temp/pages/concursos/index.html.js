import comp from "D:/PEPITO-DESCARGAS/DOCS-HOPE/my-docs/src/.vuepress/.temp/pages/concursos/index.html.vue"
const data = JSON.parse("{\"path\":\"/concursos/\",\"title\":\"Concursos\",\"lang\":\"es-ES\",\"frontmatter\":{\"title\":\"Concursos\",\"category\":[\"Concursos\"],\"tag\":[\"Inicio\"],\"icon\":\"streamline-cyber-color:badge\",\"description\":\"Contenido\"},\"readingTime\":{\"minutes\":0.07,\"words\":21},\"filePathRelative\":\"concursos/README.md\",\"autoDesc\":true}")
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
