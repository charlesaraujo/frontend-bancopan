import { SyntheticEvent, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import Input from "../../components/Input";
import { useUser } from "../../hooks/useUser";
import { Container } from "./styles";

const CreateUser = (): JSX.Element => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setphone] = useState('');
  const [cpf, setCpf] = useState('');
  let history = useHistory();
  const { addUser } = useUser();

  async function handleAddUser(e: SyntheticEvent) {
    e.preventDefault();
    console.log(e);
    if(!validationForm()){
      return;
    }
    
    await addUser({
      id: +cpf,
      name,
      email,
      cpf,
      phone
    });
    toast.success('Usuário Criado com sucesso!')
    history.push('/');
  }

  function validationForm() {
    let result = true;
    if(name===''){
      result = false;
      toast.warning('Nome é obrigatório \n')
    }
    if(email===''){
      result = false;
      toast.warning('Email é obrigatório \n')
    }
    if(cpf===''){
      result = false;
      toast.warning('CPF é obrigatório \n')
    }
    if(phone===''){
      result = false;
      toast.warning('Telefone é obrigatório');
    }
    return result;
  }

  return (
    <Container>
      <header>Cadastra Usuário</header>
      <form>
            <Input 
              name='name' 
              placeholder="Digite o Nome Completo" 
              type="text" 
              minLength={5}
              onChange={(event) => { setName(event.target.value)}}
              required
            />
            <Input 
              name='email' 
              placeholder="Digite o Email" 
              type="email" 
              minLength={5}
              onChange={(event) => { setEmail(event.target.value) }}
            />
            <Input 
              name='cpf' 
              placeholder="Digite o CPF"  
              type="tel"
              maxLength={11}
              onChange={(event) => { setCpf(event.target.value) }}
            />
            <Input
              name='phone'
              placeholder="Digite o Telefone" 
              type="tel"
              maxLength={10}
              onChange={(event) => { setphone(event.target.value) }}
            />

            <div className="actions">
              <Link to="/">voltar</Link>
              <button 
                type="submit"
                onClick={handleAddUser}
              >Salvar</button>
            </div>

      </form>

    </Container>

  );
};

export default CreateUser;
