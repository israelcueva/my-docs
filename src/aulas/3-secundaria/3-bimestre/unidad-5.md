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

El uso de formas en Photoshop es una herramienta esencial para diseñadores gráficos, ilustradores y creativos visuales. A través de formas predeterminadas —como rectángulos, círculos, líneas o polígonos— o personalizadas con la herramienta Pluma, es posible construir composiciones precisas, limpias y visualmente atractivas. Estas formas pueden combinarse, editarse y transformarse fácilmente, lo que permite crear desde botones para interfaces web hasta ilustraciones complejas. Además, se pueden aplicar estilos, degradados, trazos y máscaras, lo que convierte a las formas en elementos versátiles para cualquier proyecto gráfico.

## Variables en JavaScript

Las variables son contenedores que almacenan datos. En JavaScript, puedes crear variables para guardar diferentes tipos de información como números, texto, objetos, y más.

### Declaración de Variables

JavaScript ofrece tres formas principales de declarar variables:

#### 1. `var` (Forma tradicional)
```javascript
var nombre = "Juan";
var edad = 25;
```

#### 2. `let` (Recomendado - ES6+)
```javascript
let nombre = "María";
let edad = 30;
```

#### 3. `const` (Para valores constantes)
```javascript
const PI = 3.14159;
const nombre = "Pedro";
```

### Diferencias entre var, let y const

| Característica | var | let | const |
|----------------|-----|-----|-------|
| Scope (Alcance) | Función/Global | Bloque | Bloque |
| Redeclaración | Permitida | No permitida | No permitida |
| Reasignación | Permitida | Permitida | No permitida |
| Hoisting | Sí | Sí (pero TDZ) | Sí (pero TDZ) |

### Tipos de Datos

JavaScript es un lenguaje de tipado dinámico, lo que significa que no necesitas especificar el tipo de dato.

#### Tipos Primitivos

**String (Cadena de texto)**
```javascript
let saludo = "Hola mundo";
let nombre = 'JavaScript';
let template = `Mi nombre es ${nombre}`;
```

**Number (Número)**
```javascript title="hOLA.JS" ::icon =16 /red::
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


### Tarea

Crea un paisaje usando formas básicas. Toma captura a la pantalla de ::simple-icons:photopea /#18a497:: [Photopea](https://www.photopea.com/) / ::devicon:photoshop:: Photoshop y adjúntalo a tu folder.


