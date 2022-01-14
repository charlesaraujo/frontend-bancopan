import { createReducer, on } from "@ngrx/store";
import { removeUsuario, retriviedUsuarioList, saveUsuario, } from "./usuario.action";
import { Usuario } from "./usuario.model";

const key = 'usuarios';

export const INITAL_STATE: ReadonlyArray<Usuario> = [];

export const usuarioReducer = createReducer(
    INITAL_STATE,
    on(retriviedUsuarioList, (state, { usuarios }) => {
        const usuariosLocalStorage = JSON.parse(localStorage.getItem(key) || '[]') as ReadonlyArray<Usuario>;
        // Traz da API somente quando não houver nenhum usuário na lista
        if (usuariosLocalStorage.length === 0) {
            localStorage.setItem(key, JSON.stringify(usuarios));
            return usuarios;
        }


        return usuariosLocalStorage;
    }),
    on(removeUsuario, (state, { id }) => {
        let usuariosLocalStorage: ReadonlyArray<Usuario> = JSON.parse(localStorage.getItem(key) || '[]') as Usuario[];
        usuariosLocalStorage = usuariosLocalStorage.filter(usuario => usuario.id !== id);

        localStorage.setItem(key, JSON.stringify(usuariosLocalStorage));

        return usuariosLocalStorage;
    }),
    on(saveUsuario, (state, { usuario }) => {
        let usuariosLocalStorage: ReadonlyArray<Usuario> = JSON.parse(localStorage.getItem(key) || '[]') as Usuario[];
        if (usuario?.id) {
            const index = usuariosLocalStorage.findIndex(u => u.id === usuario.id);
            if (index >= 0) {
                const newState = [...state];
                newState[index] = usuario;
                localStorage.setItem(key, JSON.stringify(newState));
                return newState;
            }
        }
        // Gerar um novo ID
        const id = (usuariosLocalStorage.length || 0) + 1;
        const novoUsuario = { ...usuario, id };

        const newState = [...state, novoUsuario];
        localStorage.setItem(key, JSON.stringify(newState));

        return newState;
    }),
)