import { Usuario } from "./page/usuario/usuario.model";

export interface AppState {
    usuarios: ReadonlyArray<Usuario>;
}