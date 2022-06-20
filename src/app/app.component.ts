import {Component, OnInit} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {environment} from "../environments/environment";
import {Usuario} from "../models/Usuario";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  usuarios: Usuario[];
  loading: boolean;

  constructor(private http:HttpClient) {

  }

  ngOnInit(): void {

    this.loading = true;

    this.http.get(`${environment.API}/users`).subscribe((usuarios:Usuario[]) => {
      this.usuarios = usuarios;
      this.loading = false;
    })
  }

  abrirModal() {

  }

}
