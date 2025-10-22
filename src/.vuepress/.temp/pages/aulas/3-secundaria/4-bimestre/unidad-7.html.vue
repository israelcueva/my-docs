<template><div><p><VPIcon icon="dashicons:wordpress" color="#21759b" /> WordPress es un sistema de gestión de contenidos (CMS, por sus siglas en inglés) que permite crear y administrar sitios web de manera sencilla, sin necesidad de tener conocimientos avanzados de programación. Fue lanzado en 2003 y, con el tiempo, se ha convertido en una de las herramientas más populares del mundo para diseñar blogs, portafolios, tiendas virtuales y páginas empresariales.</p>
<h2 id="_4bs01-instalo-xampp-y-wordpress-de-manera-inicial" tabindex="-1"><a class="header-anchor" href="#_4bs01-instalo-xampp-y-wordpress-de-manera-inicial"><span>4BS01: Instalo Xampp y Wordpress de manera inicial</span></a></h2>
<div class="hint-container important">
<p class="hint-container-title">Importante</p>
<p><VPIcon icon="fluent-color:calendar-48" /> <strong>Fecha:</strong> 20 al 24 de Octubre<br><VPIcon icon="fluent-color:laptop-48" /> <strong>Programa:</strong> <VPIcon icon="dashicons:wordpress" color="#21759b" /> <a href="https://es.wordpress.org/download/" target="_blank" rel="noopener noreferrer">Wordpress</a> / <VPIcon icon="logos:xampp" /> <a href="https://www.apachefriends.org/es/index.html" target="_blank" rel="noopener noreferrer">Xampp</a><br><VPIcon icon="fluent-color:clipboard-text-edit-32" /> <strong>Tarea:</strong> Sin tarea<br><VPIcon icon="fluent-color:video-48" /> <strong>Videos:</strong> <a href="https://www.youtube.com/watch?v=-dDNCZtKAn0" target="_blank" rel="noopener noreferrer">Video</a><br><VPIcon icon="fluent-color:briefcase-48" /> <strong>Recursos:</strong> <a href="https://drive.google.com/drive/folders/1sS6GGJK9ZJz4Go2m57zzpjfSGLDMH5jn?usp=sharing" target="_blank" rel="noopener noreferrer">Recursos</a></p>
</div>
<p>Para poder usar WordPress en nuestra computadora sin necesidad de pagar un hosting o tener internet constante, necesitamos crear un servidor local.<br>
Esto se logra fácilmente con un programa llamado XAMPP.</p>
<p>XAMPP es un paquete de programas que simula un servidor web dentro de tu computadora.<br>
Incluye herramientas esenciales para que WordPress funcione correctamente:</p>
<ul>
<li><strong>Apache:</strong> Permite que tu computadora actúe como un servidor web.</li>
<li><strong>MySQL</strong> (MariaDB): Guarda toda la información de tu sitio (usuarios, entradas, páginas, etc.).</li>
<li><strong>PHP:</strong> Lenguaje que WordPress usa para funcionar.</li>
<li><strong>phpMyAdmin:</strong> Una interfaz para manejar las bases de datos fácilmente.</li>
</ul>
<p><strong>Instalar</strong></p>
<ol>
<li>
<p><strong>Descargar XAMPP</strong></p>
<ul>
<li>Ve a <a href="https://www.apachefriends.org" target="_blank" rel="noopener noreferrer">https://www.apachefriends.org</a></li>
<li>Descarga la versión correspondiente a tu sistema operativo (Windows, Mac o Linux).</li>
</ul>
</li>
<li>
<p><strong>Instalar XAMPP</strong></p>
<ul>
<li>Ejecuta el instalador y deja las opciones por defecto.</li>
<li>Al finalizar, abre el <strong>Panel de Control de XAMPP</strong>.</li>
</ul>
</li>
<li>
<p><strong>Activar los módulos</strong></p>
<ul>
<li>En el panel, haz clic en <strong>Start</strong> en los módulos:
<ul>
<li>Apache</li>
<li>MySQL</li>
</ul>
</li>
</ul>
</li>
<li>
<p><strong>Crear una base de datos</strong></p>
<ul>
<li>En tu navegador escribe: <code v-pre>http://localhost/phpmyadmin</code></li>
<li>Crea una nueva base de datos llamada <strong>wordpress_db</strong></li>
</ul>
</li>
<li>
<p><strong>Descargar WordPress</strong></p>
<ul>
<li>Visita <a href="https://es.wordpress.org/download/" target="_blank" rel="noopener noreferrer">https://es.wordpress.org/download/</a></li>
<li>Descarga el archivo ZIP y descomprímelo en la carpeta <code v-pre>htdocs</code> dentro del directorio de instalación de XAMPP.</li>
</ul>
</li>
<li>
<p><strong>Configurar WordPress</strong></p>
<ul>
<li>Abre en tu navegador: <code v-pre>http://localhost/wordpress</code></li>
<li>Completa la instalación con los siguientes datos:
<ul>
<li>Nombre de la base de datos: <strong>wordpress_db</strong></li>
<li>Usuario: <strong>root</strong></li>
<li>Contraseña: <em>(deja en blanco)</em></li>
</ul>
</li>
<li>Guarda y continúa con la instalación.</li>
</ul>
</li>
<li>
<p><strong>Acceder al sitio</strong></p>
<ul>
<li>Sitio web: <code v-pre>http://localhost/wordpress</code></li>
<li>Panel de administración: <code v-pre>http://localhost/wordpress/wp-admin</code></li>
</ul>
</li>
</ol>
</div></template>


