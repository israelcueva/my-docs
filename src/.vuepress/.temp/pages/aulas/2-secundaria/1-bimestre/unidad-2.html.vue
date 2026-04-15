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
</div></template>


