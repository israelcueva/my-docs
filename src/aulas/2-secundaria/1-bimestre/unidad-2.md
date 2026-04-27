---
title: Unidad 2
category:
  - Aula
tag:
  - Inicio
  - 2-Secundaria
  - WickEditor
  - Javascript
author: Pepito
icon: fluent-color:notebook-32
order: 1
---

::ph:ghost:: Wick Editor es una herramienta gratuita y en línea que permite crear animaciones interactivas y videojuegos 2D de manera sencilla. Su entorno combina lo mejor de la animación tradicional con la programación básica, lo que lo convierte en una excelente opción para aficionados.

## 1BS06: Creo mi primera animación procedural

> [!important]
> ::fluent-color:calendar-48:: **Fecha:** 13 al 17 de Abril<br>::fluent-color:laptop-48:: **Programa:** ::ph:ghost:: [Wick Editor](https://www.wickeditor.com/#/)<br> ::fluent-color:clipboard-text-edit-32:: **Tarea:** Ver al final<br>::fluent-color:video-48:: **Videos:** [Video](https://www.youtube.com/@lucacodes)<br>::fluent-color:briefcase-48:: **Recursos:** [Recursos](https://drive.google.com/drive/folders/1zjAx1k7z2jL6VLARqNE_13w0q-kqJNDa?usp=sharing)

Dar el salto de la animación tradicional basada en la línea de tiempo hacia la animación controlada por código es un momento clave. Es el instante en el que una animación deja de ser una simple "película" que solo se puede mirar, y se convierte en un proyecto interactivo que responde al usuario.

Wick Editor es una plataforma fantástica para esta transición porque utiliza JavaScript, un lenguaje de programación real y uno de los más demandados del mundo, pero lo implementa de una manera visual y amigable.

Aquí tienes los conceptos fundamentales para introducir la lógica de programación en Wick Editor:

**1. La regla de oro: Todo debe ser un "Clip"**

Para que el código pueda interactuar con un dibujo, texto o forma, este no puede ser un simple trazo en el lienzo; debe convertirse en un Clip (el equivalente a un "Símbolo" o "Sprite"). Al convertir un dibujo en un Clip, le estás dando un "cuerpo" que el código puede reconocer, nombrar y manipular.

**2. El concepto de "`this`" (Este objeto)**

Cuando escribimos código dentro de un Clip en Wick Editor, la computadora necesita saber a quién le estamos dando las órdenes. La palabra clave this (que significa "esto" o "este") se usa para decirle al Clip: "Cámbiate a ti mismo".

A través de this, controlamos las Propiedades del objeto:

- `this.x` y `this.y`: Controlan la posición horizontal y vertical.
- `this.rotation`: Gira el objeto (medido en grados).
- `this.scale`: Modifica su tamaño.
- `this.opacity`: Lo hace transparente o sólido (de 0 a 1).

**3. Los Eventos: ¿Cuándo ocurre la magia?**

El código no se ejecuta al azar; espera a que ocurra un "Evento" para activarse. En Wick Editor, el código se organiza en pestañas según el evento que lo dispara:

- **Default (Por defecto)**: El código se lee una sola vez cuando el Clip aparece en pantalla. Es útil para configurar el tamaño o la posición inicial.
- **Update (Actualizar)**: ¡El evento más poderoso para animar! Este código se ejecuta continuamente, una vez por cada fotograma (por ejemplo, 12 veces por segundo). Si escribes this.rotation += 5; aquí, el objeto girará sin detenerse jamás, sin necesidad de crear fotogramas clave.
- **Eventos de Ratón (mouseclick, mouseenter, etc.)**: Se ejecutan cuando el usuario interactúa. Son la base para crear botones, minijuegos o menús interactivos.

**4. La Lógica de Variables y Condicionales**

Una vez que se dominan las propiedades y los eventos, el siguiente paso es darle "cerebro" a la animación usando lógica pura:

- **Variables**: Cajas donde guardamos información (ej. puntuacion = 0; o velocidad = 5;).
- **Condicionales (if / else)**: Permiten que el objeto tome decisiones. "Si la posición X es mayor a 500, entonces rebota y cambia de dirección".

::: warning **Tarea**
Entra en https://www.wickeditor.com/#/learn/reference , luego, con tus compañeros crea un archivo PDF de esta referencia en español.
:::

## 1BS07: Me ayudo de los objetos disponibles para animar

> [!important]
> ::fluent-color:calendar-48:: **Fecha:** 20 al 24 de Abril<br>::fluent-color:laptop-48:: **Programa:** ::ph:ghost:: [Wick Editor](https://www.wickeditor.com/#/)<br> ::fluent-color:clipboard-text-edit-32:: **Tarea:** Ver al final<br>::fluent-color:video-48:: **Videos:** [Video](https://www.youtube.com/@lucacodes)<br>::fluent-color:briefcase-48:: **Recursos:** [Recursos](https://drive.google.com/drive/folders/1zjAx1k7z2jL6VLARqNE_13w0q-kqJNDa?usp=sharing)

En el ecosistema de Wick Editor, los objetos representan las piezas fundamentales de cualquier proyecto, ya sea una animación tradicional o un juego interactivo. Cada elemento que dibujamos o importamos al lienzo se convierte en una entidad con propiedades únicas —como posición, escala y rotación— que podemos manipular a lo largo de la línea de tiempo. Comprender cómo gestionar estos objetos es el primer paso esencial para transformar dibujos estáticos en experiencias dinámicas, permitiéndonos organizar visualmente nuestra escena y prepararla para la interactividad mediante programación.

Conceptos clave a tener en cuenta:

- **El Lienzo (Canvas)**: Es el espacio donde viven y se mueven todos tus objetos.
- **Capas (Layers)**: La forma en que organizas qué objetos aparecen al frente o detrás de otros.
- **Interactividad**: La capacidad de convertir un objeto simple en un botón o un clip de película para añadirle código.

¿Estás diseñando una actividad para que los estudiantes aprendan a animar objetos básicos o vas a pasar directamente a la creación de botones interactivos?

::: warning **Tarea**
Opción 1: Crea un diagrama a mano de los objetos disponibles en Wick editor.
Opción 2: Recrea y completa el proyecto de clase. Exportar a objeto interactivo (HTML) y enviar a través de este enlace: https://mariareinista-my.sharepoint.com/:f:/g/personal/d119263_mrc_edu_pe/IgDl_-trxmhIQ5as3gyDH4jWAfp2PPLaJ043ppNI-vcH7y4
:::

## 1BS08: Uso de fotograma y clips para mi animación procedural

> [!important]
> ::fluent-color:calendar-48:: **Fecha:** 27 al 30 de Abril<br>::fluent-color:laptop-48:: **Programa:** ::ph:ghost:: [Wick Editor](https://www.wickeditor.com/#/)<br> ::fluent-color:clipboard-text-edit-32:: **Tarea:** Sin tarea<br>::fluent-color:video-48:: **Videos:** [Video](https://www.youtube.com/@lucacodes)<br>::fluent-color:briefcase-48:: **Recursos:** [Recursos](https://drive.google.com/drive/folders/1zjAx1k7z2jL6VLARqNE_13w0q-kqJNDa?usp=sharing)

La creación de animaciones procedurales en Wick Editor transforma por completo la manera en que damos vida a los proyectos digitales, pasando del laborioso dibujo fotograma a fotograma al diseño impulsado por código. Al aprovechar el entorno de programación basado en JavaScript de esta plataforma gratuita, puedes establecer reglas lógicas y matemáticas que controlen dinámicamente el movimiento, la rotación o el comportamiento de tus objetos en pantalla. Este enfoque no solo optimiza tu flujo de trabajo al automatizar animaciones complejas o repetitivas, sino que también te permite generar movimientos orgánicos, fluidos e interactivos que responden en tiempo real a las acciones del usuario, abriendo la puerta a una creatividad técnica casi ilimitada.

## 1BS09: Práctica Calificada - Revisión de folder

> [!important]
> ::fluent-color:calendar-48:: **Fecha:** Semana 9<br>::fluent-color:laptop-48:: **Programa:** ::ph:ghost:: [Wick Editor](https://www.wickeditor.com/#/)<br>

A la animación del jardin que hiciste la semana 5, añadéle los siguientes elementos:

- Sol: Puede ser la animación de rotación o la de pulso (crecer/decrecer).
- Nubes: Moviéndose a distintas velocidades.
- Opcional (Reto): Hacer que las plantas se mueva como si fueran movidas por el viento.

Una vez terminado, envía tu proyecto en formato GIF al enlace siguiente:

https://mariareinista-my.sharepoint.com/:f:/g/personal/d119263_mrc_edu_pe/IgBbIFPEktsOSoLCIMSl_C6lARItfsRcG6rx28oly7fRWw0



