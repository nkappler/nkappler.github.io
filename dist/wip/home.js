"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var THREE = require("three");
var ProgressTextureLoader_1 = require("./ProgressTextureLoader");
require("./styles/background.less");
var container = document.querySelector("#root");
//Setup Renderer
var rndr = new THREE.WebGLRenderer();
var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;
rndr.setSize(WIDTH, HEIGHT);
//Setup Camera
var FOV = 45;
var ASPECT = WIDTH / HEIGHT;
var NEAR = 0.1;
var FAR = 10000;
var camera = new THREE.PerspectiveCamera(FOV, ASPECT, NEAR, FAR);
camera.position.set(0, 0, 500);
//Scene setup
var scene = new THREE.Scene();
scene.background = new THREE.Color(0x000);
scene.add(camera);
container.appendChild(rndr.domElement);
//earth setup
var radius = 200;
var segments = 50;
var rings = 50;
var globe = new THREE.Group();
//earths tilt
globe.rotateZ(THREE.Math.degToRad(-12));
var north = new THREE.Vector3(0, 1, 0);
//start animation over atlantic ocean
globe.rotateOnAxis(north, THREE.Math.degToRad(-90));
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
//texture loader TODO : use Promises instead / ProgressTextureLoader should return Texture in any case
var texloaded = {
    map: false,
    bumpMap: false,
    specularMap: false,
    emissiveMap: false
};
var loader = new ProgressTextureLoader_1.ProgressTextureLoader();
var sphere = new THREE.SphereGeometry(radius, segments, rings);
var map = null;
var bumpMap = null;
var specularMap = null;
// let emissiveMap: THREE.Texture = null;
loader.load('../img/world10mp.png', function (tex) {
    map = tex;
    texloaded.map = true;
    updateMesh();
}, function (e) { return console.log(e); });
loader.load('../img/worldbump.png', function (tex) {
    bumpMap = tex;
    texloaded.bumpMap = true;
    updateMesh();
}, function (e) { return console.log(e); });
loader.load('../img/worldspecular.jpg', function (tex) {
    specularMap = tex;
    texloaded.specularMap = true;
    updateMesh();
}, function (e) { return console.log(e); });
// loader.load('../img/5_night_8k.jpg', (tex) => {
//     emissiveMap = tex;
//     texloaded.emissiveMap = true;
//     updateMesh();
// }, (e) => console.log(e));
var updateMesh = function () {
    if (texloaded.map && texloaded.bumpMap && texloaded.specularMap) {
        var material = new THREE.MeshPhongMaterial({
            map: map,
            bumpMap: bumpMap,
            // bumpScale: 0.5,
            specularMap: specularMap,
        });
        var mesh = new THREE.Mesh(sphere, material);
        globe.add(mesh);
    }
};
globe.position.y = -HEIGHT / 10;
globe.position.x = WIDTH / 10;
//light setup
var sunlight = new THREE.DirectionalLight(0xFFFFFF, 3);
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
window.addEventListener("resize", function () {
    WIDTH = window.innerWidth;
    HEIGHT = window.innerHeight;
    ASPECT = WIDTH / HEIGHT;
    rndr.setSize(WIDTH, HEIGHT);
    camera.aspect = ASPECT;
    camera.updateProjectionMatrix();
    var factor = (1000 / Math.min(window.innerHeight, window.innerWidth));
    document.body.style.perspective = 100 / (factor * factor) + "px";
});
window.addEventListener("mousemove", function (ev) {
    document.getElementsByTagName('style')[0].innerHTML = "\n        .tilt {\n            transform: rotateX(" + ((ev.pageY / window.innerHeight) - 0.5) + "deg) rotateY(" + (-(ev.pageX / window.innerWidth) + 0.5) + "deg);\n        }\n    ";
});
//# sourceMappingURL=home.js.map