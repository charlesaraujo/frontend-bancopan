import { useEffect, useState } from 'react';
import { MdCancel } from 'react-icons/md';
import { useUser } from '../../hooks/useUser';
import { HeaderModal, SelectionButton } from './styles';
import Modal from 'react-modal';
import ReactModal from 'react-modal';


interface DeleteUserPros extends ReactModal.Props {
  user_id: number,
}

const DeleteUserModal = (prop: DeleteUserPros): JSX.Element => {
  const [id, setId] = useState(0);
  const { removeUser } = useUser();

  useEffect(() => {
    setId(prop.user_id)
  }, [prop.user_id]);


  function handleDeletarUser(e: React.SyntheticEvent) {
    e.preventDefault();
    removeUser(id);
  }

  return (
    <Modal
      isOpen={prop.isOpen}
      onAfterOpen={prop.onAfterOpen}
      onRequestClose={prop.onRequestClose}
      style={prop.style}
      contentLabel={prop.contentLabel}>
      <HeaderModal>
        <span>Deletar Usuário</span>
        <span>
          <MdCancel
            color='red'
            onClick={prop.onRequestClose}
            size={16}></MdCancel>
        </span>
      </HeaderModal>

      <form>
        <span>Deseja Realmente deletar esse usuário?</span>

        <SelectionButton>
          <button onClick={prop.onRequestClose}>voltar</button>
          <button onClick={(e)=>{ handleDeletarUser(e)}}>Deletar</button>
        </SelectionButton>
      </form>
    </Modal>
  );
};

export default DeleteUserModal;
