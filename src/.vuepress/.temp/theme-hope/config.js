import { Layout, NotFound, injectDarkMode, setupDarkMode, setupSidebarItems, scrollPromise } from "D:/PEPITO-DESCARGAS/DOCS-HOPE/my-docs/node_modules/vuepress-theme-hope/lib/bundle/exports/base.js";

import { defineCatalogInfoGetter } from "D:/PEPITO-DESCARGAS/DOCS-HOPE/my-docs/node_modules/@vuepress/plugin-catalog/lib/client/index.js"
import { h } from "vue"
import { resolveComponent } from "vue"
import { GlobalEncrypt, LocalEncrypt } from "D:/PEPITO-DESCARGAS/DOCS-HOPE/my-docs/node_modules/vuepress-theme-hope/lib/bundle/exports/encrypt.js";
import "D:/PEPITO-DESCARGAS/DOCS-HOPE/my-docs/node_modules/vuepress-theme-hope/lib/bundle/styles/encrypt/bundle.scss"

import "D:/PEPITO-DESCARGAS/DOCS-HOPE/my-docs/node_modules/@vuepress/helper/lib/client/styles/colors.css";
import "D:/PEPITO-DESCARGAS/DOCS-HOPE/my-docs/node_modules/@vuepress/helper/lib/client/styles/normalize.css";
import "D:/PEPITO-DESCARGAS/DOCS-HOPE/my-docs/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";
import "D:/PEPITO-DESCARGAS/DOCS-HOPE/my-docs/node_modules/vuepress-theme-hope/lib/bundle/styles/bundle.scss";

defineCatalogInfoGetter((meta) => {
  const title = meta.title;
  const shouldIndex = meta.index ?? true;
  const icon = meta.icon;

  return shouldIndex ? {
    title,
    content: icon ? () =>[h(resolveComponent("VPIcon"), { icon, sizing: "both" }), title] : null,
    order: meta.order,
    index: meta.index,
  } : null;
});

export default {
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await scrollPromise.wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkMode(app);

    app.component("GlobalEncrypt", GlobalEncrypt);
    app.component("LocalEncrypt", LocalEncrypt);
  },
  setup: () => {
    setupDarkMode();
    setupSidebarItems();

  },
  layouts: {
    Layout,
    NotFound,

  }
};
