import { Component, OnInit } from '@angular/core';

declare var Stats: any;
declare var dat: any;
declare var THREE: any;
declare var chroma: any;
declare var TWEEN: any;

@Component({
  selector: 'app-chapter10',
  templateUrl: './chapter10.component.html',
  styleUrls: ['./chapter10.component.css']
})
export class LightMapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var stats = initStats();

    // create a scene, that will hold all our elements such as objects, cameras and lights.
    var scene = new THREE.Scene();

    // create a camera, which defines where we're looking at.
    var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

    // create a render and set the size
    var renderer;
    var webGLRenderer = new THREE.WebGLRenderer();
    webGLRenderer.setClearColor(new THREE.Color(0xEEEEEE, 1.0));
    webGLRenderer.setSize(window.innerWidth, window.innerHeight);
    webGLRenderer.shadowMapEnabled = true;

    renderer = webGLRenderer;

    var groundGeom = new THREE.PlaneGeometry(95, 95, 1, 1);
    var lm = THREE.ImageUtils.loadTexture('../assets/textures/lightmap/lm-1.png');
    var wood = THREE.ImageUtils.loadTexture('../assets/textures/general/floor-wood.jpg');
    var groundMaterial = new THREE.MeshBasicMaterial(
      {
        color: 0x777777,
        lightMap: lm,
        map: wood
      });


    //        console.log(groundGeom.faceVertexUvs[1]);
    // http://stackoverflow.com/questions/15137695/three-js-lightmap-causes-an-error-webglrenderingcontext-gl-error-gl-invalid-op
    // https://github.com/mrdoob/three.js/pull/2372
    // lightmaps use own mapping of uvs (faceVertexUvs[1])
    // so need to create those. Reason is explained
    // here. So we can use a low res map for lightmap
    // and a high res map for textures.
    groundGeom.faceVertexUvs[1] = groundGeom.faceVertexUvs[0];
    //        console.log(groundGeom.faceVertexUvs[1]);


    var groundMesh = new THREE.Mesh(groundGeom, groundMaterial);

    groundMesh.rotation.x = -Math.PI / 2;
    groundMesh.position.y = 0;
    scene.add(groundMesh);


    var cubeGeometry = new THREE.BoxGeometry(12, 12, 12);
    var cubeGeometry2 = new THREE.BoxGeometry(6, 6, 6);


    var meshMaterial = new THREE.MeshBasicMaterial();
    meshMaterial.map = THREE.ImageUtils.loadTexture('../assets/textures/general/stone.jpg');


    var cube = new THREE.Mesh(cubeGeometry, meshMaterial);
    var cube2 = new THREE.Mesh(cubeGeometry2, meshMaterial);
    cube.position.set(0.9, 6, -12);
    cube2.position.set(-13.2, 3, -6);


    // add the sphere to the scene
    scene.add(cube);
    scene.add(cube2);

    // position and point the camera to the center of the scene
    camera.position.x = -20;
    camera.position.y = 20;
    camera.position.z = 30;
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    // add subtle ambient lighting
    var ambientLight = new THREE.AmbientLight(0x0c0c0c);
    scene.add(ambientLight);


    // add the output of the renderer to the html element
    document.getElementById("WebGL-output").appendChild(renderer.domElement);


    render();

    function render() {
      stats.update();

      // render using requestAnimationFrame
      requestAnimationFrame(render);
      renderer.render(scene, camera);
    }

    function initStats() {

      var stats = new Stats();

      stats.setMode(0); // 0: fps, 1: ms


      // Align top-left
      stats.domElement.style.position = 'absolute';
      stats.domElement.style.left = '0px';
      stats.domElement.style.top = '0px';

      document.getElementById("Stats-output").appendChild(stats.domElement);

      return stats;
    }
  }

}