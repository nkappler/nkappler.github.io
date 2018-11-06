import * as THREE from "three";

const container = document.querySelector("#root");


//Setup Renderer
const rndr = new THREE.WebGLRenderer();
let WIDTH = window.innerWidth;
let HEIGHT = window.innerHeight;
rndr.setSize(WIDTH, HEIGHT);

//Setup Camera
const FOV = 45;
let ASPECT = WIDTH / HEIGHT;
const NEAR = 0.1;
const FAR = 10000;
const camera = new THREE.PerspectiveCamera(FOV, ASPECT, NEAR, FAR);

camera.position.set(0, 0, 500);

//Scene setup
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000);
scene.add(camera);

container.appendChild(rndr.domElement);

//earth setup
const radius = 200;
const segments = 50;
const rings = 50;
const globe = new THREE.Group();
//earths tilt
globe.rotateZ(THREE.Math.degToRad(-12));
const north = new THREE.Vector3(0, 1, 0);
//start animation over atlantic ocean
globe.rotateOnAxis(north, THREE.Math.degToRad(-75));
scene.add(globe);

//wireframe sphere
var geometry = new THREE.SphereGeometry(radius * 1.2, segments / 3, rings / 3);
var wireframe = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({
    color: 0x66CCFF,
    wireframe: true,
    transparent: true,
    opacity: 0.1
}));
globe.add(wireframe);

//texture loader
const loader = new THREE.TextureLoader();
const sphere = new THREE.SphereGeometry(radius, segments, rings);
const material = new THREE.MeshPhongMaterial({
    map: loader.load('../img/world10mp.png'),
    bumpMap: loader.load('../img/worldbump.jpg'),
    // bumpScale: 0.5,
    specularMap: loader.load('../img/worldspecular.jpg')
});
const mesh = new THREE.Mesh(sphere, material);
globe.add(mesh);


globe.position.y = -HEIGHT / 10;
globe.position.x = WIDTH / 10;


//light setup
const sunlight = new THREE.DirectionalLight(0xFFFFFF, 3);
sunlight.position.set(globe.position.x, globe.position.y, globe.position.z);
sunlight.position.x -= 1000;
sunlight.position.y += 500;
sunlight.position.z -= 100;

sunlight.target.lookAt(globe.position);
scene.add(sunlight);

function update() {
    //rotate
    globe.rotateOnAxis(north, -0.0002);

    //render
    rndr.render(scene, camera);

    //schedule the next frame.
    requestAnimationFrame(update);
}

//schedule the first frame.
requestAnimationFrame(update);


window.addEventListener("resize", () => {
    WIDTH = window.innerWidth;
    HEIGHT = window.innerHeight;
    ASPECT = WIDTH / HEIGHT;
    rndr.setSize(WIDTH, HEIGHT);
    camera.aspect = ASPECT;
    camera.updateProjectionMatrix();
});
