import { createAction, props } from "@ngrx/store";

export const setLoader = createAction(
    '[Loader Component] Loading...',
    props<{ loading: boolean }>()
);