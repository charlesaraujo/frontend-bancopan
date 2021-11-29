import { FormEvent, useState } from "react";
import Modal from "react-modal";

import closeImg from "../../assets/close.svg";

import { Container } from "./styles";

import { useUser } from "../../hooks/users";
import toast from "react-hot-toast";
interface NewUserModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewUserModal({ isOpen, onRequestClose }: NewUserModalProps) {
  const { users, setUsers } = useUser();
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  function handleCreateNewUser(event: FormEvent) {
    event.preventDefault();
  }

  function validateForm() {
    if (name && cpf && email && phone) {
      setUsers([
        ...users,
        {
          id: Math.floor(Math.random() * (1000000 - 1) + 1),
          name,
          cpf,
          email,
          phone,
        },
      ]);
      onRequestClose();
    } else {
      toast.error("Está faltando algumas informações.");
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar Modal" />
      </button>

      <Container onSubmit={handleCreateNewUser}>
        <h2>Cadastrar usuário</h2>
        <input
          placeholder="Nome"
          onChange={(event) => setName(event.target.value)}
        />
        <input
          placeholder="CPF"
          type="text"
          onChange={(event) => setCpf(event.target.value)}
        />
        <input
          placeholder="Email"
          type="email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          placeholder="Telefone"
          type="text"
          onChange={(event) => setPhone(event.target.value)}
        />

        <button type="submit" onClick={validateForm}>
          Cadastrar
        </button>
      </Container>
    </Modal>
  );
}
