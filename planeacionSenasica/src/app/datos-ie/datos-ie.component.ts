import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-datos-ie',
  templateUrl: './datos-ie.component.html',
  styleUrls: ['./datos-ie.component.css']
})
export class DatosIEComponent implements OnInit {

  public datosIE: FormGroup;
  public showResetFormButton: boolean= false;

  constructor() { 

    //Construcción del formulario datosIE

    this.datosIE = new FormGroup({

      'mision': new FormControl( '', Validators.required),
      'vision': new FormControl( '', Validators.required),
      'nombreInstancia': new FormControl( '', Validators.required),
      'telefono': new FormControl( '', [Validators.required,
                                        Validators.pattern(/^[0-9]+$/)]) 
    })

    //Escuchar cambios dentro del formulario
    this.datosIE.valueChanges
    .subscribe( data => {
      if(this.datosIE.pristine){
        this.showResetFormButton = false;
      }else{
        this.showResetFormButton = true;
      }
    })

  }

  ngOnInit() {
  }

//Función para enviar validación
saveData(): void {
  console.log(this.datosIE)
  console.log(this.datosIE.value);
}

//Función para resetear formulario

resetForm(): void{
  this.datosIE.reset();
  console.log(this.datosIE);
} 

}
