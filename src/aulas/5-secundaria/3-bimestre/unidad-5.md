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

El desarrollo de aplicaciones con Python se ha vuelto muy popular gracias a que este lenguaje es sencillo de aprender, potente y versátil. Con Python se pueden crear distintos tipos de aplicaciones: desde programas de escritorio usando librerías como Tkinter o PyQt, aplicaciones web con frameworks como Django o Flask, hasta apps con inteligencia artificial, análisis de datos y automatización de procesos. Además, existen herramientas como Kivy o BeeWare que permiten desarrollar aplicaciones móviles multiplataforma. Su amplia comunidad y gran cantidad de librerías facilitan el proceso, lo que convierte a Python en una excelente opción tanto para principiantes como para desarrolladores avanzados.

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
### Ejemplos de clase

```python
from datetime import datetime

edad_texto = input("¿Cuál es tu edad? ")
edad = int(edad_texto)

year = datetime.now().year
years_left = 100 - edad
result = year + years_left

print(f"Tienes {edad} años y cumplirás 100 en el año {result}.")
```

```python
estudiante = {
    "nombre": "Runa",
    "notas": [15, 12, 18, 10],
    "activo": True
}

promedio = sum(estudiante["notas"]) / len(estudiante["notas"])

print(f"El promedio de {estudiante['nombre']} es {promedio:.2f}")

if promedio >= 11:
    print("✅ Aprobado")
else:
    print("❌ Desaprobado")
```

```python
palabra1 = input("Escribe la primera palabra: ").lower()
palabra2 = input("Escribe la segunda palabra: ").lower()

set1 = set(palabra1)
set2 = set(palabra2)

comunes = set1 & set2
unicas1 = set1 - set2
unicas2 = set2 - set1

print(f"Letras comunes: {comunes}")
print(f"Letras únicas en '{palabra1}': {unicas1}")
print(f"Letras únicas en '{palabra2}': {unicas2}")

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

### Ejemplos de clase

```python
from datetime import datetime

edad_texto = input("¿Cuál es tu edad? ")

if edad_texto.isdigit():   # Verifica que el usuario solo ingresó números
    edad = int(edad_texto)
    if edad > 0:
        año_actual = datetime.now().year
        año_cumplir_100 = año_actual + (100 - edad)
        print(f"Tienes {edad} años y cumplirás 100 en el año {año_cumplir_100}.")
    else:
        print("❌ La edad debe ser mayor que 0.")
else:
    print("❌ Por favor ingresa un número válido.")
```

```python
nombre = input("Nombre del estudiante: ")
nota1 = float(input("Primera nota: "))
nota2 = float(input("Segunda nota: "))
nota3 = float(input("Tercera nota: "))

promedio = (nota1 + nota2 + nota3) / 3

if promedio >= 17:
    print(f"{nombre} tiene un promedio de {promedio:.2f} → 🏆 Excelente")
elif promedio >= 11:
    print(f"{nombre} tiene un promedio de {promedio:.2f} → ✅ Aprobado")
else:
    print(f"{nombre} tiene un promedio de {promedio:.2f} → ❌ Desaprobado")
```

```python
palabra1 = input("Escribe la primera palabra: ").lower()
palabra2 = input("Escribe la segunda palabra: ").lower()

if len(palabra1) > len(palabra2):
    print("La primera palabra es más larga.")
elif len(palabra2) > len(palabra1):
    print("La segunda palabra es más larga.")
else:
    print("Ambas palabras tienen la misma longitud.")

if palabra1 == palabra2:
    print("✅ Ambas palabras son iguales.")
else:
    print("❌ Las palabras son diferentes.")
```

## 3BS04: Hago uso de bucles para iterar instrucciones

> [!important]
> ::fluent-color:calendar-48:: **Fecha:** 01 al 05 de Setiembre<br>::fluent-color:laptop-48:: **Programa:** ::logos:visual-studio-code:: ::logos:python:: [Instalar](https://www.youtube.com/watch?v=-IyA_Yvs8IQ)<br>::fluent-color:clipboard-text-edit-32:: **Tarea:** Sin tarea<br>::fluent-color:video-48:: **Videos:** [Video](https://www.youtube.com/watch?v=abKLLfMn-pI)<br>::fluent-color:briefcase-48:: **Recursos:** [Recursos](https://drive.google.com/drive/folders/1IAVg1vC0uFupTV1WnKcwjR4tm0hwY9Hj?usp=sharing)

En Python, los bucles son estructuras que permiten ejecutar un bloque de código varias veces de manera repetitiva, lo que ahorra tiempo y evita escribir instrucciones repetidas. Existen principalmente dos tipos: el bucle for, que se utiliza cuando sabemos de antemano cuántas veces queremos repetir una acción (por ejemplo, recorrer una lista o un rango de números), y el bucle while, que se ejecuta mientras se cumpla una condición lógica. Gracias a los bucles podemos automatizar tareas como contar, procesar datos o repetir cálculos, lo que los convierte en una herramienta esencial en la programación.

**Buble for**

```python
# Ejemplo: imprimir los números del 1 al 5
for i in range(1, 6):
    print("Número:", i)
```

**Bucle while**

```python
# Ejemplo: contar hasta 5 con while
contador = 1
while contador <= 5:
    print("Contador:", contador)
    contador += 1   # aumenta el valor en 1 cada vez
```

**Buble con condicionales**

```python
# Ejemplo: mostrar solo los números pares entre 1 y 10
for i in range(1, 11):
    if i % 2 == 0:
        print(i, "es par")
```

### Ejemplos de clase

```python
from datetime import datetime

while True:
    edad_texto = input("¿Cuál es tu edad? ")
    
    if edad_texto.isdigit():
        edad = int(edad_texto)
        if edad > 0:
            year = datetime.now().year
            resultado = year + (100 - edad)
            print(f"Tienes {edad} años y cumplirás 100 en el año {resultado}.")
            break  # termina el bucle si ya está correcto
        else:
            print("La edad debe ser mayor que 0.")
    else:
        print("Por favor, ingresa un número válido.")
```
```python
cantidad = int(input("¿Cuántos estudiantes vas a registrar? "))

for i in range(cantidad):
    print(f"\nEstudiante {i+1}:")
    nombre = input("Nombre del estudiante: ")
    nota1 = float(input("Primera nota: "))
    nota2 = float(input("Segunda nota: "))
    nota3 = float(input("Tercera nota: "))

    promedio = (nota1 + nota2 + nota3) / 3

    if promedio >= 17:
        print(f"{nombre} tiene un promedio de {promedio:.2f} → Excelente")
    elif promedio >= 11:
        print(f"{nombre} tiene un promedio de {promedio:.2f} → Aprobado")
    else:
        print(f"{nombre} tiene un promedio de {promedio:.2f} → Desaprobado")
```
```python
veces = int(input("¿Cuántas comparaciones de palabras quieres hacer? "))

for i in range(veces):
    print(f"\nComparación {i+1}:")
    palabra1 = input("Escribe la primera palabra: ").lower()
    palabra2 = input("Escribe la segunda palabra: ").lower()

    if len(palabra1) > len(palabra2):
        print("La primera palabra es más larga.")
    elif len(palabra2) > len(palabra1):
        print("La segunda palabra es más larga.")
    else:
        print("Ambas palabras tienen la misma longitud.")

    if palabra1 == palabra2:
        print("Ambas palabras son iguales.")
    else:
        print("Las palabras son diferentes.")
```
## 3BS05: Practica Calificada - Revisión de Folder

> [!caution]
> ::fluent-color:calendar-48:: **Fecha Límite:** Semana 6<br>::fluent-color:laptop-48:: **Programa:** ::logos:visual-studio-code:: ::logos:python:: [Instalar](https://www.youtube.com/watch?v=-IyA_Yvs8IQ)

Prepara el glosario con las palabras y todas las funciones usadas en clase. En la semana 6 se te haran preguntas respecto a ese glosario.