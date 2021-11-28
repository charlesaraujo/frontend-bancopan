import React, { Fragment } from 'react';

import  * as S from './styled';
import { CloseOutline } from '@styled-icons/evaicons-outline/';

function FormModal({ showModal, onClose }) {

  return <Fragment>
   {
       showModal && <S.ModalWrapper>
            <S.Modal>
                <S.ModalHeader>
                    <S.ModalTitle>Cadastrar usuário</S.ModalTitle>
                    <S.ModalClose onClick={onClose}><CloseOutline size="30" color="#fff"/></S.ModalClose>
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
        </S.ModalWrapper>
   }
  </Fragment>;
}

export default FormModal;