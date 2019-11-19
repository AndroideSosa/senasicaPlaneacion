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
  public dateMask = [/\d/, /\d/,'/',/\d/, /\d/,'/',/\d/,/\d/,/\d/,/\d/];
  public fileIE: File = null;

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
      'anioRegistro': new FormControl( '', Validators.required),
      'claveAutorizacion': new FormControl( '', Validators.required),
      'presidente': new FormControl( '', Validators.required), 
      'secretario': new FormControl( '', Validators.required),
      'tesorero': new FormControl( '', Validators.required),
      'tipoDocumento': new FormControl( '', Validators.required),  
      'archivo': new FormControl( '', Validators.required), 
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
  this.datosIE.value.archivo = this.fileIE;
  console.log(this.datosIE)
  console.log(this.datosIE.value);
}

//Función para resetear formulario
resetForm(): void{
  this.datosIE.reset();
  console.log(this.datosIE);
} 

//Funcion para obtener valor del archivo
onFileChange(event) {    
  this.fileIE = event.target.files[0].name;
  console.log(this.fileIE);
}

}
