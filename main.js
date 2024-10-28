//import * as THREE from 'three';
import * as THREE from 'https://unpkg.com/three@0.154.0/build/three.module.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

function animate() {
    cube.rotation.x += 0.01; // rotando en 2 ejes 
    cube.rotation.y += 0.01; // debe de ir antes de que se renderice
	renderer.render( scene, camera );// manipulacion del componente
}
renderer.setAnimationLoop( animate );