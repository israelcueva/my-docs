import comp from "D:/PEPITO-DESCARGAS/DOCS-HOPE/my-docs/src/.vuepress/.temp/pages/aulas/2-secundaria/index.html.vue"
const data = JSON.parse("{\"path\":\"/aulas/2-secundaria/\",\"title\":\"2º Secundaria\",\"lang\":\"es-ES\",\"frontmatter\":{\"title\":\"2º Secundaria\",\"category\":[\"Aula\",\"Secundaria\"],\"tag\":[\"Inicio\",\"2-Secundaria\"],\"author\":\"Pepito\",\"icon\":\"fluent-color:people-48\",\"description\":\"Esta sección corresponde al segundo grado de educación secundaria. Los recursos y programas usados se detallan a continuación: 1. Programas a usar El alumno deberá tener instala...\"},\"readingTime\":{\"minutes\":1.35,\"words\":404},\"filePathRelative\":\"aulas/2-secundaria/README.md\",\"autoDesc\":true}")
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
