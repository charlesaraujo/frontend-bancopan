import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioComponent } from '../usuario.component';
import { Usuario } from './../../model/usuario.model';

@Component({
  selector: 'app-modal-cadastro-usuario',
  templateUrl: './modal-cadastro-usuario.component.html',
  styleUrls: ['./modal-cadastro-usuario.component.scss']
})
export class ModalCadastroUsuarioComponent {

  form: FormGroup;
  @Output() eventAdicionarUsuario: EventEmitter<Usuario> = new EventEmitter()
  @ViewChild(UsuarioComponent) public dialogTemplate: UsuarioComponent;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: [undefined, Validators.required],
      email: [undefined, Validators.required, Validators.email],
      phone: [undefined, Validators.required],
      cpf: [undefined, Validators.required]
    })
   }

  cadastrar(): void {
    const {name, email, phone, cpf} = this.form.getRawValue();
    const usuario = new Usuario();
    usuario.name = name;
    usuario.email = email;
    usuario.phone = phone;
    usuario.cpf = cpf;
    const listaUsuario = localStorage.getItem('listaUsuario')
    const lista = JSON.parse(listaUsuario);
    lista.push(usuario);
    localStorage.removeItem('listaUsuario');
    localStorage.setItem('listaUsuario', JSON.stringify(lista))
  }

}
