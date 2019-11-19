import { Directive, ElementRef, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appObserveFiles]'
})
export class ObserveFilesDirective {

  //@Input() archivo: any;
  @Output('update') archivoSeleccionado: EventEmitter<File>;

  constructor( private element: ElementRef) { 
    console.log("Directiva llamada");
    this.archivoSeleccionado = new EventEmitter();
  }

  @HostListener('change') archivoEntro(){
    let archivo = this.element.nativeElement.files[0].name;
    console.log(this.element.nativeElement.files[0].name);
    this.archivoSeleccionado.emit(archivo);
  }

}
