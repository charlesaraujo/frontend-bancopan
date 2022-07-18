import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './service/usuario-service.service';
import { Usuario } from './../model/usuario.model';
import { MatDialog } from '@angular/material/dialog';
import { ModalCadastroUsuarioComponent } from './modal-cadastro-usuario/modal-cadastro-usuario.component';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addListaUsuario } from './usuario-actions.actions';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss'],
})
export class UsuarioComponent implements OnInit {
  listaUsuario: Array<Usuario> = [];
  count$: Observable<Array<Usuario>>;

  constructor(
    private usuarioServie: UsuarioService,
    public dialog: MatDialog,
    private store: Store<{ count: Array<Usuario> }>
  ) {
    this.count$ = store.select('count');
    console.log(this.count$);
  }

  ngOnInit(): void {
    const exist = localStorage.getItem('listaUsuario');
    if (!exist) {
      this.usuarioServie.listarUsuario().subscribe((lista: Array<Usuario>) => {
        localStorage.setItem('listaUsuario', JSON.stringify(lista));
        const listaUsuarios = localStorage.getItem('listaUsuario');
        this.listaUsuario = JSON.parse(listaUsuarios);
      });
    } else {
      const listaUsuarios = localStorage.getItem('listaUsuario');
      this.listaUsuario = JSON.parse(listaUsuarios);
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(ModalCadastroUsuarioComponent);
    dialogRef.afterClosed().subscribe((result) => {
      const listaUsuarios = localStorage.getItem('listaUsuario');
      this.listaUsuario = JSON.parse(listaUsuarios);
      this.store.dispatch(addListaUsuario({ listaUsuario: this.listaUsuario }));
    });
  }

  delete(index: number){
    const listaUsuarios = localStorage.getItem('listaUsuario');
    this.listaUsuario = JSON.parse(listaUsuarios);
    localStorage.clear();
    localStorage.setItem('listaUsuario', JSON.stringify(this.listaUsuario.splice(index, 1)))
    

  }
}
