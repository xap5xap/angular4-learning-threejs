import { Component, OnInit } from '@angular/core';

declare var Stats: any;
declare var dat: any;
declare var THREE: any;

@Component({
  selector: 'app-chapter8',
  templateUrl: './chapter8.component.html',
  styleUrls: ['./chapter8.component.css']
})
export class MerginComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    var stats = initStats();

    // create a scene, that will hold all our elements such as objects, cameras and lights.
    var scene = new THREE.Scene();

    // create a camera, which defines where we're looking at.
    var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);

    // create a render and set the size
    var renderer = new THREE.WebGLRenderer();

    renderer.setClearColor(new THREE.Color(0x00000, 1.0));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMapEnabled = true;

    // position and point the camera to the center of the scene
    camera.position.x = 0;
    camera.position.y = 40;
    camera.position.z = 50;
    camera.lookAt(scene.position);

    // add the output of the renderer to the html element
    document.getElementById("WebGL-output").appendChild(renderer.domElement);

    // call the render function
    var step = 0;

    var cubeMaterial = new THREE.MeshNormalMaterial({ color: 0x00ff00, transparent: true, opacity: 0.5 });
    var controls = new function() {
      this.cameraNear = camera.near;
      this.cameraFar = camera.far;
      this.rotationSpeed = 0.02;
      this.combined = false;


      this.numberOfObjects = 500;

      this.redraw = function() {
        var toRemove = [];
        scene.traverse(function(e) {
          if (e instanceof THREE.Mesh) toRemove.push(e);
        });
        toRemove.forEach(function(e) {
          scene.remove(e)
        });

        // add a large number of cubes
        if (controls.combined) {
          var geometry = new THREE.Geometry();
          for (var i = 0; i < controls.numberOfObjects; i++) {
            var cubeMesh = addcube();
            cubeMesh.updateMatrix();
            geometry.merge(cubeMesh.geometry, cubeMesh.matrix);
          }
          scene.add(new THREE.Mesh(geometry, cubeMaterial));

        } else {
          for (var i = 0; i < controls.numberOfObjects; i++) {
            scene.add(controls.addCube());
          }
        }
      };


      this.addCube = addcube;

      this.outputObjects = function() {
        console.log(scene.children);
      }
    };

    var gui = new dat.GUI();

    gui.add(controls, 'numberOfObjects', 0, 20000);
    gui.add(controls, 'combined').onChange(controls.redraw);
    gui.add(controls, 'redraw');


    controls.redraw();

    render();

    var rotation = 0;

    function addcube() {

      var cubeSize = 1.0;
      var cubeGeometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);

      var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
      cube.castShadow = true;

      // position the cube randomly in the scene
      cube.position.x = -60 + Math.round((Math.random() * 100));
      cube.position.y = Math.round((Math.random() * 10));
      cube.position.z = -150 + Math.round((Math.random() * 175));

      // add the cube to the scene
      return cube;
    }
    function render() {

      rotation += 0.005;

      stats.update();

      //            scene.rotation.x+=0.02;

      // rotate the cubes around its axes
      //            scene.traverse(function(e) {
      //                if (e instanceof THREE.Mesh ) {
      //
      //                    e.rotation.x+=controls.rotationSpeed;
      //                    e.rotation.y+=controls.rotationSpeed;
      //                    e.rotation.z+=controls.rotationSpeed;
      //                }
      //            });

      camera.position.x = Math.sin(rotation) * 50;
      // camera.position.y = Math.sin(rotation) * 40;
      camera.position.z = Math.cos(rotation) * 50;
      camera.lookAt(scene.position);

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
