import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioListaComponent } from './usuario/usuario-lista/usuario-lista.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioService } from './usuario/service/usuario-service.service';
import { MatCardModule } from '@angular/material/card';
import { ModalCadastroUsuarioComponent } from './usuario/modal-cadastro-usuario/modal-cadastro-usuario.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { StoreModule } from '@ngrx/store';
import { usuarioReduce } from './usuario/usuario-reduce.reduce';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    UsuarioListaComponent,
    ModalCadastroUsuarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    StoreModule.forRoot({count: usuarioReduce })
  ],
  providers: [
    UsuarioService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
