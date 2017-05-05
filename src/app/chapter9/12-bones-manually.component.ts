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
export class BonesManualComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var stats = initStats();

    // create a scene, that will hold all our elements such as objects, cameras and lights.
    var scene = new THREE.Scene();

    // create a camera, which defines where we're looking at.
    var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

    // create a render and set the size
    var webGLRenderer = new THREE.WebGLRenderer();
    webGLRenderer.setClearColor(new THREE.Color(0xEEEEEE, 1.0));
    webGLRenderer.setSize(window.innerWidth, window.innerHeight);
    webGLRenderer.shadowMapEnabled = true;

    // position and point the camera to the center of the scene
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 4;
    camera.lookAt(new THREE.Vector3(0, 0, 0));


    // add spotlight for the shadows
    var spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(0, 50, 30);
    spotLight.intensity = 2;
    scene.add(spotLight);

    // add the output of the renderer to the html element
    document.getElementById("WebGL-output").appendChild(webGLRenderer.domElement);

    // call the render function
    var step = 0;

    var mesh;
    var clock = new THREE.Clock();

    var loader = new THREE.JSONLoader();
    loader.load('../assets/models/hand-1.js', function(geometry, mat) {
      var mat = new THREE.MeshLambertMaterial({ color: 0xF0C8C9, skinning: true });
      mesh = new THREE.SkinnedMesh(geometry, mat);

      // rotate the complete hand
      mesh.rotation.x = 0.5 * Math.PI;
      mesh.rotation.z = 0.7 * Math.PI;

      // add the mesh
      scene.add(mesh);

      // and start the animation
      tween.start();

    }, '../assets/models');

    var onUpdate = function() {
      var pos = this.pos;

      console.log(mesh.skeleton);

      // rotate the fingers
      mesh.skeleton.bones[5].rotation.set(0, 0, pos);
      mesh.skeleton.bones[6].rotation.set(0, 0, pos);
      mesh.skeleton.bones[10].rotation.set(0, 0, pos);
      mesh.skeleton.bones[11].rotation.set(0, 0, pos);
      mesh.skeleton.bones[15].rotation.set(0, 0, pos);
      mesh.skeleton.bones[16].rotation.set(0, 0, pos);
      mesh.skeleton.bones[20].rotation.set(0, 0, pos);
      mesh.skeleton.bones[21].rotation.set(0, 0, pos);

      // rotate the wrist
      mesh.skeleton.bones[1].rotation.set(pos, 0, 0);
    };

    var tween = new TWEEN.Tween({ pos: -1 })
      .to({ pos: 0 }, 3000)
      .easing(TWEEN.Easing.Cubic.InOut)
      .yoyo(true)
      .repeat(Infinity)
      .onUpdate(onUpdate);

    render();


    function render() {
      stats.update();
      TWEEN.update();

      var delta = clock.getDelta();

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
