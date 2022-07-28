import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(private _snackBar: MatSnackBar) { }

  open(msg: string, duration?: number, action?: string) {
    this._snackBar.open(msg, action, { duration: duration || 7000, panelClass: ['info-snackbar'], verticalPosition: 'top', horizontalPosition: 'right' });
  }

  error(msg: string, duration?: number, action?: string) {
    this._snackBar.open(msg, action, { duration: duration || 2000, panelClass: ['error-snackbar'], verticalPosition: 'top', horizontalPosition: 'right' });
  }

  success(msg: string, duration?: number, action?: string) {
    this._snackBar.open(msg, action, { duration: duration || 2000, panelClass: ['success-snackbar'], verticalPosition: 'top', horizontalPosition: 'right' });
  }

  alert(msg: string, duration?: number, action?: string) {
    this._snackBar.open(msg, action, { duration: duration || 2000, panelClass: ['alert-snackbar'], verticalPosition: 'top', horizontalPosition: 'right' });
  }

}
