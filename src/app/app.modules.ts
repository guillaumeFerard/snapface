import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from '../interceptors';

@NgModule({
  declarations: [
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    CommonModule,
    ReactiveFormsModule // Ajoutez CommonModule si nécessaire
  ],
  providers: [httpInterceptorProviders],
  bootstrap: []
})
export class AppModule { }