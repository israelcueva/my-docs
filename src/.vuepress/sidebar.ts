import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "Proyectos",
      icon: "fluent-color:briefcase-48",
      prefix: "proyectos/",
      children: [
        "proyecto-1-secundaria.md", // /basic/markdown.md
        "proyecto-2-secundaria.md",
        "proyecto-3-secundaria.md",
        "proyecto-4-secundaria.md",
        "proyecto-5-secundaria.md", // /basic/vuepress.md
      ]
    },
    {
      text: "Aulas",
      icon: "fluent-color:layer-diagonal-person-24",
      prefix: "aulas/",
      //children: "structure",
      children: [
        // 6-primaria
        {
          text: "6º Primaria",
          prefix: "6-primaria/",
          icon: "fluent-color:people-community-48",
          collapsible: true,
            children: [
              {
                text: "Bimestre III",
                prefix: "3-bimestre/",
                icon: "fluent-color:calendar-48",
                collapsible: true,
                children: [
                  "unidad-5.md",
                  "unidad-6.md",
                ]
              },
              {
                text: "Bimestre IV",
                prefix: "4-bimestre/",
                icon: "fluent-color:calendar-48",
                collapsible: true,
                children: [
                  "unidad-7.md",
                  //"unidad-8.md",
                ]
              },
            ],
          },
        // 1-secundaria
        {
          text: "1º Secundaria",
          prefix: "1-secundaria/",
          icon: "fluent-color:people-48",
          collapsible: true,
            children: [
              {
                text: "Bimestre III",
                prefix: "3-bimestre/",
                icon: "fluent-color:calendar-48",
                collapsible: true,
                children: [
                  "unidad-5.md",
                  "unidad-6.md",
                ]
              },
                            {
                text: "Bimestre IV",
                prefix: "4-bimestre/",
                icon: "fluent-color:calendar-48",
                collapsible: true,
                children: [
                  "unidad-7.md",
                  //"unidad-8.md",
                ]
              },
            ],
          },
          // 2-secundaria
          {
            text: "2º Secundaria",
            prefix: "2-secundaria/",
            icon: "fluent-color:people-48",
            collapsible: true,
            children: [
              {
                text: "Bimestre III",
                prefix: "3-bimestre/",
                icon: "fluent-color:calendar-48",
                collapsible: true,
                children: [
                  "unidad-5.md",
                  "unidad-6.md",
                ]
              },
              {
                text: "Bimestre IV",
                prefix: "4-bimestre/",
                icon: "fluent-color:calendar-48",
                collapsible: true,
                children: [
                  "unidad-7.md",
                  //"unidad-8.md",
                ]
              },
            ],
          },
          // 3-secundaria
          {
            text: "3º Secundaria",
            prefix: "3-secundaria/",
            icon: "fluent-color:people-48",
            collapsible: true,
            children: [
              {
                text: "Bimestre III",
                prefix: "3-bimestre/",
                icon: "fluent-color:calendar-48",
                collapsible: true,
                children: [
                  "unidad-5.md",
                  "unidad-6.md",
                ]
              },
                            {
                text: "Bimestre IV",
                prefix: "4-bimestre/",
                icon: "fluent-color:calendar-48",
                collapsible: true,
                children: [
                  "unidad-7.md",
                 // "unidad-8.md",
                ]
              },
            ],
          },
          // 4-secundaria
          {
            text: "4º Secundaria",
            prefix: "4-secundaria/",
            icon: "fluent-color:people-48",
            collapsible: true,
            children: [
              {
                text: "Bimestre III",
                prefix: "3-bimestre/",
                icon: "fluent-color:calendar-48",
                collapsible: true,
                children: [
                  "unidad-5.md",
                  "unidad-6.md",
                ]
              },
                {
                text: "Bimestre IV",
                prefix: "4-bimestre/",
                icon: "fluent-color:calendar-48",
                collapsible: true,
                children: [
                  "unidad-7.md",
                  //"unidad-8.md",
                ]
              },
            ],
          },
          // 5-secundaria
          {
            text: "5º Secundaria",
            prefix: "5-secundaria/",
            icon: "fluent-color:people-48",
            collapsible: true,
            children: [
              {
                text: "Bimestre III",
                prefix: "3-bimestre/",
                icon: "fluent-color:calendar-48",
                collapsible: true,
                children: [
                  "unidad-5.md",
                  "unidad-6.md",
                ]
              },
                {
                text: "Bimestre IV",
                prefix: "4-bimestre/",
                icon: "fluent-color:calendar-48",
                collapsible: true,
                children: [
                  "unidad-7.md",
                  //"unidad-8.md",
                ]
              },
            ],
          }
      ]
    },
     {
      text: "Concursos",
      icon: "fluent-color:trophy-48",
      prefix: "concursos/",
      children: [
        "historieta-osinergmin.md"
      ]
    },
    {
      text: "WhatsApp",
      icon: "logos:whatsapp-icon",
      link: "https://wa.me/51926574295"
    },

  ],
});
