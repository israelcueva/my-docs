---
title: Unidad 8
category:
  - Aula
tag:
  - Inicio
  - 5-Secundaria
author: Pepito
icon: fluent-color:notebook-32
order: 2
---

::devicon:mysql-wordmark:: MySQL es un sistema de gestión de bases de datos relacional de código abierto ampliamente utilizado para almacenar, organizar y administrar información de manera eficiente. Su estructura basada en tablas permite establecer relaciones entre datos, garantizando integridad, consistencia y rapidez en las consultas. Gracias a su compatibilidad con múltiples lenguajes de programación y su integración con servidores web como Apache y PHP, MySQL se ha convertido en una herramienta fundamental para el desarrollo de aplicaciones web dinámicas, sistemas empresariales y proyectos educativos. Además, su facilidad de uso, alto rendimiento y constante actualización lo posicionan como uno de los motores de base de datos más populares en todo el mundo.

## 4BS05: Diseño un buscador simple

> [!important]
> ::fluent-color:calendar-48:: **Fecha:** 03 al 07 de Noviembre<br>::fluent-color:laptop-48:: **Programa:** ::logos:visual-studio-code:: ::logos:python:: [Instalar](https://www.youtube.com/watch?v=-IyA_Yvs8IQ) /  ::logos:xampp:: [Xampp](https://www.apachefriends.org/es/index.html)<br>::fluent-color:clipboard-text-edit-32:: **Tarea:** Sin tarea<br>::fluent-color:video-48:: **Videos:** <br>::fluent-color:briefcase-48:: **Recursos:** [Recursos](https://drive.google.com/drive/folders/1IAVg1vC0uFupTV1WnKcwjR4tm0hwY9Hj?usp=sharing)

La búsqueda de registros en una tabla de MySQL mediante su ID es una de las operaciones más comunes y esenciales al trabajar con bases de datos, ya que permite localizar de forma rápida y precisa un dato específico. El campo ID, generalmente definido como clave primaria, garantiza que cada registro sea único, por lo que consultarlo evita duplicidades y acelera la recuperación de información. Usando sentencias simples como ``SELECT * FROM tabla WHERE id = valor;``, es posible acceder directamente al registro deseado sin recorrer toda la tabla, optimizando así tanto el rendimiento como la claridad del código en aplicaciones y sistemas.

## 4BS06: Hago un UPDATE a los registros de mi tabla 

> [!important]
> ::fluent-color:calendar-48:: **Fecha:** 24 AL 28 de Noviembre<br>::fluent-color:laptop-48:: **Programa:** ::logos:visual-studio-code:: ::logos:python:: [Instalar](https://www.youtube.com/watch?v=-IyA_Yvs8IQ) /  ::logos:xampp:: [Xampp](https://www.apachefriends.org/es/index.html)<br>::fluent-color:clipboard-text-edit-32:: **Tarea:** Implementa la solución<br>::fluent-color:video-48:: **Videos:** <br>::fluent-color:briefcase-48:: **Recursos:** [Recursos](https://drive.google.com/drive/folders/1IAVg1vC0uFupTV1WnKcwjR4tm0hwY9Hj?usp=sharing)

El comando UPDATE en MySQL es una herramienta fundamental para modificar información existente dentro de una tabla sin necesidad de eliminar o crear nuevos registros. Permite actualizar uno o varios campos de forma selectiva usando condiciones precisas, como por ejemplo WHERE, que asegura que solo los datos deseados sean alterados. Este comando es indispensable para mantener la coherencia y actualidad de la base de datos, ya que facilita corregir errores, ajustar valores o reflejar cambios en tiempo real dentro de cualquier aplicación que dependa de MySQL.

### Código de clase

```python
import tkinter as tk
from tkinter import ttk, messagebox
import mysql.connector
from mysql.connector import Error

class PersonForm:
    def __init__(self, root):
        self.root = root
        self.root.title("Registro de Personas")
        self.root.geometry("500x450")
        self.root.resizable(False, False)
        
        # Variable para saber si estamos en modo edición
        self.editing_mode = False
        
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
        
        # Frame para botones - Primera fila
        button_frame1 = ttk.Frame(main_frame)
        button_frame1.grid(row=4, column=0, columnspan=2, pady=10)
        
        # Botones primera fila
        ttk.Button(button_frame1, text="Guardar", command=self.save_person, width=15).grid(row=0, column=0, padx=5)
        ttk.Button(button_frame1, text="Buscar", command=self.search_person, width=15).grid(row=0, column=1, padx=5)
        ttk.Button(button_frame1, text="Limpiar", command=self.clear_fields, width=15).grid(row=0, column=2, padx=5)
        
        # Frame para botones - Segunda fila
        button_frame2 = ttk.Frame(main_frame)
        button_frame2.grid(row=5, column=0, columnspan=2, pady=(0, 10))
        
        # Botones segunda fila
        self.update_btn = ttk.Button(button_frame2, text="Actualizar", command=self.update_person, width=15, state='disabled')
        self.update_btn.grid(row=0, column=0, padx=5)
        ttk.Button(button_frame2, text="Eliminar", command=self.delete_person, width=15).grid(row=0, column=1, padx=5)
        
        # Frame para la tabla
        table_frame = ttk.Frame(main_frame)
        table_frame.grid(row=6, column=0, columnspan=2, pady=10)
        
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
        
        # Evento para seleccionar registro de la tabla
        self.tree.bind('<ButtonRelease-1>', self.on_tree_select)
        
        # Cargar datos al iniciar
        self.load_data()
        
    def on_tree_select(self, event):
        """Evento al seleccionar un registro de la tabla"""
        selected_item = self.tree.selection()
        if selected_item:
            # Obtener valores del registro seleccionado
            values = self.tree.item(selected_item[0])['values']
            
            # Limpiar campos
            self.clear_fields()
            
            # Llenar campos con los datos seleccionados
            self.id_entry.insert(0, values[0])
            self.name_entry.insert(0, values[1])
            self.lastname_entry.insert(0, values[2])
            
            # Deshabilitar campo ID y habilitar botón actualizar
            self.id_entry.config(state='readonly')
            self.update_btn.config(state='normal')
            self.editing_mode = True
        
    def save_person(self):
        """Guardar persona en la base de datos"""
        if self.editing_mode:
            messagebox.showwarning("Modo Edición", "Está en modo edición. Use el botón 'Actualizar' o 'Limpiar' para crear un nuevo registro")
            return
            
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
    
    def update_person(self):
        """Actualizar datos de una persona"""
        person_id = self.id_entry.get().strip()
        name = self.name_entry.get().strip()
        lastname = self.lastname_entry.get().strip()
        
        if not person_id or not name or not lastname:
            messagebox.showwarning("Campos vacíos", "Por favor complete todos los campos")
            return
        
        # Confirmar actualización
        confirm = messagebox.askyesno("Confirmar", "¿Está seguro de actualizar este registro?")
        if not confirm:
            return
        
        try:
            connection = self.connect_db()
            if connection is None:
                return
            
            cursor = connection.cursor()
            query = "UPDATE TB_PERSON SET person_name = %s, person_last_name = %s WHERE person_id = %s"
            cursor.execute(query, (name, lastname, person_id))
            connection.commit()
            
            if cursor.rowcount > 0:
                messagebox.showinfo("Éxito", "Persona actualizada correctamente")
                self.clear_fields()
                self.load_data()
            else:
                messagebox.showwarning("No actualizado", "No se encontró el registro para actualizar")
            
        except Error as e:
            messagebox.showerror("Error", f"Error al actualizar: {e}")
        finally:
            if connection and connection.is_connected():
                cursor.close()
                connection.close()
    
    def delete_person(self):
        """Eliminar persona de la base de datos"""
        person_id = self.id_entry.get().strip()
        
        if not person_id:
            messagebox.showwarning("Campo vacío", "Por favor ingrese o seleccione un ID para eliminar")
            return
        
        # Confirmar eliminación
        confirm = messagebox.askyesno("Confirmar", "¿Está seguro de eliminar este registro?")
        if not confirm:
            return
        
        try:
            connection = self.connect_db()
            if connection is None:
                return
            
            cursor = connection.cursor()
            query = "DELETE FROM TB_PERSON WHERE person_id = %s"
            cursor.execute(query, (person_id,))
            connection.commit()
            
            if cursor.rowcount > 0:
                messagebox.showinfo("Éxito", "Persona eliminada correctamente")
                self.clear_fields()
                self.load_data()
            else:
                messagebox.showwarning("No eliminado", "No se encontró el registro para eliminar")
            
        except Error as e:
            messagebox.showerror("Error", f"Error al eliminar: {e}")
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
                
                # Activar modo edición
                self.id_entry.config(state='readonly')
                self.update_btn.config(state='normal')
                self.editing_mode = True
                
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
        self.id_entry.config(state='normal')
        self.id_entry.delete(0, tk.END)
        self.name_entry.delete(0, tk.END)
        self.lastname_entry.delete(0, tk.END)
        self.id_entry.focus()
        
        # Deshabilitar botón actualizar y desactivar modo edición
        self.update_btn.config(state='disabled')
        self.editing_mode = False

def main():
    root = tk.Tk()
    app = PersonForm(root)
    root.mainloop()

if __name__ == "__main__":
    main()
```

## 4BS07: Completo mi CRUD con el botón eliminar

> [!important]
> ::fluent-color:calendar-48:: **Fecha:** 01 al 05 de Diciembre <br>::fluent-color:laptop-48:: **Programa:** ::logos:visual-studio-code:: ::logos:python:: [Instalar](https://www.youtube.com/watch?v=-IyA_Yvs8IQ) /  ::logos:xampp:: [Xampp](https://www.apachefriends.org/es/index.html)<br>::fluent-color:clipboard-text-edit-32:: **Tarea:** Sin tarea<br>::fluent-color:video-48:: **Videos:** <br>::fluent-color:briefcase-48:: **Recursos:** [Recursos](https://drive.google.com/drive/folders/1IAVg1vC0uFupTV1WnKcwjR4tm0hwY9Hj?usp=sharing)

El uso de DROP y DELETE en MySQL es fundamental para gestionar y depurar información dentro de una base de datos. Mientras que DELETE se emplea para eliminar registros específicos de una tabla sin afectar su estructura, permitiendo incluso aplicar condiciones o filtros, el comando DROP se utiliza para borrar por completo objetos de la base de datos, como tablas, vistas o incluso la base de datos entera, eliminando tanto su contenido como su estructura. 

## 4BS08: Completo mi interfaz en Tkinter

> [!important]
> ::fluent-color:calendar-48:: **Fecha:** 08 al 12 de Diciembre <br>::fluent-color:laptop-48:: **Programa:** ::logos:visual-studio-code:: ::logos:python:: [Instalar](https://www.youtube.com/watch?v=-IyA_Yvs8IQ) /  ::logos:xampp:: [Xampp](https://www.apachefriends.org/es/index.html)<br>::fluent-color:clipboard-text-edit-32:: **Tarea:** Sin tarea<br>::fluent-color:video-48:: **Videos:** <br>::fluent-color:briefcase-48:: **Recursos:** [Recursos](https://drive.google.com/drive/folders/1IAVg1vC0uFupTV1WnKcwjR4tm0hwY9Hj?usp=sharing)

Tkinter es la biblioteca estándar de Python para crear interfaces gráficas de usuario (GUI). Gracias a su sencillez y a que viene incluida con la mayoría de instalaciones de Python, es una herramienta ideal para desarrollar ventanas, formularios, botones, cuadros de texto y todo tipo de aplicaciones interactivas sin necesidad de instalar componentes externos. Con Tkinter puedes construir aplicaciones desde las más simples hasta proyectos complejos, utilizando una estructura basada en widgets que se colocan dentro de una ventana principal.

Si no lo tienes instalado debes usar el siguiente comando de la terminal.

```bash
pip install tk
```

**Crear una ventana básica**

```python
import tkinter as tk

ventana = tk.Tk()
ventana.title("Mi primera GUI")
ventana.geometry("300x200")

ventana.mainloop()
```

- `Tk()` crea la ventana principal.
- `title()` define el título.
- `geometry()` establece el tamaño.
- `mainloop()` mantiene la ventana abierta.

**Widgets principales**

- Etiqueta (Label)

```python
label = tk.Label(ventana, text="Hola, Tkinter")
label.pack()
```

- Botón (Button)

```python
def saludar():
    print("Hola desde el botón")

boton = tk.Button(ventana, text="Saludar", command=saludar)
boton.pack()
```

- Entrada de texto (Entry)

```python
entrada = tk.Entry(ventana)
entrada.pack()
```

- Caja de texto (Text)

```python
texto = tk.Text(ventana, height=5, width=30)
texto.pack()
```

**Organización de widgets**

- pack(): Distribuye widgets automáticamente arriba, abajo, izquierda o derecha.

```python
label.pack(side="top")
```

- grid(): Organiza widgets en filas y columnas.

```python
label.grid(row=0, column=0)
```

- place(): Posiciona widgets con coordenadas absolutas.

```python
label.place(x=50, y=100)
```

**Crear una pequeña interfaz completa**

```python
import tkinter as tk

def mostrar_mensaje():
    nombre = entrada.get()
    label_resultado.config(text=f"Hola, {nombre}")

ventana = tk.Tk()
ventana.title("Ejemplo Completo")

tk.Label(ventana, text="Ingresa tu nombre:").pack()

entrada = tk.Entry(ventana)
entrada.pack()

tk.Button(ventana, text="Aceptar", command=mostrar_mensaje).pack()

label_resultado = tk.Label(ventana, text="")
label_resultado.pack()

ventana.mainloop()
```


## 4BS09: Práctica Calificada

> [!important]
> ::fluent-color:calendar-48:: **Fecha:** 08 al 12 de Diciembre <br>::fluent-color:laptop-48:: **Programa:** ::logos:visual-studio-code:: ::logos:python:: [Instalar](https://www.youtube.com/watch?v=-IyA_Yvs8IQ) /  ::logos:xampp:: [Xampp](https://www.apachefriends.org/es/index.html)<br>

Como práctica deberás presentar, en clase, la aplicación con las características siguientes:

**Base de datos**

- Nombre: refurinfunflay
- Tabla: TB_ratoncitos (ratoncito_id, ratoncito_nombre, ratoncito_raza, ratoncito_color)
- Registros: Agrega un total de 5 registros

**Aplicación**

Usa la interfaz trabajada en la semana 6 y adecua su estructura para que se adapte a la nueva base de datos.

**Modo de presentación**

A fin de evitar gastar tiempo preparando e instalando lo necesario para que la app funcione lo harás usando:

- Base de datos: https://freedb.tech/

Y enviaras tu archivo `main.py` a través del enlace siguiente:

https://mariareinista-my.sharepoint.com/:f:/g/personal/d119263_mrc_edu_pe/IgCn4XlacYGMRLOBxJWOmb6lAVv9yAvh-S82LLShJeub0Ek

En clase deberás explicar y hacer funcionar tu App.