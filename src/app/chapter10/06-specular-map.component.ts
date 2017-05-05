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
export class SpeculiarComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    var stats = initStats();

    // create a scene, that will hold all our elements such as objects, cameras and lights.
    var scene = new THREE.Scene();

    // create a camera, which defines where we're looking at.
    var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

    // create a render and set the size
    var webGLRenderer = new THREE.WebGLRenderer();
    webGLRenderer.setClearColor(new THREE.Color(0x000, 1.0));
    webGLRenderer.setSize(window.innerWidth, window.innerHeight);
    webGLRenderer.shadowMapEnabled = true;

    var sphere = createMesh(new THREE.SphereGeometry(10, 40, 40));
    // add the sphere to the scene
    scene.add(sphere);

    // position and point the camera to the center of the scene
    camera.position.x = 15;
    camera.position.y = 15;
    camera.position.z = 15;

    camera.lookAt(new THREE.Vector3(0, 0, 0));

    var orbitControls = new THREE.OrbitControls(camera);
    orbitControls.autoRotate = false;
    var clock = new THREE.Clock();

    var ambi = new THREE.AmbientLight(0x3300000);
    scene.add(ambi);

    var spotLight = new THREE.DirectionalLight(0xffffff);
    spotLight.position.set(350, 350, 150);
    spotLight.intensity = 0.4;


    scene.add(spotLight);

    // add the output of the renderer to the html element
    document.getElementById("WebGL-output").appendChild(webGLRenderer.domElement);

    // call the render function
    var step = 0;


    render();

    function createMesh(geom) {
      var planetTexture = THREE.ImageUtils.loadTexture("../assets/textures/planets/Earth.png");
      var specularTexture = THREE.ImageUtils.loadTexture("../assets/textures/planets/EarthSpec.png");
      var normalTexture = THREE.ImageUtils.loadTexture("../assets/textures/planets/EarthNormal.png");


      var planetMaterial = new THREE.MeshPhongMaterial();
      planetMaterial.specularMap = specularTexture;
      planetMaterial.specular = new THREE.Color(0xff0000);
      planetMaterial.shininess = 2;

      planetMaterial.normalMap = normalTexture;
      //            planetMaterial.map = planetTexture;
      //   planetMaterial.shininess = 150;


      // create a multimaterial
      var mesh = THREE.SceneUtils.createMultiMaterialObject(geom, [planetMaterial]);

      return mesh;
    }

    function render() {
      stats.update();

      //sphere.rotation.y=step+=0.01;
      var delta = clock.getDelta();
      orbitControls.update(delta);

      sphere.rotation.y += 0.005;

      // render using requestAnimationFrame
      requestAnimationFrame(render);
      webGLRenderer.render(scene, camera);
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
