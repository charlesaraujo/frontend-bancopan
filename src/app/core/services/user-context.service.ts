import { Injectable } from "@angular/core";
import { HomeApi } from "../api/home.api";
import { Users } from "../interfaces/users.interface";
import { StoreUserService } from './store-user.service';
@Injectable({
  providedIn: "root",
})
export class UserContextService {
  constructor(private readonly homeApi: HomeApi, private storeUserService: StoreUserService) { }

  public async getDataStorage() {
    const users = sessionStorage.getItem("users") || null;

    if (users && JSON.parse(users).length > 0) {
      return JSON.parse(users);
    }
    else {
      return this.homeApi.getDataUsersAPI()
    }
  }

  public async getInitialStore() {
    const users: any = await this.homeApi.getDataUsersAPI()
    this.storeUserService.inicialDispatch(users)
  }

  public updateDataStorage(users: Users[]) {
    sessionStorage.removeItem('users')
    sessionStorage.setItem("users", JSON.stringify(users));
  }

  public async saveNewUserStorage(user: Users): Promise<boolean> {
    const users = await this.getDataStorage()
    this.storeUserService.saveDispatch(user)

    if (users) {
      users.push(user)
      this.updateDataStorage(users)
      return true;
    }
    else {
      return false;
    }
  }

  public async editUserDataStorage(user: Users): Promise<boolean> {
    const usersStorage: Users[] | null = await this.getDataStorage();
    this.storeUserService.editDispatch(user)

    if (usersStorage) {
      const filterUserIndex = usersStorage.findIndex(
        (content) => content.cpf === user.cpf
      );

      if (filterUserIndex !== -1) {
        usersStorage[filterUserIndex].name = user.name;
        usersStorage[filterUserIndex].phone = user.phone;
        usersStorage[filterUserIndex].email = user.email;
        this.updateDataStorage(usersStorage)
        return true;
      }
    }
    return false;
  }

  public async deleteUserDataStorage(cpf: string): Promise<boolean> {
    const usersStorage: Users[] | null = await this.getDataStorage();
    this.storeUserService.deleteDispatch(cpf)

    if (usersStorage) {
      const findIndex = usersStorage.findIndex(
        (content) => content.cpf === cpf
      );
      usersStorage.splice(findIndex, 1);
      this.updateDataStorage(usersStorage)
      return findIndex !== -1 ? true : false
    }
    else {
      return false
    }
  }
}
