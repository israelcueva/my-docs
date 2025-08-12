export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/portfolio.html", { loader: () => import(/* webpackChunkName: "portfolio.html" */"D:/PEPITO-DESCARGAS/DOCS-HOPE/my-docs/src/.vuepress/.temp/pages/portfolio.html.js"), meta: {"title":"Portfolio Home","icon":"house"} }],
  ["/README-2.html", { loader: () => import(/* webpackChunkName: "README-2.html" */"D:/PEPITO-DESCARGAS/DOCS-HOPE/my-docs/src/.vuepress/.temp/pages/README-2.html.js"), meta: {"title":"Principal","icon":"house"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/PEPITO-DESCARGAS/DOCS-HOPE/my-docs/src/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Principal","icon":"fluent-color:home-48"} }],
  ["/aulas/", { loader: () => import(/* webpackChunkName: "aulas_index.html" */"D:/PEPITO-DESCARGAS/DOCS-HOPE/my-docs/src/.vuepress/.temp/pages/aulas/index.html.js"), meta: {"title":"Aulas","icon":"fluent-color:layer-diagonal-person-24"} }],
  ["/demo/disable.html", { loader: () => import(/* webpackChunkName: "demo_disable.html" */"D:/PEPITO-DESCARGAS/DOCS-HOPE/my-docs/src/.vuepress/.temp/pages/demo/disable.html.js"), meta: {"title":"Disabling layout and features","icon":"gears","order":4} }],
  ["/demo/encrypt.html", { loader: () => import(/* webpackChunkName: "demo_encrypt.html" */"D:/PEPITO-DESCARGAS/DOCS-HOPE/my-docs/src/.vuepress/.temp/pages/demo/encrypt.html.js"), meta: {"title":"Encryption Article","icon":"lock"} }],
  ["/demo/layout.html", { loader: () => import(/* webpackChunkName: "demo_layout.html" */"D:/PEPITO-DESCARGAS/DOCS-HOPE/my-docs/src/.vuepress/.temp/pages/demo/layout.html.js"), meta: {"title":"Layout","icon":"object-group","order":2} }],
  ["/demo/markdown.html", { loader: () => import(/* webpackChunkName: "demo_markdown.html" */"D:/PEPITO-DESCARGAS/DOCS-HOPE/my-docs/src/.vuepress/.temp/pages/demo/markdown.html.js"), meta: {"title":"Markdown Enhance","icon":"fa6-brands:markdown","order":2} }],
  ["/demo/page.html", { loader: () => import(/* webpackChunkName: "demo_page.html" */"D:/PEPITO-DESCARGAS/DOCS-HOPE/my-docs/src/.vuepress/.temp/pages/demo/page.html.js"), meta: {"title":"Page Config","icon":"file","order":3} }],
  ["/demo/", { loader: () => import(/* webpackChunkName: "demo_index.html" */"D:/PEPITO-DESCARGAS/DOCS-HOPE/my-docs/src/.vuepress/.temp/pages/demo/index.html.js"), meta: {"title":"Features demo","icon":"laptop-code"} }],
  ["/guide/", { loader: () => import(/* webpackChunkName: "guide_index.html" */"D:/PEPITO-DESCARGAS/DOCS-HOPE/my-docs/src/.vuepress/.temp/pages/guide/index.html.js"), meta: {"title":"Guide","icon":"lightbulb"} }],
  ["/proyectos/proyecto-1-secundaria.html", { loader: () => import(/* webpackChunkName: "proyectos_proyecto-1-secundaria.html" */"D:/PEPITO-DESCARGAS/DOCS-HOPE/my-docs/src/.vuepress/.temp/pages/proyectos/proyecto-1-secundaria.html.js"), meta: {"title":"El Konista","icon":"fluent-color:book-48","order":1} }],
  ["/proyectos/proyecto-2-secundaria.html", { loader: () => import(/* webpackChunkName: "proyectos_proyecto-2-secundaria.html" */"D:/PEPITO-DESCARGAS/DOCS-HOPE/my-docs/src/.vuepress/.temp/pages/proyectos/proyecto-2-secundaria.html.js"), meta: {"title":"Animatoks","icon":"fluent-color:design-ideas-16","order":2} }],
  ["/proyectos/proyecto-3-secundaria.html", { loader: () => import(/* webpackChunkName: "proyectos_proyecto-3-secundaria.html" */"D:/PEPITO-DESCARGAS/DOCS-HOPE/my-docs/src/.vuepress/.temp/pages/proyectos/proyecto-3-secundaria.html.js"), meta: {"title":"Website 2025","icon":"fluent-color:globe-24","order":3} }],
  ["/proyectos/proyecto-4-secundaria.html", { loader: () => import(/* webpackChunkName: "proyectos_proyecto-4-secundaria.html" */"D:/PEPITO-DESCARGAS/DOCS-HOPE/my-docs/src/.vuepress/.temp/pages/proyectos/proyecto-4-secundaria.html.js"), meta: {"title":"Runagame","icon":"fluent-color:game-chat-20","order":4} }],
  ["/proyectos/proyecto-5-secundaria.html", { loader: () => import(/* webpackChunkName: "proyectos_proyecto-5-secundaria.html" */"D:/PEPITO-DESCARGAS/DOCS-HOPE/my-docs/src/.vuepress/.temp/pages/proyectos/proyecto-5-secundaria.html.js"), meta: {"title":"Documentales","icon":"fluent-color:video-48","order":5} }],
  ["/proyectos/", { loader: () => import(/* webpackChunkName: "proyectos_index.html" */"D:/PEPITO-DESCARGAS/DOCS-HOPE/my-docs/src/.vuepress/.temp/pages/proyectos/index.html.js"), meta: {"title":"Proyectos","icon":"fluent-color:briefcase-48"} }],
  ["/aulas/1-secundaria/", { loader: () => import(/* webpackChunkName: "aulas_1-secundaria_index.html" */"D:/PEPITO-DESCARGAS/DOCS-HOPE/my-docs/src/.vuepress/.temp/pages/aulas/1-secundaria/index.html.js"), meta: {"title":"1º Secundaria","icon":"fluent-color:people-48"} }],
  ["/aulas/2-secundaria/", { loader: () => import(/* webpackChunkName: "aulas_2-secundaria_index.html" */"D:/PEPITO-DESCARGAS/DOCS-HOPE/my-docs/src/.vuepress/.temp/pages/aulas/2-secundaria/index.html.js"), meta: {"title":"2º Secundaria","icon":"fluent-color:people-48"} }],
  ["/aulas/3-secundaria/", { loader: () => import(/* webpackChunkName: "aulas_3-secundaria_index.html" */"D:/PEPITO-DESCARGAS/DOCS-HOPE/my-docs/src/.vuepress/.temp/pages/aulas/3-secundaria/index.html.js"), meta: {"title":"3º Secundaria","icon":"fluent-color:people-48"} }],
  ["/aulas/4-secundaria/", { loader: () => import(/* webpackChunkName: "aulas_4-secundaria_index.html" */"D:/PEPITO-DESCARGAS/DOCS-HOPE/my-docs/src/.vuepress/.temp/pages/aulas/4-secundaria/index.html.js"), meta: {"title":"4º Secundaria","icon":"fluent-color:people-48"} }],
  ["/aulas/5-secundaria/", { loader: () => import(/* webpackChunkName: "aulas_5-secundaria_index.html" */"D:/PEPITO-DESCARGAS/DOCS-HOPE/my-docs/src/.vuepress/.temp/pages/aulas/5-secundaria/index.html.js"), meta: {"title":"5º Secundaria","icon":"fluent-color:people-48"} }],
  ["/aulas/6-primaria/", { loader: () => import(/* webpackChunkName: "aulas_6-primaria_index.html" */"D:/PEPITO-DESCARGAS/DOCS-HOPE/my-docs/src/.vuepress/.temp/pages/aulas/6-primaria/index.html.js"), meta: {"title":"6º Primaria","icon":"fluent-color:people-community-48"} }],
  ["/guide/bar/baz.html", { loader: () => import(/* webpackChunkName: "guide_bar_baz.html" */"D:/PEPITO-DESCARGAS/DOCS-HOPE/my-docs/src/.vuepress/.temp/pages/guide/bar/baz.html.js"), meta: {"title":"Baz","icon":"circle-info"} }],
  ["/guide/bar/", { loader: () => import(/* webpackChunkName: "guide_bar_index.html" */"D:/PEPITO-DESCARGAS/DOCS-HOPE/my-docs/src/.vuepress/.temp/pages/guide/bar/index.html.js"), meta: {"title":"Bar feature","icon":"lightbulb"} }],
  ["/guide/foo/ray.html", { loader: () => import(/* webpackChunkName: "guide_foo_ray.html" */"D:/PEPITO-DESCARGAS/DOCS-HOPE/my-docs/src/.vuepress/.temp/pages/guide/foo/ray.html.js"), meta: {"title":"Ray","icon":"circle-info"} }],
  ["/guide/foo/", { loader: () => import(/* webpackChunkName: "guide_foo_index.html" */"D:/PEPITO-DESCARGAS/DOCS-HOPE/my-docs/src/.vuepress/.temp/pages/guide/foo/index.html.js"), meta: {"title":"Foo feature","icon":"lightbulb"} }],
  ["/aulas/1-secundaria/3-bimestre/", { loader: () => import(/* webpackChunkName: "aulas_1-secundaria_3-bimestre_index.html" */"D:/PEPITO-DESCARGAS/DOCS-HOPE/my-docs/src/.vuepress/.temp/pages/aulas/1-secundaria/3-bimestre/index.html.js"), meta: {"title":"Bimestre III","icon":"fluent-color:calendar-48"} }],
  ["/aulas/1-secundaria/3-bimestre/unidad-5.html", { loader: () => import(/* webpackChunkName: "aulas_1-secundaria_3-bimestre_unidad-5.html" */"D:/PEPITO-DESCARGAS/DOCS-HOPE/my-docs/src/.vuepress/.temp/pages/aulas/1-secundaria/3-bimestre/unidad-5.html.js"), meta: {"title":"Unidad 5","icon":"fluent-color:notebook-32","order":5} }],
  ["/aulas/2-secundaria/3-bimestre/", { loader: () => import(/* webpackChunkName: "aulas_2-secundaria_3-bimestre_index.html" */"D:/PEPITO-DESCARGAS/DOCS-HOPE/my-docs/src/.vuepress/.temp/pages/aulas/2-secundaria/3-bimestre/index.html.js"), meta: {"title":"Bimestre III","icon":"fluent-color:calendar-48"} }],
  ["/aulas/2-secundaria/3-bimestre/unidad-5.html", { loader: () => import(/* webpackChunkName: "aulas_2-secundaria_3-bimestre_unidad-5.html" */"D:/PEPITO-DESCARGAS/DOCS-HOPE/my-docs/src/.vuepress/.temp/pages/aulas/2-secundaria/3-bimestre/unidad-5.html.js"), meta: {"title":"Unidad 5","icon":"fluent-color:notebook-32","order":5} }],
  ["/aulas/3-secundaria/3-bimestre/", { loader: () => import(/* webpackChunkName: "aulas_3-secundaria_3-bimestre_index.html" */"D:/PEPITO-DESCARGAS/DOCS-HOPE/my-docs/src/.vuepress/.temp/pages/aulas/3-secundaria/3-bimestre/index.html.js"), meta: {"title":"Bimestre III","icon":"fluent-color:calendar-48"} }],
  ["/aulas/3-secundaria/3-bimestre/unidad-5.html", { loader: () => import(/* webpackChunkName: "aulas_3-secundaria_3-bimestre_unidad-5.html" */"D:/PEPITO-DESCARGAS/DOCS-HOPE/my-docs/src/.vuepress/.temp/pages/aulas/3-secundaria/3-bimestre/unidad-5.html.js"), meta: {"title":"Unidad 5","icon":"fluent-color:notebook-32","order":1} }],
  ["/aulas/4-secundaria/3-bimestre/", { loader: () => import(/* webpackChunkName: "aulas_4-secundaria_3-bimestre_index.html" */"D:/PEPITO-DESCARGAS/DOCS-HOPE/my-docs/src/.vuepress/.temp/pages/aulas/4-secundaria/3-bimestre/index.html.js"), meta: {"title":"Bimestre III","icon":"fluent-color:calendar-48"} }],
  ["/aulas/4-secundaria/3-bimestre/unidad-5.html", { loader: () => import(/* webpackChunkName: "aulas_4-secundaria_3-bimestre_unidad-5.html" */"D:/PEPITO-DESCARGAS/DOCS-HOPE/my-docs/src/.vuepress/.temp/pages/aulas/4-secundaria/3-bimestre/unidad-5.html.js"), meta: {"title":"Unidad 5","icon":"fluent-color:notebook-32","order":1} }],
  ["/aulas/5-secundaria/3-bimestre/", { loader: () => import(/* webpackChunkName: "aulas_5-secundaria_3-bimestre_index.html" */"D:/PEPITO-DESCARGAS/DOCS-HOPE/my-docs/src/.vuepress/.temp/pages/aulas/5-secundaria/3-bimestre/index.html.js"), meta: {"title":"Bimestre III","icon":"fluent-color:calendar-48"} }],
  ["/aulas/5-secundaria/3-bimestre/unidad-5.html", { loader: () => import(/* webpackChunkName: "aulas_5-secundaria_3-bimestre_unidad-5.html" */"D:/PEPITO-DESCARGAS/DOCS-HOPE/my-docs/src/.vuepress/.temp/pages/aulas/5-secundaria/3-bimestre/unidad-5.html.js"), meta: {"title":"Unidad 5","icon":"fluent-color:notebook-32","order":1} }],
  ["/aulas/6-primaria/3-bimestre/", { loader: () => import(/* webpackChunkName: "aulas_6-primaria_3-bimestre_index.html" */"D:/PEPITO-DESCARGAS/DOCS-HOPE/my-docs/src/.vuepress/.temp/pages/aulas/6-primaria/3-bimestre/index.html.js"), meta: {"title":"Bimestre III","icon":"fluent-color:calendar-48"} }],
  ["/aulas/6-primaria/3-bimestre/unidad-5.html", { loader: () => import(/* webpackChunkName: "aulas_6-primaria_3-bimestre_unidad-5.html" */"D:/PEPITO-DESCARGAS/DOCS-HOPE/my-docs/src/.vuepress/.temp/pages/aulas/6-primaria/3-bimestre/unidad-5.html.js"), meta: {"title":"Unidad 5","icon":"fluent-color:notebook-32","order":5} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/PEPITO-DESCARGAS/DOCS-HOPE/my-docs/src/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
