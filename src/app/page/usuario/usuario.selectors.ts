import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Usuario } from "./usuario.model";

export const selectUsuarios = createFeatureSelector<ReadonlyArray<Usuario>>('usuarios');

export const selectUsuarioById = (id: number) => createSelector(
    selectUsuarios,
    (usuarios: ReadonlyArray<Usuario>) => usuarios.find(usuario => usuario.id === id)
);
