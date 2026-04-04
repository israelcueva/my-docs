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

## 1BS04: Agrego acciones básicas a mi personaje

> [!important]
> ::fluent-color:calendar-48:: **Fecha:** 23 al 27 de Marzo<br>::fluent-color:laptop-48:: **Programa:** ::streamline-flex-color:cat-2:: [CT.JS](https://ctjs.rocks/)<br>::fluent-color:clipboard-text-edit-32:: **Tarea:** Ver al final<br>::fluent-color:video-48:: **Videos:** [Lista](https://www.youtube.com/watch?v=gJCGwp2uDCU&list=PLWGY0ivGwOKIiJ6KcgmPF3eqV_TlYB0XT)<br>::fluent-color:briefcase-48:: **Recursos:** [Recursos](https://drive.google.com/drive/folders/1u-QYAtX2ifDre1PqLDUwn7RMOUXgSCwQ?usp=sharing)

Ahora que ya sabemos crear un Template, agregar Recursos y diseñar Niveles con Rooms. Nos queda añadir movimientos básicos a nuestro personaje.

**Prerequisitos**:

- Room `nivel_1` con el escenario para nuestro personaje se mueva.
- Template del personaje principal.

**Crear grupo de colisión**

Para que nuestro personaje interactue con el suelo, este debe tener un grupo de colisión asignado, en este caso `suelo`.

A cada template que hayamos usado para el suelo o el terreno de nuestro videojuego el cual el personaje deberá usar de plataforma u obstáculo le haremos lo siguiente:

- Ingresar al template y a la izquierda en `Group Collision` escribir suelo y luego `Aplicar`.

**Añadir acciones**

1. Nos vamos a **::boxicons:slider-vertical:: Project**
2. En **acciones y métodos de entrada** (Actions and Input methods) le dame clic en **+ Make from Scratch**
3. En el primer le colocamos de nombre **Saltar** y escogemos los input a W, Space y UpArrow.
4. Creamos dos más: **Izquierda** y **Derecha** con sus sus dos input correspondientes.

**Verificar funcionalidades**

Para que este funcione debemos verificar, desde **::boxicons:slider-vertical:: Project** -> **::flowbite:share-nodes-outline:: Catmods** que las siguientes funcionalidades esten activas:

::simple-line-icons:check color=green:: Keyboard
::simple-line-icons:check color=green:: Keyboard Polyfill
::simple-line-icons:check color=green:: Place

**Agregar código**

Ahora solo resta añadir los bloques de código siguientes a cada evento:

::: tabs

@tab:active ::mingcute:sun-line:: Creation

<!-- tab 1 content -->

```javascript
this.jumpSpeed = -600;
this.gravity = 1800;

this.hspeed = 0; // Horizontal speed
this.vspeed = 0; // Vertical speed
```


@tab ::fluent-mdl2:previous:: Frame Start

<!-- tab 2 content -->

```javascript
this.movespeed = 240; // Velocidad

if (actions.Izquierda.down) {
    this.hspeed = -this.movespeed;
} else if (actions.Derecha.down) {
    this.hspeed = this.movespeed;
} else {
    // Si ninguna acción se ejecuta el personaje no se mueve
    this.hspeed = 0;
}

// Código para que el personaje salte
if (place.occupied(this, this.x, this.y + 1, 'suelo')) {
    if (actions.Saltar.down) {
        this.vspeed = this.jumpSpeed;
    } else {
        this.vspeed = 0;
    }
}

// Código para que interactue con el escenario
this.moveSmart('suelo');

```
:::

## 1BS05: Práctica Calificada & Revisión de folder

> [!important]
> ::fluent-color:calendar-48:: **Fecha:** Clase Semana 6<br>::fluent-color:laptop-48:: **Programa:** ::streamline-flex-color:cat-2:: [CT.JS](https://ctjs.rocks/)<br>::fluent-color:clipboard-text-edit-32:: **Tarea:** Ver al final<br>::fluent-color:video-48:: **Videos:** [Lista](https://www.youtube.com/watch?v=gJCGwp2uDCU&list=PLWGY0ivGwOKIiJ6KcgmPF3eqV_TlYB0XT)<br>::fluent-color:briefcase-48:: **Recursos:** [Recursos](https://drive.google.com/drive/folders/1u-QYAtX2ifDre1PqLDUwn7RMOUXgSCwQ?usp=sharing)

Para la semana 6 deberás crear tu juegos desde 0, usando los conceptos aprendidos hasta el momento. Practica.

