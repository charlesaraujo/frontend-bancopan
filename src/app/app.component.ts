import { Component } from '@angular/core';
import { SpinnerService } from './core/services/spinner.service';
import { ControlService } from './core/services/control.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Teste Banco Pan';

  constructor(
    public spinnerHandler: SpinnerService,
    private controlService: ControlService
  ) {
    this.spinnerHandler.showSpinner.subscribe(this.showSpinner.bind(this));
  }

  private showSpinner = (state: boolean): void => {
    if (state) {
      this.controlService.spinnerShow()
    }
    else {
      this.controlService.spinnerHide()
    }
  };


}
