import React, { useState } from 'react';
import { useGlobalContext } from '../../context/user';
import FormModal from '../formModal';
import UserCard from '../userCard';
import * as S from './styled';


function UserList() {
  const [ showModal, setShowModal ] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  const { users } = useGlobalContext();

  const onEdit = (user) => {
    console.log("edit", user);
    setSelectedUser(user);
    setShowModal(true);
  }
  const onRemove = () => {
    console.log("remove");
  }
  const closeModal = (user) => {
    console.log("remove", user);
    setShowModal(false);
  }

  return <S.ListWrapper>
    <FormModal showModal={ showModal } user={ selectedUser } onClose={ closeModal }/>
    {
      users.map((user) => 
        <UserCard key={user.cpf} user={user} onEdit={() => onEdit(user)} onRemove={() => onRemove(user)}></UserCard>
      )
    }
  </S.ListWrapper>;
}

export default UserList; 