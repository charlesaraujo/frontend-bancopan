import React from 'react';

import  * as S from './styled';

function FormModal() {
  return <S.ModalWrapper show={true}>
      <S.Modal>
          <S.ModalHeader>
              <S.ModalTitle>Cadastrar usuário</S.ModalTitle>
              <S.ModalClose>X</S.ModalClose>
          </S.ModalHeader>
          <S.ModalInputWrapper>
              <S.ModalInput placeholder="Input"></S.ModalInput>
              <S.InputError>Erro</S.InputError>
              <S.ModalInput placeholder="Input"></S.ModalInput>
              <S.InputError>Erro</S.InputError>
              <S.ModalInput placeholder="Input"></S.ModalInput>
              <S.InputError>Erro</S.InputError>
              <S.ModalInput placeholder="Input"></S.ModalInput>
              <S.InputError>Erro</S.InputError>
          </S.ModalInputWrapper>
          <S.ModalFooter>
              <S.ModalButton>Cadastrar usuário</S.ModalButton>
          </S.ModalFooter>
      </S.Modal>
  </S.ModalWrapper>;
}

export default FormModal;