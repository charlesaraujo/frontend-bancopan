import { Injectable } from '@angular/core';
import { UsersRepository } from '../repositories/users.repository';
import { catchError, delay, map, Observable, throwError } from 'rxjs';
import { UserModel } from '../models/users-list.model';
import { UsersItemRequest } from '../contracts/users-item.request';

@Injectable()
export class UsersService {

    public get usersList(): Array<UserModel> | null {
        return this._usersList;
    }
    private _usersList: Array<UserModel> | null = null;


    constructor(private readonly usersRepository: UsersRepository) { }

    /**
     * Irá carregar a lista de usuários da API e do localStorage e salvar na variável `usersList`
     * @returns O retorno é vazio, os dados serão salvos na variável `usersList` da service
     */
    public loadUsersList(): Observable<void> {
        this._usersList = null;
        return this.usersRepository.getUsersList()
            .pipe(
                map((resp) => {
                    const usersList = this.joinUsersListswithLocalStorageList(resp);
                    this._usersList = usersList.map((item) => new UserModel(item));
                })
            );
    }

    /**
     * Irá unificar a lista de usuários enviada por parâmetro com a lista de usuários do localStorage.
     * @param usersList Lista de usuários da API
     * @returns Lista de usuários da API unificada com a de localStorage
     */
    private joinUsersListswithLocalStorageList(usersList: Array<UserModel>): Array<UserModel> {
        const localStorageUsers = this.usersRepository.getUsersLocalStorage();
        return localStorageUsers && localStorageUsers.length > 0
            ? usersList.concat(localStorageUsers)
            : usersList;
    }

    public getNextId(): number {
        const lastItem = this.usersList![this.usersList!.length - 1];
        return lastItem.id ? (lastItem.id! + 1) : 1;
    }

    public createNewUserLocalStorage(user: UsersItemRequest): void {
        user.id = this.getNextId();
        this.usersRepository.createUserOnLocalStorage(user);
    }

    public saveEditedUserLocalStorage(user: UsersItemRequest): void {
        const localStorageList = this.usersRepository.getUsersLocalStorage();
        const itemIndex = localStorageList.findIndex((item) => item.id === user.id);

        localStorageList[itemIndex] = user;
        this.usersRepository.saveListOnLocalStorage(localStorageList);
    }

}