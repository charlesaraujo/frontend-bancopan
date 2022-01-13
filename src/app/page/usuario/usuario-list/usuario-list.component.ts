import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../usuario.model';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.scss']
})
export class UsuarioListComponent implements OnInit {

  lista$!: Observable<Usuario[]>;

  constructor(private service: UsuarioService) { }

  ngOnInit(): void {
    this.lista$ = this.service.findAll();
  }

}
