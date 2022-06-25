import { Component, OnInit } from '@angular/core';
import { UserModel } from '../models/users-list.model';
import { UsersService } from '../services/users.service';

@Component({
    selector: 'feb-users-list',
    templateUrl: './users-list.component.html',
    styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

    constructor(
        public readonly usersService: UsersService,
    ) { }

    ngOnInit(): void {
        this.loadUsersList();
    }

    public get usersList(): Array<UserModel> | null {
        return this.usersService.usersList;
    }

    private loadUsersList(): void {
        this.usersService.loadUsersList()
            .subscribe();
    }

    public canEnableButtons(user: UserModel): boolean {
        return user.id ? true : false
    }

}
