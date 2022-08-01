import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { ReactiveFormsModule } from "@angular/forms";
import { UsuariosService } from 'src/services/usuarios.service';
import { AppComponent } from './app.component';
import { ModalNovoUsuarioComponent } from './modal-novo-usuario/modal-novo-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalNovoUsuarioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxMaskModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [UsuariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
