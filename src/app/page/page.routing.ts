import { RouterModule, Routes } from "@angular/router";

export const PAGES_ROUTING = RouterModule.forChild([
    {
        path: '',
        redirectTo: 'usuario',
    },
    {
        path: 'usuario',
        loadChildren: () => import('./usuario/usuario.module').then(m => m.UsuarioModule)
    }
]);