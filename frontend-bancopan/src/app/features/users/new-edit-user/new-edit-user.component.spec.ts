import { UserModel } from '../models/users-list.model';
import { UsersService } from '../services/users.service';

import { NewEditUserComponent } from './new-edit-user.component';

describe('NewEditUserComponent', () => {
    let serviceMock: jasmine.SpyObj<UsersService>;
    let component: NewEditUserComponent;

    beforeEach(() => {
        serviceMock = jasmine.createSpyObj(['saveEditedUserLocalStorage', 'createNewUserLocalStorage']);
        serviceMock.saveEditedUserLocalStorage.and.callFake(() => {});
        serviceMock.createNewUserLocalStorage.and.callFake(() => {});

        component = new NewEditUserComponent(serviceMock);
    });

    it('should call setForNewUser and reset form', () => {
        component.userForm.patchValue({
            id: 40,
            name: 'João Marcos',
        });

        expect(component.userForm.getRawValue().id).toEqual(40);
        expect(component.userForm.getRawValue().name).toEqual('João Marcos');

        component.setForNewUser();

        expect(component.isEditionMode).toBeFalse();
        expect(component.userForm.getRawValue().id).toEqual(0);
        expect(component.userForm.getRawValue().name).toEqual('');
    });

    it('should call setForEditUser and set component for edition', () => {
        const model = new UserModel({
            id: 1,
            cpf: '81552885445',
            email: 'contato@jmarcossouza.com',
            name: 'João Marcos Alencar de Souza',
            phone: '(11) 96880-6402',
        });

        component.setForEditUser(model);

        expect(component.isEditionMode).toBeTrue();
        expect(component.userForm.getRawValue().id).toEqual(1);
        expect(component.userForm.getRawValue().name).toEqual('João Marcos Alencar de Souza');
    });

    it('should call closeModal and call setForNewUser and set modal viewer as false', () => {
        const setForNewUserSpy = spyOn(component, 'setForNewUser').and.callFake(() => {});
        component.isModalActive = true;

        component.closeModal();

        expect(component.isModalActive).toBeFalse();
        expect(setForNewUserSpy).toHaveBeenCalled();
    });

    describe('saveData', () => {
        it('should call saveData and mark form as dirty because it was invalid', () => {
            const closeModalSpy = spyOn(component, 'closeModal').and.callFake(() => {});

            component.saveData();

            expect(component.userForm.get('name')?.touched).toBeTrue();
            expect(closeModalSpy).not.toHaveBeenCalled();
        });

        it('should call saveData and mark form as dirty because it was invalid', () => {
            const closeModalSpy = spyOn(component, 'closeModal').and.callFake(() => {});
            const model = new UserModel({
                id: 1,
                cpf: '81552885445',
                email: 'contato@jmarcossouza.com',
                name: 'João Marcos Alencar de Souza',
                phone: '(11) 96880-6402',
            });
            component.setForEditUser(model);

            component.saveData();

            expect(closeModalSpy).toHaveBeenCalled();
            expect(serviceMock.saveEditedUserLocalStorage).toHaveBeenCalled();
        });

        it('should call saveData and mark form as dirty because it was invalid', () => {
            const closeModalSpy = spyOn(component, 'closeModal').and.callFake(() => {});
            component.userForm.patchValue({
                id: 1,
                cpf: '81552885445',
                email: 'contato@jmarcossouza.com',
                name: 'João Marcos Alencar de Souza',
                phone: '(11) 96880-6402',
            });
            component.userForm.updateValueAndValidity();

            component.saveData();

            expect(closeModalSpy).toHaveBeenCalled();
            expect(serviceMock.createNewUserLocalStorage).toHaveBeenCalled();
        });
    })
});
