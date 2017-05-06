import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Chapter1Component } from './chapter1/chapter1.component';
import { ControlGuiComponent } from './chapter1/control-gui.component';
import { ScreenSizeComponent } from './chapter1/screen-size';
import { Chapter2Component } from './chapter2/chapter2.component';
import { FoggySceneComponent } from './chapter2/foggy-scene.component';
import { ForcedMaterialsComponent } from './chapter2/forced-materials.component';
import { GeometriesComponent } from './chapter2/geometries.component';
import { CustomGeometriesComponent } from './chapter2/custom-geometry.component';
import { MeshPropertiesComponent } from './chapter2/mesh-properties.component';
import { BothCamerasComponent } from './chapter2/both-cameras.component';
import { CameraLookAtComponent } from './chapter2/camera-lookat.component';
import { Chapter3Component } from './chapter3/chapter3.component';
import { PointLightComponent } from './chapter3/point-light.component';
import { SpotLightComponent } from './chapter3/spot-light.component';
import { DirectionalLightComponent } from './chapter3/directional-light.component';
import { HemisphereLightComponent } from './chapter3/hemisphere-light.component';
import { AreaLightComponent } from './chapter3/area-light.component';
import { LensFlareComponent } from './chapter3/lens-flare.component';
import { Chapter4Component } from './chapter4/chapter4.component';
import { DepthMaterialComponent } from './chapter4/depth-material.component';
import { CombinedMaterialComponent } from './chapter4/combined-material.component';
import { MeshNormalMaterialComponent } from './chapter4/mesh-normal-material.component';
import { MeshFaceMaterialComponent } from './chapter4/mesh-face-material.component';
import { MeshLambertMaterialComponent } from './chapter4/mesh-lambert-material.component';
import { MeshPongMaterialComponent } from './chapter4/mesh-pong-material.component';
import { LineMaterialComponent } from './chapter4/line-material.component';
import { LineMaterialDashComponent } from './chapter4/line-material-dash.component';
import { Chapter5Component } from './chapter5/chapter5.component';
import { CircleGeometryComponent } from './chapter5/circle-geometry.component';
import { RingGeometryComponent } from './chapter5/ring-geometry.component';
import { ShapeGeometryComponent } from './chapter5/shape-geometry.component';
import { CubeGeometryComponent } from './chapter5/cube-geometry.component';
import { SphereGeometryComponent } from './chapter5/sphere-geometry.component';
import { CilinderGeometryComponent } from './chapter5/cilinder-geometry.component';
import { TorusGeometryComponent } from './chapter5/torus-geometry.component';
import { TorusKnotGeometryComponent } from './chapter5/torusknot-geometry.component';
import { PolyGeometryComponent } from './chapter5/ploy-geometry.component';
import { Chapter6Component } from './chapter6/chapter6.component';
import { LatheGeometryComponent } from './chapter6/lathe-geometry.component';
import { ExtrudeGeometryComponent } from './chapter6/extrude-geometry.component';
import { ExtrudeTubeComponent } from './chapter6/extrude-tube.component';
import { ParametricGeometryComponent } from './chapter6/parametric-geometry.component';
import { TextGeometryComponent } from './chapter6/text-geometry.component';
import { Chapter7Component } from './chapter7/chapter7.component';
import { ParticlesWebglComponent } from './chapter7/particles-webgl.component';
import { BasicPointCloudComponent } from './chapter7/basic-point-cloud.component';
import { ProgramBasedSpriteComponent } from './chapter7/program-based-sprite.component';
import { ProgramBasedWebGlSpriteComponent } from './chapter7/program-based-sprites-webgl.component';
import { RainySceneComponent } from './chapter7/rainy-scene.component';
import { SnowySceneComponent } from './chapter7/snowy-scene.component';
import { SpritesComponent } from './chapter7/sprites.component';
import { Sprites3DComponent } from './chapter7/sprites-3d.component';
import { CreateParticleComponent } from './chapter7/create-particle.component';
import { Chapter8Component } from './chapter8/chapter8.component';
import { MerginComponent } from './chapter8/merging.component';
import { LoadObjectComponent } from './chapter8/03-load-save-json-object.component';
import { LoadSceneComponent } from './chapter8/04-load-save-json-scene.component';
import { BlenderComponent } from './chapter8/05-blender-from-json.component';
import { LoadObjComponent } from './chapter8/06-load-obj.component';
import { LoadMtlComponent } from './chapter8/07-load-obj-mtl.component';
import { LoadColladaComponent } from './chapter8/08-load-collada.component';
import { LoadSTLComponent } from './chapter8/09-load-stl.component';
import { LoadCTMComponent } from './chapter8/10-load-ctm.component';
import { LoadVKTComponent } from './chapter8/11-load-vtk.component';
import { LoadPDBComponent } from './chapter8/12-load-pdb.component';
import { LoadPYLComponent } from './chapter8/13-load-PLY.component';
import { Chapter9Component } from './chapter9/chapter9.component';
import { SelectingObjectsComponent } from './chapter9/02-selecting-objects.component';
import { TweenComponent } from './chapter9/03-animation-tween.component';
import { TrackballComponent } from './chapter9/04-trackball-controls-camera.component';
import { FlyControlsComponent } from './chapter9/05-fly-controls-camera.component';
import { RollControlsComponent } from './chapter9/06-roll-controls-camera.component';
import { FirstPersonControlsComponent } from './chapter9/07-first-person-camera.component';
import { OrbitControlsComponent } from './chapter9/08-controls-orbit.component';
import { MorphComponent } from './chapter9/10-morph-targets.component';
import { MorphManualComponent } from './chapter9/11-morph-targets-manually.component';
import { BonesManualComponent } from './chapter9/12-bones-manually.component';
import { BlenderAnimationComponent } from './chapter9/13-animation-from-blender.component';
import { ColladaAnimationComponent } from './chapter9/14-animation-from-collada.component';
import { Md2AnimationComponent } from './chapter9/15-animation-from-md2.component';
import { GLTFAnimationComponent } from './chapter9/16-animation-from-gltf.component';
import { Chapter10Component } from './chapter10/chapter10.component';
import { BasicDDSComponent } from './chapter10/01-basic-texture-dds.component';
import { BumpMapComponent } from './chapter10/02-bump-map.component';
import { NormalMapComponent } from './chapter10/03-normal-map.component';
import { LightMapComponent } from './chapter10/04-light-map.component';
import { EnvMapComponent } from './chapter10/05-env-map-dynamic.component';
import { EnvMapStaticComponent } from './chapter10/05-env-map-static.component';
import { SpeculiarComponent } from './chapter10/06-specular-map.component';
import { UVMappingComponent } from './chapter10/07-uv-mapping.component';
import { UVMappingManualComponent } from './chapter10/07-uv-mapping-manual.component';
import { WrapComponent } from './chapter10/08-repeat-wrapping.component';
import { Chapter11Component } from './chapter11/chapter11.component';
import { PostSimpleComponent } from './chapter11/02-post-processing-simple-passes.component';
import { GlitchComponent } from './chapter11/03-glitch-pass.component';
import { MaskComponent } from './chapter11/03-post-processing-masks.component';
import { ShaderSimpleComponent } from './chapter11/04-shaderpass-simple.component';

const appRoutes: Routes = [
  { path: 'chapter1', component: ScreenSizeComponent },
  { path: 'chapter2', component: CameraLookAtComponent },
  { path: 'chapter3', component: LensFlareComponent },
  { path: 'chapter4', component: LineMaterialDashComponent },
  { path: 'chapter5', component: PolyGeometryComponent },
  { path: 'chapter6', component: TextGeometryComponent },
  { path: 'chapter7', component: CreateParticleComponent },
  { path: 'chapter8', component: LoadPYLComponent },
  { path: 'chapter9', component: GLTFAnimationComponent },
  { path: 'chapter10', component: WrapComponent },
  { path: 'chapter11', component: ShaderSimpleComponent },
  {
    path: '',
    redirectTo: '/chapter11',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ShaderSimpleComponent,
    MaskComponent,
    GlitchComponent,
    PostSimpleComponent,
    WrapComponent,
    UVMappingManualComponent,
    UVMappingComponent,
    SpeculiarComponent,
    EnvMapStaticComponent,
    EnvMapComponent,
    LightMapComponent,
    NormalMapComponent,
    BumpMapComponent,
    GLTFAnimationComponent,
    Md2AnimationComponent,
    ColladaAnimationComponent,
    BlenderAnimationComponent,
    BonesManualComponent,
    MorphManualComponent,
    MorphComponent,
    OrbitControlsComponent,
    FirstPersonControlsComponent,
    RollControlsComponent,
    FlyControlsComponent,
    TrackballComponent,
    TweenComponent,
    SelectingObjectsComponent,
    LoadPDBComponent,
    LoadPYLComponent,
    LoadCTMComponent,
    LoadVKTComponent,
    LoadSTLComponent,
    LoadColladaComponent,
    LoadMtlComponent,
    LoadObjComponent,
    BlenderComponent,
    LoadSceneComponent,
    LoadObjectComponent,
    MerginComponent,
    CreateParticleComponent,
    Sprites3DComponent,
    SpritesComponent,
    SnowySceneComponent,
    RainySceneComponent,
    ProgramBasedWebGlSpriteComponent,
    ProgramBasedSpriteComponent,
    BasicPointCloudComponent,
    ParticlesWebglComponent,
    TextGeometryComponent,
    ExtrudeTubeComponent,
    ParametricGeometryComponent,
    PolyGeometryComponent,
    ExtrudeGeometryComponent,
    LatheGeometryComponent,
    TorusKnotGeometryComponent,
    TorusGeometryComponent,
    CilinderGeometryComponent,
    SphereGeometryComponent,
    CubeGeometryComponent,
    ShapeGeometryComponent,
    RingGeometryComponent,
    CircleGeometryComponent,
    LineMaterialDashComponent,
    MeshFaceMaterialComponent,
    LineMaterialComponent,
    MeshPongMaterialComponent,
    MeshLambertMaterialComponent,
    MeshNormalMaterialComponent,
    CombinedMaterialComponent,
    Chapter1Component,
    ControlGuiComponent,
    ScreenSizeComponent,
    Chapter2Component,
    FoggySceneComponent,
    ForcedMaterialsComponent,
    GeometriesComponent,
    CustomGeometriesComponent,
    MeshPropertiesComponent,
    BothCamerasComponent,
    CameraLookAtComponent,
    Chapter3Component,
    PointLightComponent,
    SpotLightComponent,
    DirectionalLightComponent,
    HemisphereLightComponent,
    AreaLightComponent,
    LensFlareComponent,
    Chapter4Component,
    DepthMaterialComponent,
    Chapter5Component,
    Chapter6Component,
    Chapter7Component,
    Chapter8Component,
    Chapter9Component,
    Chapter10Component,
    Chapter11Component
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
