import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';

declare var Stats: any;

@Component({
  selector: 'app-chapter1',
  templateUrl: './chapter1.component.html',
  styleUrls: ['./chapter1.component.css']
})
export class Chapter1Component implements OnInit {

  constructor() { }

  ngOnInit() {
    // this.firstScene();
    // this.materialsLight();
    this.materialsLightAnimation();

  }

  firstScene() {

    // create a scene, that will hold all our elements such as objects, cameras and lights.
    var scene = new THREE.Scene();

    // create a camera, which defines where we're looking at.
    var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

    // create a render and set the size
    var renderer = new THREE.WebGLRenderer();
    // renderer.setClearColorHex();
    renderer.setClearColor(new THREE.Color(0xEEEEEE));
    renderer.setSize(window.innerWidth, window.innerHeight);

    // show axes in the screen
    var axes = new THREE.AxisHelper(20);
    scene.add(axes);

    // create the ground plane
    var planeGeometry = new THREE.PlaneGeometry(60, 20);
    var planeMaterial = new THREE.MeshBasicMaterial({ color: 0xcccccc });
    var plane = new THREE.Mesh(planeGeometry, planeMaterial);

    // rotate and position the plane
    plane.rotation.x = -0.5 * Math.PI;
    plane.position.x = 15;
    plane.position.y = 0;
    plane.position.z = 0;

    // add the plane to the scene
    scene.add(plane);

    // create a cube
    var cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
    var cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

    // position the cube
    cube.position.x = -4;
    cube.position.y = 3;
    cube.position.z = 0;

    // add the cube to the scene
    scene.add(cube);

    // create a sphere
    var sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
    var sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x7777ff, wireframe: true });
    var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

    // position the sphere
    sphere.position.x = 20;
    sphere.position.y = 4;
    sphere.position.z = 2;

    // add the sphere to the scene
    scene.add(sphere);

    // position and point the camera to the center of the scene
    camera.position.x = -30;
    camera.position.y = 40;
    camera.position.z = 30;
    camera.lookAt(scene.position);

    // add the output of the renderer to the html element
    document.getElementById("WebGL-output").appendChild(renderer.domElement);

    // render the scene
    renderer.render(scene, camera);
  }

  materialsLight() {

    // create a scene, that will hold all our elements such as objects, cameras and lights.
    var scene = new THREE.Scene();

    // create a camera, which defines where we're looking at.
    var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

    // create a render and set the size
    var renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(new THREE.Color(0xEEEEEE));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;

    // create the ground plane
    var planeGeometry = new THREE.PlaneGeometry(60, 20);
    var planeMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff });
    var plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.receiveShadow = true;

    // rotate and position the plane
    plane.rotation.x = -0.5 * Math.PI;
    plane.position.x = 15;
    plane.position.y = 0;
    plane.position.z = 0;

    // add the plane to the scene
    scene.add(plane);

    // create a cube
    var cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
    var cubeMaterial = new THREE.MeshLambertMaterial({ color: 0xff0000 });
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.castShadow = true;

    // position the cube
    cube.position.x = -4;
    cube.position.y = 3;
    cube.position.z = 0;

    // add the cube to the scene
    scene.add(cube);

    var sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
    var sphereMaterial = new THREE.MeshLambertMaterial({ color: 0x7777ff });
    var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

    // position the sphere
    sphere.position.x = 20;
    sphere.position.y = 4;
    sphere.position.z = 2;
    sphere.castShadow = true;

    // add the sphere to the scene
    scene.add(sphere);

    // position and point the camera to the center of the scene
    camera.position.x = -30;
    camera.position.y = 40;
    camera.position.z = 30;
    camera.lookAt(scene.position);

    // add spotlight for the shadows
    var spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(-40, 60, -10);
    spotLight.castShadow = true;
    scene.add(spotLight);

    // add the output of the renderer to the html element
    document.getElementById("WebGL-output").appendChild(renderer.domElement);

    // call the render function
    renderer.render(scene, camera);
  }


  materialsLightAnimation() {
    var stats = initStats();

      // create a scene, that will hold all our elements such as objects, cameras and lights.
      var scene = new THREE.Scene();

      // create a camera, which defines where we're looking at.
      var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

      // create a render and set the size
      var renderer = new THREE.WebGLRenderer();

      renderer.setClearColor(new THREE.Color(0xEEEEEE));
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.shadowMapEnabled = true;

      // create the ground plane
      var planeGeometry = new THREE.PlaneGeometry(60, 20, 1, 1);
      var planeMaterial = new THREE.MeshLambertMaterial({color: 0xffffff});
      var plane = new THREE.Mesh(planeGeometry, planeMaterial);
      plane.receiveShadow = true;

      // rotate and position the plane
      plane.rotation.x = -0.5 * Math.PI;
      plane.position.x = 15;
      plane.position.y = 0;
      plane.position.z = 0;

      // add the plane to the scene
      scene.add(plane);

      // create a cube
      var cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
      var cubeMaterial = new THREE.MeshLambertMaterial({color: 0xff0000});
      var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
      cube.castShadow = true;

      // position the cube
      cube.position.x = -4;
      cube.position.y = 3;
      cube.position.z = 0;

      // add the cube to the scene
      scene.add(cube);

      var sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
      var sphereMaterial = new THREE.MeshLambertMaterial({color: 0x7777ff});
      var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

      // position the sphere
      sphere.position.x = 20;
      sphere.position.y = 0;
      sphere.position.z = 2;
      sphere.castShadow = true;

      // add the sphere to the scene
      scene.add(sphere);

      // position and point the camera to the center of the scene
      camera.position.x = -30;
      camera.position.y = 40;
      camera.position.z = 30;
      camera.lookAt(scene.position);

      // add subtle ambient lighting
      var ambientLight = new THREE.AmbientLight(0x0c0c0c);
      scene.add(ambientLight);

      // add spotlight for the shadows
      var spotLight = new THREE.SpotLight(0xffffff);
      spotLight.position.set(-40, 60, -10);
      spotLight.castShadow = true;
      scene.add(spotLight);

      // add the output of the renderer to the html element
      document.getElementById("WebGL-output").appendChild(renderer.domElement);

      // call the render function
      var step = 0;
      renderScene();

      function renderScene() {
          stats.update();
          // rotate the cube around its axes
          cube.rotation.x += 0.02;
          cube.rotation.y += 0.02;
          cube.rotation.z += 0.02;

          // bounce the sphere up and down
          step += 0.04;
          sphere.position.x = 20 + ( 10 * (Math.cos(step)));
          sphere.position.y = 2 + ( 10 * Math.abs(Math.sin(step)));

          // render using requestAnimationFrame
          requestAnimationFrame(renderScene);
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
