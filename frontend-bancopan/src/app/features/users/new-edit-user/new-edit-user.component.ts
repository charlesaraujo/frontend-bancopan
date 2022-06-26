import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserUtils } from 'src/app/shared/utils/user.utils';
import { UserValidators } from 'src/app/shared/utils/user.validator';

@Component({
    selector: 'feb-new-edit-user',
    templateUrl: './new-edit-user.component.html',
    styleUrls: ['./new-edit-user.component.scss']
})
export class NewEditUserComponent implements OnInit {

    @Input() public isModalActive = false;
    public isEditionMode = false;

    public readonly userForm = new FormGroup({
        id: new FormControl(''),
        cpf: new FormControl('', [Validators.required, UserValidators.isValidCpf]),
        email: new FormControl('', [Validators.required, Validators.email]),
        name: new FormControl('', [Validators.required, Validators.minLength(3)]),
        phone: new FormControl('', [Validators.required, UserValidators.phoneValidator]),
    });

    constructor() { }

    ngOnInit(): void {
    }

    public setForNewUser(): void {
        this.isEditionMode = false;
        this.userForm.reset({
            id: '',
            cpf: '',
            email: '',
            name: '',
            phone: '',
        });
    }

    public closeModal(): void {
        this.setForNewUser();
        this.isModalActive = false;
    }

    public get UserUtils(): typeof UserUtils {
        return UserUtils;
    }

    public teste(): void {
        console.log(this.userForm);
        
    }

}
