---
title: Unidad 1
category:
  - Aula
tag:
  - Inicio
  - 3-Secundaria
author: Pepito
icon: fluent-color:notebook-32
order: 1
---

::mdi:wordpress color=#0F88BD:: WordPress es el sistema de gestión de contenidos (CMS) más popular y versátil del mundo, diseñado para permitir la creación, administración y publicación de sitios web de manera sencilla y profesional. Aunque nació originalmente como una plataforma enfocada en la creación de blogs, su arquitectura de código abierto ha evolucionado hasta convertirse en una herramienta integral capaz de dar vida a cualquier tipo de proyecto digital, desde portafolios personales y sitios corporativos hasta complejas tiendas virtuales.

Su éxito radica en un ecosistema basado en temas (para el diseño visual) y plugins (para añadir funciones específicas), lo que permite a los usuarios construir sitios web robustos sin necesidad de tener conocimientos avanzados en programación. Al ser una plataforma accesible y altamente personalizable, WordPress se ha consolidado como la opción predilecta tanto para principiantes que buscan su primera presencia en línea como para desarrolladores que requieren una base sólida y escalable para sus proyectos.

## 1BS01: Instalo Wordpress en el  localhost

> [!important]
> ::fluent-color:calendar-48:: **Fecha:** 09 al 13 de Marzo<br>::fluent-color:laptop-48:: **Programa:** ::mdi:wordpress color=#0F88BD:: [Wordpress](https://pe.wordpress.org/) /  ::logos:xampp:: [Xampp](https://www.apachefriends.org/es/index.html)<br>::fluent-color:clipboard-text-edit-32:: **Tarea:** Sin tarea<br>::fluent-color:video-48:: **Videos:** [Video](https://www.youtube.com/watch?v=-dDNCZtKAn0)<br>::fluent-color:briefcase-48:: **Recursos:** [Recursos](https://drive.google.com/drive/folders/1PZFcDRsIkn81WQUMvHLm6P0vTOw9OX1F?usp=sharing)

Instalar WordPress en modo local es la mejor forma de practicar, diseñar o desarrollar un sitio web antes de publicarlo en un servidor real. Para ello, utilizaremos XAMPP, un paquete de software que simula un servidor web en tu propia computadora.

1. **Descargar e Instalar XAMPP**

Ve al sitio oficial de Apache Friends y descarga el instalador de XAMPP para tu sistema operativo (Windows, Linux o macOS).

Sigue los pasos del instalador manteniendo las opciones por defecto. Una vez terminada la instalación, abre el XAMPP Control Panel.

2. **Iniciar los Servicios**

En el Panel de Control de XAMPP, debes activar dos servicios fundamentales haciendo clic en el botón "Start":

- Apache: El servidor web que procesará los archivos.
- MySQL: El sistema que gestionará la base de datos de tu sitio.

Los indicadores deben ponerse en color verde para confirmar que están funcionando correctamente.

3. **Descargar WordPress**

Descarga la versión más reciente en español desde WordPress.org.

Obtendrás un archivo .zip. Descomprímelo y verás una carpeta llamada wordpress.

4. **Preparar la Carpeta del Proyecto**

Copia la carpeta `wordpress` descomprimida.

Dirígete a la ruta donde instalaste XAMPP (generalmente `C:\xampp`) y entra en la carpeta llamada `htdocs`.

Pega la carpeta ahí. Puedes renombrarla con el nombre de tu proyecto (ejemplo: mi-sitio-web).

5. **Crear la Base de Datos**

Abre tu navegador y escribe: localhost/phpmyadmin.

Haz clic en la pestaña "Nueva" (o "New").

Escribe un nombre para tu base de datos (por ejemplo: bd_wordpress) y haz clic en "Crear". No necesitas hacer nada más aquí por ahora.

6. **Ejecutar el Instalador de WordPress**

En tu navegador, ingresa a la dirección: localhost/nombre-de-tu-carpeta (ejemplo: localhost/mi-sitio-web).

Selecciona tu idioma y haz clic en "¡Vamos a ello!".

Configura los datos de conexión de la siguiente manera:

- Nombre de la base de datos: bd_wordpress (o el nombre que elegiste en el paso 5).
- Nombre de usuario: root
- Contraseña: (Déjalo vacío, XAMPP por defecto no tiene contraseña para root).
- Servidor de la base de datos: localhost
- Prefijo de tabla: wp_

7. **Finalizar la Instalación**

Haz clic en "Ejecutar la instalación". Ahora te pedirá los datos del sitio, como es de pruebas harás lo siguiente:

- Nombre del Sitio: Ponle cualquier nombre.
- Usuario: root (inseguro, pero fácil de recordar).
- Contraseña: root (inseguro, pero fácil de recordar).
- Activar COntraseña insegura.
- Correo: cualquiercorreo@cualquiercorreo.com

Dale en Instalar.

¡Listo! Ahora puedes acceder a tu panel de administración local en `localhost/mi-sitio-web/wp-admin`.

## 1BS02: Instalo y configuro Astra y Spectra

> [!important]
> ::fluent-color:calendar-48:: **Fecha:** 16 al 20 de Marzo<br>::fluent-color:laptop-48:: **Programa:** ::mdi:wordpress color=#0F88BD:: [Wordpress](https://pe.wordpress.org/) <br>::fluent-color:clipboard-text-edit-32:: **Tarea:** Sin tarea<br>::fluent-color:video-48:: **Videos:** [Astra](https://www.youtube.com/watch?v=H4wjtCsjrtc) / [Spectra](https://www.youtube.com/watch?v=p4VUmQlEy8I)<br>::fluent-color:briefcase-48:: **Recursos:** [Recursos](https://drive.google.com/drive/folders/1PZFcDRsIkn81WQUMvHLm6P0vTOw9OX1F?usp=sharing)

Para llevar tus proyectos de WordPress al siguiente nivel, la combinación de Astra y Spectra es una de las soluciones más potentes y eficientes en la actualidad. Astra es un tema extremadamente ligero y rápido, diseñado para ofrecer un control total sobre el diseño global de tu sitio (como cabeceras, pies de página y tipografías) sin afectar el rendimiento. Por su parte, Spectra es un conjunto de bloques avanzados que potencia el editor nativo de WordPress (Gutenberg), permitiéndote crear diseños complejos, animaciones y estructuras profesionales mediante un sistema de "arrastrar y soltar". Juntos, permiten construir sitios web visualmente impactantes y optimizados para SEO sin necesidad de escribir una sola línea de código.

**Instalación del Tema Astra**

1. Entra a tu panel de administración de WordPress (`localhost/tu-sitio/wp-admin`).
2. En el menú de la izquierda, ve a `Apariencia` > `Temas`.
3. Haz clic en el botón `Añadir tema` (`Add theme`).
4. En el buscador de la derecha, escribe "Astra".
5. Cuando aparezca, haz clic en `Instalar` y, una vez finalizado, presiona `Activar`.

**Instalación del Plugin Spectra**

1. Ve a la sección Plugins > Añadir nuevo plugin.
2. En el buscador, escribe "Spectra".
3. Busca el plugin llamado "Spectra – WordPress Gutenberg Blocks" (desarrollado por Brainstorm Force).
4. Haz clic en Instalar ahora y luego en Activar.

**(Opcional pero recomendado) Starter Templates**

Si quieres empezar con un diseño profesional ya hecho en lugar de una página en blanco:

Al activar Astra o Spectra, verás un aviso para instalar "Starter Templates". Si no lo ves, búscalo en la sección de Plugins como "Starter Templates".

Una vez activado, ve a Apariencia > Starter Templates.

Selecciona "Block Editor" (Gutenberg) como tu constructor.

Elige una plantilla que te guste, personaliza el logo y los colores básicos, y haz clic en "Submit & Build My Website".

**A tomar en cuenta**

- Astra (Tema): Es el "esqueleto" y la configuración global (colores del sitio, menús, fuentes).
- Spectra (Blocks): Son los "ladrillos" con los que construyes cada página (botones, galerías, mapas, testimonios).

## 1BS03: Añado las páginas principales de mi sitio web

> [!important]
> ::fluent-color:calendar-48:: **Fecha:** 23 al 27 de Marzo<br>::fluent-color:laptop-48:: **Programa:** ::mdi:wordpress color=#0F88BD:: [Wordpress](https://pe.wordpress.org/) <br>::fluent-color:clipboard-text-edit-32:: **Tarea:** Sin tarea<br>::fluent-color:video-48:: **Videos:** [Páginas VS Entradas](https://www.youtube.com/watch?v=Dv4XeGgaJqU)<br>::fluent-color:briefcase-48:: **Recursos:** [Recursos](https://drive.google.com/drive/folders/1PZFcDRsIkn81WQUMvHLm6P0vTOw9OX1F?usp=sharing)

Una vez que tienes tu WordPress instalado (ya sea en local o en la nube), crear una página es un proceso intuitivo gracias al editor de bloques.

**Acceder al menú de Páginas**

1. En el escritorio de administración (panel lateral izquierdo), busca la opción `Páginas`.
2. Haz clic en Añadir nueva página.

**Definir el Título y el Contenido**

- Título: Escribe el nombre de la página (ej. "Principal" o "Sobre mí") en el campo superior. Esto generará automáticamente la URL(slug) o enlace permanente del sitio.
- Bloques de contenido: Haz clic en el símbolo (+) para añadir elementos. Puedes insertar párrafos, imágenes, encabezados o, si ya instalaste Spectra, bloques avanzados como contenedores de diseño, galerías de fotos o botones de llamada a la acción.

**Configuración de la Página (Barra Lateral Derecha)**

En el panel de ajustes de la derecha, puedes personalizar detalles importantes:

- Imagen destacada: Es la imagen principal que representará a la página en redes sociales o listados.
- Atributos de página: Aquí puedes elegir si la página es una "página superior" o si depende de otra (subpágina).
- Slug: Es el "usuario" asignado a esta página.
- Plantilla: Si tu tema (como Astra) ofrece diferentes diseños (sin barras laterales, ancho completo, etc.), puedes seleccionarlos aquí.

**Vista Previa y Publicación**

- Antes de lanzar la página, haz clic en Vista previa para ver cómo luce en computadoras, tablets y celulares.
- Cuando estés satisfecho, haz clic en el botón azul Publicar. WordPress te pedirá una confirmación final.

**Añadir la página al Menú (Paso Vital)**

Crear la página no significa que aparecerá automáticamente en tu sitio. Para que tus visitantes la vean, debes añadirla al menú de navegación:

1. Ve a `Apariencia` > `Menús` (o usa el Personalizador de Astra).
2. Selecciona la página que acabas de crear en la lista de la izquierda.
3. Haz clic en `Añadir al menú`.
4. Arrastra la página para ordenarla y haz clic en `Guardar menú`.

Tip de experto: Para una web profesional, asegúrate de configurar tu página de "Principal" como una página estática en Ajustes > Lectura, para que sea lo primero que vean los usuarios al entrar a tu dominio.

## 1BS04: Creo el menú de mi sitio y entiendo el Front y el Dashboard

> [!important]
> ::fluent-color:calendar-48:: **Fecha:** 30 de Marzo al 03 de Abril<br>::fluent-color:laptop-48:: **Programa:** ::mdi:wordpress color=#0F88BD:: [Wordpress](https://pe.wordpress.org/) <br>::fluent-color:clipboard-text-edit-32:: **Tarea:** Sin tarea<br>::fluent-color:video-48:: **Videos:** [Menús](https://www.youtube.com/watch?v=dQFfe6_wwN8) / [Enlaces permanentes](https://www.youtube.com/watch?v=6JQ5oY38wC0) / [Principal](https://www.youtube.com/watch?v=IPx3781Tzmc)<br>::fluent-color:briefcase-48:: **Recursos:** [Recursos](https://drive.google.com/drive/folders/1PZFcDRsIkn81WQUMvHLm6P0vTOw9OX1F?usp=sharing)

Una vez terminada la estructura base de la página, ahora veremos como configurar algunas cuestiones extras.

- Creación del menú principal (Principal,Acerca de, Blog, Contacto)
- Configurar enlaces permanentes `/%category%/%postame%`
- Definir página de inicio a `Principal` y de entradas a `Blog`.

## 1BS05: Práctica Calificada

> [!important]
> ::fluent-color:calendar-48:: **Fecha:** Sábado 11 de Abril<br>::fluent-color:laptop-48:: **Programa:** ::mdi:wordpress color=#0F88BD:: [Wordpress](https://pe.wordpress.org/)

Replica todo lo hecho hasta esta semana en tu instalación de Wordpress, la cual deberá poderse acceder desde cualquier computadora con conexión a Internet.
