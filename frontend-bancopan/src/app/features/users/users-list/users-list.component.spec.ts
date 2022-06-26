import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { UsersItemResponse } from '../contracts/users-item.response';
import { UsersService } from '../services/users.service';

import { UsersListComponent } from './users-list.component';

describe('UsersListComponent', () => {
    let serviceMock: jasmine.SpyObj<UsersService>;
    let component: UsersListComponent;

    const usersList = [
        {
            id: 1,
            cpf: '815.528.854-45',
            email: 'contato@jmarcossouza.com',
            name: 'João Marcos Alencar de Souza',
            phone: '(11) 96880-6402',
        } as UsersItemResponse, {
            id: 2,
            cpf: '815.528.854-45',
            email: 'contato@jmarcossouza.com',
            name: 'João Marcos Alencar de Souza',
            phone: '(11) 96880-6402',
        } as UsersItemResponse,
    ]

    beforeEach(() => {
        serviceMock = jasmine.createSpyObj(['loadUsersList', 'deleteUserLocalStorage']);
        serviceMock.deleteUserLocalStorage.and.callFake(() => {});

        component = new UsersListComponent(serviceMock);
    });

    it('should call ngOnInit and load users list', () => {
        serviceMock.loadUsersList.and.returnValue(of());

        component.ngOnInit();

        expect(serviceMock.loadUsersList).toHaveBeenCalled();
    });

    describe('canEnableButtons', () => {
        it('canEnableButtons should return false', () => {
            expect(component.canEnableButtons({
                cpf: '815.528.854-45',
                email: 'contato@jmarcossouza.com',
                name: 'João Marcos Alencar de Souza',
                phone: '(11) 96880-6402',
            })).toBeFalse();
        });

        it('canEnableButtons should return true', () => {
            expect(component.canEnableButtons({
                id: 1,
                cpf: '815.528.854-45',
                email: 'contato@jmarcossouza.com',
                name: 'João Marcos Alencar de Souza',
                phone: '(11) 96880-6402',
            })).toBeTrue();
        });
    });

    it('should call editUser and prepare for edition', () => {
        component.newEditUserComponent = {
            setForEditUser() { },
            isModalActive: false,
        };

        const spy = spyOn(component.newEditUserComponent, 'setForEditUser');

        component.editUser({
            id: 1,
            cpf: '815.528.854-45',
            email: 'contato@jmarcossouza.com',
            name: 'João Marcos Alencar de Souza',
            phone: '(11) 96880-6402',
        });

        expect(spy).toHaveBeenCalled();
        expect(component.newEditUserComponent.isModalActive).toBeTrue();
    });

    it('should call deleteUser that calls deleteUserLocalStorage of service and reloads itens', () => {
        const spy = spyOn(component, 'loadUsersList').and.callFake(() => {});

        component.deleteUser({
            id: 1,
            cpf: '815.528.854-45',
            email: 'contato@jmarcossouza.com',
            name: 'João Marcos Alencar de Souza',
            phone: '(11) 96880-6402',
        });

        expect(serviceMock.deleteUserLocalStorage).toHaveBeenCalledBefore(spy);
    });
});
