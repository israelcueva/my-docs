export const NOTICE_OPTIONS = JSON.parse("[{\"content\":\"Notice Content\",\"path\":\"/zh/\",\"title\":\"Notice Title\",\"actions\":[{\"text\":\"Primary Action\",\"link\":\"https://theme-hope.vuejs.press/\",\"type\":\"primary\"},{\"text\":\"Default Action\"}]},{\"content\":\"El cierre de entregas de tarea es hasta mañana Sábado 20 a las 11:00 a.m. Si necesitas enviar cualquier tarea o práctica hazlo hasta esa fecha. Feliz Navidad y próspero año nuevo: 😊\",\"path\":\"/\",\"title\":\"Límite de entregas\",\"fullscreen\":true,\"actions\":[{\"text\":\"Aceptar\",\"type\":\"primary\"},{\"text\":\"Cerrar\"}]}]")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateNoticeOptions) {
    __VUE_HMR_RUNTIME__.updateNoticeOptions(NOTICE_OPTIONS)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ NOTICE_OPTIONS }) => {
    __VUE_HMR_RUNTIME__.updateNoticeOptions(NOTICE_OPTIONS)
  })
}
