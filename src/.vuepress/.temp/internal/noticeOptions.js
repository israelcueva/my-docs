export const NOTICE_OPTIONS = JSON.parse("[{\"content\":\"Notice Content\",\"path\":\"/zh/\",\"title\":\"Notice Title\",\"actions\":[{\"text\":\"Primary Action\",\"link\":\"https://theme-hope.vuejs.press/\",\"type\":\"primary\"},{\"text\":\"Default Action\"}]},{\"content\":\"Puedes ver los lineamientos para el casting de voces aquí\",\"path\":\"/\",\"title\":\"Casting de voces\",\"actions\":[{\"text\":\"Revisar\",\"link\":\"/proyectos/runa/casting-voces\",\"type\":\"primary\"},{\"text\":\"Cerrar\"}]}]")

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
