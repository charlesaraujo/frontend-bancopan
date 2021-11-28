import React, { Fragment, useEffect, useState, } from 'react';

import  * as S from './styled';
import { CloseOutline } from '@styled-icons/evaicons-outline/';

function FormModal({ showModal, onClose, user }) {
    const [ formUser, setFormUser ] = useState({
        name: '',
        cpf: '',
        email: '',
        phone: ''
    })

    const [formErrorMsg, setFormErrorMsg] = useState('')

    const valueInput = e => setFormUser({ ...formUser, [e.target.name] : e.target.value })

    const validate = () => {
        if(!formUser.name) return setFormErrorMsg('Nome completo não pode ficar em branco!');
        if(!formUser.email) return setFormErrorMsg('Email não pode ficar em branco!');
        if(!formUser.cpf) return setFormErrorMsg('CPF não pode ficar em branco!');
        if(!formUser.phone) return setFormErrorMsg('Telefone não pode ficar em branco!');
        if(!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(formUser.email)) return setFormErrorMsg('Insira um edereço de E-mail válido!');

        setFormErrorMsg('');
        return true;
    }

    const saveUser = (e) => {
        e.preventDefault();
        validate();
        
    }

    useEffect(() => {
        console.log(user)
        if(user != null) {
            setFormUser(user);
        }
    }, [user]);  

  return <Fragment>
   {
       showModal && <S.ModalWrapper>
            <S.Modal onSubmit={saveUser}>
                <S.ModalHeader>
                    <S.ModalTitle>{ user ? 'Editar usuário' : 'Cadastrar usuário' }</S.ModalTitle>
                    <S.ModalClose onClick={ onClose }><CloseOutline size="30" color="#fff"/></S.ModalClose>
                </S.ModalHeader>
                <S.ModalInputWrapper>
                    <S.ModalInput onChange={valueInput} tabIndex="0" value={formUser.name || ""} type="text" name="name" placeholder="Nome completo (Sem abreviações)"></S.ModalInput>
                    <S.ModalInput onChange={valueInput} tabIndex="0" value={formUser.email || ""} type="email" name="email" placeholder="Email"></S.ModalInput>
                    <S.ModalInput onChange={valueInput} tabIndex="0" value={formUser.cpf || ""} type="text" name="cpf" placeholder="CPF"></S.ModalInput>
                    <S.ModalInput onChange={valueInput} tabIndex="0" value={formUser.phone || ""} type="tel" name="phone" placeholder="Telefone"></S.ModalInput>
                    { formErrorMsg && <S.InputError>{ formErrorMsg }</S.InputError>}
                </S.ModalInputWrapper>
                <S.ModalFooter>
                    <S.ModalButton tabIndex="0" type="submit">Cadastrar usuário</S.ModalButton>
                </S.ModalFooter>
            </S.Modal>
        </S.ModalWrapper>
   }
  </Fragment>;
}

export default FormModal;