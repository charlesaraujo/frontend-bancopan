import React from 'react';

import * as S from './styled';
import {EditOutline, TrashOutline} from '@styled-icons/evaicons-outline/';

function UserCard({ user }) {
  return <S.Card>
  <S.CardContent>
    <S.CardTitle>{ user.name }</S.CardTitle>
    <S.CardText><strong>Prop: </strong>{ user.cpf }</S.CardText>
    <S.CardText><strong>Prop: </strong>{ user.email }</S.CardText>
    <S.CardText><strong>Prop: </strong>{ user.phone }</S.CardText>
  </S.CardContent>
  <S.CardActions>
      <S.Button secondary><EditOutline size="25" color="#fff"/></S.Button>
      <S.Button><TrashOutline size="25" color="#fff"/></S.Button>
  </S.CardActions>
</S.Card>;
}

export default UserCard;