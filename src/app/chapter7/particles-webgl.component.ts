import { Component, OnInit } from '@angular/core';
declare var Stats: any;
declare var dat: any;
declare var THREE: any;


@Component({
  selector: 'app-chapter7',
  templateUrl: './chapter7.component.html',
  styleUrls: ['./chapter7.component.css']
})
export class ParticlesWebglComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    var stats = initStats();

    // create a scene, that will hold all our elements such as objects, cameras and lights.
    var scene = new THREE.Scene();

    // create a camera, which defines where we're looking at.
    var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

    // create a render and set the size
    var webGLRenderer = new THREE.WebGLRenderer();
    webGLRenderer.setClearColor(new THREE.Color(0x000000, 1.0));
    webGLRenderer.setSize(window.innerWidth, window.innerHeight);

    // position and point the camera to the center of the scene
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 150;

    // add the output of the renderer to the html element
    document.getElementById("WebGL-output").appendChild(webGLRenderer.domElement);


    createParticles();
    render();

    function createParticles() {


      var geom = new THREE.Geometry();
      var material = new THREE.PointCloudMaterial({ size: 4, vertexColors: true, color: 0xffffff });

      for (var x = -5; x < 5; x++) {
        for (var y = -5; y < 5; y++) {
          var particle = new THREE.Vector3(x * 10, y * 10, 0);
          geom.vertices.push(particle);
          geom.colors.push(new THREE.Color(Math.random() * 0x00ffff));
        }
      }

      var cloud = new THREE.PointCloud(geom, material);
      scene.add(cloud);
    }


    function render() {
      stats.update();


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
