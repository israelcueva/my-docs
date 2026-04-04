<template><div><p><VPIcon icon="mdi:wordpress" color="#0F88BD" /> WordPress es el sistema de gestión de contenidos (CMS) más popular y versátil del mundo, diseñado para permitir la creación, administración y publicación de sitios web de manera sencilla y profesional. Aunque nació originalmente como una plataforma enfocada en la creación de blogs, su arquitectura de código abierto ha evolucionado hasta convertirse en una herramienta integral capaz de dar vida a cualquier tipo de proyecto digital, desde portafolios personales y sitios corporativos hasta complejas tiendas virtuales.</p>
<p>Su éxito radica en un ecosistema basado en temas (para el diseño visual) y plugins (para añadir funciones específicas), lo que permite a los usuarios construir sitios web robustos sin necesidad de tener conocimientos avanzados en programación. Al ser una plataforma accesible y altamente personalizable, WordPress se ha consolidado como la opción predilecta tanto para principiantes que buscan su primera presencia en línea como para desarrolladores que requieren una base sólida y escalable para sus proyectos.</p>
<h2 id="_1bs01-instalo-wordpress-en-el-localhost" tabindex="-1"><a class="header-anchor" href="#_1bs01-instalo-wordpress-en-el-localhost"><span>1BS01: Instalo Wordpress en el  localhost</span></a></h2>
<div class="hint-container important">
<p class="hint-container-title">Importante</p>
<p><VPIcon icon="fluent-color:calendar-48" /> <strong>Fecha:</strong> 09 al 13 de Marzo<br><VPIcon icon="fluent-color:laptop-48" /> <strong>Programa:</strong> <VPIcon icon="mdi:wordpress" color="#0F88BD" /> <a href="https://pe.wordpress.org/" target="_blank" rel="noopener noreferrer">Wordpress</a> /  <VPIcon icon="logos:xampp" /> <a href="https://www.apachefriends.org/es/index.html" target="_blank" rel="noopener noreferrer">Xampp</a><br><VPIcon icon="fluent-color:clipboard-text-edit-32" /> <strong>Tarea:</strong> Sin tarea<br><VPIcon icon="fluent-color:video-48" /> <strong>Videos:</strong> <a href="https://www.youtube.com/watch?v=-dDNCZtKAn0" target="_blank" rel="noopener noreferrer">Video</a><br><VPIcon icon="fluent-color:briefcase-48" /> <strong>Recursos:</strong> <a href="https://drive.google.com/drive/folders/1PZFcDRsIkn81WQUMvHLm6P0vTOw9OX1F?usp=sharing" target="_blank" rel="noopener noreferrer">Recursos</a></p>
</div>
<p>Instalar WordPress en modo local es la mejor forma de practicar, diseñar o desarrollar un sitio web antes de publicarlo en un servidor real. Para ello, utilizaremos XAMPP, un paquete de software que simula un servidor web en tu propia computadora.</p>
<ol>
<li><strong>Descargar e Instalar XAMPP</strong></li>
</ol>
<p>Ve al sitio oficial de Apache Friends y descarga el instalador de XAMPP para tu sistema operativo (Windows, Linux o macOS).</p>
<p>Sigue los pasos del instalador manteniendo las opciones por defecto. Una vez terminada la instalación, abre el XAMPP Control Panel.</p>
<ol start="2">
<li><strong>Iniciar los Servicios</strong></li>
</ol>
<p>En el Panel de Control de XAMPP, debes activar dos servicios fundamentales haciendo clic en el botón &quot;Start&quot;:</p>
<ul>
<li>Apache: El servidor web que procesará los archivos.</li>
<li>MySQL: El sistema que gestionará la base de datos de tu sitio.</li>
</ul>
<p>Los indicadores deben ponerse en color verde para confirmar que están funcionando correctamente.</p>
<ol start="3">
<li><strong>Descargar WordPress</strong></li>
</ol>
<p>Descarga la versión más reciente en español desde <a href="http://WordPress.org" target="_blank" rel="noopener noreferrer">WordPress.org</a>.</p>
<p>Obtendrás un archivo .zip. Descomprímelo y verás una carpeta llamada wordpress.</p>
<ol start="4">
<li><strong>Preparar la Carpeta del Proyecto</strong></li>
</ol>
<p>Copia la carpeta <code v-pre>wordpress</code> descomprimida.</p>
<p>Dirígete a la ruta donde instalaste XAMPP (generalmente <code v-pre>C:\xampp</code>) y entra en la carpeta llamada <code v-pre>htdocs</code>.</p>
<p>Pega la carpeta ahí. Puedes renombrarla con el nombre de tu proyecto (ejemplo: mi-sitio-web).</p>
<ol start="5">
<li><strong>Crear la Base de Datos</strong></li>
</ol>
<p>Abre tu navegador y escribe: localhost/phpmyadmin.</p>
<p>Haz clic en la pestaña &quot;Nueva&quot; (o &quot;New&quot;).</p>
<p>Escribe un nombre para tu base de datos (por ejemplo: bd_wordpress) y haz clic en &quot;Crear&quot;. No necesitas hacer nada más aquí por ahora.</p>
<ol start="6">
<li><strong>Ejecutar el Instalador de WordPress</strong></li>
</ol>
<p>En tu navegador, ingresa a la dirección: localhost/nombre-de-tu-carpeta (ejemplo: localhost/mi-sitio-web).</p>
<p>Selecciona tu idioma y haz clic en &quot;¡Vamos a ello!&quot;.</p>
<p>Configura los datos de conexión de la siguiente manera:</p>
<ul>
<li>Nombre de la base de datos: bd_wordpress (o el nombre que elegiste en el paso 5).</li>
<li>Nombre de usuario: root</li>
<li>Contraseña: (Déjalo vacío, XAMPP por defecto no tiene contraseña para root).</li>
<li>Servidor de la base de datos: localhost</li>
<li>Prefijo de tabla: wp_</li>
</ul>
<ol start="7">
<li><strong>Finalizar la Instalación</strong></li>
</ol>
<p>Haz clic en &quot;Ejecutar la instalación&quot;. Ahora te pedirá los datos del sitio, como es de pruebas harás lo siguiente:</p>
<ul>
<li>Nombre del Sitio: Ponle cualquier nombre.</li>
<li>Usuario: root (inseguro, pero fácil de recordar).</li>
<li>Contraseña: root (inseguro, pero fácil de recordar).</li>
<li>Activar COntraseña insegura.</li>
<li>Correo: <a href="mailto:cualquiercorreo@cualquiercorreo.com" target="_blank" rel="noopener noreferrer">cualquiercorreo@cualquiercorreo.com</a></li>
</ul>
<p>Dale en Instalar.</p>
<p>¡Listo! Ahora puedes acceder a tu panel de administración local en <code v-pre>localhost/mi-sitio-web/wp-admin</code>.</p>
<h2 id="_1bs02-instalo-y-configuro-astra-y-spectra" tabindex="-1"><a class="header-anchor" href="#_1bs02-instalo-y-configuro-astra-y-spectra"><span>1BS02: Instalo y configuro Astra y Spectra</span></a></h2>
<div class="hint-container important">
<p class="hint-container-title">Importante</p>
<p><VPIcon icon="fluent-color:calendar-48" /> <strong>Fecha:</strong> 16 al 20 de Marzo<br><VPIcon icon="fluent-color:laptop-48" /> <strong>Programa:</strong> <VPIcon icon="mdi:wordpress" color="#0F88BD" /> <a href="https://pe.wordpress.org/" target="_blank" rel="noopener noreferrer">Wordpress</a> <br><VPIcon icon="fluent-color:clipboard-text-edit-32" /> <strong>Tarea:</strong> Sin tarea<br><VPIcon icon="fluent-color:video-48" /> <strong>Videos:</strong> <a href="https://www.youtube.com/watch?v=H4wjtCsjrtc" target="_blank" rel="noopener noreferrer">Astra</a> / <a href="https://www.youtube.com/watch?v=p4VUmQlEy8I" target="_blank" rel="noopener noreferrer">Spectra</a><br><VPIcon icon="fluent-color:briefcase-48" /> <strong>Recursos:</strong> <a href="https://drive.google.com/drive/folders/1PZFcDRsIkn81WQUMvHLm6P0vTOw9OX1F?usp=sharing" target="_blank" rel="noopener noreferrer">Recursos</a></p>
</div>
<p>Para llevar tus proyectos de WordPress al siguiente nivel, la combinación de Astra y Spectra es una de las soluciones más potentes y eficientes en la actualidad. Astra es un tema extremadamente ligero y rápido, diseñado para ofrecer un control total sobre el diseño global de tu sitio (como cabeceras, pies de página y tipografías) sin afectar el rendimiento. Por su parte, Spectra es un conjunto de bloques avanzados que potencia el editor nativo de WordPress (Gutenberg), permitiéndote crear diseños complejos, animaciones y estructuras profesionales mediante un sistema de &quot;arrastrar y soltar&quot;. Juntos, permiten construir sitios web visualmente impactantes y optimizados para SEO sin necesidad de escribir una sola línea de código.</p>
<p><strong>Instalación del Tema Astra</strong></p>
<ol>
<li>Entra a tu panel de administración de WordPress (<code v-pre>localhost/tu-sitio/wp-admin</code>).</li>
<li>En el menú de la izquierda, ve a <code v-pre>Apariencia</code> &gt; <code v-pre>Temas</code>.</li>
<li>Haz clic en el botón <code v-pre>Añadir tema</code> (<code v-pre>Add theme</code>).</li>
<li>En el buscador de la derecha, escribe &quot;Astra&quot;.</li>
<li>Cuando aparezca, haz clic en <code v-pre>Instalar</code> y, una vez finalizado, presiona <code v-pre>Activar</code>.</li>
</ol>
<p><strong>Instalación del Plugin Spectra</strong></p>
<ol>
<li>Ve a la sección Plugins &gt; Añadir nuevo plugin.</li>
<li>En el buscador, escribe &quot;Spectra&quot;.</li>
<li>Busca el plugin llamado &quot;Spectra – WordPress Gutenberg Blocks&quot; (desarrollado por Brainstorm Force).</li>
<li>Haz clic en Instalar ahora y luego en Activar.</li>
</ol>
<p><strong>(Opcional pero recomendado) Starter Templates</strong></p>
<p>Si quieres empezar con un diseño profesional ya hecho en lugar de una página en blanco:</p>
<p>Al activar Astra o Spectra, verás un aviso para instalar &quot;Starter Templates&quot;. Si no lo ves, búscalo en la sección de Plugins como &quot;Starter Templates&quot;.</p>
<p>Una vez activado, ve a Apariencia &gt; Starter Templates.</p>
<p>Selecciona &quot;Block Editor&quot; (Gutenberg) como tu constructor.</p>
<p>Elige una plantilla que te guste, personaliza el logo y los colores básicos, y haz clic en &quot;Submit &amp; Build My Website&quot;.</p>
<p><strong>A tomar en cuenta</strong></p>
<ul>
<li>Astra (Tema): Es el &quot;esqueleto&quot; y la configuración global (colores del sitio, menús, fuentes).</li>
<li>Spectra (Blocks): Son los &quot;ladrillos&quot; con los que construyes cada página (botones, galerías, mapas, testimonios).</li>
</ul>
<h2 id="_1bs03-anado-las-paginas-principales-de-mi-sitio-web" tabindex="-1"><a class="header-anchor" href="#_1bs03-anado-las-paginas-principales-de-mi-sitio-web"><span>1BS03: Añado las páginas principales de mi sitio web</span></a></h2>
<div class="hint-container important">
<p class="hint-container-title">Importante</p>
<p><VPIcon icon="fluent-color:calendar-48" /> <strong>Fecha:</strong> 23 al 27 de Marzo<br><VPIcon icon="fluent-color:laptop-48" /> <strong>Programa:</strong> <VPIcon icon="mdi:wordpress" color="#0F88BD" /> <a href="https://pe.wordpress.org/" target="_blank" rel="noopener noreferrer">Wordpress</a> <br><VPIcon icon="fluent-color:clipboard-text-edit-32" /> <strong>Tarea:</strong> Sin tarea<br><VPIcon icon="fluent-color:video-48" /> <strong>Videos:</strong> <a href="https://www.youtube.com/watch?v=Dv4XeGgaJqU" target="_blank" rel="noopener noreferrer">Páginas VS Entradas</a><br><VPIcon icon="fluent-color:briefcase-48" /> <strong>Recursos:</strong> <a href="https://drive.google.com/drive/folders/1PZFcDRsIkn81WQUMvHLm6P0vTOw9OX1F?usp=sharing" target="_blank" rel="noopener noreferrer">Recursos</a></p>
</div>
<p>Una vez que tienes tu WordPress instalado (ya sea en local o en la nube), crear una página es un proceso intuitivo gracias al editor de bloques.</p>
<p><strong>Acceder al menú de Páginas</strong></p>
<ol>
<li>En el escritorio de administración (panel lateral izquierdo), busca la opción <code v-pre>Páginas</code>.</li>
<li>Haz clic en Añadir nueva página.</li>
</ol>
<p><strong>Definir el Título y el Contenido</strong></p>
<ul>
<li>Título: Escribe el nombre de la página (ej. &quot;Principal&quot; o &quot;Sobre mí&quot;) en el campo superior. Esto generará automáticamente la URL(slug) o enlace permanente del sitio.</li>
<li>Bloques de contenido: Haz clic en el símbolo (+) para añadir elementos. Puedes insertar párrafos, imágenes, encabezados o, si ya instalaste Spectra, bloques avanzados como contenedores de diseño, galerías de fotos o botones de llamada a la acción.</li>
</ul>
<p><strong>Configuración de la Página (Barra Lateral Derecha)</strong></p>
<p>En el panel de ajustes de la derecha, puedes personalizar detalles importantes:</p>
<ul>
<li>Imagen destacada: Es la imagen principal que representará a la página en redes sociales o listados.</li>
<li>Atributos de página: Aquí puedes elegir si la página es una &quot;página superior&quot; o si depende de otra (subpágina).</li>
<li>Slug: Es el &quot;usuario&quot; asignado a esta página.</li>
<li>Plantilla: Si tu tema (como Astra) ofrece diferentes diseños (sin barras laterales, ancho completo, etc.), puedes seleccionarlos aquí.</li>
</ul>
<p><strong>Vista Previa y Publicación</strong></p>
<ul>
<li>Antes de lanzar la página, haz clic en Vista previa para ver cómo luce en computadoras, tablets y celulares.</li>
<li>Cuando estés satisfecho, haz clic en el botón azul Publicar. WordPress te pedirá una confirmación final.</li>
</ul>
<p><strong>Añadir la página al Menú (Paso Vital)</strong></p>
<p>Crear la página no significa que aparecerá automáticamente en tu sitio. Para que tus visitantes la vean, debes añadirla al menú de navegación:</p>
<ol>
<li>Ve a <code v-pre>Apariencia</code> &gt; <code v-pre>Menús</code> (o usa el Personalizador de Astra).</li>
<li>Selecciona la página que acabas de crear en la lista de la izquierda.</li>
<li>Haz clic en <code v-pre>Añadir al menú</code>.</li>
<li>Arrastra la página para ordenarla y haz clic en <code v-pre>Guardar menú</code>.</li>
</ol>
<p>Tip de experto: Para una web profesional, asegúrate de configurar tu página de &quot;Principal&quot; como una página estática en Ajustes &gt; Lectura, para que sea lo primero que vean los usuarios al entrar a tu dominio.</p>
<h2 id="_1bs04-creo-el-menu-de-mi-sitio-y-entiendo-el-front-y-el-dashboard" tabindex="-1"><a class="header-anchor" href="#_1bs04-creo-el-menu-de-mi-sitio-y-entiendo-el-front-y-el-dashboard"><span>1BS04: Creo el menú de mi sitio y entiendo el Front y el Dashboard</span></a></h2>
<div class="hint-container important">
<p class="hint-container-title">Importante</p>
<p><VPIcon icon="fluent-color:calendar-48" /> <strong>Fecha:</strong> 30 de Marzo al 03 de Abril<br><VPIcon icon="fluent-color:laptop-48" /> <strong>Programa:</strong> <VPIcon icon="mdi:wordpress" color="#0F88BD" /> <a href="https://pe.wordpress.org/" target="_blank" rel="noopener noreferrer">Wordpress</a> <br><VPIcon icon="fluent-color:clipboard-text-edit-32" /> <strong>Tarea:</strong> Sin tarea<br><VPIcon icon="fluent-color:video-48" /> <strong>Videos:</strong> <a href="https://www.youtube.com/watch?v=dQFfe6_wwN8" target="_blank" rel="noopener noreferrer">Menús</a> / <a href="https://www.youtube.com/watch?v=6JQ5oY38wC0" target="_blank" rel="noopener noreferrer">Enlaces permanentes</a> / <a href="https://www.youtube.com/watch?v=IPx3781Tzmc" target="_blank" rel="noopener noreferrer">Principal</a><br><VPIcon icon="fluent-color:briefcase-48" /> <strong>Recursos:</strong> <a href="https://drive.google.com/drive/folders/1PZFcDRsIkn81WQUMvHLm6P0vTOw9OX1F?usp=sharing" target="_blank" rel="noopener noreferrer">Recursos</a></p>
</div>
<p>Una vez terminada la estructura base de la página, ahora veremos como configurar algunas cuestiones extras.</p>
<ul>
<li>Creación del menú principal (Principal,Acerca de, Blog, Contacto)</li>
<li>Configurar enlaces permanentes <code v-pre>/%category%/%postame%</code></li>
<li>Definir página de inicio a <code v-pre>Principal</code> y de entradas a <code v-pre>Blog</code>.</li>
</ul>
<h2 id="_1bs05-practica-calificada" tabindex="-1"><a class="header-anchor" href="#_1bs05-practica-calificada"><span>1BS05: Práctica Calificada</span></a></h2>
<div class="hint-container important">
<p class="hint-container-title">Importante</p>
<p><VPIcon icon="fluent-color:calendar-48" /> <strong>Fecha:</strong> Sábado 11 de Abril<br><VPIcon icon="fluent-color:laptop-48" /> <strong>Programa:</strong> <VPIcon icon="mdi:wordpress" color="#0F88BD" /> <a href="https://pe.wordpress.org/" target="_blank" rel="noopener noreferrer">Wordpress</a></p>
</div>
<p>Replica todo lo hecho hasta esta semana en tu instalación de Wordpress, la cual deberá poderse acceder desde cualquier computadora con conexión a Internet.</p>
</div></template>


