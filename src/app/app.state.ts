import { Usuario } from "./page/usuario/usuario.model";

export interface AppState {
    loading: boolean;
    usuarios: ReadonlyArray<Usuario>;
}