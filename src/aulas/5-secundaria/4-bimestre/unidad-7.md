---
title: Unidad 7
category:
  - Aula
tag:
  - Inicio
  - 5-Secundaria
author: Pepito
icon: fluent-color:notebook-32
order: 1
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
CREATE TABLE TB_PERSON(
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

## 4BS02: Muestro una tabla usando SELECT

> [!important]
> ::fluent-color:calendar-48:: **Fecha:** 20 al 24 de Octubre<br>::fluent-color:laptop-48:: **Programa:** ::logos:visual-studio-code:: ::logos:python:: [Instalar](https://www.youtube.com/watch?v=-IyA_Yvs8IQ) /  ::logos:xampp:: [Xampp](https://www.apachefriends.org/es/index.html)<br>::fluent-color:clipboard-text-edit-32:: **Tarea:** Ver al final<br>::fluent-color:video-48:: **Videos:** [Video](https://www.youtube.com/watch?v=RgLzqIFZg8s)<br>::fluent-color:briefcase-48:: **Recursos:** [Recursos](https://drive.google.com/drive/folders/1IAVg1vC0uFupTV1WnKcwjR4tm0hwY9Hj?usp=sharing)

Esta semana veremos como usar otro comando de Mysql llamado SELECT, que basicamente nos permite seleccionar datos en base a un criterio o múltiples.

Antes de empezar necesitamos agregar nuevos datos a la tabla creada anteriormente. Por ende, ve a **phpmyadmin** y ejecuta el código SQL siguiente, de paso añade tus nombres y apellidos completos.

```sql
INSERT INTO TB_PERSON (person_id, person_name, person_last_name) VALUES
(1, 'Luis Alberto', 'García Torres'),
(2, 'María Fernanda', 'Ramírez López'),
(3, 'Juan Carlos', 'Vásquez Rojas'),
(4, 'Ana Lucía', 'Flores Delgado'),
(5, 'Carlos Eduardo', 'Mendoza Salazar'),
(6, 'Lucía Isabel', 'Paredes Quispe'),
(7, 'Jorge Antonio', 'Campos Huamán'),
(8, 'Elena Sofía', 'Chávez Gutiérrez'),
(9, 'Miguel Ángel', 'Huerta Castillo'),
(10, 'Rosa María', 'Sánchez Palomino');
```

Ahora que nuestra tabla `TB_PERSON` esta creada y tiene datos podemos ejecutar el siguiente código de python:

```python
import mysql.connector

# Conexión a MySQL
conn = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="nombre_de_tu_base" 
)

cursor = conn.cursor()

# Mostrar registros
print("=== LISTADO DE PERSONAS ===")
cursor.execute("SELECT * FROM TB_PERSON")
rows = cursor.fetchall()

for row in rows:
    print(f"ID: {row[0]} | Nombre: {row[1]} | Apellidos: {row[2]}")

# Cerrar conexión
cursor.close()
conn.close()
```

::: warning **Tarea**
Revisa la documentación de [SELECT](https://www.w3schools.com/mysql/mysql_select.asp) y [WHERE](https://www.w3schools.com/mysql/mysql_where.asp) que en clase se te haran preguntas.
:::

## 4BS03: Diseño un formulario para agregar registros a mi tabla

> [!important]
> ::fluent-color:calendar-48:: **Fecha:** 03 al 07 de Noviembre<br>::fluent-color:laptop-48:: **Programa:** ::logos:visual-studio-code:: ::logos:python:: [Instalar](https://www.youtube.com/watch?v=-IyA_Yvs8IQ) /  ::logos:xampp:: [Xampp](https://www.apachefriends.org/es/index.html)<br>::fluent-color:clipboard-text-edit-32:: **Tarea:** Ver al final<br>::fluent-color:video-48:: **Videos:** [Video](https://www.youtube.com/watch?v=RgLzqIFZg8s)<br>::fluent-color:briefcase-48:: **Recursos:** [Recursos](https://drive.google.com/drive/folders/1IAVg1vC0uFupTV1WnKcwjR4tm0hwY9Hj?usp=sharing)

Esta semana veremos como crear una interfaz amigable para poder insertar datos en una base de datos MYSQL, para poder

### Código de clase

```python title="main.py"
import tkinter as tk
from tkinter import ttk, messagebox
import mysql.connector
from mysql.connector import Error

class PersonForm:
    def __init__(self, root):
        self.root = root
        self.root.title("Registro de Personas")
        self.root.geometry("500x400")
        self.root.resizable(False, False)
        
        # Crear interfaz
        self.create_widgets()
        
    def connect_db(self):
        """Conectar a la base de datos MySQL"""
        try:
            connection = mysql.connector.connect(
                host='localhost',
                database='tu_base_datos',  # Cambia esto
                user='tu_usuario',          # Cambia esto
                password='tu_contraseña'    # Cambia esto
            )
            return connection
        except Error as e:
            messagebox.showerror("Error de Conexión", f"Error al conectar con MySQL: {e}")
            return None
    
    def create_widgets(self):
        """Crear los widgets de la interfaz"""
        # Frame principal
        main_frame = ttk.Frame(self.root, padding="20")
        main_frame.grid(row=0, column=0, sticky=(tk.W, tk.E, tk.N, tk.S))
        
        # Título
        title_label = ttk.Label(main_frame, text="Formulario de Registro de Personas", 
                               font=('Arial', 14, 'bold'))
        title_label.grid(row=0, column=0, columnspan=2, pady=(0, 20))
        
        # Campo ID
        ttk.Label(main_frame, text="ID:", font=('Arial', 10)).grid(row=1, column=0, sticky=tk.W, pady=5)
        self.id_entry = ttk.Entry(main_frame, width=30)
        self.id_entry.grid(row=1, column=1, pady=5, padx=(10, 0))
        
        # Campo Nombre
        ttk.Label(main_frame, text="Nombre:", font=('Arial', 10)).grid(row=2, column=0, sticky=tk.W, pady=5)
        self.name_entry = ttk.Entry(main_frame, width=30)
        self.name_entry.grid(row=2, column=1, pady=5, padx=(10, 0))
        
        # Campo Apellido
        ttk.Label(main_frame, text="Apellido:", font=('Arial', 10)).grid(row=3, column=0, sticky=tk.W, pady=5)
        self.lastname_entry = ttk.Entry(main_frame, width=30)
        self.lastname_entry.grid(row=3, column=1, pady=5, padx=(10, 0))
        
        # Frame para botones
        button_frame = ttk.Frame(main_frame)
        button_frame.grid(row=4, column=0, columnspan=2, pady=20)
        
        # Botones
        ttk.Button(button_frame, text="Guardar", command=self.save_person, width=15).grid(row=0, column=0, padx=5)
        ttk.Button(button_frame, text="Limpiar", command=self.clear_fields, width=15).grid(row=0, column=1, padx=5)
        ttk.Button(button_frame, text="Buscar", command=self.search_person, width=15).grid(row=0, column=2, padx=5)
        
        # Frame para la tabla
        table_frame = ttk.Frame(main_frame)
        table_frame.grid(row=5, column=0, columnspan=2, pady=10)
        
        # Scrollbar
        scrollbar = ttk.Scrollbar(table_frame)
        scrollbar.pack(side=tk.RIGHT, fill=tk.Y)
        
        # Treeview para mostrar datos
        self.tree = ttk.Treeview(table_frame, columns=('ID', 'Nombre', 'Apellido'), 
                                 show='headings', height=6, yscrollcommand=scrollbar.set)
        scrollbar.config(command=self.tree.yview)
        
        # Configurar columnas
        self.tree.heading('ID', text='ID')
        self.tree.heading('Nombre', text='Nombre')
        self.tree.heading('Apellido', text='Apellido')
        
        self.tree.column('ID', width=80)
        self.tree.column('Nombre', width=180)
        self.tree.column('Apellido', width=180)
        
        self.tree.pack()
        
        # Cargar datos al iniciar
        self.load_data()
        
    def save_person(self):
        """Guardar persona en la base de datos"""
        person_id = self.id_entry.get().strip()
        name = self.name_entry.get().strip()
        lastname = self.lastname_entry.get().strip()
        
        if not person_id or not name or not lastname:
            messagebox.showwarning("Campos vacíos", "Por favor complete todos los campos")
            return
        
        try:
            connection = self.connect_db()
            if connection is None:
                return
            
            cursor = connection.cursor()
            query = "INSERT INTO TB_PERSON (person_id, person_name, person_last_name) VALUES (%s, %s, %s)"
            cursor.execute(query, (person_id, name, lastname))
            connection.commit()
            
            messagebox.showinfo("Éxito", "Persona registrada correctamente")
            self.clear_fields()
            self.load_data()
            
        except Error as e:
            messagebox.showerror("Error", f"Error al guardar: {e}")
        finally:
            if connection and connection.is_connected():
                cursor.close()
                connection.close()
    
    def search_person(self):
        """Buscar persona por ID"""
        person_id = self.id_entry.get().strip()
        
        if not person_id:
            messagebox.showwarning("Campo vacío", "Por favor ingrese un ID para buscar")
            return
        
        try:
            connection = self.connect_db()
            if connection is None:
                return
            
            cursor = connection.cursor()
            query = "SELECT * FROM TB_PERSON WHERE person_id = %s"
            cursor.execute(query, (person_id,))
            result = cursor.fetchone()
            
            if result:
                self.name_entry.delete(0, tk.END)
                self.name_entry.insert(0, result[1])
                self.lastname_entry.delete(0, tk.END)
                self.lastname_entry.insert(0, result[2])
                messagebox.showinfo("Encontrado", "Persona encontrada")
            else:
                messagebox.showinfo("No encontrado", "No se encontró ninguna persona con ese ID")
                
        except Error as e:
            messagebox.showerror("Error", f"Error al buscar: {e}")
        finally:
            if connection and connection.is_connected():
                cursor.close()
                connection.close()
    
    def load_data(self):
        """Cargar datos en la tabla"""
        # Limpiar tabla
        for item in self.tree.get_children():
            self.tree.delete(item)
        
        try:
            connection = self.connect_db()
            if connection is None:
                return
            
            cursor = connection.cursor()
            cursor.execute("SELECT * FROM TB_PERSON ORDER BY person_id")
            rows = cursor.fetchall()
            
            for row in rows:
                self.tree.insert('', tk.END, values=row)
                
        except Error as e:
            messagebox.showerror("Error", f"Error al cargar datos: {e}")
        finally:
            if connection and connection.is_connected():
                cursor.close()
                connection.close()
    
    def clear_fields(self):
        """Limpiar todos los campos"""
        self.id_entry.delete(0, tk.END)
        self.name_entry.delete(0, tk.END)
        self.lastname_entry.delete(0, tk.END)
        self.id_entry.focus()

def main():
    root = tk.Tk()
    app = PersonForm(root)
    root.mainloop()

if __name__ == "__main__":
    main()
```

::: warning **Tarea**
Crea la base de datos animales y muestrala como hicimos con `TB_PERSON`. En clase tendrás que ejecutarlo y este debe funcionar sin problema.
:::

## 4BS04: Práctica Calificada

> [!important]
> ::fluent-color:calendar-48:: **Fecha:** 03 al 07 de Noviembre<br>::fluent-color:laptop-48:: **Programa:** ::logos:visual-studio-code:: ::logos:python:: [Instalar](https://www.youtube.com/watch?v=-IyA_Yvs8IQ) /  ::logos:xampp:: [Xampp](https://www.apachefriends.org/es/index.html)

Esta semana se te hará una serie de preugntas y retos respecto a lo aprendido.