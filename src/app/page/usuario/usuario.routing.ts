import { RouterModule } from "@angular/router";
import { UsuarioFormComponent } from "./usuario-form/usuario-form.component";
import { UsuarioListComponent } from "./usuario-list/usuario-list.component";

export const USUARIO_ROUTING = RouterModule.forChild([
    {
        path: '',
        children: [
            {
                path: '',
                component: UsuarioListComponent,
            },
            {
                path: 'form/:id',
                component: UsuarioFormComponent
            },
        ],
    },
]);