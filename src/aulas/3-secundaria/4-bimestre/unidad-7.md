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
