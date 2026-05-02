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

**2. RM_LEVEL_1**

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

## 1BS07: Uso variables globales para manejar puntajes

> [!important]
> ::fluent-color:calendar-48:: **Fecha:** 20 al 24 de Abril<br>::fluent-color:laptop-48:: **Programa:** ::streamline-flex-color:cat-2:: [CT.JS](https://ctjs.rocks/)<br>::fluent-color:clipboard-text-edit-32:: **Tarea:** Recrea el juego en casa / Crea un diagrama del proyecto de clase<br>::fluent-color:video-48:: **Videos:** [Lista](https://www.youtube.com/watch?v=gJCGwp2uDCU&list=PLWGY0ivGwOKIiJ6KcgmPF3eqV_TlYB0XT)<br>::fluent-color:briefcase-48:: **Recursos:** [Recursos](https://drive.google.com/drive/folders/1u-QYAtX2ifDre1PqLDUwn7RMOUXgSCwQ?usp=sharing)

Ahora solo nos queda seguir completando nuestro videojuego, para ello hacemos lo siguiente:

**1. Completando el RM_WELCOME**

En el `BTN_START` que tenemos en nuestro proyecto le añadimos la línea siguiente:

::: tabs
@tab ::streamline:cursor-click:: Click
<!-- tab 1 content -->
```javascript
rooms.switch('RM_LVL_1');
this.getRoom().kill = true; //Para eliminar el Room a fin deque no consuma recursos innecesarios
```
:::

**2. Añadiendo lógica del enemigo**

2.1 Para el enemigo le añadiremos el siguiente código en su template:

::: tabs
@tab ::mingcute:sun-line:: Creation
<!-- tab 1 content -->
```javascript
this.speed = rooms.current.gameSpeed;
```
@tab ::fluent-mdl2:previous:: Frame Start
<!-- tab 2 content -->
```javascript
// Mover el enemigo hacia la izquierda
this.x -= rooms.current.gameSpeed;
// Cuando sale de la pantalla por la izquierda, eliminarlo
if (this.x < -100) {
    this.kill = true; // ct.js borra esta copia automáticamente
    score = score + 1; // Ampliar el score en 1
}
// Detectar colisión con el robot (PJ_BOT)
if (place.meet(this, this.x, this.y, 'PJ_BOT')) {
    score = 0; // Poner en 0 el score
    rooms.switch('RM_DEFEAT'); // cambiar al ROOM de game over
}
```
:::

2.2 La aparición y comportamiento del enemigo lo haremos desde los eventos del ROOM, por ende agrega eventos al ROOM y añade el código siguiente en sus respectivos eventos:

::: tabs

@tab ::mingcute:sun-line:: Room Start

<!-- tab 1 content -->
```javascript
rooms.current.gameSpeed = 5.5;  // velocidad inicial
rooms.current.score = 0;   
rooms.current.nextCactus = 120; // frames hasta el siguiente cactus
```

@tab ::fluent-mdl2:previous:: Frame Start

<!-- tab 2 content -->

```javascript
// Aumentar score cada frame
rooms.current.score += rooms.current.gameSpeed * 0.05;

// Subir velocidad progresivamente (máximo 14)
rooms.current.gameSpeed = Math.min(14, 5.5 + rooms.current.score * 0.006);

// Contar frames para el siguiente cactus
rooms.current.nextCactus -= 1;

if (rooms.current.nextCactus <= 0) {
    // Spawnear cactus al borde derecho de la pantalla
    var enemigo = templates.copy('PJ_ENEMY', camera.width + 50, 590); // ajusta Y al suelo de tu room
    enemigo.scale.x = 0.5;
    enemigo.scale.y = 0.5;

    // Espera aleatoria antes del siguiente (más corta cuanto mayor sea el score)
    const minWait = Math.max(60, 120 - rooms.current.score * 0.05);
    rooms.current.nextCactus = minWait + Math.random() * 200;
}
```
:::

2.3 Como se vio más arriba, hay una variable `score` que se debe agregar. Para ellos haz lo siguiente

- Opción1: Ir a **proyecto** -> **custom scripts** -> **Add Script** y escribir: `var score=0;`
- Opción2: Ir a **proyecto** -> **Global Variables** y crear una llamada `score`, de tipo Number y el valor en 0;

**3. Añadiendo puntaje**

1. Crea un template y ponle de nombre `TXT_SCORE`
2. Cambia el tipo de template: De `Animated Sprite` a `Text`. 
3. Agrega el siguiente código:

::: tabs

@tab ::fluent-mdl2:previous:: Frame Start
<!-- tab 2 content -->
```javascript
this.text = score.toString();
```
:::

4. Colocálo en el ROOM del nivel 1 (`RM_LVL_1`)

## 1BS08: Manejo la UI de mi videojuego

> [!important]
> ::fluent-color:calendar-48:: **Fecha:** 27 al 30 de Abril<br>::fluent-color:laptop-48:: **Programa:** ::streamline-flex-color:cat-2:: [CT.JS](https://ctjs.rocks/)<br>::fluent-color:clipboard-text-edit-32:: **Tarea:** Sin tarea<br>::fluent-color:video-48:: **Videos:** [Lista](https://www.youtube.com/watch?v=gJCGwp2uDCU&list=PLWGY0ivGwOKIiJ6KcgmPF3eqV_TlYB0XT)<br>::fluent-color:briefcase-48:: **Recursos:** [Recursos](https://drive.google.com/drive/folders/1u-QYAtX2ifDre1PqLDUwn7RMOUXgSCwQ?usp=sharing)

En ct.js, los Rooms (salas o habitaciones) no se limitan a ser simples niveles o escenarios de acción; también representan el enfoque principal y más eficiente para diseñar y gestionar la Interfaz de Usuario (UI). Al crear un Room dedicado exclusivamente a elementos interactivos como menús, paneles de inventario, pantallas de pausa o el HUD (Heads-Up Display), puedes superponerlo sobre tu escenario principal de manera independiente utilizando el sistema de anexos del motor. Esta arquitectura modular te permite separar limpiamente la lógica principal del juego de la interfaz, lo que facilita enormemente el diseño de pantallas escalables, la gestión de eventos de botones y el mantenimiento de tu proyecto sin saturar el entorno donde ocurre la acción principal.

## 1BS09: Práctica Calificada & Revisión de folder

> [!important]
> ::fluent-color:calendar-48:: **Fecha:** Semana 9<br>::fluent-color:laptop-48:: **Programa:** ::streamline-flex-color:cat-2:: [CT.JS](https://ctjs.rocks/) <br>::fluent-color:video-48:: **Video:** [Video](https://youtu.be/anmCyvQ2tpE)

Para tu práctica se te pedirá que completes nuestro juego, versión del dinosario de Google. Muestra tu proyecto al profesor para su revisión.
