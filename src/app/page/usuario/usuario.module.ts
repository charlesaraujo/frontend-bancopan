import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { USUARIO_ROUTING } from './usuario.routing';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UsuarioService } from './usuario.service';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UsuarioListComponent,
    UsuarioFormComponent
  ],
  imports: [
    CommonModule,
    USUARIO_ROUTING,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [
    UsuarioService,
  ]
})
export class UsuarioModule { }
