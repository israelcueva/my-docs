import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
   {
    text: "Proyectos",
    icon: "fluent-color:briefcase-48",
    prefix: "/proyectos/",
     children: [
        "proyecto-1-secundaria.md", // /basic/markdown.md
        "proyecto-2-secundaria.md",
        "proyecto-3-secundaria.md",
        "proyecto-4-secundaria.md",
        "proyecto-5-secundaria.md", // /basic/vuepress.md
      ],
  },
  {
    text: "Aulas",
    icon: "fluent-color:layer-diagonal-person-20",
    prefix: "/aulas/",
    children: [
        "6-primaria/",
        "1-secundaria/", // /basic/markdown.md
        "2-secundaria/",
        "3-secundaria/",
        "4-secundaria/",
        "5-secundaria/"
     ],
  },
  {
    text: "WhatsApp",
    icon: "logos:whatsapp-icon",
    link: "https://wa.me/51926574295?text=Hola%2C%20me%20gustar%C3%ADa%20hacer%20una%20consulta",
  },
]);
