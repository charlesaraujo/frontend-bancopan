import { createAction, props } from '@ngrx/store';
import { Usuario } from '../model/usuario.model';

export const addListaUsuario = createAction('[Usuario Component] AddListaUsuario', props<{listaUsuario: any}>());
export const deleteListaUsuario = createAction('[Usuario Component] DeleteListaUsuario', props<{listaUsuario: Array<Usuario>}>);