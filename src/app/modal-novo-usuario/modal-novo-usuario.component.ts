import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Usuarios } from 'src/model/usuarios';
import { UsuariosService } from 'src/services/usuarios.service';
import { Injectable } from '@angular/core';
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

@Injectable()

@Component({
  selector: 'app-modal-novo-usuario',
  templateUrl: './modal-novo-usuario.component.html',
  styleUrls: ['./modal-novo-usuario.component.css']
})

export class ModalNovoUsuarioComponent implements OnInit {

  @Input() isEnabledCpfToEdit: any;
  @Input() btnRemoverTodosUsuarios: any;

  tituloModal: string;
  formularioNovoUsuario: FormGroup;
  usuarioNovo: Usuarios;
  recuperadoLocalStorage = new Array<Usuarios>();

  // VARIAVEIS USADAS PARA EDICAO DE USUARIO JA CADASTRADO
  nameEdit: string = '';
  cpfEdit: string = '';
  phoneEdit: string = '';
  emailEdit: string = '';

  constructor(private fb: FormBuilder, private userService: UsuariosService,) { }

  ngOnInit(): void {
    this.criarFormNovoUsuario();
    this.userService.fluxoEdit.subscribe(res => {
      if (res) {
        this.tituloModal = "Editar uados usuário";
        this.userService.getUserEdit().subscribe(userEdit => {
          this.exibirUsuarioEditar(userEdit);
        })
      } else {
        this.tituloModal = "Cadastrar novo usuário";
        this.formularioNovoUsuario.reset();
      }
    })

  }

  limpaParaLuxoNovo(){
      this.nameEdit = '';
      this.cpfEdit = '';
      this.phoneEdit = '';
      this.emailEdit = '';
  }

  criarFormNovoUsuario() {
    this.formularioNovoUsuario = this.fb.group({
      name: ['', Validators.compose([Validators.required])],
      cpf: ['', Validators.compose([Validators.required])],
      phone: ['', Validators.compose([
        Validators.required,
        Validators.minLength(10)
      ])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
    });
  }

  // Propriedades do formulário utilizadas para obter os erros
  get name() {
    return this.formularioNovoUsuario.get('name');
  }
  get cpf() {
    return this.formularioNovoUsuario.get('cpf');
  }

  get phone() {
    return this.formularioNovoUsuario.get('phone');
  }

  get email() {
    return this.formularioNovoUsuario.get('email');
  }

  // ------------------------------------------
  // ------------METODO PRINCIPAL--------------
  // ------------------------------------------
  dadosNovoUsuario() {
    this.objNovoUsuario(this.formularioNovoUsuario.value);
    if (!this.getSetLocalStorage()) {
      document.getElementById("#btnNovoUsuario").click();
    } else {
      if (this.validaUsuarioCadastrado(this.usuarioNovo)) return
      this.enviaNovoUsuarioLocalStorage(this.usuarioNovo);
    }
  }

  // --------------------------------------------------------
  // ------------METODOS AUXILIARES--------------------------
  // --------------------------------------------------------
  objNovoUsuario(dadosFormulario: Usuarios) {
    dadosFormulario.cpf = this.userService.formataCpf(dadosFormulario.cpf)
    dadosFormulario.phone = this.userService.formataCelular(dadosFormulario.phone)

    this.usuarioNovo = {
      "name": dadosFormulario.name,
      "cpf": dadosFormulario.cpf,
      "phone": dadosFormulario.phone,
      "email": dadosFormulario.email,
    };
  }

  // FUNCAO RESPONSAVEL POR DUAS EXECUCOES:
  //  1 - SALVAR NO LOCAL STORAGE CONSULTA DO 
  //      ENDPOINT RESPONSAVEL PELOS 3 PRIMEIROS USUARIOS.
  //  2 - CAPTURA DADOS ATUAL LOCALSTORAGE.
  getSetLocalStorage() {
    if (!this.userService.validaCpf(this.usuarioNovo.cpf)) {
      Toast.fire({ icon: 'warning', title: 'Falha ao salvar. <br> Digite um CPF válido.' })
      return false
    } else {
      this.recuperadoLocalStorage = [];
      if (this.btnRemoverTodosUsuarios) { //SE BOTAO EXCUIR TODOS FOI ACIONADO ANTERIORMENTE LIMPA A VARIAVEL NO SERVICO
        this.btnRemoverTodosUsuarios = false
        this.userService.usuarios = []
        localStorage.setItem('usuarios', JSON.stringify(this.userService.usuarios))
      } else {
        if (!localStorage.length) {
          localStorage.setItem('usuarios', JSON.stringify(this.userService.usuarios));
          this.recuperadoLocalStorage = JSON.parse(localStorage.getItem('usuarios'))
        } else {
          this.recuperadoLocalStorage = JSON.parse(localStorage.getItem('usuarios'))
        }
      }
      return true
    }
  }

  // METODO VERIFICA SE JA EXISTE O CPF CADASTRADO NO LOCALSTORAGE
  validaUsuarioCadastrado(usuarioNovo: Usuarios) {
    for (let i = 0; i < this.recuperadoLocalStorage.length; i++) {
      if (usuarioNovo.cpf == this.recuperadoLocalStorage[i].cpf) {
        if (this.isEnabledCpfToEdit) {
          this.recuperadoLocalStorage.splice(i, 1, usuarioNovo); // REMOVE USUARIO ANTIGO E ADC USUARIO ATUALIZADO NA MESMA POSICAO
        } else {
          this.sweetAlert2(usuarioNovo.cpf);
          this.formularioNovoUsuario.reset();
          return true
        }
      }
    }
  }

  // FUNCAO RESPONSAVEL POR DUAS EXECUCOES
  enviaNovoUsuarioLocalStorage(usuarioNovo: Usuarios) {
    !this.isEnabledCpfToEdit ? this.recuperadoLocalStorage.push(usuarioNovo) : ''; //VERIFICA SE CAMPO CPF ESTA LIBERADO, CASO NÃO ESTEJA O FLUXO É REFERENTE A UMA EDIÇÃO DE USUARIO
    localStorage.setItem('usuarios', JSON.stringify(this.recuperadoLocalStorage));
    this.userService.getUsuarios(this.recuperadoLocalStorage)
    this.formularioNovoUsuario.reset();
    !this.isEnabledCpfToEdit ? Toast.fire({ icon: 'success', title: 'Usuário cadastrado com sucesso!' }) :
      Toast.fire({ icon: 'success', title: 'Usuário aterado com sucesso!' }); //SE O FLUXO FOR DE EDIÇÃO, EXIBE MODAL REFERENTE  EDIÇÃO
  }

  // MÉTODO CARREGA DADOS USUARIO SELECIONADO NO FORM PARA EDIÇÃO
  exibirUsuarioEditar(userEdit: any) {
    this.nameEdit = userEdit.name;
    this.cpfEdit = userEdit.cpf;
    this.phoneEdit = userEdit.phone;
    this.emailEdit = userEdit.email;
  }

  msgCpfInvalido() {
    if (!this.userService.validaCpf(this.cpfEdit)) {
      Toast.fire({ icon: 'warning', title: 'Insira um CPF válido' })
    }
  }

  msgTelefoneInvalido() {
    return this.phoneEdit.length < 10
      ? document.getElementById('phone').classList.add('is-invalid')
      : document.getElementById('phone').classList.remove('is-invalid')
  }


  // MODAL ERRO UTILIZANDO sweetAlert2
  sweetAlert2(cpf: any) {
    Swal.fire({
      icon: 'error',
      title: 'Ops...',
      text: `CPF: ${cpf} já está cadastrado.`,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Voltar',
      confirmButtonColor: "#3085d6"
    })
  }

  

}