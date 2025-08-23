---
title: Unidad 5
category:
  - Aula
tag:
  - Inicio
  - 5-Secundaria
author: Pepito
icon: fluent-color:notebook-32
order: 5
---

## 3BS01: Comprendo el ecosistema de desarrollo en Python

> [!important]
> ::fluent-color:calendar-48:: **Fecha:** 11 al 15 de Agosto<br>::fluent-color:laptop-48:: **Programa:** ::logos:visual-studio-code:: ::logos:python:: [Instalar](https://www.youtube.com/watch?v=-IyA_Yvs8IQ)<br>::fluent-color:clipboard-text-edit-32:: **Tarea:** Ver al final<br>::fluent-color:video-48:: **Videos:** [Video](https://www.youtube.com/watch?v=numQzIgpOo0)<br>::fluent-color:briefcase-48:: **Recursos:** [Recursos](https://drive.google.com/drive/folders/1IAVg1vC0uFupTV1WnKcwjR4tm0hwY9Hj?usp=sharing)

En Python, una variable es un espacio de memoria donde se almacena un valor que puede ser utilizado y modificado durante la ejecución de un programa. A diferencia de otros lenguajes, no es necesario declarar el tipo de dato de una variable, ya que Python lo asigna automáticamente según el valor que se le otorgue, lo que lo hace más flexible y sencillo de usar. Las variables permiten guardar información como números, textos o listas, y se crean asignando un nombre seguido del signo igual (=) y el valor correspondiente. Su uso es fundamental para estructurar y manipular datos en cualquier programa.

```python
# Variable numérica entera
edad = 25

# Variable numérica decimal (float)
altura = 1.75

# Variable de texto (string)
nombre = "María"

# Variable booleana
es_estudiante = True

# Variable tipo lista
colores = ["rojo", "verde", "azul"]

# Variable tipo diccionario
persona = {
    "nombre": "Carlos",
    "edad": 30,
    "profesion": "Ingeniero"
}

# Mostrar el contenido de las variables
print(nombre)
print(edad)
print(altura)
print(es_estudiante)
print(colores)
print(persona)

```

### Ejemplo de clase

```python title="main.py"
nombres = "Pepito"
apellidos = "Periquito"
edad = 80
print(f"Mi nombre es {nombre} {apellidos} y tengo {edad} años.")
```

::: warning **Tarea**
Busca un cheatsheet de Python, imprímelo y adjúntalo en tu folder.
:::



## 3BS02: Entiendo el uso de variables en Python

> [!important]
> ::fluent-color:calendar-48:: **Fecha:** 11 al 15 de Agosto<br>::fluent-color:laptop-48:: **Programa:** ::logos:visual-studio-code:: ::logos:python:: [Instalar](https://www.youtube.com/watch?v=-IyA_Yvs8IQ)<br>::fluent-color:clipboard-text-edit-32:: **Tarea:** Completa la ficha de la semana<br>::fluent-color:video-48:: **Videos:** [Video](https://www.youtube.com/watch?v=numQzIgpOo0)<br>::fluent-color:briefcase-48:: **Recursos:** [Recursos](https://drive.google.com/drive/folders/1IAVg1vC0uFupTV1WnKcwjR4tm0hwY9Hj?usp=sharing)

En programación, una variable es un espacio de memoria donde se guarda un dato que puede cambiar durante la ejecución del programa. En Python, las variables se crean simplemente al asignarles un valor, sin necesidad de declarar su tipo previamente, ya que el lenguaje detecta automáticamente si es un número, un texto, un valor lógico, etc.

Por ejemplo:

```python
# Ejemplos de variables en Python
nombre = "Runa"      # una cadena de texto (str)
edad = 12            # un número entero (int)
altura = 1.55        # un número decimal (float)
es_estudiante = True # un valor lógico (bool)

print(nombre, edad, altura, es_estudiante)
```

En este código:

- nombre guarda un **texto**.
- edad guarda un **entero**.
- altura guarda un **decimal**.
- es_estudiante guarda un **booleano** (verdadero o falso).

Las variables hacen posible que los programas sean dinámicos y flexibles, ya que nos permiten trabajar con datos que cambian según la situación (por ejemplo: la edad de un usuario, el resultado de una suma o una respuesta ingresada por teclado).

Más ejemplos:

```python
# Números enteros
edad = 25
cantidad_grande = 10**12   # número muy grande (potencias)

# Números decimales
pi = 3.14159
gravedad = 9.81

# Números complejos
z = 3 + 5j
z_conjugado = z.conjugate()

# Cadenas de texto (str)
nombre = "Runa"
descripcion = f"Hola, soy {nombre}, tengo {edad} años."

# Booleanos
es_estudiante = True
tiene_carro = False

# Listas (ordenadas y mutables)
frutas = ["manzana", "plátano", "cereza"]
frutas.append("kiwi")
numeros = [n**2 for n in range(5)]  # lista por comprensión

# Tuplas (ordenadas e inmutables)
coordenada = (10, 20)
rgb = (255, 128, 64)

# Conjuntos (no ordenados, sin duplicados)
colores = {"rojo", "verde", "azul"}
colores.add("amarillo")

# Diccionarios (clave: valor)
persona = {
    "nombre": "Llangsa",
    "edad": 12,
    "hobbies": ["correr", "pintar"],
    "activo": True
}

# None (ausencia de valor)
variable_nula = None

# Conversión de tipos
numero_texto = "123"
convertido = int(numero_texto)  # de str → int
```

## 3BS03: Añado condicionales a mi código

> [!important]
> ::fluent-color:calendar-48:: **Fecha:** 25 al 29 de Agosto<br>::fluent-color:laptop-48:: **Programa:** ::logos:visual-studio-code:: ::logos:python:: [Instalar](https://www.youtube.com/watch?v=-IyA_Yvs8IQ)<br>::fluent-color:clipboard-text-edit-32:: **Tarea:** Completa la ficha de la semana<br>::fluent-color:video-48:: **Videos:** [Video](https://www.youtube.com/watch?v=-kFBwApYVtA)<br>::fluent-color:briefcase-48:: **Recursos:** [Recursos](https://drive.google.com/drive/folders/1IAVg1vC0uFupTV1WnKcwjR4tm0hwY9Hj?usp=sharing)

En Python, los condicionales permiten que un programa tome decisiones dependiendo de si una condición es verdadera o falsa. Esto es fundamental para controlar el flujo del código y lograr que responda de distintas formas según la situación.

La estructura básica se construye con la palabra clave if, que evalúa una condición. Si esta se cumple, se ejecuta el bloque de instrucciones correspondiente. Si no se cumple, se puede usar else para indicar qué hacer en caso contrario. Además, con elif (abreviatura de else if) es posible evaluar múltiples condiciones de manera secuencial.

En pocas palabras, los condicionales ayudan a que un programa no sea lineal, sino que pueda tomar decisiones inteligentes.

**Ejemplo**

```python
edad = 18

if edad >= 18:
    print("Eres mayor de edad.")
elif edad >= 13:
    print("Eres adolescente.")
else:
    print("Eres niño.")

```