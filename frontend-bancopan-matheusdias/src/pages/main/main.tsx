import React, {useState} from 'react';
import UsersDisplay from "../../components/usersDisplay/usersDisplay";
import ButtonIcon from "../../components/ButtonIcon/buttonIcon";
import {Modal} from "../../components/Modal/Modal";
import './styles.css';

function Main() {
    const [isModalOpen, setModalState] = useState<boolean>(false);

    const toggleModal = () => setModalState(!isModalOpen);

    return (
        <div>
            <h1 className={"main-title"}>Banco Pan</h1>
            <ButtonIcon icon={"sum"} class={"main-bottom"} BeIcon={true} text="Adicionar usuário" function={() => toggleModal()}/>
            <UsersDisplay />
            <Modal
                title={'Cadastrar usuário'}
                isOpen={isModalOpen}
                onClose={toggleModal}
            />
        </div>
    );
}

export default Main;
