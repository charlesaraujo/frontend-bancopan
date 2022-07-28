import { Action } from '@ngrx/store';
import { Users } from '../../interfaces/users.interface';


export enum ActionTypes {
  All = 'ALL',
  Add = 'ADD',
  Del = 'DELETE',
  Edit = 'EDIT'
}

export const getAll = (users: Users[]) => {
  return <Action>{ type: ActionTypes.All, payload: users };
}

export const save = (user: Users) => {
  return <Action>{ type: ActionTypes.Add, payload: user };
}

export const del = (cpf: string) => {
  return <Action>{ type: ActionTypes.Del, payload: cpf };
}

export const edit = (user: Users) => {
  return <Action>{ type: ActionTypes.Edit, payload: user };
}
