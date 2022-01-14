import { createAction, props } from "@ngrx/store";
import { Usuario } from "./usuario.model";

export enum UsuarioActionTypes {
    RETRIVIED_LIST = '[Usuario] Retrivied Usuario List',
    REMOVE = '[Usuario] Remove Usuario',
    SAVE = '[Usuario] Save Usuario',
}

export const saveUsuario = createAction(
    UsuarioActionTypes.SAVE,
    props<{ usuario: Usuario }>()
);
export const removeUsuario = createAction(
    UsuarioActionTypes.REMOVE,
    props<{ id: number }>()
);
export const retriviedUsuarioList = createAction(
    UsuarioActionTypes.RETRIVIED_LIST,
    props<{ usuarios: ReadonlyArray<Usuario> }>()
);