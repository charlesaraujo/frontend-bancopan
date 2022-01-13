import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from './usuario.model';

@Injectable()
export class UsuarioService {

  private endpoint = 'users';

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(this.getFullUrl())
      .pipe(
        map(lista => {
          const list  = lista || [];
          // Gerar ids para os usuários da API que não possuem
          let contador = 1;
          lista.forEach(usuario => usuario.id = usuario.id || contador++);
          return list;
        })
      );
  }

  getFullUrl(): string {
    return `${environment.apiUrl}/${this.endpoint}`;
  }
}
