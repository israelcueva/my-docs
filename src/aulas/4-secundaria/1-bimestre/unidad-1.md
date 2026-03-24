---
title: Unidad 1
category:
  - Aula
tag:
  - Inicio
  - 4-Secundaria
author: Pepito
icon: fluent-color:notebook-32
order: 5
---

En la actualidad, el desarrollo de videojuegos se ha vuelto más accesible gracias a herramientas que simplifican el proceso sin sacrificar creatividad ni calidad. Una de estas herramientas es ::streamline-flex-color:cat-2:: ct.js, un motor de código abierto diseñado especialmente para principiantes y desarrolladores independientes que desean crear juegos en 2D de manera rápida y visual.

::streamline-flex-color:cat-2:: ct.js permite desarrollar videojuegos sin necesidad de tener conocimientos avanzados de programación, ya que ofrece una interfaz intuitiva basada en elementos gráficos como escenas, objetos y animaciones. Sin embargo, también brinda la posibilidad de utilizar JavaScript para añadir lógica más compleja, lo que lo convierte en una plataforma flexible tanto para novatos como para usuarios más experimentados.

Entre sus principales ventajas se encuentran su ligereza, facilidad de uso y la capacidad de exportar juegos a múltiples plataformas, especialmente para la web. Además, incluye herramientas integradas para gestionar recursos como imágenes, sonidos y scripts, facilitando la organización del proyecto.

## 1BS01: Creo un juego simple usando templates

> [!important]
> ::fluent-color:calendar-48:: **Fecha:** 09 al 13 de Marzo<br>::fluent-color:laptop-48:: **Programa:** ::streamline-flex-color:cat-2:: [CT.JS](https://ctjs.rocks/)<br>::fluent-color:clipboard-text-edit-32:: **Tarea:** Sin tarea<br>::fluent-color:video-48:: **Videos:** [Lista](https://www.youtube.com/watch?v=gJCGwp2uDCU&list=PLWGY0ivGwOKIiJ6KcgmPF3eqV_TlYB0XT)<br>::fluent-color:briefcase-48:: **Recursos:** [Recursos](https://drive.google.com/drive/folders/1u-QYAtX2ifDre1PqLDUwn7RMOUXgSCwQ?usp=sharing)

Al comenzar a trabajar con ct.js, una de las mejores formas de aprender es a través de sus ejemplos básicos, los cuales están diseñados para mostrar de manera práctica cómo funcionan los elementos fundamentales de un videojuego. Estos ejemplos permiten comprender, paso a paso, conceptos esenciales como el movimiento de personajes, la detección de colisiones, la interacción con el usuario y la gestión de escenas.

## 1BS02: Diseño mi primer nivel usando tiles

> [!important]
> ::fluent-color:calendar-48:: **Fecha:** 16 al 20 de Marzo<br>::fluent-color:laptop-48:: **Programa:** ::streamline-flex-color:cat-2:: [CT.JS](https://ctjs.rocks/)<br>::fluent-color:clipboard-text-edit-32:: **Tarea:** Sin tarea<br>::fluent-color:video-48:: **Videos:** [Lista](https://www.youtube.com/watch?v=gJCGwp2uDCU&list=PLWGY0ivGwOKIiJ6KcgmPF3eqV_TlYB0XT)<br>::fluent-color:briefcase-48:: **Recursos:** [Recursos](https://drive.google.com/drive/folders/1u-QYAtX2ifDre1PqLDUwn7RMOUXgSCwQ?usp=sharing)

En el desarrollo de videojuegos con ct.js, los tiles son una herramienta fundamental para crear escenarios de manera eficiente y organizada. Un tile es una pequeña imagen o bloque gráfico que, al repetirse en un patrón, permite construir mapas, suelos, paredes y otros elementos del entorno del juego.

El uso de tiles facilita enormemente el diseño de niveles, ya que en lugar de crear cada escenario desde cero, el desarrollador puede reutilizar piezas pequeñas para formar estructuras más grandes. Esto no solo ahorra tiempo, sino que también optimiza el rendimiento del juego, al reducir la cantidad de recursos necesarios.

En ct.js, los tiles se gestionan mediante sistemas de tilemaps, donde se pueden colocar y organizar estos bloques dentro de una cuadrícula. Esto permite diseñar niveles de forma visual, alineando fácilmente cada elemento y manteniendo una coherencia gráfica. Además, los tiles pueden combinarse con objetos interactivos (copies) para añadir colisiones, animaciones o eventos específicos dentro del juego.

## 1BS03: Agrego mi primer personaje y sus distintos estados

> [!important]
> ::fluent-color:calendar-48:: **Fecha:** 23 al 27 de Marzo<br>::fluent-color:laptop-48:: **Programa:** ::streamline-flex-color:cat-2:: [CT.JS](https://ctjs.rocks/)<br>::fluent-color:clipboard-text-edit-32:: **Tarea:** Ver al final<br>::fluent-color:video-48:: **Videos:** [Lista](https://www.youtube.com/watch?v=gJCGwp2uDCU&list=PLWGY0ivGwOKIiJ6KcgmPF3eqV_TlYB0XT)<br>::fluent-color:briefcase-48:: **Recursos:** [Recursos](https://drive.google.com/drive/folders/1u-QYAtX2ifDre1PqLDUwn7RMOUXgSCwQ?usp=sharing)

Esta semana veremos como crear un personaje simple en CT.JS. Para ello hacemos lo siguiente:

**1. Creando personaje**

1. Nos vamos `New Asset` y escogemos la galeria Integrada `Built in Gallery`.
2. Escogemos el paquete llamado `Kenney's Jumperpack` y descargamos el llamado `Bunny1_Walk1`.
3. Modificamos el área de colisión y le damos en Aplicar.
4. Creamos un template y escogemos la textura creada `Bunny1_Walk1`.

**2. Importando textura para suelo**

1. Nos vamos `New Asset` y escogemos la galeria integrada `Built in Gallery`.
2. Escogemos el paquete llamado `Kenney's Jumperpack` y al menos 3 texturas de suelo.
3. Modificamos el área de colisión y le damos en Aplicar.
4. Creamos un template y escogemos la textura del suelo, además, configuramos su grupo de colisión a `suelo`. Hacemos lo mismo con las otras dos texturas.

**3. Creando Room**

1. Nos vamos `New Asset` y esogemos `Room`y le ponemos de nombre `RM_nivel_01`. 
2. Usando la segunda herramienta `Add copies` añadimos los suelos y el template de nuestro personaje

::: warning **Tarea**
Haz un tutorial visual de como agregar el personaje. Desde la galeria hasta colocarlo en el ROOM. Imprimir y presentar en físico.
:::


