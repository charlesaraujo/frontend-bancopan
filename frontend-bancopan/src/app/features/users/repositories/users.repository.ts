import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { urls } from 'src/config/urls.config';
import { UsersItemResponse } from '../contracts/users-item.response';
import { usersLocalStorageKey } from 'src/environments/general-variables';
import { UsersItemRequest } from '../contracts/users-item.request';

@Injectable()
export class UsersRepository {

    constructor(private httpClient: HttpClient) { }

    public getUsersList(): Observable<Array<UsersItemResponse>> {
        return this.httpClient.get<Array<UsersItemResponse>>(urls.users);
    }

    public getUsersLocalStorage(): Array<UsersItemResponse> {
        const usersJson = localStorage.getItem(usersLocalStorageKey);
        return usersJson ? JSON.parse(usersJson) : null;
    }

    public createUserOnLocalStorage(user: UsersItemRequest): void {
        const userList = this.getUsersLocalStorage();
        if (userList) {
            userList.push(user);
            localStorage.setItem(usersLocalStorageKey, JSON.stringify(userList));
        } else {
            localStorage.setItem(usersLocalStorageKey, JSON.stringify([user]));
        }
    }

    public saveListOnLocalStorage(usersList: Array<UsersItemResponse>): void {
        localStorage.setItem(usersLocalStorageKey, JSON.stringify(usersList));
    }

}