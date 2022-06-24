import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { urls } from 'src/config/urls.config';
import { UsersListModel } from '../models/users-list.model';

@Injectable()
export class UsersRepository {

    constructor(private httpClient: HttpClient) { }

    public getUsersList(): Observable<UsersListModel> {
        return this.httpClient.get<UsersListModel>(urls.users);
    }

}