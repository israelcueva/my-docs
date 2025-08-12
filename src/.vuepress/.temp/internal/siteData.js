export const siteData = JSON.parse("{\"base\":\"/my-docs/\",\"lang\":\"es-ES\",\"title\":\"Computación\",\"description\":\"Documentación del curso de Computación\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"/my-docs/favicon.ico\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
