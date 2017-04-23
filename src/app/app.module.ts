import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Chapter1Component } from './chapter1/chapter1.component';

const appRoutes: Routes = [
  { path: 'chapter1', component: Chapter1Component },
  { path: '',
    redirectTo: '/chapter1',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    Chapter1Component
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
