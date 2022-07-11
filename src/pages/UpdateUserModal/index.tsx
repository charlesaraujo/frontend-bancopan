import { useEffect, useState } from 'react';
import { MdCancel } from 'react-icons/md';
import Modal from 'react-modal';
import { toast } from 'react-toastify';
import Input from '../../components/Input';
import { useUser } from '../../hooks/useUser';
import { User } from '../../types';
import { HeaderModal, SelectionButton } from './styles';

interface EditUserPros extends ReactModal.Props {
    user: User,
}

const UpdateUserModal = (prop: EditUserPros): JSX.Element => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [id, setId] = useState(0);
    const [phone, setPhone] = useState('');
    const { updateUser } = useUser();

    useEffect(() => {
        setId(prop.user.id);
        setName(prop.user.name)
        setEmail(prop.user.email);
        setCpf(prop.user.cpf);
        setPhone(prop.user.phone);
    }, [prop]);

    function handleUpdateUser(e: React.SyntheticEvent) {
        e.preventDefault();
        if (!validationForm()) {
            return;
        }
        updateUser({ id, name, email, phone, cpf });
        toast.success('Alterações realizadas com sucesso')
    }

    function validationForm() {
        let result = true;
        if (name === '') {
            result = false;
            toast.warning('Nome é obrigatório \n')
        }
        if (email === '') {
            result = false;
            toast.warning('Email é obrigatório \n')
        }
        if (phone === '') {
            result = false;
            toast.warning('Telefone é obrigatório');
        }
        return result
    }

    return (
        <Modal
            isOpen={prop.isOpen}
            onAfterOpen={prop.onAfterOpen}
            onRequestClose={prop.onRequestClose}
            style={prop.style}
            contentLabel={prop.contentLabel}
        >
            <HeaderModal>
                <span>Editar Usuário</span>
                <span>
                    <MdCancel
                        color='red'
                        onClick={prop.onRequestClose}
                        size={16}></MdCancel>
                </span>
            </HeaderModal>

            <form>
                <Input value={name} onChange={(event) => { setName(event.target.value) }} name="name" label="Digite o Nome Completo" type="text" />
                <Input value={email} onChange={(event) => { setEmail(event.target.value) }} name="email" label="Digite o Email" type="emial" />
                <Input value={phone} onChange={(event) => { setPhone(event.target.value) }} name="telefone" label="Digite o Telefone" type="text" />

                <SelectionButton>
                    <button onClick={prop.onRequestClose}>voltar</button>
                    <button onClick={handleUpdateUser}>Salvar</button>
                </SelectionButton>
            </form>
        </Modal>
    );
};

export default UpdateUserModal;
