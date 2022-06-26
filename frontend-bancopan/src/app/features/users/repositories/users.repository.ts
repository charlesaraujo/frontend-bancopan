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
        /**
         * When we return 1, the function communicates to sort() that the object b takes precedence in sorting over the object a. Returning -1 would do the opposite.

        The callback function could calculate other properties too, to handle the case where the color is the same, and order by a secondary property as well:
         */
        // .sort((a, b) => (a.color > b.color) ? 1 : -1)
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

}