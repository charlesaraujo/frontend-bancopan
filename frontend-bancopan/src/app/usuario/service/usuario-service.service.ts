import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Observable } from 'rxjs';
import { Usuario } from './../../model/usuario.model';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  public listarUsuario(): Observable<Array<Usuario>>{
    return this.http.get<Array<Usuario>>('https://private-56d1e-charlesaraujodasilva.apiary-mock.com/users')
  }
}
