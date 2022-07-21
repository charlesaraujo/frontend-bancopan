import React, { useState, useEffect } from 'react';
import {useAppDispatch} from "../../app/hooks";
// @ts-ignore
import './styles.css';
import ButtonIcon from "../ButtonIcon/buttonIcon";
import InputComponent from "../input/input";
import {addUserLocalStorage} from "../../utils/UsersLocalAndRedux";
import {IUsersState} from "../../assets/Interfaces/IUsers";
import {validationInputs} from "../../utils/validationForm";
import { addUser } from "../../features/users/usersRedux";

interface ModalProps {
    title: string;
    isOpen: boolean;
    onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ title, isOpen, onClose }) => {
    const outsideRef = React.useRef(null);
    const dispatch = useAppDispatch();

    const handleCloseOnOverlay = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        if (e.target === outsideRef.current) {
            onClose();
            resetInputs();
        }
    }

    const [isNome, setNome] = useState<string>("");
    const [isEmail, setEmail] = useState<string>("");
    const [isCpf, setCpf] = useState<string>("");
    const [isCell, setCell] = useState<string>("");
    const [isValid, setValid] = useState<boolean>(true);

    useEffect(() => {
        setValid(validationInputs(isNome, isEmail, isCpf, isCell));
    }, [isNome, isEmail, isCpf, isCell])

    function resetInputs() {
        setNome("");
        setEmail("");
        setCpf("");
        setCell("");
        setValid(true);
    }

    const createUser = () => {

        const newUser: IUsersState = {
            name: isNome,
            cpf: isCpf.replace('.', '')
                .replace('.', '')
                .replace('-', ''),
            phone: isCell.replace('(', '')
                .replace(' ', '')
                .replace(')', '')
                .replace('-', ''),
            email: isEmail,
        }

        addUserLocalStorage(newUser)
        dispatch(addUser(newUser))
        onClose()
    }

    return isOpen ? (
        <div className={'modal'}>
            <div
                ref={outsideRef}
                className={'modal-overlay'}
                onClick={handleCloseOnOverlay}
            />
            <div className={'modal-box'}>
                <div className={"line-top"}/>
                <div className={"line-bottom"}/>
                <div data-testid={title} className={'modal-top'}>
                    {title}
                    <ButtonIcon BeIcon={true} function={() => {
                        resetInputs()
                        onClose()
                    }}/>
                </div>
                <div className={'modal-content'}>
                    <div data-testid={"modal-input"} className={"formulario"}>
                        <InputComponent onChange={setNome} id={"nome"} type={"text"} placehouder={"Nome Completo"} required={true}/>
                        <InputComponent onChange={setEmail} id={"email"} type={"email"} placehouder={"E - mail"} required={true}/>
                        <InputComponent onChange={setCpf} id={"cpf"} type={"text"}  minLength={11} placehouder={"CPF"} required={true}/>
                        <InputComponent onChange={setCell} id={"telefone"} type={"text"}  minLength={11} placehouder={"Telefone"} required={true}/>
                        <ButtonIcon disabled={isValid} icon={"delete"} function={createUser} type={"submit"} BeIcon={false} class={"buttom-cadastrar"} text={"Cadastrar usuário"}/>
                    </div>
                </div>
            </div>
        </div>
    ) : null;
};