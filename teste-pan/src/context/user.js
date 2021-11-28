import React, { useContext, useEffect, useState } from "react";

const url = "https://private-56d1e-charlesaraujodasilva.apiary-mock.com/users";

const AppContext = React.createContext();

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    const localUsers = localStorage.getItem('users');
    if(localUsers === null){
      setLoading(true);
      await fetch(url).then((res) => res.json())
      .then((data) => {
        setUsers(data)
        localStorage.setItem('users', JSON.stringify(data));
      }).finally(() => {
        setLoading(false);
      })
    } else {
      setUsers(JSON.parse(localUsers));
    }
  }

  const updateUserList = (newList) => {
    localStorage.setItem('users', JSON.stringify(newList));
    setUsers(newList)
  }

  const getAllUsers = () => JSON.parse(localStorage.getItem('users'));

  const addUser = (user) => {
    const allUsers = getAllUsers();
    allUsers.unshift(user);
    updateUserList(allUsers);
  }

  const removeUser = (userIndex) => {
    const allUsers = getAllUsers();
    allUsers.splice(userIndex, 1);
    updateUserList(allUsers);
  }

  const editUser = (oldUser, newUser) => {
    const allUsers = getAllUsers();
    const userIndex = allUsers.findIndex(e => e.cpf === oldUser.cpf);
    allUsers[userIndex] = newUser;
    updateUserList(allUsers);
  }

  useEffect(() => {
    getUsers();
  }, []);


  return (
    <AppContext.Provider
      value={{
        users,
        loading,
        addUser,
        removeUser,
        editUser
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, UserProvider };