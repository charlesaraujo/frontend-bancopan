import React from 'react';
import * as S from './styled';
import {EditOutline, TrashOutline} from '@styled-icons/evaicons-outline/';


function UserList() {
  return <S.ListWrapper>
      <S.Card>
          <S.CardContent>
            <S.CardTitle>Usuário</S.CardTitle>
            <S.CardText><strong>Prop: </strong> valor</S.CardText>
            <S.CardText><strong>Prop: </strong> valor</S.CardText>
            <S.CardText><strong>Prop: </strong> valor</S.CardText>
          </S.CardContent>
          <S.CardActions>
              <S.Button secondary><EditOutline size="25" color="#fff"/></S.Button>
              <S.Button><TrashOutline size="25" color="#fff"/></S.Button>

          </S.CardActions>
      </S.Card>
     
  </S.ListWrapper>;
}

export default UserList;