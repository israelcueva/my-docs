export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/portfolio.html", { loader: () => import(/* webpackChunkName: "portfolio.html" */"D:/PEPITO-DESCARGAS/DOCS-HOPE/my-docs/src/.vuepress/.temp/pages/portfolio.html.js"), meta: {"title":"Portfolio Home","icon":"house"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/PEPITO-DESCARGAS/DOCS-HOPE/my-docs/src/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Project home","icon":"house"} }],
  ["/demo/disable.html", { loader: () => import(/* webpackChunkName: "demo_disable.html" */"D:/PEPITO-DESCARGAS/DOCS-HOPE/my-docs/src/.vuepress/.temp/pages/demo/disable.html.js"), meta: {"title":"Disabling layout and features","icon":"gears","order":4} }],
  ["/demo/encrypt.html", { loader: () => import(/* webpackChunkName: "demo_encrypt.html" */"D:/PEPITO-DESCARGAS/DOCS-HOPE/my-docs/src/.vuepress/.temp/pages/demo/encrypt.html.js"), meta: {"title":"Encryption Article","icon":"lock"} }],
  ["/demo/layout.html", { loader: () => import(/* webpackChunkName: "demo_layout.html" */"D:/PEPITO-DESCARGAS/DOCS-HOPE/my-docs/src/.vuepress/.temp/pages/demo/layout.html.js"), meta: {"title":"Layout","icon":"object-group","order":2} }],
  ["/demo/markdown.html", { loader: () => import(/* webpackChunkName: "demo_markdown.html" */"D:/PEPITO-DESCARGAS/DOCS-HOPE/my-docs/src/.vuepress/.temp/pages/demo/markdown.html.js"), meta: {"title":"Markdown Enhance","icon":"fa6-brands:markdown","order":2} }],
  ["/demo/page.html", { loader: () => import(/* webpackChunkName: "demo_page.html" */"D:/PEPITO-DESCARGAS/DOCS-HOPE/my-docs/src/.vuepress/.temp/pages/demo/page.html.js"), meta: {"title":"Page Config","icon":"file","order":3} }],
  ["/demo/", { loader: () => import(/* webpackChunkName: "demo_index.html" */"D:/PEPITO-DESCARGAS/DOCS-HOPE/my-docs/src/.vuepress/.temp/pages/demo/index.html.js"), meta: {"title":"Features demo","icon":"laptop-code"} }],
  ["/guide/", { loader: () => import(/* webpackChunkName: "guide_index.html" */"D:/PEPITO-DESCARGAS/DOCS-HOPE/my-docs/src/.vuepress/.temp/pages/guide/index.html.js"), meta: {"title":"Guide","icon":"lightbulb"} }],
  ["/guide/bar/baz.html", { loader: () => import(/* webpackChunkName: "guide_bar_baz.html" */"D:/PEPITO-DESCARGAS/DOCS-HOPE/my-docs/src/.vuepress/.temp/pages/guide/bar/baz.html.js"), meta: {"title":"Baz","icon":"circle-info"} }],
  ["/guide/bar/", { loader: () => import(/* webpackChunkName: "guide_bar_index.html" */"D:/PEPITO-DESCARGAS/DOCS-HOPE/my-docs/src/.vuepress/.temp/pages/guide/bar/index.html.js"), meta: {"title":"Bar feature","icon":"lightbulb"} }],
  ["/guide/foo/ray.html", { loader: () => import(/* webpackChunkName: "guide_foo_ray.html" */"D:/PEPITO-DESCARGAS/DOCS-HOPE/my-docs/src/.vuepress/.temp/pages/guide/foo/ray.html.js"), meta: {"title":"Ray","icon":"circle-info"} }],
  ["/guide/foo/", { loader: () => import(/* webpackChunkName: "guide_foo_index.html" */"D:/PEPITO-DESCARGAS/DOCS-HOPE/my-docs/src/.vuepress/.temp/pages/guide/foo/index.html.js"), meta: {"title":"Foo feature","icon":"lightbulb"} }],
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
