import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {
  @ViewChild('txtProgress',  { static: false }) textProgress: ElementRef;
  @Input() progreso: number = 50;
  @Input('nombre') leyenda: string = 'leyenda';

  @Output('actualizaValor') cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() { 
    // console.log('Leyenda', this.leyenda);
     console.log('Leyenda', this.progreso);
  }

  ngOnInit() {
    // console.log('Leyenda', this.leyenda);
    console.log('Leyenda', this.progreso);
  }
  cambiarValor(valor: number){
    // console.groupCollapsed(this.progreso);
    if (this.progreso >= 100 && valor > 0){
      this.progreso = 100;
      return;
    }
    if(this.progreso <= 0  && valor < 0) {
      this.progreso = 0;
      return;
    }
    this.progreso = this.progreso + valor;
    this.textProgress.nativeElement.focus();
    this.cambioValor.emit( this.progreso );
  }
  onChange(newValue: number){
    // let elemHtml = document.getElementsByName('progreso')[0];
    // console.log(this.textProgress);
    // console.log(elemHtml.value);
    if(newValue >=100){
      this.progreso = 100;
    } else if ( newValue < 0 ){
      this.progreso = 0;
    } else {
      this.progreso = newValue;
    }
    // elemHtml.value = this.progreso;
    this.textProgress.nativeElement.value = this.progreso;
    this.cambioValor.emit( this.progreso );

  }
}
