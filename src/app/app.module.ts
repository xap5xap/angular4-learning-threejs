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


const appRoutes: Routes = [
  { path: 'chapter1', component: ScreenSizeComponent },
  { path: 'chapter2', component: BothCamerasComponent },
  { path: '',
    redirectTo: '/chapter2',
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
    BothCamerasComponent
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
