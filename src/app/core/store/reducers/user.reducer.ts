import { ActionModel } from "../actions/action.class";
import { ActionTypes } from "../actions/users.action";
import { UsersModel } from "../models/users.model";
import { cloneDeep } from 'lodash';

export const users = new UsersModel();

export function usersReducer(state = users, action: ActionModel): UsersModel {
  switch (action.type) {
    case ActionTypes.Add:
      {
        const addArrayUser = cloneDeep(state.users)
        addArrayUser.push(action.payload);
        return {
          users: [...addArrayUser],
          total: addArrayUser.length
        };
      }

    case ActionTypes.Del:
      {
        const index = state.users.findIndex((content) => content.cpf === action.payload);
        const deleteArrayUser = cloneDeep(state.users)
        deleteArrayUser.splice(index, 1);
        return {
          users: [...deleteArrayUser],
          total: deleteArrayUser.length
        };
      }

    case ActionTypes.All:
      {
        return {
          users: [...action.payload],
          total: action.payload.length
        };
      }

    case ActionTypes.Edit:
      {
        const editArrayUser = cloneDeep(state.users)
        console.log(editArrayUser)
        const filterUserIndex = state.users.findIndex(
          (content) => content.cpf === action.payload.cpf
        );
        if (filterUserIndex !== -1) {
          editArrayUser[filterUserIndex].name = action.payload.name;
          editArrayUser[filterUserIndex].phone = action.payload.phone;
          editArrayUser[filterUserIndex].email = action.payload.email;
        }
        return {
          users: [...editArrayUser],
          total: editArrayUser.length
        };
      }
    default:
      return state;
  }

}

