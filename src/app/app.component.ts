import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Usuarios } from 'src/model/usuarios';
import { UsuariosService } from 'src/services/usuarios.service';
import Swal from 'sweetalert2'

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'TesteFrontEndBancoPan';
  usuarios = new Array<Usuarios>();
  resModalExcluirUsuario: boolean;

  @Output() isEnabledCpfToEdit: boolean = true;
  @Output() btnRemoverTodosUsuarios: boolean;

  // VARIAVEIS USADAS PARA EDICAO DE USUARIO JA CADASTRADO
  nameEdit: string = '';
  cpfEdit: string = '';
  phoneEdit: string = '';
  emailEdit: string = '';

  constructor(private userService: UsuariosService) {

    if (!localStorage.length) {
      userService.getUsuariosNativo().subscribe(res => {
        this.usuarios = res.map(item => {

          item.cpf = userService.formataCpf(item.cpf)
          item.phone = userService.formataCelular(item.phone)

          return new Usuarios(
            item.name,
            item.cpf,
            item.phone,
            item.email
          )
        })
        userService.usuarios = this.usuarios
      }, error => {
        this.handleError(error);
      });
    } else {
      this.usuarios = userService.usuarios
    }

  }

  ngOnInit(): void {
    this.userService.getUser().subscribe(user => {
      this.usuarios = this.userService.usuarios
    })
    if (localStorage.length) {
      this.usuarios = JSON.parse(localStorage.getItem('usuarios'))
    }
  }

  // data-bs-target="#myModal" CHAMA O MODAL DE CADASTRO NOVO USUARIO OU EDICAO DE USUARIO
  novoUsuario() {
    this.userService.fluxoEdit.next(false)
    this.isEnabledCpfToEdit = false // VARIAVEL RESPONSAVEL POR LIBERAR INPUT CPF PARA NOVO CADASTRO OU DESABILITAR CASO SEJA UMA ALTERACAO DE USUARIO
  }

  editarUsuario(user: any) {
    this.isEnabledCpfToEdit = true
    this.userService.fluxoEdit.next(true)
    this.userService.getUsuarioEdit(user)
  }

  excluirUsuario(user?: any) {
    this.sweetAlert2RemoverUsuario(user);

  }
  excluirUsuarioConfirm(user?: any) {
    this.usuarios = this.usuarios.filter(item => item.cpf !== user.cpf);
    localStorage.setItem('usuarios', JSON.stringify(this.usuarios));
    this.resModalExcluirUsuario = false
  }


  removerTodosUuarios(res?: boolean) {
    this.sweetAlert2RemoverTodosUsuarios()
    if (res) {
      this.btnRemoverTodosUsuarios = true
      this.usuarios = []
      localStorage.clear()
      this.exibirBtnRemoverTodosUsuarios()
    }
  }

  exibirBtnRemoverTodosUsuarios() {
    return this.usuarios.length > 1 ? false : true; // SE RESTAR UM CARD USUARIOBTN É OCULTO
  }

  sweetAlert2RemoverUsuario(user: Usuarios) {
    Swal.fire({
      title: `Excluir usuário <br> <strong>${user.name}<strong/>?`,
      text: "Não será possivel reverter.",
      confirmButtonText: 'Excluir',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      padding: 0.1,
      width: 450
    }).then((result) => {
      if (result.isConfirmed) {
        this.excluirUsuarioConfirm(user);
        this.resModalExcluirUsuario = true
        Toast.fire({ icon: 'success', title: 'Usuário excluído.' })
        return true
      }
    })
  }

  sweetAlert2RemoverTodosUsuarios() {
    Swal.fire({
      title: 'Tem certeza?',
      text: "Isso exclui todos usuários, você não será capaz de reverter isso!",
      icon: 'warning',
      confirmButtonText: 'Sim, excluir tudo!',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.removerTodosUuarios(true)
        Swal.fire({
          title: 'Sucesso!',
          text: 'Todos usuários excluidos.',
          icon: 'success',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        }
        )
        return true
      }
    })
  }

  handleError(err: any) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: `Sistema indisponível no momento, tente mais tarde. Por enquanto você pode usar o app de forma offline.`,
      footer: `Codigo erro:${err.status}`,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Voltar',
      confirmButtonColor: "#3085d6"
    })
  }

}
