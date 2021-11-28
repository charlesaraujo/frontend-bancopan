import React, { useContext, useState } from "react";

// const url = "https://private-56d1e-charlesaraujodasilva.apiary-mock.com/users";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <AppContext.Provider
      value={{
        users,
        setUsers,
        loading,
        setLoading
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };