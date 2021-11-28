import React, { useState } from 'react';
import FormModal from '../formModal';
import * as S from './styled';

function Header() {
  const [ showModal, setShowModal ] = useState(false);

  const displayModal = () => {
    setShowModal(true);
  }
  const closeModal = () => {
    setShowModal(false);
  }

  return <S.Wrapper>
      <FormModal showModal={ showModal } user={ null } onClose={ closeModal }/>
      <S.Title>Banco Pan</S.Title>
      <S.Button onClick={displayModal}><S.PlusIcon/>Adicionar Usuário</S.Button>
  </S.Wrapper>;
}

export default Header;