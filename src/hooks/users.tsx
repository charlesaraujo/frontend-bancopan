import {
  SetStateAction,
  createContext,
  useState,
  useContext,
  useEffect,
} from "react";

export type IUser = {
  id: number;
  name: string;
  cpf: string;
  email: string;
  phone: string;
};

interface UserContextData {
  users: IUser[];
  usersIsLoading: boolean;
  setUsers: (props: SetStateAction<IUser[]>) => void;
}

const UserContext = createContext({} as UserContextData);

const UserProvider: React.FC = ({ children }) => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [usersIsLoading, setUsersIsLoading] = useState(true);

  useEffect(() => {
    console.log("rodou useeffect", users);
    if(users.length !== 0) {
      localStorage.setItem("listaUsers", JSON.stringify(users));
    } else if(users.length === 0 && localStorage.getItem("firstAccess")) {
      localStorage.setItem("listaUsers", JSON.stringify(users));
    }
    // Simulando atraso na requisição
    setTimeout(() => {
      setUsersIsLoading(false);
    }, Math.floor(Math.random() * (1500 - 1000) + 1000));
  }, [users]);

  function getUsers() {
    if (
      localStorage.getItem("listaUsers") !== "[]" &&
      localStorage.getItem("listaUsers") &&
      localStorage.getItem("firstAccess")
    ) {
      setUsers(JSON.parse(localStorage.getItem("listaUsers") || "[]"));
    } else {
      if(!localStorage.getItem("firstAccess")) {
        setUsers([
            {
              "id": Math.floor(Math.random() * (1000000 - 1) + 1),
              "name": "My name 1",
              "cpf": "04080757247",
              "phone": "11987654321",
              "email": "myemail1@test.com.br"
            },
            {
              "id": Math.floor(Math.random() * (1000000 - 1) + 1),
              "name": "My name 2",
              "cpf": "77797584192",
              "phone": "11987654321",
              "email": "myemail2@test.com.br"
            },
            {
              "id": Math.floor(Math.random() * (1000000 - 1) + 1),
              "name": "My name 3",
              "cpf": "45486737688",
              "phone": "11987654321",
              "email": "myemail3@test.com.br"
            }
          ]);
        localStorage.setItem("firstAccess", "true");
      }
    }
  }

  document.addEventListener("DOMContentLoaded", function(event) {
    getUsers();
  });

  // Requisição da api
  // api.get<IUser[]>("/users").then((response) => {
  //   setUsers(response.data);
  //   setUsersIsLoading(false);
  // });

  return (
    <UserContext.Provider
      value={{
        users,
        setUsers,
        usersIsLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

function useUser(): UserContextData {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser must be used within an UserProvider");
  }

  return context;
}

export { UserProvider, useUser };
