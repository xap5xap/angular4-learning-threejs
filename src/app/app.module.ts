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

const appRoutes: Routes = [
  { path: 'chapter1', component: ScreenSizeComponent },
  { path: 'chapter2', component: CameraLookAtComponent },
  { path: 'chapter3', component: LensFlareComponent },
  { path: 'chapter4', component: LineMaterialDashComponent },
  { path: 'chapter5', component: PolyGeometryComponent },
  { path: 'chapter6', component: TextGeometryComponent },
  {
    path: '',
    redirectTo: '/chapter6',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
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
    Chapter6Component
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
