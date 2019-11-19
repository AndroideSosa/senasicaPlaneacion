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
                                        Validators.pattern(/^[0-9]+$/)]),
      'estatus': new FormControl( '', Validators.required),
      'rfc': new FormControl( '', Validators.required),
      'fecha': new FormControl( '', [Validators.required,
                                     Validators.pattern(/^(31[ \/ ](0[13578]|1[02])[ \/ ](18|19|20)[0-9]{2})|((29|30)[\/](01|0[3-9]|1[1-2])[\/](18|19|20)[0-9]{2})|((0[1-9]|1[0-9]|2[0-8])[\/](0[1-9]|1[0-2])[\/](18|19|20)[0-9]{2})|(29[\/](02)[\/](((18|19|20)(04|08|[2468][048]|[13579][26]))|2000))$/)]),
      'anioRegistro': new FormControl( '', Validators.required)   
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
