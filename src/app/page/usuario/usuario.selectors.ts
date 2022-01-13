import { createFeatureSelector } from "@ngrx/store";
import { Usuario } from "./usuario.model";

export const selectUsuarios = createFeatureSelector<ReadonlyArray<Usuario>>('usuarios');