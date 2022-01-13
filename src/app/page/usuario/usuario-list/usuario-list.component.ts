import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { retriviedUsuarioList } from '../usuario.action';
import { Usuario } from '../usuario.model';
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
    private store: Store) { }

  ngOnInit(): void {
    this.service
      .findAll()
      .subscribe(usuarios => this.store.dispatch(retriviedUsuarioList({ usuarios })));
  }

}
