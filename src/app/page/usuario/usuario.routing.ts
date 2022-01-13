import { RouterModule } from "@angular/router";
import { UsuarioFormComponent } from "./usuario-form/usuario-form.component";
import { UsuarioListComponent } from "./usuario-list/usuario-list.component";

export const USUARIO_ROUTING = RouterModule.forChild([
    {
        path: '',
        component: UsuarioListComponent
    },
    {
        path: 'novo',
        component: UsuarioFormComponent
    }
]);