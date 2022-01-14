import { createReducer, on } from "@ngrx/store";
import { setLoader } from "./loader.action";

export const INITAL_STATE = false;

export const loaderReducer = createReducer(
    INITAL_STATE,
    on(setLoader, (state, { loading }) => loading),
)