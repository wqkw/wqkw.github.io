// Import the Three.js library
// import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.155.0/build/three.module.js';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

console.log(THREE); // Should display the Three.js module
console.log(OrbitControls); // Should not be undefined
console.log(GLTFLoader); // Should not be undefined
console.log("console test");

// Three.js basic setup
const container = document.getElementById('animation-container');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);

// Add OrbitControls for interactivity
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // Smooth dragging
controls.dampingFactor = 0.05;

// Create a cube
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x0000ff });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Remove auto-rotation
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;

    controls.update(); // Required for damping to work
    renderer.render(scene, camera);
}
animate();

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
