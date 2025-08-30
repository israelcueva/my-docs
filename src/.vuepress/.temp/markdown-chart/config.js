import { defineClientConfig } from "vuepress/client";
import Mermaid from "D:/PEPITO-DESCARGAS/DOCS-HOPE/my-docs/node_modules/@vuepress/plugin-markdown-chart/lib/client/components/Mermaid.js";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("Mermaid", Mermaid);
  },
});
