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

  const addUser = (user) => {
    const localUsers = localStorage.getItem('users');
    const allUsers = JSON.parse(localUsers);
    allUsers.unshift(user);
    localStorage.setItem('users', JSON.stringify(allUsers));
    setUsers(allUsers)
  }

  const removeUser = (userIndex) => {
    const localUsers = localStorage.getItem('users');
    const allUsers = JSON.parse(localUsers);
    allUsers.splice(userIndex, 1);
    localStorage.setItem('users', JSON.stringify(allUsers));
    setUsers(allUsers)
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
        removeUser
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