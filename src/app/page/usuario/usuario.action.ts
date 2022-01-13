import { createAction, props } from "@ngrx/store";
import { Usuario } from "./usuario.model";

export const saveUsuario = createAction(
    '[Usuario Component] Save Usuario',
    props<{ usuario: Usuario }>()
);
export const removeUsuario = createAction(
    '[Usuario Component] Delete Usuario',
    props<{ id: number }>()
);
export const retriviedUsuarioList = createAction(
    '[Usuario List/API] Load Usuarios from API',
    props<{ usuarios: ReadonlyArray<Usuario> }>()
);
export const resetUsuarioList = createAction('[Usuario Component] Reset Usuario');