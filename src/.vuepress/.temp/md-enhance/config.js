import CodeDemo from "D:/PEPITO-DESCARGAS/DOCS-HOPE/my-docs/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "D:/PEPITO-DESCARGAS/DOCS-HOPE/my-docs/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";

export default {
  enhance: ({ app }) => {
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
  },
};
