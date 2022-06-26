import { Component, OnInit, ViewChild } from '@angular/core';
import { UserModel } from '../models/users-list.model';
import { UsersService } from '../services/users.service';

@Component({
    selector: 'feb-users-list',
    templateUrl: './users-list.component.html',
    styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

    @ViewChild('newEditUserComponent', { static: false }) newEditUserComponent: any;

    constructor(
        public readonly usersService: UsersService,
    ) { }

    ngOnInit(): void {
        this.loadUsersList();
    }

    public get usersList(): Array<UserModel> | null {
        return this.usersService.usersList;
    }

    public loadUsersList(): void {
        this.usersService.loadUsersList()
            .subscribe();
    }

    public canEnableButtons(user: UserModel): boolean {
        return user.id ? true : false
    }

    public showNewEditUserModal(): void {
        this.newEditUserComponent.isModalActive = true;
    }

    public editUser(user: UserModel): void {
        this.newEditUserComponent.setForEditUser(user);
        this.showNewEditUserModal();
    }

    public deleteUser(user: UserModel): void {
        this.usersService.deleteUserLocalStorage(user);
        this.loadUsersList();
    }

}
