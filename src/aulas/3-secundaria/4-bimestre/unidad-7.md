---
title: Unidad 7
category:
  - Aula
tag:
  - Inicio
  - 3-Secundaria
  - treejs
author: Pepito
icon: fluent-color:notebook-32
order: 6
---

::dashicons:wordpress /#21759b:: WordPress es un sistema de gestión de contenidos (CMS, por sus siglas en inglés) que permite crear y administrar sitios web de manera sencilla, sin necesidad de tener conocimientos avanzados de programación. Fue lanzado en 2003 y, con el tiempo, se ha convertido en una de las herramientas más populares del mundo para diseñar blogs, portafolios, tiendas virtuales y páginas empresariales.

## 4BS01: Instalo Xampp y Wordpress de manera inicial

> [!important]
> ::fluent-color:calendar-48:: **Fecha:** 20 al 24 de Octubre<br>::fluent-color:laptop-48:: **Programa:** ::dashicons:wordpress /#21759b:: [Wordpress](https://es.wordpress.org/download/) / ::logos:xampp:: [Xampp](https://www.apachefriends.org/es/index.html)<br>::fluent-color:clipboard-text-edit-32:: **Tarea:** Sin tarea<br>::fluent-color:video-48:: **Videos:** [Video](https://www.youtube.com/watch?v=-dDNCZtKAn0)<br>::fluent-color:briefcase-48:: **Recursos:** [Recursos](https://drive.google.com/drive/folders/1sS6GGJK9ZJz4Go2m57zzpjfSGLDMH5jn?usp=sharing)

Para poder usar WordPress en nuestra computadora sin necesidad de pagar un hosting o tener internet constante, necesitamos crear un servidor local.
Esto se logra fácilmente con un programa llamado XAMPP.

XAMPP es un paquete de programas que simula un servidor web dentro de tu computadora.
Incluye herramientas esenciales para que WordPress funcione correctamente:

- **Apache:** Permite que tu computadora actúe como un servidor web.
- **MySQL** (MariaDB): Guarda toda la información de tu sitio (usuarios, entradas, páginas, etc.).
- **PHP:** Lenguaje que WordPress usa para funcionar.
- **phpMyAdmin:** Una interfaz para manejar las bases de datos fácilmente.

**Instalar**

1. **Descargar XAMPP**
   - Ve a [https://www.apachefriends.org](https://www.apachefriends.org)
   - Descarga la versión correspondiente a tu sistema operativo (Windows, Mac o Linux).

2. **Instalar XAMPP**
   - Ejecuta el instalador y deja las opciones por defecto.
   - Al finalizar, abre el **Panel de Control de XAMPP**.

3. **Activar los módulos**
   - En el panel, haz clic en **Start** en los módulos:
     - Apache  
     - MySQL  

4. **Crear una base de datos**
   - En tu navegador escribe: `http://localhost/phpmyadmin`
   - Crea una nueva base de datos llamada **wordpress_db**

5. **Descargar WordPress**
   - Visita [https://es.wordpress.org/download/](https://es.wordpress.org/download/)
   - Descarga el archivo ZIP y descomprímelo en la carpeta `htdocs` dentro del directorio de instalación de XAMPP.

6. **Configurar WordPress**
   - Abre en tu navegador: `http://localhost/wordpress`
   - Completa la instalación con los siguientes datos:
     - Nombre de la base de datos: **wordpress_db**
     - Usuario: **root**
     - Contraseña: *(deja en blanco)*
   - Guarda y continúa con la instalación.

7. **Acceder al sitio**
   - Sitio web: `http://localhost/wordpress`
   - Panel de administración: `http://localhost/wordpress/wp-admin`

## 4BS02: Hago la configuración inicial de mi sitio de Wordpress

> [!important]
> ::fluent-color:calendar-48:: **Fecha:** 27 al 31 de Octubre<br>::fluent-color:laptop-48:: **Programa:** ::dashicons:wordpress /#21759b:: [Wordpress](https://es.wordpress.org/download/) / ::logos:xampp:: [Xampp](https://www.apachefriends.org/es/index.html)<br>::fluent-color:clipboard-text-edit-32:: **Tarea:** Ver al final<br>::fluent-color:video-48:: **Videos:** [Video](https://www.youtube.com/watch?v=VNWMV3R822M)<br>::fluent-color:briefcase-48:: **Recursos:** [Recursos](https://drive.google.com/drive/folders/1sS6GGJK9ZJz4Go2m57zzpjfSGLDMH5jn?usp=sharing)

La configuración inicial de WordPress es un paso fundamental para poner en marcha un sitio web funcional, seguro y optimizado desde el primer momento. Durante este proceso se definen aspectos esenciales como el idioma del sitio, el nombre y descripción del proyecto, la cuenta de administrador, la dirección de correo electrónico y los ajustes básicos de enlaces permanentes y zona horaria. Además, se realizan las primeras personalizaciones relacionadas con la apariencia y los complementos necesarios para ampliar las funciones del sitio. Una correcta configuración inicial garantiza una base sólida para el desarrollo, mantenimiento y crecimiento del proyecto web en WordPress.

**Configuración iniciales**

**1. Crear páginas de iniciales**

Ve la sección páginas y crear las páginas siguientes, el slug se coloca en paréntesis.

- Inicio (inicio).
- Acerca de (acerca-de).
- Blog (blog).
- Contacto (contacto).

**2. Ajustes del sitio**

**2.1 Ajustes -> Generales**

- Título del sitio: Nombre de tu web. Ejemplo: Concinando con Pepito
- Descripción corta: Frase que resume el propósito del sitio. Ejemplo: Descubre una manera simple de cocinar.
- Icono del sitio: Una imagen que represente el sitio como un logo.
- Correo electrónico del administrador: Donde recibirás notificaciones y si te olvidas la contraseña a donde se enviará la misma.
- Zona horaria: Elige tu país o ciudad.
- Formato de fecha y hora: Selecciona tu formato preferido. En Perú se usa el dd-mm-yyyy
- Idioma del sitio: Español o el idioma de preferencia.

**2.2 Ajustes -> Lectura**

- Una página estatica: Seleccionar la página Inicio y para las entradas la página Blog.
- Para cada entrada en el fed incluir **Extracto**.
- Activar la opción: Pedir a los motores de búsqueda no indexar este sitio.

**2.3 Enlaces permanentes**

En estructura perzonalizada coloca lo siguiente: `/%category%/%postname%`

::: warning **Tarea**
En tu sitio de Wordpress haz esta primera configuración inicial. Recuerda que tienes como plazo hasta el día Sábado 01 de Noviembre.
:::

## 4BS03: Creo entradas y páginas iniciales

> [!important]
> ::fluent-color:calendar-48:: **Fecha:** 03 al 07 de Noviembre<br>::fluent-color:laptop-48:: **Programa:** ::dashicons:wordpress /#21759b:: [Wordpress](https://es.wordpress.org/download/) / ::logos:xampp:: [Xampp](https://www.apachefriends.org/es/index.html)<br>::fluent-color:clipboard-text-edit-32:: **Tarea:** Ver al final<br>::fluent-color:video-48:: **Videos:** [Spectra](https://www.youtube.com/watch?v=p4VUmQlEy8I)<br>::fluent-color:briefcase-48:: **Recursos:** [Recursos](https://drive.google.com/drive/folders/1sS6GGJK9ZJz4Go2m57zzpjfSGLDMH5jn?usp=sharing)


**1. Crear páginas principales**

1. Inicia sesión en tu panel de WordPress (tusitio.com/wp-admin).
2. En el menú lateral, haz clic en Páginas → Añadir nueva.
3. Crea las siguientes páginas, una por una:
   - Inicio
   - Acerca de
   - Blog
   - Contacto
4. En cada página:
5. Agrega un título (por ejemplo, “Acerca de”).
6. Escribe un texto breve o deja el espacio en blanco si lo editarás más adelante.
7. Haz clic en Publicar para guardar los cambios.

**2. Editar el menú principal**

1. Ve a Apariencia → Temas.
2. Activa el tema "Astra"
3. Ve a Apariencia → Menús.
4. Crea un nuevo menú llamado, por ejemplo: "menu-principal".
5. Marca las páginas que creaste y presiona Añadir al menú.
6. Ordena los elementos arrastrándolos según el orden: Inicio, Acerca de, Blog y Contacto.
7. Marca la casilla Ubicación en el tema → Menú principal.
8. Haz clic en Guardar menú.

**3. Establecer la página de inicio**

1. Ve a Ajustes → Lectura.
2. En la sección Tu página de inicio muestra, selecciona:
3. Una página estática.
4. En Página de inicio, elige Inicio.
5. En Página de entradas, selecciona Blog.
6. Adiconal: Activa Extracto más abajo.
7. Guarda los cambios.

**4. Editar la página de inicio con Spectra**

Spectra (anteriormente Ultimate Addons for Gutenberg) permite diseñar páginas con bloques avanzados directamente en el editor de WordPress.

Puedes guiarte al video que se adjunta esta semana y crear una página de inicio genial y bonita.

::: danger **Tarea**
En tu sitio de Wordpress realiza lo indicado esta semana. Tienes hasta el Sábado 8, de no completar dicha tarea tu sitio será eliminado irremediablemente.
:::

