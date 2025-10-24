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
> ::fluent-color:calendar-48:: **Fecha:** 20 al 24 de Octubre<br>::fluent-color:laptop-48:: **Programa:** ::logos:visual-studio-code:: ::logos:python:: [Instalar](https://www.youtube.com/watch?v=-IyA_Yvs8IQ) /  ::logos:xampp:: [Xampp](https://www.apachefriends.org/es/index.html)<br>::fluent-color:clipboard-text-edit-32:: **Tarea:** Sin tarea<br>::fluent-color:video-48:: **Videos:** [Video](https://www.youtube.com/watch?v=RgLzqIFZg8s)<br>::fluent-color:briefcase-48:: **Recursos:** [Recursos](https://drive.google.com/drive/folders/1IAVg1vC0uFupTV1WnKcwjR4tm0hwY9Hj?usp=sharing)

En esta primera clase veremos como crear una base datos simple, con una sola tabla llamada `TB_PERSON` y luego accederemos a esta mediante el conector de python. Para ello debemos seguir los pasos siguientes:

**Xampp**

1. Descargar Xampp desde su página.
2. Crear una base de datos desde phpmyadmind.

**MySQL**

1. Abrimos el control panel de Xampp.
2. Iniciamos los servicios de **Apache** y **MySQL**.
3. Vamos al navegador y accedemos a **localhost**.
4. En el menú que aparece buscamos **phpmyadmin**.
5. A la izquierda presionamos en **Nueva**.
6. Le colocamos el nombre a nuestra base de datos y damos clic en crear. 
7. Seleccionamos la base de datos que acabamos de crear en el menú de la izquierda.
8. Abrimos la pestaña **SQL**.
9. Colocamos el código siguiente:

```sql
CREATE DATABASE TB_PERSON(
  person_id INT PRIMARY KEY,
  person_name VARCHAR(255),
  person_last_name VARCHAR(255)
)
```

10. Damos clic en continuar y ya tendriamos nuestra primera base de datos y una tabla llamada **TB_PERSON**.

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
