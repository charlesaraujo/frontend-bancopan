import React from 'react';
import { Button, Title, Wrapper } from './styled';

// import { Container } from './styles';

function Header() {
  return <Wrapper>
      <Title>Banco Pan</Title>
      <Button>Adicionar Usuário</Button>
  </Wrapper>;
}

export default Header;