import { createReducer, on } from '@ngrx/store';
import { addListaUsuario, deleteListaUsuario } from './usuario-actions.actions';

export const initialState = [];

export const usuarioReduce = createReducer(
  initialState,
  on(addListaUsuario, (state) => state),
  on(deleteListaUsuario, (state) => state)
);