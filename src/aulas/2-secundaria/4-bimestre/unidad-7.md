---
title: Unidad 7
category:
  - Aula
tag:
  - Inicio
  - 2-Secundaria
  - WickEditor
  - Javascript
author: Pepito
icon: fluent-color:notebook-32
order: 6
---

::ph:ghost:: Wick Editor es una herramienta gratuita y en línea que permite crear animaciones interactivas y videojuegos 2D de manera sencilla. Su entorno combina lo mejor de la animación tradicional con la programación básica, lo que lo convierte en una excelente opción para aficionados.

## 4BS01: Creo una animación de balón rebotando

> [!important]
> ::fluent-color:calendar-48:: **Fecha:** 20 al 24 de Octubre<br>::fluent-color:laptop-48:: **Programa:** ::ph:ghost:: [Wick Editor](https://www.wickeditor.com/#/)<br> ::fluent-color:clipboard-text-edit-32:: **Tarea:** Sin tarea<br>::fluent-color:video-48:: **Videos:** [Video](https://www.youtube.com/@lucacodes)<br>::fluent-color:briefcase-48:: **Recursos:** [Recursos](https://drive.google.com/drive/folders/1JwTqjosoVEP21Pe63xg7g-G1pPczXET8?usp=sharing)

En esta clase veremos como hacer una animación usando código solamente para que la animación sea "procedural".

**1. Crear Objeto**

1. Creamos un **elipse**.
2. Lo seleccionamos con la herramienta **cursor**.
3. Cambiamos el ancho y el alto a 200.
4. Lo convertimos en **clip de película** desde el botón "**Make a Clip**" del **inspector de propiedades**.
5. En el inspector buscamos la sección de **scripts** y presionamos en "**Add script**".
6. Nos vamos a **Timeline** y luego escogemos **update**.
7. Allí copiamos el código siguiente:

### Código de clase

```javascript title="Update"
// Si las variables no existen, las cremos (solo la primera vez)
  if (this.velocidadX === undefined) {
    this.velocidadX = 4;
    this.velocidadY = 3;
    this.izquierda = 0;
    this.derecha = 550;
    this.techo = 0;
    this.suelo = 300;
  }

  // Mover el círculo
  this.x += this.velocidadX;
  this.y += this.velocidadY;

  // Rebote en bordes horizontales
  if (this.x < this.izquierda || this.x > this.derecha) {
    this.velocidadX *= -1;
  }

  // Rebote en bordes verticales
  if (this.y < this.techo || this.y > this.suelo) {
    this.velocidadY *= -1;
  }
```
Ahora te toca cambiar el código para que haga lo siguiente:

- Cambiar las propiedades necesarias para que la animación abarque todo el escenario.
- La pelota rebote ni bien toque el borde.
- Crear 3 pelotas más que reboten, que cada una sea de un color y tamaño distintos.

## 4BS02: Uso las propiedades de transformación

> [!important]
> ::fluent-color:calendar-48:: **Fecha:** 27 al 31 de Octubre<br>::fluent-color:laptop-48:: **Programa:** ::ph:ghost:: [Wick Editor](https://www.wickeditor.com/#/) / [Candlestickers](https://candlestickers.app/)<br> ::fluent-color:clipboard-text-edit-32:: **Tarea:** Ver al final<br>::fluent-color:video-48:: **Videos:** [Video](https://www.youtube.com/@lucacodes)<br>::fluent-color:briefcase-48:: **Recursos:** [Recursos](https://drive.google.com/drive/folders/1JwTqjosoVEP21Pe63xg7g-G1pPczXET8?usp=sharing)

En Wick Editor, las propiedades de transformación permiten modificar la forma, posición y orientación de los objetos en el escenario. Estas propiedades son fundamentales para crear animaciones y efectos visuales dinámicos. Se pueden editar directamente en el panel de propiedades o mediante código en JavaScript.

**Principales propiedades de transformación:**

- **x y**: Controlan la posición del objeto en el escenario.

```javascript
this.x = 200; //mueve el objeto 200 píxeles en el eje horizontal
this.y = 100; //lo mueve 100 píxeles hacia abajo
```

- **scaleX y scaleY**: Ajustan el tamaño del objeto.

```javascript
this.scaleX = 1.5; // agranda el ancho un 50%
this.scaleY = 0.5; // reduce la altura a la mitad
```

- **rotation**: Gira el objeto en grados (en sentido horario).

```javascript
this.rotation = 45; //lo rota 45°
```

- **opacity**: Cambia la transparencia del objeto.

```javascript
this.opacity = 0.5; // lo hace semitransparente
this.opacity = 1; // lo muestra totalmente opaco
```


- **anchorX y anchorY**: Definen el punto de referencia del objeto (por defecto, el centro).

```javascript
//fija el ancla en la esquina superior izquierda
this.anchorX = 0; 
this.anchorY = 0;
```

### Código de clase

```javascript title="update"
// Rotación continua
this.rotation += 5;

// Escalado (aumenta y disminuye el tamaño)
if (this.growing == null) this.growing = true;  // variable de control
if (this.scaleX > 1.5) this.growing = false;
if (this.scaleX < 0.5) this.growing = true;

if (this.growing) {
  this.scaleX += 0.01;
  this.scaleY += 0.01;
} else {
  this.scaleX -= 0.01;
  this.scaleY -= 0.01;
}
```

### Tarea

::: warning **Tarea**
Recrea la siguiente animación: [Enlace](https://static.wikia.nocookie.net/alldimensions/images/f/f6/ForthrightTediousChrysomelid-size_restricted.gif/revision/latest?cb=20200516110000).
Una vez terminado, presenta tu proyecto, en formato GIF, por esta URL: [Enlace](https://mariareinista-my.sharepoint.com/:f:/g/personal/d119263_mrc_edu_pe/EuwjJIwHkgBBnDFJavFewS4BfdwvJhswD48ODASxeRqWpw)
:::
