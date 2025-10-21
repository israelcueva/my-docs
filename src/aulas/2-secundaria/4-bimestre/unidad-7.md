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
> ::fluent-color:calendar-48:: **Fecha:** 20 al 24 de Octubre<br>::fluent-color:laptop-48:: **Programa:** ::ph:ghost:: [Wick Editor](https://www.wickeditor.com/#/)<br> ::fluent-color:clipboard-text-edit-32:: **Tarea:** Ver al final<br>::fluent-color:video-48:: **Videos:** [Video](https://www.youtube.com/@lucacodes)<br>::fluent-color:briefcase-48:: **Recursos:** [Recursos](https://drive.google.com/drive/folders/1JwTqjosoVEP21Pe63xg7g-G1pPczXET8?usp=sharing)

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
- Crear 3 pelotas más que reboten, que cada una sea de un color distinto.

::: warning **Tarea**
Mediante código, crea una animación de burbujas, puedes inspirarte en este famoso [protector de pantalla](https://www.youtube.com/watch?v=zbLgoXkseY0). Presentar proyecto en clase.
:::
