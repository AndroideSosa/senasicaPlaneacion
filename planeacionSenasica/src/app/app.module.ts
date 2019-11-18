import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlantillasComponent } from './plantillas/plantillas.component';
import { DatosIEComponent } from './datos-ie/datos-ie.component';

@NgModule({
  declarations: [
    AppComponent,
    PlantillasComponent,
    DatosIEComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }