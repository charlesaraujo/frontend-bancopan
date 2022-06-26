import { HttpClient } from "@angular/common/http";
import { of } from "rxjs";
import { UsersItemResponse } from "../contracts/users-item.response";
import { UsersRepository } from "./users.repository";

describe('UsersRepository', () => {
    let httpServiceMock: jasmine.SpyObj<HttpClient>;
    let service: UsersRepository;

    beforeEach(() => {
        httpServiceMock = jasmine.createSpyObj(['get']);
        httpServiceMock.get.and.returnValue(of([
            {
                cpf: '81552885445',
                email: 'contato@jmarcossouza.com',
                name: 'João Marcos Alencar de Souza',
                phone: '(11) 96880-6402',
            }, {
                cpf: '81552885445',
                email: 'contato@jmarcossouza.com',
                name: 'João Marcos Alencar de Souza',
                phone: '(11) 96880-6402',
            }
        ]));
        spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify([
            {
                id: 1,
                cpf: '81552885445',
                email: 'contato@jmarcossouza.com',
                name: 'João Marcos Alencar de Souza',
                phone: '(11) 96880-6402',
            }, {
                id: 2,
                cpf: '81552885445',
                email: 'contato@jmarcossouza.com',
                name: 'João Marcos Alencar de Souza',
                phone: '(11) 96880-6402',
            }
        ]));
        spyOn(localStorage, 'setItem').and.callFake(() => {});

        service = new UsersRepository(httpServiceMock);
    });

    it('should call getUsersList and return data', () => {
        service.getUsersList().subscribe((resp) => {
            expect(resp.length).toEqual(2);
            expect(resp[1].email).toEqual('contato@jmarcossouza.com');
        });
    });

    it('should call createUserOnLocalStorage and add item on localStorage', () => {
        service.createUserOnLocalStorage({
            id: 3,
            cpf: '81552885445',
            email: 'contato@jmarcossouza.com',
            name: 'João Marcos Alencar de Souza',
            phone: '(11) 96880-6402',
        });

        expect(localStorage.getItem).toHaveBeenCalledBefore(localStorage.setItem);
    });

    it('should call saveListOnLocalStorage and call localStorage setItem', () => {
        service.saveListOnLocalStorage([
            {
                id: 1,
                cpf: '81552885445',
                email: 'contato@jmarcossouza.com',
                name: 'João Marcos Alencar de Souza',
                phone: '(11) 96880-6402',
            }, {
                id: 2,
                cpf: '81552885445',
                email: 'contato@jmarcossouza.com',
                name: 'João Marcos Alencar de Souza',
                phone: '(11) 96880-6402',
            }
        ]);

        expect(localStorage.setItem).toHaveBeenCalled();
    })
});