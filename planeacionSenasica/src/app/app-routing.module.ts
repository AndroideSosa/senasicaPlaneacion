import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlantillasComponent } from './plantillas/plantillas.component';


const routes: Routes = [
 {path: 'plantillas', component: PlantillasComponent},
 {path: '**', redirectTo: 'plantillas'}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
