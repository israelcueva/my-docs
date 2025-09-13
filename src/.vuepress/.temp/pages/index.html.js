import comp from "D:/PEPITO-DESCARGAS/DOCS-HOPE/my-docs/src/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Principal\",\"lang\":\"es-ES\",\"frontmatter\":{\"title\":\"Principal\",\"category\":[\"Aula\"],\"tag\":[\"Inicio\"],\"author\":\"Pepito\",\"order\":1,\"sidebar\":false,\"icon\":\"fluent-color:home-48\",\"breadcrumb\":false,\"pageInfo\":false,\"contributors\":false,\"editLink\":false,\"lastUpdated\":false,\"prev\":false,\"next\":false,\"comment\":false,\"description\":\"Este curso está diseñado para enseñarles las habilidades y el conocimiento necesarios para utilizar las computadoras de manera efectiva y segura. Aprenderán cómo manejar las apl...\"},\"readingTime\":{\"minutes\":2.16,\"words\":649},\"filePathRelative\":\"README.md\",\"autoDesc\":true}")
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
