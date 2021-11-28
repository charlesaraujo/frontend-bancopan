import React from 'react';
import { useGlobalContext } from '../../context/user';
import UserCard from '../userCard';
import * as S from './styled';


function UserList() {
  const { users } = useGlobalContext();
  return <S.ListWrapper>
    {
      users.map((user) => 
        <UserCard key={user.cpf} user={user}></UserCard>
      )
    }
  </S.ListWrapper>;
}

export default UserList;