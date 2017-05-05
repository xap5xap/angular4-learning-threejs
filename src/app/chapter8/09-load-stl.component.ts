import { Component, OnInit } from '@angular/core';

declare var Stats: any;
declare var dat: any;
declare var THREE: any;

@Component({
  selector: 'app-chapter8',
  templateUrl: './chapter8.component.html',
  styleUrls: ['./chapter8.component.css']
})
export class LoadSTLComponent implements OnInit {

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
    camera.position.x = 150;
    camera.position.y = 150;
    camera.position.z = 150;
    camera.lookAt(new THREE.Vector3(0, 40, 0));

    // add spotlight for the shadows
    var spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(150, 150, 150);
    scene.add(spotLight);

    // add the output of the renderer to the html element
    document.getElementById("WebGL-output").appendChild(webGLRenderer.domElement);

    // call the render function
    var step = 0;


    // setup the control gui
    var controls = new function() {
      // we need the first child, since it's a multimaterial


    };

    var group;
    var gui = new dat.GUI();


    // model from http://www.thingiverse.com/thing:69709
    var loader = new THREE.STLLoader();
    var group = new THREE.Object3D();
    loader.load("../assets/models/SolidHead_2_lowPoly_42k.stl", function(geometry) {
      console.log(geometry);
      var mat = new THREE.MeshLambertMaterial({ color: 0x7777ff });
      group = new THREE.Mesh(geometry, mat);
      group.rotation.x = -0.5 * Math.PI;
      group.scale.set(0.6, 0.6, 0.6);
      scene.add(group);
    });


    render();


    function render() {
      stats.update();

      if (group) {
        group.rotation.z += 0.006;
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
