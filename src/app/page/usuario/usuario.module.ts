import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { USUARIO_ROUTING } from './usuario.routing';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UsuarioService } from './usuario.service';



@NgModule({
  declarations: [
    UsuarioListComponent
  ],
  imports: [
    CommonModule,
    USUARIO_ROUTING,
    SharedModule,
  ],
  providers: [
    UsuarioService,
  ]
})
export class UsuarioModule { }
