import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  // otra forma de declarar
  // @Input()
  // textoHijo: string;

  private textoComponenteHijo: string;
  @Output()
  enviar: EventEmitter<string> = new EventEmitter<string>();
  textoHijo2: string;

  constructor() { }

  ngOnInit() {
    console.log('Cargando el componente hijo');
  }

  @Input()
  set textoHijo(value: string) {
    value = value || '';
    this.textoComponenteHijo = value.toUpperCase();
  }
  get textoHijo() {
    return this.textoComponenteHijo;
  }
  botonClick() {
    this.enviar.emit(this.textoHijo2);
  }
}
