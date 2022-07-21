import React, {useEffect} from 'react';
import './styles.css';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {getUsers, selectUsers} from "../../features/users/usersRedux";
import User from "../user/user";

function UsersDisplay() {
    const dispatch = useAppDispatch();
    const users = useAppSelector(selectUsers)

    useEffect(() => {
        if(users.length === 0 && !users[0]) {
            dispatch(getUsers())
        }
    }, [])

    return (
        <div className="container">
            {users.map((user) => {
                return <User {...user} />
            })}
        </div>
    );
}

export default UsersDisplay;
