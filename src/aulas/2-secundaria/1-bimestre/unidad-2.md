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

