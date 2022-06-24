import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
    selector: 'feb-users-list',
    templateUrl: './users-list.component.html',
    styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

    constructor(
        private readonly usersService: UsersService,
    ) { }

    ngOnInit(): void {
        this.usersService.getUsersList()
            .subscribe((resp) => {
                console.log(resp);
                
            })
    }

}
