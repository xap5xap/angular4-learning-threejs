import { Component, OnInit } from '@angular/core';

declare var Stats: any;
declare var dat: any;
declare var THREE: any;
declare var TWEEN: any;

@Component({
  selector: 'app-chapter9',
  templateUrl: './chapter9.component.html',
  styleUrls: ['./chapter9.component.css']
})
export class TweenComponent implements OnInit {

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
    camera.lookAt(new THREE.Vector3(0, -2, 0));

    // add spotlight for the shadows
    var spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(20, 20, 20);
    scene.add(spotLight);

    // add the output of the renderer to the html element
    document.getElementById("WebGL-output").appendChild(webGLRenderer.domElement);

    // call the render function
    var step = 0;


    // setup the control gui
    var controls = new function() {
      // we need the first child, since it's a multimaterial


    };

    var pointCloud = new THREE.Object3D();
    var loadedGeometry;


    // create a tween
    // http://sole.github.io/tween.js/examples/03_graphs.html
    var posSrc = { pos: 1 };
    var tween = new TWEEN.Tween(posSrc).to({ pos: 0 }, 5000);
    tween.easing(TWEEN.Easing.Sinusoidal.InOut);

    var tweenBack = new TWEEN.Tween(posSrc).to({ pos: 1 }, 5000);
    tweenBack.easing(TWEEN.Easing.Sinusoidal.InOut);

    tween.chain(tweenBack);
    tweenBack.chain(tween);


    var onUpdate = function() {
      var count = 0;
      var pos = this.pos;

      loadedGeometry.vertices.forEach(function(e) {
        var newY = ((e.y + 3.22544) * pos) - 3.22544;
        pointCloud.geometry.vertices[count++].set(e.x, newY, e.z);
      });

      pointCloud.sortParticles = true;
    };

    tween.onUpdate(onUpdate);
    tweenBack.onUpdate(onUpdate);


    var gui = new dat.GUI();


    var loader = new THREE.PLYLoader();

    loader.load("../assets/models/test.ply", function(geometry) {
      loadedGeometry = geometry.clone();

      var material = new THREE.PointCloudMaterial({
        color: 0xffffff,
        size: 0.4,
        opacity: 0.6,
        transparent: true,
        blending: THREE.AdditiveBlending,
        map: generateSprite()
      });

      pointCloud = new THREE.PointCloud(geometry, material);
      pointCloud.sortParticles = true;

      tween.start();
      scene.add(pointCloud);
    });


    render();

    // from THREE.js examples
    function generateSprite() {

      var canvas = document.createElement('canvas');
      canvas.width = 16;
      canvas.height = 16;

      var context = canvas.getContext('2d');
      var gradient = context.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, canvas.width / 2);
      gradient.addColorStop(0, 'rgba(255,255,255,1)');
      gradient.addColorStop(0.2, 'rgba(0,255,255,1)');
      gradient.addColorStop(0.4, 'rgba(0,0,64,1)');
      gradient.addColorStop(1, 'rgba(0,0,0,1)');

      context.fillStyle = gradient;
      context.fillRect(0, 0, canvas.width, canvas.height);

      var texture = new THREE.Texture(canvas);
      texture.needsUpdate = true;
      return texture;

    }

    function render() {
      stats.update();
      TWEEN.update();
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
