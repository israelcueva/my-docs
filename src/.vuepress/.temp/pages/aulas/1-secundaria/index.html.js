import comp from "D:/PEPITO-DESCARGAS/DOCS-HOPE/my-docs/src/.vuepress/.temp/pages/aulas/1-secundaria/index.html.vue"
const data = JSON.parse("{\"path\":\"/aulas/1-secundaria/\",\"title\":\"1º Secundaria\",\"lang\":\"es-ES\",\"frontmatter\":{\"title\":\"1º Secundaria\",\"category\":[\"Aula\",\"Secundaria\"],\"tag\":[\"Inicio\",\"1-Secundaria\"],\"author\":\"Pepito\",\"icon\":\"fluent-color:people-48\",\"description\":\"Esta sección corresponde al primer grado de educación secundaria. Los recursos y programas usados se detallan a continuación: 1. Programas a usar El alumno deberá tener instalad...\"},\"readingTime\":{\"minutes\":1.35,\"words\":406},\"filePathRelative\":\"aulas/1-secundaria/README.md\",\"autoDesc\":true}")
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
