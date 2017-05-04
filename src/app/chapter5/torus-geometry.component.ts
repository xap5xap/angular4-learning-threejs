import { Component, OnInit } from '@angular/core';
declare var Stats: any;
declare var dat: any;
declare var THREE: any;

@Component({
  selector: 'app-chapter5',
  templateUrl: './chapter5.component.html',
  styleUrls: ['./chapter5.component.css']
})
export class TorusGeometryComponent implements OnInit {

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

    var torus = createMesh(new THREE.TorusGeometry(10, 10, 8, 6, Math.PI * 2));
    // add the sphere to the scene
    scene.add(torus);

    // position and point the camera to the center of the scene
    camera.position.x = -30;
    camera.position.y = 40;
    camera.position.z = 50;
    camera.lookAt(new THREE.Vector3(10, 0, 0));

    // add the output of the renderer to the html element
    document.getElementById("WebGL-output").appendChild(webGLRenderer.domElement);

    // call the render function
    var step = 0;


    // setup the control gui
    var controls = new function() {
      // we need the first child, since it's a multimaterial

      this.radius = torus.children[0].geometry.parameters.radius;
      this.tube = torus.children[0].geometry.parameters.tube;
      this.radialSegments = torus.children[0].geometry.parameters.radialSegments;
      this.tubularSegments = torus.children[0].geometry.parameters.tubularSegments;
      this.arc = torus.children[0].geometry.parameters.arc;

      this.redraw = function() {
        // remove the old plane
        scene.remove(torus);
        // create a new one

        torus = createMesh(new THREE.TorusGeometry(controls.radius, controls.tube, Math.round(controls.radialSegments), Math.round(controls.tubularSegments), controls.arc));
        // add it to the scene.
        scene.add(torus);
      };
    };

    var gui = new dat.GUI();
    gui.add(controls, 'radius', 0, 40).onChange(controls.redraw);
    gui.add(controls, 'tube', 0, 40).onChange(controls.redraw);
    gui.add(controls, 'radialSegments', 0, 40).onChange(controls.redraw);
    gui.add(controls, 'tubularSegments', 1, 20).onChange(controls.redraw);
    gui.add(controls, 'arc', 0, Math.PI * 2).onChange(controls.redraw);


    render();

    function createMesh(geom) {

      // assign two materials
      var meshMaterial = new THREE.MeshNormalMaterial();
      meshMaterial.side = THREE.DoubleSide;
      var wireFrameMat = new THREE.MeshBasicMaterial();
      wireFrameMat.wireframe = true;

      // create a multimaterial
      var mesh = THREE.SceneUtils.createMultiMaterialObject(geom, [meshMaterial, wireFrameMat]);

      return mesh;
    }

    function render() {
      stats.update();

      torus.rotation.y = step += 0.01;

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