import { render, screen, waitFor } from '@testing-library/react'
import { AppContext } from '../../context/user';
import UserList from './';

describe('Componente: UserList', () => {
    const users = [{
        name: 'name1',
        cpf: '999.999.999-99',
        phone: '(99) 999999-9999',
        email: 'email1@email.com',
    },
    {
        name: 'name2',
        cpf: '888.888.888-88',
        phone: '(88) 88888-8888',
        email: 'email2@email.com',
    }]
    test('Deve exibir a lista de usuários do Provider', () => {
        render(<AppContext.Provider
            value={{ users }}
          >
              <UserList/>
          </AppContext.Provider>)

        users.forEach((user) => {  
            const nameInput = screen.getByRole('heading', { name: user.name });
            expect(nameInput).toBeInTheDocument();
            const cpfInput = screen.getByText(user.cpf);
            expect(cpfInput).toBeInTheDocument();
            const phoneInput = screen.getByText(user.phone);
            expect(phoneInput).toBeInTheDocument();
            const emailInput = screen.getByText(user.email);
            expect(emailInput).toBeInTheDocument();
        })
    });

    test('Deve exibir uma lista de <UserCard /> com a mesma quantidade de usuários', async () => {
        render(<AppContext.Provider
            value={{ users }}
          >
              <UserList/>
          </AppContext.Provider>)

        const userCards = screen.getAllByTestId('user-card')
        await waitFor(()=>{
            expect(userCards.length).toBe(2);
        })
    });
    
});

