import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { FaceSnapComponent } from './face-snap/face-snap.component';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    CommonModule // Ajoutez CommonModule si nécessaire
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }