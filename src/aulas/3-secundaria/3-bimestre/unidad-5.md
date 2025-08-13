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

## 1BS01: Entiendo el uso de variables en Javascript

> [!note]
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


### Tarea

Declara  las variables nombre, apellidos, edad y sexo. Además, crea un template que muestra, mediante la consola, el mensaje: <code>Hola, soy Pepito Periquito, tengo 52 años y mi sexo es Masculino</code>

