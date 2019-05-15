import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  textoPadre: string;
  textoPadre2: string;

  constructor() { }

  ngOnInit() {
    console.log('Cargando el componente padre');
  }
  recibirMensaje(mensaje: string) {
    this.textoPadre2 = mensaje;
  }
}
