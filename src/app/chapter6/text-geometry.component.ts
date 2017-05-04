import { Component, OnInit } from '@angular/core';
declare var Stats: any;
declare var dat: any;
declare var THREE: any;

@Component({
  selector: 'app-chapter6',
  templateUrl: './chapter6.component.html',
  styleUrls: ['./chapter6.component.css']
})
export class TextGeometryComponent implements OnInit {

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
        webGLRenderer.shadowMapEnabled = true;

        // position and point the camera to the center of the scene
        camera.position.x = 100;
        camera.position.y = 300;
        camera.position.z = 600;
        camera.lookAt(new THREE.Vector3(400, 0, -300));

        var dirLight = new THREE.DirectionalLight();
        dirLight.position.set(25, 23, 15);
        scene.add(dirLight);


        var dirLight2 = new THREE.DirectionalLight();
        dirLight2.position.set(-25, 23, 15);
        scene.add(dirLight2);

        // add the output of the renderer to the html element
        document.getElementById("WebGL-output").appendChild(webGLRenderer.domElement);

        // call the render function
        var step = 0;


        var text1;
        var text2;

        var controls = new function () {

            this.size = 90;
            this.height = 90;
            this.bevelThickness = 2;
            this.bevelSize = 0.5;
            this.bevelEnabled = true;
            this.bevelSegments = 3;
            this.bevelEnabled = true;
            this.curveSegments = 12;
            this.steps = 1;
            this.font = "helvetiker";
            this.weight = "normal";
//            this.style = "italics";

            this.asGeom = function () {
                // remove the old plane
                scene.remove(text1);
                scene.remove(text2);
                // create a new one

                var options = {
                    size: controls.size,
                    height: controls.height,
                    weight: controls.weight,
                    font: controls.font,
                    bevelThickness: controls.bevelThickness,
                    bevelSize: controls.bevelSize,
                    bevelSegments: controls.bevelSegments,
                    bevelEnabled: controls.bevelEnabled,
                    curveSegments: controls.curveSegments,
                    steps: controls.steps
                };

                console.log(THREE.FontUtils.faces);

                text1 = createMesh(new THREE.TextGeometry("Learning", options));
                text1.position.z = -100;
                text1.position.y = 100;
                scene.add(text1);

                text2 = createMesh(new THREE.TextGeometry("Three.js", options));
                scene.add(text2);
            };

        };

        controls.asGeom();

        var gui = new dat.GUI();
        gui.add(controls, 'size', 0, 200).onChange(controls.asGeom);
        gui.add(controls, 'height', 0, 200).onChange(controls.asGeom);
        gui.add(controls, 'font', ['bitstream vera sans mono', 'helvetiker']).onChange(controls.asGeom);
        gui.add(controls, 'bevelThickness', 0, 10).onChange(controls.asGeom);
        gui.add(controls, 'bevelSize', 0, 10).onChange(controls.asGeom);
        gui.add(controls, 'bevelSegments', 0, 30).step(1).onChange(controls.asGeom);
        gui.add(controls, 'bevelEnabled').onChange(controls.asGeom);
        gui.add(controls, 'curveSegments', 1, 30).step(1).onChange(controls.asGeom);
        gui.add(controls, 'steps', 1, 5).step(1).onChange(controls.asGeom);


        render();


        function createMesh(geom) {

            // assign two materials
//            var meshMaterial = new THREE.MeshLambertMaterial({color: 0xff5555});
//            var meshMaterial = new THREE.MeshNormalMaterial();
            var meshMaterial = new THREE.MeshPhongMaterial({
                specular: 0xffffff,
                color: 0xeeffff,
                shininess: 100,
                metal: true
            });
//            meshMaterial.side=THREE.DoubleSide;
            // create a multimaterial
            var plane = THREE.SceneUtils.createMultiMaterialObject(geom, [meshMaterial]);

            return plane;
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
