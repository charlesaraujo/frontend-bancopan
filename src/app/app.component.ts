import {Component, OnInit} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {environment} from "../environments/environment";
import {Usuario} from "../models/Usuario";
import {MatDialog} from "@angular/material/dialog";
import {JanelaModalComponent} from "../components/janela-modal/janela-modal.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  usuarios: Usuario[];
  loading: boolean;

  constructor(private http:HttpClient,
              public dialog: MatDialog) {

  }

  ngOnInit(): void {

    this.loading = true;

    this.http.get(`${environment.API}/users`).subscribe((usuarios:Usuario[]) => {
      this.usuarios = usuarios;
      this.loading = false;
    })
  }

  abrirModal(): void {
    this.dialog.open(JanelaModalComponent, {
      width: '450px'
    });
  }

}
