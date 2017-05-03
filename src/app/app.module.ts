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


const appRoutes: Routes = [
  { path: 'chapter1', component: ScreenSizeComponent },
  { path: 'chapter2', component: CameraLookAtComponent },
  { path: 'chapter3', component: LensFlareComponent },
  { path: '',
    redirectTo: '/chapter3',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
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
    LensFlareComponent
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
