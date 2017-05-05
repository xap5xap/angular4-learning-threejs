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
export class UVMappingComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    var stats = initStats();

    // create a scene, that will hold all our elements such as objects, cameras and lights.
    var scene = new THREE.Scene();

    // create a camera, which defines where we're looking at.
    var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

    // create a render and set the size
    var webGLRenderer = new THREE.WebGLRenderer();
    webGLRenderer.setClearColor(new THREE.Color(0xffffff, 1.0));
    webGLRenderer.setSize(window.innerWidth, window.innerHeight);
    webGLRenderer.shadowMapEnabled = true;

    // position and point the camera to the center of the scene
    camera.position.x = -30;
    camera.position.y = 40;
    camera.position.z = 50;
    camera.lookAt(new THREE.Vector3(0, 0, 0));


    // add the output of the renderer to the html element
    document.getElementById("WebGL-output").appendChild(webGLRenderer.domElement);

    // call the render function
    var step = 0;


    // setup the control gui
    var controls = new function() {
      // we need the first child, since it's a multimaterial
      this.loadCube1 = function() {

        var loader = new THREE.OBJLoader();
        loader.load('../assets/models/UVCube1.obj', function(geometry) {
          if (mesh) scene.remove(mesh);
          var material = new THREE.MeshBasicMaterial({ color: 0xffffff });
          var texture = THREE.ImageUtils.loadTexture("../assets/textures/ash_uvgrid01.jpg");
          material.map = texture;

          geometry.children[0].material = material;
          mesh = geometry;

          geometry.scale.set(15, 15, 15);

          scene.add(geometry);
        });
      };

      this.loadCube2 = function() {

        var loader = new THREE.OBJLoader();
        loader.load('../assets/models/UVCube2.obj', function(geometry) {
          if (mesh) scene.remove(mesh);
          var material = new THREE.MeshBasicMaterial({ color: 0xffffff });
          var texture = THREE.ImageUtils.loadTexture("../assets/textures/ash_uvgrid01.jpg");
          material.map = texture;

          geometry.children[0].material = material;

          mesh = geometry;
          geometry.scale.set(15, 15, 15);
          geometry.rotation.x = -0.3;


          scene.add(geometry);
        });
      };

    };

    var gui = new dat.GUI();
    gui.add(controls, 'loadCube1');
    gui.add(controls, 'loadCube2');
    var mesh;

    controls.loadCube1();


    render();


    function render() {
      stats.update();

      if (mesh) {
        mesh.rotation.y += 0.006;
        mesh.rotation.x += 0.006;
        //                mesh.rotation.y+=0.006;
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
