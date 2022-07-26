import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { Usuarios } from 'src/model/usuarios';

interface IUser {
  name?: string;
  cpf?: number;
  telefone?: number;
  email?: string;
}

@Injectable({
  providedIn: 'root'
})

export class UsuariosService implements OnInit {
  usuarios = new Array<Usuarios>();
  userDataEdit = new BehaviorSubject(undefined);
  userData = new BehaviorSubject(undefined);
  fluxoEdit = new BehaviorSubject(undefined);

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.usuarios = JSON.parse(localStorage.getItem('usuario2'));
  }

  public getUsuariosNativo(): Observable<Usuarios[]> {

    const url = 'https://private-56d1e-charlesaraujodasilva.apiary-mock.com/users'
    return this.httpClient.get<Usuarios[]>(url);
  }

  public getUsuarios(res: any) {
    this.usuarios = res
    this.userData.next(this.usuarios)
    return this.usuarios;
  }

  getUser(): Observable<[]> {
    return this.userData.asObservable();
  }

  public getUsuarioEdit(res: any) {

    this.userDataEdit.next(res);
  }

  getUserEdit(): Observable<[]> {
    return this.userDataEdit.asObservable();
  }

  formataCelular(telefone: string) {
    telefone = telefone.replace(/\D/g, "");             // Remove o que não é dígito
    telefone = telefone.replace(/^(\d{2})(\d)/g, "($1) $2"); //adc parênteses em volta dos dois primeiros dígitos
    telefone = telefone.replace(/(\d)(\d{4})$/, "$1-$2");    //adc hífen entre o quarto e o quinto dígito
    return telefone;
  }

  formataCpf(cpf: string) {
    cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "\$1.\$2.\$3\-\$4")
    return cpf;
  }

  validaCpf(cpf: string) {
    if (typeof cpf !== "string") return false
    cpf = cpf.replace(/[\s.-]*/igm, '')
    if (
      !cpf ||
      cpf.length != 11 ||
      cpf == "00000000000" ||
      cpf == "11111111111" ||
      cpf == "22222222222" ||
      cpf == "33333333333" ||
      cpf == "44444444444" ||
      cpf == "55555555555" ||
      cpf == "66666666666" ||
      cpf == "77777777777" ||
      cpf == "88888888888" ||
      cpf == "99999999999"
    ) {
      return false
    }
    var soma = 0
    var resto
    for (var i = 1; i <= 9; i++)
      soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i)
    resto = (soma * 10) % 11
    if ((resto == 10) || (resto == 11)) resto = 0
    if (resto != parseInt(cpf.substring(9, 10))) return false
    soma = 0
    for (var i = 1; i <= 10; i++)
      soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i)
    resto = (soma * 10) % 11
    if ((resto == 10) || (resto == 11)) resto = 0
    if (resto != parseInt(cpf.substring(10, 11))) return false
    return true
  }

}
