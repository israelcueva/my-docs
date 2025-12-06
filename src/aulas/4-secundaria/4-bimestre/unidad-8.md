---
title: Unidad 8
category:
  - Aula
tag:
  - Inicio
  - 3-Secundaria
  - treejs
author: Pepito
icon: fluent-color:notebook-32
order: 2
---

Three.js es una biblioteca de JavaScript que permite crear y mostrar gráficos en 3D directamente en el navegador web, sin necesidad de instalar programas adicionales. Funciona sobre WebGL, una tecnología que aprovecha la tarjeta gráfica del dispositivo para generar imágenes tridimensionales en tiempo real.


## 4BS05: Adiciono mis primeras texturas a mis objetos

> [!important]
> ::fluent-color:calendar-48:: **Fecha:** 17 al 21 de Noviembre<br>::fluent-color:laptop-48:: **Programa:** ::logos:visual-studio-code:: [Visual Studio Code](https://code.visualstudio.com/)<br>::fluent-color:clipboard-text-edit-32:: **Tarea:** Ver al final<br>::fluent-color:video-48:: **Videos:** <br>::fluent-color:briefcase-48:: **Recursos:** [Recursos](https://drive.google.com/drive/folders/1sS6GGJK9ZJz4Go2m57zzpjfSGLDMH5jn?usp=sharing)

El uso de texturas en Three.js permite dar realismo y detalle a los objetos 3D mediante imágenes aplicadas sobre sus superficies. Gracias a las texturas, un modelo simple puede transformarse en uno visualmente atractivo, simulando materiales como madera, metal, piedra o telas sin necesidad de aumentar su complejidad geométrica. Three.js ofrece diversas opciones para cargar, repetir, rotar y ajustar texturas, lo que brinda un alto nivel de control creativo al desarrollar escenas interactivas. En conjunto, trabajar con texturas es fundamental para lograr ambientes más vivos, inmersivos y visualmente profesionales dentro de cualquier proyecto 3D.

**1º Descargar textura**

Una vez creamos nuestra carpeta y el archivo `index.html` con el código de la semana 3. pocedemos a:

1. Buscar una imagen de [textura](https://www.google.com/search?q=earth+texture) de la tierra para añadirlo a la esfera. Lo guardamos en la carpeta que habiamos creado (Junto al `index.html`).
2. Le colocamos un nombre fácil de escribir, por ejemplo: `texturita-mundito.png`.

**2º Cargar textura**

Una vez que tenemos la imagen lista, deberemos de cargarla en nuestro `index.htnl`. La siguiente línea de código añádela antes de la creación de las formas. Adaptalo al nombre que le pusiste a la imagen descargada.

```javascript
const mundito = new THREE.TextureLoader().load("texturita-mundito.png")
```

**3º Agregar textura**

Como en este caso queremos añadir la textura en nuestra esfera, ubicamos el código que carga el el material estandar y añadimos `map:mundito,` y comentamos la propiedad `color` para que sea ignorada, después, aumentamos el roughness para que el brillo sea difuso y no parezca metal.

```javascript
 // 1. Crear una ESFERA (izquierda)
        const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
        const sphereMaterial = new THREE.MeshStandardMaterial({ 
            //color: 0xff6b9d,
            map:mundito,
            metalness: 0,
            roughness: 1
        });
        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        sphere.position.x = -3; // Posición en X (izquierda)
        scene.add(sphere);
```

**4º Visualizar**

Como estamos cargando recursos en nuestro proyecto quizás no salte un error y este se vea blanco. Para evitar eso instalamos el live server. Puedes hacerlo siguiente este tutorial: https://www.youtube.com/watch?v=QKS7tGIDDeM

**5º Añade texturas a todos los objetos**

Ahora te queda añadir texturas al resto de objetos. Para el fondo en vez de `map` usaremos `background`.

## 4BS06: Entiendo el manejo de la cámara en la escena

> [!important]
> ::fluent-color:calendar-48:: **Fecha:** 24 al 28 de Noviembre<br>::fluent-color:laptop-48:: **Programa:** ::logos:visual-studio-code:: [Visual Studio Code](https://code.visualstudio.com/)<br>::fluent-color:clipboard-text-edit-32:: **Tarea:** Ver al final<br>::fluent-color:video-48:: **Videos:** [Cámaras](https://www.youtube.com/watch?v=FwcXultcBl4) <br>::fluent-color:briefcase-48:: **Recursos:** [Recursos](https://drive.google.com/drive/folders/1sS6GGJK9ZJz4Go2m57zzpjfSGLDMH5jn?usp=sharing)

Las cámaras en Three.js son fundamentales para definir qué parte de la escena 3D se renderiza y desde qué perspectiva. Actúan como los "ojos" a través de los cuales vemos el mundo 3D.

**1º Tipos de Cámaras**

**1.1 PerspectiveCamera (Cámara de Perspectiva)**

Es la cámara más común y simula cómo el ojo humano ve el mundo. Los objetos más lejanos aparecen más pequeños.

```javascript
const camera = new THREE.PerspectiveCamera(
  fov,    // Field of view (campo de visión)
  aspect, // Aspect ratio (relación de aspecto)
  near,   // Plano cercano
  far     // Plano lejano
);
```

**Parámetros:**

- **fov (Field of View)**: Ángulo de visión vertical en grados (típicamente 45-75)
- **aspect**: Relación ancho/alto (generalmente `window.innerWidth / window.innerHeight`)
- **near**: Distancia mínima de renderizado (objetos más cerca no se ven)
- **far**: Distancia máxima de renderizado (objetos más lejos no se ven)

**Ejemplo práctico:**

```javascript
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 0, 5);
```

**1.2 OrthographicCamera (Cámara Ortográfica)**

Renderiza objetos sin perspectiva. Todos los objetos mantienen su tamaño independientemente de la distancia. Útil para juegos isométricos, CAD, y interfaces 2D.

```javascript
const camera = new THREE.OrthographicCamera(
  left,   // Límite izquierdo
  right,  // Límite derecho
  top,    // Límite superior
  bottom, // Límite inferior
  near,   // Plano cercano
  far     // Plano lejano
);
```

**Ejemplo práctico:**

```javascript
const aspect = window.innerWidth / window.innerHeight;
const frustumSize = 10;

const camera = new THREE.OrthographicCamera(
  -frustumSize * aspect / 2,
  frustumSize * aspect / 2,
  frustumSize / 2,
  -frustumSize / 2,
  0.1,
  1000
);
camera.position.set(10, 10, 10);
camera.lookAt(0, 0, 0);
```

**2º Propiedades y Métodos Importantes**

**2.1 Posición y Orientación**

```javascript
// Establecer posición
camera.position.set(x, y, z);
camera.position.x = 5;

// Hacer que la cámara mire hacia un punto
camera.lookAt(new THREE.Vector3(0, 0, 0));
camera.lookAt(mesh.position);

// Rotación
camera.rotation.x = Math.PI / 4;
camera.rotation.y = Math.PI / 2;
```

**2.2 Actualización de Parámetros**

Después de cambiar ciertos parámetros, debes actualizar la matriz de proyección:

```javascript
camera.aspect = window.innerWidth / window.innerHeight;
camera.updateProjectionMatrix();
```

**2.3 Zoom**

```javascript
// PerspectiveCamera
camera.fov = 50;
camera.updateProjectionMatrix();

// OrthographicCamera
camera.zoom = 2;
camera.updateProjectionMatrix();
```

**3ª Controles de Cámara**

Three.js proporciona varios controles para interactuar con la cámara:

**3.1 OrbitControls**

Permite orbitar alrededor de un punto target, hacer zoom y pan.

```html
<script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js"></script>
```

```javascript
const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 0, 0);
controls.enableDamping = true; // Suavizado
controls.dampingFactor = 0.05;
controls.minDistance = 5;
controls.maxDistance = 50;
controls.maxPolarAngle = Math.PI / 2; // Límite vertical

// En el loop de animación
function animate() {
  controls.update(); // Solo si enableDamping está activo
  renderer.render(scene, camera);
}
```

**3.2 FlyControls**

Simula controles de vuelo libre.

```html
<script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/FlyControls.js"></script>
```

```javascript
const controls = new FlyControls(camera, renderer.domElement);
controls.movementSpeed = 10;
controls.rollSpeed = Math.PI / 6;
```

**3.3 FirstPersonControls**

Para experiencias en primera persona.

```javascript
import { FirstPersonControls } from 'three/examples/jsm/controls/FirstPersonControls';

const controls = new FirstPersonControls(camera, renderer.domElement);
controls.movementSpeed = 50;
controls.lookSpeed = 0.1;
```

**3.4 PointerLockControls**

Controles de primera persona con mouse bloqueado (ideal para juegos).

```html
 <script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/FirstPersonControls.js"></script>
```

```javascript
const controls = new PointerLockControls(camera, renderer.domElement);

document.addEventListener('click', () => {
  controls.lock();
});
```

**4º Responsividad**

Manejo de cambios de tamaño de ventana:

```javascript
window.addEventListener('resize', () => {
  // Actualizar cámara
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  
  // Actualizar renderer
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});
```

**5º Múltiples Cámaras**

Puedes tener varias cámaras en una escena:

```javascript
const camera1 = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
const camera2 = new THREE.OrthographicCamera(left, right, top, bottom, 0.1, 1000);

let activeCamera = camera1;

// Cambiar entre cámaras
function switchCamera() {
  activeCamera = activeCamera === camera1 ? camera2 : camera1;
}

// Renderizar con la cámara activa
renderer.render(scene, activeCamera);
```

**6º Animación de Cámara**

**6.1 Movimiento Suave**

```javascript
// Usar GSAP para animaciones suaves
gsap.to(camera.position, {
  duration: 2,
  x: 10,
  y: 5,
  z: 10,
  ease: "power2.inOut"
});

// O manualmente
function animateCamera() {
  camera.position.x += (targetX - camera.position.x) * 0.05;
  camera.position.y += (targetY - camera.position.y) * 0.05;
  camera.lookAt(scene.position);
}
```

**6.2 Cámara siguiendo objeto**

```javascript
function followObject(target) {
  const offset = new THREE.Vector3(0, 5, -10);
  const targetPosition = target.position.clone().add(offset);
  
  camera.position.lerp(targetPosition, 0.1);
  camera.lookAt(target.position);
}
```

**7º Helpers y Debugging**

```javascript
// CameraHelper para visualizar el frustum de una cámara
const cameraHelper = new THREE.CameraHelper(camera);
scene.add(cameraHelper);

// Actualizar el helper si la cámara cambia
camera.updateProjectionMatrix();
cameraHelper.update();
```

**8º Técnicas Avanzadas**

**8.1 Raycasting desde la Cámara**

```javascript
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

function onMouseClick(event) {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(scene.children);
  
  if (intersects.length > 0) {
    console.log('Objeto clickeado:', intersects[0].object);
  }
}
```

**8.2 Cámara Cinemática**

```javascript
class CinematicCamera {
  constructor(camera) {
    this.camera = camera;
    this.waypoints = [];
    this.currentWaypoint = 0;
  }
  
  addWaypoint(position, lookAt) {
    this.waypoints.push({ position, lookAt });
  }
  
  update(delta) {
    if (this.currentWaypoint >= this.waypoints.length) return;
    
    const waypoint = this.waypoints[this.currentWaypoint];
    this.camera.position.lerp(waypoint.position, 0.02);
    
    const lookAtCurrent = new THREE.Vector3();
    this.camera.getWorldDirection(lookAtCurrent);
    lookAtCurrent.lerp(waypoint.lookAt, 0.02);
    this.camera.lookAt(lookAtCurrent);
  }
}
```

**9º Mejores Prácticas**

1. **Near y Far planes**: Mantén el near lo más grande posible y el far lo más pequeño posible para mejor precisión del z-buffer.

2. **Field of View**: Un FOV de 45-75 grados es lo más natural. Valores muy altos crean distorsión.

3. **Actualización de matriz**: Siempre llama a `updateProjectionMatrix()` después de cambiar parámetros de la cámara.

4. **Rendimiento**: Evita cambiar constantemente los parámetros de la cámara en el loop de animación.

5. **Controles**: Usa `enableDamping` en OrbitControls para movimientos más suaves y profesionales.

6. **Límites**: Establece límites apropiados (minDistance, maxDistance, maxPolarAngle) para evitar que los usuarios pierdan la orientación.

## 4BS07: Creo una animación con movimiento simple

> [!important]
> ::fluent-color:calendar-48:: **Fecha:** 01 al 05 de Diciembre<br>::fluent-color:laptop-48:: **Programa:** ::logos:visual-studio-code:: [Visual Studio Code](https://code.visualstudio.com/)<br>::fluent-color:clipboard-text-edit-32:: **Tarea:** Sin tarea<br>::fluent-color:video-48:: **Videos:** [Cámaras](https://www.youtube.com/watch?v=FwcXultcBl4) <br>::fluent-color:briefcase-48:: **Recursos:** [Recursos](https://drive.google.com/drive/folders/1sS6GGJK9ZJz4Go2m57zzpjfSGLDMH5jn?usp=sharing)

Las animaciones en Three.js permiten dar vida a escenas 3D mediante el movimiento y transformación de objetos a lo largo del tiempo. Three.js ofrece varias formas de crear animaciones, desde bucles simples hasta sistemas complejos con AnimationMixer.

**1. Bucle de Animación Básico**

La forma más simple de animar es usando requestAnimationFrame(), que ejecuta una función repetidamente sincronizada con la tasa de refresco del navegador (generalmente 60 FPS).

```
function animate() {
    requestAnimationFrame(animate);
    
    // Animar rotación
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
    
    renderer.render(scene, camera);
}

animate();
```

**2. Clock para Animaciones Basadas en Tiempo**

El objeto `THREE.Clock` permite crear animaciones independientes de la velocidad de frames.

```javascript
const clock = new THREE.Clock();

function animate() {
    requestAnimationFrame(animate);
    
    const elapsedTime = clock.getElapsedTime();
    
    // Movimiento circular
    mesh.position.x = Math.cos(elapsedTime) * 3;
    mesh.position.y = Math.sin(elapsedTime) * 3;
    
    renderer.render(scene, camera);
}
```

Métodos útiles de Clock

- `getElapsedTime()`: Tiempo total desde que se creó el clock
- `getDelta()`: Tiempo transcurrido desde el último frame
- `start()`: Inicia el clock
- `stop()`: Pausa el clock

**3. Tweening con Bibliotecas Externas**

Para animaciones más suaves y controladas, se puede usar GSAP (GreenSock Animation Platform):

```javascript
// Animar posición
gsap.to(mesh.position, {
    duration: 2,
    x: 5,
    ease: "power2.inOut"
});

// Animar múltiples propiedades
gsap.to(mesh.rotation, {
    duration: 3,
    y: Math.PI * 2,
    repeat: -1,
    ease: "linear"
});
```

**4. AnimationMixer y AnimationClip**

Para animaciones más complejas, especialmente con modelos importados, Three.js ofrece el sistema de AnimationMixer.

Crear AnimationClips Manualmente

```javascript
// Definir keyframes
const times = [0, 1, 2];
const values = [0, 1, 0]; // posiciones Y

const positionTrack = new THREE.KeyframeTrack(
    '.position[y]',
    times,
    values
);

// Crear clip
const clip = new THREE.AnimationClip('salto', 2, [positionTrack]);

// Configurar mixer
const mixer = new THREE.AnimationMixer(mesh);
const action = mixer.clipAction(clip);
action.play();

// En el bucle de animación
const clock = new THREE.Clock();
function animate() {
    requestAnimationFrame(animate);
    
    mixer.update(clock.getDelta());
    renderer.render(scene, camera);
}
```

Cargar Animaciones de Modelos

```javascript
const loader = new THREE.GLTFLoader();
loader.load('model.gltf', (gltf) => {
    const model = gltf.scene;
    scene.add(model);
    
    const mixer = new THREE.AnimationMixer(model);
    
    // Reproducir todas las animaciones
    gltf.animations.forEach((clip) => {
        mixer.clipAction(clip).play();
    });
    
    // O reproducir una específica
    const action = mixer.clipAction(gltf.animations[0]);
    action.play();
});
```

**5. Tipos de KeyframeTracks**

Three.js soporta varios tipos de tracks para animar diferentes propiedades:

- `VectorKeyframeTrack`: Para vectores (position, scale)
- `QuaternionKeyframeTrack`: Para rotaciones
- `NumberKeyframeTrack`: Para valores numéricos
- `ColorKeyframeTrack`: Para colores
- `BooleanKeyframeTrack`: Para valores booleanos

```javascript
// Animar color
const colorTrack = new THREE.ColorKeyframeTrack(
    '.material.color',
    [0, 1, 2],
    [1, 0, 0, 0, 1, 0, 0, 0, 1] // RGB values
);
```

**6. Controlar AnimationActions**

Las `AnimationAction` ofrecen control detallado sobre la reproducción:

```javascript
const action = mixer.clipAction(clip);

// Reproducción
action.play();
action.stop();
action.pause();

// Configuración
action.setLoop(THREE.LoopRepeat, Infinity);
action.clampWhenFinished = true;
action.timeScale = 1.5; // Velocidad de reproducción

// Transiciones suaves
action.fadeIn(0.5);
action.fadeOut(0.5);
action.crossFadeTo(otherAction, 0.3);
```

**7. Morfismo (Morph Targets)**

Para animaciones de deformación de malla:

```javascript
const geometry = new THREE.BoxGeometry(1, 1, 1);
geometry.morphAttributes.position = [];

// Crear morph target
const morphTarget = new Float32Array(geometry.attributes.position.count * 3);
// ... llenar con posiciones modificadas
geometry.morphAttributes.position.push(
    new THREE.BufferAttribute(morphTarget, 3)
);

const mesh = new THREE.Mesh(geometry, material);

// Animar influencia del morph
function animate() {
    mesh.morphTargetInfluences[0] = Math.sin(Date.now() * 0.001) * 0.5 + 0.5;
}
```

**8. Skeletal Animation (Animación Esquelética)**

Para personajes y modelos complejos:

```javascript
// Generalmente viene del modelo cargado
const skeleton = new THREE.Skeleton(bones);
const skinnedMesh = new THREE.SkinnedMesh(geometry, material);
skinnedMesh.add(bones[0]);
skinnedMesh.bind(skeleton);

// Las animaciones de esqueleto se manejan con AnimationMixer
```

**9. Mejores Prácticas**

Optimización

- Usa getDelta() en lugar de getElapsedTime() cuando sea posible
- Limita las actualizaciones de animaciones a lo necesario
- Considera usar requestAnimationFrame solo cuando la pestaña esté activa

Interpolación

```javascript
// Suavizar animaciones con lerp (interpolación lineal)
mesh.position.lerp(targetPosition, 0.1);
mesh.quaternion.slerp(targetQuaternion, 0.1);
```

Delta Time

```javascript
// Usar delta para animaciones consistentes
function animate() {
    const delta = clock.getDelta();
    
    // Velocidad constante independiente de FPS
    mesh.rotation.y += 1.0 * delta;
    
    mixer.update(delta);
}
```

## 4BS08: Desarrollo un proyecto de animación completo

> [!important]
> ::fluent-color:calendar-48:: **Fecha:** 08 al 12 de Diciembre<br>::fluent-color:laptop-48:: **Programa:** ::logos:visual-studio-code:: [Visual Studio Code](https://code.visualstudio.com/)<br>::fluent-color:clipboard-text-edit-32:: **Tarea:** Sin tarea<br>::fluent-color:video-48:: **Videos:** [Cámaras](https://www.youtube.com/watch?v=FwcXultcBl4) <br>::fluent-color:briefcase-48:: **Recursos:** [Recursos](https://drive.google.com/drive/folders/1sS6GGJK9ZJz4Go2m57zzpjfSGLDMH5jn?usp=sharing)

Ahora que hemos visto los conceptos básicos de Three.js, es el momento perfecto para crear un proyecto práctico que nos permita consolidar y poner a prueba todos los conocimientos adquiridos en este potente framework de gráficos 3D. La teoría cobra verdadero sentido cuando la aplicamos en casos reales, y nada mejor que enfrentarnos a un proyecto completo para comprender cómo se integran conceptos como escenas, cámaras, luces, materiales, geometrías y animaciones en una aplicación funcional.

## 4BS09: Práctica Calificada

> [!important]
> ::fluent-color:calendar-48:: **Fecha:** 13 de Diciembre<br>::fluent-color:laptop-48:: **Programa:** ::logos:visual-studio-code:: [Visual Studio Code](https://code.visualstudio.com/)

Para tu práctica debes tener realizar un proyecto que contenga las características siguientes:

- El proyecto debe mostrar una habitación con estilo navideño: [Ejemplos](https://www.google.com/search?q=isometric+christmas+room).
- Añade los recursos necesarios para que la habitación se vea bien.
- Añade orbit controls, música y luces a tu proyecto.

Para presentar este proyecto puedes usar cualquiera de estas páginas:

- https://codepen.io/
- https://codesandbox.io/
- https://jsfiddle.net/
- https://codeanywhere.com/

