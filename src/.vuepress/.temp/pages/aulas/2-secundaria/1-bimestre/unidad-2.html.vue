<template><div><p><VPIcon icon="ph:ghost" /> Wick Editor es una herramienta gratuita y en línea que permite crear animaciones interactivas y videojuegos 2D de manera sencilla. Su entorno combina lo mejor de la animación tradicional con la programación básica, lo que lo convierte en una excelente opción para aficionados.</p>
<h2 id="_1bs06-creo-mi-primera-animacion-procedural" tabindex="-1"><a class="header-anchor" href="#_1bs06-creo-mi-primera-animacion-procedural"><span>1BS06: Creo mi primera animación procedural</span></a></h2>
<div class="hint-container important">
<p class="hint-container-title">Importante</p>
<p><VPIcon icon="fluent-color:calendar-48" /> <strong>Fecha:</strong> 13 al 17 de Abril<br><VPIcon icon="fluent-color:laptop-48" /> <strong>Programa:</strong> <VPIcon icon="ph:ghost" /> <a href="https://www.wickeditor.com/#/" target="_blank" rel="noopener noreferrer">Wick Editor</a><br> <VPIcon icon="fluent-color:clipboard-text-edit-32" /> <strong>Tarea:</strong> Ver al final<br><VPIcon icon="fluent-color:video-48" /> <strong>Videos:</strong> <a href="https://www.youtube.com/@lucacodes" target="_blank" rel="noopener noreferrer">Video</a><br><VPIcon icon="fluent-color:briefcase-48" /> <strong>Recursos:</strong> <a href="https://drive.google.com/drive/folders/1zjAx1k7z2jL6VLARqNE_13w0q-kqJNDa?usp=sharing" target="_blank" rel="noopener noreferrer">Recursos</a></p>
</div>
<p>Dar el salto de la animación tradicional basada en la línea de tiempo hacia la animación controlada por código es un momento clave. Es el instante en el que una animación deja de ser una simple &quot;película&quot; que solo se puede mirar, y se convierte en un proyecto interactivo que responde al usuario.</p>
<p>Wick Editor es una plataforma fantástica para esta transición porque utiliza JavaScript, un lenguaje de programación real y uno de los más demandados del mundo, pero lo implementa de una manera visual y amigable.</p>
<p>Aquí tienes los conceptos fundamentales para introducir la lógica de programación en Wick Editor:</p>
<p><strong>1. La regla de oro: Todo debe ser un &quot;Clip&quot;</strong></p>
<p>Para que el código pueda interactuar con un dibujo, texto o forma, este no puede ser un simple trazo en el lienzo; debe convertirse en un Clip (el equivalente a un &quot;Símbolo&quot; o &quot;Sprite&quot;). Al convertir un dibujo en un Clip, le estás dando un &quot;cuerpo&quot; que el código puede reconocer, nombrar y manipular.</p>
<p><strong>2. El concepto de &quot;<code v-pre>this</code>&quot; (Este objeto)</strong></p>
<p>Cuando escribimos código dentro de un Clip en Wick Editor, la computadora necesita saber a quién le estamos dando las órdenes. La palabra clave this (que significa &quot;esto&quot; o &quot;este&quot;) se usa para decirle al Clip: &quot;Cámbiate a ti mismo&quot;.</p>
<p>A través de this, controlamos las Propiedades del objeto:</p>
<ul>
<li><code v-pre>this.x</code> y <code v-pre>this.y</code>: Controlan la posición horizontal y vertical.</li>
<li><code v-pre>this.rotation</code>: Gira el objeto (medido en grados).</li>
<li><code v-pre>this.scale</code>: Modifica su tamaño.</li>
<li><code v-pre>this.opacity</code>: Lo hace transparente o sólido (de 0 a 1).</li>
</ul>
<p><strong>3. Los Eventos: ¿Cuándo ocurre la magia?</strong></p>
<p>El código no se ejecuta al azar; espera a que ocurra un &quot;Evento&quot; para activarse. En Wick Editor, el código se organiza en pestañas según el evento que lo dispara:</p>
<ul>
<li><strong>Default (Por defecto)</strong>: El código se lee una sola vez cuando el Clip aparece en pantalla. Es útil para configurar el tamaño o la posición inicial.</li>
<li><strong>Update (Actualizar)</strong>: ¡El evento más poderoso para animar! Este código se ejecuta continuamente, una vez por cada fotograma (por ejemplo, 12 veces por segundo). Si escribes this.rotation += 5; aquí, el objeto girará sin detenerse jamás, sin necesidad de crear fotogramas clave.</li>
<li><strong>Eventos de Ratón (mouseclick, mouseenter, etc.)</strong>: Se ejecutan cuando el usuario interactúa. Son la base para crear botones, minijuegos o menús interactivos.</li>
</ul>
<p><strong>4. La Lógica de Variables y Condicionales</strong></p>
<p>Una vez que se dominan las propiedades y los eventos, el siguiente paso es darle &quot;cerebro&quot; a la animación usando lógica pura:</p>
<ul>
<li><strong>Variables</strong>: Cajas donde guardamos información (ej. puntuacion = 0; o velocidad = 5;).</li>
<li><strong>Condicionales (if / else)</strong>: Permiten que el objeto tome decisiones. &quot;Si la posición X es mayor a 500, entonces rebota y cambia de dirección&quot;.</li>
</ul>
<div class="hint-container warning">
<p class="hint-container-title"><strong>Tarea</strong></p>
<p>Entra en <a href="https://www.wickeditor.com/#/learn/reference" target="_blank" rel="noopener noreferrer">https://www.wickeditor.com/#/learn/reference</a> , luego, con tus compañeros crea un archivo PDF de esta referencia en español.</p>
</div>
<h2 id="_1bs07-me-ayudo-de-los-objetos-disponibles-para-animar" tabindex="-1"><a class="header-anchor" href="#_1bs07-me-ayudo-de-los-objetos-disponibles-para-animar"><span>1BS07: Me ayudo de los objetos disponibles para animar</span></a></h2>
<div class="hint-container important">
<p class="hint-container-title">Importante</p>
<p><VPIcon icon="fluent-color:calendar-48" /> <strong>Fecha:</strong> 20 al 24 de Abril<br><VPIcon icon="fluent-color:laptop-48" /> <strong>Programa:</strong> <VPIcon icon="ph:ghost" /> <a href="https://www.wickeditor.com/#/" target="_blank" rel="noopener noreferrer">Wick Editor</a><br> <VPIcon icon="fluent-color:clipboard-text-edit-32" /> <strong>Tarea:</strong> Ver al final<br><VPIcon icon="fluent-color:video-48" /> <strong>Videos:</strong> <a href="https://www.youtube.com/@lucacodes" target="_blank" rel="noopener noreferrer">Video</a><br><VPIcon icon="fluent-color:briefcase-48" /> <strong>Recursos:</strong> <a href="https://drive.google.com/drive/folders/1zjAx1k7z2jL6VLARqNE_13w0q-kqJNDa?usp=sharing" target="_blank" rel="noopener noreferrer">Recursos</a></p>
</div>
<p>En el ecosistema de Wick Editor, los objetos representan las piezas fundamentales de cualquier proyecto, ya sea una animación tradicional o un juego interactivo. Cada elemento que dibujamos o importamos al lienzo se convierte en una entidad con propiedades únicas —como posición, escala y rotación— que podemos manipular a lo largo de la línea de tiempo. Comprender cómo gestionar estos objetos es el primer paso esencial para transformar dibujos estáticos en experiencias dinámicas, permitiéndonos organizar visualmente nuestra escena y prepararla para la interactividad mediante programación.</p>
<p>Conceptos clave a tener en cuenta:</p>
<ul>
<li><strong>El Lienzo (Canvas)</strong>: Es el espacio donde viven y se mueven todos tus objetos.</li>
<li><strong>Capas (Layers)</strong>: La forma en que organizas qué objetos aparecen al frente o detrás de otros.</li>
<li><strong>Interactividad</strong>: La capacidad de convertir un objeto simple en un botón o un clip de película para añadirle código.</li>
</ul>
<p>¿Estás diseñando una actividad para que los estudiantes aprendan a animar objetos básicos o vas a pasar directamente a la creación de botones interactivos?</p>
<div class="hint-container warning">
<p class="hint-container-title"><strong>Tarea</strong></p>
<p>Opción 1: Crea un diagrama a mano de los objetos disponibles en Wick editor.<br>
Opción 2: Recrea y completa el proyecto de clase. Exportar a objeto interactivo (HTML) y enviar a través de este enlace: <a href="https://mariareinista-my.sharepoint.com/:f:/g/personal/d119263_mrc_edu_pe/IgDl_-trxmhIQ5as3gyDH4jWAfp2PPLaJ043ppNI-vcH7y4" target="_blank" rel="noopener noreferrer">https://mariareinista-my.sharepoint.com/:f:/g/personal/d119263_mrc_edu_pe/IgDl_-trxmhIQ5as3gyDH4jWAfp2PPLaJ043ppNI-vcH7y4</a></p>
</div>
<h2 id="_1bs08-uso-de-fotograma-y-clips-para-mi-animacion-procedural" tabindex="-1"><a class="header-anchor" href="#_1bs08-uso-de-fotograma-y-clips-para-mi-animacion-procedural"><span>1BS08: Uso de fotograma y clips para mi animación procedural</span></a></h2>
<div class="hint-container important">
<p class="hint-container-title">Importante</p>
<p><VPIcon icon="fluent-color:calendar-48" /> <strong>Fecha:</strong> 27 al 30 de Abril<br><VPIcon icon="fluent-color:laptop-48" /> <strong>Programa:</strong> <VPIcon icon="ph:ghost" /> <a href="https://www.wickeditor.com/#/" target="_blank" rel="noopener noreferrer">Wick Editor</a><br> <VPIcon icon="fluent-color:clipboard-text-edit-32" /> <strong>Tarea:</strong> Sin tarea<br><VPIcon icon="fluent-color:video-48" /> <strong>Videos:</strong> <a href="https://www.youtube.com/@lucacodes" target="_blank" rel="noopener noreferrer">Video</a><br><VPIcon icon="fluent-color:briefcase-48" /> <strong>Recursos:</strong> <a href="https://drive.google.com/drive/folders/1zjAx1k7z2jL6VLARqNE_13w0q-kqJNDa?usp=sharing" target="_blank" rel="noopener noreferrer">Recursos</a></p>
</div>
<p>La creación de animaciones procedurales en Wick Editor transforma por completo la manera en que damos vida a los proyectos digitales, pasando del laborioso dibujo fotograma a fotograma al diseño impulsado por código. Al aprovechar el entorno de programación basado en JavaScript de esta plataforma gratuita, puedes establecer reglas lógicas y matemáticas que controlen dinámicamente el movimiento, la rotación o el comportamiento de tus objetos en pantalla. Este enfoque no solo optimiza tu flujo de trabajo al automatizar animaciones complejas o repetitivas, sino que también te permite generar movimientos orgánicos, fluidos e interactivos que responden en tiempo real a las acciones del usuario, abriendo la puerta a una creatividad técnica casi ilimitada.</p>
<h2 id="_1bs09-practica-calificada-revision-de-folder" tabindex="-1"><a class="header-anchor" href="#_1bs09-practica-calificada-revision-de-folder"><span>1BS09: Práctica Calificada - Revisión de folder</span></a></h2>
<div class="hint-container important">
<p class="hint-container-title">Importante</p>
<p><VPIcon icon="fluent-color:calendar-48" /> <strong>Fecha:</strong> Semana 9<br><VPIcon icon="fluent-color:laptop-48" /> <strong>Programa:</strong> <VPIcon icon="ph:ghost" /> <a href="https://www.wickeditor.com/#/" target="_blank" rel="noopener noreferrer">Wick Editor</a><br></p>
</div>
<p>A la animación del jardin que hiciste la semana 5, añadéle los siguientes elementos:</p>
<ul>
<li>Sol: Puede ser la animación de rotación o la de pulso (crecer/decrecer).</li>
<li>Nubes: Moviéndose a distintas velocidades.</li>
<li>Opcional (Reto): Hacer que las plantas se mueva como si fueran movidas por el viento.</li>
</ul>
<p>Una vez terminado, envía tu proyecto en formato GIF al enlace siguiente:</p>
<p><a href="https://mariareinista-my.sharepoint.com/:f:/g/personal/d119263_mrc_edu_pe/IgBbIFPEktsOSoLCIMSl_C6lARItfsRcG6rx28oly7fRWw0" target="_blank" rel="noopener noreferrer">https://mariareinista-my.sharepoint.com/:f:/g/personal/d119263_mrc_edu_pe/IgBbIFPEktsOSoLCIMSl_C6lARItfsRcG6rx28oly7fRWw0</a></p>
</div></template>


