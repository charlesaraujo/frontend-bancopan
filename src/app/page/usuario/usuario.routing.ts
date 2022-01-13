import { RouterModule } from "@angular/router";
import { UsuarioListComponent } from "./usuario-list/usuario-list.component";

export const USUARIO_ROUTING = RouterModule.forChild([
    {
        path: '',
        component: UsuarioListComponent
    },
]);