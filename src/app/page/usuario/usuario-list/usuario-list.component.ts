import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { removeUsuario, retriviedUsuarioList } from '../usuario.action';
import { selectUsuarios } from '../usuario.selectors';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.scss']
})
export class UsuarioListComponent implements OnInit {

  lista$ = this.store.select(selectUsuarios);

  constructor(private service: UsuarioService,
    private store: Store<AppState>) { }

  ngOnInit(): void {
    this.service
      .findAll()
      .subscribe(usuarios => this.store.dispatch(retriviedUsuarioList({ usuarios })));
  }

  remover(id?: number) {
    if (id) {
      this.store.dispatch(removeUsuario({ id }));
    }
  }

}
