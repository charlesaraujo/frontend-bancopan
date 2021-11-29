import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { UserProvider } from '../../context/user';
import FormModal from '../formModal';

const customRender = (ui, {providerProps, ...renderOptions}) => {
    return render(
      <UserProvider {...providerProps}>{ui}</UserProvider>,
      renderOptions,
    );
};

describe('Componente: FormModal', () => {
    const providerProps = {
        addUser: () => {},
        editUser: () => {},
    };
    const user = {
        name: 'name',
        cpf: 'cpf',
        phone: 'phone',
        email: 'email',
    };
    
    test('Deve exibir o título "Cadastrar usuário" quando o usuário estiver nulo', () => {
        customRender(<FormModal showModal={true} user={null}/>, {providerProps})
        const modalTitle = screen.getByRole('heading', { name: /Cadastrar usuário/i });
        expect(modalTitle).toBeInTheDocument();
    });

    test('Deve exibir o título "Editar usuário" quando o usuário não for nulo', () => {
        customRender(<FormModal showModal={true} user={user}/>, {providerProps})
        const modalTitle = screen.getByRole('heading', { name: /Editar usuário/i });
        expect(modalTitle).toBeInTheDocument();
    });

    test('Deve preencher os campos com os dados do usuário, caso não seja nulo', () => {
        customRender(<FormModal showModal={true} user={user}/>, {providerProps})
        const nameInput = screen.getByDisplayValue(/name/i);
        expect(nameInput).toBeInTheDocument();
        const cpfInput = screen.getByDisplayValue(/cpf/i);
        expect(cpfInput).toBeInTheDocument();
        const phoneInput = screen.getByDisplayValue(/phone/i);
        expect(phoneInput).toBeInTheDocument();
        const emailInput = screen.getByDisplayValue(/email/i);
        expect(emailInput).toBeInTheDocument();
    });

    test('Deve exibir erros de validação no formulário', () => {
        const user = {
            name: '',
            cpf: 'cpf',
            phone: 'phone',
            email: 'email',
        }
        customRender(<FormModal showModal={true} user={user}/>, {providerProps});
        const editUserButton = screen.getByRole('button', { name: /editar usuário/i });
        userEvent.click(editUserButton);
        const errorNameMessage = screen.getByText('Nome completo não pode ficar em branco!');
        expect(errorNameMessage).toBeInTheDocument();
    });
});

