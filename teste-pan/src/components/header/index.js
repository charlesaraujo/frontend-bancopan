import React from 'react';
import * as S from './styled';

function Header() {
  return <S.Wrapper>
      <S.Title>Banco Pan</S.Title>
      <S.Button><S.PlusIcon/>Adicionar Usuário</S.Button>
  </S.Wrapper>;
}

export default Header;