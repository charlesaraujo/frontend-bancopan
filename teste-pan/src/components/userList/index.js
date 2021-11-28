import React, { useState } from 'react';
import { useGlobalContext } from '../../context/user';
import FormModal from '../formModal';
import UserCard from '../userCard';
import * as S from './styled';


function UserList() {
  const [ showModal, setShowModal ] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  const { users, removeUser } = useGlobalContext();

  const onEdit = (user) => {
    console.log("edit", user);
    setSelectedUser(user);
    setShowModal(true);
  }
  const onRemove = (userIndex) => {
    removeUser(userIndex);
    setShowModal(false);
  }
  const closeModal = () => {
    setShowModal(false);
  }

  return <S.ListWrapper>
    <FormModal showModal={ showModal } user={ selectedUser } onClose={ closeModal }/>
    {
      users.map((user, index) => 
        <UserCard key={index} user={user} onEdit={() => onEdit(user)} onRemove={() => onRemove(index)}></UserCard>
      )
    }
  </S.ListWrapper>;
}

export default UserList; 