import { Component, OnInit } from '@angular/core';

declare var Stats: any;
declare var dat: any;
declare var THREE: any;
declare var chroma: any;
declare var TWEEN: any;

@Component({
  selector: 'app-chapter9',
  templateUrl: './chapter9.component.html',
  styleUrls: ['./chapter9.component.css']
})
export class GLTFAnimationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var stats = initStats();

    // create a scene, that will hold all our elements such as objects, cameras and lights.
    var scene = new THREE.Scene();

    // create a camera, which defines where we're looking at.
    var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

    // create a render and set the size
    var webGLRenderer = new THREE.WebGLRenderer();
    webGLRenderer.setClearColor(new THREE.Color(0xdddddd, 1.0));
    webGLRenderer.setSize(window.innerWidth, window.innerHeight);
    webGLRenderer.shadowMapEnabled = true;

    // position and point the camera to the center of the scene
    camera.position.x = -50;
    camera.position.y = 40;
    camera.position.z = 60;
    camera.lookAt(new THREE.Vector3(0, 0, 0));


    // add spotlight for the shadows
    var spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(-50, 70, 60);
    spotLight.intensity = 1;
    scene.add(spotLight);

    // add the output of the renderer to the html element
    document.getElementById("WebGL-output").appendChild(webGLRenderer.domElement);


    var mesh;
    var clock = new THREE.Clock();

    var loader = new THREE.glTFLoader();
    loader.load('../assets/models/gltf/Cesium_Air.gltf', function(scene) {
      console.log(scene);


      //            scene.add(mesh);
    });

    render();


    function render() {
      stats.update();
      var delta = clock.getDelta();

      if (mesh) {

        //            mesh.rotation.x+=0.006;
        //                mesh.rotation.y+=0.006;
        if (mesh) {
          mesh.updateAnimation(delta * 1000);
          //    mesh.rotation.y+=0.01;
        }
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
