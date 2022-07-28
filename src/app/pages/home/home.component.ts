import { Component, OnInit } from '@angular/core';
import { SnackBarService } from '../../core/services/snackbar.service';
import { Users } from '../../core/interfaces/users.interface';
import { UserContextService } from './../../core/services/user-context.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { DialogConfirmComponent } from '../../widgets/dialog-confirm/dialog-confirm.component';
import { DialogUserComponent } from '../../widgets/dialog-user/dialog-user.component';
import { DialogService } from '../../core/services/dialog.service';
import { StoreUserService } from '../../core/services/store-user.service';
import { ControlService } from '../../core/services/control.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public users: Users[] = []
  public isRedux: boolean = true

  constructor(
    private userContextService: UserContextService,
    private snackBar: SnackBarService,
    public dialog: MatDialog,
    public translate: TranslateService,
    public dialogService: DialogService,
    private storeService: StoreUserService,
    private controlService: ControlService
  ) { }

  ngOnInit() {
    this.getData();
    this.userContextService.getInitialStore();
    this.logRedux();
  }

  public async getData(): Promise<void> {
    this.controlService.spinnerShow()
    this.users = await this.userContextService.getDataStorage()
    this.controlService.spinnerHide()
  }

  public logRedux() {
    this.storeService.usersStore$.subscribe(result => {
      console.log('Redux: ', result)
    })
  }

  public crudUser(action: 'edit' | 'new', user?: Users): void {
    if (action === 'edit') {
      const dialogRef = this.dialog.open(DialogUserComponent, {
        width: this.dialogService.getWitdhDialog('large'),
        data: {
          isEdition: true,
          user: user
        }
      });
      this.dialogRefClosed(dialogRef)
    }
    else {
      const dialogRef = this.dialog.open(DialogUserComponent, {
        width: this.dialogService.getWitdhDialog('large'),
        data: {
          isEdition: false
        }
      });
      this.dialogRefClosed(dialogRef)
    }
  }

  private dialogRefClosed(dialogRef: MatDialogRef<DialogUserComponent, any>) {
    dialogRef.afterClosed().subscribe((confirm: boolean) => {
      if (confirm) {
        this.getData()
      }
    });
  }

  public deleteuser(cpf: string) {
    const dialogRef = this.dialog.open(DialogConfirmComponent, {
      width: this.dialogService.getWitdhDialog('medium'),
      data: {
        title: this.translate.instant('DIALOG_CONFIRM_DELETE.TITLE'),
        message: this.translate.instant('DIALOG_CONFIRM_DELETE.MESSAGE', { cpf })
      }
    });

    dialogRef.afterClosed().subscribe(async (confirm: boolean) => {
      if (confirm) {
        const del = await this.userContextService.deleteUserDataStorage(cpf)

        if (del) {
          this.getData()
          this.snackBar.success(this.translate.instant('COMMON.MESSAGES.DEL_SUCESS'), 7000)
        }
        else {
          this.snackBar.error(this.translate.instant('COMMON.MESSAGES.DEL_ERROR'), 7000)
        }
      }
    });
  }

}
