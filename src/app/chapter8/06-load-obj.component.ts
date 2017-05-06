import { Component, OnInit } from '@angular/core';

declare var Stats: any;
declare var dat: any;
declare var THREE: any;

@Component({
  selector: 'app-chapter8',
  templateUrl: './chapter8.component.html',
  styleUrls: ['./chapter8.component.css']
})
export class LoadObjComponent implements OnInit {

  constructor() { }

  ngOnInit() {


    var stats = initStats();

    // create a scene, that will hold all our elements such as objects, cameras and lights.
    var scene = new THREE.Scene();

    // create a camera, which defines where we're looking at.
    var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

    // create a render and set the size
    var webGLRenderer = new THREE.WebGLRenderer();
    webGLRenderer.setClearColor(new THREE.Color(0xaaaaff, 1.0));
    webGLRenderer.setSize(window.innerWidth, window.innerHeight);
    webGLRenderer.shadowMapEnabled = true;

    // position and point the camera to the center of the scene
    camera.position.x = 130;
    camera.position.y = 40;
    camera.position.z = 50;
    camera.lookAt(scene.position);
    scene.add(camera);

    // add spotlight for the shadows
    var spotLight = new THREE.DirectionalLight(0xffffff);
    spotLight.position.set(30, 40, 50);
    spotLight.intensity = 1;
    scene.add(spotLight);

    // add the output of the renderer to the html element
    document.getElementById("WebGL-output").appendChild(webGLRenderer.domElement);

    // call the render function
    var step = 0;


    // setup the control gui
    var controls = new function() {
      // we need the first child, since it's a multimaterial


    };

    var gui = new dat.GUI();
    var mesh;

    var loader = new THREE.OBJLoader();
    loader.load('../assets/models/pinecone.obj', function(loadedMesh) {
      var material = new THREE.MeshLambertMaterial({ color: 0x5C3A21 });

      // loadedMesh is a group of meshes. For
      // each mesh set the material, and compute the information
      // three.js needs for rendering.
      loadedMesh.children.forEach(function(child) {
        child.material = material;
        child.geometry.computeFaceNormals();
        child.geometry.computeVertexNormals();
      });

      mesh = loadedMesh;
      loadedMesh.scale.set(100, 100, 100);
      loadedMesh.rotation.x = -0.3;
      scene.add(loadedMesh);
    });


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