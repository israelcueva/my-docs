---
title: Unidad 2
category:
  - Aula
tag:
  - Inicio
  - 4-Secundaria
author: Pepito
icon: fluent-color:notebook-32
order: 5
---

::streamline-flex-color:cat-2:: ct.js permite desarrollar videojuegos sin necesidad de tener conocimientos avanzados de programación, ya que ofrece una interfaz intuitiva basada en elementos gráficos como escenas, objetos y animaciones. Sin embargo, también brinda la posibilidad de utilizar JavaScript para añadir lógica más compleja, lo que lo convierte en una plataforma flexible tanto para novatos como para usuarios más experimentados.

Entre sus principales ventajas se encuentran su ligereza, facilidad de uso y la capacidad de exportar juegos a múltiples plataformas, especialmente para la web. Además, incluye herramientas integradas para gestionar recursos como imágenes, sonidos y scripts, facilitando la organización del proyecto.

## 1BS06: Entiendo y configuro el sistema de colisiones en mi juego

> [!important]
> ::fluent-color:calendar-48:: **Fecha:** 13 al 17 de Abril<br>::fluent-color:laptop-48:: **Programa:** ::streamline-flex-color:cat-2:: [CT.JS](https://ctjs.rocks/)<br>::fluent-color:clipboard-text-edit-32:: **Tarea:** Recrea el juego en casa / Crea un diagrama del proyecto de clase<br>::fluent-color:video-48:: **Videos:** [Lista](https://www.youtube.com/watch?v=gJCGwp2uDCU&list=PLWGY0ivGwOKIiJ6KcgmPF3eqV_TlYB0XT)<br>::fluent-color:briefcase-48:: **Recursos:** [Recursos](https://drive.google.com/drive/folders/1u-QYAtX2ifDre1PqLDUwn7RMOUXgSCwQ?usp=sharing)

Para esta semana veremos un poco más sobre eventos y colisiones. Para ello usaremos tres room y en cada room coloca lo descrito lineas abajo.

**1. RM_WELCOME**

La famosa pantalla de bienvenida, en este Room solo tendremos un botón. Para añadirlo seguimos los pasos siguientes:

1. Descargar la textura el botón de tu elección de la galeria integrada del paquete **FREE GAME UI**.
2. Crear un template llamado `BTN_START`, cambiar el tipo de `Animated Sprite` a `Button`. 
3. Agregar un evento clic y escribir este código: 

::: tabs

@tab:active ::streamline:cursor-click:: Click

<!-- tab 1 content -->
```javascript
rooms.switch("RM_LEVEL_1");
```
:::

**2. RM_WELCOME**

En este ROOM irá nuestro personaje principal y el cactus, la única diferencia es que añadiremos un evento aidicional:

1. Nos vamos a `Add Event` y esocgemos el penúltimo: ::iconoir:copy:: Collission with a Template.
2. En la ventana que nos sale escogemos el cactus.
3. Por último en el codigo, añadimos para que el room cambie a `RM_DEFEAT`

::: tabs

@tab ::mingcute:sun-line:: Creation

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

@tab:active Collides DR_CACTUS template

<!-- tab 3 content -->
```javascript
rooms.switch("RM_DEFEAT");
```
:::

**3. RM_DEFEAT**

Será la famosa pantalla de la muerte y en ella habrán dos botones:

1. `BTN_RESTART`: Volvera a cargar el `RM_LEVEL_1`
2. `BTN_HOME`: Irá a la pantalla inicial `RM_Welcome`

