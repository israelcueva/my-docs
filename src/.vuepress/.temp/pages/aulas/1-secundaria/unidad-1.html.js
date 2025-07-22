import comp from "D:/PEPITO-DESCARGAS/DOCS-HOPE/my-docs/src/.vuepress/.temp/pages/aulas/1-secundaria/unidad-1.html.vue"
const data = JSON.parse("{\"path\":\"/aulas/1-secundaria/unidad-1.html\",\"title\":\"Bimestre I\",\"lang\":\"es-ES\",\"frontmatter\":{\"title\":\"Bimestre I\",\"category\":[\"Aula\"],\"tag\":[\"Inicio\",\"1-Secundaria\"],\"date\":\"2020-01-01T00:00:00.000Z\",\"author\":\"Pepito\",\"order\":2,\"description\":\"Importante This is important text Esta sección corresponde al primer grado de educación secundaria. Los recursos y programas usados se detallan a continuación: 1. Programas a us...\"},\"readingTime\":{\"minutes\":2.54,\"words\":762},\"filePathRelative\":\"aulas/1-secundaria/unidad-1.md\",\"autoDesc\":true}")
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
