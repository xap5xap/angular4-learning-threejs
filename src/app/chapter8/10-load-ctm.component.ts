import { Component, OnInit } from '@angular/core';

declare var Stats: any;
declare var dat: any;
declare var THREE: any;

@Component({
  selector: 'app-chapter8',
  templateUrl: './chapter8.component.html',
  styleUrls: ['./chapter8.component.css']
})
export class LoadCTMComponent implements OnInit {

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

    // position and point the camera to the center of the scene
    camera.position.x = 10;
    camera.position.y = 10;
    camera.position.z = 10;
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    // add spotlight for the shadows
    var spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(20, 20, 20);
    scene.add(spotLight);

    // add the output of the renderer to the html element
    document.getElementById("WebGL-output").appendChild(webGLRenderer.domElement);

    // call the render function
    var step = 0;


    var group;
    var gui = new dat.GUI();


    var loader = new THREE.CTMLoader();
    var group = new THREE.Object3D();

    loader.load("../assets/models/auditt_wheel.ctm", function(geometry) {
      var mat = new THREE.MeshLambertMaterial({ color: 0xff8888 });
      group = new THREE.Mesh(geometry, mat);
      group.scale.set(20, 20, 20);
      scene.add(group);
    }, {});


    render();


    function render() {
      stats.update();

      if (group) {
        group.rotation.y += 0.006;
        group.rotation.x += 0.009;
        // group.rotation.x+=0.006;
      }

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
