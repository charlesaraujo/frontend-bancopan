import { createReducer, on } from "@ngrx/store";
import { retriviedUsuarioList } from "./usuario.action";
import { Usuario } from "./usuario.model";

export const INITAL_STATE: ReadonlyArray<Usuario> = [];

export const usuarioReducer = createReducer(
    INITAL_STATE,
    on(retriviedUsuarioList, (state, {usuarios}) => usuarios)
)