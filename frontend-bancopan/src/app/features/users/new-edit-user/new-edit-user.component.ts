import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserUtils } from 'src/app/shared/utils/user.utils';
import { UserValidators } from 'src/app/shared/utils/user.validator';
import { UsersItemRequest } from '../contracts/users-item.request';
import { UserModel } from '../models/users-list.model';
import { UsersService } from '../services/users.service';

@Component({
    selector: 'feb-new-edit-user',
    templateUrl: './new-edit-user.component.html',
    styleUrls: ['./new-edit-user.component.scss']
})
export class NewEditUserComponent {

    @Input() public isModalActive = false;
    @Output() public updateList = new EventEmitter<void>();
    public isEditionMode = false;

    public readonly userForm = new FormGroup({
        id: new FormControl(0),
        cpf: new FormControl('', [Validators.required, UserValidators.isValidCpf]),
        email: new FormControl('', [Validators.required, Validators.email]),
        name: new FormControl('', [Validators.required, Validators.minLength(3)]),
        phone: new FormControl('', [Validators.required, UserValidators.phoneValidator]),
    });

    constructor(
        private readonly usersService: UsersService,
    ) { }

    public setForNewUser(): void {
        this.isEditionMode = false;
        this.userForm.reset({
            id: 0,
            cpf: '',
            email: '',
            name: '',
            phone: '',
        });
    }

    public setForEditUser(user: UserModel): void {
        this.userForm.patchValue({
            id: user.id,
            cpf: user.cpf,
            email: user.email,
            name: user.name,
            phone: user.phone,
        });
        this.isEditionMode = true;
    }

    public closeModal(): void {
        this.setForNewUser();
        this.isModalActive = false;
    }

    public get UserUtils(): typeof UserUtils {
        return UserUtils;
    }

    private markFormAsTouched(): void {
        this.userForm.markAllAsTouched();
        this.userForm.markAsDirty();
        this.userForm.updateValueAndValidity();
    }

    public saveData(): void {
        if (this.userForm.invalid) {
            this.markFormAsTouched();
        } else {
            const userItem = new UsersItemRequest(this.userForm.getRawValue());
            if (this.isEditionMode) {
                this.usersService.saveEditedUserLocalStorage(userItem);
            } else {
                this.usersService.createNewUserLocalStorage(userItem);
            }
            this.updateList.emit();
            this.closeModal();
        }
    }

}
