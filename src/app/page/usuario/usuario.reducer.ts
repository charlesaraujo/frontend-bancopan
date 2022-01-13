import { createReducer, on } from "@ngrx/store";
import { removeUsuario, retriviedUsuarioList, saveUsuario, } from "./usuario.action";
import { Usuario } from "./usuario.model";

export const INITAL_STATE: ReadonlyArray<Usuario> = [];

export const usuarioReducer = createReducer(
    INITAL_STATE,
    on(retriviedUsuarioList, (state, { usuarios }) => {
        // Traz da API somente quando não houver nenhum usuário na lista
        if (state.length === 0) {
            return usuarios;
        }

        return state;
    }),
    on(removeUsuario, (state, { id }) => {
        return state.filter(usuario => usuario.id !== id);
    }),
    on(saveUsuario, (state, { usuario }) => {
        if (usuario?.id) {
            const index = state.findIndex(u => u.id === usuario.id);
            if (index >= 0) {
                const newState = [...state];
                newState[index] = usuario;
                return newState;
            }
        }
        return [...state, usuario];
    }),
)