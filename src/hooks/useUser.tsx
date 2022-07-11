import { createContext, ReactNode, useContext, useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../services/api';
import { User } from '../types';

interface UserProviderProps {
    children: ReactNode;
}

interface UserContextData {
    user: User[];
    addUser: ({ name, email, phone, cpf }: User) => Promise<void>;
    removeUser: (id: number) => Promise<void>;
    updateUser: ({ id, name, email, phone, cpf }: User) => void;
}

const UserContext = createContext<UserContextData>({} as UserContextData);

export function UserProvider({ children }: UserProviderProps): JSX.Element {
    const [user, setUser] = useState<User[]>(() => {
        const storagedUser = localStorage.getItem('@bancoPan:user');
        if (storagedUser) {
            return JSON.parse(storagedUser);
        }

        return [];
    });
    const prevUserRef = useRef<User[]>();

    useEffect(() => {
        prevUserRef.current = user;
    }, []);

    const userPreviousValue = prevUserRef.current ?? user;

    useEffect(() => {
        if (userPreviousValue !== user) {
            localStorage.setItem('@bancoPan:user', JSON.stringify(user));
        }
    }, [user, userPreviousValue]);

    const addUser = async ({ name, email, phone, cpf }: User) => {
        console.log('dentro do metodo');
        try {
            console.log('dentro do metodo');

            const upadatedUser = [...user];
            const userExist = upadatedUser.find(user => user.cpf === cpf);

            if (userExist) {
                toast.error('CPF do usuário já cadastrado no sistema');
            }

            const createdUser = await api.post<User>(`/users`, {
                id: +cpf,
                name,
                email,
                phone,
                cpf
            });
            upadatedUser.push({
                id: 323,
                name,
                email,
                phone,
                cpf
            })

            setUser(upadatedUser);
            localStorage.setItem('@bancoPan:user', JSON.stringify(user));

        } catch {
            toast.error('Erro no cadastro do Usuário')
        }

    }

    const removeUser = async (id: number) => {
        try {
            const revoveUser = [...user];
            const data = await api.delete(`/users/${id}`);

            if (data.status === 400) {
                toast.error('Usuário não encontrado no lista')
            }

            const findIndex = revoveUser.findIndex((d) =>  d.cpf === id.toString());
            
            if(findIndex >= 0){
                revoveUser.splice(findIndex,1); 
                setUser(revoveUser);
                localStorage.setItem('@bancoPan:user', JSON.stringify(revoveUser));

              }
            toast.success('Usuário removido com sucesso!');

        } catch {
            toast.error('Erro na remoção do produto');
        }

    }

    const updateUser = async ({ id, name, email, phone, cpf }: User) => {
        try {
            const updatedUser = [...user];

            const existUser: User = await api.get(`/users/${cpf}`);
            await api.put(`/users/${cpf}`, {
                id, name, email, phone, cpf
            });

            if (!existUser) {
                return toast.error('Erro usuário não encontrado!');
            }
            setUser(updatedUser);
            localStorage.setItem('@bancoPan:user', JSON.stringify(updatedUser));


        } catch {
            toast.error('Erro na alteração do usuário!');

        }
    };

    return (
        <UserContext.Provider
            value={{ user, addUser, removeUser, updateUser }}
        >
            {children}
        </UserContext.Provider>
    );
}

export function useUser(): UserContextData {
    const context = useContext(UserContext);
    return context;
}