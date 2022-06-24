import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './features/users/users-list/users-list.component';

const MAIN_ROUTES: Routes = [
    { path: '', redirectTo: 'users', pathMatch: 'full' },
    { path: 'users', component: UsersListComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(MAIN_ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
