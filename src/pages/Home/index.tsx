import { useEffect, useState } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { MdEditNote, MdOutlineCancel } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { api } from '../../services/api';
import { User } from '../../types';
import DeleteUserModal from '../DeleteUserModal';
import UpdateUserModal from '../UpdateUserModal';
import { Container, UserList } from './styles';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    width: '80%',
    transform: 'translate(-50%, -50%)',
  },
};

const Home = (): JSX.Element => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectId, setSelectId] = useState(0);
  const [selectedUser, setSelectedUser] = useState<User>({id: 0,name: '',cpf: '',email: '',phone: ''});
  const [editarModalIsOpen, setIsEditarOpen] = useState(false);
  const [deletarModalIsOpen, setIsDeletarOpen] = useState(false);



  function openModalEditar(user: User) {
    setSelectedUser(user);
    setIsEditarOpen(true);
  }

  function closeModalEditar() {
    setIsEditarOpen(false);
  }

  function openModalDeletar(id: number) {
    setSelectId(id);
    setIsDeletarOpen(true);
  }

  function closeModalDeletar() {
    setIsDeletarOpen(false);
  }



  useEffect(() => {
    async function loadUsers() {
      const response = await api.get<User[]>('users');
      const data = response.data;

      setUsers(data);
    }

    loadUsers();
  }, []);

  return (
    <>
      <Container>
        <Link to="/create-user">
          <span> Adicionar Usuário</span>
          <AiOutlinePlusCircle size={32} color="#FFF" />
        </Link>
      </Container>
      <UserList>
        {users.map(user => (
          <li key={user.email}>
            <span className='header'>
              {user.name}
            </span>
            <div>
              <strong>CPF:</strong>
              <span>{user.cpf}</span>
            </div>
            <div>
              <strong>Email:</strong>
              <span>{user.email}</span>
            </div>
            <div>
              <strong>Telefone:</strong>
              <span>{user.phone}</span>
            </div>

            <button className="edit" onClick={() => openModalEditar(user)}>
              Editar
              <MdEditNote size={16}></MdEditNote>

            </button>
            <button className="cancel" onClick={() => openModalDeletar(user.id)}>
              Deletar
              <MdOutlineCancel size={16}></MdOutlineCancel>

            </button>
          </li>
        ))}

        <UpdateUserModal
          isOpen={editarModalIsOpen}
          onRequestClose={closeModalEditar}
          style={customStyles}
          contentLabel="Editar user Modal"
          user={selectedUser}
        >
        </UpdateUserModal>

        <DeleteUserModal
          isOpen={deletarModalIsOpen}
          onRequestClose={closeModalDeletar}
          contentLabel="Deletar User Modal"
          user_id={selectId}
          style={customStyles}
        >
        </DeleteUserModal>

      </UserList>
    </>

  );
};

export default Home;
