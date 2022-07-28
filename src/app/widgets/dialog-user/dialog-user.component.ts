import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { UserContextService } from '../../core/services/user-context.service';
import { DialogUserData } from '../../core/interfaces/dialog-user.interface';
import { SnackBarService } from '../../core/services/snackbar.service';
import { StoreUserService } from './../../core/services/store-user.service';
import { Users } from '../../core/interfaces/users.interface';

@Component({
  selector: 'app-dialog-user',
  templateUrl: './dialog-user.component.html',
  styleUrls: ['./dialog-user.component.scss']
})
export class DialogUserComponent {

  public userForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<DialogUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogUserData,
    public translate: TranslateService,
    private snackBar: SnackBarService,
    private userContextService: UserContextService,
    private storeService: StoreUserService
  ) {
    if (this.data.isEdition) {
      this.userForm = this.formBuilder.group({
        cpf: [this.data.user?.cpf],
        email: [this.data.user?.email, { validators: [Validators.required, Validators.email] }],
        name: [this.data.user?.name, { validators: [Validators.required, Validators.pattern('^[^-\s][a-zA-ZÀ-ú ]*')] }],
        phone: [this.data.user?.phone, { validators: [Validators.required, Validators.pattern('[0-9]+$')] }],
      });
    }
    else {
      this.userForm = this.formBuilder.group({
        cpf: [null, { validators: [Validators.minLength(11)] }],
        email: [null, { validators: [Validators.required, Validators.email] }],
        name: [null, { validators: [Validators.required, Validators.pattern('^[^-\s][a-zA-ZÀ-ú ]*')] }],
        phone: [null, { validators: [Validators.required, Validators.minLength(11)] }]
      });
    }
  }

  async saveOrEditUser() {
    if (this.data.isEdition) {
      const edit = await this.userContextService.editUserDataStorage(this.userForm.getRawValue())

      if (edit) {
        this.snackBar.success(this.translate.instant('COMMON.MESSAGES.EDIT_SUCESS'), 5000)
        this.updateTableuser()
      }
      else {
        this.snackBar.error(this.translate.instant('COMMON.MESSAGES.EDIT_ERROR'), 5000)
      }
    }
    else {
      const user: Users = {
        name: this.userForm.value.name,
        cpf: this.userForm.value.cpf,
        phone: this.userForm.value.phone,
        email: this.userForm.value.email
      }
      const save = await this.userContextService.saveNewUserStorage(user)

      if (save) {
        this.snackBar.success(this.translate.instant('COMMON.MESSAGES.ADD_SUCESS'), 5000)
        this.updateTableuser()
      }
      else {
        this.snackBar.error(this.translate.instant('COMMON.MESSAGES.EDIT_ERROR'), 5000)
      }
    }
  }

  updateTableuser() {
    this.dialogRef.close(true);
  }

}
