import { Container } from "./styles";


import deleteImg from "../../assets/delete.svg";

import { useUser } from "../../hooks/users";
import { IUser } from "../../hooks/users";

export function InfosTable() {
  const { users, setUsers, usersIsLoading } = useUser();

  function handleDeleteUser(userid: number) {
    if (window.confirm("Deseja mesmo deletar esse usuário?")) {
      let deletedList = users.filter(user => user.id !== userid);
      setUsers(deletedList);
    }
  }

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>CPF</th>
            <th>Email</th>
            <th>Telefone</th>
          </tr>
        </thead>
        <tbody>
          {users && !usersIsLoading ? (
            users.map((user: IUser, index: number) => {
              return (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.cpf}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td className="icon-td">
                    <button onClick={() => handleDeleteUser(user.id)}>
                      <img src={deleteImg} alt="Deletar usuário" />
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            !usersIsLoading ? 
            <tr>
              <td>Nenhum usuário encontrado.</td>
            </tr>
            : 
            <tr>
              <td>Carregando...</td>
            </tr>
          )}
        </tbody>
      </table>
    </Container>
  );
}
