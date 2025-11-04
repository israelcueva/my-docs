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

## 4BS02: Recreo la iluminación en mi proyecto

> [!important]
> ::fluent-color:calendar-48:: **Fecha:** 27 al 31 de Octubre<br>::fluent-color:laptop-48:: **Programa:** ::logos:visual-studio-code:: [Visual Studio Code](https://code.visualstudio.com/)<br>::fluent-color:clipboard-text-edit-32:: **Tarea:** Ver al final<br>::fluent-color:video-48:: **Videos:** [Video](https://www.youtube.com/watch?v=bY2HqhOIU94)<br>::fluent-color:briefcase-48:: **Recursos:** [Recursos](https://drive.google.com/drive/folders/1sS6GGJK9ZJz4Go2m57zzpjfSGLDMH5jn?usp=sharing)

En Three.js, las luces se usan para iluminar los objetos en la escena y generar efectos realistas de sombra, reflejo y profundidad.
Sin luz, los materiales como `MeshStandardMaterial` o `MeshPhongMaterial` aparecerán completamente oscuros. Three.js ofrece varios tipos de luces, cada una con un propósito diferente.

- **AmbientLight**: Ilumina toda la escena por igual, sin dirección ni sombras. Se usa como luz base.

```javascript
const ambient = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambient);
```

- **DirectionalLight**: Simula la luz del sol: viene de una dirección y afecta a todos los objetos. Puede proyectar sombras.

```javascript
const dirLight = new THREE.DirectionalLight(0xffffff, 1);
dirLight.position.set(5, 10, 7.5);
scene.add(dirLight);
```

- **PointLight**: Emite luz en todas las direcciones desde un punto, como una bombilla.

```javascript
const pointLight = new THREE.PointLight(0xffaa00, 1, 50);
pointLight.position.set(2, 3, 4);
scene.add(pointLight);
```

- **SpotLight**: Crea un cono de luz direccional, como una linterna o un foco teatral.

```javascript
const spot = new THREE.SpotLight(0xffffff, 1);
spot.position.set(5, 10, 5);
spot.angle = Math.PI / 6;
scene.add(spot);
```

- **HemisphereLight**: Combina una luz desde arriba (cielo) y otra desde abajo (suelo), generando tonos naturales.

```javascript
const hemiLight = new THREE.HemisphereLight(0x00aaff, 0xffaa00, 0.6);
scene.add(hemiLight);
```

---

- **Consejos:**

- Usa pocas luces: demasiadas pueden reducir el rendimiento.
- Combina una `AmbientLight` con una `DirectionalLight` o `PointLight` para buenos resultados.
- Ajusta intensidad y color para crear ambientes (frío, cálido, nocturno, etc.).
- Activa sombras solo si son necesarias (`castShadow`, `receiveShadow`).

### Ejemplo de clase

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Proyecto 2: Jugando con luces</title>
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
        <h1>💡 Proyecto 2: Jugando con luces</h1>
        <p><strong>Concepto:</strong> Iluminación en Three.js</p>
        <p>• AmbientLight (luz ambiental)<br>
        • DirectionalLight (luz direccional)<br>
        • MeshStandardMaterial (material realista)</p>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    <script>
        // Crear escena
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x0a0a0a);

        // Crear cámara
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.z = 5;

        // Crear renderizador
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        // Crear cubo con material que reacciona a la luz
        const geometry = new THREE.BoxGeometry(2, 2, 2);
        const material = new THREE.MeshStandardMaterial({ 
            color: 0x4a90e2,
            metalness: 0.3,
            roughness: 0.4
        });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        // Añadir luz ambiental (ilumina todo por igual)
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
        scene.add(ambientLight);

        // Añadir luz direccional (simula el sol)
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(5, 5, 5);
        scene.add(directionalLight);

        // Añadir una segunda luz direccional desde otro ángulo
        const directionalLight2 = new THREE.DirectionalLight(0xff6b6b, 0.5);
        directionalLight2.position.set(-5, -3, 2);
        scene.add(directionalLight2);

        // Función de animación
        function animate() {
            requestAnimationFrame(animate);

            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            renderer.render(scene, camera);
        }

        // Ajustar al cambiar tamaño de ventana
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        animate();
    </script>
</body>
</html>
```

::: warning **Tarea**
Replica el proyecto usando un editor en linea como replit, codepen, sandbox, etc. y completa lo siguiente:

- Cambia la forma de cubo por la de un cono.
- Modifica los colores del objeto y del fondo con colores distintos al blanco, negro, rojo, verde o azul.
- Agrega una luz de tipo `SpotLight`.

Presentar en clase.
:::
  

## 4BS03: Uso coordenadas para posicionar objetos

> [!important]
> ::fluent-color:calendar-48:: **Fecha:** 03 al 07 de Noviembre<br>::fluent-color:laptop-48:: **Programa:** ::logos:visual-studio-code:: [Visual Studio Code](https://code.visualstudio.com/)<br>::fluent-color:clipboard-text-edit-32:: **Tarea:** Ver al final<br>::fluent-color:video-48:: **Videos:** <br>::fluent-color:briefcase-48:: **Recursos:** [Recursos](https://drive.google.com/drive/folders/1sS6GGJK9ZJz4Go2m57zzpjfSGLDMH5jn?usp=sharing)

Entender el posicionamiento de elementos en Three JS es fundamental para poder creas escenas complejas.

**1. El sistema de coordenadas**

En Three.js, todos los objetos se ubican en un espacio tridimensional usando tres ejes:

- X → izquierda y derecha
- Y → arriba y abajo
- Z → adelante y atrás

El punto (0, 0, 0) es el origen, el centro del mundo 3D.

**2. Posicionar objetos**

Cada objeto 3D (por ejemplo, un cubo o una esfera) tiene una propiedad llamada position, que es un vector con tres valores:

```javascript
object.position.set(x, y, z);
```

Ejemplo:

```javascript
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);

// Posicionar el cubo
cube.position.set(2, 1, -3);
scene.add(cube);
```

**3. Acceso individual a cada eje**

También puedes mover el objeto modificando cada eje por separado:

```javascript
cube.position.x = 1.5;
cube.position.y = 0.5;
cube.position.z = -2;
```

**4. Mover objetos dinámicamente**

Puedes mover objetos durante la animación cambiando sus posiciones dentro de la función animate():

```javascript
function animate() {
  requestAnimationFrame(animate);
  cube.position.x += 0.01; // Mueve el cubo a la derecha lentamente
  renderer.render(scene, camera);
}
animate();
```

**5. Posición relativa a otros objetos**

Puedes hacer que un objeto se mueva junto a otro agregándolo como hijo:

```javascript
parent.add(child);
child.position.set(0, 2, 0);
```

**6. Coordenadas del mundo**

Si necesitas saber la posición global (no solo la relativa al padre), usa:

```javascript
object.getWorldPosition(new THREE.Vector3());
```

**7. Consejos prácticos**

Usa helpers para orientarte:

```javascript
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);
```

### Ejemplo de clase

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Proyecto 3: Formas en el espacio</title>
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
        <h1>🔺 Proyecto 3: Formas en el espacio</h1>
        <p><strong>Concepto:</strong> Geometrías y posicionamiento 3D</p>
        <p>• Múltiples geometrías (esfera, cono, toroide)<br>
        • Posicionamiento con coordenadas X, Y, Z<br>
        • Diferentes colores y materiales</p>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    <script>
        // Crear escena
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x16213e);

        // Crear cámara
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.z = 8;

        // Crear renderizador
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        // Iluminación
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.7);
        directionalLight.position.set(5, 5, 5);
        scene.add(directionalLight);

        // 1. Crear una ESFERA (izquierda)
        const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
        const sphereMaterial = new THREE.MeshStandardMaterial({ 
            color: 0xff6b9d,
            metalness: 0.3,
            roughness: 0.4
        });
        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        sphere.position.x = -3; // Posición en X (izquierda)
        scene.add(sphere);

        // 2. Crear un CONO (centro)
        const coneGeometry = new THREE.ConeGeometry(1, 2, 32);
        const coneMaterial = new THREE.MeshStandardMaterial({ 
            color: 0x4ecdc4,
            metalness: 0.5,
            roughness: 0.3
        });
        const cone = new THREE.Mesh(coneGeometry, coneMaterial);
        cone.position.x = 0; // Centro
        scene.add(cone);

        // 3. Crear un TOROIDE (derecha)
        const torusGeometry = new THREE.TorusGeometry(1, 0.4, 16, 100);
        const torusMaterial = new THREE.MeshStandardMaterial({ 
            color: 0xffd93d,
            metalness: 0.4,
            roughness: 0.5
        });
        const torus = new THREE.Mesh(torusGeometry, torusMaterial);
        torus.position.x = 3; // Posición en X (derecha)
        scene.add(torus);

        // Función de animación
        function animate() {
            requestAnimationFrame(animate);

            // Rotar cada figura de manera diferente
            sphere.rotation.y += 0.01;
            sphere.rotation.x += 0.005;

            cone.rotation.y += 0.015;

            torus.rotation.x += 0.01;
            torus.rotation.y += 0.01;

            renderer.render(scene, camera);
        }

        // Ajustar al cambiar tamaño de ventana
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        animate();
    </script>
</body>
</html>
```

::: warning **Tarea**
Realiza la animación siguiente

[Animación](https://www.youtube.com/watch?v=hWG3N8ukEdE)

Presentar en clase.
:::

