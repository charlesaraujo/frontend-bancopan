import { render, screen } from '@testing-library/react'
import UserCard from './';

describe('Componente: UserCard', () => {
    const user = {
        name: 'name',
        cpf: '99999999999',
        phone: '999999999999',
        email: 'email@email.com',
    };
    
    test('Deve conter os dados do usuário', () => {
        render(<UserCard user={user}></UserCard>);
        const nameInput = screen.getByRole('heading', { name: /name/i });
        expect(nameInput).toBeInTheDocument();
        const cpfInput = screen.getByText("99999999999");
        expect(cpfInput).toBeInTheDocument();
        const phoneInput = screen.getByText("99999999999");
        expect(phoneInput).toBeInTheDocument();
        const emailInput = screen.getByText("email@email.com");
        expect(emailInput).toBeInTheDocument();
    });

    test('Deve conter um botão para editar o usuário', () => {
        render(<UserCard user={user}></UserCard>);
        const editUserButton = screen.getByTestId('edit-button');
        expect(editUserButton).toBeInTheDocument();
    });

    test('Deve conter um botão para remover o usuário', () => {
        render(<UserCard user={user}></UserCard>);
        const removeUserButton = screen.getByTestId('remove-button');
        expect(removeUserButton).toBeInTheDocument();
    });
    
});

