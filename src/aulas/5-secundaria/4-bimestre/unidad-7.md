---
title: Unidad 7
category:
  - Aula
tag:
  - Inicio
  - 5-Secundaria
author: Pepito
icon: fluent-color:notebook-32
order: 6
---

::devicon:mysql-wordmark:: MySQL es un sistema de gestión de bases de datos relacional de código abierto ampliamente utilizado para almacenar, organizar y administrar información de manera eficiente. Su estructura basada en tablas permite establecer relaciones entre datos, garantizando integridad, consistencia y rapidez en las consultas. Gracias a su compatibilidad con múltiples lenguajes de programación y su integración con servidores web como Apache y PHP, MySQL se ha convertido en una herramienta fundamental para el desarrollo de aplicaciones web dinámicas, sistemas empresariales y proyectos educativos. Además, su facilidad de uso, alto rendimiento y constante actualización lo posicionan como uno de los motores de base de datos más populares en todo el mundo.

## 4BS01: Creo mi primera conexión entre Python y MSQL

> [!important]
> ::fluent-color:calendar-48:: **Fecha:** 20 al 24 de Octubre<br>::fluent-color:laptop-48:: **Programa:** ::logos:visual-studio-code:: ::logos:python:: [Instalar](https://www.youtube.com/watch?v=-IyA_Yvs8IQ) /  ::logos:xampp:: [Xampp](https://www.apachefriends.org/es/index.html)<br>::fluent-color:clipboard-text-edit-32:: **Tarea:** Por colocar<br>::fluent-color:video-48:: **Videos:** [Video](https://www.youtube.com/watch?v=JVNirg9qs4M)<br>::fluent-color:briefcase-48:: **Recursos:** [Recursos](https://drive.google.com/drive/folders/1IAVg1vC0uFupTV1WnKcwjR4tm0hwY9Hj?usp=sharing)

Pasos

**Xampp**

1. Descargar Xampp desde su página.
2. Crear una base de datos desde phpmyadmind.

**Python**

1- Instala el paquete oficial que permite conectar Python con MySQL.

```bash
pip install mysql-connector-python
```

2- En tu archivo Python, importa el conector:

```python
import mysql.connector
```

3- Crea una conexión con tu base de datos MySQL usando tus credenciales:

```python
conexion = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="nombre_de_tu_base"
)
```

4- Crear un cursor para ejecutar consultas

```python
cursor = conexion.cursor()
```

5- Ejecutar la consulta

```python
cursor.execute("SHOW TABLES")

for tabla in cursor:
    print(tabla)
```

6- Cerrar conexión

```python
conexion.close()
```
