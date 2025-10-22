---
title: Unidad 7
category:
  - Aula
tag:
  - Inicio
  - 3-Secundaria
  - treejs
author: Pepito
icon: fluent-color:notebook-32
order: 6
---

Three.js es una biblioteca de JavaScript que permite crear y mostrar gráficos en 3D directamente en el navegador web, sin necesidad de instalar programas adicionales. Funciona sobre WebGL, una tecnología que aprovecha la tarjeta gráfica del dispositivo para generar imágenes tridimensionales en tiempo real.

Con Three.js, se pueden construir desde simples figuras geométricas hasta escenas interactivas complejas, juegos o simulaciones. Todo esto utilizando únicamente código JavaScript y un archivo HTML, lo que lo hace ideal para proyectos simples o complejos.

Su estructura básica se centra en tres elementos principales:

- Escena (Scene): el espacio donde se colocan todos los objetos, luces y cámaras.
- Cámara (Camera): determina el punto de vista desde el cual se observa la escena.
- Renderizador (Renderer): se encarga de dibujar la escena en la pantalla, normalmente dentro de un elemento canvas de HTML.

A partir de esta base, se pueden agregar luces, texturas, materiales, animaciones y controles interactivos, lo que convierte a Three.js en una herramienta poderosa para visualizar conceptos matemáticos, crear experiencias artísticas digitales o desarrollar videojuegos.

## 4BS01: Creo mi primer CUBO 3D

> [!important]
> ::fluent-color:calendar-48:: **Fecha:** 20 al 24 de Octubre<br>::fluent-color:laptop-48:: **Programa:** ::logos:visual-studio-code:: [Visual Studio Code](https://code.visualstudio.com/)<br>::fluent-color:clipboard-text-edit-32:: **Tarea:** Sin tarea<br>::fluent-color:video-48:: **Videos:** [Video](https://www.youtube.com/watch?v=ifYjDexuFxc)<br>::fluent-color:briefcase-48:: **Recursos:** [Recursos](https://drive.google.com/drive/folders/1sS6GGJK9ZJz4Go2m57zzpjfSGLDMH5jn?usp=sharing)

Uno de los primeros pasos para aprender a usar Three.js es crear un cubo 3D. Este ejercicio nos ayuda a entender los tres elementos fundamentales de toda escena en Three.js:

- **La Escena (Scene)**: es el espacio donde colocaremos nuestros objetos.
- **La Cámara (Camera)**: representa el punto de vista desde donde observamos la escena.
- **El Renderizador (Renderer)**: dibuja la escena y la muestra en la pantalla.

Además, necesitaremos:

- **Una geometría**, que define la forma del cubo.
- **Un material**, que le da color o textura.
- **Una malla (Mesh)**, que combina la geometría con el material para crear el objeto final.

Con solo unas pocas líneas de código, podemos mostrar un cubo flotando en el espacio y hacerlo rotar. Este primer paso es fundamental para entender cómo funciona el entorno 3D y cómo se comunican sus diferentes componentes.

### Ejemplo de clase


```html title="index.html"
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Proyecto 1: Mi primer cubo 3D</title>
    <style>
        body {
            margin: 0;
            overflow: hidden;
            font-family: Arial, sans-serif;
        }
        #info {
            position: absolute;
            top: 10px;
            left: 10px;
            color: white;
            background: rgba(0,0,0,0.7);
            padding: 15px;
            border-radius: 5px;
            font-size: 14px;
        }
        h1 {
            margin: 0 0 10px 0;
            font-size: 18px;
        }
    </style>
</head>
<body>
    <div id="info">
        <h1>🧩 Proyecto 1: Mi primer cubo 3D</h1>
        <p><strong>Concepto:</strong> Estructura básica de Three.js</p>
        <p>• Escena, cámara y renderizador<br>
        • Geometría básica (BoxGeometry)<br>
        • Animación con requestAnimationFrame</p>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    <script>
        // 1. Crear la escena
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x1a1a2e);

        // 2. Crear la cámara
        const camera = new THREE.PerspectiveCamera(
            75, // Campo de visión
            window.innerWidth / window.innerHeight, // Aspecto
            0.1, // Plano cercano
            1000 // Plano lejano
        );
        camera.position.z = 5;

        // 3. Crear el renderizador
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        // 4. Crear el cubo
        const geometry = new THREE.BoxGeometry(2, 2, 2);
        const material = new THREE.MeshBasicMaterial({ 
            color: 0x00ff88,
            wireframe: false
        });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        // 5. Función de animación
        function animate() {
            requestAnimationFrame(animate);

            // Rotar el cubo
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            renderer.render(scene, camera);
        }

        // 6. Ajustar al cambiar el tamaño de ventana
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        // Iniciar animación
        animate();
    </script>
</body>
</html>
```

