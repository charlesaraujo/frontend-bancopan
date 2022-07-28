import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';


@Injectable({
  providedIn: 'root'
})
export class ControlService {

  constructor(
    private spinner: NgxSpinnerService
  ) { }


  spinnerShow() {
    this.spinner.show()
  }

  spinnerHide() {
    this.spinner.hide()
  }

}
