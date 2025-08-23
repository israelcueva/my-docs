---
title: Unidad 5
category:
  - Aula
tag:
  - Inicio
  - 3-Secundaria
author: Pepito
icon: fluent-color:notebook-32
order: 1
---

JavaScript es un lenguaje de programación que se utiliza principalmente para dar interactividad y dinamismo a las páginas web. Mientras que HTML se encarga de la estructura y CSS del diseño, JavaScript permite que el sitio “cobre vida”, añadiendo funciones como menús desplegables, animaciones, validación de formularios, juegos o aplicaciones completas en línea. Es uno de los lenguajes más populares en el mundo, porque se ejecuta directamente en el navegador sin necesidad de instalar programas adicionales. Además, también se usa en servidores y aplicaciones modernas, lo que lo convierte en una herramienta fundamental para aprender programación y crear proyectos innovadores en el mundo digital.

## 3BS01: Entiendo el uso de variables en Javascript

> [!important]
> ::fluent-color:calendar-48:: **Fecha:** 11 al 15 de Agosto<br>::fluent-color:laptop-48:: **Programa:** ::logos:visual-studio-code:: [Visual Studio Code](https://code.visualstudio.com/)<br>::fluent-color:clipboard-text-edit-32:: **Tarea:** Ver al final<br>::fluent-color:video-48:: **Videos:** [Video](https://www.youtube.com/watch?v=yn8nQjocX2g)<br>::fluent-color:briefcase-48:: **Recursos:** [Recursos](https://drive.google.com/drive/folders/1sS6GGJK9ZJz4Go2m57zzpjfSGLDMH5jn?usp=sharing)

Las variables son contenedores que almacenan datos. En JavaScript, puedes crear variables para guardar diferentes tipos de información como números, texto, objetos, y más.

**Declaración de Variables**

JavaScript ofrece tres formas principales de declarar variables:

`var`

```javascript
var nombre = "Juan";
var edad = 25;
```

`let`
```javascript
let nombre = "María";
let edad = 30;
```

`const`
```javascript
const PI = 3.14159;
const nombre = "Pedro";
```

**Diferencias entre var, let y const**

| Característica | var | let | const |
|----------------|-----|-----|-------|
| Scope (Alcance) | Función/Global | Bloque | Bloque |
| Redeclaración | Permitida | No permitida | No permitida |
| Reasignación | Permitida | Permitida | No permitida |
| Hoisting | Sí | Sí (pero TDZ) | Sí (pero TDZ) |

**Tipos de Datos**

JavaScript es un lenguaje de tipado dinámico, lo que significa que no necesitas especificar el tipo de dato.

**Tipos Primitivos**

**String (Cadena de texto)**
```javascript
let saludo = "Hola mundo";
let nombre = 'JavaScript';
let template = `Mi nombre es ${nombre}`;
```

**Number (Número)**
```javascript
let entero = 42;
let decimal = 3.14;
let negativo = -10;
```

**Boolean (Booleano)**
```javascript
let verdadero = true;
let falso = false;
```

**Undefined**
```javascript
let sinDefinir;
console.log(sinDefinir); // undefined
```

**Null**
```javascript
let vacio = null;
```

**Symbol (ES6+)**
```javascript
let simbolo = Symbol('descripcion');
```

**BigInt (ES2020)**
```javascript
let numeroGrande = 123456789012345678901234567890n;
```

### Ejemplo

```html title="index.html"
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <script>
        let name = "Pepito"; // [!code focus]
        let lastName = "Periquito"; // [!code focus]
        console.log(`Hola mi nombre es ${name} ${lastName}`); // [!code focus]
    </script>
</body>
</html>
```

::: warning **Tarea**
Declara  las variables nombre, apellidos, edad y sexo. Además, crea un template que muestra, mediante la consola, el mensaje: <code>Hola, soy Pepito Periquito, tengo 52 años y mi sexo es Masculino</code>
:::

## 3BS02: Hago uso de funciones para mi aplicación

> [!important]
> ::fluent-color:calendar-48:: **Fecha:** 18 al 22 de Agosto<br>::fluent-color:laptop-48:: **Programa:** ::logos:visual-studio-code:: [Visual Studio Code](https://code.visualstudio.com/)<br>::fluent-color:clipboard-text-edit-32:: **Tarea:** Completa la ficha de la semana<br>::fluent-color:video-48:: **Videos:** [Video](https://www.youtube.com/watch?v=e3EyqGnb6XM)<br>::fluent-color:briefcase-48:: **Recursos:** [Recursos](https://drive.google.com/drive/folders/1sS6GGJK9ZJz4Go2m57zzpjfSGLDMH5jn?usp=sharing)

En JavaScript, las funciones son bloques de código que nos permiten agrupar instrucciones para reutilizarlas cuando las necesitemos. En lugar de escribir las mismas líneas de código varias veces, podemos crear una función, darle un nombre y luego “llamarla” cada vez que queramos que se ejecute. Esto hace que los programas sean más organizados, fáciles de entender y de mantener. Además, las funciones pueden recibir valores de entrada llamados parámetros y devolver un resultado, lo que las convierte en una herramienta esencial para resolver problemas y construir aplicaciones dinámicas en la web.

**1. Función básica**

```javascript
// Definición de una función
function saludar() {
  console.log("¡Hola, bienvenido a JavaScript!");
}

// Llamada a la función
saludar();
```

**2. Función con parámetros**

```javascript
function saludarPersona(nombre) {
  console.log("Hola " + nombre + ", ¿cómo estás?");
}

// Llamadas a la función
saludarPersona("Ana");
saludarPersona("Luis");
```

**3. Función que devuelve un valor**

```javascript
function sumar(a, b) {
  return a + b;
}

// Usamos la función y guardamos el resultado
let resultado = sumar(5, 7);
console.log("La suma es: " + resultado);
```

**4. Función flecha (más moderna)**

```javascript
// Forma corta de escribir funciones
const multiplicar = (x, y) => x * y;

console.log("El producto es: " + multiplicar(4, 6));
```

### Ejemplo

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Calculadora Fluent</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #dfe9f3 0%, #ffffff 100%);
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
    }

    .calculator {
      background: rgba(255, 255, 255, 0.7);
      backdrop-filter: blur(10px);
      border-radius: 20px;
      padding: 30px;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
      text-align: center;
      width: 350px;
    }

    h1 {
      font-weight: 600;
      color: #2c3e50;
      margin-bottom: 20px;
    }

    input {
      width: 120px;
      padding: 10px;
      margin: 10px;
      border: none;
      border-radius: 10px;
      text-align: center;
      font-size: 16px;
      background: rgba(240, 240, 240, 0.9);
      box-shadow: inset 1px 1px 3px rgba(0,0,0,0.1);
    }

    .buttons {
      margin-top: 15px;
    }

    button {
      padding: 12px 18px;
      margin: 8px;
      border: none;
      border-radius: 12px;
      font-size: 15px;
      font-weight: 500;
      background: #0078D7;
      color: white;
      cursor: pointer;
      transition: all 0.2s ease;
      box-shadow: 0 3px 8px rgba(0,0,0,0.2);
    }

    button:hover {
      background: #005a9e;
      transform: translateY(-2px);
      box-shadow: 0 5px 12px rgba(0,0,0,0.25);
    }

    #resultado {
      margin-top: 25px;
      font-size: 20px;
      font-weight: bold;
      color: #1b1b1b;
      background: rgba(255, 255, 255, 0.5);
      padding: 12px;
      border-radius: 12px;
      box-shadow: inset 1px 1px 4px rgba(0,0,0,0.1);
    }
  </style>
</head>
<body>
  <div class="calculator">
    <h1>Calculadora</h1>
    
    <input type="number" id="num1" placeholder="Número 1">
    <input type="number" id="num2" placeholder="Número 2">
    <br>

    <div class="buttons">
      <button onclick="sumar(getVal('num1'), getVal('num2'))">+</button>
      <button onclick="restar(getVal('num1'), getVal('num2'))">-</button>
      <button onclick="multiplicar(getVal('num1'), getVal('num2'))">*</button>
      <button onclick="dividir(getVal('num1'), getVal('num2'))">/</button>
    </div>
    
    <div id="resultado">Resultado: </div>
  </div>

  <script>
   
  </script>
</body>
</html>
```

## 3BS03: Uso de condicionales para mejorar mi aplicación

> [!important]
> ::fluent-color:calendar-48:: **Fecha:** 18 al 22 de Agosto<br>::fluent-color:laptop-48:: **Programa:** ::logos:visual-studio-code:: [Visual Studio Code](https://code.visualstudio.com/)<br>::fluent-color:clipboard-text-edit-32:: **Tarea:** Completa la ficha de la semana<br>::fluent-color:video-48:: **Videos:** [Video](https://www.youtube.com/watch?v=0FaErrXOFRE)<br>::fluent-color:briefcase-48:: **Recursos:** [Recursos](https://drive.google.com/drive/folders/1sS6GGJK9ZJz4Go2m57zzpjfSGLDMH5jn?usp=sharing)


**1. If / Else**

---

En JavaScript, la estructura if...else se utiliza para que un programa tome decisiones dependiendo de si una condición es verdadera o falsa.
Es la forma más común de usar condicionales en la programación.

La estructura básica es:

```javascript
if (condicion) {
  // Código que se ejecuta si la condición es verdadera
} else {
  // Código que se ejecuta si la condición es falsa
}
```
También se pueden agregar más condiciones con else if:

```javascript
if (condicion1) {
  // Se ejecuta si la condición1 es verdadera
} else if (condicion2) {
  // Se ejecuta si la condición2 es verdadera
} else {
  // Se ejecuta si ninguna condición anterior fue verdadera
}
```

**Ejemplo práctico**

```javascript
let numero = 5;

if (numero > 10) {
  console.log("El número es mayor que 10");
} else if (numero === 10) {
  console.log("El número es igual a 10");
} else {
  console.log("El número es menor que 10");
}
```
En este ejemplo:

- Si numero es mayor que 10 → muestra ``El número es mayor que 10``.
- Si numero es igual a 10 → muestra ``El número es igual a 10``.
- Si no cumple ninguna de las anteriores → muestra ``El número es menor que 10``.


**2. Switch / Case**

---

En JavaScript, el switch es una estructura de control que se utiliza cuando necesitamos tomar decisiones entre varias opciones posibles.
Funciona de manera similar a una serie de if...else if...else, pero su sintaxis es más ordenada y clara cuando hay muchos casos distintos a evaluar.

La estructura básica es:

```javascript
switch (expresion) {
  case valor1:
    // Código si expresion === valor1
    break;
  case valor2:
    // Código si expresion === valor2
    break;
  case valor3:
    // Código si expresion === valor3
    break;
  default:
    // Código si ninguno de los casos anteriores coincide
}
```

**Explicación:**

- **expresion**: es la variable o valor que queremos evaluar.
- **case valorX**: representa cada posible opción.
- **break**: detiene la ejecución del switch para que no se ejecuten los demás casos.
- **default**: se ejecuta si ningún caso coincide (es como el else).

```javascript
let dia = "lunes";
switch (dia) {
  case "lunes":
    console.log("Inicio de semana");
    break;
  case "viernes":
    console.log("Casi fin de semana");
    break;
  case "sábado":
  case "domingo":
    console.log("Es fin de semana");
    break;
  default:
    console.log("Es un día normal");
}
```

**En este ejemplo:**

- Si dia es "lunes", mostrará `Inicio de semana`.
- Si dia es "viernes", mostrará ``Casi fin de semana``.
- Si dia es "sábado" o "domingo", mostrará ``Es fin de semana``.
- Para cualquier otro valor, ejecutará el default.

### Ejemplo

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Calculadora con Switch</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #dfe9f3 0%, #ffffff 100%);
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
    }

    .calculator {
      background: rgba(255, 255, 255, 0.7);
      backdrop-filter: blur(10px);
      border-radius: 20px;
      padding: 30px;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
      text-align: center;
      width: 350px;
    }

    h1 {
      font-weight: 600;
      color: #2c3e50;
      margin-bottom: 20px;
    }

    input, select {
      width: 120px;
      padding: 10px;
      margin: 10px;
      border: none;
      border-radius: 10px;
      text-align: center;
      font-size: 16px;
      background: rgba(240, 240, 240, 0.9);
      box-shadow: inset 1px 1px 3px rgba(0,0,0,0.1);
    }

    .buttons {
      margin-top: 15px;
    }

    button {
      padding: 12px 18px;
      margin: 8px;
      border: none;
      border-radius: 12px;
      font-size: 15px;
      font-weight: 500;
      background: #0078D7;
      color: white;
      cursor: pointer;
      transition: all 0.2s ease;
      box-shadow: 0 3px 8px rgba(0,0,0,0.2);
    }

    button:hover {
      background: #005a9e;
      transform: translateY(-2px);
      box-shadow: 0 5px 12px rgba(0,0,0,0.25);
    }

    #resultado {
      margin-top: 25px;
      font-size: 20px;
      font-weight: bold;
      color: #1b1b1b;
      background: rgba(255, 255, 255, 0.5);
      padding: 12px;
      border-radius: 12px;
      box-shadow: inset 1px 1px 4px rgba(0,0,0,0.1);
    }
  </style>
</head>
<body>
  <div class="calculator">
    <h1>Calculadora Switch</h1>
    
    <input type="number" id="num1" placeholder="Número 1">
    <input type="number" id="num2" placeholder="Número 2">
    <br>

    <select id="operacion">
      <option value="sumar">Sumar</option>
      <option value="restar">Restar</option>
      <option value="multiplicar">Multiplicar</option>
      <option value="dividir">Dividir</option>
    </select>

    <div class="buttons">
      <button onclick="calcular()">Calcular</button>
    </div>
    
    <div id="resultado">Resultado: </div>
  </div>

  <script>
   
  </script>
</body>
</html>

```