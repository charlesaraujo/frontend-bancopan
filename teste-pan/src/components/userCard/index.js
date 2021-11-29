import React from 'react';

import * as S from './styled';
import {EditOutline, TrashOutline} from '@styled-icons/evaicons-outline/';

function UserCard({ user, onEdit, onRemove }) {
  
  
  return <S.Card data-testid="user-card">
  
  <S.CardContent>
    <S.CardTitle>{ user.name }</S.CardTitle>
    <S.CardText><strong>CPF: </strong>{ user.cpf }</S.CardText>
    <S.CardText><strong>E-mail: </strong>{ user.email }</S.CardText>
    <S.CardText><strong>Telefone: </strong>{ user.phone }</S.CardText>
  </S.CardContent>
  <S.CardActions>
      <S.Button
        secondary
        onClick={onEdit}
        data-testid="edit-button"
        ><EditOutline size="25" color="#fff"/></S.Button>
      <S.Button
      onClick={onRemove}
      data-testid="remove-button"
      ><TrashOutline size="25" color="#fff"/></S.Button>
  </S.CardActions>
</S.Card>;
}

export default UserCard;