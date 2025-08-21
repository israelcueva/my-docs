import comp from "D:/PEPITO-DESCARGAS/DOCS-HOPE/my-docs/src/.vuepress/.temp/pages/proyectos/proyecto-1-secundaria.html.vue"
const data = JSON.parse("{\"path\":\"/proyectos/proyecto-1-secundaria.html\",\"title\":\"El Konista\",\"lang\":\"es-ES\",\"frontmatter\":{\"title\":\"El Konista\",\"category\":[\"Aula\"],\"tag\":[\"Inicio\",\"1-Secundaria\"],\"author\":\"Pepito\",\"order\":1,\"icon\":\"fluent-color:book-48\",\"description\":\"Konista es un proyecto educativo que busca fomentar la creatividad, el pensamiento computacional y el espíritu emprendedor en los estudiantes de primer año de secundaria mediant...\"},\"readingTime\":{\"minutes\":4.94,\"words\":1481},\"filePathRelative\":\"proyectos/proyecto-1-secundaria.md\",\"autoDesc\":true}")
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
