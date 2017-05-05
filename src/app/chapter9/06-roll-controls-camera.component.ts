import { Component, OnInit } from '@angular/core';

declare var Stats: any;
declare var dat: any;
declare var THREE: any;
declare var chroma: any;

@Component({
  selector: 'app-chapter9',
  templateUrl: './chapter9.component.html',
  styleUrls: ['./chapter9.component.css']
})
export class RollControlsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    var clock = new THREE.Clock();

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
    camera.position.x = 100;
    camera.position.y = 100;
    camera.position.z = 300;
    camera.lookAt(new THREE.Vector3(0, 0, 0));


    var ambientLight = new THREE.AmbientLight(0x383838);
    scene.add(ambientLight);

    // add spotlight for the shadows
    var spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(300, 300, 300);
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

    var rollControls;
    var loader = new THREE.OBJMTLLoader();
    var load = function(object) {

      var scale = chroma.scale(['#aaffaa', '#ffff00', '#ffffff']);
      setRandomColors(object, scale);

      mesh = object;
      scene.add(mesh);
      rollControls = new THREE.RollControls(camera);

      rollControls.movementSpeed = 25;
      rollControls.lookSpeed = 3;
    };


    var texture = THREE.ImageUtils.loadTexture('../assets/textures/Metro01.JPG');
    //texture.wrapS = texture.wrapT = THREE.MirroredRepeatWrapping;
    loader.load('../assets/models/city.obj', '../assets/models/city.mtl', load);
    //texture.repeat.set( 1 , 1);


    function setCamControls() {

    }

    render();


    function setRandomColors(object, scale) {
      var children = object.children;


      if (children && children.length > 0) {
        children.forEach(function(e) {
          setRandomColors(e, scale)
        });
      } else {
        // no children assume contains a mesh
        if (object instanceof THREE.Mesh) {


          var height = 0;
          var vertices = object.geometry.vertices;
          vertices.forEach(function(e) {
            if (e.y > height) {
              height = e.y;
            }
          });

          // 65 is max height of buildings.
          object.material.color = new THREE.Color(scale(height / 35).hex());
          if (object.material.name.indexOf("building") == 0) {
            //                        object.material.emissive = new THREE.Color(0x444444);
            object.material.transparent = true;
            object.material.opacity = 0.8;
          }
        }
      }
    }


    function render() {
      stats.update();
      var delta = clock.getDelta();

      if (mesh) {
        //   mesh.rotation.y+=0.006;
      }

      if (rollControls) {
        rollControls.update(delta);
      }

      webGLRenderer.clear();
      // render using requestAnimationFrame
      requestAnimationFrame(render);
      webGLRenderer.render(scene, camera)
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
