---
title: Unidad 6
category:
  - Aula
tag:
  - Inicio
  - 6-Secundaria
author: Pepito
icon: fluent-color:notebook-32
order: 6
---

En la continuación del aprendizaje de Python, abordaremos conceptos clave que permiten desarrollar programas más estructurados y eficientes. La Programación Orientada a Objetos (POO) hablaremos sobre el uso de clases y objetos para modelar situaciones del mundo real y reutilizar código de manera organizada. Por otro lado, las funciones nos facilitráan dividir un programa en bloques lógicos y reutilizables, mejorando la legibilidad y el mantenimiento. Finalmente, con la importación de librerías amplíaremos las capacidades de Python al incorporar módulos externos o propios, ofreciendo herramientas listas para resolver tareas específicas como matemáticas, gráficos, manejo de datos y mucho más.

## 3BS06: POO en Python

> [!important]
> ::fluent-color:calendar-48:: **Fecha:** 15 al 19 de Setiembre<br>::fluent-color:laptop-48:: **Programa:** ::logos:visual-studio-code:: ::logos:python:: [Instalar](https://www.youtube.com/watch?v=-IyA_Yvs8IQ)<br>::fluent-color:clipboard-text-edit-32:: **Tarea:** Completar la ficha de la semana<br>::fluent-color:video-48:: **Videos:** [Video](https://www.youtube.com/watch?v=JVNirg9qs4M)<br>::fluent-color:briefcase-48:: **Recursos:** [Recursos](https://drive.google.com/drive/folders/1IAVg1vC0uFupTV1WnKcwjR4tm0hwY9Hj?usp=sharing)

La POO (Programación Orientada a Objetos) es un paradigma de programación que organiza el código en torno a objetos, en lugar de funciones o procedimientos.
Un objeto es una entidad que combina datos (atributos) y comportamientos (métodos).

En Python, todo gira en torno a objetos: los números, cadenas, listas e incluso funciones son objetos.

**Conceptos fundamentales de POO en Python**

1. **Clase**: Es como un molde o plantilla que define cómo serán los objetos. Ejemplo: una clase Coche que describe qué atributos (color, modelo) y métodos (arrancar, frenar) tendrán los coches.
2. **Objeto**: Es una instancia (un ejemplar) creada a partir de una clase. Ejemplo: un coche específico de color rojo y modelo 2023.
3. **Atributos**: Son las variables que pertenecen a un objeto (sus características).
4. **Métodos**: Son funciones que pertenecen a un objeto (sus comportamientos).
5. **Encapsulamiento**: Ocultar detalles internos del objeto y exponer solo lo necesario. (En Python se simula usando nombres con _ o __).
6. **Herencia**: Una clase puede heredar atributos y métodos de otra. Ejemplo: la clase Moto puede heredar de la clase Vehículo.
7. **Polimorfismo**: Diferentes clases pueden definir un mismo método con comportamientos distintos. Ejemplo: tanto Perro como Gato pueden tener un método hacer_sonido(), pero cada uno lo implementa a su manera.

```python title="Ejemplo"
# Definición de una clase
class Coche:
    def __init__(self, color, modelo):
        self.color = color        # atributo
        self.modelo = modelo      # atributo

    def arrancar(self):           # método
        print(f"El coche {self.modelo} ha arrancado.")

    def detener(self):
        print(f"El coche {self.modelo} se ha detenido.")


# Crear objetos (instancias)
mi_coche = Coche("rojo", "Toyota")
otro_coche = Coche("azul", "Honda")

# Usar métodos
mi_coche.arrancar()
otro_coche.detener()
```

```python title="Ejemplo con herencia"
# Clase padre
class Animal:
    def __init__(self, nombre):
        self.nombre = nombre

    def hacer_sonido(self):
        print("Este animal hace un sonido")

# Clase hija que hereda de Animal
class Perro(Animal):
    def hacer_sonido(self):   # polimorfismo
        print(f"{self.nombre} dice: ¡Guau!")

class Gato(Animal):
    def hacer_sonido(self):   # polimorfismo
        print(f"{self.nombre} dice: ¡Miau!")


perro = Perro("Firulais")
gato = Gato("Mishito")

perro.hacer_sonido()
gato.hacer_sonido()
```

## 3BS07: Creo y uso funciones en Python

> [!important]
> ::fluent-color:calendar-48:: **Fecha:** 22 al 26 de Setiembre<br>::fluent-color:laptop-48:: **Programa:** ::logos:visual-studio-code:: ::logos:python:: [Instalar](https://www.youtube.com/watch?v=-IyA_Yvs8IQ)<br>::fluent-color:clipboard-text-edit-32:: **Tarea:** Completar la ficha de la semana<br>::fluent-color:video-48:: **Videos:** [Video](https://www.youtube.com/watch?v=nOHwv__awVU)<br>::fluent-color:briefcase-48:: **Recursos:** [Recursos](https://drive.google.com/drive/folders/1IAVg1vC0uFupTV1WnKcwjR4tm0hwY9Hj?usp=sharing)

Una función es un bloque de código que se puede reutilizar para realizar una tarea específica.
En lugar de repetir el mismo código muchas veces, lo colocamos dentro de una función y simplemente la llamamos cuando la necesitamos.

En Python, las funciones se definen con la palabra clave def.

```python title="Ejemplo básico"
def saludar():
    print("¡Hola, bienvenido a Python!")

# Llamamos a la función
saludar()
```

```python title="Funciones con parámetros"
def presentar(nombre, edad):
    print(f"Hola, me llamo {nombre} y tengo {edad} años.")

# Llamamos a la función con distintos valores
presentar("Runa", 15)
presentar("Llangsa", 12)
```

```python title="Funciones que retornan valores"
def sumar(a, b):
    return a + b

# Guardamos el resultado en una variable
resultado = sumar(5, 7)
print("La suma es:", resultado)
```