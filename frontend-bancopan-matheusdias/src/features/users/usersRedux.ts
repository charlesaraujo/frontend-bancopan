import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import {endPoints} from "../../config/endPoints";
import {IUsersState} from "../../assets/Interfaces/IUsers";
import {UsersLocalAndRedux} from "../../utils/UsersLocalAndRedux"

export interface UsersState {
    value: IUsersState[] | [];
    status: 'complete' | 'loading' | 'failed';
}

const initialState: UsersState = {
    value: [],
    status: 'loading',
};

export const getUsers = createAsyncThunk(
    'users/get',
    async () => {
        return await fetch(endPoints.GET_USERS).then((res) => {
            return res.json()
        })
    }
);

export const usersReducer = createSlice({
    name: 'users',
    initialState,
    reducers: {
        // actions
        changeAllUsers: (state, action) => {
            state.value = action.payload
        },
        addUser: (state, action) => {
            state.value = [...state.value, action.payload ]
        },
        DeleteUser: (state, action) => {
            state.value = state.value.filter((user:IUsersState) => user.name !== action.payload.name)
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(getUsers.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getUsers.fulfilled, (state, action) => {
                state.status = 'complete';
                state.value = UsersLocalAndRedux(action.payload);
            })
            .addCase(getUsers.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export const { changeAllUsers, addUser, DeleteUser } = usersReducer.actions;

export const selectUsers = (state: RootState) => state.users.value;

export default usersReducer.reducer;
