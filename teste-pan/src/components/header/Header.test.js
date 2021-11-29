import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { UserProvider } from '../../context/user';
import Header from './';

const customRender = (ui, {providerProps, ...renderOptions}) => {
    return render(
      <UserProvider {...providerProps}>{ui}</UserProvider>,
      renderOptions,
    );
}

describe('Componente: Header', () => {
    const providerProps = {
        addUser: () => {},
        editUser: () => {},
    };
    
    test('Deve conter o texto "Banco Pan" como título', () => {
        customRender(<Header />, {providerProps});
        const headerTitle = screen.getByText("Banco Pan");
        expect(headerTitle).toBeInTheDocument();
    });

    test('Deve conter um botão para adicionar usuário', () => {
        customRender(<Header />, {providerProps})
        const addUserButton = screen.getByRole('button', { name: /adicionar usuário/i });
        expect(addUserButton).toBeInTheDocument();
    });

    test('Deve abrir o modal de cadastro ao clicar em "Adidionar usuário"', () => {
        customRender(<Header />, {providerProps});
        const addUserButton = screen.getByRole('button', { name: /adicionar usuário/i });
        userEvent.click(addUserButton);
        expect(screen.getByTestId('form-modal')).toBeInTheDocument();
    });
});

