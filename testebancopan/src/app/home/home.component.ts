
import {  NgForm } from '@angular/forms';
import { UsuarioService } from './../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { faPen, faPlus, faX } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  mostrarCadastro: boolean = false;
  mostrarEditar: boolean = false;

  faPen = faPen
  faX = faX
  faPlus = faPlus

  usuario = {} as Usuario;
  usuarios: Usuario[] | undefined;

  constructor(
    private usuarioService: UsuarioService
    ) { }

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios() {
    this.usuarioService.getUsuarios().subscribe((usuarios: Usuario[]) => {
      this.usuarios = usuarios;
    });
  }

  deleteUsuario(usuario: Usuario) {
    this.usuarioService.deleteUsuario(usuario).subscribe(() => {
      this.getUsuarios();
    });
  }

  saveUsuario(form: NgForm) {
    if (this.usuario.id !== undefined) {
      this.usuarioService.updateUsuario(this.usuario).subscribe(() => {
        this.cleanForm(form);
      });
    } else {
      this.usuarioService.saveUsuario(this.usuario).subscribe(() => {
        this.cleanForm(form);
      });
    }
  }

  cleanForm(form: NgForm) {
    this.getUsuarios();
    form.resetForm();
    this.usuario = {} as Usuario;
  }

  toggleCadastro () {
    this.mostrarCadastro = !this.mostrarCadastro;
  }

  toggleEditar(usuario : Usuario) {
      this.usuario = { ...usuario };
      this.mostrarEditar = !this.mostrarEditar;
  }

  closeModalCadastro (form: NgForm) {
    this.cleanForm(form);
    this.toggleCadastro();
  }

  closeModalEditar(){
    this.mostrarEditar = !this.mostrarEditar;
  }

}
