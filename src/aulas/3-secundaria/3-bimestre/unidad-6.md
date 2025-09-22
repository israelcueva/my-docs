---
title: Unidad 6
category:
  - Aula
tag:
  - Inicio
  - 3-Secundaria
author: Pepito
icon: fluent-color:notebook-32
order: 6
---

En la continuación de las clases de JavaScript, se abordarán tres conceptos esenciales para el manejo de datos: arrays, objetos y JSON. Los arrays permiten almacenar y organizar conjuntos de elementos en una sola variable, facilitando operaciones como recorrer listas o acceder a valores específicos. Los objetos, por su parte, ofrecen una forma más estructurada de representar información mediante pares clave–valor, lo que los convierte en la base de la programación orientada a datos en JavaScript. Finalmente, se introducirá JSON (JavaScript Object Notation), un formato ligero y estándar para el intercambio de información entre aplicaciones y servidores, que se apoya en la sintaxis de objetos y arrays. Con estas herramientas, los estudiantes podrán trabajar con datos de manera más dinámica, organizada y cercana a entornos de desarrollo reales.

## 3BS06: Entiendo el uso de variables en Javascript

> [!important]
> ::fluent-color:calendar-48:: **Fecha:** 15 al 19 de Setiembre<br>::fluent-color:laptop-48:: **Programa:** ::logos:visual-studio-code:: [Visual Studio Code](https://code.visualstudio.com/)<br>::fluent-color:clipboard-text-edit-32:: **Tarea:** Completar la ficha de la semana<br>::fluent-color:video-48:: **Videos:** [Video](https://www.youtube.com/watch?v=5DaZXXbHI_U)<br>::fluent-color:briefcase-48:: **Recursos:** [Recursos](https://drive.google.com/drive/folders/1sS6GGJK9ZJz4Go2m57zzpjfSGLDMH5jn?usp=sharing)

**1. Arrays**

Los arrays se usan cuando necesitamos guardar varios valores en una sola variable. Se podría decir que es una lista ordenada de elementos. Cada elemento tiene una posición que se llama índice, y siempre comienza desde 0.

```javascript
let frutas = ["Manzana", "Pera", "Mango"];
console.log(frutas[0]); // Muestra "Manzana"
console.log(frutas[2]); // Muestra "Mango"
```

**2. Bucles**

Un bucle (o loop) es una estructura que repite instrucciones varias veces hasta que se cumple una condición. Se usan mucho para recorrer arrays.

2.1 Bucle **for**

```javascript
let colores = ["Rojo", "Verde", "Azul"];

for (let i = 0; i < colores.length; i++) {
  console.log("Color en la posición " + i + ": " + colores[i]);
}
```

2.2 for...of (más moderno y legible)

```javascript
let animales = ["Perro", "Gato", "Loro"];

for (let animal of animales) {
  console.log(animal);
}
```

2.3 for each

```javascript
let numeros = [10, 20, 30];

numeros.forEach((numero, indice) => {
  console.log("Índice: " + indice + " - Valor: " + numero);
});
```

2.4 El bucle while

```javascript
let i = 0;

while (i < 5) {
  console.log("Número: " + i);
  i++; // importante incrementar para que no sea infinito
}
```

2.5 El bucle do...while

Esta variante admite la ejecución inicial sin necesidad de que se cumpla la condición.

```javascript
let j = 0;

do {
  console.log("Número con do...while: " + j);
  j++;
} while (j < 3);
```

### Ejemplo de clase

```html title="index.html"
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Arrays y Bucles en JavaScript</title>
  <style>
    body {
      font-family: "Segoe UI", sans-serif;
      margin: 0;
      padding: 40px;
      background: linear-gradient(135deg, #f3f3f3, #e6eaf0);
      color: #333;
    }

    h2 {
      color: #0078d7;
      margin-bottom: 20px;
    }

    .card {
      background: rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(12px);
      border-radius: 12px;
      padding: 25px;
      max-width: 600px;
      margin: auto;
      box-shadow: 0 6px 20px rgba(0,0,0,0.1);
    }

    label {
      font-weight: 600;
    }

    select, button {
      margin: 10px 0;
      padding: 10px 14px;
      font-size: 16px;
      border-radius: 8px;
      border: 1px solid #ccc;
      outline: none;
      transition: 0.3s;
    }

    select:focus {
      border-color: #0078d7;
      box-shadow: 0 0 6px rgba(0, 120, 215, 0.5);
    }

    button {
      background: #0078d7;
      color: white;
      border: none;
      cursor: pointer;
      font-weight: bold;
      transition: 0.3s;
    }

    button:hover {
      background: #005a9e;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 20px;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    }

    th {
      background: #0078d7;
      color: white;
      padding: 12px;
      text-align: center;
    }

    td {
      padding: 10px;
      text-align: center;
      border-bottom: 1px solid #ddd;
    }

    tr:nth-child(even) {
      background: #f9f9f9;
    }
  </style>
</head>
<body>
  <div class="card">
    <h2>Ejemplo de Arrays y Bucles</h2>

    <label for="listas">Elige una lista:</label><br>
    <select id="listas">
      <option value="frutas">Frutas</option>
      <option value="colores">Colores</option>
      <option value="animales">Animales</option>
    </select>

    <button onclick="mostrarLista()">Mostrar Lista</button>

    <table id="tabla">
      <thead>
        <tr>
          <th>#</th>
          <th>Elemento</th>
        </tr>
      </thead>
      <tbody>
        <!-- Aquí se mostrarán los datos -->
      </tbody>
    </table>
  </div>

  <script>
    // Arrays de ejemplo
    const frutas = ["Manzana", "Banana", "Pera", "Mango", "Sandía"];
    const colores = ["Rojo", "Verde", "Azul", "Amarillo", "Negro"];
    const animales = ["Perro", "Gato", "Elefante", "Loro", "Caballo"];

    
  </script>
</body>
</html>
```

## 3BS07: Creo y edito objetos en javascript

> [!important]
> ::fluent-color:calendar-48:: **Fecha:** 22 al 26 de Setiembre<br>::fluent-color:laptop-48:: **Programa:** ::logos:visual-studio-code:: [Visual Studio Code](https://code.visualstudio.com/)<br>::fluent-color:clipboard-text-edit-32:: **Tarea:** Completar la ficha de la semana<br>::fluent-color:video-48:: **Videos:** [Video](https://www.youtube.com/watch?v=5DaZXXbHI_U)<br>::fluent-color:briefcase-48:: **Recursos:** [Recursos](https://drive.google.com/drive/folders/1sS6GGJK9ZJz4Go2m57zzpjfSGLDMH5jn?usp=sharing)

En JavaScript, los objetos se utilizan para almacenar y organizar información en pares clave–valor. Esto significa que cada dato dentro de un objeto tiene un nombre (la clave o propiedad) y un valor asociado, que puede ser un número, texto, función, arreglo u otro objeto. Los objetos son muy útiles porque permiten representar entidades del mundo real, como una persona, un auto o un producto, agrupando sus características y comportamientos

**1. Objeto básico**

```javascript
// Objeto persona
let persona = {
  nombre: "Ana",
  edad: 20,
  profesion: "Estudiante"
};

console.log(persona.nombre);   // Ana
console.log(persona["edad"]);  // 20
```

**2. Agregar y modificar propiedades**

```javascript
persona.apellido = "García";  // Agregar propiedad
persona.edad = 21;            // Modificar propiedad

console.log(persona);
```

**3. Objetos con métodos (funciones dentro de un objeto)**

```javascript
let auto = {
  marca: "Toyota",
  modelo: "Corolla",
  anio: 2020,
  encender: function() {
    console.log("El auto está encendido 🚗💨");
  }
};

auto.encender(); // Llama al método
```

**4. Objetos anidados (objetos dentro de objetos)**

```javascript
let estudiante = {
  nombre: "Luis",
  edad: 18,
  direccion: {
    ciudad: "Lima",
    distrito: "Miraflores"
  }
};

console.log(estudiante.direccion.ciudad); // Lima
```

**5. Arreglo de objetos**

```javascript
let productos = [
  { id: 1, nombre: "Laptop", precio: 2500 },
  { id: 2, nombre: "Mouse", precio: 80 },
  { id: 3, nombre: "Teclado", precio: 150 }
];

productos.forEach(p => {
  console.log(`${p.nombre} cuesta $${p.precio}`);
});
```

### Ejemplo de clase

```html title="index.html"
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Listas con Objetos en JavaScript</title>
  <style>
    body {
      font-family: "Segoe UI", sans-serif;
      margin: 0;
      padding: 40px;
      background: linear-gradient(135deg, #f3f3f3, #e6eaf0);
      color: #333;
    }

    h2 {
      color: #0078d7;
      margin-bottom: 20px;
    }

    .card {
      background: rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(12px);
      border-radius: 12px;
      padding: 25px;
      max-width: 650px;
      margin: auto;
      box-shadow: 0 6px 20px rgba(0,0,0,0.1);
    }

    label {
      font-weight: 600;
    }

    select, button {
      margin: 10px 0;
      padding: 10px 14px;
      font-size: 16px;
      border-radius: 8px;
      border: 1px solid #ccc;
      outline: none;
      transition: 0.3s;
    }

    select:focus {
      border-color: #0078d7;
      box-shadow: 0 0 6px rgba(0, 120, 215, 0.5);
    }

    button {
      background: #0078d7;
      color: white;
      border: none;
      cursor: pointer;
      font-weight: bold;
      transition: 0.3s;
    }

    button:hover {
      background: #005a9e;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 20px;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    }

    th {
      background: #0078d7;
      color: white;
      padding: 12px;
      text-align: center;
    }

    td {
      padding: 10px;
      text-align: center;
      border-bottom: 1px solid #ddd;
    }

    tr:nth-child(even) {
      background: #f9f9f9;
    }
  </style>
</head>
<body>
  <div class="card">
    <h2>Ejemplo con Objetos y Bucles</h2>

    <label for="listas">Elige una lista:</label><br>
    <select id="listas">
      <option value="frutas">Frutas</option>
      <option value="colores">Colores</option>
      <option value="animales">Animales</option>
    </select>

    <button onclick="mostrarLista()">Mostrar Lista</button>

    <table id="tabla">
      <thead>
        <tr>
          <th>#</th>
          <th>Elemento</th>
        </tr>
      </thead>
      <tbody>
        <!-- Aquí se mostrarán los datos -->
      </tbody>
    </table>
  </div>

  <script>
    // Objeto con listas
    const listas = {
      frutas: ["Manzana", "Banana", "Pera", "Mango", "Sandía"],
      colores: ["Rojo", "Verde", "Azul", "Amarillo", "Negro"],
      animales: ["Perro", "Gato", "Elefante", "Loro", "Caballo"]
    };

  
  </script>
</body>
</html>

```
