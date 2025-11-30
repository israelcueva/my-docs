---
title: Unidad 8
category:
  - Aula
tag:
  - Inicio
  - 2-Secundaria
  - WickEditor
  - Javascript
author: Pepito
icon: fluent-color:notebook-32
order: 2
---

::ph:ghost:: Wick Editor es una herramienta gratuita y en línea que permite crear animaciones interactivas y videojuegos 2D de manera sencilla. Su entorno combina lo mejor de la animación tradicional con la programación básica, lo que lo convierte en una excelente opción para aficionados.

## 4BS05: Edito mi animación de nieve

> [!important]
> ::fluent-color:calendar-48:: **Fecha:** 17 al 21 de Noviembre<br>::fluent-color:laptop-48:: **Programa:** ::ph:ghost:: [Wick Editor](https://www.wickeditor.com/#/) / [Candlestickers](https://candlestickers.app/)<br> ::fluent-color:clipboard-text-edit-32:: **Tarea:** Sin tarea<br>::fluent-color:video-48:: **Videos:** [Video](https://www.youtube.com/@lucacodes)<br>::fluent-color:briefcase-48:: **Recursos:** [Recursos](https://drive.google.com/drive/folders/1JwTqjosoVEP21Pe63xg7g-G1pPczXET8?usp=sharing)

En Wick Editor, la creación de clones permite duplicar objetos o personajes para generar efectos dinámicos, animaciones repetitivas o interacciones más complejas sin necesidad de dibujar cada elemento manualmente. A través de código sencillo, es posible producir múltiples copias que se comporten de manera similar al objeto original o que ejecuten acciones personalizadas, lo que facilita la construcción de escenas ricas en movimiento. Esta herramienta resulta especialmente útil para crear enjambres, partículas, multitudes o patrones visuales, optimizando el tiempo de trabajo y ampliando las posibilidades creativas dentro de las animaciones.

## 4BS06: Diseño un cielo con estrellas animado

> [!important]
> ::fluent-color:calendar-48:: **Fecha:** 24 al 28 de Noviembre<br>::fluent-color:laptop-48:: **Programa:** ::ph:ghost:: [Wick Editor](https://www.wickeditor.com/#/) / [Candlestickers](https://candlestickers.app/)<br> ::fluent-color:clipboard-text-edit-32:: **Tarea:** Ver al final<br>::fluent-color:video-48:: **Videos:** [Video](https://youtu.be/PWXLSS6uErY)<br>::fluent-color:briefcase-48:: **Recursos:** [Recursos](https://drive.google.com/drive/folders/1JwTqjosoVEP21Pe63xg7g-G1pPczXET8?usp=sharing)

Mediante la combinación de dibujos básicos, movimientos automáticos y técnicas como la duplicación o el uso de clones, es posible generar un fondo dinámico donde las estrellas parpadean o se desplazan suavemente, simulando un cielo nocturno vivo. Este tipo de animación ayuda a comprender los principios de repetición, aleatoriedad y capas, mientras se desarrolla la creatividad y el control del tiempo dentro de la línea de animación.


::: warning **Tarea**
Replica el proyecto de clase , exportalo a GIF y presentalo a través de este [enlace](https://mariareinista-my.sharepoint.com/:f:/g/personal/d119263_mrc_edu_pe/IgC-NViI62i_QKqSO_tr2XOFAaGCJ6Q62p8fn-bkTNCFU3w)
:::

## 4BS07: Simulo físicas de ondas

> [!important]
> ::fluent-color:calendar-48:: **Fecha:** 01 al 05 de Diciembre<br>::fluent-color:laptop-48:: **Programa:** ::ph:ghost:: [Wick Editor](https://www.wickeditor.com/#/) / [Candlestickers](https://candlestickers.app/)<br> ::fluent-color:clipboard-text-edit-32:: **Tarea:** Sin tarea<br>::fluent-color:video-48:: **Videos:** [Video](https://youtu.be/PWXLSS6uErY)<br>::fluent-color:briefcase-48:: **Recursos:** [Recursos](https://drive.google.com/drive/folders/1JwTqjosoVEP21Pe63xg7g-G1pPczXET8?usp=sharing)

En JavaScript, las funciones matemáticas seno (sin) y coseno (cos) permiten generar movimientos suaves y ondulados ideales para animaciones dinámicas. Al usar estas funciones, es posible simular patrones naturales como olas, vibraciones, latidos o desplazamientos sinusoidales. Estas ondas se producen al variar un valor en el tiempo y aplicarlo a la posición de un objeto, dando como resultado un movimiento repetitivo y fluido.

### Código de clase

```javascript title="default"
tiempo = 0;
velocidad = 0.1;
amplitud = 100;
frecuencia = 0.05;
centroX = project.width / 2;
centroY = project.height / 2;
```

```javascript title="update"
tiempo += velocidad;
var offsetX = Math.cos(tiempo) * amplitud;
var offsetY = Math.sin(tiempo * 2) * (amplitud * 0.5);
this.x = centroX + offsetX;
this.y = centroY + offsetY; 
```

## 4BS08: Recreo mi primera animación

> [!important]
> ::fluent-color:calendar-48:: **Fecha:** 08 al 12 de Diciembre<br>::fluent-color:laptop-48:: **Programa:** ::ph:ghost:: [Wick Editor](https://www.wickeditor.com/#/) / [Candlestickers](https://candlestickers.app/)<br> ::fluent-color:clipboard-text-edit-32:: **Tarea:** Sin tarea<br>::fluent-color:video-48:: **Videos:** [Video](https://youtu.be/PWXLSS6uErY)<br>::fluent-color:briefcase-48:: **Recursos:** [Recursos](https://drive.google.com/drive/folders/1JwTqjosoVEP21Pe63xg7g-G1pPczXET8?usp=sharing)

El uso de tweens en Wick Editor permite crear animaciones fluidas y precisas controlando cómo cambian en el tiempo las propiedades de un objeto, como su posición, tamaño, rotación u opacidad. Con un tween puedes definir un punto inicial y otro final, y dejar que Wick calcule automáticamente el movimiento intermedio, logrando transiciones suaves sin necesidad de animar fotograma por fotograma. Esta herramienta es ideal para animar personajes, simular efectos visuales y dar dinamismo a cualquier escena, haciendo que tu trabajo sea más eficiente y profesional.

## 4BS09: Práctica Calificada

> [!important]
> ::fluent-color:calendar-48:: **Fecha límite:** 14 de Diciembre<br>::fluent-color:laptop-48:: **Programa:** ::ph:ghost:: [Wick Editor](https://www.wickeditor.com/#/) / [Candlestickers](https://candlestickers.app/)

Crea una postal navideña en wick editor. Diha postal debe reunir las características siguientes:

- Se debe presentar en formato HTML.
- Debe tener música.
- Debes añadirle el logo del colegio.

Puedes inspirarte revisando estos ejemplos: https://codecanyon.net/search/christmas%20card

