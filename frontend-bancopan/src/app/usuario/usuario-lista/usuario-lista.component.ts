import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Usuario } from 'src/app/model/usuario.model';

@Component({
  selector: 'app-usuario-lista',
  templateUrl: './usuario-lista.component.html',
  styleUrls: ['./usuario-lista.component.scss']
})
export class UsuarioListaComponent {

  @Input() listaUsuario: Array<Usuario> = []
  @Output() eventoDelete: EventEmitter<number> = new EventEmitter();
  constructor() { }

  delete(i : number){
    this.eventoDelete.emit(i);
  }


}
