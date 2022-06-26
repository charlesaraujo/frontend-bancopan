import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersService } from './services/users.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { NewEditUserComponent } from './new-edit-user/new-edit-user.component';



@NgModule({
    declarations: [
        UsersListComponent,
        NewEditUserComponent
    ],
    imports: [
        SharedModule,
    ],
    exports: [
        UsersListComponent,
    ],
    providers: [
        UsersService,
    ]
})
export class UsersModule { }
