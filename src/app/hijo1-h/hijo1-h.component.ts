import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hijo1-h',
  templateUrl: './hijo1-h.component.html',
  styleUrls: ['./hijo1-h.component.css']
})
export class Hijo1HComponent implements OnInit {

  @Output()
  textoCambiado: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }
  cambioTexto(texto: string) {
    this.textoCambiado.emit(texto);
  }
}
