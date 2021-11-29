import { Container, Content } from "./styles";

import logoImg from "../../assets/pan-logo.svg";

interface HeaderProps {
  onOpenNewUserModal: () => void;
}


export function Header({ onOpenNewUserModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Banco Pan" />
        <button type="button" onClick={onOpenNewUserModal}>
          Cadastrar usuário
        </button>
      </Content>
    </Container>
  );
}
