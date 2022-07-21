import React from 'react';
import './styles.css';
import {IUsersState} from "../../assets/Interfaces/IUsers";
import ButtonIcon from "../ButtonIcon/buttonIcon";
import {deleteUserLocalStorage} from "../../utils/UsersLocalAndRedux";
import {useAppDispatch} from "../../app/hooks";
import { DeleteUser } from "../../features/users/usersRedux";

interface UsersComponent extends IUsersState {
    class? : string
}

function User(user: UsersComponent) {
    const dispatch = useAppDispatch();

    return (
        <div key={user.name} className={user.class || "user-container"}>
            <h1 className="user-title">{user.name}</h1>
            <div className="user-backgroundBoard"/>
                <div className="user-caracterValue">CPF:
                    <span>
                        {user.phone.slice(0, 3)}.
                        {user.phone.slice(3, 6)}.
                        {user.phone.slice(6, 9)}-
                        {user.phone.slice(9, 11)}
                    </span>
                </div>
                <div className="user-caracterValue">E-mail: <span>{user.email}</span></div>
                <div className="user-caracterValue">Telefone:
                    <span>
                        {"(" + user.phone.slice(0, 2) + ") "}
                        {user.phone.slice(2, 7)}-{user.phone.slice(7, 11)}
                    </span>
                </div>
            <div className={"icons-users"}>
                <ButtonIcon class={"button-edit-Icon"} icon={"edit"} BeIcon={true} function={() => {
                    console.log("a")
                }}/>
                <ButtonIcon icon={"delete"} BeIcon={true} function={() => {
                    console.log("a")
                    deleteUserLocalStorage(user)
                    dispatch((DeleteUser(user)))
                }}/>
            </div>
        </div>
    );
}

export default User;
