// === SETUP SCENE, CAMERA, RENDERER ===
const scene = new THREE.Scene();

// Camera setup
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 100;

// Renderer setup and link to canvas
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('solarCanvas') });
renderer.setSize(window.innerWidth, window.innerHeight);

// === LIGHTING ===
const light = new THREE.PointLight(0xffffff, 2, 1000);
light.position.set(0, 0, 0);
scene.add(light);

// === THE SUN ===
const sunGeometry = new THREE.SphereGeometry(5, 32, 32);
const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xFDB813 });
const sun = new THREE.Mesh(sunGeometry, sunMaterial);
scene.add(sun);

// === MERCURY ===
const mercuryOrbit = new THREE.Object3D();
scene.add(mercuryOrbit);

const mercuryGeometry = new THREE.SphereGeometry(0.8, 32, 32);
const mercuryMaterial = new THREE.MeshStandardMaterial({ color: 0xaaaaaa });
const mercury = new THREE.Mesh(mercuryGeometry, mercuryMaterial);
mercury.position.x = 10;
mercuryOrbit.add(mercury);

// === VENUS ===
const venusOrbit = new THREE.Object3D();
scene.add(venusOrbit);

const venusGeometry = new THREE.SphereGeometry(1.2, 32, 32);
const venusMaterial = new THREE.MeshStandardMaterial({ color: 0xffcc99 });
const venus = new THREE.Mesh(venusGeometry, venusMaterial);
venus.position.x = 14;
venusOrbit.add(venus);

// === EARTH ===
const earthOrbit = new THREE.Object3D();
scene.add(earthOrbit);

const earthGeometry = new THREE.SphereGeometry(1.4, 32, 32);
const earthMaterial = new THREE.MeshStandardMaterial({ color: 0x3366ff });
const earth = new THREE.Mesh(earthGeometry, earthMaterial);
earth.position.x = 18;
earthOrbit.add(earth);

// === MARS ===
const marsOrbit = new THREE.Object3D();
scene.add(marsOrbit);

const marsGeometry = new THREE.SphereGeometry(1.1, 32, 32);
const marsMaterial = new THREE.MeshStandardMaterial({ color: 0xff3300 });
const mars = new THREE.Mesh(marsGeometry, marsMaterial);
mars.position.x = 22;
marsOrbit.add(mars);

// === JUPITER ===
const jupiterOrbit = new THREE.Object3D();
scene.add(jupiterOrbit);

const jupiterGeometry = new THREE.SphereGeometry(2.5, 32, 32);
const jupiterMaterial = new THREE.MeshStandardMaterial({ color: 0xd2b48c });
const jupiter = new THREE.Mesh(jupiterGeometry, jupiterMaterial);
jupiter.position.x = 28;
jupiterOrbit.add(jupiter);

// === SATURN ===
const saturnOrbit = new THREE.Object3D();
scene.add(saturnOrbit);

const saturnGeometry = new THREE.SphereGeometry(2.2, 32, 32);
const saturnMaterial = new THREE.MeshStandardMaterial({ color: 0xdeb887 });
const saturn = new THREE.Mesh(saturnGeometry, saturnMaterial);
saturn.position.x = 35;
saturnOrbit.add(saturn);

// Saturn Rings
const ringGeometry = new THREE.RingGeometry(2.6, 3.5, 64);
const ringMaterial = new THREE.MeshBasicMaterial({ color: 0xcccccc, side: THREE.DoubleSide });
const ring = new THREE.Mesh(ringGeometry, ringMaterial);
ring.rotation.x = Math.PI / 2;
ring.position.x = 35;
saturnOrbit.add(ring);

// === URANUS ===
const uranusOrbit = new THREE.Object3D();
scene.add(uranusOrbit);

const uranusGeometry = new THREE.SphereGeometry(1.9, 32, 32);
const uranusMaterial = new THREE.MeshStandardMaterial({ color: 0x66ffff });
const uranus = new THREE.Mesh(uranusGeometry, uranusMaterial);
uranus.position.x = 42;
uranusOrbit.add(uranus);

// === NEPTUNE ===
const neptuneOrbit = new THREE.Object3D();
scene.add(neptuneOrbit);

const neptuneGeometry = new THREE.SphereGeometry(1.8, 32, 32);
const neptuneMaterial = new THREE.MeshStandardMaterial({ color: 0x3333ff }); // deep blue
const neptune = new THREE.Mesh(neptuneGeometry, neptuneMaterial);
neptune.position.x = 50;
neptuneOrbit.add(neptune);

// === ANIMATION LOOP ===
function animate() {
  requestAnimationFrame(animate);

  sun.rotation.y += 0.001;

  mercuryOrbit.rotation.y += 0.01;
  venusOrbit.rotation.y += 0.008;
  earthOrbit.rotation.y += 0.006;
  marsOrbit.rotation.y += 0.0045;
  jupiterOrbit.rotation.y += 0.0025;
  saturnOrbit.rotation.y += 0.002;
  uranusOrbit.rotation.y += 0.0015;
  neptuneOrbit.rotation.y += 0.0012;

  renderer.render(scene, camera);
}

animate();
