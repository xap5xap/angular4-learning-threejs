import { Component, OnInit, HostListener} from '@angular/core';
import * as THREE from 'three';

declare var Stats: any;
declare var dat: any;

@Component({
  selector: 'app-screen-size',
  templateUrl: './chapter1.component.html',
  styleUrls: ['./chapter1.component.css']
})
export class ScreenSizeComponent implements OnInit {
  camera;
  scene;
  renderer;
  start;
  stats;
  cube;
  step;
  sphere;
  controls;

  constructor() {
  }

  ngOnInit() {
    this.stats = this.initStats();

    // create a scene, that will hold all our elements such as objects, cameras and lights.
    this.scene = new THREE.Scene();

    // create a camera, which defines where we're looking at.
    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

    // create a render and set the size
    this.renderer = new THREE.WebGLRenderer();

    this.renderer.setClearColor(new THREE.Color(0xEEEEEE));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.shadowMapEnabled = true;

    // create the ground plane
    var planeGeometry = new THREE.PlaneGeometry(60, 20, 1, 1);
    var planeMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff });
    var plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.receiveShadow = true;

    // rotate and position the plane
    plane.rotation.x = -0.5 * Math.PI;
    plane.position.x = 15;
    plane.position.y = 0;
    plane.position.z = 0;

    // add the plane to the scene
    this.scene.add(plane);

    // create a cube
    var cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
    var cubeMaterial = new THREE.MeshLambertMaterial({ color: 0xff0000 });
    this.cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    this.cube.castShadow = true;

    // position the cube
    this.cube.position.x = -4;
    this.cube.position.y = 3;
    this.cube.position.z = 0;

    // add the cube to the scene
    this.scene.add(this.cube);

    var sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
    var sphereMaterial = new THREE.MeshLambertMaterial({ color: 0x7777ff });
    this.sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

    // position the sphere
    this.sphere.position.x = 20;
    this.sphere.position.y = 0;
    this.sphere.position.z = 2;
    this.sphere.castShadow = true;

    // add the sphere to the scene
    this.scene.add(this.sphere);

    // position and point the camera to the center of the scene
    this.camera.position.x = -30;
    this.camera.position.y = 40;
    this.camera.position.z = 30;
    this.camera.lookAt(this.scene.position);

    // add subtle ambient lighting
    var ambientLight = new THREE.AmbientLight(0x0c0c0c);
    this.scene.add(ambientLight);

    // add spotlight for the shadows
    var spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(-40, 60, -10);
    spotLight.castShadow = true;
    this.scene.add(spotLight);

    // add the output of the renderer to the html element
    document.getElementById("WebGL-output").appendChild(this.renderer.domElement);

    // call the render function
    this.step = 0;

    this.controls = {
      rotationSpeed: 0.02,
      bouncingSpeed: 0.03
    };

    var gui = new dat.GUI();
    gui.add(this.controls, 'rotationSpeed', 0, 0.5);
    gui.add(this.controls, 'bouncingSpeed', 0, 0.5);

    this.render();
  }

  render = () => {
    this.stats.update();
    // rotate the cube around its axes
    this.cube.rotation.x += this.controls.rotationSpeed;
    this.cube.rotation.y += this.controls.rotationSpeed;
    this.cube.rotation.z += this.controls.rotationSpeed;

    // bounce the sphere up and down
    this.step += this.controls.bouncingSpeed;
    this.sphere.position.x = 20 + (10 * (Math.cos(this.step)));
    this.sphere.position.y = 2 + (10 * Math.abs(Math.sin(this.step)));

    // render using requestAnimationFrame
    requestAnimationFrame(this.render);
    this.renderer.render(this.scene, this.camera);
  }

  initStats() {

    var stats = new Stats();

    stats.setMode(0); // 0: fps, 1: ms

    // Align top-left
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';

    document.getElementById("Stats-output").appendChild(stats.domElement);

    return stats;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.camera.aspect = event.target.innerWidth / event.target.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(event.target.innerWidth, event.target.innerHeight);
  }

}
