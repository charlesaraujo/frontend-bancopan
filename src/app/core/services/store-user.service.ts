import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Users } from "../interfaces/users.interface";
import { del, edit, getAll, save } from "../store/actions/users.action";
import { UsersModel } from "../store/models/users.model";

@Injectable({
  providedIn: "root",
})
export class StoreUserService {
  public usersStore$: Observable<any>;

  constructor(private store: Store<UsersModel>) {
    this.usersStore$ = store.pipe(select('users'));
  }

  inicialDispatch(users: Users[]) {
    this.store.dispatch(getAll(users));
  }

  editDispatch(user: Users) {
    this.store.dispatch(edit(user));
  }

  deleteDispatch(cpf: string) {
    this.store.dispatch(del(cpf));
  }

  saveDispatch(user: Users) {
    this.store.dispatch(save(user));
  }

}
