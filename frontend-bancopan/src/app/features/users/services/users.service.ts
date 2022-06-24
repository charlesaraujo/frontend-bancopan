import { Injectable } from '@angular/core';
import { UsersRepository } from '../repositories/users.repository';
import { map, Observable, of } from 'rxjs';
import { UsersListModel } from '../models/users-list.model';

@Injectable()
export class UsersService {

    constructor(private readonly usersRepository: UsersRepository) { }

    public getUsersList(): Observable<UsersListModel> {
        return this.usersRepository.getUsersList()
            .pipe(
                map((resp) => {
                    return resp;
                })
            );
    }

}