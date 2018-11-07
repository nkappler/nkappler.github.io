import * as THREE from "three";
import { ProgressTextureLoader } from "./ProgressTextureLoader";

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
globe.rotateOnAxis(north, THREE.Math.degToRad(-90));
scene.add(globe);

//wireframe sphere
const geometry = new THREE.SphereGeometry(radius * 1.2, segments / 3, rings / 3);
const wireframe = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({
    color: 0x66CCFF,
    wireframe: true,
    transparent: true,
    opacity: 0.1
}));
globe.add(wireframe);

//texture loader TODO : use Promises instead / ProgressTextureLoader should return Texture in any case
const texloaded = {
    map: false,
    bumpMap: false,
    specularMap: false,
    emissiveMap: false
};

const loader = new ProgressTextureLoader();
const sphere = new THREE.SphereGeometry(radius, segments, rings);

let map: THREE.Texture = null;
let bumpMap: THREE.Texture = null;
let specularMap: THREE.Texture = null;
// let emissiveMap: THREE.Texture = null;

loader.load('../img/world10mp.png', (tex) => {
    map = tex;
    texloaded.map = true;
    updateMesh();
}, (e) => console.log(e));
loader.load('../img/worldbump.png', (tex) => {
    bumpMap = tex;
    texloaded.bumpMap = true;
    updateMesh();
}, (e) => console.log(e));
loader.load('../img/worldspecular.jpg', (tex) => {
    specularMap = tex;
    texloaded.specularMap = true;
    updateMesh();
}, (e) => console.log(e));
// loader.load('../img/5_night_8k.jpg', (tex) => {
//     emissiveMap = tex;
//     texloaded.emissiveMap = true;
//     updateMesh();
// }, (e) => console.log(e));

const updateMesh = () => {
    if (texloaded.map && texloaded.bumpMap && texloaded.specularMap) {
        const material = new THREE.MeshPhongMaterial({
            map,
            bumpMap,
            // bumpScale: 0.5,
            specularMap,
            // emissiveMap,
            // emissive: 0xFFFFCC,
            // emissiveIntensity: 0.3
        });
        const mesh = new THREE.Mesh(sphere, material);
        globe.add(mesh);
    }
};

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
    globe.rotateOnAxis(north, 0.0002);

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

    const factor = (1000 / Math.min(window.innerHeight, window.innerWidth));
    document.body.style.perspective = 100 / (factor * factor) + "px";
});

window.addEventListener("mousemove", (ev) => {
    document.getElementsByTagName('style')[0].innerHTML = `
        .tilt {
            transform: rotateX(${(ev.pageY / window.innerHeight) - 0.5}deg) rotateY(${-(ev.pageX / window.innerWidth) + 0.5}deg);
        }
    `;
});
