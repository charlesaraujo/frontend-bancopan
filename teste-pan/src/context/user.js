import React, { useContext, useEffect, useState } from "react";

const url = "https://private-56d1e-charlesaraujodasilva.apiary-mock.com/users";

const AppContext = React.createContext();

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    setLoading(true);
    await fetch(url).then((res) => res.json())
    .then((data) => {
      setUsers(data)
    }).finally(() => {
      setLoading(false);
    })
  } 

  useEffect(() => {
    getUsers();
  }, []);


  return (
    <AppContext.Provider
      value={{
        users,
        loading
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