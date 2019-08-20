import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {
  progreso1: number = 20;
  progreso2: number = 50;
 
  constructor() { }

  ngOnInit() {
  }
  // cambiarValor(valor: number){
  //   // console.groupCollapsed(this.progreso);
  //   if (this.progreso >= 100 && valor > 0 || this.progreso <= 0  && valor < 0) {
  //     return;
  //   }
  //   this.progreso = this.progreso + valor;
  // }
  // actualizar( event ){
  //   console.log('Evento:', event);
  // }
}
