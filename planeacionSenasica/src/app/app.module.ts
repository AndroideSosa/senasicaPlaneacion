import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';

import { PlantillasComponent } from './plantillas/plantillas.component';
import { DatosIEComponent } from './datos-ie/datos-ie.component';
import { ObserveFilesDirective } from './directives/observe-files.directive';

@NgModule({
  declarations: [
    AppComponent,
    PlantillasComponent,
    DatosIEComponent,
    ObserveFilesDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
